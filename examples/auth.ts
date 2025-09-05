/**
 * Authentication Helper Module
 * 
 * This helper module handles authentication for all SDK examples, supporting both
 * cloud (OAuth2) and on-premises (username/password) deployments. It automatically
 * detects the deployment type, loads environment variables, validates credentials,
 * and provides authenticated SDK client instances.
 * 
 * Used by: Example files that that can run on cloud or on-premises
 */

import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { CriblControlPlane } from 'cribl-control-plane';

const envPath = path.resolve(process.cwd(), '.env');
const sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const domain = "cribl.cloud";

type OnpremConfiguration = {
  serverURL: string;
  username: string;
  password: string;
}

type CloudConfiguration = {
  orgId: string;
  clientID: string;
  clientSecret: string;
  workspaceName: string;
}

// Resolve .evn path
if (!fs.existsSync(envPath)) {
  throw new Error(`No .env file found in current directory: ${envPath}`);
}

// Load .env file
dotenv.config({
  path: envPath,
  override: false, // System env vars take precedence
});

const isOnprem = process.env.DEPLOYMENT_ENV === 'onprem';

let configuration;
if (isOnprem) {
  configuration = getConfiguration<OnpremConfiguration>(isOnprem);
} else {
  configuration = getConfiguration<CloudConfiguration>(isOnprem);
}

export const baseUrl = isOnprem
  ? `${configuration.serverURL}/api/v1`
  : `https://${configuration.workspaceName}-${configuration.orgId}.${domain}/api/v1`;

/**
 * Factory function that creates an authenticated Cribl Control Plane client
 * Automatically detects deployment type and uses appropriate authentication method
 * @returns Promise<CriblControlPlane> Authenticated SDK client instance
 */
export async function createCriblClient(): Promise<CriblControlPlane> {
  const criblAuth = isOnprem ? new AuthOnprem(configuration) : new AuthCloud(configuration);
  return await criblAuth.getClient();
}

/**
 * Validates and returns configuration based on deployment type
 * @param isOnprem Whether this is an on-premises deployment
 * @returns Configuration object with required credentials
 */
function getConfiguration<T>(isOnprem: boolean): T {
  if (isOnprem) {
    if (!process.env.ONPREM_SERVER_URL) throw new Error('ONPREM_SERVER_URL is required for on-premises deployment');
    if (!process.env.ONPREM_USERNAME) throw new Error('ONPREM_USERNAME is required for on-premises deployment');
    if (!process.env.ONPREM_PASSWORD) throw new Error('ONPREM_PASSWORD is required for on-premises deployment');
    return {
      serverURL: process.env.ONPREM_SERVER_URL,
      username: process.env.ONPREM_USERNAME,
      password: process.env.ONPREM_PASSWORD,
    } as T;
  } else {
    if (!process.env.ORG_ID) throw new Error('ORG_ID is required for cloud deployment');
    if (!process.env.CLIENT_ID) throw new Error('CLIENT_ID is required for cloud deployment');
    if (!process.env.CLIENT_SECRET) throw new Error('CLIENT_SECRET is required for cloud deployment');
    if (!process.env.WORKSPACE_NAME) throw new Error('WORKSPACE_NAME is required for cloud deployment');
    return {
      orgId: process.env.ORG_ID,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      workspaceName: process.env.WORKSPACE_NAME,
    } as T
  };
}

/**
 * Common interface for authentication providers
 */
interface ICriblAuth {
  /** Returns an authenticated CriblControlPlane client instance */
  getClient(): Promise<CriblControlPlane>;
}

/**
 * On-premises authentication provider using username/password credentials
 * Handles token retrieval and client creation with retry logic for rate limits
 */
export class AuthOnprem implements ICriblAuth {
  private client: CriblControlPlane;
  private readonly username: string;
  private readonly password: string;
  private readonly baseUrl: string;
  private attempts: number = 0;
  constructor({ serverURL, username, password }: OnpremConfiguration) {
    this.username = username;
    this.password = password;
    this.baseUrl = `${serverURL}/api/v1`;
  }

  public async getClient(): Promise<CriblControlPlane> {
    if (this.client) return this.client;
    const tokenGetter = new CriblControlPlane({ serverURL: this.baseUrl });
    try {
      const { token } = await tokenGetter.auth.tokens.get({
        username: this.username,
        password: this.password,
      });
      this.client = new CriblControlPlane({ serverURL: this.baseUrl, security: { bearerAuth: token } });
      return this.client;
    } catch (error) {
      if (error.statusCode === 429 && this.attempts < 10) {
        console.log(`⚠️ Rate limit exceeded, retrying...`);
        this.attempts++;
        await sleep(1000);
        return await this.getClient();
      }
      if (error.statusCode === 401) {
        throw new Error(`Failed to authenticate with on-premises server: ${error}}`);
      }
      throw new Error(`Failed to authenticate with on-premises server: ${error}`);
    }
  }
}

/**
 * Cloud authentication provider using OAuth2 client credentials flow
 * Automatically handles token exchange and refresh
 */
export class AuthCloud implements ICriblAuth {
  private client: CriblControlPlane;
  private readonly baseUrl: string;
  private readonly clientID: string;
  private readonly clientSecret: string;
  private readonly tokenURL: string;
  private readonly audience: string;
  private attempts: number = 0;
  constructor({ orgId, clientID, clientSecret, workspaceName }: CloudConfiguration) {
    this.clientID = clientID;
    this.clientSecret = clientSecret;
    this.baseUrl = `https://${workspaceName}-${orgId}.${domain}/api/v1`;
    this.tokenURL = `https://login.${domain}/oauth/token`;
    this.audience = `https://api.${domain}`;
  }

  public async getClient(): Promise<CriblControlPlane> {
    if (this.client) return this.client;
    try {
      this.client = new CriblControlPlane({
        serverURL: this.baseUrl,
        security: {
          clientOauth: {
            clientID: this.clientID,
            clientSecret: this.clientSecret,
            tokenURL: this.tokenURL,
            audience: this.audience,
          },
        },
      });
      return this.client;
    } catch (error) {
      if (error.statusCode === 429 && this.attempts < 10) {
        console.log(`⚠️ Rate limit exceeded, retrying...`);
        this.attempts++;
        await sleep(1000);
        return await this.getClient();
      }
      if (error.statusCode === 401) {
        throw new Error(`Failed to authenticate with cloud server: ${error}}`);
      }
      throw new Error(`Failed to authenticate with cloud server: ${error}; attempts: ${this.attempts}`);
    }
  }
}
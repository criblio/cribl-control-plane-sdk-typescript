import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { CriblControlPlane } from 'cribl-control-plane';

/**
 * Load environment variables with priority:
 * 1. System environment variables (highest priority)
 * 2. .env file (if exists)
 * 3. Default values (lowest priority)
 */
function loadEnvironmentVariables() {
  // Try to find and load .env file (optional)
  const possibleEnvPaths = [
    path.resolve(__dirname, '..', '..', '.env'),
    path.resolve(process.cwd(), '.env'),
    path.resolve(process.cwd(), '..', '.env'),
  ];

  for (const envPath of possibleEnvPaths) {
    if (fs.existsSync(envPath)) {
      // Load .env but don't override existing environment variables
      dotenv.config({
        path: envPath,
        override: false, // System env vars take precedence
      });
      break;
    }
  }
}

// Load environment variables with proper priority
loadEnvironmentVariables();

const {
  WORKSPACE_NAME,
  ORG_ID,
  CRIBL_DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  DEBUG_CLIENT,
  // On-premises variables
  ONPREM_SERVER_URL,
  ONPREM_USERNAME,
  ONPREM_PASSWORD,
  // Deployment environment selector
  DEPLOYMENT_ENV,
} = process.env;

// Determine deployment type: 'onprem' for on-premises, anything else (or unset) for cloud
const isOnPremDeployment = DEPLOYMENT_ENV === 'onprem';
export const isCloudDeployment = !isOnPremDeployment;

/**
 * Validate that required environment variables are set for the current deployment type
 */
function validateRequiredEnvironmentVariables() {
  if (isCloudDeployment) {
    // Required cloud environment variables
    const requiredCloudVars = [
      'WORKSPACE_NAME',
      'ORG_ID', 
      'CRIBL_DOMAIN',
      'CLIENT_ID',
      'CLIENT_SECRET'
    ];

    const missingVars = requiredCloudVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      throw new Error(
        `Missing required cloud environment variables: ${missingVars.join(', ')}.\n` +
        `Please set these variables either in your system environment or in a .env file:\n` +
        `${missingVars.map(v => `${v}=your-${v.toLowerCase().replace('_', '-')}`).join('\n')}`
      );
    }
  } else {
    // Required on-premises environment variables
    const requiredOnPremVars = [
      'ONPREM_SERVER_URL',
      'ONPREM_USERNAME',
      'ONPREM_PASSWORD'
    ];

    const missingVars = requiredOnPremVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      throw new Error(
        `Missing required on-premises environment variables: ${missingVars.join(', ')}.\n` +
        `Please set these variables either in your system environment or in a .env file.`
      );
    }
  }
}

// Validate environment variables after loading
validateRequiredEnvironmentVariables();

const sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
let loginAttempts = 0;

export const baseUrl = isCloudDeployment 
  ? `https://${WORKSPACE_NAME}-${ORG_ID}.${CRIBL_DOMAIN}/api/v1`
  : `${ONPREM_SERVER_URL}/api/v1`;

export const wgDefaultUrl = `${baseUrl}/m/default`;
export const wgDefaultHybridUrl = `${baseUrl}/m/defaultHybrid`;

let criblClient: CriblControlPlane | null = null;

export async function createCriblClient(): Promise<CriblControlPlane> {
  if (criblClient) return criblClient;

  if (isCloudDeployment) {
    // Cloud OAuth authentication
    criblClient = new CriblControlPlane({
      serverURL: baseUrl,
      security: {
        clientOauth: {
          clientID: CLIENT_ID as string,
          clientSecret: CLIENT_SECRET as string,
          tokenURL: `https://login.${CRIBL_DOMAIN}/oauth/token`,
          audience: `https://api.${CRIBL_DOMAIN}`,
        },
      },
      ...(DEBUG_CLIENT === 'true' && { debugLogger: console }),
    });
  } else {
    // On-premises username/password authentication
    // First retrieve the auth token
    const tempClient = new CriblControlPlane({
      serverURL: baseUrl,
      ...(DEBUG_CLIENT === 'true' && { debugLogger: console }),
    });

    try {
      // Login to get the actual bearer token
      const authResponse = await tempClient.auth.tokens.get({
        username: ONPREM_USERNAME as string,
        password: ONPREM_PASSWORD as string
      });

      // Create the real client with the obtained token
      criblClient = new CriblControlPlane({
        serverURL: baseUrl,
        security: {
          bearerAuth: authResponse.token
        },
        ...(DEBUG_CLIENT === 'true' && { debugLogger: console }),
      });
    } catch (error) {
      if (error.statusCode === 429 && loginAttempts < 20) {
        loginAttempts++;
        await sleep(1000);
        return await createCriblClient();
      }
      throw new Error(`Failed to authenticate with on-premises server: ${error}`);
    }
  }

  return criblClient;
}
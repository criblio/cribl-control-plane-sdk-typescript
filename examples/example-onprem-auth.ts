/**
 * On-Prem Authentication Example
 * 
 * This example demonstrates how to configure authentication for an on-prem 
 * Cribl instance using username and password credentials.
 * 
 * 1. Create an SDK client with username and password credentials using the 
 * bearerAuth security scheme.
 * 2. Automatically handle token exchange and refresh using a callback function.
 * 3. Validate the connection by listing all git branches.
 * 
 * Prerequisites: Replace the placeholder values for ONPREM_SERVER_URL 
 * ONPREM_USERNAME, and ONPREM_PASSWORD with your server URL and credentials. 
 * Your credentials are sensitive information and should be kept private. 
 * 
 * NOTE: This example is for on-prem deployments only. It does not require .env 
 * file configuration.
 */

import { CriblControlPlane } from "../dist/esm";

// On-prem configuration: Replace the placeholder values
const ONPREM_SERVER_URL: string = "http://localhost:9000";  // Replace with your server URL
const ONPREM_USERNAME: string = "admin"; // Replace with your username
const ONPREM_PASSWORD: string = "admin"; // Replace with your password

const BASE_URL: string = `${ONPREM_SERVER_URL}/api/v1`;

// Token cache
let _cachedToken: string | null = null;
let _tokenExpiresAt: Date | null = null;

function _getJwtExp(token: string): Date {
  const payloadB64 = token.split(".")[1];
  const padding = "=".repeat((4 - (payloadB64.length % 4)) % 4);
  const payload = JSON.parse(atob(payloadB64 + padding));
  const exp = payload.exp;
  if (exp === undefined) {
    throw new Error("Token missing 'exp' field");
  }
  return new Date(exp * 1000);
}

async function main() {
  // Create client for retrieving Bearer token
  const client = new CriblControlPlane({ serverURL: BASE_URL });

  const callback = async () => {
    // Check cache
    const now = new Date();
    if (
      _cachedToken &&
      _tokenExpiresAt &&
      now.getTime() + 3000 < _tokenExpiresAt.getTime()
    ) {
      return { bearerAuth: _cachedToken };
    }

    // Retrieve Bearer token initially and refresh automatically when it expires
    const response = await client.auth.tokens.get({
      username: ONPREM_USERNAME,
      password: ONPREM_PASSWORD,
    });
    const token = response.token;
    _tokenExpiresAt = _getJwtExp(token);
    _cachedToken = token;
    return { bearerAuth: token };
  };

  // Create authenticated SDK client
  const authenticatedClient = new CriblControlPlane({
    serverURL: BASE_URL,
    security: callback,
  });
  console.log(`✅ Authenticated SDK client created for on-prem server`);

  // Validate connection and list all git branches
  const response = await authenticatedClient.versions.branches.list();
  const branches = response.items?.map((branch: any) => branch.id).join("\n\t");
  console.log(`✅ Client works! Your list of branches:\n\t${branches}`);
}

main().catch((error) => {
  if (error.statusCode === 401) {
    console.log("⚠️ Authentication failed! Check your USERNAME and PASSWORD.");
  } else if (error.statusCode === 429) {
    console.log("⚠️ Uh oh, you've reached the rate limit! Try again in a few seconds.");
  } else {
    console.error("❌ Something went wrong: ", error);
  }
});

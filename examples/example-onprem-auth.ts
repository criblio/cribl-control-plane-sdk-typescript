/**
 * On-Prem Authentication Example
 * 
 * This example demonstrates the authentication process for an on-prem Cribl 
 * instance using username and password credentials.
 * 
 * 1. Authenticate with your username and password to obtain a Bearer token.
 * 2. Create an SDK client that uses the Bearer token for API calls.
 * 3. Validate the connection by checking the server health status and listing 
 * all git branches.
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
const ONPREM_USERNAME: string = "admin" // Replace with your username
const ONPREM_PASSWORD: string = "admin" // Replace with your password

const BASE_URL: string = `${ONPREM_SERVER_URL}/api/v1`;

async function main() {
  // Retrieve Bearer token for authentication
  let client = new CriblControlPlane({ serverURL: BASE_URL });
  const { result } = await client.auth.tokens.get({
    username: ONPREM_USERNAME,
    password: ONPREM_PASSWORD,
  });
  console.log(`✅ Authenticated with on-prem server. Token: ${result.token}`);

  // Create authenticated SDK client
  client = new CriblControlPlane({ serverURL: BASE_URL, security: { bearerAuth: result.token }});
  console.log(`✅ Cribl SDK client created for on-prem server`);

  // Validate connection and list all git branches
  const response = await client.versions.branches.list();
  const branches = response.items?.map(branch => branch.id).join("\n\t");
  console.log(`✅ Client works! Your list of branches:\n\t${branches}`);
}

main().catch((error) => {
  if (error.statusCode === 429) {
    console.log("⚠️ Uh oh, you've reached the rate limit! Try again in a few seconds.");
  } else {
    console.error("❌ Something went wrong: ", error);
  }
});

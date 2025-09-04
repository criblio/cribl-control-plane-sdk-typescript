/**
 * On-Premises Authentication Example
 * 
 * This example demonstrates how to authenticate with an on-premises Cribl instance
 * using username and password credentials. It shows the two-step authentication process:
 * 
 * 1. Authenticates with username/password to obtain a bearer token
 * 2. Creates a new SDK client using the obtained token for API calls
 * 3. Validates the connection by checking server health status
 * 
 * Prerequisites: Configure the on-premises server URL, username, and password
 * 
 * You don't need to configure .env file for this example.
 */

import { CriblControlPlane } from "../dist/esm";

const ONPREM_SERVER_URL = "http://localhost:9000";
const ONPREM_USERNAME="admin"
const ONPREM_PASSWORD="admin"

const BASE_URL = `${ONPREM_SERVER_URL}/api/v1`;

async function main() {
  // Retrieve authentication token
  let client = new CriblControlPlane({ serverURL: BASE_URL });
  const { token } = await client.auth.tokens.get({
    username: ONPREM_USERNAME as string,
    password: ONPREM_PASSWORD as string,
  });
  console.log(`✅ Authenticated with on-premises server, token: ${token}`);

  // Create authenticated client
  client = new CriblControlPlane({ serverURL: BASE_URL, security: { bearerAuth: token }});
  console.log(`✅ Cribl SDK client created for on-premises server`);

  // Validate connection
  const health = await client.health.get();
  console.log(`✅ Client works! Server status: ${health.status}`);
}

main().catch((error) => {
  if (error.statusCode === 429) {
    console.log("⚠️ Uh oh, you've hit the rate limit! Try again in a few seconds.");
  } else {
    console.error("❌ Something went wrong: ", error);
  }
});

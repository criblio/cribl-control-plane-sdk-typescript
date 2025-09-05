/**
 * Cloud Authentication Example
 * 
 * This example demonstrates how to authenticate with Cribl Cloud using OAuth2
 * client credentials flow. It shows the authentication process:
 * 
 * 1. Creates an SDK client with OAuth2 client credentials configuration
 * 2. Automatically handles token exchange and refresh
 * 3. Validates the connection by checking server health status
 * 
 * Prerequisites: Configure cloud environment variables: ORG_ID, CLIENT_ID, CLIENT_SECRET, WORKSPACE_NAME, CRIBL_DOMAIN
 * How to get these values: https://docs.cribl.io/api/#criblcloud
 * 
 * Note: This example is for cloud deployments only and does not require a .env
 * file configuration to run.
 */

import { CriblControlPlane } from "../dist/esm";

// Cloud configuration - UPDATE THESE VALUES
const ORG_ID = "your-org-id"; // Replace with your organization ID
const CLIENT_ID = "your-client-id"; // Replace with your OAuth2 client ID
const CLIENT_SECRET = "your-client-secret"; // Replace with your OAuth2 client secret
const WORKSPACE_NAME = "main"; // Replace with your workspace name
const CRIBL_DOMAIN = "cribl.cloud"; // Replace with your Cribl domain

const BASE_URL = `https://${WORKSPACE_NAME}-${ORG_ID}.${CRIBL_DOMAIN}/api/v1`;

async function main() {
  // Create authenticated client with OAuth2
  const client = new CriblControlPlane({
    serverURL: BASE_URL,
    security: {
      clientOauth: {
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        tokenURL: `https://login.${CRIBL_DOMAIN}/oauth/token`,
        audience: `https://api.${CRIBL_DOMAIN}`,
      },
    },
  });
  console.log(`✅ Cribl SDK client created for cloud deployment`);

  // Validate connection, try to list all git branches
  const response = await client.versions.branches.list();
  const branches = response.items?.map(branch => branch.id).join("\n\t");
  console.log(`✅ Client works! Your list of branches:\n\t${branches}`);

}

main().catch((error) => {
  if (error.statusCode === 401) {
    console.log("⚠️ Authentication failed! Check your CLIENT_ID and CLIENT_SECRET.");
  } else if (error.statusCode === 429) {
    console.log("⚠️ Uh oh, you've hit the rate limit! Try again in a few seconds.");
  } else {
    console.error("❌ Something went wrong: ", error);
  }
});

/**
 * Cribl.Cloud and Hybrid Authentication Example
 * 
 * This example demonstrates how to configure authentication on Cribl.Cloud
 * and in hybrid deployments using OAuth2 credentials.
 * 
 * 1. Create an SDK client with OAuth2 client credentials using the 
 * clientOauth security scheme.
 * 2. Automatically handle token exchange and refresh.
 * 3. Validate the connection by listing all git branches.
 * 
 * Prerequisites: Replace the placeholder values for ORG_ID, CLIENT_ID, 
 * CLIENT_SECRET, and WORKSPACE_NAME with your Organization ID, Client ID and 
 * Secret, and Workspace name. To get your Client ID and Secret, follow the 
 * steps at https://docs.cribl.io/cribl-as-code/sdks-auth/#sdks-auth-cloud. 
 * Your Client ID and Secret are sensitive information and should be kept private.
 * 
 * NOTE: This example is for Cribl.Cloud and hybrid deployments only. 
 * It does not require .env file configuration.
 */

import { CriblControlPlane } from "../dist/esm";

// Cribl.Cloud and hybrid configuration: Replace the placeholder values
const ORG_ID = "your-org-id"; // Replace with your Organization ID
const CLIENT_ID = "your-client-id"; // Replace with your OAuth2 Client ID
const CLIENT_SECRET = "your-client-secret"; // Replace with your OAuth2 Client Secret
const WORKSPACE_NAME = "main"; // Replace with your Workspace name

const baseUrl = `https://${WORKSPACE_NAME}-${ORG_ID}.cribl.cloud/api/v1`;

async function main() {
  // Create authenticated SDK client with OAuth2
  const client = new CriblControlPlane({
    serverURL: baseUrl,
    security: {
      clientOauth: {
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        tokenURL: `https://login.cribl.cloud/oauth/token`,
        audience: `https://api.cribl.cloud`,
      },
    },
  });
  console.log(`✅ Cribl SDK client created for Cribl.Cloud deployment`);

  // Validate connection and list all git branches
  const response = await client.versions.branches.list();
  const branches = response.items?.map(branch => branch.id).join("\n\t");
  console.log(`✅ Client works! Your list of branches:\n\t${branches}`);

}

main().catch((error) => {
  if (error.statusCode === 401) {
    console.log("⚠️ Authentication failed! Check your CLIENT_ID and CLIENT_SECRET.");
  } else if (error.statusCode === 429) {
    console.log("⚠️ Uh oh, you've reached the rate limit! Try again in a few seconds.");
  } else {
    console.error("❌ Something went wrong: ", error);
  }
});

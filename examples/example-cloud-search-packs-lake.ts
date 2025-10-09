/**
 * Cribl.Cloud Lake Dataset with Search Pack Example
 * 
 * This example demonstrates how to install a Search Pack and create a Lake Dataset 
 * using the Control Plane SDK with Cribl.Cloud authentication.
 * 
 * The example:
 * 1. Installs the AWS VPC Flow Logs Search Pack from Cribl Packs Dispensary
 * 2. Creates a Lake Dataset with basic configuration
 * 
 * Prerequisites: Replace the placeholder values for ORG_ID, CLIENT_ID, 
 * CLIENT_SECRET, and WORKSPACE_NAME with your Organization ID, Client ID and 
 * Secret, and Workspace name. To get your CLIENT_ID and CLIENT_SECRET values, 
 * follow the steps at https://docs.cribl.io/cribl-as-code/authentication/#cloud-auth. 
 * Your Client ID and Secret are sensitive information and should be kept private.
 * 
 * NOTE: This example is for Cribl.Cloud deployments only. It does not require 
 * .env file configuration.
 */

import { CriblLakeDataset } from "../dist/esm/models";
import { AuthCloud } from "./auth";

const ORG_ID = 'your-org-id';
const CLIENT_ID = 'your-client-id';
const CLIENT_SECRET = 'your-client-secret';
const WORKSPACE_NAME = 'your-workspace-name';
// AWS VPC Flow Logs Search Pack from Cribl Packs Dispensary
const PACK_URL = "https://packs.cribl.io/dl/cribl-search-aws-vpc-flow-logs/0.1.1/cribl-search-aws-vpc-flow-logs-0.1.1.crbl";
const PACK_ID = "cribl-search-aws-vpc-flow-logs";

const LAKE_ID = "default";
const DATASET_ID = "aws-vpc-flow-logs-dataset";

async function main() {
  const auth = new AuthCloud({
    orgId: ORG_ID,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    workspaceName: WORKSPACE_NAME,
  });
  const cribl = await auth.getClient();

  // Construct URLs for pack installation
  const baseUrl = `https://${WORKSPACE_NAME}-${ORG_ID}.cribl.cloud/api/v1`;
  const searchGroupUrl = `${baseUrl}/m/default_search`;

  // Install AWS VPC Flow Logs Search Pack
  await cribl.packs.install({ source: PACK_URL, id: PACK_ID }, { serverURL: searchGroupUrl });
  console.log(`✅ Installed Search Pack "${PACK_ID}" from Cribl Packs Dispensary`);

  // Create lake dataset
  const dataset: CriblLakeDataset = {
    id: DATASET_ID,
    retentionPeriodInDays: 30,
    httpDAUsed: false,
    storageLocationId: "cribl_lake",
  };

  await cribl.lakeDatasets.create({
    lakeId: LAKE_ID,
    criblLakeDataset: dataset
  });

  console.log(`✅ Created Lake Dataset: ${DATASET_ID}`);
}

main().catch((error) => {
  console.error("❌ Something went wrong: ", error);
});

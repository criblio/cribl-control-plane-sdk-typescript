/**
 * Cribl.Cloud Worker Group Management Example
 * 
 * This example demonstrates how to create and manage a Cribl.Cloud-based 
 * Worker Group in Cribl Stream using the Control Plane SDK.
 * 
 * 1. Create a Cribl.Cloud Worker Group using the AWS provider configuration. 
 * Set the maximum estimated ingest rate to 24 MB/s and configure 9 
 * Worker Processes.
 * 2. Verify that the Worker Group doesn't already exist.
 * 3. Scale up the Worker Group to 48 MB/s maximum estimated ingest rate and 
 * 21 Worker Processes.
 * 4. Provision the Worker Group to activate Cribl.Cloud resources.
 * 
 * The Cribl documentation provides more information about ingest rates and 
 * provisioning: 
 * https://docs.cribl.io/stream/cloud-workers/#create-a-cloud-worker-group
 * 
 * Prerequisites: Replace the placeholder values for ORG_ID, CLIENT_ID, 
 * CLIENT_SECRET, and WORKSPACE_NAME with your Organization ID, Client ID and 
 * Secret, and Workspace name. To get your CLIENT_ID and CLIENT_SECRET values, 
 * follow the steps at https://docs.cribl.io/api/#criblcloud. Your Client ID 
 * and Secret are sensitive information and should be kept private.
 * 
 * NOTE: This example is for Cribl.Cloud deployments only. It does not require 
 * .env file configuration.
 */

import { ConfigGroup, EstimatedIngestRate } from "../dist/esm/models";
import { AuthCloud } from "./auth";

const ORG_ID = 'your-org-id';
const CLIENT_ID = 'your-client-id';
const CLIENT_SECRET = 'your-client-secret';
const WORKSPACE_NAME = 'your-workspace-name';

const WORKER_GROUP_ID = "your-cloud-worker-group-id";

const group: ConfigGroup = {
  onPrem: false,
  workerRemoteAccess: true,
  cloud: {
    provider: "aws",
    region: "us-east-1",
  },
  provisioned: false,
  isFleet: false,
  isSearch: false,
  estimatedIngestRate: EstimatedIngestRate.Rate24MBPerSec, // Equivalent to 24 MB/s maximum estimated ingest rate with 9 Worker Processes
  id: WORKER_GROUP_ID,
  name: "my-aws-worker-group",
};

async function main() {
  const auth = new AuthCloud({
    orgId: ORG_ID,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    workspaceName: WORKSPACE_NAME,
  });
  const cribl = await auth.getClient();

  // Verify that Worker Group doesn't already exist
  const workerGroupResponse = await cribl.groups.get({ id: group.id, product: "stream" });
  if (workerGroupResponse.items!.length > 0) {
    console.log(`⚠️ Worker Group already exists: ${group.id}. Try a different group ID.`);
    return;
  }

  // Create the Worker Group
  await cribl.groups.create({ product: "stream", configGroup: group });
  console.log(`✅ Worker Group created: ${group.id}`);

  // Scale and provision the Worker Group
  group.estimatedIngestRate = EstimatedIngestRate.Rate48MBPerSec; // Equivalent to 48 MB/s maximum estimated ingest rate with 21 Worker Processes
  group.provisioned = true;
  await cribl.groups.update({ product: "stream", id: group.id, configGroup: group });
  console.log(`✅ Worker Group scaled and provisioned: ${group.id}`);
}

main().catch((error) => {
  console.error("❌ Something went wrong: ", error);
});

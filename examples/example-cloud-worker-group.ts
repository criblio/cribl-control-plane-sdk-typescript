/**
 * Cloud Worker Group Management Example
 * 
 * This example demonstrates how to create and manage a cloud-based worker group
 * in Cribl Stream using the Control Plane SDK. It shows:
 * 
 * 1. Creates a cloud worker group with AWS provider configuration with
 *    24MB/s max estimated ingest rate / 9 worker processes
 * 2. Verifies the worker group doesn't already exist
 * 3. Scales the worker group up to 48MB/s max estimated ingest rate / 21 worker processes
 * 4. Provisions the worker group to activate cloud resources
 * 
 * Prerequisites: Configure cloud environment variables: ORG_ID, CLIENT_ID, CLIENT_SECRET, WORKSPACE_NAME, CRIBL_DOMAIN
 * How to get these values: https://docs.cribl.io/api/#criblcloud
 *
 * Note: This example is for cloud deployments only and does not require a .env
 * file configuration to run.
 */

import { ConfigGroup } from "../dist/esm/models";
import { AuthCloud } from "./auth";

const ORG_ID = 'your-org-id';
const CLIENT_ID = 'your-client-id';
const CLIENT_SECRET = 'your-client-secret';
const WORKSPACE_NAME = 'your-workspace-name';
const CRIBL_DOMAIN = 'your-cribl-domain';

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
  estimatedIngestRate: 2048, // 24MB/s Max est ingest rate / 9 Worker Processes
  id: WORKER_GROUP_ID,
  name: "my-aws-worker-group",
};

async function main() {
  const auth = new AuthCloud({
    orgId: ORG_ID,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    workspaceName: WORKSPACE_NAME,
    criblDomain: CRIBL_DOMAIN,
  });
  const cribl = await auth.getClient();

  // Verify worker group doesn't already exist
  const workerGroupResponse = await cribl.groups.get({ id: group.id, product: "stream" });
  if (workerGroupResponse.items!.length > 0) {
    console.log(`⚠️ Worker Group already exists: ${group.id}. Try different group id.`);
    return;
  }

  // Create the worker group
  await cribl.groups.create({ product: "stream", configGroup: group });
  console.log(`✅ Worker Group created: ${group.id}`);

  // Scale and provision the worker group 
  group.estimatedIngestRate = 4096; // 48MB/s Max est ingest rate / 21 Worker Processes
  group.provisioned = true;
  await cribl.groups.update({ product: "stream", id: group.id, configGroup: group });
  console.log(`✅ Worker Group scaled and provisioned: ${group.id}`);
}

main().catch((error) => {
  console.error("❌ Something went wrong: ", error);
});

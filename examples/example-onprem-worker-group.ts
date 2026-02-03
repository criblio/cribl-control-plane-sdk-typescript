/**
 * On-Prem/Hybrid Worker Group Process Optimization Example
 * 
 * This example demonstrates how to optimize Worker Process settings for an 
 * existing on-prem or hybrid Worker Group in Cribl Stream using the Control Plane SDK, 
 * following the scaling guidelines from the Cribl documentation.
 * 
 * This example performs the following operations:
 * 
 * 1. Connects to an existing on-prem or hybrid Worker Group.
 * 2. Retrieves the current system settings for the Worker Group.
 * 3. Optimizes Worker Process settings following the scaling documentation:
 *    - Process count: -2 (CPU cores minus 2, reserves headroom for system/API overhead)
 *    - Memory: 2048 MB (2 GB per Worker Process)
 *    - Minimum process count: 2 (ensures at least 2 processes)
 * 4. Updates the Worker Group's system settings with the optimized configuration.
 * 5. Commits the configuration changes to the Worker Group.
 * 6. Deploys the configuration changes to the Worker Group.
 * 7. Restarts the Worker Group to apply the changes.
 * 
 * The Cribl documentation provides more information about worker process optimization:
 * https://docs.cribl.io/stream/scaling/#optimize-a-distributed-deployment-or-hybrid-group
 * 
 * Prerequisites:
 * - An .env file configured with your authentication credentials.
 * - Replace WORKER_GROUP_ID with your actual Worker Group ID.
 */

import { 
  SystemSettingsConf,
  WorkersTypeSystemSettingsConf,
} from "../dist/esm/models";
import { createCriblClient, baseUrl } from "./auth";

const WORKER_GROUP_ID = "your-worker-group-id";

async function main() {
  // Initialize Cribl client
  const cribl = await createCriblClient();

  // Construct the base URL for the worker group
  const groupUrl = `${baseUrl}/m/${WORKER_GROUP_ID}`;

  // Verify that Worker Group exists
  const workerGroupResponse = await cribl.groups.get({ id: WORKER_GROUP_ID, product: "stream" });
  if (!workerGroupResponse.items || workerGroupResponse.items.length === 0) {
    console.log(`⚠️ Worker Group not found: ${WORKER_GROUP_ID}. Please create it first.`);
    return;
  }
  console.log(`✅ Found Worker Group: ${WORKER_GROUP_ID}`);

  // Get current system settings to preserve existing configuration
  const currentSettings = await cribl.system.settings.cribl.list({ serverURL: groupUrl });
  const currentConf = currentSettings.items?.[0];
  
  if (!currentConf) {
    throw new Error("Failed to retrieve current system settings");
  }

  console.log(`📊 Current Worker Process settings:`);
  console.log(`   Process count: ${currentConf.workers.count}`);
  console.log(`   Memory: ${currentConf.workers.memory} MB`);
  console.log(`   Minimum processes: ${currentConf.workers.minimum}`);

  // Configure Worker Process settings following scaling documentation
  // For x86 hyperthreaded CPUs: Process count = -2 (default, reserves 2 cores for overhead)
  // Memory: 2048 MB (default 2 GB per Worker Process)
  // Minimum: 2 (ensures at least 2 processes)
  const workersConfig: WorkersTypeSystemSettingsConf = {
    count: -2, // Negative number: CPU cores - 2 (reserves headroom for system/API overhead)
    memory: 2048, // MB - Amount of heap memory available to each Worker Process
    minimum: 2, // Minimum number of Worker Processes to spawn
  };

  // Update system settings with optimized worker process configuration
  // Preserve other settings from the current configuration
  const systemSettings: SystemSettingsConf = {
    ...currentConf,
    workers: workersConfig,
  };

  await cribl.system.settings.cribl.update(systemSettings, { serverURL: groupUrl });
  console.log(`\n✅ Worker Process settings optimized:`);
  console.log(`   Process count: ${workersConfig.count} (CPU cores - 2 for overhead)`);
  console.log(`   Memory: ${workersConfig.memory} MB per Worker Process`);
  console.log(`   Minimum processes: ${workersConfig.minimum}`);

  // Commit configuration changes
  const commitResponse = await cribl.versions.commits.create({ 
    groupId: WORKER_GROUP_ID, 
    gitCommitParams: {
      message: "Optimize Worker Process settings",
      effective: true,
      files: ["."]
    }
  });
  const version: string = commitResponse.items![0].commit;
  console.log(`✅ Committed configuration changes to the group: ${WORKER_GROUP_ID}, commit ID: ${version}`);

  // Deploy configuration changes to the Worker Group
  await cribl.groups.deploy({
    product: "stream",
    id: WORKER_GROUP_ID,
    deployRequest: { version },
  });
  console.log(`✅ Worker Group changes deployed: ${WORKER_GROUP_ID}`);

  // Restart the Worker Group to apply the changes
  console.log(`\n🔄 Restarting Worker Group to apply changes...`);
  await cribl.system.settings.restart({ serverURL: groupUrl });
  console.log(`✅ Worker Group restarted successfully`);
}

main().catch((error) => {
  console.error("❌ Something went wrong: ", error);
});

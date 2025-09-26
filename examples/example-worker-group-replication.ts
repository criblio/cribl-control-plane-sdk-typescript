/**
 * Cribl Worker Group Replication Example
 * 
 * This example demonstrates how to programmatically replicate an existing 
 * Worker Group configuration using the Control Plane SDK.
 * 
 * This example performs the following operations:
 * 
 * 1. Retrieves a list of all Worker Groups in Cribl Stream.
 * 2. Selects the first Worker Group in the list as the source Worker Group 
 * to replicate.
 * 3. Retrieves the complete configuration of the source Worker Group.
 * 4. Creates a new Worker Group that uses the same configuration as the source 
 * Worker Group. The replica Worker Group has a unique ID and a name and 
 * description that identify it as a replica.
 * 
 * Data flow: Source Worker Group → Configuration Extraction → New Worker Group Creation
 * 
 * Prerequisites:
 * - An .env file configured with your authentication credentials.
 * - At least one existing Worker Group in Cribl Stream.
 * - API Bearer token with Permissions that include creating Worker Groups.
 */

import { createCriblClient, CriblControlPlane } from './auth';

/**
 * Main function that demonstrates Worker Group replication
 */
async function main() {
  try {
    // Initialize Cribl client
    const criblClient = await createCriblClient();

    // Get the first available Worker Group
    const workerGroups = await criblClient.groups.list({ product: 'stream' });
    
    if (workerGroups.items && workerGroups.items.length > 0) {
      const firstWorkerGroup = workerGroups.items[0];
      console.log(`Replicating Worker Group: ${firstWorkerGroup.id}`);
      
      // Replicate the first Worker Group
      await replicateWorkerGroup(criblClient, firstWorkerGroup.id);
    } else {
      console.log('No Worker Groups found. Please create at least one Worker Group first.');
      process.exit(1);
    }

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error:', message);
    process.exit(1);
  }
}

/**
 * Replicates a Worker Group with a unique ID
 * 
 * - Retrieve the source Worker Group configuration
 * - Generate a unique ID and name to use for the replica Worker Group
 * - Filter out read-only fields from the source Worker Group configuration
 * - Create the replica Worker Group with proper metadata
 * 
 * @param client - Cribl client instance
 * @param sourceId - ID of the Worker Group to replicate
 */
async function replicateWorkerGroup(client: CriblControlPlane, sourceId: string) {
  try {
    // Retrieve the source Worker Group configuration
    const sourceResponse = await client.groups.get({
      id: sourceId,
      product: 'stream'
    });

    if (!sourceResponse.items?.[0]) {
      throw new Error(`Worker Group '${sourceId}' not found`);
    }

    const source = sourceResponse.items[0];

    // Generate a unique ID and name for the replica Worker Group
    const replicaId = `${sourceId}-replica`;
    const replicaName = source.name ? `${source.name}-replica` : `${sourceId}-replica`;

    // Filter out read-only fields like config_version, lookup_deployments, and worker_count
    const {
      configVersion,
      lookupDeployments, 
      workerCount,
      deployingWorkerCount,
      incompatibleWorkerCount,
      ...replicableConfig
    } = source;

    // Prepare the replica payload
    const replica = {
      product: 'stream' as const,
      configGroup: {
        ...replicableConfig,
        id: replicaId,
        name: replicaName,
        description: `Replica of '${sourceId}'`
      }
    };

    // Create the replica Worker Group by copying the configuration of the source Worker Group
    const result = await client.groups.create(replica);
    
    if (result.items?.[0]) {
      const created = result.items[0];
      console.log(`✅ Worker Group replicated: ${created.id}`);
      
      return created;
    } else {
      throw new Error('Failed to create replica Worker Group');
    }

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to replicate Worker Group: ${message}`);
    throw error;
  }
}

main().catch(error => {
  const message = error instanceof Error ? error.message : String(error);
  console.error('Something went wrong:', message);
});

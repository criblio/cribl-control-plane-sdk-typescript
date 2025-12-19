
/**
 * Cribl Stream Configuration Example
 * 
 * This example demonstrates how to programmatically create and configure a 
 * complete data pipeline in Cribl Stream using the Control Plane SDK.
 * 
 * This example creates:
 * 
 * 1. A Worker Group to manage the configuration.
 * 2. A TCP JSON source to receive data on port 9020.
 * 3. A Filesystem Destination to store processed data.
 * 4. A Pipeline that filters events and keeps only data in the "name" 
 * field.
 * 5. A Route that connects the Source to the Pipeline and Destination.
 * 
 * This example also deploys the configuration to the Worker Group to make it 
 * active.
 * 
 * Data flow: TCP JSON Source → Route → Pipeline → Filesystem Destination
 *
 * The example includes error handling and checks for existing resources.
 * 
 * Prerequisites:
 * - An .env file that is configured with your credentials.
 * - An Enterprise License on the server.
 */

import {
  ConfigGroup,
  Pipeline,
  RoutesRoute,
} from "../dist/esm/models";
import { CreateInputRequest, CreateOutputRequest } from "../dist/esm/models/operations";
import { baseUrl, createCriblClient } from "./auth";

const PORT = 9020;
const AUTH_TOKEN = "4a4b3663-7a57-7369-7632-795553573668";
const WORKER_GROUP_ID = "my-worker-group";

const myWorkerGroup: ConfigGroup = {
  id: WORKER_GROUP_ID,
  description: "My Worker Group",
  onPrem: true,
};

// TCP JSON Source configuration
const tcpJsonSource: CreateInputRequest = {
  id: "my-tcp-json",
  type: "tcpjson",
  port: PORT,
  authType: "manual",
  authToken: AUTH_TOKEN,
};

// Filesystem Destination configuration
const fileSystemDestination: CreateOutputRequest = {
  id: "my-fs-destination",
  type: "filesystem",
  destPath: "/tmp/my-output",
};

// Pipeline configuration: filter events and keep only data in the "name" field
const pipeline: Pipeline = {
  id: "my-pipeline",
  conf: {
    asyncFuncTimeout: 1000,
      functions: [{
        filter: "true",
        conf: {
            remove: [
                "*"
            ],
            keep: [
                "name"
            ]
        },
        id: "eval",
        final: true,
    }],
  },
};

// Route configuration: route data from the Source to the Pipeline and Destination
const route: RoutesRoute = {
  final: false,
  id: "my-route",
  name: "my-route",
  pipeline: pipeline.id,
  output: fileSystemDestination.id,
  filter: "__inputId=='tcpjson:my-tcp-json'",
  description: "This is my new route",
  additionalProperties: {},
};
const groupUrl = `${baseUrl}/m/${myWorkerGroup.id}`;

async function main() {
  // Initialize Cribl client
  const cribl = await createCriblClient();

  // Verify that Worker Group doesn't already exist
  const workerGroupResponse = await cribl.groups.get({ id: myWorkerGroup.id, product: "stream" });
  if (workerGroupResponse.items!.length > 0) {
    console.log(`⚠️ Worker Group already exists: ${myWorkerGroup.id}. Try a different group ID.`);
    return;
  }

  // Create Worker Group
  await cribl.groups.create({ product: "stream", groupCreateRequest: myWorkerGroup });
  console.log(`✅ Worker Group created: ${myWorkerGroup.id}`);

  // Create TCP JSON Source
  await cribl.sources.create(tcpJsonSource, { serverURL: groupUrl });
  console.log(`✅ TCP JSON Source created: ${tcpJsonSource.id}`);

  // Create Filesystem Destination
  await cribl.destinations.create(fileSystemDestination, {
    serverURL: groupUrl,
  });
  console.log(`✅ Filesystem Destination created: ${fileSystemDestination.id}`);

  // Create Pipeline
  await cribl.pipelines.create(pipeline, { serverURL: groupUrl });
  console.log(`✅ Pipeline created: ${pipeline.id}`);

  // Add Route to Routing table
  const routesListResponse = await cribl.routes.list({ serverURL: groupUrl });
  const routes = routesListResponse.items?.[0];
  if (!routes || !routes.id) {
    throw new Error("No Routes found");
  }
  routes.routes = [route, ...routes.routes];
  await cribl.routes.update({ id: routes.id, routes }, { serverURL: groupUrl });
  console.log(`✅ Route added: ${route.id}`);

  // Commit configuration changes
  const commitResponse = await cribl.versions.commits.create({ groupId: myWorkerGroup.id, gitCommitParams: {
    message: "Commit for Stream example", effective: true, files: ["."]}
  });

  const version: string = commitResponse.items![0].commit;
  console.log(`✅ Committed configuration changes to the group: ${myWorkerGroup.id}, commit ID: ${version}`);

  // Deploy configuration changes
  await cribl.groups.deploy({
    product: "stream",
    id: myWorkerGroup.id,
    deployRequest: { version },
  });
  console.log(`✅ Worker Group changes deployed: ${myWorkerGroup.id}`);
}

main().catch(error => {
  console.error("❌ Something went wrong: ", error);
});


/**
 * Cribl Stream Configuration Example
 * 
 * This example demonstrates how to programmatically create and configure a complete
 * data pipeline in Cribl Edge using the Control Plane SDK. It creates:
 * 
 * 1. A Fleet to manage the configuration
 * 2. A TCP JSON source to receive data on port 9020
 * 3. A filesystem destination to output processed data
 * 4. A pipeline that filters events to keep only the "name" field
 * 5. A route that connects the source to the pipeline and destination
 *
 * Data flow: TCP JSON Source → Route → Pipeline → File Destination
 *
 * The example includes proper error handling, checks for existing resources,
 * and automatically deploys the configuration to make it active.
 * 
 * Prerequisites:
 * - Configure your .env file
 * - Requires Enterprise License on the server
 */

import {
  ConfigGroup,
  InputTcpjson,
  OutputFilesystem,
  Pipeline,
  RoutesRoute,
} from "../dist/esm/models";
import { baseUrl, createCriblClient } from "./auth";

const PORT = 9020;
const AUTH_TOKEN = "4a4b3663-7a57-7369-7632-795553573668";
const FLEET_ID = "my-fleet";

const myFleet: ConfigGroup = {
  onPrem: true,
  workerRemoteAccess: true,
  isFleet: true,
  isSearch: false,
  id: FLEET_ID
};

const tcpJsonSource: InputTcpjson = {
  id: "my-tcp-json",
  type: "tcpjson",
  port: PORT,
  authType: "manual",
  authToken: AUTH_TOKEN,
};

const fileSystemDestination: OutputFilesystem = {
  id: "my-fs-destination",
  type: "filesystem",
  destPath: "/tmp/my-output",
  compress: "none"
};

// Pipeline configuration: filters events to keep only the "name" field
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
const groupUrl = `${baseUrl}/m/${myFleet.id}`;

async function main() {
  // Initialize Cribl client
  const cribl = await createCriblClient();

  // Verify fleet doesn't already exist
  const fleetResponse = await cribl.groups.get({ id: myFleet.id, product: "edge" });
  if (fleetResponse.items!.length > 0) {
    console.log(`⚠️ Fleet already exists: ${myFleet.id}. Try different fleet id.`);
    return;
  }

  // Create Fleet
  await cribl.groups.create({ product: "edge", configGroup: myFleet });
  console.log(`✅ Fleet created: ${myFleet.id}`);

  // Create TCP JSON source
  await cribl.sources.create(tcpJsonSource, { serverURL: groupUrl });
  console.log(`✅ Tcp Json Source created: ${tcpJsonSource.id}`);

  // Create file destination
  await cribl.destinations.create(fileSystemDestination, { serverURL: groupUrl });
  console.log(`✅ File Destination created: ${fileSystemDestination.id}`);

  // Create pipeline
  await cribl.pipelines.create(pipeline, { serverURL: groupUrl });
  console.log(`✅ Pipeline created: ${pipeline.id}`);

  // Add route to routing table
  const routesListResponse = await cribl.routes.list({ serverURL: groupUrl });
  const routes = routesListResponse.items?.[0];
  if (!routes || !routes.id) {
    throw new Error("No routes found");
  }
  routes.routes = [route, ...routes.routes];
  await cribl.routes.update({ id: routes.id, routes }, { serverURL: groupUrl });
  console.log(`✅ Route inserted: ${route.id}`);

  // Deploy configuration changes
  const response = await cribl.groups.configs.versions.get({
    id: myFleet.id,
    product: "edge",
  });
  if (!response.items) {
    throw new Error("No version found");
  }
  const version: string = response.items[0];

  await cribl.groups.deploy({
    product: "edge",
    id: myFleet.id,
    deployRequest: { version },
  });
  console.log(`✅ Fleet changes deployed: ${myFleet.id}`);
}

main().catch(error => {
  console.error("❌ Something went wrong: ", error);
});

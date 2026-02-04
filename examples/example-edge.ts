
/**
 * Cribl Edge Configuration Example
 * 
 * This example demonstrates how to programmatically create and configure a 
 * complete data pipeline in Cribl Edge using the Control Plane SDK.
 * 
 * This example creates:
 * 
 * 1. A Fleet to manage the configuration.
 * 2. A Syslog Source to receive data on port 9021.
 * 3. An Amazon S3 Destination to store processed data.
 * 4. A Pipeline that filters events and keeps only data in the "eventSource" 
 * and "eventID" fields.
 * 5. A Route that connects the Source to the Pipeline and Destination.
 * 
 * This example also deploys the configuration to the Fleet to make it active.
 * 
 * Data flow: Syslog Source → Route → Pipeline → Amazon S3 Destination
 *
 * This example includes error handling and checks for existing resources.
 * 
 * Prerequisites:
 * - An .env file that is configured with your credentials.
 * - Your AWS S3 values for AWS_API_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME, and 
 * AWS_REGION.
 * - An Enterprise License on the server.
 */

const FLEET_ID = "my-fleet";

// Syslog Source configuration
const SYSLOG_PORT = 9021;

// Amazon S3 Destination configuration: Replace the placeholder values
const AWS_API_KEY = "your-aws-api-key"; // Replace with your AWS Access Key ID
const AWS_SECRET_KEY = "your-aws-secret-key"; // Replace with your AWS Secret Access Key
const AWS_BUCKET_NAME = "your-aws-bucket-name"; // Replace with your S3 bucket name
const AWS_REGION = "us-east-2"; // Replace with your S3 bucket region

import {
  ConfigGroup,
  PipelineInput,
  RouteConf,
} from "../dist/esm/models";
import { CreateInputRequest, CreateOutputRequest } from "../dist/esm/models/operations";
import { baseUrl, createCriblClient } from "./auth";

// Create Fleet
const myFleet: ConfigGroup = {
  onPrem: true,
  workerRemoteAccess: true,
  isFleet: true,
  isSearch: false,
  id: FLEET_ID
};

// Create Syslog Source
const syslogSource: CreateInputRequest = {
  id: "my-syslog-source",
  type: "syslog",
  host: "0.0.0.0",
  tcpPort: SYSLOG_PORT,
  tls: {
    disabled: true,
  }
};

// Create Amazon S3 Destination
const s3Destination: CreateOutputRequest = {
  id: "my-s3-destination",
  type: "s3",
  bucket: AWS_BUCKET_NAME,
  region: AWS_REGION,
  awsSecretKey: AWS_SECRET_KEY,
  awsApiKey: AWS_API_KEY,
  stagePath: "/tmp/stage",
  compress: "gzip",
  compressionLevel: "best_speed",
  emptyDirCleanupSec: 300,
};

// Pipeline configuration: filter events and keep only data in the "eventSource" and "eventID" fields
const pipeline: PipelineInput = {
  id: "my-pipeline",
  conf: {
    asyncFuncTimeout: 1000,
      functions: [{
        filter: "true",
        conf: {
            remove: ["*"],
            keep: ["eventSource", "eventID"]
        },
        id: "eval",
        final: true,
    }],
  },
};

// Route configuration: route data from the Source to the Pipeline and Destination
const route: RouteConf = {
  final: false,
  id: "my-route",
  name: "my-route",
  pipeline: pipeline.id,
  output: s3Destination.id,
  filter: `__inputId=='${syslogSource.id}'`,
  description: "This is my new Route",
};
const groupUrl = `${baseUrl}/m/${myFleet.id}`;

async function main() {
  // Initialize Cribl client
  const cribl = await createCriblClient();

  // Verify that Fleet doesn't already exist
  const fleetResponse = await cribl.groups.get({ id: myFleet.id, product: "edge" });
  if (fleetResponse.items!.length > 0) {
    console.log(`⚠️ Fleet already exists: ${myFleet.id}. Try a different Fleet ID.`);
    return;
  }

  // Create Fleet
  await cribl.groups.create({ product: "edge", groupCreateRequest: myFleet });
  console.log(`✅ Fleet created: ${myFleet.id}`);

  // Create Syslog Source
  await cribl.sources.create(syslogSource, { serverURL: groupUrl });
  console.log(`✅ Syslog Source created: ${syslogSource.id}`);

  // Create Amazon S3 Destination
  await cribl.destinations.create(s3Destination, { serverURL: groupUrl });
  console.log(`✅ Amazon S3 Destination created: ${s3Destination.id}`);

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
  const commitResponse = await cribl.versions.commits.create({
    message: "Commit for Edge example", effective: true, files: ["."]
  }, { serverURL: groupUrl });

  const version: string = commitResponse.items![0].commit;
  console.log(`✅ Committed configuration changes to the fleet: ${myFleet.id}, commit ID: ${version}`);

  // Deploy configuration changes
  await cribl.groups.deploy({
    product: "edge",
    id: myFleet.id,
    deployRequest: { version },
  });
  console.log(`✅ Fleet changes deployed: ${myFleet.id}`);
}

main().catch(error => {
  console.error("❌ Something went wrong: ", error.message);
});

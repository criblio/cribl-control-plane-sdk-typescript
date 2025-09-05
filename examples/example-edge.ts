
/**
 * Cribl Stream Configuration Example
 * 
 * This example demonstrates how to programmatically create and configure a complete
 * data pipeline in Cribl Edge using the Control Plane SDK. It creates:
 * 
 * 1. A Fleet to manage the configuration
 * 2. A Syslog source to receive data on port 9021
 * 3. An Amazon S3 destination to store processed data
 * 4. A pipeline that filters events to keep only eventSource and eventID fields
 * 5. A route that connects the source to the pipeline and destination
 * 6. Deploys the configuration to the fleet to make it active
 * 
 * Data flow: Syslog Source → Route → Pipeline → S3 Destination
 *
 * The example includes proper error handling, checks for existing resources,
 * and automatically deploys the configuration to make it active.
 * 
 * Prerequisites:
 * - Configure your .env file with appropriate credentials
 * - Update AWS S3 configuration values (AWS_API_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME, AWS_REGION)
 * - Requires Enterprise License on the server
 */

const FLEET_ID = "my-fleet";

// Syslog source configuration
const SYSLOG_PORT = 9021;

// Amazon S3 destination configuration
// [ UPDATE THESE VALUES ]
const AWS_API_KEY = "your-aws-api-key"; // Replace with your AWS Access Key ID
const AWS_SECRET_KEY = "your-aws-secret-key"; // Replace with your AWS Secret Access Key
const AWS_BUCKET_NAME = "your-aws-bucket-name"; // Replace with your S3 bucket name
const AWS_REGION = "us-east-2"; // Replace with your S3 bucket region

import {
  ConfigGroup,
  InputSyslog,
  OutputS3,
  Pipeline,
  RoutesRoute,
} from "../dist/esm/models";
import { baseUrl, createCriblClient } from "./auth";

const myFleet: ConfigGroup = {
  onPrem: true,
  workerRemoteAccess: true,
  isFleet: true,
  isSearch: false,
  id: FLEET_ID
};

const syslogSource: InputSyslog = {
  id: "my-syslog-source",
  type: "syslog",
  tcpPort: SYSLOG_PORT,
  tls: {
    disabled: true,
  }
};

const s3Destination: OutputS3 = {
  id: "my-s3-destination",
  type: "s3",
  bucket: AWS_BUCKET_NAME,
  region: AWS_REGION,
  awsSecretKey: AWS_SECRET_KEY,
  awsApiKey: AWS_API_KEY,
  compress: "gzip",
  compressionLevel: "best_speed",
  emptyDirCleanupSec: 300,
};

// Pipeline configuration: filters events to keep only eventSource and eventID fields
const pipeline: Pipeline = {
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

const route: RoutesRoute = {
  final: false,
  id: "my-route",
  name: "my-route",
  pipeline: pipeline.id,
  output: s3Destination.id,
  filter: `__inputId=='${syslogSource.id}'`,
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

  // Create Syslog source
  await cribl.sources.create(syslogSource, { serverURL: groupUrl });
  console.log(`✅ Syslog source created: ${syslogSource.id}`);

  // Create S3 destination
  await cribl.destinations.create(s3Destination, { serverURL: groupUrl });
  console.log(`✅ S3 destination created: ${s3Destination.id}`);

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
  console.error("❌ Something went wrong: ", error.message);
});

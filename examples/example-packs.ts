/**
 * Cribl Packs Integration Example
 * 
 * This example demonstrates how to install and configure a Cribl Pack using the 
 * Control Plane SDK. It installs the Palo Alto Networks pack from GitHub and 
 * creates a complete data pipeline within the pack:
 * 
 * 1. Installs the Palo Alto Networks pack from a remote URL
 * 2. Creates a TCP JSON source to receive data on port 9020
 * 3. Creates an Amazon S3 destination for data storage
 * 4. Creates a pipeline that filters events to keep only the "name" field
 * 5. Creates a route connecting the source to the pipeline and destination
 * 
 * Data flow: TCP JSON Source → Route → Pipeline → S3 Destination
 * 
 * Note: This example creates resources within the pack but does not commit
 * or deploy the configuration to a worker group.
 * 
 * Prerequisites: 
 * - Configure your .env file with appropriate credentials
 * - Create a worker group with the configured WORKER_GROUP_ID
 * - Update AWS S3 configuration values (AWS_API_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME, AWS_REGION)
 */

import {
  InputTcpjson,
  OutputS3,
  Pipeline,
  RoutesRoute,
} from "../dist/esm/models";
import { baseUrl, createCriblClient } from "./auth";

const PACK_URL = "https://github.com/criblpacks/cribl-palo-alto-networks/releases/download/1.1.5/cribl-palo-alto-networks-d6bc6883-1.1.5.crbl";
const PACK_ID = "cribl-palo-alto-networks";
const WORKER_GROUP_ID = "my-worker-group";

// TCP JSON source configuration
const AUTH_TOKEN = "4a4b3663-7a57-7369-7632-795553573668";
const PORT = 9020;

// Amazon S3 destination configuration
// [ UPDATE THESE VALUES ]
const AWS_API_KEY = "your-aws-api-key"; // Replace with your AWS Access Key ID
const AWS_SECRET_KEY = "your-aws-secret-key"; // Replace with your AWS Secret Access Key
const AWS_BUCKET_NAME = "your-aws-bucket-name"; // Replace with your S3 bucket name
const AWS_REGION = "us-east-2"; // Replace with your S3 bucket region

const groupUrl = `${baseUrl}/m/${WORKER_GROUP_ID}`;
const packUrl = `${groupUrl}/p/${PACK_ID}`;

// TCP JSON source configuration
const tcpJsonSource: InputTcpjson = {
  id: "my-tcp-json",
  type: "tcpjson",
  port: PORT,
  authType: "manual",
  authToken: AUTH_TOKEN,
};

// Amazon S3 destination configuration
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

// Pipeline configuration: filters events to keep only the "name" field
const pipeline: Pipeline = {
  id: "my-pipeline",
  conf: {
    asyncFuncTimeout: 1000,
    functions: [
      {
        filter: "true",
        conf: {
          remove: ["*"],
          keep: ["name"],
        },
        id: "eval",
        final: true,
      },
    ],
  },
};

// Route configuration: routes data from the source to the pipeline and destination
const route: RoutesRoute = {
  final: false,
  id: "my-route",
  name: "my-route",
  pipeline: pipeline.id,
  output: s3Destination.id,
  filter: "__inputId=='tcpjson:my-tcp-json'",
  description: "This is my new route",
  additionalProperties: {},
};

async function main() {
  const cribl = await createCriblClient();

  // Install pack from URL
  await cribl.packs.install({ source: PACK_URL, id: PACK_ID }, { serverURL: groupUrl });
  console.log(`✅ Installed pack "${PACK_ID}" from: ${PACK_URL}`);

  // Create TCP JSON source in pack
  await cribl.sources.create(tcpJsonSource, { serverURL: packUrl });
  console.log(`✅ Created tcp json source: ${tcpJsonSource.id} in pack: "${PACK_ID}"`);

  // Create s3 destination in pack
  await cribl.destinations.create(s3Destination, { serverURL: packUrl });
  console.log(`✅ Created s3 destination: ${s3Destination.id} in pack: "${PACK_ID}"`);

  // Create pipeline in pack
  await cribl.pipelines.create(pipeline, { serverURL: packUrl });
  console.log(`✅ Created pipeline: ${pipeline.id} in pack: "${PACK_ID}"`);

  // Add route to routing table in pack
  const routesListResponse = await cribl.routes.list({ serverURL: packUrl });
  const routes = routesListResponse.items?.[0];
  if (!routes || !routes.id) {
    throw new Error("No routes found");
  }
  routes.routes = [route, ...routes.routes];
  await cribl.routes.update({ id: routes.id, routes }, { serverURL: packUrl });
  console.log(`✅ Route inserted: ${route.id} in pack: ${PACK_ID}`);
  console.log(`ℹ️ This example does not commit / deploy the configuration to the worker group.`);
}

main().catch(error => {
  console.error("❌ Something went wrong: ", error);
});
  

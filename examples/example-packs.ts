/**
 * Cribl Packs Integration Example
 * 
 * This example demonstrates how to install and configure a Cribl Pack using the 
 * Control Plane SDK. It installs the Palo Alto Networks Pack from GitHub and 
 * creates a complete data pipeline within the Pack.
 * 
 * 1. Install the Palo Alto Networks Pack from a remote URL.
 * 2. Create a TCP JSON Source to receive data on port 9020.
 * 3. Create an Amazon S3 Destination for data storage.
 * 4. Create a Pipeline that filters events and keeps only data in the "name" 
 * field.
 * 5. Create a Route that connects the Source to the Pipeline and Destination.
 * 
 * Data flow: TCP JSON Source → Route → Pipeline → Amazon S3 Destination
 * 
 * NOTE: This example creates resources within the Pack but does not commit
 * or deploy the configuration to a Worker Group.
 * 
 * Prerequisites: 
 * - An .env file that is configured with your credentials.
 * - A Worker Group whose ID matches the configured WORKER_GROUP_ID value.
 * - Your AWS S3 values for AWS_API_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME, and 
 * AWS_REGION.
 */

import {
  PipelineInput,
  RoutesRoute,
} from "../dist/esm/models";
import { CreateInputRequest, CreateOutputRequest } from "../dist/esm/models/operations";
import { baseUrl, createCriblClient } from "./auth";

const PACK_URL = "https://github.com/criblpacks/cribl-palo-alto-networks/releases/download/1.1.5/cribl-palo-alto-networks-d6bc6883-1.1.5.crbl";
const PACK_ID = "cribl-palo-alto-networks";
const WORKER_GROUP_ID = "my-worker-group";

// TCP JSON Source configuration
const AUTH_TOKEN = "4a4b3663-7a57-7369-7632-795553573668";
const PORT = 9020;

// Amazon S3 Destination configuration: Replace the placeholder values
const AWS_API_KEY = "your-aws-api-key"; // Replace with your AWS Access Key ID
const AWS_SECRET_KEY = "your-aws-secret-key"; // Replace with your AWS Secret Access Key
const AWS_BUCKET_NAME = "your-aws-bucket-name"; // Replace with your S3 bucket name
const AWS_REGION = "us-east-2"; // Replace with your S3 bucket region

const groupUrl = `${baseUrl}/m/${WORKER_GROUP_ID}`;
const packUrl = `${groupUrl}/p/${PACK_ID}`;

// TCP JSON Source configuration
const tcpJsonSource: CreateInputRequest = {
  id: "my-tcp-json",
  type: "tcpjson",
  host: "0.0.0.0",
  port: PORT,
  sendToRoutes: true,
  authType: "manual",
  authToken: AUTH_TOKEN,
};

// Amazon S3 Destination configuration
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

// Pipeline configuration: filter events and keep only data in the "name" field
const pipeline: PipelineInput = {
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

// Route configuration: route data from the Source to the Pipeline and Destination
const route: RoutesRoute = {
  final: false,
  id: "my-route",
  name: "my-route",
  pipeline: pipeline.id,
  output: s3Destination.id,
  filter: "__inputId=='tcpjson:my-tcp-json'",
  description: "This is my new Route",
  additionalProperties: {},
};

async function main() {
  const cribl = await createCriblClient();

  // Install Pack from URL
  await cribl.packs.install({ source: PACK_URL, id: PACK_ID }, { serverURL: groupUrl });
  console.log(`✅ Installed Pack "${PACK_ID}" from: ${PACK_URL}`);

  // Create TCP JSON Source in Pack
  await cribl.sources.create(tcpJsonSource, { serverURL: packUrl });
  console.log(`✅ Created TCP JSON Source ${tcpJsonSource.id} in Pack: "${PACK_ID}"`);

  // Create Amazon S3 Destination in Pack
  await cribl.destinations.create(s3Destination, { serverURL: packUrl });
  console.log(`✅ Created Amazon S3 Destination ${s3Destination.id} in Pack: "${PACK_ID}"`);

  // Create Pipeline in Pack
  await cribl.pipelines.create(pipeline, { serverURL: packUrl });
  console.log(`✅ Created Pipeline ${pipeline.id} in Pack: "${PACK_ID}"`);

  // Add Route to Routing table in Pack
  const routesListResponse = await cribl.routes.list({ serverURL: packUrl });
  const routes = routesListResponse.items?.[0];
  if (!routes || !routes.id) {
    throw new Error("No Routes found");
  }
  routes.routes = [route, ...routes.routes];
  await cribl.routes.update({ id: routes.id, routes }, { serverURL: packUrl });
  console.log(`✅ Added Route ${route.id} in Pack: ${PACK_ID}`);
  console.log(`ℹ️ This example does not commit or deploy the configuration to the Worker Group.`);
}

main().catch(error => {
  console.error("❌ Something went wrong: ", error);
});
  

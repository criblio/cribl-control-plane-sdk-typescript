# cribl-control-plane-sdk-typescript
<!-- Start Summary [summary] -->
## Summary

Cribl API Reference: This API Reference lists available REST endpoints, along with their supported operations for accessing, creating, updating, or deleting resources. See our complementary product documentation at [docs.cribl.io](http://docs.cribl.io).
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [cribl-control-plane-sdk-typescript](#cribl-control-plane-sdk-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Json Streaming](#json-streaming)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add cribl-control-plane
```

### PNPM

```bash
pnpm add cribl-control-plane
```

### Bun

```bash
bun add cribl-control-plane
```

### Yarn

```bash
yarn add cribl-control-plane
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

## SDK Example Usage

### Example

```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  // Check server health
  const health = await criblControlPlane.health.get();

  const workerGroupId = "my-worker-group";
  const groupUrl = `https://api.example.com/m/${workerGroupId}`;
  
  // Create a TCP JSON Source
  const source = await criblControlPlane.sources.create({
    id: "my-tcp-json",
    type: "tcpjson",
    host: "0.0.0.0",
    port: 9020,
    authType: "manual",
    authToken: "your-auth-token",
  }, {
    serverURL: groupUrl,
  });

  // Create a Filesystem Destination
  const destination = await criblControlPlane.destinations.create({
    id: "my-fs-destination",
    type: "filesystem",
    destPath: "/tmp/my-output",
  }, {
    serverURL: groupUrl,
  });

  // Create a Pipeline
  const pipeline = await criblControlPlane.pipelines.create({
    id: "my-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      functions: [{
        filter: "true",
        conf: {
          remove: ["*"],
          keep: ["name"],
        },
        id: "eval",
        final: true,
      }],
    },
  }, {
    serverURL: groupUrl,
  });

  // Add Route to Routing table
  const routesListResponse = await criblControlPlane.routes.list({
    serverURL: groupUrl,
  });
  const routes = routesListResponse.items?.[0];
  if (routes && routes.id) {
    routes.routes = [{
      final: false,
      id: "my-route",
      name: "my-route",
      pipeline: pipeline.items?.[0]?.id,
      output: destination.items?.[0]?.id,
      filter: "__inputId=='tcpjson:my-tcp-json'",
      description: "My new route",
      additionalProperties: {},
    }, ...routes.routes];
    await criblControlPlane.routes.update({
      id: routes.id,
      routes,
    }, {
      serverURL: groupUrl,
    });
  }

  // Commit configuration changes
  const commitResponse = await criblControlPlane.versions.commits.create({
    groupId: workerGroupId,
    gitCommitParams: {
      message: "Initial configuration",
      effective: true,
      files: ["."],
    },
  });
  const version = commitResponse.items?.[0]?.commit;

  // Deploy configuration changes
  await criblControlPlane.groups.deploy({
    product: "stream",
    id: workerGroupId,
    deployRequest: { version },
  });
}

run();

```

> [!NOTE]
> Additional examples demonstrating various SDK features and use cases can be found in the [`examples`](./examples) directory.

<!-- No End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name          | Type   | Scheme       | Environment Variable             |
| ------------- | ------ | ------------ | -------------------------------- |
| `bearerAuth`  | http   | HTTP Bearer  | `CRIBLCONTROLPLANE_BEARER_AUTH`  |
| `clientOauth` | oauth2 | OAuth2 token | `CRIBLCONTROLPLANE_CLIENT_OAUTH` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.create({
    authType: "connectionString",
    configObj: "<value>",
    connectionString:
      "mysql://admin:password123@mysql.example.com:3306/production?ssl=true",
    connectionTimeout: 10000,
    credsSecrets: "<value>",
    databaseType: "mysql",
    description: "Production MySQL database for customer data",
    id: "mysql-prod-db",
    password: "QpvMa8DI_lUJL_b",
    requestTimeout: 4657.19,
    tags: "production,mysql,customer-data",
    user: "Dolores.Feil",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Auth.Tokens](docs/sdks/tokens/README.md)

* [get](docs/sdks/tokens/README.md#get) - Log in and fetch an authentication token

### [Collectors](docs/sdks/collectors/README.md)

* [create](docs/sdks/collectors/README.md#create) - Create a Collector
* [list](docs/sdks/collectors/README.md#list) - List all Collectors
* [delete](docs/sdks/collectors/README.md#delete) - Delete a Collector
* [get](docs/sdks/collectors/README.md#get) - Get a Collector
* [update](docs/sdks/collectors/README.md#update) - Update a Collector

### [DatabaseConnections](docs/sdks/databaseconnections/README.md)

* [create](docs/sdks/databaseconnections/README.md#create) - Create Database Connection
* [delete](docs/sdks/databaseconnections/README.md#delete) - Delete a Database Connection
* [get](docs/sdks/databaseconnections/README.md#get) - Get a Database Connection
* [update](docs/sdks/databaseconnections/README.md#update) - Update a Database Connection

### [Destinations](docs/sdks/destinations/README.md)

* [list](docs/sdks/destinations/README.md#list) - List all Destinations
* [create](docs/sdks/destinations/README.md#create) - Create a Destination
* [get](docs/sdks/destinations/README.md#get) - Get a Destination
* [update](docs/sdks/destinations/README.md#update) - Update a Destination
* [delete](docs/sdks/destinations/README.md#delete) - Delete a Destination

#### [Destinations.Pq](docs/sdks/destinationspq/README.md)

* [clear](docs/sdks/destinationspq/README.md#clear) - Clear the persistent queue for a Destination
* [get](docs/sdks/destinationspq/README.md#get) - Get information about the latest job to clear the persistent queue for a Destination

#### [Destinations.Samples](docs/sdks/samples/README.md)

* [get](docs/sdks/samples/README.md#get) - Get sample event data for a Destination
* [create](docs/sdks/samples/README.md#create) - Send sample event data to a Destination

### [Functions](docs/sdks/functions/README.md)

* [get](docs/sdks/functions/README.md#get) - Get a Function
* [list](docs/sdks/functions/README.md#list) - List all Functions

### [Groups](docs/sdks/groups/README.md)

* [list](docs/sdks/groups/README.md#list) - List all Worker Groups, Outpost Groups, or Edge Fleets for the specified Cribl product
* [create](docs/sdks/groups/README.md#create) - Create a Worker Group, Outpost Group, or Edge Fleet for the specified Cribl product
* [get](docs/sdks/groups/README.md#get) - Get a Worker Group, Outpost Group, or Edge Fleet
* [update](docs/sdks/groups/README.md#update) - Update a Worker Group, Outpost Group, or Edge Fleet
* [delete](docs/sdks/groups/README.md#delete) - Delete a Worker Group, Outpost Group, or Edge Fleet
* [deploy](docs/sdks/groups/README.md#deploy) - Deploy commits to a Worker Group, Outpost Group, or Edge Fleet

#### [Groups.Acl](docs/sdks/acl/README.md)

* [get](docs/sdks/acl/README.md#get) - Get the Access Control List for a Worker Group, Outpost Group, or Edge Fleet

##### [Groups.Acl.Teams](docs/sdks/teams/README.md)

* [get](docs/sdks/teams/README.md#get) - Get the Access Control List for teams with permissions on a Worker Group, Outpost Group, or Edge Fleet for the specified Cribl product

#### [Groups.Configs.Versions](docs/sdks/configsversions/README.md)

* [get](docs/sdks/configsversions/README.md#get) - Get the configuration version for a Worker Group, Outpost Group, or Edge Fleet

### [Health](docs/sdks/health/README.md)

* [get](docs/sdks/health/README.md#get) - Retrieve health status of the server

### [LakeDatasets](docs/sdks/lakedatasets/README.md)

* [create](docs/sdks/lakedatasets/README.md#create) - Create a Lake Dataset
* [list](docs/sdks/lakedatasets/README.md#list) - List all Lake Datasets
* [delete](docs/sdks/lakedatasets/README.md#delete) - Delete a Lake Dataset
* [get](docs/sdks/lakedatasets/README.md#get) - Get a Lake Dataset
* [update](docs/sdks/lakedatasets/README.md#update) - Update a Lake Dataset

### [Nodes](docs/sdks/nodes/README.md)

* [count](docs/sdks/nodes/README.md#count) - Get a count of Worker or Edge Nodes
* [get](docs/sdks/nodes/README.md#get) - Get detailed metadata for a Worker or Edge Node
* [list](docs/sdks/nodes/README.md#list) - Get detailed metadata for Worker or Edge Nodes
* [restart](docs/sdks/nodes/README.md#restart) - Restart Worker or Edge Nodes

#### [Nodes.Summaries](docs/sdks/summaries/README.md)

* [get](docs/sdks/summaries/README.md#get) - Get a summary of the Distributed deployment

### [Packs](docs/sdks/packs/README.md)

* [install](docs/sdks/packs/README.md#install) - Install a Pack
* [list](docs/sdks/packs/README.md#list) - List all Packs
* [upload](docs/sdks/packs/README.md#upload) - Upload a Pack file
* [delete](docs/sdks/packs/README.md#delete) - Uninstall a Pack
* [get](docs/sdks/packs/README.md#get) - Get a Pack
* [update](docs/sdks/packs/README.md#update) - Upgrade a Pack

#### [Packs.Destinations](docs/sdks/packsdestinations/README.md)

* [list](docs/sdks/packsdestinations/README.md#list) - List all Destinations within a Pack
* [create](docs/sdks/packsdestinations/README.md#create) - Create a Destination within a Pack
* [get](docs/sdks/packsdestinations/README.md#get) - Get a Destination within a Pack
* [update](docs/sdks/packsdestinations/README.md#update) - Update a Destination within a Pack
* [delete](docs/sdks/packsdestinations/README.md#delete) - Delete a Destination within a Pack

##### [Packs.Destinations.Pq](docs/sdks/packsdestinationspq/README.md)

* [clear](docs/sdks/packsdestinationspq/README.md#clear) - Clear the persistent queue for a Destination within a Pack
* [get](docs/sdks/packsdestinationspq/README.md#get) - Get information about the latest job to clear the persistent queue for a Destination within a Pack

##### [Packs.Destinations.Samples](docs/sdks/packssamples/README.md)

* [get](docs/sdks/packssamples/README.md#get) - Get sample event data for a Destination within a Pack
* [create](docs/sdks/packssamples/README.md#create) - Send sample event data to a Destination within a Pack

#### [Packs.Sources](docs/sdks/packssources/README.md)

* [list](docs/sdks/packssources/README.md#list) - List all Sources within a Pack
* [create](docs/sdks/packssources/README.md#create) - Create a Source within a Pack
* [get](docs/sdks/packssources/README.md#get) - Get a Source within a Pack
* [update](docs/sdks/packssources/README.md#update) - Update a Source within a Pack
* [delete](docs/sdks/packssources/README.md#delete) - Delete a Source within a Pack

##### [Packs.Sources.HecTokens](docs/sdks/packshectokens/README.md)

* [create](docs/sdks/packshectokens/README.md#create) - Add an HEC token and optional metadata to a Splunk HEC Source within a Pack
* [update](docs/sdks/packshectokens/README.md#update) - Update metadata for an HEC token for a Splunk HEC Source within a Pack

##### [Packs.Sources.Pq](docs/sdks/packssourcespq/README.md)

* [clear](docs/sdks/packssourcespq/README.md#clear) - Clear the persistent queue for a Source within a Pack
* [get](docs/sdks/packssourcespq/README.md#get) - Get information about the latest job to clear the persistent queue for a Source within a Pack

### [Pipelines](docs/sdks/pipelines/README.md)

* [create](docs/sdks/pipelines/README.md#create) - Create a Pipeline
* [list](docs/sdks/pipelines/README.md#list) - List all Pipelines
* [delete](docs/sdks/pipelines/README.md#delete) - Delete a Pipeline
* [get](docs/sdks/pipelines/README.md#get) - Get a Pipeline
* [update](docs/sdks/pipelines/README.md#update) - Update a Pipeline

### [Routes](docs/sdks/routes/README.md)

* [get](docs/sdks/routes/README.md#get) - Get a Routing table
* [update](docs/sdks/routes/README.md#update) - Update a Route
* [list](docs/sdks/routes/README.md#list) - List all Routes
* [append](docs/sdks/routes/README.md#append) - Add a Route to the end of the Routing table

### [Sources](docs/sdks/sources/README.md)

* [list](docs/sdks/sources/README.md#list) - List all Sources
* [create](docs/sdks/sources/README.md#create) - Create a Source
* [get](docs/sdks/sources/README.md#get) - Get a Source
* [update](docs/sdks/sources/README.md#update) - Update a Source
* [delete](docs/sdks/sources/README.md#delete) - Delete a Source

#### [Sources.HecTokens](docs/sdks/hectokens/README.md)

* [create](docs/sdks/hectokens/README.md#create) - Add an HEC token and optional metadata to a Splunk HEC Source
* [update](docs/sdks/hectokens/README.md#update) - Update metadata for an HEC token for a Splunk HEC Source

#### [Sources.Pq](docs/sdks/sourcespq/README.md)

* [clear](docs/sdks/sourcespq/README.md#clear) - Clear the persistent queue for a Source
* [get](docs/sdks/sourcespq/README.md#get) - Get information about the latest job to clear the persistent queue for a Source

### [System.Captures](docs/sdks/captures/README.md)

* [create](docs/sdks/captures/README.md#create) - Capture live incoming data

### [System.Settings.Cribl](docs/sdks/cribl/README.md)

* [list](docs/sdks/cribl/README.md#list) - Get Cribl system settings
* [update](docs/sdks/cribl/README.md#update) - Update Cribl system settings

### [Versions.Branches](docs/sdks/branches/README.md)

* [list](docs/sdks/branches/README.md#list) - List all branches in the Git repository used for Cribl configuration
* [get](docs/sdks/branches/README.md#get) - Get the name of the Git branch that the Cribl configuration is checked out to

### [Versions.Commits](docs/sdks/commits/README.md)

* [create](docs/sdks/commits/README.md#create) - Create a new commit for pending changes to the Cribl configuration
* [diff](docs/sdks/commits/README.md#diff) - Get the diff for a commit
* [list](docs/sdks/commits/README.md#list) - List the commit history
* [push](docs/sdks/commits/README.md#push) - Push local commits to the remote repository
* [revert](docs/sdks/commits/README.md#revert) - Revert a commit in the local repository
* [get](docs/sdks/commits/README.md#get) - Get the diff and log message for a commit
* [undo](docs/sdks/commits/README.md#undo) - Discard uncommitted (staged) changes

#### [Versions.Commits.Files](docs/sdks/files/README.md)

* [count](docs/sdks/files/README.md#count) - Get a count of files that changed since a commit
* [list](docs/sdks/files/README.md#list) - Get the names and statuses of files that changed since a commit

### [Versions.Configs](docs/sdks/versionsconfigs/README.md)

* [get](docs/sdks/versionsconfigs/README.md#get) - Get the configuration and status for the Git integration

### [Versions.Statuses](docs/sdks/statuses/README.md)

* [get](docs/sdks/statuses/README.md#get) - Get the status of the current working tree

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authTokensGet`](docs/sdks/tokens/README.md#get) - Log in and fetch an authentication token
- [`collectorsCreate`](docs/sdks/collectors/README.md#create) - Create a Collector
- [`collectorsDelete`](docs/sdks/collectors/README.md#delete) - Delete a Collector
- [`collectorsGet`](docs/sdks/collectors/README.md#get) - Get a Collector
- [`collectorsList`](docs/sdks/collectors/README.md#list) - List all Collectors
- [`collectorsUpdate`](docs/sdks/collectors/README.md#update) - Update a Collector
- [`databaseConnectionsCreate`](docs/sdks/databaseconnections/README.md#create) - Create Database Connection
- [`databaseConnectionsDelete`](docs/sdks/databaseconnections/README.md#delete) - Delete a Database Connection
- [`databaseConnectionsGet`](docs/sdks/databaseconnections/README.md#get) - Get a Database Connection
- [`databaseConnectionsUpdate`](docs/sdks/databaseconnections/README.md#update) - Update a Database Connection
- [`destinationsCreate`](docs/sdks/destinations/README.md#create) - Create a Destination
- [`destinationsDelete`](docs/sdks/destinations/README.md#delete) - Delete a Destination
- [`destinationsGet`](docs/sdks/destinations/README.md#get) - Get a Destination
- [`destinationsList`](docs/sdks/destinations/README.md#list) - List all Destinations
- [`destinationsPqClear`](docs/sdks/destinationspq/README.md#clear) - Clear the persistent queue for a Destination
- [`destinationsPqGet`](docs/sdks/destinationspq/README.md#get) - Get information about the latest job to clear the persistent queue for a Destination
- [`destinationsSamplesCreate`](docs/sdks/samples/README.md#create) - Send sample event data to a Destination
- [`destinationsSamplesGet`](docs/sdks/samples/README.md#get) - Get sample event data for a Destination
- [`destinationsUpdate`](docs/sdks/destinations/README.md#update) - Update a Destination
- [`functionsGet`](docs/sdks/functions/README.md#get) - Get a Function
- [`functionsList`](docs/sdks/functions/README.md#list) - List all Functions
- [`groupsAclGet`](docs/sdks/acl/README.md#get) - Get the Access Control List for a Worker Group, Outpost Group, or Edge Fleet
- [`groupsAclTeamsGet`](docs/sdks/teams/README.md#get) - Get the Access Control List for teams with permissions on a Worker Group, Outpost Group, or Edge Fleet for the specified Cribl product
- [`groupsConfigsVersionsGet`](docs/sdks/configsversions/README.md#get) - Get the configuration version for a Worker Group, Outpost Group, or Edge Fleet
- [`groupsCreate`](docs/sdks/groups/README.md#create) - Create a Worker Group, Outpost Group, or Edge Fleet for the specified Cribl product
- [`groupsDelete`](docs/sdks/groups/README.md#delete) - Delete a Worker Group, Outpost Group, or Edge Fleet
- [`groupsDeploy`](docs/sdks/groups/README.md#deploy) - Deploy commits to a Worker Group, Outpost Group, or Edge Fleet
- [`groupsGet`](docs/sdks/groups/README.md#get) - Get a Worker Group, Outpost Group, or Edge Fleet
- [`groupsList`](docs/sdks/groups/README.md#list) - List all Worker Groups, Outpost Groups, or Edge Fleets for the specified Cribl product
- [`groupsUpdate`](docs/sdks/groups/README.md#update) - Update a Worker Group, Outpost Group, or Edge Fleet
- [`healthGet`](docs/sdks/health/README.md#get) - Retrieve health status of the server
- [`lakeDatasetsCreate`](docs/sdks/lakedatasets/README.md#create) - Create a Lake Dataset
- [`lakeDatasetsDelete`](docs/sdks/lakedatasets/README.md#delete) - Delete a Lake Dataset
- [`lakeDatasetsGet`](docs/sdks/lakedatasets/README.md#get) - Get a Lake Dataset
- [`lakeDatasetsList`](docs/sdks/lakedatasets/README.md#list) - List all Lake Datasets
- [`lakeDatasetsUpdate`](docs/sdks/lakedatasets/README.md#update) - Update a Lake Dataset
- [`nodesCount`](docs/sdks/nodes/README.md#count) - Get a count of Worker or Edge Nodes
- [`nodesGet`](docs/sdks/nodes/README.md#get) - Get detailed metadata for a Worker or Edge Node
- [`nodesList`](docs/sdks/nodes/README.md#list) - Get detailed metadata for Worker or Edge Nodes
- [`nodesRestart`](docs/sdks/nodes/README.md#restart) - Restart Worker or Edge Nodes
- [`nodesSummariesGet`](docs/sdks/summaries/README.md#get) - Get a summary of the Distributed deployment
- [`packsDelete`](docs/sdks/packs/README.md#delete) - Uninstall a Pack
- [`packsDestinationsCreate`](docs/sdks/packsdestinations/README.md#create) - Create a Destination within a Pack
- [`packsDestinationsDelete`](docs/sdks/packsdestinations/README.md#delete) - Delete a Destination within a Pack
- [`packsDestinationsGet`](docs/sdks/packsdestinations/README.md#get) - Get a Destination within a Pack
- [`packsDestinationsList`](docs/sdks/packsdestinations/README.md#list) - List all Destinations within a Pack
- [`packsDestinationsPqClear`](docs/sdks/packsdestinationspq/README.md#clear) - Clear the persistent queue for a Destination within a Pack
- [`packsDestinationsPqGet`](docs/sdks/packsdestinationspq/README.md#get) - Get information about the latest job to clear the persistent queue for a Destination within a Pack
- [`packsDestinationsSamplesCreate`](docs/sdks/packssamples/README.md#create) - Send sample event data to a Destination within a Pack
- [`packsDestinationsSamplesGet`](docs/sdks/packssamples/README.md#get) - Get sample event data for a Destination within a Pack
- [`packsDestinationsUpdate`](docs/sdks/packsdestinations/README.md#update) - Update a Destination within a Pack
- [`packsGet`](docs/sdks/packs/README.md#get) - Get a Pack
- [`packsInstall`](docs/sdks/packs/README.md#install) - Install a Pack
- [`packsList`](docs/sdks/packs/README.md#list) - List all Packs
- [`packsSourcesCreate`](docs/sdks/packssources/README.md#create) - Create a Source within a Pack
- [`packsSourcesDelete`](docs/sdks/packssources/README.md#delete) - Delete a Source within a Pack
- [`packsSourcesGet`](docs/sdks/packssources/README.md#get) - Get a Source within a Pack
- [`packsSourcesHecTokensCreate`](docs/sdks/packshectokens/README.md#create) - Add an HEC token and optional metadata to a Splunk HEC Source within a Pack
- [`packsSourcesHecTokensUpdate`](docs/sdks/packshectokens/README.md#update) - Update metadata for an HEC token for a Splunk HEC Source within a Pack
- [`packsSourcesList`](docs/sdks/packssources/README.md#list) - List all Sources within a Pack
- [`packsSourcesPqClear`](docs/sdks/packssourcespq/README.md#clear) - Clear the persistent queue for a Source within a Pack
- [`packsSourcesPqGet`](docs/sdks/packssourcespq/README.md#get) - Get information about the latest job to clear the persistent queue for a Source within a Pack
- [`packsSourcesUpdate`](docs/sdks/packssources/README.md#update) - Update a Source within a Pack
- [`packsUpdate`](docs/sdks/packs/README.md#update) - Upgrade a Pack
- [`packsUpload`](docs/sdks/packs/README.md#upload) - Upload a Pack file
- [`pipelinesCreate`](docs/sdks/pipelines/README.md#create) - Create a Pipeline
- [`pipelinesDelete`](docs/sdks/pipelines/README.md#delete) - Delete a Pipeline
- [`pipelinesGet`](docs/sdks/pipelines/README.md#get) - Get a Pipeline
- [`pipelinesList`](docs/sdks/pipelines/README.md#list) - List all Pipelines
- [`pipelinesUpdate`](docs/sdks/pipelines/README.md#update) - Update a Pipeline
- [`routesAppend`](docs/sdks/routes/README.md#append) - Add a Route to the end of the Routing table
- [`routesGet`](docs/sdks/routes/README.md#get) - Get a Routing table
- [`routesList`](docs/sdks/routes/README.md#list) - List all Routes
- [`routesUpdate`](docs/sdks/routes/README.md#update) - Update a Route
- [`sourcesCreate`](docs/sdks/sources/README.md#create) - Create a Source
- [`sourcesDelete`](docs/sdks/sources/README.md#delete) - Delete a Source
- [`sourcesGet`](docs/sdks/sources/README.md#get) - Get a Source
- [`sourcesHecTokensCreate`](docs/sdks/hectokens/README.md#create) - Add an HEC token and optional metadata to a Splunk HEC Source
- [`sourcesHecTokensUpdate`](docs/sdks/hectokens/README.md#update) - Update metadata for an HEC token for a Splunk HEC Source
- [`sourcesList`](docs/sdks/sources/README.md#list) - List all Sources
- [`sourcesPqClear`](docs/sdks/sourcespq/README.md#clear) - Clear the persistent queue for a Source
- [`sourcesPqGet`](docs/sdks/sourcespq/README.md#get) - Get information about the latest job to clear the persistent queue for a Source
- [`sourcesUpdate`](docs/sdks/sources/README.md#update) - Update a Source
- [`systemCapturesCreate`](docs/sdks/captures/README.md#create) - Capture live incoming data
- [`systemSettingsCriblList`](docs/sdks/cribl/README.md#list) - Get Cribl system settings
- [`systemSettingsCriblUpdate`](docs/sdks/cribl/README.md#update) - Update Cribl system settings
- [`versionsBranchesGet`](docs/sdks/branches/README.md#get) - Get the name of the Git branch that the Cribl configuration is checked out to
- [`versionsBranchesList`](docs/sdks/branches/README.md#list) - List all branches in the Git repository used for Cribl configuration
- [`versionsCommitsCreate`](docs/sdks/commits/README.md#create) - Create a new commit for pending changes to the Cribl configuration
- [`versionsCommitsDiff`](docs/sdks/commits/README.md#diff) - Get the diff for a commit
- [`versionsCommitsFilesCount`](docs/sdks/files/README.md#count) - Get a count of files that changed since a commit
- [`versionsCommitsFilesList`](docs/sdks/files/README.md#list) - Get the names and statuses of files that changed since a commit
- [`versionsCommitsGet`](docs/sdks/commits/README.md#get) - Get the diff and log message for a commit
- [`versionsCommitsList`](docs/sdks/commits/README.md#list) - List the commit history
- [`versionsCommitsPush`](docs/sdks/commits/README.md#push) - Push local commits to the remote repository
- [`versionsCommitsRevert`](docs/sdks/commits/README.md#revert) - Revert a commit in the local repository
- [`versionsCommitsUndo`](docs/sdks/commits/README.md#undo) - Discard uncommitted (staged) changes
- [`versionsConfigsGet`](docs/sdks/versionsconfigs/README.md#get) - Get the configuration and status for the Git integration
- [`versionsStatusesGet`](docs/sdks/statuses/README.md#get) - Get the status of the current working tree

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Json Streaming [jsonl] -->
## Json Streaming

Json Streaming ([jsonl][jsonl-format] / [x-ndjson][x-ndjson]) content type can be used to stream content from certain operations. These operations expose the stream as an [AsyncGenerator][async-generator] that can be consumed using a `for await...of` loop in TypeScript/JavaScript. The loop will terminate when the server no longer has any events to send and closes the underlying connection.

Here's an example of consuming a JSONL stream:

```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.system.captures.create({
    duration: 5,
    filter: "sourcetype===\"pan:traffic\"",
    level: 0,
    maxEvents: 100,
    stepDuration: 571732,
    workerId: "<id>",
    workerThreshold: 609412,
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();

```

[jsonl-format]: https://jsonlines.org/
[x-ndjson]: https://github.com/ndjson/ndjson-spec
[async-generator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator
<!-- End Json Streaming [jsonl] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { CriblControlPlane } from "cribl-control-plane";
import { openAsBlob } from "node:fs";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.upload({
    filename: "example.file",
    requestBody: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.system.settings.cribl.list({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```
<!-- No Retries [retries] -->

## Error Handling

[`CriblControlPlaneError`](./src/models/errors/criblcontrolplaneerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { CriblControlPlane } from "cribl-control-plane";
import * as errors from "cribl-control-plane/models/errors";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  try {
    const result = await criblControlPlane.sources.list();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.CriblControlPlaneError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorT) {
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`CriblControlPlaneError`](./src/models/errors/criblcontrolplaneerror.ts): The base class for HTTP error responses.
  * [`ErrorT`](./src/models/errors/errort.ts): Unexpected error. Status code `500`.

<details><summary>Less common errors (7)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`CriblControlPlaneError`](./src/models/errors/criblcontrolplaneerror.ts)**:
* [`HealthServerStatusError`](./src/models/errors/healthserverstatuserror.ts): Healthy status. Status code `420`. Applicable to 1 of 77 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- No Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { CriblControlPlane } from "cribl-control-plane";
import { HTTPClient } from "cribl-control-plane/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CriblControlPlane({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CriblControlPlane } from "cribl-control-plane";

const sdk = new CriblControlPlane({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CRIBLCONTROLPLANE_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

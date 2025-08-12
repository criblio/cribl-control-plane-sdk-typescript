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
yarn add cribl-control-plane zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
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
  const result = await criblControlPlane.lakeDatasets.create({
    lakeId: "<id>",
    criblLakeDataset: {
      acceleratedFields: [
        "<value 1>",
        "<value 2>",
      ],
      bucketName: "<value>",
      cacheConnection: {
        acceleratedFields: [
          "<value 1>",
          "<value 2>",
        ],
        backfillStatus: "pending",
        cacheRef: "<value>",
        createdAt: 7795.06,
        lakehouseConnectionType: "cache",
        migrationQueryId: "<id>",
        retentionInDays: 1466.58,
      },
      deletionStartedAt: 8310.58,
      description:
        "pleased toothbrush long brush smooth swiftly rightfully phooey chapel",
      format: "ddss",
      httpDAUsed: true,
      id: "<id>",
      retentionPeriodInDays: 456.37,
      searchConfig: {
        datatypes: [
          "<value 1>",
        ],
        metadata: {
          earliest: "<value>",
          enableAcceleration: true,
          fieldList: [
            "<value 1>",
            "<value 2>",
          ],
          latestRunInfo: {
            earliestScannedTime: 4334.7,
            finishedAt: 6811.22,
            latestScannedTime: 5303.3,
            objectCount: 9489.04,
          },
          scanMode: "detailed",
        },
      },
      storageLocationId: "<id>",
      viewName: "<value>",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

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
  const result = await criblControlPlane.lakeDatasets.create({
    lakeId: "<id>",
    criblLakeDataset: {
      acceleratedFields: [
        "<value 1>",
        "<value 2>",
      ],
      bucketName: "<value>",
      cacheConnection: {
        acceleratedFields: [
          "<value 1>",
          "<value 2>",
        ],
        backfillStatus: "pending",
        cacheRef: "<value>",
        createdAt: 7795.06,
        lakehouseConnectionType: "cache",
        migrationQueryId: "<id>",
        retentionInDays: 1466.58,
      },
      deletionStartedAt: 8310.58,
      description:
        "pleased toothbrush long brush smooth swiftly rightfully phooey chapel",
      format: "ddss",
      httpDAUsed: true,
      id: "<id>",
      retentionPeriodInDays: 456.37,
      searchConfig: {
        datatypes: [
          "<value 1>",
        ],
        metadata: {
          earliest: "<value>",
          enableAcceleration: true,
          fieldList: [
            "<value 1>",
            "<value 2>",
          ],
          latestRunInfo: {
            earliestScannedTime: 4334.7,
            finishedAt: 6811.22,
            latestScannedTime: 5303.3,
            objectCount: 9489.04,
          },
          scanMode: "detailed",
        },
      },
      storageLocationId: "<id>",
      viewName: "<value>",
    },
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

### [auth](docs/sdks/auth/README.md)

* [fetchToken](docs/sdks/auth/README.md#fetchtoken) - Log in and fetch an authentication token


### [deployments](docs/sdks/deployments/README.md)

* [getSummary](docs/sdks/deployments/README.md#getsummary) - Retrieve a summary of the Distributed deployment

### [destinations](docs/sdks/destinations/README.md)

* [list](docs/sdks/destinations/README.md#list) - List all Destinations
* [create](docs/sdks/destinations/README.md#create) - Create a Destination
* [get](docs/sdks/destinations/README.md#get) - Retrieve a Destination
* [update](docs/sdks/destinations/README.md#update) - Update a Destination
* [delete](docs/sdks/destinations/README.md#delete) - Delete a Destination
* [clearPersistentQueue](docs/sdks/destinations/README.md#clearpersistentqueue) - Clear the persistent queue for a Destination
* [getPersistentQueueStatus](docs/sdks/destinations/README.md#getpersistentqueuestatus) - Retrieve information about the latest job to clear the persistent queue for a Destination
* [getSampleData](docs/sdks/destinations/README.md#getsampledata) - Retrieve sample event data for a Destination
* [createSampleData](docs/sdks/destinations/README.md#createsampledata) - Send sample event data to a Destination

### [groups](docs/sdks/groups/README.md)

* [getConfigVersion](docs/sdks/groups/README.md#getconfigversion) - Retrieve the configuration version for a Worker Group or Edge Fleet
* [createByProduct](docs/sdks/groups/README.md#createbyproduct) - Create a Worker Group or Edge Fleet for the specified Cribl product
* [getByProduct](docs/sdks/groups/README.md#getbyproduct) - List all Worker Groups or Edge Fleets for the specified Cribl product
* [delete](docs/sdks/groups/README.md#delete) - Delete a Worker Group or Edge Fleet
* [get](docs/sdks/groups/README.md#get) - Retrieve a Worker Group or Edge Fleet
* [update](docs/sdks/groups/README.md#update) - Update a Worker Group or Edge Fleet
* [deployCommits](docs/sdks/groups/README.md#deploycommits) - Deploy commits to a Worker Group or Edge Fleet
* [getTeamAccessControlListByProduct](docs/sdks/groups/README.md#getteamaccesscontrollistbyproduct) - Retrieve the Access Control List (ACL) for teams with permissions on a Worker Group or Edge Fleet for the specified Cribl product
* [getAccessControlList](docs/sdks/groups/README.md#getaccesscontrollist) - Retrieve the Access Control List (ACL) for a Worker Group or Edge Fleet

### [healthInfo](docs/sdks/healthinfo/README.md)

* [get](docs/sdks/healthinfo/README.md#get) - Retrieve health status of the server

### [lakeDatasets](docs/sdks/lakedatasets/README.md)

* [create](docs/sdks/lakedatasets/README.md#create) - Create a Lake Dataset in the specified Lake
* [list](docs/sdks/lakedatasets/README.md#list) - List all Lake Datasets in the specified Lake
* [delete](docs/sdks/lakedatasets/README.md#delete) - Delete a Lake Dataset in the specified Lake
* [get](docs/sdks/lakedatasets/README.md#get) - Retrieve a Lake Dataset in the specified Lake
* [update](docs/sdks/lakedatasets/README.md#update) - Update a Lake Dataset in the specified Lake

### [nodes](docs/sdks/nodes/README.md)

* [list](docs/sdks/nodes/README.md#list) - Retrieve detailed metadata for Worker and Edge Nodes
* [restart](docs/sdks/nodes/README.md#restart) - Restart Worker and Edge Nodes

### [packs](docs/sdks/packs/README.md)

* [install](docs/sdks/packs/README.md#install) - Install a Pack
* [list](docs/sdks/packs/README.md#list) - List all Packs
* [delete](docs/sdks/packs/README.md#delete) - Uninstall a Pack
* [update](docs/sdks/packs/README.md#update) - Update a Pack

### [pipelines](docs/sdks/pipelines/README.md)

* [list](docs/sdks/pipelines/README.md#list) - List all Pipelines
* [create](docs/sdks/pipelines/README.md#create) - Create a Pipeline
* [get](docs/sdks/pipelines/README.md#get) - Retrieve a Pipeline
* [update](docs/sdks/pipelines/README.md#update) - Update a Pipeline
* [delete](docs/sdks/pipelines/README.md#delete) - Delete a Pipeline

### [routes](docs/sdks/routes/README.md)

* [list](docs/sdks/routes/README.md#list) - Get a list of Routes objects
* [get](docs/sdks/routes/README.md#get) - Get Routes by ID
* [update](docs/sdks/routes/README.md#update) - Update Routes
* [append](docs/sdks/routes/README.md#append) - Append Routes to the end of the Routing table

### [sources](docs/sdks/sources/README.md)

* [list](docs/sdks/sources/README.md#list) - List all Sources
* [create](docs/sdks/sources/README.md#create) - Create a Source
* [get](docs/sdks/sources/README.md#get) - Retrieve a Source
* [update](docs/sdks/sources/README.md#update) - Update a Source
* [delete](docs/sdks/sources/README.md#delete) - Delete a Source
* [createHecToken](docs/sdks/sources/README.md#createhectoken) - Add an HEC token and optional metadata to a Splunk HEC Source
* [updateHecTokenMetadata](docs/sdks/sources/README.md#updatehectokenmetadata) - Update metadata for an HEC token for a Splunk HEC Source

### [versioning](docs/sdks/versioning/README.md)

* [getBranch](docs/sdks/versioning/README.md#getbranch) - List all branches in the Git repository used for Cribl configuration
* [createCommit](docs/sdks/versioning/README.md#createcommit) - Create a new commit for pending changes to the Cribl configuration
* [getFileCount](docs/sdks/versioning/README.md#getfilecount) - Retrieve a count of files that changed since a commit
* [getBranchName](docs/sdks/versioning/README.md#getbranchname) - Retrieve the name of the Git branch that the Cribl configuration is checked out to
* [getDiff](docs/sdks/versioning/README.md#getdiff) - Retrieve the diff for a commit
* [getFileInfo](docs/sdks/versioning/README.md#getfileinfo) - Retrieve the names and statuses of files that changed since a commit
* [getConfigStatus](docs/sdks/versioning/README.md#getconfigstatus) - Retrieve the configuration and status for the Git integration
* [pushCommit](docs/sdks/versioning/README.md#pushcommit) - Push a commit from the local repository to the remote repository
* [revertCommit](docs/sdks/versioning/README.md#revertcommit) - Revert a commit in the local repository
* [showCommit](docs/sdks/versioning/README.md#showcommit) - Retrieve the diff and log message for a commit
* [getCurrentStatus](docs/sdks/versioning/README.md#getcurrentstatus) - Retrieve the status of the current working tree
* [syncLocalRemote](docs/sdks/versioning/README.md#synclocalremote) - Synchronize the local branch with the remote repository
* [cleanWorkingDir](docs/sdks/versioning/README.md#cleanworkingdir) - Discard uncommitted (staged) changes

### [workers](docs/sdks/workers/README.md)

* [getSummaryWorkers](docs/sdks/workers/README.md#getsummaryworkers) - Retrieve a count of Worker and Edge Nodes

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

- [`authFetchToken`](docs/sdks/auth/README.md#fetchtoken) - Log in and fetch an authentication token
- [`deploymentsGetSummary`](docs/sdks/deployments/README.md#getsummary) - Retrieve a summary of the Distributed deployment
- [`destinationsClearPersistentQueue`](docs/sdks/destinations/README.md#clearpersistentqueue) - Clear the persistent queue for a Destination
- [`destinationsCreate`](docs/sdks/destinations/README.md#create) - Create a Destination
- [`destinationsCreateSampleData`](docs/sdks/destinations/README.md#createsampledata) - Send sample event data to a Destination
- [`destinationsDelete`](docs/sdks/destinations/README.md#delete) - Delete a Destination
- [`destinationsGet`](docs/sdks/destinations/README.md#get) - Retrieve a Destination
- [`destinationsGetPersistentQueueStatus`](docs/sdks/destinations/README.md#getpersistentqueuestatus) - Retrieve information about the latest job to clear the persistent queue for a Destination
- [`destinationsGetSampleData`](docs/sdks/destinations/README.md#getsampledata) - Retrieve sample event data for a Destination
- [`destinationsList`](docs/sdks/destinations/README.md#list) - List all Destinations
- [`destinationsUpdate`](docs/sdks/destinations/README.md#update) - Update a Destination
- [`groupsCreateByProduct`](docs/sdks/groups/README.md#createbyproduct) - Create a Worker Group or Edge Fleet for the specified Cribl product
- [`groupsDelete`](docs/sdks/groups/README.md#delete) - Delete a Worker Group or Edge Fleet
- [`groupsDeployCommits`](docs/sdks/groups/README.md#deploycommits) - Deploy commits to a Worker Group or Edge Fleet
- [`groupsGet`](docs/sdks/groups/README.md#get) - Retrieve a Worker Group or Edge Fleet
- [`groupsGetAccessControlList`](docs/sdks/groups/README.md#getaccesscontrollist) - Retrieve the Access Control List (ACL) for a Worker Group or Edge Fleet
- [`groupsGetByProduct`](docs/sdks/groups/README.md#getbyproduct) - List all Worker Groups or Edge Fleets for the specified Cribl product
- [`groupsGetConfigVersion`](docs/sdks/groups/README.md#getconfigversion) - Retrieve the configuration version for a Worker Group or Edge Fleet
- [`groupsGetTeamAccessControlListByProduct`](docs/sdks/groups/README.md#getteamaccesscontrollistbyproduct) - Retrieve the Access Control List (ACL) for teams with permissions on a Worker Group or Edge Fleet for the specified Cribl product
- [`groupsUpdate`](docs/sdks/groups/README.md#update) - Update a Worker Group or Edge Fleet
- [`healthInfoGet`](docs/sdks/healthinfo/README.md#get) - Retrieve health status of the server
- [`lakeDatasetsCreate`](docs/sdks/lakedatasets/README.md#create) - Create a Lake Dataset in the specified Lake
- [`lakeDatasetsDelete`](docs/sdks/lakedatasets/README.md#delete) - Delete a Lake Dataset in the specified Lake
- [`lakeDatasetsGet`](docs/sdks/lakedatasets/README.md#get) - Retrieve a Lake Dataset in the specified Lake
- [`lakeDatasetsList`](docs/sdks/lakedatasets/README.md#list) - List all Lake Datasets in the specified Lake
- [`lakeDatasetsUpdate`](docs/sdks/lakedatasets/README.md#update) - Update a Lake Dataset in the specified Lake
- [`nodesList`](docs/sdks/nodes/README.md#list) - Retrieve detailed metadata for Worker and Edge Nodes
- [`nodesRestart`](docs/sdks/nodes/README.md#restart) - Restart Worker and Edge Nodes
- [`packsDelete`](docs/sdks/packs/README.md#delete) - Uninstall a Pack
- [`packsInstall`](docs/sdks/packs/README.md#install) - Install a Pack
- [`packsList`](docs/sdks/packs/README.md#list) - List all Packs
- [`packsUpdate`](docs/sdks/packs/README.md#update) - Update a Pack
- [`pipelinesCreate`](docs/sdks/pipelines/README.md#create) - Create a Pipeline
- [`pipelinesDelete`](docs/sdks/pipelines/README.md#delete) - Delete a Pipeline
- [`pipelinesGet`](docs/sdks/pipelines/README.md#get) - Retrieve a Pipeline
- [`pipelinesList`](docs/sdks/pipelines/README.md#list) - List all Pipelines
- [`pipelinesUpdate`](docs/sdks/pipelines/README.md#update) - Update a Pipeline
- [`routesAppend`](docs/sdks/routes/README.md#append) - Append Routes to the end of the Routing table
- [`routesGet`](docs/sdks/routes/README.md#get) - Get Routes by ID
- [`routesList`](docs/sdks/routes/README.md#list) - Get a list of Routes objects
- [`routesUpdate`](docs/sdks/routes/README.md#update) - Update Routes
- [`sourcesCreate`](docs/sdks/sources/README.md#create) - Create a Source
- [`sourcesCreateHecToken`](docs/sdks/sources/README.md#createhectoken) - Add an HEC token and optional metadata to a Splunk HEC Source
- [`sourcesDelete`](docs/sdks/sources/README.md#delete) - Delete a Source
- [`sourcesGet`](docs/sdks/sources/README.md#get) - Retrieve a Source
- [`sourcesList`](docs/sdks/sources/README.md#list) - List all Sources
- [`sourcesUpdate`](docs/sdks/sources/README.md#update) - Update a Source
- [`sourcesUpdateHecTokenMetadata`](docs/sdks/sources/README.md#updatehectokenmetadata) - Update metadata for an HEC token for a Splunk HEC Source
- [`versioningCleanWorkingDir`](docs/sdks/versioning/README.md#cleanworkingdir) - Discard uncommitted (staged) changes
- [`versioningCreateCommit`](docs/sdks/versioning/README.md#createcommit) - Create a new commit for pending changes to the Cribl configuration
- [`versioningGetBranch`](docs/sdks/versioning/README.md#getbranch) - List all branches in the Git repository used for Cribl configuration
- [`versioningGetBranchName`](docs/sdks/versioning/README.md#getbranchname) - Retrieve the name of the Git branch that the Cribl configuration is checked out to
- [`versioningGetConfigStatus`](docs/sdks/versioning/README.md#getconfigstatus) - Retrieve the configuration and status for the Git integration
- [`versioningGetCurrentStatus`](docs/sdks/versioning/README.md#getcurrentstatus) - Retrieve the status of the current working tree
- [`versioningGetDiff`](docs/sdks/versioning/README.md#getdiff) - Retrieve the diff for a commit
- [`versioningGetFileCount`](docs/sdks/versioning/README.md#getfilecount) - Retrieve a count of files that changed since a commit
- [`versioningGetFileInfo`](docs/sdks/versioning/README.md#getfileinfo) - Retrieve the names and statuses of files that changed since a commit
- [`versioningPushCommit`](docs/sdks/versioning/README.md#pushcommit) - Push a commit from the local repository to the remote repository
- [`versioningRevertCommit`](docs/sdks/versioning/README.md#revertcommit) - Revert a commit in the local repository
- [`versioningShowCommit`](docs/sdks/versioning/README.md#showcommit) - Retrieve the diff and log message for a commit
- [`versioningSyncLocalRemote`](docs/sdks/versioning/README.md#synclocalremote) - Synchronize the local branch with the remote repository
- [`workersGetSummaryWorkers`](docs/sdks/workers/README.md#getsummaryworkers) - Retrieve a count of Worker and Edge Nodes

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
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
  const result = await criblControlPlane.lakeDatasets.create({
    lakeId: "<id>",
    criblLakeDataset: {
      acceleratedFields: [
        "<value 1>",
        "<value 2>",
      ],
      bucketName: "<value>",
      cacheConnection: {
        acceleratedFields: [
          "<value 1>",
          "<value 2>",
        ],
        backfillStatus: "pending",
        cacheRef: "<value>",
        createdAt: 7795.06,
        lakehouseConnectionType: "cache",
        migrationQueryId: "<id>",
        retentionInDays: 1466.58,
      },
      deletionStartedAt: 8310.58,
      description:
        "pleased toothbrush long brush smooth swiftly rightfully phooey chapel",
      format: "ddss",
      httpDAUsed: true,
      id: "<id>",
      retentionPeriodInDays: 456.37,
      searchConfig: {
        datatypes: [
          "<value 1>",
        ],
        metadata: {
          earliest: "<value>",
          enableAcceleration: true,
          fieldList: [
            "<value 1>",
            "<value 2>",
          ],
          latestRunInfo: {
            earliestScannedTime: 4334.7,
            finishedAt: 6811.22,
            latestScannedTime: 5303.3,
            objectCount: 9489.04,
          },
          scanMode: "detailed",
        },
      },
      storageLocationId: "<id>",
      viewName: "<value>",
    },
  }, {
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

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.lakeDatasets.create({
    lakeId: "<id>",
    criblLakeDataset: {
      acceleratedFields: [
        "<value 1>",
        "<value 2>",
      ],
      bucketName: "<value>",
      cacheConnection: {
        acceleratedFields: [
          "<value 1>",
          "<value 2>",
        ],
        backfillStatus: "pending",
        cacheRef: "<value>",
        createdAt: 7795.06,
        lakehouseConnectionType: "cache",
        migrationQueryId: "<id>",
        retentionInDays: 1466.58,
      },
      deletionStartedAt: 8310.58,
      description:
        "pleased toothbrush long brush smooth swiftly rightfully phooey chapel",
      format: "ddss",
      httpDAUsed: true,
      id: "<id>",
      retentionPeriodInDays: 456.37,
      searchConfig: {
        datatypes: [
          "<value 1>",
        ],
        metadata: {
          earliest: "<value>",
          enableAcceleration: true,
          fieldList: [
            "<value 1>",
            "<value 2>",
          ],
          latestRunInfo: {
            earliestScannedTime: 4334.7,
            finishedAt: 6811.22,
            latestScannedTime: 5303.3,
            objectCount: 9489.04,
          },
          scanMode: "detailed",
        },
      },
      storageLocationId: "<id>",
      viewName: "<value>",
    },
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
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
    const result = await criblControlPlane.lakeDatasets.create({
      lakeId: "<id>",
      criblLakeDataset: {
        acceleratedFields: [
          "<value 1>",
          "<value 2>",
        ],
        bucketName: "<value>",
        cacheConnection: {
          acceleratedFields: [
            "<value 1>",
            "<value 2>",
          ],
          backfillStatus: "pending",
          cacheRef: "<value>",
          createdAt: 7795.06,
          lakehouseConnectionType: "cache",
          migrationQueryId: "<id>",
          retentionInDays: 1466.58,
        },
        deletionStartedAt: 8310.58,
        description:
          "pleased toothbrush long brush smooth swiftly rightfully phooey chapel",
        format: "ddss",
        httpDAUsed: true,
        id: "<id>",
        retentionPeriodInDays: 456.37,
        searchConfig: {
          datatypes: [
            "<value 1>",
          ],
          metadata: {
            earliest: "<value>",
            enableAcceleration: true,
            fieldList: [
              "<value 1>",
              "<value 2>",
            ],
            latestRunInfo: {
              earliestScannedTime: 4334.7,
              finishedAt: 6811.22,
              latestScannedTime: 5303.3,
              objectCount: 9489.04,
            },
            scanMode: "detailed",
          },
        },
        storageLocationId: "<id>",
        viewName: "<value>",
      },
    });

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
  * [`ErrorT`](./src/models/errors/errort.ts): Unexpected error. Status code `500`. *

<details><summary>Less common errors (7)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`CriblControlPlaneError`](./src/models/errors/criblcontrolplaneerror.ts)**:
* [`HealthStatusError`](./src/models/errors/healthstatuserror.ts): Healthy status. Status code `420`. Applicable to 1 of 62 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

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

const sdk = new CriblControlPlane({ httpClient });
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

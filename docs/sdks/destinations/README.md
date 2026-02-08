# Destinations

## Overview

Actions related to Destinations

### Available Operations

* [list](#list) - List all Destinations
* [create](#create) - Create a Destination
* [get](#get) - Get a Destination
* [update](#update) - Update a Destination
* [delete](#delete) - Delete a Destination

## list

Get a list of all Destinations.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listOutput" method="get" path="/system/outputs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsList } from "cribl-control-plane/funcs/destinationsList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsList(criblControlPlane);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedOutput](../../models/countedoutput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create a new Destination.

### Example Usage: OutputCreateExamplesAzureBlob

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesAzureBlob" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "azure-blob-output",
    type: "azure_blob",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    containerName: "my-container",
    createContainer: true,
    destPath: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: false,
    maxConcurrentFileParts: 8930.1,
    removeEmptyDirs: false,
    partitionExpr: "<value>",
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 5081.9,
    maxFileOpenTimeSec: 2086.62,
    maxFileIdleTimeSec: 6712.88,
    maxOpenFiles: 9557.61,
    headerLine: "<value>",
    writeHighWaterMark: 6894.28,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    authType: "manual",
    storageClass: "Inferred",
    description: "righteously monocle considering another than red vice",
    compress: "none",
    compressionLevel: "best_compression",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_1_0",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 6715.61,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: false,
    enableWritePageIndex: false,
    enablePageChecksum: true,
    emptyDirCleanupSec: 116.57,
    directoryBatchSize: 5870.02,
    deadletterPath: "<value>",
    maxRetryNum: 8174.56,
    connectionString: "<value>",
    textSecret: "<value>",
    storageAccountName: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    azureCloud: "<value>",
    endpointSuffix: "<value>",
    clientTextSecret: "<value>",
    certificate: {
      certificateName: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "azure-blob-output",
    type: "azure_blob",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    containerName: "my-container",
    createContainer: true,
    destPath: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: false,
    maxConcurrentFileParts: 8930.1,
    removeEmptyDirs: false,
    partitionExpr: "<value>",
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 5081.9,
    maxFileOpenTimeSec: 2086.62,
    maxFileIdleTimeSec: 6712.88,
    maxOpenFiles: 9557.61,
    headerLine: "<value>",
    writeHighWaterMark: 6894.28,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    authType: "manual",
    storageClass: "Inferred",
    description: "righteously monocle considering another than red vice",
    compress: "none",
    compressionLevel: "best_compression",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_1_0",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 6715.61,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: false,
    enableWritePageIndex: false,
    enablePageChecksum: true,
    emptyDirCleanupSec: 116.57,
    directoryBatchSize: 5870.02,
    deadletterPath: "<value>",
    maxRetryNum: 8174.56,
    connectionString: "<value>",
    textSecret: "<value>",
    storageAccountName: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    azureCloud: "<value>",
    endpointSuffix: "<value>",
    clientTextSecret: "<value>",
    certificate: {
      certificateName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureDataExplorer

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesAzureDataExplorer" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "azure-data-explorer-output",
    type: "azure_data_explorer",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    clusterUrl: "https://mycluster.kusto.windows.net",
    database: "mydatabase",
    table: "mytable",
    validateDatabaseSettings: false,
    ingestMode: "streaming",
    oauthEndpoint: "https://login.microsoftonline.com",
    tenantId: "tenant-id",
    clientId: "client-id",
    scope: "https://mycluster.kusto.windows.net/.default",
    oauthType: "clientSecret",
    description: "sunbathe institute memorise simplistic needily always vainly surface",
    clientSecret: "client-secret",
    textSecret: "<value>",
    certificate: {
      certificateName: "<value>",
    },
    format: "json",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 5989.68,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    removeEmptyDirs: false,
    emptyDirCleanupSec: 6573.83,
    directoryBatchSize: 94.66,
    deadletterEnabled: false,
    deadletterPath: "<value>",
    maxRetryNum: 5500.28,
    isMappingObj: false,
    mappingObj: "<value>",
    mappingRef: "<value>",
    ingestUrl: "https://yummy-word.org/",
    onBackpressure: "block",
    stagePath: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 8391.37,
    maxFileOpenTimeSec: 1171.2,
    maxFileIdleTimeSec: 2411.96,
    maxOpenFiles: 4397.69,
    maxConcurrentFileParts: 5560.23,
    onDiskFullBackpressure: "drop",
    addIdToStagePath: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    timeoutSec: 4542.46,
    flushImmediately: false,
    retainBlobOnSuccess: true,
    extentTags: [
      {
        prefix: "dropBy",
        value: "<value>",
      },
    ],
    ingestIfNotExists: [
      {
        value: "<value>",
      },
    ],
    reportLevel: "doNotReport",
    reportMethod: "queue",
    additionalProperties: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    concurrency: 3276.28,
    maxPayloadSizeKB: 8149.84,
    maxPayloadEvents: 6791.22,
    flushPeriodSec: 2920.42,
    rejectUnauthorized: false,
    useRoundRobinDns: false,
    keepAlive: true,
    pqStrictOrdering: false,
    pqRatePerSec: 5929.23,
    pqMode: "always",
    pqMaxBufferSize: 6536.73,
    pqMaxBackpressureSec: 44.47,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "azure-data-explorer-output",
    type: "azure_data_explorer",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    clusterUrl: "https://mycluster.kusto.windows.net",
    database: "mydatabase",
    table: "mytable",
    validateDatabaseSettings: false,
    ingestMode: "streaming",
    oauthEndpoint: "https://login.microsoftonline.com",
    tenantId: "tenant-id",
    clientId: "client-id",
    scope: "https://mycluster.kusto.windows.net/.default",
    oauthType: "clientSecret",
    description: "sunbathe institute memorise simplistic needily always vainly surface",
    clientSecret: "client-secret",
    textSecret: "<value>",
    certificate: {
      certificateName: "<value>",
    },
    format: "json",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 5989.68,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    removeEmptyDirs: false,
    emptyDirCleanupSec: 6573.83,
    directoryBatchSize: 94.66,
    deadletterEnabled: false,
    deadletterPath: "<value>",
    maxRetryNum: 5500.28,
    isMappingObj: false,
    mappingObj: "<value>",
    mappingRef: "<value>",
    ingestUrl: "https://yummy-word.org/",
    onBackpressure: "block",
    stagePath: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 8391.37,
    maxFileOpenTimeSec: 1171.2,
    maxFileIdleTimeSec: 2411.96,
    maxOpenFiles: 4397.69,
    maxConcurrentFileParts: 5560.23,
    onDiskFullBackpressure: "drop",
    addIdToStagePath: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    timeoutSec: 4542.46,
    flushImmediately: false,
    retainBlobOnSuccess: true,
    extentTags: [
      {
        prefix: "dropBy",
        value: "<value>",
      },
    ],
    ingestIfNotExists: [
      {
        value: "<value>",
      },
    ],
    reportLevel: "doNotReport",
    reportMethod: "queue",
    additionalProperties: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    concurrency: 3276.28,
    maxPayloadSizeKB: 8149.84,
    maxPayloadEvents: 6791.22,
    flushPeriodSec: 2920.42,
    rejectUnauthorized: false,
    useRoundRobinDns: false,
    keepAlive: true,
    pqStrictOrdering: false,
    pqRatePerSec: 5929.23,
    pqMode: "always",
    pqMaxBufferSize: 6536.73,
    pqMaxBackpressureSec: 44.47,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureEventhub

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesAzureEventhub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "azure-eventhub-output",
    type: "azure_eventhub",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topic: "logs",
    ack: -1,
    format: "json",
    maxRecordSizeKB: 4173.17,
    flushEventCount: 6509.09,
    flushPeriodSec: 8762.24,
    connectionTimeout: 8904.67,
    requestTimeout: 952,
    maxRetries: 9432.94,
    maxBackOff: 4100.48,
    initialBackoff: 1360.5,
    backoffRate: 4083.79,
    authenticationTimeout: 7592.43,
    reauthenticationThreshold: 9167.42,
    sasl: {
      disabled: false,
      authType: "secret",
      password: "eYqqU_9UCy3i_Ji",
      textSecret: "<value>",
      mechanism: "plain",
      username: "Shanel.Gutkowski47",
      clientSecretAuthType: "secret",
      clientSecret: "<value>",
      clientTextSecret: "<value>",
      certificateName: "<value>",
      certPath: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      oauthEndpoint: "https://login.partner.microsoftonline.cn",
      clientId: "<id>",
      tenantId: "<id>",
      scope: "<value>",
    },
    tls: {
      disabled: false,
      rejectUnauthorized: false,
    },
    onBackpressure: "queue",
    description: "coal bah kissingly",
    pqStrictOrdering: true,
    pqRatePerSec: 2610.93,
    pqMode: "backpressure",
    pqMaxBufferSize: 20.21,
    pqMaxBackpressureSec: 7771.42,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "azure-eventhub-output",
    type: "azure_eventhub",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topic: "logs",
    ack: -1,
    format: "json",
    maxRecordSizeKB: 4173.17,
    flushEventCount: 6509.09,
    flushPeriodSec: 8762.24,
    connectionTimeout: 8904.67,
    requestTimeout: 952,
    maxRetries: 9432.94,
    maxBackOff: 4100.48,
    initialBackoff: 1360.5,
    backoffRate: 4083.79,
    authenticationTimeout: 7592.43,
    reauthenticationThreshold: 9167.42,
    sasl: {
      disabled: false,
      authType: "secret",
      password: "eYqqU_9UCy3i_Ji",
      textSecret: "<value>",
      mechanism: "plain",
      username: "Shanel.Gutkowski47",
      clientSecretAuthType: "secret",
      clientSecret: "<value>",
      clientTextSecret: "<value>",
      certificateName: "<value>",
      certPath: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      oauthEndpoint: "https://login.partner.microsoftonline.cn",
      clientId: "<id>",
      tenantId: "<id>",
      scope: "<value>",
    },
    tls: {
      disabled: false,
      rejectUnauthorized: false,
    },
    onBackpressure: "queue",
    description: "coal bah kissingly",
    pqStrictOrdering: true,
    pqRatePerSec: 2610.93,
    pqMode: "backpressure",
    pqMaxBufferSize: 20.21,
    pqMaxBackpressureSec: 7771.42,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureLogs

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesAzureLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "azure-logs-output",
    type: "azure_logs",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    logType: "Cribl",
    resourceId: "<id>",
    concurrency: 1951.32,
    maxPayloadSizeKB: 5499.87,
    maxPayloadEvents: 2578.59,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 511.47,
    flushPeriodSec: 3730.07,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    apiUrl: "https://insignificant-guide.info/",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "queue",
    authType: "manual",
    description: "unlike aircraft sign instead hydrolyse mechanically",
    pqStrictOrdering: true,
    pqRatePerSec: 1358.18,
    pqMode: "error",
    pqMaxBufferSize: 5972.87,
    pqMaxBackpressureSec: 5438.29,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    workspaceId: "workspace-id",
    workspaceKey: "workspace-key",
    keypairSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "azure-logs-output",
    type: "azure_logs",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    logType: "Cribl",
    resourceId: "<id>",
    concurrency: 1951.32,
    maxPayloadSizeKB: 5499.87,
    maxPayloadEvents: 2578.59,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 511.47,
    flushPeriodSec: 3730.07,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    apiUrl: "https://insignificant-guide.info/",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "queue",
    authType: "manual",
    description: "unlike aircraft sign instead hydrolyse mechanically",
    pqStrictOrdering: true,
    pqRatePerSec: 1358.18,
    pqMode: "error",
    pqMaxBufferSize: 5972.87,
    pqMaxBackpressureSec: 5438.29,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    workspaceId: "workspace-id",
    workspaceKey: "workspace-key",
    keypairSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesChronicle

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesChronicle" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "chronicle-output",
    type: "chronicle",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    apiVersion: "<value>",
    authenticationMethod: "serviceAccountSecret",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    region: "us",
    concurrency: 9745.81,
    maxPayloadSizeKB: 6879.18,
    maxPayloadEvents: 5695.25,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 3212.66,
    flushPeriodSec: 91.83,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    useRoundRobinDns: true,
    onBackpressure: "block",
    totalMemoryLimitKB: 3168.96,
    ingestionMethod: "<value>",
    namespace: "<value>",
    logType: "UNKNOWN",
    logTextField: "<value>",
    gcpProjectId: "my-project",
    gcpInstance: "customer-id",
    customLabels: [
      {
        key: "<key>",
        value: "<value>",
        rbacEnabled: true,
      },
    ],
    description: "boohoo disclosure pfft provided joyfully arraign blah",
    serviceAccountCredentials: "<value>",
    serviceAccountCredentialsSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 8781.54,
    pqMode: "backpressure",
    pqMaxBufferSize: 7870.65,
    pqMaxBackpressureSec: 8054.52,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "chronicle-output",
    type: "chronicle",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    apiVersion: "<value>",
    authenticationMethod: "serviceAccountSecret",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    region: "us",
    concurrency: 9745.81,
    maxPayloadSizeKB: 6879.18,
    maxPayloadEvents: 5695.25,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 3212.66,
    flushPeriodSec: 91.83,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    useRoundRobinDns: true,
    onBackpressure: "block",
    totalMemoryLimitKB: 3168.96,
    ingestionMethod: "<value>",
    namespace: "<value>",
    logType: "UNKNOWN",
    logTextField: "<value>",
    gcpProjectId: "my-project",
    gcpInstance: "customer-id",
    customLabels: [
      {
        key: "<key>",
        value: "<value>",
        rbacEnabled: true,
      },
    ],
    description: "boohoo disclosure pfft provided joyfully arraign blah",
    serviceAccountCredentials: "<value>",
    serviceAccountCredentialsSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 8781.54,
    pqMode: "backpressure",
    pqMaxBufferSize: 7870.65,
    pqMaxBackpressureSec: 8054.52,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesClickHouse

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesClickHouse" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "clickhouse-output",
    type: "click_house",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    url: "http://localhost:8123/",
    authType: "none",
    database: "mydb",
    tableName: "mytable",
    format: "json-compact-each-row-with-names",
    mappingType: "custom",
    asyncInserts: true,
    tls: {
      disabled: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.1",
    },
    concurrency: 1476.31,
    maxPayloadSizeKB: 6049.77,
    maxPayloadEvents: 4625.42,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 3245.72,
    flushPeriodSec: 9584.17,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    dumpFormatErrorsToDisk: true,
    statsDestination: {
      url: "https://secondary-siege.net/",
      database: "<value>",
      tableName: "<value>",
      authType: "<value>",
      username: "Watson.Thompson",
      sqlUsername: "<value>",
      password: "CSUR9KNIQx6UWj3",
    },
    onBackpressure: "drop",
    description: "unethically during though peaceful muddy instructive free gah really testing",
    username: "Zoie6",
    password: "oNmc4Ug0Lkap6dq",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://lavish-optimal.biz",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 1451.42,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    sqlUsername: "<value>",
    waitForAsyncInserts: true,
    excludeMappingFields: [
      "<value 1>",
      "<value 2>",
    ],
    describeTable: "<value>",
    columnMappings: [
      {
        columnName: "<value>",
        columnType: "<value>",
        columnValueExpression: "<value>",
      },
    ],
    pqStrictOrdering: false,
    pqRatePerSec: 4380,
    pqMode: "error",
    pqMaxBufferSize: 2688.12,
    pqMaxBackpressureSec: 523.79,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "clickhouse-output",
    type: "click_house",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    url: "http://localhost:8123/",
    authType: "none",
    database: "mydb",
    tableName: "mytable",
    format: "json-compact-each-row-with-names",
    mappingType: "custom",
    asyncInserts: true,
    tls: {
      disabled: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.1",
    },
    concurrency: 1476.31,
    maxPayloadSizeKB: 6049.77,
    maxPayloadEvents: 4625.42,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 3245.72,
    flushPeriodSec: 9584.17,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    dumpFormatErrorsToDisk: true,
    statsDestination: {
      url: "https://secondary-siege.net/",
      database: "<value>",
      tableName: "<value>",
      authType: "<value>",
      username: "Watson.Thompson",
      sqlUsername: "<value>",
      password: "CSUR9KNIQx6UWj3",
    },
    onBackpressure: "drop",
    description: "unethically during though peaceful muddy instructive free gah really testing",
    username: "Zoie6",
    password: "oNmc4Ug0Lkap6dq",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://lavish-optimal.biz",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 1451.42,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    sqlUsername: "<value>",
    waitForAsyncInserts: true,
    excludeMappingFields: [
      "<value 1>",
      "<value 2>",
    ],
    describeTable: "<value>",
    columnMappings: [
      {
        columnName: "<value>",
        columnType: "<value>",
        columnValueExpression: "<value>",
      },
    ],
    pqStrictOrdering: false,
    pqRatePerSec: 4380,
    pqMode: "error",
    pqMaxBufferSize: 2688.12,
    pqMaxBackpressureSec: 523.79,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCloudflareR2

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesCloudflareR2" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "cloudflare-r2-output",
    type: "cloudflare_r2",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    endpoint: "https://account-id.r2.cloudflarestorage.com",
    bucket: "my-bucket",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: false,
    destPath: "<value>",
    signatureVersion: "v2",
    objectACL: "<value>",
    storageClass: "STANDARD",
    serverSideEncryption: "AES256",
    reuseConnections: true,
    rejectUnauthorized: false,
    verifyPermissions: false,
    removeEmptyDirs: false,
    partitionExpr: "<value>",
    format: "parquet",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 778.03,
    maxOpenFiles: 3288.22,
    headerLine: "<value>",
    writeHighWaterMark: 1352.74,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "drop",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 2228.29,
    maxFileIdleTimeSec: 2969.78,
    maxConcurrentFileParts: 596.2,
    description: "hmph forage psst consequently kowtow aw when task violently eyebrow",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "none",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_1_0",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 1419.37,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: true,
    emptyDirCleanupSec: 3649.13,
    directoryBatchSize: 7354.47,
    deadletterPath: "<value>",
    maxRetryNum: 9135.39,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "cloudflare-r2-output",
    type: "cloudflare_r2",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    endpoint: "https://account-id.r2.cloudflarestorage.com",
    bucket: "my-bucket",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: false,
    destPath: "<value>",
    signatureVersion: "v2",
    objectACL: "<value>",
    storageClass: "STANDARD",
    serverSideEncryption: "AES256",
    reuseConnections: true,
    rejectUnauthorized: false,
    verifyPermissions: false,
    removeEmptyDirs: false,
    partitionExpr: "<value>",
    format: "parquet",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 778.03,
    maxOpenFiles: 3288.22,
    headerLine: "<value>",
    writeHighWaterMark: 1352.74,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "drop",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 2228.29,
    maxFileIdleTimeSec: 2969.78,
    maxConcurrentFileParts: 596.2,
    description: "hmph forage psst consequently kowtow aw when task violently eyebrow",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "none",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_1_0",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 1419.37,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: true,
    emptyDirCleanupSec: 3649.13,
    directoryBatchSize: 7354.47,
    deadletterPath: "<value>",
    maxRetryNum: 9135.39,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCloudwatch

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesCloudwatch" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "cloudwatch-output",
    type: "cloudwatch",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    logGroupName: "my-log-group",
    logStreamName: "my-log-stream",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    reuseConnections: false,
    rejectUnauthorized: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3255.59,
    maxQueueSize: 8800.83,
    maxRecordSizeKB: 1107.73,
    flushPeriodSec: 3297.75,
    onBackpressure: "queue",
    description: "follower for filter urban fluff jovially lest hepatitis oh",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 5864.23,
    pqMode: "error",
    pqMaxBufferSize: 1053.28,
    pqMaxBackpressureSec: 1627.89,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "cloudwatch-output",
    type: "cloudwatch",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    logGroupName: "my-log-group",
    logStreamName: "my-log-stream",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    reuseConnections: false,
    rejectUnauthorized: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3255.59,
    maxQueueSize: 8800.83,
    maxRecordSizeKB: 1107.73,
    flushPeriodSec: 3297.75,
    onBackpressure: "queue",
    description: "follower for filter urban fluff jovially lest hepatitis oh",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 5864.23,
    pqMode: "error",
    pqMaxBufferSize: 1053.28,
    pqMaxBackpressureSec: 1627.89,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesConfluentCloud

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesConfluentCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "confluent-cloud-output",
    type: "confluent_cloud",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    brokers: [
      "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
    ],
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    topic: "logs",
    ack: 1,
    format: "raw",
    compression: "none",
    maxRecordSizeKB: 6382.68,
    flushEventCount: 3012.04,
    flushPeriodSec: 118.13,
    kafkaSchemaRegistry: {
      disabled: false,
      schemaRegistryURL: "https://sorrowful-intervention.net",
      connectionTimeout: 2140.69,
      requestTimeout: 635.34,
      maxRetries: 214.92,
      auth: {
        disabled: false,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.3",
      },
      defaultKeySchemaId: 3514.77,
      defaultValueSchemaId: 5300.5,
    },
    connectionTimeout: 7335.23,
    requestTimeout: 1982.67,
    maxRetries: 2143.86,
    maxBackOff: 5103.77,
    initialBackoff: 1489.89,
    backoffRate: 3828.71,
    authenticationTimeout: 4260.73,
    reauthenticationThreshold: 3634.24,
    sasl: {
      disabled: false,
      username: "Kavon.Olson45",
      password: "WUBBYlZT6hhjm2P",
      authType: "secret",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://good-natured-crocodile.net/",
      clientId: "<id>",
      oauthSecretType: "<value>",
      clientTextSecret: "<value>",
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      saslExtensions: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
    onBackpressure: "block",
    description: "during furlough astride inasmuch bah questionably freight gah tune",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: false,
    pqRatePerSec: 9142.07,
    pqMode: "error",
    pqMaxBufferSize: 1173.83,
    pqMaxBackpressureSec: 2651.5,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "confluent-cloud-output",
    type: "confluent_cloud",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    brokers: [
      "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
    ],
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    topic: "logs",
    ack: 1,
    format: "raw",
    compression: "none",
    maxRecordSizeKB: 6382.68,
    flushEventCount: 3012.04,
    flushPeriodSec: 118.13,
    kafkaSchemaRegistry: {
      disabled: false,
      schemaRegistryURL: "https://sorrowful-intervention.net",
      connectionTimeout: 2140.69,
      requestTimeout: 635.34,
      maxRetries: 214.92,
      auth: {
        disabled: false,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.3",
      },
      defaultKeySchemaId: 3514.77,
      defaultValueSchemaId: 5300.5,
    },
    connectionTimeout: 7335.23,
    requestTimeout: 1982.67,
    maxRetries: 2143.86,
    maxBackOff: 5103.77,
    initialBackoff: 1489.89,
    backoffRate: 3828.71,
    authenticationTimeout: 4260.73,
    reauthenticationThreshold: 3634.24,
    sasl: {
      disabled: false,
      username: "Kavon.Olson45",
      password: "WUBBYlZT6hhjm2P",
      authType: "secret",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://good-natured-crocodile.net/",
      clientId: "<id>",
      oauthSecretType: "<value>",
      clientTextSecret: "<value>",
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      saslExtensions: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
    onBackpressure: "block",
    description: "during furlough astride inasmuch bah questionably freight gah tune",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: false,
    pqRatePerSec: 9142.07,
    pqMode: "error",
    pqMaxBufferSize: 1173.83,
    pqMaxBackpressureSec: 2651.5,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblHttp

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesCriblHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "cribl-http-output",
    type: "cribl_http",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    loadBalanced: false,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    tokenTTLMinutes: 250.77,
    excludeFields: [
      "<value 1>",
    ],
    compression: "none",
    concurrency: 1902.58,
    maxPayloadSizeKB: 2694.49,
    maxPayloadEvents: 8263.74,
    rejectUnauthorized: false,
    timeoutSec: 362.02,
    flushPeriodSec: 3906.36,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    throttleRatePerSec: "<value>",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: false,
        description: "incidentally shirk sell pink whether",
      },
    ],
    onBackpressure: "queue",
    description: "magnificent than usually granny license before given",
    url: "https://supportive-provision.com/",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "https://somber-release.biz",
        weight: 6753.07,
      },
    ],
    dnsResolvePeriodSec: 684.5,
    loadBalanceStatsPeriodSec: 3483.22,
    pqStrictOrdering: true,
    pqRatePerSec: 6926.55,
    pqMode: "error",
    pqMaxBufferSize: 4326.71,
    pqMaxBackpressureSec: 6625.87,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "cribl-http-output",
    type: "cribl_http",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    loadBalanced: false,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    tokenTTLMinutes: 250.77,
    excludeFields: [
      "<value 1>",
    ],
    compression: "none",
    concurrency: 1902.58,
    maxPayloadSizeKB: 2694.49,
    maxPayloadEvents: 8263.74,
    rejectUnauthorized: false,
    timeoutSec: 362.02,
    flushPeriodSec: 3906.36,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    throttleRatePerSec: "<value>",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: false,
        description: "incidentally shirk sell pink whether",
      },
    ],
    onBackpressure: "queue",
    description: "magnificent than usually granny license before given",
    url: "https://supportive-provision.com/",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "https://somber-release.biz",
        weight: 6753.07,
      },
    ],
    dnsResolvePeriodSec: 684.5,
    loadBalanceStatsPeriodSec: 3483.22,
    pqStrictOrdering: true,
    pqRatePerSec: 6926.55,
    pqMode: "error",
    pqMaxBufferSize: 4326.71,
    pqMaxBackpressureSec: 6625.87,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblLake

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesCriblLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "cribl-lake-output",
    type: "cribl_lake",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    bucket: "<value>",
    region: "<value>",
    awsSecretKey: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 1438.17,
    stagePath: "<value>",
    addIdToStagePath: true,
    destPath: "<value>",
    objectACL: "private",
    storageClass: "STANDARD_IA",
    serverSideEncryption: "AES256",
    kmsKeyId: "<id>",
    removeEmptyDirs: false,
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 8534.7,
    maxOpenFiles: 727.2,
    headerLine: "<value>",
    writeHighWaterMark: 1282.41,
    onBackpressure: "block",
    deadletterEnabled: true,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 4747.67,
    maxFileIdleTimeSec: 1215.97,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 8143.22,
    awsAuthenticationMethod: "manual",
    format: "parquet",
    maxConcurrentFileParts: 5234.3,
    description: "intensely phew underneath unsung fast um gym supposing defiantly",
    emptyDirCleanupSec: 7439,
    directoryBatchSize: 2048.17,
    deadletterPath: "<value>",
    maxRetryNum: 8469.17,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "cribl-lake-output",
    type: "cribl_lake",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    bucket: "<value>",
    region: "<value>",
    awsSecretKey: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 1438.17,
    stagePath: "<value>",
    addIdToStagePath: true,
    destPath: "<value>",
    objectACL: "private",
    storageClass: "STANDARD_IA",
    serverSideEncryption: "AES256",
    kmsKeyId: "<id>",
    removeEmptyDirs: false,
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 8534.7,
    maxOpenFiles: 727.2,
    headerLine: "<value>",
    writeHighWaterMark: 1282.41,
    onBackpressure: "block",
    deadletterEnabled: true,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 4747.67,
    maxFileIdleTimeSec: 1215.97,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 8143.22,
    awsAuthenticationMethod: "manual",
    format: "parquet",
    maxConcurrentFileParts: 5234.3,
    description: "intensely phew underneath unsung fast um gym supposing defiantly",
    emptyDirCleanupSec: 7439,
    directoryBatchSize: 2048.17,
    deadletterPath: "<value>",
    maxRetryNum: 8469.17,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblSearchEngine

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesCriblSearchEngine" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "cribl-search-engine-output",
    type: "cribl_search_engine",
    pipeline: "<value>",
    systemFields: [
      "cribl_pipe",
    ],
    environment: "<value>",
    streamtags: [],
    loadBalanced: false,
    tls: {
      disabled: true,
      rejectUnauthorized: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.3",
    },
    tokenTTLMinutes: 60,
    excludeFields: [
      "__kube_*",
      "__metadata",
      "__winEvent",
    ],
    compression: "gzip",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [],
    throttleRatePerSec: "0",
    responseRetrySettings: [
      {
        httpStatus: 401,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 20000,
      },
      {
        httpStatus: 403,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 20000,
      },
      {
        httpStatus: 408,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 429,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 500,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 502,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 503,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 504,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 509,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 4221.29,
      backoffRate: 5965.22,
      maxBackoff: 7299.18,
    },
    responseHonorRetryAfterHeader: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: false,
        description: "incidentally shirk sell pink whether",
      },
    ],
    onBackpressure: "block",
    useRoundRobinDns: true,
    description: "vulgarise fen amongst over quirkily shady amend equally",
    url: "https://0.0.0.0:10200",
    excludeSelf: false,
    urls: [
      {
        url: "https://somber-release.biz",
        weight: 6753.07,
      },
    ],
    dnsResolvePeriodSec: 40.48,
    loadBalanceStatsPeriodSec: 5700.56,
    pqStrictOrdering: true,
    pqRatePerSec: 718.02,
    pqMode: "error",
    pqMaxBufferSize: 2521.74,
    pqMaxBackpressureSec: 7453.88,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "cribl-search-engine-output",
    type: "cribl_search_engine",
    pipeline: "<value>",
    systemFields: [
      "cribl_pipe",
    ],
    environment: "<value>",
    streamtags: [],
    loadBalanced: false,
    tls: {
      disabled: true,
      rejectUnauthorized: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.3",
    },
    tokenTTLMinutes: 60,
    excludeFields: [
      "__kube_*",
      "__metadata",
      "__winEvent",
    ],
    compression: "gzip",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [],
    throttleRatePerSec: "0",
    responseRetrySettings: [
      {
        httpStatus: 401,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 20000,
      },
      {
        httpStatus: 403,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 20000,
      },
      {
        httpStatus: 408,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 429,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 500,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 502,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 503,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 504,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      {
        httpStatus: 509,
        initialBackoff: 250,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 4221.29,
      backoffRate: 5965.22,
      maxBackoff: 7299.18,
    },
    responseHonorRetryAfterHeader: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: false,
        description: "incidentally shirk sell pink whether",
      },
    ],
    onBackpressure: "block",
    useRoundRobinDns: true,
    description: "vulgarise fen amongst over quirkily shady amend equally",
    url: "https://0.0.0.0:10200",
    excludeSelf: false,
    urls: [
      {
        url: "https://somber-release.biz",
        weight: 6753.07,
      },
    ],
    dnsResolvePeriodSec: 40.48,
    loadBalanceStatsPeriodSec: 5700.56,
    pqStrictOrdering: true,
    pqRatePerSec: 718.02,
    pqMode: "error",
    pqMaxBufferSize: 2521.74,
    pqMaxBackpressureSec: 7453.88,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblTcp

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesCriblTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "cribl-tcp-output",
    type: "cribl_tcp",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    loadBalanced: true,
    compression: "gzip",
    logFailedRequests: true,
    throttleRatePerSec: "<value>",
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    connectionTimeout: 9341.31,
    writeTimeout: 4411.29,
    tokenTTLMinutes: 1638.95,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "miserly woot immediately rarely",
      },
    ],
    excludeFields: [
      "<value 1>",
      "<value 2>",
    ],
    onBackpressure: "block",
    description: "bah reassuringly selfish digit until boohoo after",
    host: "localhost",
    port: 10090,
    excludeSelf: true,
    hosts: [
      {
        host: "proper-prohibition.com",
        port: 7840.9,
        tls: "inherit",
        servername: "<value>",
        weight: 3441.24,
      },
    ],
    dnsResolvePeriodSec: 8406.69,
    loadBalanceStatsPeriodSec: 2297.58,
    maxConcurrentSenders: 5286.07,
    pqStrictOrdering: false,
    pqRatePerSec: 6596.15,
    pqMode: "error",
    pqMaxBufferSize: 3822.56,
    pqMaxBackpressureSec: 9338.7,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "cribl-tcp-output",
    type: "cribl_tcp",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    loadBalanced: true,
    compression: "gzip",
    logFailedRequests: true,
    throttleRatePerSec: "<value>",
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    connectionTimeout: 9341.31,
    writeTimeout: 4411.29,
    tokenTTLMinutes: 1638.95,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "miserly woot immediately rarely",
      },
    ],
    excludeFields: [
      "<value 1>",
      "<value 2>",
    ],
    onBackpressure: "block",
    description: "bah reassuringly selfish digit until boohoo after",
    host: "localhost",
    port: 10090,
    excludeSelf: true,
    hosts: [
      {
        host: "proper-prohibition.com",
        port: 7840.9,
        tls: "inherit",
        servername: "<value>",
        weight: 3441.24,
      },
    ],
    dnsResolvePeriodSec: 8406.69,
    loadBalanceStatsPeriodSec: 2297.58,
    maxConcurrentSenders: 5286.07,
    pqStrictOrdering: false,
    pqRatePerSec: 6596.15,
    pqMode: "error",
    pqMaxBufferSize: 3822.56,
    pqMaxBackpressureSec: 9338.7,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCrowdstrikeNextGenSiem

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesCrowdstrikeNextGenSiem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "crowdstrike-next-gen-siem-output",
    type: "crowdstrike_next_gen_siem",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
    concurrency: 8005.77,
    maxPayloadSizeKB: 1859.85,
    maxPayloadEvents: 7553.52,
    compress: false,
    rejectUnauthorized: true,
    timeoutSec: 5415.47,
    flushPeriodSec: 8431.21,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    format: "JSON",
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "drop",
    description: "aw until sneak zowie",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 5225.52,
    pqMode: "backpressure",
    pqMaxBufferSize: 7665.96,
    pqMaxBackpressureSec: 3547.23,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "crowdstrike-next-gen-siem-output",
    type: "crowdstrike_next_gen_siem",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
    concurrency: 8005.77,
    maxPayloadSizeKB: 1859.85,
    maxPayloadEvents: 7553.52,
    compress: false,
    rejectUnauthorized: true,
    timeoutSec: 5415.47,
    flushPeriodSec: 8431.21,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    format: "JSON",
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "drop",
    description: "aw until sneak zowie",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 5225.52,
    pqMode: "backpressure",
    pqMaxBufferSize: 7665.96,
    pqMaxBackpressureSec: 3547.23,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDatabricks

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesDatabricks" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "databricks-output",
    type: "databricks",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    destPath: "<value>",
    stagePath: "<value>",
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "<value>",
    format: "parquet",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 6532,
    maxFileOpenTimeSec: 9824.13,
    maxFileIdleTimeSec: 530.01,
    maxOpenFiles: 3378.28,
    headerLine: "<value>",
    writeHighWaterMark: 5027.88,
    onBackpressure: "block",
    deadletterEnabled: true,
    onDiskFullBackpressure: "drop",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    workspaceId: "your-workspace-id",
    scope: "my-scope",
    clientId: "your-client-id",
    catalog: "my-catalog",
    schema: "my-schema",
    eventsVolumeName: "my-volume",
    clientTextSecret: "your-client-secret",
    timeoutSec: 7474.61,
    description: "from ick concerning",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_4",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 3105.33,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: false,
    emptyDirCleanupSec: 4958.28,
    directoryBatchSize: 4710.86,
    deadletterPath: "<value>",
    maxRetryNum: 2856.12,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "databricks-output",
    type: "databricks",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    destPath: "<value>",
    stagePath: "<value>",
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "<value>",
    format: "parquet",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 6532,
    maxFileOpenTimeSec: 9824.13,
    maxFileIdleTimeSec: 530.01,
    maxOpenFiles: 3378.28,
    headerLine: "<value>",
    writeHighWaterMark: 5027.88,
    onBackpressure: "block",
    deadletterEnabled: true,
    onDiskFullBackpressure: "drop",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    workspaceId: "your-workspace-id",
    scope: "my-scope",
    clientId: "your-client-id",
    catalog: "my-catalog",
    schema: "my-schema",
    eventsVolumeName: "my-volume",
    clientTextSecret: "your-client-secret",
    timeoutSec: 7474.61,
    description: "from ick concerning",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_4",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 3105.33,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: false,
    emptyDirCleanupSec: 4958.28,
    directoryBatchSize: 4710.86,
    deadletterPath: "<value>",
    maxRetryNum: 2856.12,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDatadog

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesDatadog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "datadog-output",
    type: "datadog",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    contentType: "json",
    message: "<value>",
    source: "<value>",
    host: "rosy-independence.biz",
    service: "<value>",
    tags: [
      "<value 1>",
    ],
    batchByTags: false,
    allowApiKeyFromEvents: true,
    severity: "alert",
    site: "us3",
    sendCountersAsCount: false,
    concurrency: 188.86,
    maxPayloadSizeKB: 5055.78,
    maxPayloadEvents: 7263.68,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 5827.81,
    flushPeriodSec: 648.41,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "drop",
    authType: "secret",
    totalMemoryLimitKB: 3515.14,
    description: "including even meh till concerned circa by unethically",
    customUrl: "https://shabby-spear.org/",
    pqStrictOrdering: false,
    pqRatePerSec: 348.41,
    pqMode: "always",
    pqMaxBufferSize: 1075,
    pqMaxBackpressureSec: 9617.49,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "datadog-output",
    type: "datadog",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    contentType: "json",
    message: "<value>",
    source: "<value>",
    host: "rosy-independence.biz",
    service: "<value>",
    tags: [
      "<value 1>",
    ],
    batchByTags: false,
    allowApiKeyFromEvents: true,
    severity: "alert",
    site: "us3",
    sendCountersAsCount: false,
    concurrency: 188.86,
    maxPayloadSizeKB: 5055.78,
    maxPayloadEvents: 7263.68,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 5827.81,
    flushPeriodSec: 648.41,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "drop",
    authType: "secret",
    totalMemoryLimitKB: 3515.14,
    description: "including even meh till concerned circa by unethically",
    customUrl: "https://shabby-spear.org/",
    pqStrictOrdering: false,
    pqRatePerSec: 348.41,
    pqMode: "always",
    pqMaxBufferSize: 1075,
    pqMaxBackpressureSec: 9617.49,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDataset

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesDataset" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "dataset-output",
    type: "dataset",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    messageField: "<value>",
    excludeFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    serverHostField: "<value>",
    timestampField: "<value>",
    defaultSeverity: "finer",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    site: "us",
    concurrency: 9452.03,
    maxPayloadSizeKB: 7517.76,
    maxPayloadEvents: 8081.78,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 2970.11,
    flushPeriodSec: 3999.22,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    onBackpressure: "drop",
    authType: "secret",
    totalMemoryLimitKB: 9166.53,
    description: "colorfully fiercely operating save aha jealous creator watery troubled",
    customUrl: "https://vivacious-sanity.com/",
    pqStrictOrdering: false,
    pqRatePerSec: 9178.15,
    pqMode: "backpressure",
    pqMaxBufferSize: 1322.67,
    pqMaxBackpressureSec: 8243.21,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "<value>",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "dataset-output",
    type: "dataset",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    messageField: "<value>",
    excludeFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    serverHostField: "<value>",
    timestampField: "<value>",
    defaultSeverity: "finer",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    site: "us",
    concurrency: 9452.03,
    maxPayloadSizeKB: 7517.76,
    maxPayloadEvents: 8081.78,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 2970.11,
    flushPeriodSec: 3999.22,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    onBackpressure: "drop",
    authType: "secret",
    totalMemoryLimitKB: 9166.53,
    description: "colorfully fiercely operating save aha jealous creator watery troubled",
    customUrl: "https://vivacious-sanity.com/",
    pqStrictOrdering: false,
    pqRatePerSec: 9178.15,
    pqMode: "backpressure",
    pqMaxBufferSize: 1322.67,
    pqMaxBackpressureSec: 8243.21,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "<value>",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDiskSpool

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesDiskSpool" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "disk-spool-output",
    type: "disk_spool",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    partitionExpr: "<value>",
    description: "debit ascertain spew truthfully mechanic sediment indeed idealistic cleverly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "disk-spool-output",
    type: "disk_spool",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    partitionExpr: "<value>",
    description: "debit ascertain spew truthfully mechanic sediment indeed idealistic cleverly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDlS3

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesDlS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "dl-s3-output",
    type: "dl_s3",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "<value>",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 1399.18,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    objectACL: "public-read",
    storageClass: "GLACIER",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: false,
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 8061.41,
    maxOpenFiles: 6346.88,
    headerLine: "<value>",
    writeHighWaterMark: 3261.05,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "drop",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 3282.64,
    maxFileIdleTimeSec: 8130.94,
    maxConcurrentFileParts: 6939.48,
    verifyPermissions: false,
    maxClosingFilesToBackpressure: 198.11,
    partitioningFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    description: "leading via beyond assured inspect minority",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "normal",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V1",
    parquetRowGroupLength: 4166.69,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 7360.98,
    directoryBatchSize: 9506.49,
    deadletterPath: "<value>",
    maxRetryNum: 5377.94,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "dl-s3-output",
    type: "dl_s3",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "<value>",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 1399.18,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    objectACL: "public-read",
    storageClass: "GLACIER",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: false,
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 8061.41,
    maxOpenFiles: 6346.88,
    headerLine: "<value>",
    writeHighWaterMark: 3261.05,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "drop",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 3282.64,
    maxFileIdleTimeSec: 8130.94,
    maxConcurrentFileParts: 6939.48,
    verifyPermissions: false,
    maxClosingFilesToBackpressure: 198.11,
    partitioningFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    description: "leading via beyond assured inspect minority",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "normal",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V1",
    parquetRowGroupLength: 4166.69,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 7360.98,
    directoryBatchSize: 9506.49,
    deadletterPath: "<value>",
    maxRetryNum: 5377.94,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDynatraceHttp

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesDynatraceHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "dynatrace-http-output",
    type: "dynatrace_http",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    method: "PATCH",
    keepAlive: false,
    concurrency: 7848.09,
    maxPayloadSizeKB: 2601.41,
    maxPayloadEvents: 2979.76,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 661.77,
    flushPeriodSec: 5744.86,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "token",
    format: "json_array",
    endpoint: "cloud",
    telemetryType: "logs",
    totalMemoryLimitKB: 7496.94,
    description: "gentle quantify wedge",
    pqStrictOrdering: true,
    pqRatePerSec: 8971.26,
    pqMode: "always",
    pqMaxBufferSize: 6062.48,
    pqMaxBackpressureSec: 4173.39,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    token: "your-api-key",
    textSecret: "<value>",
    environmentId: "<id>",
    activeGateDomain: "<value>",
    url: "https://married-casement.org/",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "dynatrace-http-output",
    type: "dynatrace_http",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    method: "PATCH",
    keepAlive: false,
    concurrency: 7848.09,
    maxPayloadSizeKB: 2601.41,
    maxPayloadEvents: 2979.76,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 661.77,
    flushPeriodSec: 5744.86,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "token",
    format: "json_array",
    endpoint: "cloud",
    telemetryType: "logs",
    totalMemoryLimitKB: 7496.94,
    description: "gentle quantify wedge",
    pqStrictOrdering: true,
    pqRatePerSec: 8971.26,
    pqMode: "always",
    pqMaxBufferSize: 6062.48,
    pqMaxBackpressureSec: 4173.39,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    token: "your-api-key",
    textSecret: "<value>",
    environmentId: "<id>",
    activeGateDomain: "<value>",
    url: "https://married-casement.org/",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDynatraceOtlp

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesDynatraceOtlp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "dynatrace-otlp-output",
    type: "dynatrace_otlp",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    protocol: "http",
    endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
    otlpVersion: "1.3.1",
    compress: "gzip",
    httpCompress: "gzip",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    concurrency: 6953.7,
    maxPayloadSizeKB: 755.87,
    timeoutSec: 9941.18,
    flushPeriodSec: 2726.85,
    failedRequestLoggingMode: "none",
    connectionTimeout: 812.99,
    keepAliveTime: 5032.7,
    keepAlive: true,
    endpointType: "saas",
    tokenSecret: "your-token-secret",
    authTokenName: "<value>",
    onBackpressure: "block",
    description: "upright continually yet ah",
    rejectUnauthorized: false,
    useRoundRobinDns: true,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    pqStrictOrdering: true,
    pqRatePerSec: 113.84,
    pqMode: "always",
    pqMaxBufferSize: 2076.49,
    pqMaxBackpressureSec: 5811.22,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "dynatrace-otlp-output",
    type: "dynatrace_otlp",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    protocol: "http",
    endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
    otlpVersion: "1.3.1",
    compress: "gzip",
    httpCompress: "gzip",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    concurrency: 6953.7,
    maxPayloadSizeKB: 755.87,
    timeoutSec: 9941.18,
    flushPeriodSec: 2726.85,
    failedRequestLoggingMode: "none",
    connectionTimeout: 812.99,
    keepAliveTime: 5032.7,
    keepAlive: true,
    endpointType: "saas",
    tokenSecret: "your-token-secret",
    authTokenName: "<value>",
    onBackpressure: "block",
    description: "upright continually yet ah",
    rejectUnauthorized: false,
    useRoundRobinDns: true,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    pqStrictOrdering: true,
    pqRatePerSec: 113.84,
    pqMode: "always",
    pqMaxBufferSize: 2076.49,
    pqMaxBackpressureSec: 5811.22,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesElastic

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesElastic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "elastic-output",
    type: "elastic",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    loadBalanced: true,
    index: "logs",
    docType: "<value>",
    concurrency: 3833.33,
    maxPayloadSizeKB: 9728.56,
    maxPayloadEvents: 5181.49,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 1009.82,
    flushPeriodSec: 3099.64,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    extraParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    auth: {
      disabled: true,
      username: "Cornell1",
      password: "7Bgo8CizAQpf4AW",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticVersion: "7",
    elasticPipeline: "<value>",
    includeDocId: false,
    writeAction: "create",
    retryPartialErrors: true,
    onBackpressure: "drop",
    description: "badly likewise geez psst what psst",
    url: "https://impossible-waist.info/",
    useRoundRobinDns: true,
    excludeSelf: true,
    urls: [
      {
        url: "https://bad-waist.name",
        weight: 9775.66,
      },
    ],
    dnsResolvePeriodSec: 1267.46,
    loadBalanceStatsPeriodSec: 7851.81,
    pqStrictOrdering: false,
    pqRatePerSec: 6768.23,
    pqMode: "error",
    pqMaxBufferSize: 5307.39,
    pqMaxBackpressureSec: 6667.16,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "elastic-output",
    type: "elastic",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    loadBalanced: true,
    index: "logs",
    docType: "<value>",
    concurrency: 3833.33,
    maxPayloadSizeKB: 9728.56,
    maxPayloadEvents: 5181.49,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 1009.82,
    flushPeriodSec: 3099.64,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    extraParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    auth: {
      disabled: true,
      username: "Cornell1",
      password: "7Bgo8CizAQpf4AW",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticVersion: "7",
    elasticPipeline: "<value>",
    includeDocId: false,
    writeAction: "create",
    retryPartialErrors: true,
    onBackpressure: "drop",
    description: "badly likewise geez psst what psst",
    url: "https://impossible-waist.info/",
    useRoundRobinDns: true,
    excludeSelf: true,
    urls: [
      {
        url: "https://bad-waist.name",
        weight: 9775.66,
      },
    ],
    dnsResolvePeriodSec: 1267.46,
    loadBalanceStatsPeriodSec: 7851.81,
    pqStrictOrdering: false,
    pqRatePerSec: 6768.23,
    pqMode: "error",
    pqMaxBufferSize: 5307.39,
    pqMaxBackpressureSec: 6667.16,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesElasticCloud

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesElasticCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "elastic-cloud-output",
    type: "elastic_cloud",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    url: "my-cloud-id",
    index: "logs",
    concurrency: 3165.29,
    maxPayloadSizeKB: 9220.7,
    maxPayloadEvents: 621.85,
    compress: false,
    rejectUnauthorized: true,
    timeoutSec: 4711.56,
    flushPeriodSec: 1538.63,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    extraParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    auth: {
      disabled: true,
      username: "Cornell1",
      password: "7Bgo8CizAQpf4AW",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticPipeline: "<value>",
    includeDocId: false,
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "drop",
    description: "scale given whether hm haunting",
    pqStrictOrdering: true,
    pqRatePerSec: 114.13,
    pqMode: "always",
    pqMaxBufferSize: 7574.29,
    pqMaxBackpressureSec: 8581.19,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "elastic-cloud-output",
    type: "elastic_cloud",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    url: "my-cloud-id",
    index: "logs",
    concurrency: 3165.29,
    maxPayloadSizeKB: 9220.7,
    maxPayloadEvents: 621.85,
    compress: false,
    rejectUnauthorized: true,
    timeoutSec: 4711.56,
    flushPeriodSec: 1538.63,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    extraParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    auth: {
      disabled: true,
      username: "Cornell1",
      password: "7Bgo8CizAQpf4AW",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticPipeline: "<value>",
    includeDocId: false,
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "drop",
    description: "scale given whether hm haunting",
    pqStrictOrdering: true,
    pqRatePerSec: 114.13,
    pqMode: "always",
    pqMaxBufferSize: 7574.29,
    pqMaxBackpressureSec: 8581.19,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesExabeam

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesExabeam" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "exabeam-output",
    type: "exabeam",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    bucket: "my-bucket",
    region: "us-east1",
    stagePath: "/tmp/staging",
    endpoint: "https://storage.googleapis.com",
    signatureVersion: "v4",
    objectACL: "bucket-owner-full-control",
    storageClass: "COLDLINE",
    reuseConnections: false,
    rejectUnauthorized: true,
    addIdToStagePath: false,
    removeEmptyDirs: false,
    maxFileOpenTimeSec: 2823.64,
    maxFileIdleTimeSec: 9882.61,
    maxOpenFiles: 3464.69,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "drop",
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileSizeMB: 5997.02,
    encodedConfiguration: "<value>",
    collectorInstanceId: "11112222-3333-4444-5555-666677778888",
    siteName: "<value>",
    siteId: "<id>",
    timezoneOffset: "<value>",
    awsApiKey: "<value>",
    awsSecretKey: "<value>",
    description: "ha clearly if if",
    emptyDirCleanupSec: 9986.17,
    directoryBatchSize: 4290.36,
    deadletterPath: "<value>",
    maxRetryNum: 9315.38,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "exabeam-output",
    type: "exabeam",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    bucket: "my-bucket",
    region: "us-east1",
    stagePath: "/tmp/staging",
    endpoint: "https://storage.googleapis.com",
    signatureVersion: "v4",
    objectACL: "bucket-owner-full-control",
    storageClass: "COLDLINE",
    reuseConnections: false,
    rejectUnauthorized: true,
    addIdToStagePath: false,
    removeEmptyDirs: false,
    maxFileOpenTimeSec: 2823.64,
    maxFileIdleTimeSec: 9882.61,
    maxOpenFiles: 3464.69,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "drop",
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileSizeMB: 5997.02,
    encodedConfiguration: "<value>",
    collectorInstanceId: "11112222-3333-4444-5555-666677778888",
    siteName: "<value>",
    siteId: "<id>",
    timezoneOffset: "<value>",
    awsApiKey: "<value>",
    awsSecretKey: "<value>",
    description: "ha clearly if if",
    emptyDirCleanupSec: 9986.17,
    directoryBatchSize: 4290.36,
    deadletterPath: "<value>",
    maxRetryNum: 9315.38,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesFilesystem

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesFilesystem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "filesystem-output",
    type: "filesystem",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    destPath: "/var/log/output",
    stagePath: "<value>",
    addIdToStagePath: false,
    removeEmptyDirs: true,
    partitionExpr: "<value>",
    format: "raw",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 6295.91,
    maxFileOpenTimeSec: 9272.25,
    maxFileIdleTimeSec: 8431.64,
    maxOpenFiles: 7740.89,
    headerLine: "<value>",
    writeHighWaterMark: 5522.82,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    description: "geez psst knowingly yum oof uh-huh rekindle",
    compress: "gzip",
    compressionLevel: "normal",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_4",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 2499.28,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: false,
    emptyDirCleanupSec: 9527.71,
    directoryBatchSize: 7326.8,
    deadletterPath: "<value>",
    maxRetryNum: 5984.31,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "filesystem-output",
    type: "filesystem",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    destPath: "/var/log/output",
    stagePath: "<value>",
    addIdToStagePath: false,
    removeEmptyDirs: true,
    partitionExpr: "<value>",
    format: "raw",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 6295.91,
    maxFileOpenTimeSec: 9272.25,
    maxFileIdleTimeSec: 8431.64,
    maxOpenFiles: 7740.89,
    headerLine: "<value>",
    writeHighWaterMark: 5522.82,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    description: "geez psst knowingly yum oof uh-huh rekindle",
    compress: "gzip",
    compressionLevel: "normal",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_4",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 2499.28,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: false,
    emptyDirCleanupSec: 9527.71,
    directoryBatchSize: 7326.8,
    deadletterPath: "<value>",
    maxRetryNum: 5984.31,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleChronicle

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesGoogleChronicle" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "google-chronicle-output",
    type: "google_chronicle",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    apiVersion: "v2",
    authenticationMethod: "serviceAccount",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    logFormatType: "unstructured",
    region: "us",
    concurrency: 8897.34,
    maxPayloadSizeKB: 9258.36,
    maxPayloadEvents: 7068.42,
    compress: false,
    rejectUnauthorized: true,
    timeoutSec: 4307.5,
    flushPeriodSec: 2224.57,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    useRoundRobinDns: true,
    onBackpressure: "block",
    totalMemoryLimitKB: 1162.9,
    description: "and a perfumed phooey segregate helplessly clinking junior",
    extraLogTypes: [
      {
        logType: "<value>",
        description: "swing making apropos extremely likely grass regal beyond pigpen adrenalin",
      },
    ],
    logType: "<value>",
    logTextField: "<value>",
    customerId: "customer-id",
    namespace: "<value>",
    customLabels: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    udmType: "logs",
    apiKey: "<value>",
    apiKeySecret: "<value>",
    serviceAccountCredentials: "<value>",
    serviceAccountCredentialsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 5826.18,
    pqMode: "error",
    pqMaxBufferSize: 8918.66,
    pqMaxBackpressureSec: 2582.01,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "google-chronicle-output",
    type: "google_chronicle",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    apiVersion: "v2",
    authenticationMethod: "serviceAccount",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    logFormatType: "unstructured",
    region: "us",
    concurrency: 8897.34,
    maxPayloadSizeKB: 9258.36,
    maxPayloadEvents: 7068.42,
    compress: false,
    rejectUnauthorized: true,
    timeoutSec: 4307.5,
    flushPeriodSec: 2224.57,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    useRoundRobinDns: true,
    onBackpressure: "block",
    totalMemoryLimitKB: 1162.9,
    description: "and a perfumed phooey segregate helplessly clinking junior",
    extraLogTypes: [
      {
        logType: "<value>",
        description: "swing making apropos extremely likely grass regal beyond pigpen adrenalin",
      },
    ],
    logType: "<value>",
    logTextField: "<value>",
    customerId: "customer-id",
    namespace: "<value>",
    customLabels: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    udmType: "logs",
    apiKey: "<value>",
    apiKeySecret: "<value>",
    serviceAccountCredentials: "<value>",
    serviceAccountCredentialsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 5826.18,
    pqMode: "error",
    pqMaxBufferSize: 8918.66,
    pqMaxBackpressureSec: 2582.01,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleCloudLogging

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesGoogleCloudLogging" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "google-cloud-logging-output",
    type: "google_cloud_logging",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    logLocationType: "project",
    logNameExpression: "my-log",
    sanitizeLogNames: true,
    payloadFormat: "text",
    logLabels: [
      {
        label: "<value>",
        valueExpression: "<value>",
      },
    ],
    resourceTypeExpression: "<value>",
    resourceTypeLabels: [
      {
        label: "<value>",
        valueExpression: "<value>",
      },
    ],
    severityExpression: "<value>",
    insertIdExpression: "<value>",
    googleAuthMethod: "auto",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    maxPayloadSizeKB: 6659.66,
    maxPayloadEvents: 2966.46,
    flushPeriodSec: 7560.42,
    concurrency: 3378.51,
    connectionTimeout: 2248.95,
    timeoutSec: 611.18,
    throttleRateReqPerSec: 626910,
    requestMethodExpression: "<value>",
    requestUrlExpression: "<value>",
    requestSizeExpression: "<value>",
    statusExpression: "<value>",
    responseSizeExpression: "<value>",
    userAgentExpression: "<value>",
    remoteIpExpression: "<value>",
    serverIpExpression: "<value>",
    refererExpression: "<value>",
    latencyExpression: "<value>",
    cacheLookupExpression: "<value>",
    cacheHitExpression: "<value>",
    cacheValidatedExpression: "<value>",
    cacheFillBytesExpression: "<value>",
    protocolExpression: "<value>",
    idExpression: "<value>",
    producerExpression: "<value>",
    firstExpression: "<value>",
    lastExpression: "<value>",
    fileExpression: "<value>",
    lineExpression: "<value>",
    functionExpression: "<value>",
    uidExpression: "<value>",
    indexExpression: "<value>",
    totalSplitsExpression: "<value>",
    traceExpression: "<value>",
    spanIdExpression: "<value>",
    traceSampledExpression: "<value>",
    onBackpressure: "drop",
    totalMemoryLimitKB: 2451.68,
    description: "amnesty amid hoick whoa subtle galoshes aching bah",
    logLocationExpression: "my-project",
    payloadExpression: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 2376.17,
    pqMode: "error",
    pqMaxBufferSize: 3480.05,
    pqMaxBackpressureSec: 3818.67,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "google-cloud-logging-output",
    type: "google_cloud_logging",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    logLocationType: "project",
    logNameExpression: "my-log",
    sanitizeLogNames: true,
    payloadFormat: "text",
    logLabels: [
      {
        label: "<value>",
        valueExpression: "<value>",
      },
    ],
    resourceTypeExpression: "<value>",
    resourceTypeLabels: [
      {
        label: "<value>",
        valueExpression: "<value>",
      },
    ],
    severityExpression: "<value>",
    insertIdExpression: "<value>",
    googleAuthMethod: "auto",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    maxPayloadSizeKB: 6659.66,
    maxPayloadEvents: 2966.46,
    flushPeriodSec: 7560.42,
    concurrency: 3378.51,
    connectionTimeout: 2248.95,
    timeoutSec: 611.18,
    throttleRateReqPerSec: 626910,
    requestMethodExpression: "<value>",
    requestUrlExpression: "<value>",
    requestSizeExpression: "<value>",
    statusExpression: "<value>",
    responseSizeExpression: "<value>",
    userAgentExpression: "<value>",
    remoteIpExpression: "<value>",
    serverIpExpression: "<value>",
    refererExpression: "<value>",
    latencyExpression: "<value>",
    cacheLookupExpression: "<value>",
    cacheHitExpression: "<value>",
    cacheValidatedExpression: "<value>",
    cacheFillBytesExpression: "<value>",
    protocolExpression: "<value>",
    idExpression: "<value>",
    producerExpression: "<value>",
    firstExpression: "<value>",
    lastExpression: "<value>",
    fileExpression: "<value>",
    lineExpression: "<value>",
    functionExpression: "<value>",
    uidExpression: "<value>",
    indexExpression: "<value>",
    totalSplitsExpression: "<value>",
    traceExpression: "<value>",
    spanIdExpression: "<value>",
    traceSampledExpression: "<value>",
    onBackpressure: "drop",
    totalMemoryLimitKB: 2451.68,
    description: "amnesty amid hoick whoa subtle galoshes aching bah",
    logLocationExpression: "my-project",
    payloadExpression: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 2376.17,
    pqMode: "error",
    pqMaxBufferSize: 3480.05,
    pqMaxBackpressureSec: 3818.67,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleCloudStorage

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesGoogleCloudStorage" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "google-cloud-storage-output",
    type: "google_cloud_storage",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    bucket: "my-bucket",
    region: "us-east1",
    endpoint: "https://storage.googleapis.com",
    signatureVersion: "v4",
    awsAuthenticationMethod: "manual",
    stagePath: "/tmp/staging",
    destPath: "<value>",
    verifyPermissions: false,
    objectACL: "authenticated-read",
    storageClass: "COLDLINE",
    reuseConnections: false,
    rejectUnauthorized: true,
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "<value>",
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 4669.83,
    maxFileOpenTimeSec: 6219.32,
    maxFileIdleTimeSec: 8.28,
    maxOpenFiles: 961.03,
    headerLine: "<value>",
    writeHighWaterMark: 5468.83,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    description: "rule adumbrate rapidly sans with advertisement reorganisation",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_1_0",
    parquetDataPageVersion: "DATA_PAGE_V1",
    parquetRowGroupLength: 9753.78,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: false,
    enableWritePageIndex: false,
    enablePageChecksum: false,
    emptyDirCleanupSec: 1958.48,
    directoryBatchSize: 5219.19,
    deadletterPath: "<value>",
    maxRetryNum: 1500.03,
    awsApiKey: "<value>",
    awsSecretKey: "<value>",
    awsSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "google-cloud-storage-output",
    type: "google_cloud_storage",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    bucket: "my-bucket",
    region: "us-east1",
    endpoint: "https://storage.googleapis.com",
    signatureVersion: "v4",
    awsAuthenticationMethod: "manual",
    stagePath: "/tmp/staging",
    destPath: "<value>",
    verifyPermissions: false,
    objectACL: "authenticated-read",
    storageClass: "COLDLINE",
    reuseConnections: false,
    rejectUnauthorized: true,
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "<value>",
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 4669.83,
    maxFileOpenTimeSec: 6219.32,
    maxFileIdleTimeSec: 8.28,
    maxOpenFiles: 961.03,
    headerLine: "<value>",
    writeHighWaterMark: 5468.83,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    description: "rule adumbrate rapidly sans with advertisement reorganisation",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_1_0",
    parquetDataPageVersion: "DATA_PAGE_V1",
    parquetRowGroupLength: 9753.78,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: false,
    enableWritePageIndex: false,
    enablePageChecksum: false,
    emptyDirCleanupSec: 1958.48,
    directoryBatchSize: 5219.19,
    deadletterPath: "<value>",
    maxRetryNum: 1500.03,
    awsApiKey: "<value>",
    awsSecretKey: "<value>",
    awsSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGooglePubsub

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesGooglePubsub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "google-pubsub-output",
    type: "google_pubsub",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    topicName: "my-topic",
    createTopic: true,
    orderedDelivery: true,
    region: "<value>",
    googleAuthMethod: "auto",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    batchSize: 9364.13,
    batchTimeout: 1786.97,
    maxQueueSize: 2608.15,
    maxRecordSizeKB: 646.35,
    flushPeriod: 4464.58,
    maxInProgress: 2631.85,
    onBackpressure: "drop",
    description: "gadzooks and frankly behind ouch modulo best-seller though",
    pqStrictOrdering: false,
    pqRatePerSec: 4170.7,
    pqMode: "backpressure",
    pqMaxBufferSize: 4975.08,
    pqMaxBackpressureSec: 8844.19,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "google-pubsub-output",
    type: "google_pubsub",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    topicName: "my-topic",
    createTopic: true,
    orderedDelivery: true,
    region: "<value>",
    googleAuthMethod: "auto",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    batchSize: 9364.13,
    batchTimeout: 1786.97,
    maxQueueSize: 2608.15,
    maxRecordSizeKB: 646.35,
    flushPeriod: 4464.58,
    maxInProgress: 2631.85,
    onBackpressure: "drop",
    description: "gadzooks and frankly behind ouch modulo best-seller though",
    pqStrictOrdering: false,
    pqRatePerSec: 4170.7,
    pqMode: "backpressure",
    pqMaxBufferSize: 4975.08,
    pqMaxBackpressureSec: 8844.19,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGrafanaCloud

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesGrafanaCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "grafana-cloud-output",
    type: "grafana_cloud",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    lokiUrl: "https://logs-prod-us-central1.grafana.net",
    prometheusUrl: "https://remorseful-cheetah.org/",
    message: "<value>",
    messageFormat: "protobuf",
    labels: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    metricRenameExpr: "<value>",
    prometheusAuth: {
      authType: "none",
      token: "<value>",
      textSecret: "<value>",
      username: "Sunny_Davis47",
      password: "rCtRkjr98PkMUDq",
      credentialsSecret: "<value>",
    },
    lokiAuth: {
      authType: "credentialsSecret",
      token: "<value>",
      textSecret: "<value>",
      username: "Reese58",
      password: "0yiycsVNWAr4li2",
      credentialsSecret: "<value>",
    },
    concurrency: 8318.8,
    maxPayloadSizeKB: 6411.24,
    maxPayloadEvents: 2160.34,
    rejectUnauthorized: true,
    timeoutSec: 5303.89,
    flushPeriodSec: 8088.15,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "who obediently lasting order busily help along wombat geez besides",
    compress: true,
    pqStrictOrdering: false,
    pqRatePerSec: 6054.96,
    pqMode: "always",
    pqMaxBufferSize: 9568.13,
    pqMaxBackpressureSec: 2398.82,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "grafana-cloud-output",
    type: "grafana_cloud",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    lokiUrl: "https://logs-prod-us-central1.grafana.net",
    prometheusUrl: "https://remorseful-cheetah.org/",
    message: "<value>",
    messageFormat: "protobuf",
    labels: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    metricRenameExpr: "<value>",
    prometheusAuth: {
      authType: "none",
      token: "<value>",
      textSecret: "<value>",
      username: "Sunny_Davis47",
      password: "rCtRkjr98PkMUDq",
      credentialsSecret: "<value>",
    },
    lokiAuth: {
      authType: "credentialsSecret",
      token: "<value>",
      textSecret: "<value>",
      username: "Reese58",
      password: "0yiycsVNWAr4li2",
      credentialsSecret: "<value>",
    },
    concurrency: 8318.8,
    maxPayloadSizeKB: 6411.24,
    maxPayloadEvents: 2160.34,
    rejectUnauthorized: true,
    timeoutSec: 5303.89,
    flushPeriodSec: 8088.15,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "who obediently lasting order busily help along wombat geez besides",
    compress: true,
    pqStrictOrdering: false,
    pqRatePerSec: 6054.96,
    pqMode: "always",
    pqMaxBufferSize: 9568.13,
    pqMaxBackpressureSec: 2398.82,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGraphite

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesGraphite" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "graphite-output",
    type: "graphite",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    protocol: "tcp",
    host: "localhost",
    port: 2003,
    mtu: 6187.99,
    flushPeriodSec: 3360.95,
    dnsResolvePeriodSec: 8864.55,
    description: "gah yippee request liquid emerge",
    throttleRatePerSec: "<value>",
    connectionTimeout: 3331.7,
    writeTimeout: 7260.53,
    onBackpressure: "queue",
    pqStrictOrdering: true,
    pqRatePerSec: 4765.62,
    pqMode: "always",
    pqMaxBufferSize: 8640.75,
    pqMaxBackpressureSec: 886.41,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "graphite-output",
    type: "graphite",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    protocol: "tcp",
    host: "localhost",
    port: 2003,
    mtu: 6187.99,
    flushPeriodSec: 3360.95,
    dnsResolvePeriodSec: 8864.55,
    description: "gah yippee request liquid emerge",
    throttleRatePerSec: "<value>",
    connectionTimeout: 3331.7,
    writeTimeout: 7260.53,
    onBackpressure: "queue",
    pqStrictOrdering: true,
    pqRatePerSec: 4765.62,
    pqMode: "always",
    pqMaxBufferSize: 8640.75,
    pqMaxBackpressureSec: 886.41,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesHoneycomb

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesHoneycomb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "honeycomb-output",
    type: "honeycomb",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    dataset: "my-dataset",
    concurrency: 3906.43,
    maxPayloadSizeKB: 8442.55,
    maxPayloadEvents: 1833.24,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 1685.63,
    flushPeriodSec: 6726.61,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "queue",
    authType: "secret",
    description: "fooey cinder once collaboration awkwardly upright which whoa because",
    pqStrictOrdering: true,
    pqRatePerSec: 7864.19,
    pqMode: "error",
    pqMaxBufferSize: 820.31,
    pqMaxBackpressureSec: 6039.08,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    team: "<value>",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "honeycomb-output",
    type: "honeycomb",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    dataset: "my-dataset",
    concurrency: 3906.43,
    maxPayloadSizeKB: 8442.55,
    maxPayloadEvents: 1833.24,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 1685.63,
    flushPeriodSec: 6726.61,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "queue",
    authType: "secret",
    description: "fooey cinder once collaboration awkwardly upright which whoa because",
    pqStrictOrdering: true,
    pqRatePerSec: 7864.19,
    pqMode: "error",
    pqMaxBufferSize: 820.31,
    pqMaxBackpressureSec: 6039.08,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    team: "<value>",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesHumioHec

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesHumioHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "humio-hec-output",
    type: "humio_hec",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    url: "https://cloud.us.humio.com/api/v1/ingest/hec",
    concurrency: 1053.46,
    maxPayloadSizeKB: 156.48,
    maxPayloadEvents: 250,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 2501.67,
    flushPeriodSec: 9257.01,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    format: "JSON",
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "queue",
    description: "ouch bog eek whoever after capitalise",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 6872.59,
    pqMode: "always",
    pqMaxBufferSize: 586.01,
    pqMaxBackpressureSec: 4108.73,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "humio-hec-output",
    type: "humio_hec",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    url: "https://cloud.us.humio.com/api/v1/ingest/hec",
    concurrency: 1053.46,
    maxPayloadSizeKB: 156.48,
    maxPayloadEvents: 250,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 2501.67,
    flushPeriodSec: 9257.01,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    format: "JSON",
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "queue",
    description: "ouch bog eek whoever after capitalise",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 6872.59,
    pqMode: "always",
    pqMaxBufferSize: 586.01,
    pqMaxBackpressureSec: 4108.73,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesInfluxdb

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesInfluxdb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "influxdb-output",
    type: "influxdb",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:8086",
    useV2API: false,
    timestampPrecision: "s",
    dynamicValueFieldName: true,
    valueFieldName: "<value>",
    concurrency: 2546.34,
    maxPayloadSizeKB: 5899.05,
    maxPayloadEvents: 6638.01,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 9695.69,
    flushPeriodSec: 6088.68,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "oauth",
    description: "unnaturally contractor slope minority whether",
    database: "mydb",
    bucket: "<value>",
    org: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 6609.09,
    pqMode: "always",
    pqMaxBufferSize: 1828.07,
    pqMaxBackpressureSec: 5210.8,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    username: "Randall11",
    password: "ZuD5C6icHClIPOJ",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://evil-obesity.biz/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 6981.27,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "influxdb-output",
    type: "influxdb",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:8086",
    useV2API: false,
    timestampPrecision: "s",
    dynamicValueFieldName: true,
    valueFieldName: "<value>",
    concurrency: 2546.34,
    maxPayloadSizeKB: 5899.05,
    maxPayloadEvents: 6638.01,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 9695.69,
    flushPeriodSec: 6088.68,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "oauth",
    description: "unnaturally contractor slope minority whether",
    database: "mydb",
    bucket: "<value>",
    org: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 6609.09,
    pqMode: "always",
    pqMaxBufferSize: 1828.07,
    pqMaxBackpressureSec: 5210.8,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    username: "Randall11",
    password: "ZuD5C6icHClIPOJ",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://evil-obesity.biz/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 6981.27,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesKafka

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesKafka" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "kafka-output",
    type: "kafka",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    brokers: [
      "localhost:9092",
    ],
    topic: "logs",
    ack: -1,
    format: "json",
    compression: "snappy",
    maxRecordSizeKB: 7938.77,
    flushEventCount: 4337.68,
    flushPeriodSec: 5979.28,
    kafkaSchemaRegistry: {
      disabled: false,
      schemaRegistryURL: "https://sorrowful-intervention.net",
      connectionTimeout: 2140.69,
      requestTimeout: 635.34,
      maxRetries: 214.92,
      auth: {
        disabled: false,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.3",
      },
      defaultKeySchemaId: 3514.77,
      defaultValueSchemaId: 5300.5,
    },
    connectionTimeout: 7876.49,
    requestTimeout: 5343.71,
    maxRetries: 8798.66,
    maxBackOff: 8515.43,
    initialBackoff: 791.86,
    backoffRate: 1309.17,
    authenticationTimeout: 5121.15,
    reauthenticationThreshold: 557.68,
    sasl: {
      disabled: false,
      username: "Kavon.Olson45",
      password: "WUBBYlZT6hhjm2P",
      authType: "secret",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://good-natured-crocodile.net/",
      clientId: "<id>",
      oauthSecretType: "<value>",
      clientTextSecret: "<value>",
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      saslExtensions: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    onBackpressure: "block",
    description: "hm terrorise formula absent carefully mash tight unripe",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: true,
    pqRatePerSec: 6526.58,
    pqMode: "error",
    pqMaxBufferSize: 9843.57,
    pqMaxBackpressureSec: 4227.45,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "kafka-output",
    type: "kafka",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    brokers: [
      "localhost:9092",
    ],
    topic: "logs",
    ack: -1,
    format: "json",
    compression: "snappy",
    maxRecordSizeKB: 7938.77,
    flushEventCount: 4337.68,
    flushPeriodSec: 5979.28,
    kafkaSchemaRegistry: {
      disabled: false,
      schemaRegistryURL: "https://sorrowful-intervention.net",
      connectionTimeout: 2140.69,
      requestTimeout: 635.34,
      maxRetries: 214.92,
      auth: {
        disabled: false,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.3",
      },
      defaultKeySchemaId: 3514.77,
      defaultValueSchemaId: 5300.5,
    },
    connectionTimeout: 7876.49,
    requestTimeout: 5343.71,
    maxRetries: 8798.66,
    maxBackOff: 8515.43,
    initialBackoff: 791.86,
    backoffRate: 1309.17,
    authenticationTimeout: 5121.15,
    reauthenticationThreshold: 557.68,
    sasl: {
      disabled: false,
      username: "Kavon.Olson45",
      password: "WUBBYlZT6hhjm2P",
      authType: "secret",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://good-natured-crocodile.net/",
      clientId: "<id>",
      oauthSecretType: "<value>",
      clientTextSecret: "<value>",
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      saslExtensions: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    onBackpressure: "block",
    description: "hm terrorise formula absent carefully mash tight unripe",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: true,
    pqRatePerSec: 6526.58,
    pqMode: "error",
    pqMaxBufferSize: 9843.57,
    pqMaxBackpressureSec: 4227.45,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesKinesis

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesKinesis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "kinesis-output",
    type: "kinesis",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    streamName: "my-stream",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 4419.74,
    concurrency: 3716.02,
    maxRecordSizeKB: 5732.85,
    flushPeriodSec: 1378.1,
    compression: "gzip",
    useListShards: true,
    asNdjson: false,
    onBackpressure: "drop",
    description: "ravel negative gee pro heighten supposing hold elegantly nectarine",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    maxEventsPerFlush: 1341.27,
    pqStrictOrdering: false,
    pqRatePerSec: 6629.39,
    pqMode: "always",
    pqMaxBufferSize: 6065.98,
    pqMaxBackpressureSec: 8788.42,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "kinesis-output",
    type: "kinesis",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    streamName: "my-stream",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 4419.74,
    concurrency: 3716.02,
    maxRecordSizeKB: 5732.85,
    flushPeriodSec: 1378.1,
    compression: "gzip",
    useListShards: true,
    asNdjson: false,
    onBackpressure: "drop",
    description: "ravel negative gee pro heighten supposing hold elegantly nectarine",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    maxEventsPerFlush: 1341.27,
    pqStrictOrdering: false,
    pqRatePerSec: 6629.39,
    pqMode: "always",
    pqMaxBufferSize: 6065.98,
    pqMaxBackpressureSec: 8788.42,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesLoki

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesLoki" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "loki-output",
    type: "loki",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:3100/loki/api/v1/push",
    message: "<value>",
    messageFormat: "json",
    labels: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "credentialsSecret",
    concurrency: 1318.37,
    maxPayloadSizeKB: 1194.17,
    maxPayloadEvents: 2650.38,
    rejectUnauthorized: true,
    timeoutSec: 7424.11,
    flushPeriodSec: 6148.8,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    enableDynamicHeaders: true,
    onBackpressure: "block",
    totalMemoryLimitKB: 9907.89,
    description: "who for down sheepishly elastic fearless across",
    compress: false,
    token: "<value>",
    textSecret: "<value>",
    username: "Mervin.Prosacco14",
    password: "8riIWZZWKYSFk0F",
    credentialsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 1401.3,
    pqMode: "always",
    pqMaxBufferSize: 1661.31,
    pqMaxBackpressureSec: 7720.03,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "loki-output",
    type: "loki",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:3100/loki/api/v1/push",
    message: "<value>",
    messageFormat: "json",
    labels: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "credentialsSecret",
    concurrency: 1318.37,
    maxPayloadSizeKB: 1194.17,
    maxPayloadEvents: 2650.38,
    rejectUnauthorized: true,
    timeoutSec: 7424.11,
    flushPeriodSec: 6148.8,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    enableDynamicHeaders: true,
    onBackpressure: "block",
    totalMemoryLimitKB: 9907.89,
    description: "who for down sheepishly elastic fearless across",
    compress: false,
    token: "<value>",
    textSecret: "<value>",
    username: "Mervin.Prosacco14",
    password: "8riIWZZWKYSFk0F",
    credentialsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 1401.3,
    pqMode: "always",
    pqMaxBufferSize: 1661.31,
    pqMaxBackpressureSec: 7720.03,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMicrosoftFabric

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesMicrosoftFabric" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "microsoft-fabric-output",
    type: "microsoft_fabric",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    topic: "logs",
    ack: 0,
    format: "raw",
    maxRecordSizeKB: 2242.15,
    flushEventCount: 981.24,
    flushPeriodSec: 9023.34,
    connectionTimeout: 6449.99,
    requestTimeout: 5675.04,
    maxRetries: 2753.82,
    maxBackOff: 1820.11,
    initialBackoff: 6099,
    backoffRate: 6646.65,
    authenticationTimeout: 922.86,
    reauthenticationThreshold: 8135.03,
    sasl: {
      disabled: false,
      mechanism: "oauthbearer",
      username: "Jo_Abshire",
      textSecret: "<value>",
      clientSecretAuthType: "secret",
      clientTextSecret: "<value>",
      certificateName: "<value>",
      certPath: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      oauthEndpoint: "https://login.microsoftonline.us",
      clientId: "<id>",
      tenantId: "<id>",
      scope: "<value>",
    },
    tls: {
      disabled: false,
      rejectUnauthorized: false,
    },
    onBackpressure: "queue",
    bootstrap_server: "myeventstream.servicebus.windows.net:9093",
    description: "ferociously up council promptly anenst since when",
    pqStrictOrdering: true,
    pqRatePerSec: 2339.07,
    pqMode: "backpressure",
    pqMaxBufferSize: 8.87,
    pqMaxBackpressureSec: 1441.55,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "microsoft-fabric-output",
    type: "microsoft_fabric",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    topic: "logs",
    ack: 0,
    format: "raw",
    maxRecordSizeKB: 2242.15,
    flushEventCount: 981.24,
    flushPeriodSec: 9023.34,
    connectionTimeout: 6449.99,
    requestTimeout: 5675.04,
    maxRetries: 2753.82,
    maxBackOff: 1820.11,
    initialBackoff: 6099,
    backoffRate: 6646.65,
    authenticationTimeout: 922.86,
    reauthenticationThreshold: 8135.03,
    sasl: {
      disabled: false,
      mechanism: "oauthbearer",
      username: "Jo_Abshire",
      textSecret: "<value>",
      clientSecretAuthType: "secret",
      clientTextSecret: "<value>",
      certificateName: "<value>",
      certPath: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      oauthEndpoint: "https://login.microsoftonline.us",
      clientId: "<id>",
      tenantId: "<id>",
      scope: "<value>",
    },
    tls: {
      disabled: false,
      rejectUnauthorized: false,
    },
    onBackpressure: "queue",
    bootstrap_server: "myeventstream.servicebus.windows.net:9093",
    description: "ferociously up council promptly anenst since when",
    pqStrictOrdering: true,
    pqRatePerSec: 2339.07,
    pqMode: "backpressure",
    pqMaxBufferSize: 8.87,
    pqMaxBackpressureSec: 1441.55,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMinio

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesMinio" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "minio-output",
    type: "minio",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    endpoint: "http://localhost:9000",
    bucket: "my-bucket",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    signatureVersion: "v2",
    objectACL: "bucket-owner-read",
    storageClass: "REDUCED_REDUNDANCY",
    serverSideEncryption: "AES256",
    reuseConnections: false,
    rejectUnauthorized: false,
    verifyPermissions: false,
    removeEmptyDirs: false,
    partitionExpr: "<value>",
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 8108.82,
    maxOpenFiles: 3093.84,
    headerLine: "<value>",
    writeHighWaterMark: 532.77,
    onBackpressure: "block",
    deadletterEnabled: true,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 9895.49,
    maxFileIdleTimeSec: 3260.96,
    maxConcurrentFileParts: 4327.22,
    description: "mostly along mechanically near upright commercial",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "none",
    compressionLevel: "normal",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 3483.66,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: true,
    emptyDirCleanupSec: 6616.17,
    directoryBatchSize: 1170.11,
    deadletterPath: "<value>",
    maxRetryNum: 5955.94,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "minio-output",
    type: "minio",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    endpoint: "http://localhost:9000",
    bucket: "my-bucket",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    signatureVersion: "v2",
    objectACL: "bucket-owner-read",
    storageClass: "REDUCED_REDUNDANCY",
    serverSideEncryption: "AES256",
    reuseConnections: false,
    rejectUnauthorized: false,
    verifyPermissions: false,
    removeEmptyDirs: false,
    partitionExpr: "<value>",
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 8108.82,
    maxOpenFiles: 3093.84,
    headerLine: "<value>",
    writeHighWaterMark: 532.77,
    onBackpressure: "block",
    deadletterEnabled: true,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 9895.49,
    maxFileIdleTimeSec: 3260.96,
    maxConcurrentFileParts: 4327.22,
    description: "mostly along mechanically near upright commercial",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "none",
    compressionLevel: "normal",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 3483.66,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: true,
    emptyDirCleanupSec: 6616.17,
    directoryBatchSize: 1170.11,
    deadletterPath: "<value>",
    maxRetryNum: 5955.94,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMsk

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesMsk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "msk-output",
    type: "msk",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topic: "logs",
    ack: 1,
    format: "raw",
    compression: "none",
    maxRecordSizeKB: 7512.68,
    flushEventCount: 1988.66,
    flushPeriodSec: 5450.23,
    kafkaSchemaRegistry: {
      disabled: false,
      schemaRegistryURL: "https://sorrowful-intervention.net",
      connectionTimeout: 2140.69,
      requestTimeout: 635.34,
      maxRetries: 214.92,
      auth: {
        disabled: false,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.3",
      },
      defaultKeySchemaId: 3514.77,
      defaultValueSchemaId: 5300.5,
    },
    connectionTimeout: 6551.53,
    requestTimeout: 31.64,
    maxRetries: 5023.35,
    maxBackOff: 4474.95,
    initialBackoff: 865.2,
    backoffRate: 5321.76,
    authenticationTimeout: 330.08,
    reauthenticationThreshold: 7606.8,
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 1160,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    onBackpressure: "drop",
    description: "resource wisely until dock urgently",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: false,
    pqRatePerSec: 4682.17,
    pqMode: "always",
    pqMaxBufferSize: 5267.31,
    pqMaxBackpressureSec: 1309.07,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "msk-output",
    type: "msk",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topic: "logs",
    ack: 1,
    format: "raw",
    compression: "none",
    maxRecordSizeKB: 7512.68,
    flushEventCount: 1988.66,
    flushPeriodSec: 5450.23,
    kafkaSchemaRegistry: {
      disabled: false,
      schemaRegistryURL: "https://sorrowful-intervention.net",
      connectionTimeout: 2140.69,
      requestTimeout: 635.34,
      maxRetries: 214.92,
      auth: {
        disabled: false,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.3",
      },
      defaultKeySchemaId: 3514.77,
      defaultValueSchemaId: 5300.5,
    },
    connectionTimeout: 6551.53,
    requestTimeout: 31.64,
    maxRetries: 5023.35,
    maxBackOff: 4474.95,
    initialBackoff: 865.2,
    backoffRate: 5321.76,
    authenticationTimeout: 330.08,
    reauthenticationThreshold: 7606.8,
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 1160,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    onBackpressure: "drop",
    description: "resource wisely until dock urgently",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: false,
    pqRatePerSec: 4682.17,
    pqMode: "always",
    pqMaxBufferSize: 5267.31,
    pqMaxBackpressureSec: 1309.07,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNetflow

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesNetflow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "netflow-output",
    type: "netflow",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    hosts: [
      {
        host: "localhost",
        port: 2055,
      },
    ],
    dnsResolvePeriodSec: 5119.17,
    enableIpSpoofing: false,
    description: "optimistically unique up manner travel oil fuss",
    maxRecordSize: 8377.37,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "netflow-output",
    type: "netflow",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    hosts: [
      {
        host: "localhost",
        port: 2055,
      },
    ],
    dnsResolvePeriodSec: 5119.17,
    enableIpSpoofing: false,
    description: "optimistically unique up manner travel oil fuss",
    maxRecordSize: 8377.37,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNewrelic

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesNewrelic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "newrelic-output",
    type: "newrelic",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    region: "EU",
    logType: "<value>",
    messageField: "<value>",
    metadata: [
      {
        name: "hostname",
        value: "<value>",
      },
    ],
    concurrency: 7475.46,
    maxPayloadSizeKB: 3612.22,
    maxPayloadEvents: 9463.98,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 7133.74,
    flushPeriodSec: 8587.01,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "secret",
    totalMemoryLimitKB: 9162.97,
    description: "faithfully woot solution rosin aha unless self-confidence between given",
    customUrl: "https://thin-custody.com",
    pqStrictOrdering: false,
    pqRatePerSec: 9772.34,
    pqMode: "error",
    pqMaxBufferSize: 6877.69,
    pqMaxBackpressureSec: 3930.63,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "newrelic-output",
    type: "newrelic",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    region: "EU",
    logType: "<value>",
    messageField: "<value>",
    metadata: [
      {
        name: "hostname",
        value: "<value>",
      },
    ],
    concurrency: 7475.46,
    maxPayloadSizeKB: 3612.22,
    maxPayloadEvents: 9463.98,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 7133.74,
    flushPeriodSec: 8587.01,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "secret",
    totalMemoryLimitKB: 9162.97,
    description: "faithfully woot solution rosin aha unless self-confidence between given",
    customUrl: "https://thin-custody.com",
    pqStrictOrdering: false,
    pqRatePerSec: 9772.34,
    pqMode: "error",
    pqMaxBufferSize: 6877.69,
    pqMaxBackpressureSec: 3930.63,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNewrelicEvents

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesNewrelicEvents" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "newrelic-events-output",
    type: "newrelic_events",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    region: "US",
    accountId: "123456",
    eventType: "CriblEvent",
    concurrency: 5149.79,
    maxPayloadSizeKB: 8190.2,
    maxPayloadEvents: 3987.39,
    compress: false,
    rejectUnauthorized: true,
    timeoutSec: 4252.66,
    flushPeriodSec: 8470.59,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "drop",
    authType: "manual",
    description: "phooey ornate rightfully premier other however past",
    customUrl: "https://agitated-tectonics.com/",
    pqStrictOrdering: false,
    pqRatePerSec: 4712.6,
    pqMode: "error",
    pqMaxBufferSize: 1950.05,
    pqMaxBackpressureSec: 5200.37,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "newrelic-events-output",
    type: "newrelic_events",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    region: "US",
    accountId: "123456",
    eventType: "CriblEvent",
    concurrency: 5149.79,
    maxPayloadSizeKB: 8190.2,
    maxPayloadEvents: 3987.39,
    compress: false,
    rejectUnauthorized: true,
    timeoutSec: 4252.66,
    flushPeriodSec: 8470.59,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "drop",
    authType: "manual",
    description: "phooey ornate rightfully premier other however past",
    customUrl: "https://agitated-tectonics.com/",
    pqStrictOrdering: false,
    pqRatePerSec: 4712.6,
    pqMode: "error",
    pqMaxBufferSize: 1950.05,
    pqMaxBackpressureSec: 5200.37,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesOpenTelemetry

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesOpenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "opentelemetry-output",
    type: "open_telemetry",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    protocol: "http",
    endpoint: "http://localhost:4317",
    otlpVersion: "0.10.0",
    compress: "gzip",
    httpCompress: "gzip",
    authType: "token",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    concurrency: 8281.34,
    maxPayloadSizeKB: 1572.27,
    timeoutSec: 1013.99,
    flushPeriodSec: 6576.22,
    failedRequestLoggingMode: "none",
    connectionTimeout: 8497.22,
    keepAliveTime: 94.74,
    keepAlive: true,
    onBackpressure: "block",
    description: "weakly chromakey oof worth quaver um vacation devise",
    username: "Jackson36",
    password: "bWhdm0hIjFESpzi",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://trained-programme.biz",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 3810.64,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    rejectUnauthorized: false,
    useRoundRobinDns: false,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1",
    },
    pqStrictOrdering: false,
    pqRatePerSec: 5438.81,
    pqMode: "always",
    pqMaxBufferSize: 8910.76,
    pqMaxBackpressureSec: 6263.83,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "opentelemetry-output",
    type: "open_telemetry",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    protocol: "http",
    endpoint: "http://localhost:4317",
    otlpVersion: "0.10.0",
    compress: "gzip",
    httpCompress: "gzip",
    authType: "token",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    concurrency: 8281.34,
    maxPayloadSizeKB: 1572.27,
    timeoutSec: 1013.99,
    flushPeriodSec: 6576.22,
    failedRequestLoggingMode: "none",
    connectionTimeout: 8497.22,
    keepAliveTime: 94.74,
    keepAlive: true,
    onBackpressure: "block",
    description: "weakly chromakey oof worth quaver um vacation devise",
    username: "Jackson36",
    password: "bWhdm0hIjFESpzi",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://trained-programme.biz",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 3810.64,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    rejectUnauthorized: false,
    useRoundRobinDns: false,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1",
    },
    pqStrictOrdering: false,
    pqRatePerSec: 5438.81,
    pqMode: "always",
    pqMaxBufferSize: 8910.76,
    pqMaxBackpressureSec: 6263.83,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesPrometheus

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesPrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "prometheus-output",
    type: "prometheus",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:9091/api/v1/write",
    metricRenameExpr: "<value>",
    sendMetadata: false,
    concurrency: 3056.07,
    maxPayloadSizeKB: 3059.09,
    maxPayloadEvents: 7148.07,
    rejectUnauthorized: false,
    timeoutSec: 944.73,
    flushPeriodSec: 9678.84,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "drop",
    authType: "oauth",
    description: "youthful whoever carefully",
    metricsFlushPeriodSec: 3956.03,
    pqStrictOrdering: true,
    pqRatePerSec: 4642.06,
    pqMode: "always",
    pqMaxBufferSize: 5129.91,
    pqMaxBackpressureSec: 8747.12,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    username: "Thora26",
    password: "yA5jwSz3LuqMrNK",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://polished-cross-contamination.biz",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 7766.4,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "prometheus-output",
    type: "prometheus",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:9091/api/v1/write",
    metricRenameExpr: "<value>",
    sendMetadata: false,
    concurrency: 3056.07,
    maxPayloadSizeKB: 3059.09,
    maxPayloadEvents: 7148.07,
    rejectUnauthorized: false,
    timeoutSec: 944.73,
    flushPeriodSec: 9678.84,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "drop",
    authType: "oauth",
    description: "youthful whoever carefully",
    metricsFlushPeriodSec: 3956.03,
    pqStrictOrdering: true,
    pqRatePerSec: 4642.06,
    pqMode: "always",
    pqMaxBufferSize: 5129.91,
    pqMaxBackpressureSec: 8747.12,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    username: "Thora26",
    password: "yA5jwSz3LuqMrNK",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://polished-cross-contamination.biz",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 7766.4,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesRing

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesRing" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "ring-output",
    type: "ring",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    format: "json",
    partitionExpr: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
    onBackpressure: "drop",
    description: "powerfully stylish uh-huh amongst",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "ring-output",
    type: "ring",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    format: "json",
    partitionExpr: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
    onBackpressure: "drop",
    description: "powerfully stylish uh-huh amongst",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesRouter

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesRouter" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "router-output",
    type: "router",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    rules: [
      {
        filter: "true",
        output: "my-output",
        description: "loyally because intensely alongside for atop yuck",
        final: false,
      },
    ],
    description: "from indeed hmph grok",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "router-output",
    type: "router",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    rules: [
      {
        filter: "true",
        output: "my-output",
        description: "loyally because intensely alongside for atop yuck",
        final: false,
      },
    ],
    description: "from indeed hmph grok",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesS3

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "s3-output",
    type: "s3",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "<value>",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 4207.47,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    objectACL: "private",
    storageClass: "STANDARD_IA",
    serverSideEncryption: "AES256",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    partitionExpr: "<value>",
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 3275.43,
    maxOpenFiles: 9278.48,
    headerLine: "<value>",
    writeHighWaterMark: 2297.39,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 6729.04,
    maxFileIdleTimeSec: 8481.62,
    maxConcurrentFileParts: 9149.45,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 1687.01,
    description: "at editor aw bran pull statement colonialism unimpressively serene persecute",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_compression",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_4",
    parquetDataPageVersion: "DATA_PAGE_V1",
    parquetRowGroupLength: 6759.28,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: false,
    emptyDirCleanupSec: 3582.77,
    directoryBatchSize: 8824.09,
    deadletterPath: "<value>",
    maxRetryNum: 5477.26,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "s3-output",
    type: "s3",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "<value>",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 4207.47,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    objectACL: "private",
    storageClass: "STANDARD_IA",
    serverSideEncryption: "AES256",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    partitionExpr: "<value>",
    format: "json",
    baseFileName: "<value>",
    fileNameSuffix: "<value>",
    maxFileSizeMB: 3275.43,
    maxOpenFiles: 9278.48,
    headerLine: "<value>",
    writeHighWaterMark: 2297.39,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 6729.04,
    maxFileIdleTimeSec: 8481.62,
    maxConcurrentFileParts: 9149.45,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 1687.01,
    description: "at editor aw bran pull statement colonialism unimpressively serene persecute",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_compression",
    automaticSchema: true,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_4",
    parquetDataPageVersion: "DATA_PAGE_V1",
    parquetRowGroupLength: 6759.28,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: false,
    enablePageChecksum: false,
    emptyDirCleanupSec: 3582.77,
    directoryBatchSize: 8824.09,
    deadletterPath: "<value>",
    maxRetryNum: 5477.26,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSecurityLake

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSecurityLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "security-lake-output",
    type: "security_lake",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "<value>",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: false,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
    assumeRoleExternalId: "<id>",
    durationSeconds: 9688.35,
    stagePath: "/tmp/staging",
    addIdToStagePath: false,
    objectACL: "public-read",
    storageClass: "INTELLIGENT_TIERING",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: false,
    baseFileName: "<value>",
    maxFileSizeMB: 2675.82,
    maxOpenFiles: 6509.66,
    headerLine: "<value>",
    writeHighWaterMark: 6117.09,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "drop",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 1399.87,
    maxFileIdleTimeSec: 4894.19,
    maxConcurrentFileParts: 1376.22,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 9970.42,
    accountId: "123456789012",
    customSource: "my-custom-source",
    automaticSchema: true,
    parquetVersion: "PARQUET_1_0",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 5074.65,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: false,
    enableWritePageIndex: false,
    enablePageChecksum: true,
    description: "claw fondly or",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    emptyDirCleanupSec: 3961.21,
    directoryBatchSize: 8316.99,
    parquetSchema: "<value>",
    deadletterPath: "<value>",
    maxRetryNum: 8961.65,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "security-lake-output",
    type: "security_lake",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "<value>",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: false,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
    assumeRoleExternalId: "<id>",
    durationSeconds: 9688.35,
    stagePath: "/tmp/staging",
    addIdToStagePath: false,
    objectACL: "public-read",
    storageClass: "INTELLIGENT_TIERING",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: false,
    baseFileName: "<value>",
    maxFileSizeMB: 2675.82,
    maxOpenFiles: 6509.66,
    headerLine: "<value>",
    writeHighWaterMark: 6117.09,
    onBackpressure: "drop",
    deadletterEnabled: false,
    onDiskFullBackpressure: "drop",
    forceCloseOnShutdown: true,
    retrySettings: {
      enabled: true,
      initialBackoffMs: 8843.66,
      backoffMultiplier: 4381.89,
      maxBackoffMs: 7295.43,
      jitterPercent: 1510.88,
    },
    maxFileOpenTimeSec: 1399.87,
    maxFileIdleTimeSec: 4894.19,
    maxConcurrentFileParts: 1376.22,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 9970.42,
    accountId: "123456789012",
    customSource: "my-custom-source",
    automaticSchema: true,
    parquetVersion: "PARQUET_1_0",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 5074.65,
    parquetPageSize: "<value>",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    enableStatistics: false,
    enableWritePageIndex: false,
    enablePageChecksum: true,
    description: "claw fondly or",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    emptyDirCleanupSec: 3961.21,
    directoryBatchSize: 8316.99,
    parquetSchema: "<value>",
    deadletterPath: "<value>",
    maxRetryNum: 8961.65,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSentinel

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSentinel" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "sentinel-output",
    type: "sentinel",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    keepAlive: false,
    concurrency: 7747.86,
    maxPayloadSizeKB: 6253.77,
    maxPayloadEvents: 1490.1,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 6701.16,
    flushPeriodSec: 1272.94,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "oauth",
    loginUrl: "https://login.microsoftonline.com",
    secret: "client-secret",
    client_id: "client-id",
    scope: "<value>",
    endpointURLConfiguration: "url",
    totalMemoryLimitKB: 6451.7,
    description: "save fellow downshift easily outrank lift across decriminalize wherever",
    format: "json_array",
    customSourceExpression: "<value>",
    customDropWhenNull: true,
    customEventDelimiter: "<value>",
    customContentType: "<value>",
    customPayloadExpression: "<value>",
    advancedContentType: "<value>",
    formatEventCode: "<value>",
    formatPayloadCode: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 2021.45,
    pqMode: "always",
    pqMaxBufferSize: 9675.87,
    pqMaxBackpressureSec: 3549.7,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    url: "https://your-workspace.ingest.monitor.azure.com",
    dcrID: "<id>",
    dceEndpoint: "<value>",
    streamName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "sentinel-output",
    type: "sentinel",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    keepAlive: false,
    concurrency: 7747.86,
    maxPayloadSizeKB: 6253.77,
    maxPayloadEvents: 1490.1,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 6701.16,
    flushPeriodSec: 1272.94,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "oauth",
    loginUrl: "https://login.microsoftonline.com",
    secret: "client-secret",
    client_id: "client-id",
    scope: "<value>",
    endpointURLConfiguration: "url",
    totalMemoryLimitKB: 6451.7,
    description: "save fellow downshift easily outrank lift across decriminalize wherever",
    format: "json_array",
    customSourceExpression: "<value>",
    customDropWhenNull: true,
    customEventDelimiter: "<value>",
    customContentType: "<value>",
    customPayloadExpression: "<value>",
    advancedContentType: "<value>",
    formatEventCode: "<value>",
    formatPayloadCode: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 2021.45,
    pqMode: "always",
    pqMaxBufferSize: 9675.87,
    pqMaxBackpressureSec: 3549.7,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    url: "https://your-workspace.ingest.monitor.azure.com",
    dcrID: "<id>",
    dceEndpoint: "<value>",
    streamName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSentinelOneAiSiem

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSentinelOneAiSiem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "sentinel-one-ai-siem-output",
    type: "sentinel_one_ai_siem",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    region: "US",
    endpoint: "/services/collector/event",
    concurrency: 8685.75,
    maxPayloadSizeKB: 125.92,
    maxPayloadEvents: 7989.09,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 540.15,
    flushPeriodSec: 7151.5,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    description: "ha concerning atop who qua focalise",
    token: "<value>",
    textSecret: "<value>",
    baseUrl: "https://dramatic-vibration.info/",
    hostExpression: "<value>",
    sourceExpression: "<value>",
    sourceTypeExpression: "<value>",
    dataSourceCategoryExpression: "<value>",
    dataSourceNameExpression: "<value>",
    dataSourceVendorExpression: "<value>",
    eventTypeExpression: "<value>",
    host: "handy-angle.com",
    source: "<value>",
    sourceType: "<value>",
    dataSourceCategory: "<value>",
    dataSourceName: "<value>",
    dataSourceVendor: "<value>",
    eventType: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 9121.16,
    pqMode: "error",
    pqMaxBufferSize: 9849.28,
    pqMaxBackpressureSec: 2795.61,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "sentinel-one-ai-siem-output",
    type: "sentinel_one_ai_siem",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    region: "US",
    endpoint: "/services/collector/event",
    concurrency: 8685.75,
    maxPayloadSizeKB: 125.92,
    maxPayloadEvents: 7989.09,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 540.15,
    flushPeriodSec: 7151.5,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    description: "ha concerning atop who qua focalise",
    token: "<value>",
    textSecret: "<value>",
    baseUrl: "https://dramatic-vibration.info/",
    hostExpression: "<value>",
    sourceExpression: "<value>",
    sourceTypeExpression: "<value>",
    dataSourceCategoryExpression: "<value>",
    dataSourceNameExpression: "<value>",
    dataSourceVendorExpression: "<value>",
    eventTypeExpression: "<value>",
    host: "handy-angle.com",
    source: "<value>",
    sourceType: "<value>",
    dataSourceCategory: "<value>",
    dataSourceName: "<value>",
    dataSourceVendor: "<value>",
    eventType: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 9121.16,
    pqMode: "error",
    pqMaxBufferSize: 9849.28,
    pqMaxBackpressureSec: 2795.61,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesServiceNow

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesServiceNow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "servicenow-output",
    type: "service_now",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    endpoint: "ingest.lightstep.com:443",
    tokenSecret: "your-token-secret",
    authTokenName: "<value>",
    otlpVersion: "1.3.1",
    maxPayloadSizeKB: 9291.13,
    protocol: "http",
    compress: "none",
    httpCompress: "gzip",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    concurrency: 9031.29,
    timeoutSec: 6867.33,
    flushPeriodSec: 6575.73,
    failedRequestLoggingMode: "payloadAndHeaders",
    connectionTimeout: 1947.27,
    keepAliveTime: 3290.72,
    keepAlive: true,
    onBackpressure: "block",
    description: "between scorpion king nab limply avaricious fond",
    rejectUnauthorized: false,
    useRoundRobinDns: false,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1",
    },
    pqStrictOrdering: false,
    pqRatePerSec: 5115.34,
    pqMode: "always",
    pqMaxBufferSize: 7242.05,
    pqMaxBackpressureSec: 3266.65,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "servicenow-output",
    type: "service_now",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    endpoint: "ingest.lightstep.com:443",
    tokenSecret: "your-token-secret",
    authTokenName: "<value>",
    otlpVersion: "1.3.1",
    maxPayloadSizeKB: 9291.13,
    protocol: "http",
    compress: "none",
    httpCompress: "gzip",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    concurrency: 9031.29,
    timeoutSec: 6867.33,
    flushPeriodSec: 6575.73,
    failedRequestLoggingMode: "payloadAndHeaders",
    connectionTimeout: 1947.27,
    keepAliveTime: 3290.72,
    keepAlive: true,
    onBackpressure: "block",
    description: "between scorpion king nab limply avaricious fond",
    rejectUnauthorized: false,
    useRoundRobinDns: false,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1",
    },
    pqStrictOrdering: false,
    pqRatePerSec: 5115.34,
    pqMode: "always",
    pqMaxBufferSize: 7242.05,
    pqMaxBackpressureSec: 3266.65,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSignalfx

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSignalfx" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "signalfx-output",
    type: "signalfx",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    authType: "manual",
    realm: "us0",
    concurrency: 8399.68,
    maxPayloadSizeKB: 1537.87,
    maxPayloadEvents: 4487.46,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 7823.02,
    flushPeriodSec: 3849.29,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    description: "scale patiently via blah nervous given persecute kissingly supposing alongside",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 4100.57,
    pqMode: "backpressure",
    pqMaxBufferSize: 5285.84,
    pqMaxBackpressureSec: 3572.72,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "signalfx-output",
    type: "signalfx",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    authType: "manual",
    realm: "us0",
    concurrency: 8399.68,
    maxPayloadSizeKB: 1537.87,
    maxPayloadEvents: 4487.46,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 7823.02,
    flushPeriodSec: 3849.29,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    description: "scale patiently via blah nervous given persecute kissingly supposing alongside",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 4100.57,
    pqMode: "backpressure",
    pqMaxBufferSize: 5285.84,
    pqMaxBackpressureSec: 3572.72,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSnmp

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSnmp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "snmp-output",
    type: "snmp",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    hosts: [
      {
        host: "192.168.1.1",
        port: 161,
      },
    ],
    dnsResolvePeriodSec: 344.13,
    description: "seriously indeed unfurl pish redraw hawk aw",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "snmp-output",
    type: "snmp",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    hosts: [
      {
        host: "192.168.1.1",
        port: 161,
      },
    ],
    dnsResolvePeriodSec: 344.13,
    description: "seriously indeed unfurl pish redraw hawk aw",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSns

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSns" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "sns-output",
    type: "sns",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
    messageGroupId: "my-message-group",
    maxRetries: 8354.29,
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 2801.15,
    onBackpressure: "block",
    description: "psst following phooey vivid sequester scheme abaft likewise service",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 1115.48,
    pqMode: "always",
    pqMaxBufferSize: 4614.69,
    pqMaxBackpressureSec: 8154.55,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "sns-output",
    type: "sns",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
    messageGroupId: "my-message-group",
    maxRetries: 8354.29,
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 2801.15,
    onBackpressure: "block",
    description: "psst following phooey vivid sequester scheme abaft likewise service",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 1115.48,
    pqMode: "always",
    pqMaxBufferSize: 4614.69,
    pqMaxBackpressureSec: 8154.55,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunk

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSplunk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "splunk-output",
    type: "splunk",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    host: "localhost",
    port: 9997,
    nestedFields: "none",
    throttleRatePerSec: "<value>",
    connectionTimeout: 1113.22,
    writeTimeout: 191.97,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    enableMultiMetrics: false,
    enableACK: true,
    logFailedRequests: true,
    maxS2Sversion: "v3",
    onBackpressure: "drop",
    authType: "secret",
    description: "ouch favorite patroller neatly tenement yahoo oh unless charter",
    maxFailedHealthChecks: 3081.05,
    compress: "disabled",
    pqStrictOrdering: false,
    pqRatePerSec: 2872.5,
    pqMode: "backpressure",
    pqMaxBufferSize: 4362.89,
    pqMaxBackpressureSec: 5381.14,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "<value>",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "splunk-output",
    type: "splunk",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    host: "localhost",
    port: 9997,
    nestedFields: "none",
    throttleRatePerSec: "<value>",
    connectionTimeout: 1113.22,
    writeTimeout: 191.97,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    enableMultiMetrics: false,
    enableACK: true,
    logFailedRequests: true,
    maxS2Sversion: "v3",
    onBackpressure: "drop",
    authType: "secret",
    description: "ouch favorite patroller neatly tenement yahoo oh unless charter",
    maxFailedHealthChecks: 3081.05,
    compress: "disabled",
    pqStrictOrdering: false,
    pqRatePerSec: 2872.5,
    pqMode: "backpressure",
    pqMaxBufferSize: 4362.89,
    pqMaxBackpressureSec: 5381.14,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "<value>",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunkHec

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSplunkHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "splunk-hec-output",
    type: "splunk_hec",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    loadBalanced: true,
    nextQueue: "<value>",
    tcpRouting: "<value>",
    tls: {
      disabled: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.1",
    },
    concurrency: 8828.22,
    maxPayloadSizeKB: 187.91,
    maxPayloadEvents: 2994.99,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 8657.92,
    flushPeriodSec: 598.7,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    enableMultiMetrics: true,
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "queue",
    description: "though whoa lasting granular",
    url: "https://inexperienced-hamburger.org",
    useRoundRobinDns: true,
    excludeSelf: true,
    urls: [
      {
        url: "https://pure-rim.info/",
        weight: 2627.65,
      },
    ],
    dnsResolvePeriodSec: 2868.7,
    loadBalanceStatsPeriodSec: 9466.46,
    token: "<value>",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 1510.16,
    pqMode: "always",
    pqMaxBufferSize: 210.45,
    pqMaxBackpressureSec: 1881.8,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "splunk-hec-output",
    type: "splunk_hec",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    loadBalanced: true,
    nextQueue: "<value>",
    tcpRouting: "<value>",
    tls: {
      disabled: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.1",
    },
    concurrency: 8828.22,
    maxPayloadSizeKB: 187.91,
    maxPayloadEvents: 2994.99,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 8657.92,
    flushPeriodSec: 598.7,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payload",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    enableMultiMetrics: true,
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "queue",
    description: "though whoa lasting granular",
    url: "https://inexperienced-hamburger.org",
    useRoundRobinDns: true,
    excludeSelf: true,
    urls: [
      {
        url: "https://pure-rim.info/",
        weight: 2627.65,
      },
    ],
    dnsResolvePeriodSec: 2868.7,
    loadBalanceStatsPeriodSec: 9466.46,
    token: "<value>",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 1510.16,
    pqMode: "always",
    pqMaxBufferSize: 210.45,
    pqMaxBackpressureSec: 1881.8,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunkLb

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSplunkLb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "splunk-lb-output",
    type: "splunk_lb",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    dnsResolvePeriodSec: 8883.23,
    loadBalanceStatsPeriodSec: 803.24,
    maxConcurrentSenders: 2177.23,
    nestedFields: "json",
    throttleRatePerSec: "<value>",
    connectionTimeout: 6003.32,
    writeTimeout: 4455.31,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    enableMultiMetrics: true,
    enableACK: true,
    logFailedRequests: false,
    maxS2Sversion: "v3",
    onBackpressure: "block",
    indexerDiscovery: false,
    senderUnhealthyTimeAllowance: 1542.82,
    authType: "secret",
    description: "upward pile since bowed gazebo meanwhile victoriously founder because",
    maxFailedHealthChecks: 5051.06,
    compress: "always",
    indexerDiscoveryConfigs: {
      site: "<value>",
      masterUri: "https://round-hubris.org/",
      refreshIntervalSec: 2684.26,
      rejectUnauthorized: false,
      authTokens: [
        {
          authType: "secret",
          authToken: "<value>",
          textSecret: "<value>",
        },
      ],
      authType: "manual",
      authToken: "<value>",
      textSecret: "<value>",
    },
    excludeSelf: true,
    hosts: [
      {
        host: "localhost",
        port: 9997,
        tls: "off",
        servername: "<value>",
        weight: 1026.01,
      },
    ],
    pqStrictOrdering: true,
    pqRatePerSec: 6241.71,
    pqMode: "always",
    pqMaxBufferSize: 9335.28,
    pqMaxBackpressureSec: 391.14,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "<value>",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "splunk-lb-output",
    type: "splunk_lb",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    dnsResolvePeriodSec: 8883.23,
    loadBalanceStatsPeriodSec: 803.24,
    maxConcurrentSenders: 2177.23,
    nestedFields: "json",
    throttleRatePerSec: "<value>",
    connectionTimeout: 6003.32,
    writeTimeout: 4455.31,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    enableMultiMetrics: true,
    enableACK: true,
    logFailedRequests: false,
    maxS2Sversion: "v3",
    onBackpressure: "block",
    indexerDiscovery: false,
    senderUnhealthyTimeAllowance: 1542.82,
    authType: "secret",
    description: "upward pile since bowed gazebo meanwhile victoriously founder because",
    maxFailedHealthChecks: 5051.06,
    compress: "always",
    indexerDiscoveryConfigs: {
      site: "<value>",
      masterUri: "https://round-hubris.org/",
      refreshIntervalSec: 2684.26,
      rejectUnauthorized: false,
      authTokens: [
        {
          authType: "secret",
          authToken: "<value>",
          textSecret: "<value>",
        },
      ],
      authType: "manual",
      authToken: "<value>",
      textSecret: "<value>",
    },
    excludeSelf: true,
    hosts: [
      {
        host: "localhost",
        port: 9997,
        tls: "off",
        servername: "<value>",
        weight: 1026.01,
      },
    ],
    pqStrictOrdering: true,
    pqRatePerSec: 6241.71,
    pqMode: "always",
    pqMaxBufferSize: 9335.28,
    pqMaxBackpressureSec: 391.14,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "<value>",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSqs

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSqs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "sqs-output",
    type: "sqs",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    queueName: "my-queue",
    queueType: "standard",
    awsAccountId: "<id>",
    messageGroupId: "<id>",
    createQueue: false,
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 2870.75,
    maxQueueSize: 7021.66,
    maxRecordSizeKB: 713.5,
    flushPeriodSec: 6612.7,
    maxInProgress: 8169.93,
    onBackpressure: "queue",
    description: "psst to bah",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 6715.98,
    pqMode: "error",
    pqMaxBufferSize: 8503.21,
    pqMaxBackpressureSec: 7474.02,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "sqs-output",
    type: "sqs",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    queueName: "my-queue",
    queueType: "standard",
    awsAccountId: "<id>",
    messageGroupId: "<id>",
    createQueue: false,
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 2870.75,
    maxQueueSize: 7021.66,
    maxRecordSizeKB: 713.5,
    flushPeriodSec: 6612.7,
    maxInProgress: 8169.93,
    onBackpressure: "queue",
    description: "psst to bah",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 6715.98,
    pqMode: "error",
    pqMaxBufferSize: 8503.21,
    pqMaxBackpressureSec: 7474.02,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesStatsd

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesStatsd" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "statsd-output",
    type: "statsd",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    protocol: "udp",
    host: "localhost",
    port: 8125,
    mtu: 7717.77,
    flushPeriodSec: 2156.55,
    dnsResolvePeriodSec: 741.64,
    description: "troubled decisive unconscious mid utterly amongst octave flood",
    throttleRatePerSec: "<value>",
    connectionTimeout: 9877.1,
    writeTimeout: 212.52,
    onBackpressure: "block",
    pqStrictOrdering: false,
    pqRatePerSec: 9310.25,
    pqMode: "always",
    pqMaxBufferSize: 3530.33,
    pqMaxBackpressureSec: 5680.81,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "statsd-output",
    type: "statsd",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    protocol: "udp",
    host: "localhost",
    port: 8125,
    mtu: 7717.77,
    flushPeriodSec: 2156.55,
    dnsResolvePeriodSec: 741.64,
    description: "troubled decisive unconscious mid utterly amongst octave flood",
    throttleRatePerSec: "<value>",
    connectionTimeout: 9877.1,
    writeTimeout: 212.52,
    onBackpressure: "block",
    pqStrictOrdering: false,
    pqRatePerSec: 9310.25,
    pqMode: "always",
    pqMaxBufferSize: 3530.33,
    pqMaxBackpressureSec: 5680.81,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesStatsdExt

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesStatsdExt" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "statsd-ext-output",
    type: "statsd_ext",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    protocol: "udp",
    host: "localhost",
    port: 8125,
    mtu: 3088.77,
    flushPeriodSec: 694.76,
    dnsResolvePeriodSec: 9500.25,
    description: "adjudge boo phew mid",
    throttleRatePerSec: "<value>",
    connectionTimeout: 3912.25,
    writeTimeout: 3153.49,
    onBackpressure: "queue",
    pqStrictOrdering: true,
    pqRatePerSec: 9944.97,
    pqMode: "always",
    pqMaxBufferSize: 4156.37,
    pqMaxBackpressureSec: 6469.05,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "statsd-ext-output",
    type: "statsd_ext",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    protocol: "udp",
    host: "localhost",
    port: 8125,
    mtu: 3088.77,
    flushPeriodSec: 694.76,
    dnsResolvePeriodSec: 9500.25,
    description: "adjudge boo phew mid",
    throttleRatePerSec: "<value>",
    connectionTimeout: 3912.25,
    writeTimeout: 3153.49,
    onBackpressure: "queue",
    pqStrictOrdering: true,
    pqRatePerSec: 9944.97,
    pqMode: "always",
    pqMaxBufferSize: 4156.37,
    pqMaxBackpressureSec: 6469.05,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSumoLogic

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSumoLogic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "sumo-logic-output",
    type: "sumo_logic",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    url: "https://endpoint1.collection.us2.sumologic.com",
    customSource: "<value>",
    customCategory: "<value>",
    format: "raw",
    concurrency: 5767.86,
    maxPayloadSizeKB: 8704.15,
    maxPayloadEvents: 9937.84,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 6938.99,
    flushPeriodSec: 3110.88,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    totalMemoryLimitKB: 803.05,
    description: "inquisitively ew despite remorseful suddenly incidentally paltry",
    pqStrictOrdering: true,
    pqRatePerSec: 5739.29,
    pqMode: "backpressure",
    pqMaxBufferSize: 1847.69,
    pqMaxBackpressureSec: 4824.97,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "sumo-logic-output",
    type: "sumo_logic",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    url: "https://endpoint1.collection.us2.sumologic.com",
    customSource: "<value>",
    customCategory: "<value>",
    format: "raw",
    concurrency: 5767.86,
    maxPayloadSizeKB: 8704.15,
    maxPayloadEvents: 9937.84,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 6938.99,
    flushPeriodSec: 3110.88,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    totalMemoryLimitKB: 803.05,
    description: "inquisitively ew despite remorseful suddenly incidentally paltry",
    pqStrictOrdering: true,
    pqRatePerSec: 5739.29,
    pqMode: "backpressure",
    pqMaxBufferSize: 1847.69,
    pqMaxBackpressureSec: 4824.97,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSyslog

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesSyslog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "syslog-output",
    type: "syslog",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    protocol: "tcp",
    facility: 15,
    severity: 7,
    appName: "<value>",
    messageFormat: "rfc3164",
    timestampFormat: "iso8601",
    throttleRatePerSec: "<value>",
    octetCountFraming: false,
    logFailedRequests: true,
    description: "unique hence rationale",
    loadBalanced: true,
    host: "localhost",
    port: 514,
    excludeSelf: true,
    hosts: [
      {
        host: "proper-prohibition.com",
        port: 7840.9,
        tls: "inherit",
        servername: "<value>",
        weight: 3441.24,
      },
    ],
    dnsResolvePeriodSec: 2109.55,
    loadBalanceStatsPeriodSec: 1344.55,
    maxConcurrentSenders: 8655.62,
    connectionTimeout: 1852.7,
    writeTimeout: 3684.02,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    onBackpressure: "block",
    maxRecordSize: 2177.9,
    udpDnsResolvePeriodSec: 3317.49,
    enableIpSpoofing: true,
    pqStrictOrdering: false,
    pqRatePerSec: 7594.37,
    pqMode: "backpressure",
    pqMaxBufferSize: 9174.33,
    pqMaxBackpressureSec: 4451.17,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "syslog-output",
    type: "syslog",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    protocol: "tcp",
    facility: 15,
    severity: 7,
    appName: "<value>",
    messageFormat: "rfc3164",
    timestampFormat: "iso8601",
    throttleRatePerSec: "<value>",
    octetCountFraming: false,
    logFailedRequests: true,
    description: "unique hence rationale",
    loadBalanced: true,
    host: "localhost",
    port: 514,
    excludeSelf: true,
    hosts: [
      {
        host: "proper-prohibition.com",
        port: 7840.9,
        tls: "inherit",
        servername: "<value>",
        weight: 3441.24,
      },
    ],
    dnsResolvePeriodSec: 2109.55,
    loadBalanceStatsPeriodSec: 1344.55,
    maxConcurrentSenders: 8655.62,
    connectionTimeout: 1852.7,
    writeTimeout: 3684.02,
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    onBackpressure: "block",
    maxRecordSize: 2177.9,
    udpDnsResolvePeriodSec: 3317.49,
    enableIpSpoofing: true,
    pqStrictOrdering: false,
    pqRatePerSec: 7594.37,
    pqMode: "backpressure",
    pqMaxBufferSize: 9174.33,
    pqMaxBackpressureSec: 4451.17,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesTcpjson

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesTcpjson" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "tcpjson-output",
    type: "tcpjson",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    loadBalanced: false,
    compression: "gzip",
    logFailedRequests: true,
    throttleRatePerSec: "<value>",
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    connectionTimeout: 861.22,
    writeTimeout: 588.22,
    tokenTTLMinutes: 3391.17,
    sendHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "suckle parsnip even engage lest",
    host: "localhost",
    port: 10090,
    excludeSelf: true,
    hosts: [
      {
        host: "proper-prohibition.com",
        port: 7840.9,
        tls: "inherit",
        servername: "<value>",
        weight: 3441.24,
      },
    ],
    dnsResolvePeriodSec: 9682.2,
    loadBalanceStatsPeriodSec: 6468.68,
    maxConcurrentSenders: 2841.6,
    pqStrictOrdering: true,
    pqRatePerSec: 5558.99,
    pqMode: "backpressure",
    pqMaxBufferSize: 7385.62,
    pqMaxBackpressureSec: 5308.79,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    authToken: "<value>",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "tcpjson-output",
    type: "tcpjson",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    loadBalanced: false,
    compression: "gzip",
    logFailedRequests: true,
    throttleRatePerSec: "<value>",
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    connectionTimeout: 861.22,
    writeTimeout: 588.22,
    tokenTTLMinutes: 3391.17,
    sendHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "suckle parsnip even engage lest",
    host: "localhost",
    port: 10090,
    excludeSelf: true,
    hosts: [
      {
        host: "proper-prohibition.com",
        port: 7840.9,
        tls: "inherit",
        servername: "<value>",
        weight: 3441.24,
      },
    ],
    dnsResolvePeriodSec: 9682.2,
    loadBalanceStatsPeriodSec: 6468.68,
    maxConcurrentSenders: 2841.6,
    pqStrictOrdering: true,
    pqRatePerSec: 5558.99,
    pqMode: "backpressure",
    pqMaxBufferSize: 7385.62,
    pqMaxBackpressureSec: 5308.79,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    authToken: "<value>",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWavefront

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesWavefront" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "wavefront-output",
    type: "wavefront",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    authType: "manual",
    domain: "longboard",
    concurrency: 9978.35,
    maxPayloadSizeKB: 1122.88,
    maxPayloadEvents: 7382.31,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 6906.21,
    flushPeriodSec: 1407.58,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "whoever enroll gasp over following worriedly adrenalin throughout inasmuch almighty",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 5075.58,
    pqMode: "backpressure",
    pqMaxBufferSize: 8994.05,
    pqMaxBackpressureSec: 6382.5,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "wavefront-output",
    type: "wavefront",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    authType: "manual",
    domain: "longboard",
    concurrency: 9978.35,
    maxPayloadSizeKB: 1122.88,
    maxPayloadEvents: 7382.31,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 6906.21,
    flushPeriodSec: 1407.58,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "whoever enroll gasp over following worriedly adrenalin throughout inasmuch almighty",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 5075.58,
    pqMode: "backpressure",
    pqMaxBufferSize: 8994.05,
    pqMaxBackpressureSec: 6382.5,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWebhook

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesWebhook" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "webhook-output",
    type: "webhook",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    method: "PUT",
    format: "custom",
    keepAlive: true,
    concurrency: 8309.72,
    maxPayloadSizeKB: 1748.24,
    maxPayloadEvents: 7149.98,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 3330.52,
    flushPeriodSec: 373.84,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "credentialsSecret",
    tls: {
      disabled: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.1",
    },
    totalMemoryLimitKB: 5738.55,
    loadBalanced: false,
    description: "lender godparent seldom beyond",
    customSourceExpression: "<value>",
    customDropWhenNull: false,
    customEventDelimiter: "<value>",
    customContentType: "<value>",
    customPayloadExpression: "<value>",
    advancedContentType: "<value>",
    formatEventCode: "<value>",
    formatPayloadCode: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 1091.39,
    pqMode: "error",
    pqMaxBufferSize: 327.17,
    pqMaxBackpressureSec: 4429.83,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    username: "Pamela.Feeney-Douglas",
    password: "FShh58GFOgdbxRR",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://sandy-soup.com/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 4688.6,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    url: "https://example.com/webhook",
    excludeSelf: true,
    urls: [
      {
        url: "https://supportive-premise.net/",
        weight: 2984.42,
      },
    ],
    dnsResolvePeriodSec: 6774.8,
    loadBalanceStatsPeriodSec: 3923.6,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "webhook-output",
    type: "webhook",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    method: "PUT",
    format: "custom",
    keepAlive: true,
    concurrency: 8309.72,
    maxPayloadSizeKB: 1748.24,
    maxPayloadEvents: 7149.98,
    compress: true,
    rejectUnauthorized: false,
    timeoutSec: 3330.52,
    flushPeriodSec: 373.84,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "credentialsSecret",
    tls: {
      disabled: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.1",
    },
    totalMemoryLimitKB: 5738.55,
    loadBalanced: false,
    description: "lender godparent seldom beyond",
    customSourceExpression: "<value>",
    customDropWhenNull: false,
    customEventDelimiter: "<value>",
    customContentType: "<value>",
    customPayloadExpression: "<value>",
    advancedContentType: "<value>",
    formatEventCode: "<value>",
    formatPayloadCode: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 1091.39,
    pqMode: "error",
    pqMaxBufferSize: 327.17,
    pqMaxBackpressureSec: 4429.83,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    username: "Pamela.Feeney-Douglas",
    password: "FShh58GFOgdbxRR",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://sandy-soup.com/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 4688.6,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    url: "https://example.com/webhook",
    excludeSelf: true,
    urls: [
      {
        url: "https://supportive-premise.net/",
        weight: 2984.42,
      },
    ],
    dnsResolvePeriodSec: 6774.8,
    loadBalanceStatsPeriodSec: 3923.6,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWizHec

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesWizHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "wiz-hec-output",
    type: "wiz_hec",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    loadBalanced: true,
    nextQueue: "<value>",
    tcpRouting: "<value>",
    tls: {
      disabled: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.1",
    },
    concurrency: 1096.57,
    maxPayloadSizeKB: 8385.17,
    maxPayloadEvents: 2794.75,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 3569.77,
    flushPeriodSec: 9940.43,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    enableMultiMetrics: false,
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "queue",
    wiz_connector_id: "00000000-0000-0000-0000-000000000000",
    wiz_environment: "test",
    data_center: "us1",
    wiz_sourcetype: "placeholder",
    description: "lazily scenario eek why astride",
    pqStrictOrdering: true,
    pqRatePerSec: 2614.76,
    pqMode: "always",
    pqMaxBufferSize: 7295.73,
    pqMaxBackpressureSec: 166.54,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    token: "<value>",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "wiz-hec-output",
    type: "wiz_hec",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    loadBalanced: true,
    nextQueue: "<value>",
    tcpRouting: "<value>",
    tls: {
      disabled: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.1",
    },
    concurrency: 1096.57,
    maxPayloadSizeKB: 8385.17,
    maxPayloadEvents: 2794.75,
    compress: false,
    rejectUnauthorized: false,
    timeoutSec: 3569.77,
    flushPeriodSec: 9940.43,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    enableMultiMetrics: false,
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "queue",
    wiz_connector_id: "00000000-0000-0000-0000-000000000000",
    wiz_environment: "test",
    data_center: "us1",
    wiz_sourcetype: "placeholder",
    description: "lazily scenario eek why astride",
    pqStrictOrdering: true,
    pqRatePerSec: 2614.76,
    pqMode: "always",
    pqMaxBufferSize: 7295.73,
    pqMaxBackpressureSec: 166.54,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "gzip",
    pqOnBackpressure: "block",
    pqControls: {},
    token: "<value>",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesXsiam

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" example="OutputCreateExamplesXsiam" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.create({
    id: "xsiam-output",
    type: "xsiam",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    loadBalanced: true,
    concurrency: 3706.57,
    maxPayloadSizeKB: 1757.91,
    maxPayloadEvents: 2718.28,
    rejectUnauthorized: true,
    timeoutSec: 3524.23,
    flushPeriodSec: 2880.04,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    authType: "token",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    throttleRateReqPerSec: 844281,
    onBackpressure: "drop",
    totalMemoryLimitKB: 2474.89,
    description: "flat pfft correctly uh-huh unto turbulent",
    url: "https://zany-fun.org",
    useRoundRobinDns: false,
    excludeSelf: true,
    urls: [
      {
        url: "https://moral-flight.net",
        weight: 4632.32,
      },
    ],
    dnsResolvePeriodSec: 4434.28,
    loadBalanceStatsPeriodSec: 702.56,
    token: "<value>",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 8012.84,
    pqMode: "backpressure",
    pqMaxBufferSize: 5901.43,
    pqMaxBackpressureSec: 4565.69,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsCreate } from "cribl-control-plane/funcs/destinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsCreate(criblControlPlane, {
    id: "xsiam-output",
    type: "xsiam",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    loadBalanced: true,
    concurrency: 3706.57,
    maxPayloadSizeKB: 1757.91,
    maxPayloadEvents: 2718.28,
    rejectUnauthorized: true,
    timeoutSec: 3524.23,
    flushPeriodSec: 2880.04,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    failedRequestLoggingMode: "payloadAndHeaders",
    safeHeaders: [
      "<value 1>",
    ],
    authType: "token",
    responseRetrySettings: [
      {
        httpStatus: 5395.85,
        initialBackoff: 5493.68,
        backoffRate: 5815.97,
        maxBackoff: 4757.68,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 483.81,
      backoffRate: 7907.59,
      maxBackoff: 37.91,
    },
    responseHonorRetryAfterHeader: true,
    throttleRateReqPerSec: 844281,
    onBackpressure: "drop",
    totalMemoryLimitKB: 2474.89,
    description: "flat pfft correctly uh-huh unto turbulent",
    url: "https://zany-fun.org",
    useRoundRobinDns: false,
    excludeSelf: true,
    urls: [
      {
        url: "https://moral-flight.net",
        weight: 4632.32,
      },
    ],
    dnsResolvePeriodSec: 4434.28,
    loadBalanceStatsPeriodSec: 702.56,
    token: "<value>",
    textSecret: "<value>",
    pqStrictOrdering: false,
    pqRatePerSec: 8012.84,
    pqMode: "backpressure",
    pqMaxBufferSize: 5901.43,
    pqMaxBackpressureSec: 4565.69,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateOutputRequest](../../models/operations/createoutputrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedOutput](../../models/countedoutput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get the specified Destination.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOutputById" method="get" path="/system/outputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsGet } from "cribl-control-plane/funcs/destinationsGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsGet(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOutputByIdRequest](../../models/operations/getoutputbyidrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedOutput](../../models/countedoutput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the specified Destination.</br></br>Provide a complete representation of the Destination that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Destination.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Destination might not function as expected.

### Example Usage: OutputCreateExamplesAzureBlob

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesAzureBlob" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "azure-blob-output",
      type: "azure_blob",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      containerName: "my-container",
      createContainer: false,
      destPath: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      maxConcurrentFileParts: 2483.76,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3781.94,
      maxFileOpenTimeSec: 2882.22,
      maxFileIdleTimeSec: 4338.52,
      maxOpenFiles: 1903.4,
      headerLine: "<value>",
      writeHighWaterMark: 4820.25,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      authType: "secret",
      storageClass: "Hot",
      description: "scientific since properly massage and though nor slip",
      compress: "none",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 1556.39,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: true,
      enablePageChecksum: true,
      emptyDirCleanupSec: 6283.25,
      directoryBatchSize: 7094.47,
      deadletterPath: "<value>",
      maxRetryNum: 3469.49,
      connectionString: "<value>",
      textSecret: "<value>",
      storageAccountName: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      azureCloud: "<value>",
      endpointSuffix: "<value>",
      clientTextSecret: "<value>",
      certificate: {
        certificateName: "<value>",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "azure-blob-output",
      type: "azure_blob",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      containerName: "my-container",
      createContainer: false,
      destPath: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      maxConcurrentFileParts: 2483.76,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3781.94,
      maxFileOpenTimeSec: 2882.22,
      maxFileIdleTimeSec: 4338.52,
      maxOpenFiles: 1903.4,
      headerLine: "<value>",
      writeHighWaterMark: 4820.25,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      authType: "secret",
      storageClass: "Hot",
      description: "scientific since properly massage and though nor slip",
      compress: "none",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 1556.39,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: true,
      enablePageChecksum: true,
      emptyDirCleanupSec: 6283.25,
      directoryBatchSize: 7094.47,
      deadletterPath: "<value>",
      maxRetryNum: 3469.49,
      connectionString: "<value>",
      textSecret: "<value>",
      storageAccountName: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      azureCloud: "<value>",
      endpointSuffix: "<value>",
      clientTextSecret: "<value>",
      certificate: {
        certificateName: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureDataExplorer

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesAzureDataExplorer" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "azure-data-explorer-output",
      type: "azure_data_explorer",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      clusterUrl: "https://mycluster.kusto.windows.net",
      database: "mydatabase",
      table: "mytable",
      validateDatabaseSettings: true,
      ingestMode: "streaming",
      oauthEndpoint: "https://login.microsoftonline.com",
      tenantId: "tenant-id",
      clientId: "client-id",
      scope: "https://mycluster.kusto.windows.net/.default",
      oauthType: "clientSecret",
      description: "throbbing psst worldly",
      clientSecret: "client-secret",
      textSecret: "<value>",
      certificate: {
        certificateName: "<value>",
      },
      format: "json",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 5001.1,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: true,
      removeEmptyDirs: false,
      emptyDirCleanupSec: 5924.44,
      directoryBatchSize: 1137.16,
      deadletterEnabled: true,
      deadletterPath: "<value>",
      maxRetryNum: 2275.51,
      isMappingObj: true,
      mappingObj: "<value>",
      mappingRef: "<value>",
      ingestUrl: "https://decisive-gym.info",
      onBackpressure: "block",
      stagePath: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3817.49,
      maxFileOpenTimeSec: 9009.52,
      maxFileIdleTimeSec: 5897.68,
      maxOpenFiles: 450.54,
      maxConcurrentFileParts: 3780.25,
      onDiskFullBackpressure: "block",
      addIdToStagePath: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      timeoutSec: 9192.76,
      flushImmediately: true,
      retainBlobOnSuccess: false,
      extentTags: [
        {
          prefix: "ingestBy",
          value: "<value>",
        },
      ],
      ingestIfNotExists: [
        {
          value: "<value>",
        },
      ],
      reportLevel: "failuresOnly",
      reportMethod: "queue",
      additionalProperties: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      concurrency: 2432.52,
      maxPayloadSizeKB: 9826.65,
      maxPayloadEvents: 5272.63,
      flushPeriodSec: 9965.1,
      rejectUnauthorized: false,
      useRoundRobinDns: false,
      keepAlive: false,
      pqStrictOrdering: false,
      pqRatePerSec: 8620.92,
      pqMode: "always",
      pqMaxBufferSize: 7945.47,
      pqMaxBackpressureSec: 365.17,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "azure-data-explorer-output",
      type: "azure_data_explorer",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      clusterUrl: "https://mycluster.kusto.windows.net",
      database: "mydatabase",
      table: "mytable",
      validateDatabaseSettings: true,
      ingestMode: "streaming",
      oauthEndpoint: "https://login.microsoftonline.com",
      tenantId: "tenant-id",
      clientId: "client-id",
      scope: "https://mycluster.kusto.windows.net/.default",
      oauthType: "clientSecret",
      description: "throbbing psst worldly",
      clientSecret: "client-secret",
      textSecret: "<value>",
      certificate: {
        certificateName: "<value>",
      },
      format: "json",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 5001.1,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: true,
      removeEmptyDirs: false,
      emptyDirCleanupSec: 5924.44,
      directoryBatchSize: 1137.16,
      deadletterEnabled: true,
      deadletterPath: "<value>",
      maxRetryNum: 2275.51,
      isMappingObj: true,
      mappingObj: "<value>",
      mappingRef: "<value>",
      ingestUrl: "https://decisive-gym.info",
      onBackpressure: "block",
      stagePath: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3817.49,
      maxFileOpenTimeSec: 9009.52,
      maxFileIdleTimeSec: 5897.68,
      maxOpenFiles: 450.54,
      maxConcurrentFileParts: 3780.25,
      onDiskFullBackpressure: "block",
      addIdToStagePath: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      timeoutSec: 9192.76,
      flushImmediately: true,
      retainBlobOnSuccess: false,
      extentTags: [
        {
          prefix: "ingestBy",
          value: "<value>",
        },
      ],
      ingestIfNotExists: [
        {
          value: "<value>",
        },
      ],
      reportLevel: "failuresOnly",
      reportMethod: "queue",
      additionalProperties: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      concurrency: 2432.52,
      maxPayloadSizeKB: 9826.65,
      maxPayloadEvents: 5272.63,
      flushPeriodSec: 9965.1,
      rejectUnauthorized: false,
      useRoundRobinDns: false,
      keepAlive: false,
      pqStrictOrdering: false,
      pqRatePerSec: 8620.92,
      pqMode: "always",
      pqMaxBufferSize: 7945.47,
      pqMaxBackpressureSec: 365.17,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureEventhub

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesAzureEventhub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "azure-eventhub-output",
      type: "azure_eventhub",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 8884.78,
      flushEventCount: 8951.42,
      flushPeriodSec: 5374.29,
      connectionTimeout: 1716.83,
      requestTimeout: 9692.82,
      maxRetries: 4721.49,
      maxBackOff: 6345.03,
      initialBackoff: 5877.5,
      backoffRate: 4783.22,
      authenticationTimeout: 920.15,
      reauthenticationThreshold: 6583.41,
      sasl: {
        disabled: true,
        authType: "secret",
        password: "ITFqNJLNRbGquOR",
        textSecret: "<value>",
        mechanism: "plain",
        username: "Sebastian11",
        clientSecretAuthType: "manual",
        clientSecret: "<value>",
        clientTextSecret: "<value>",
        certificateName: "<value>",
        certPath: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        oauthEndpoint: "https://login.microsoftonline.com",
        clientId: "<id>",
        tenantId: "<id>",
        scope: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
      },
      onBackpressure: "block",
      description: "ah tuba nervous sans whoever at invite hunt",
      pqStrictOrdering: false,
      pqRatePerSec: 8807.53,
      pqMode: "always",
      pqMaxBufferSize: 8937.9,
      pqMaxBackpressureSec: 6421.67,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "azure-eventhub-output",
      type: "azure_eventhub",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 8884.78,
      flushEventCount: 8951.42,
      flushPeriodSec: 5374.29,
      connectionTimeout: 1716.83,
      requestTimeout: 9692.82,
      maxRetries: 4721.49,
      maxBackOff: 6345.03,
      initialBackoff: 5877.5,
      backoffRate: 4783.22,
      authenticationTimeout: 920.15,
      reauthenticationThreshold: 6583.41,
      sasl: {
        disabled: true,
        authType: "secret",
        password: "ITFqNJLNRbGquOR",
        textSecret: "<value>",
        mechanism: "plain",
        username: "Sebastian11",
        clientSecretAuthType: "manual",
        clientSecret: "<value>",
        clientTextSecret: "<value>",
        certificateName: "<value>",
        certPath: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        oauthEndpoint: "https://login.microsoftonline.com",
        clientId: "<id>",
        tenantId: "<id>",
        scope: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
      },
      onBackpressure: "block",
      description: "ah tuba nervous sans whoever at invite hunt",
      pqStrictOrdering: false,
      pqRatePerSec: 8807.53,
      pqMode: "always",
      pqMaxBufferSize: 8937.9,
      pqMaxBackpressureSec: 6421.67,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureLogs

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesAzureLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "azure-logs-output",
      type: "azure_logs",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      logType: "Cribl",
      resourceId: "<id>",
      concurrency: 8611.93,
      maxPayloadSizeKB: 175.63,
      maxPayloadEvents: 6882.81,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 9884.75,
      flushPeriodSec: 7735.72,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
      ],
      apiUrl: "https://untimely-tenement.com",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      authType: "manual",
      description: "secrecy unabashedly wee inside intensely behind edge obnoxiously briefly",
      pqStrictOrdering: false,
      pqRatePerSec: 9191.82,
      pqMode: "backpressure",
      pqMaxBufferSize: 1228.3,
      pqMaxBackpressureSec: 9785.98,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      workspaceId: "workspace-id",
      workspaceKey: "workspace-key",
      keypairSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "azure-logs-output",
      type: "azure_logs",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      logType: "Cribl",
      resourceId: "<id>",
      concurrency: 8611.93,
      maxPayloadSizeKB: 175.63,
      maxPayloadEvents: 6882.81,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 9884.75,
      flushPeriodSec: 7735.72,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
      ],
      apiUrl: "https://untimely-tenement.com",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      authType: "manual",
      description: "secrecy unabashedly wee inside intensely behind edge obnoxiously briefly",
      pqStrictOrdering: false,
      pqRatePerSec: 9191.82,
      pqMode: "backpressure",
      pqMaxBufferSize: 1228.3,
      pqMaxBackpressureSec: 9785.98,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      workspaceId: "workspace-id",
      workspaceKey: "workspace-key",
      keypairSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesChronicle

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesChronicle" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "chronicle-output",
      type: "chronicle",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      apiVersion: "<value>",
      authenticationMethod: "serviceAccountSecret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      region: "us",
      concurrency: 8515.29,
      maxPayloadSizeKB: 6698.99,
      maxPayloadEvents: 3502.16,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 3829.56,
      flushPeriodSec: 2702.72,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      useRoundRobinDns: true,
      onBackpressure: "block",
      totalMemoryLimitKB: 1017.45,
      ingestionMethod: "<value>",
      namespace: "<value>",
      logType: "UNKNOWN",
      logTextField: "<value>",
      gcpProjectId: "my-project",
      gcpInstance: "customer-id",
      customLabels: [
        {
          key: "<key>",
          value: "<value>",
          rbacEnabled: false,
        },
      ],
      description: "why electronics bus grimy brightly triumphantly youthfully",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 1370.94,
      pqMode: "always",
      pqMaxBufferSize: 8622.26,
      pqMaxBackpressureSec: 1687.27,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "chronicle-output",
      type: "chronicle",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      apiVersion: "<value>",
      authenticationMethod: "serviceAccountSecret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      region: "us",
      concurrency: 8515.29,
      maxPayloadSizeKB: 6698.99,
      maxPayloadEvents: 3502.16,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 3829.56,
      flushPeriodSec: 2702.72,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      useRoundRobinDns: true,
      onBackpressure: "block",
      totalMemoryLimitKB: 1017.45,
      ingestionMethod: "<value>",
      namespace: "<value>",
      logType: "UNKNOWN",
      logTextField: "<value>",
      gcpProjectId: "my-project",
      gcpInstance: "customer-id",
      customLabels: [
        {
          key: "<key>",
          value: "<value>",
          rbacEnabled: false,
        },
      ],
      description: "why electronics bus grimy brightly triumphantly youthfully",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 1370.94,
      pqMode: "always",
      pqMaxBufferSize: 8622.26,
      pqMaxBackpressureSec: 1687.27,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesClickHouse

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesClickHouse" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "clickhouse-output",
      type: "click_house",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      url: "http://localhost:8123/",
      authType: "oauth",
      database: "mydb",
      tableName: "mytable",
      format: "json-each-row",
      mappingType: "custom",
      asyncInserts: true,
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
      concurrency: 1903.34,
      maxPayloadSizeKB: 4002.9,
      maxPayloadEvents: 7911.21,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 2180.47,
      flushPeriodSec: 2431.75,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      dumpFormatErrorsToDisk: false,
      statsDestination: {
        url: "https://every-oil.com",
        database: "<value>",
        tableName: "<value>",
        authType: "<value>",
        username: "Garth24",
        sqlUsername: "<value>",
        password: "zRmfAeiLQUnT4uW",
      },
      onBackpressure: "block",
      description: "unimportant however evenly solvency issue",
      username: "Marlene.Murray",
      password: "lqEIHo1XFX6NIC3",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://probable-fraudster.biz/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 2487.49,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      sqlUsername: "<value>",
      waitForAsyncInserts: true,
      excludeMappingFields: [
        "<value 1>",
      ],
      describeTable: "<value>",
      columnMappings: [
        {
          columnName: "<value>",
          columnType: "<value>",
          columnValueExpression: "<value>",
        },
      ],
      pqStrictOrdering: true,
      pqRatePerSec: 9476.98,
      pqMode: "error",
      pqMaxBufferSize: 9365.02,
      pqMaxBackpressureSec: 485.69,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "clickhouse-output",
      type: "click_house",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      url: "http://localhost:8123/",
      authType: "oauth",
      database: "mydb",
      tableName: "mytable",
      format: "json-each-row",
      mappingType: "custom",
      asyncInserts: true,
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
      concurrency: 1903.34,
      maxPayloadSizeKB: 4002.9,
      maxPayloadEvents: 7911.21,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 2180.47,
      flushPeriodSec: 2431.75,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      dumpFormatErrorsToDisk: false,
      statsDestination: {
        url: "https://every-oil.com",
        database: "<value>",
        tableName: "<value>",
        authType: "<value>",
        username: "Garth24",
        sqlUsername: "<value>",
        password: "zRmfAeiLQUnT4uW",
      },
      onBackpressure: "block",
      description: "unimportant however evenly solvency issue",
      username: "Marlene.Murray",
      password: "lqEIHo1XFX6NIC3",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://probable-fraudster.biz/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 2487.49,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      sqlUsername: "<value>",
      waitForAsyncInserts: true,
      excludeMappingFields: [
        "<value 1>",
      ],
      describeTable: "<value>",
      columnMappings: [
        {
          columnName: "<value>",
          columnType: "<value>",
          columnValueExpression: "<value>",
        },
      ],
      pqStrictOrdering: true,
      pqRatePerSec: 9476.98,
      pqMode: "error",
      pqMaxBufferSize: 9365.02,
      pqMaxBackpressureSec: 485.69,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCloudflareR2

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesCloudflareR2" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "cloudflare-r2-output",
      type: "cloudflare_r2",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      endpoint: "https://account-id.r2.cloudflarestorage.com",
      bucket: "my-bucket",
      awsAuthenticationMethod: "secret",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "<value>",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: false,
      verifyPermissions: false,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 9791.24,
      maxOpenFiles: 2705.05,
      headerLine: "<value>",
      writeHighWaterMark: 6834.19,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 8042.63,
      maxFileIdleTimeSec: 7670.07,
      maxConcurrentFileParts: 2408.97,
      description: "hunt gut hello",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 8099.47,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 5308.77,
      directoryBatchSize: 4476.01,
      deadletterPath: "<value>",
      maxRetryNum: 2703.9,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "cloudflare-r2-output",
      type: "cloudflare_r2",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      endpoint: "https://account-id.r2.cloudflarestorage.com",
      bucket: "my-bucket",
      awsAuthenticationMethod: "secret",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "<value>",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: false,
      verifyPermissions: false,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 9791.24,
      maxOpenFiles: 2705.05,
      headerLine: "<value>",
      writeHighWaterMark: 6834.19,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 8042.63,
      maxFileIdleTimeSec: 7670.07,
      maxConcurrentFileParts: 2408.97,
      description: "hunt gut hello",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 8099.47,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 5308.77,
      directoryBatchSize: 4476.01,
      deadletterPath: "<value>",
      maxRetryNum: 2703.9,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCloudwatch

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesCloudwatch" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "cloudwatch-output",
      type: "cloudwatch",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1566.35,
      maxQueueSize: 2064.65,
      maxRecordSizeKB: 5428.5,
      flushPeriodSec: 2388.99,
      onBackpressure: "queue",
      description: "status moralise plain ugh quicker ack atop hastily intensely innocently",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 6016.77,
      pqMode: "error",
      pqMaxBufferSize: 8406.88,
      pqMaxBackpressureSec: 453.74,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "cloudwatch-output",
      type: "cloudwatch",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1566.35,
      maxQueueSize: 2064.65,
      maxRecordSizeKB: 5428.5,
      flushPeriodSec: 2388.99,
      onBackpressure: "queue",
      description: "status moralise plain ugh quicker ack atop hastily intensely innocently",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 6016.77,
      pqMode: "error",
      pqMaxBufferSize: 8406.88,
      pqMaxBackpressureSec: 453.74,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesConfluentCloud

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesConfluentCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "confluent-cloud-output",
      type: "confluent_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      brokers: [
        "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
      ],
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      topic: "logs",
      ack: -1,
      format: "raw",
      compression: "gzip",
      maxRecordSizeKB: 2688.67,
      flushEventCount: 7754.55,
      flushPeriodSec: 1608.03,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://monstrous-peninsula.org",
        connectionTimeout: 9335.5,
        requestTimeout: 6847.29,
        maxRetries: 5265.71,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
        tls: {
          disabled: false,
          rejectUnauthorized: false,
          servername: "<value>",
          certificateName: "<value>",
          caPath: "<value>",
          privKeyPath: "<value>",
          certPath: "<value>",
          passphrase: "<value>",
          minVersion: "TLSv1.2",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 1938.56,
        defaultValueSchemaId: 6106.51,
      },
      connectionTimeout: 5929.35,
      requestTimeout: 7762.89,
      maxRetries: 5546.58,
      maxBackOff: 6350.07,
      initialBackoff: 4102.84,
      backoffRate: 9719.77,
      authenticationTimeout: 4709.27,
      reauthenticationThreshold: 4547.13,
      sasl: {
        disabled: true,
        username: "Oscar94",
        password: "pfBdpz4xrW3jxrP",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://neglected-legislature.info",
        clientId: "<id>",
        oauthSecretType: "<value>",
        clientTextSecret: "<value>",
        oauthParams: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        saslExtensions: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
      onBackpressure: "block",
      description: "except generally piglet secret whoa bonnet",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 7866.57,
      pqMode: "backpressure",
      pqMaxBufferSize: 4281.78,
      pqMaxBackpressureSec: 1538.83,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "confluent-cloud-output",
      type: "confluent_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      brokers: [
        "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
      ],
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      topic: "logs",
      ack: -1,
      format: "raw",
      compression: "gzip",
      maxRecordSizeKB: 2688.67,
      flushEventCount: 7754.55,
      flushPeriodSec: 1608.03,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://monstrous-peninsula.org",
        connectionTimeout: 9335.5,
        requestTimeout: 6847.29,
        maxRetries: 5265.71,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
        tls: {
          disabled: false,
          rejectUnauthorized: false,
          servername: "<value>",
          certificateName: "<value>",
          caPath: "<value>",
          privKeyPath: "<value>",
          certPath: "<value>",
          passphrase: "<value>",
          minVersion: "TLSv1.2",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 1938.56,
        defaultValueSchemaId: 6106.51,
      },
      connectionTimeout: 5929.35,
      requestTimeout: 7762.89,
      maxRetries: 5546.58,
      maxBackOff: 6350.07,
      initialBackoff: 4102.84,
      backoffRate: 9719.77,
      authenticationTimeout: 4709.27,
      reauthenticationThreshold: 4547.13,
      sasl: {
        disabled: true,
        username: "Oscar94",
        password: "pfBdpz4xrW3jxrP",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://neglected-legislature.info",
        clientId: "<id>",
        oauthSecretType: "<value>",
        clientTextSecret: "<value>",
        oauthParams: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        saslExtensions: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
      onBackpressure: "block",
      description: "except generally piglet secret whoa bonnet",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 7866.57,
      pqMode: "backpressure",
      pqMaxBufferSize: 4281.78,
      pqMaxBackpressureSec: 1538.83,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblHttp

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesCriblHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "cribl-http-output",
      type: "cribl_http",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: false,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      tokenTTLMinutes: 9011.17,
      excludeFields: [
        "<value 1>",
      ],
      compression: "none",
      concurrency: 3808.7,
      maxPayloadSizeKB: 7976,
      maxPayloadEvents: 4003.91,
      rejectUnauthorized: false,
      timeoutSec: 1383.86,
      flushPeriodSec: 5502.37,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      throttleRatePerSec: "<value>",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "unnaturally meaningfully dwell eek",
        },
      ],
      onBackpressure: "block",
      description: "generally afore entwine",
      url: "https://sugary-minion.org/",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://made-up-turret.info/",
          weight: 7491.45,
        },
      ],
      dnsResolvePeriodSec: 6286.22,
      loadBalanceStatsPeriodSec: 9407.19,
      pqStrictOrdering: false,
      pqRatePerSec: 5025.28,
      pqMode: "always",
      pqMaxBufferSize: 4392.41,
      pqMaxBackpressureSec: 7699,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "cribl-http-output",
      type: "cribl_http",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: false,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      tokenTTLMinutes: 9011.17,
      excludeFields: [
        "<value 1>",
      ],
      compression: "none",
      concurrency: 3808.7,
      maxPayloadSizeKB: 7976,
      maxPayloadEvents: 4003.91,
      rejectUnauthorized: false,
      timeoutSec: 1383.86,
      flushPeriodSec: 5502.37,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      throttleRatePerSec: "<value>",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "unnaturally meaningfully dwell eek",
        },
      ],
      onBackpressure: "block",
      description: "generally afore entwine",
      url: "https://sugary-minion.org/",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://made-up-turret.info/",
          weight: 7491.45,
        },
      ],
      dnsResolvePeriodSec: 6286.22,
      loadBalanceStatsPeriodSec: 9407.19,
      pqStrictOrdering: false,
      pqRatePerSec: 5025.28,
      pqMode: "always",
      pqMaxBufferSize: 4392.41,
      pqMaxBackpressureSec: 7699,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblLake

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesCriblLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "cribl-lake-output",
      type: "cribl_lake",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      bucket: "<value>",
      region: "<value>",
      awsSecretKey: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 6632.89,
      stagePath: "<value>",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "bucket-owner-read",
      storageClass: "GLACIER_IR",
      serverSideEncryption: "AES256",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 6554.23,
      maxOpenFiles: 7164.42,
      headerLine: "<value>",
      writeHighWaterMark: 6323.35,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 3248.96,
      maxFileIdleTimeSec: 551.01,
      verifyPermissions: false,
      maxClosingFilesToBackpressure: 4972.01,
      awsAuthenticationMethod: "manual",
      format: "json",
      maxConcurrentFileParts: 2236.32,
      description: "striking while naturally which yippee yuck",
      emptyDirCleanupSec: 6996.94,
      directoryBatchSize: 2626.92,
      deadletterPath: "<value>",
      maxRetryNum: 8980.45,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "cribl-lake-output",
      type: "cribl_lake",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      bucket: "<value>",
      region: "<value>",
      awsSecretKey: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 6632.89,
      stagePath: "<value>",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "bucket-owner-read",
      storageClass: "GLACIER_IR",
      serverSideEncryption: "AES256",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 6554.23,
      maxOpenFiles: 7164.42,
      headerLine: "<value>",
      writeHighWaterMark: 6323.35,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 3248.96,
      maxFileIdleTimeSec: 551.01,
      verifyPermissions: false,
      maxClosingFilesToBackpressure: 4972.01,
      awsAuthenticationMethod: "manual",
      format: "json",
      maxConcurrentFileParts: 2236.32,
      description: "striking while naturally which yippee yuck",
      emptyDirCleanupSec: 6996.94,
      directoryBatchSize: 2626.92,
      deadletterPath: "<value>",
      maxRetryNum: 8980.45,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblSearchEngine

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesCriblSearchEngine" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "cribl-search-engine-output",
      type: "cribl_search_engine",
      pipeline: "<value>",
      systemFields: [
        "cribl_pipe",
      ],
      environment: "<value>",
      streamtags: [],
      loadBalanced: false,
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1",
      },
      tokenTTLMinutes: 60,
      excludeFields: [
        "__kube_*",
        "__metadata",
        "__winEvent",
      ],
      compression: "gzip",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "none",
      safeHeaders: [],
      throttleRatePerSec: "0",
      responseRetrySettings: [
        {
          httpStatus: 401,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 20000,
        },
        {
          httpStatus: 403,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 20000,
        },
        {
          httpStatus: 408,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 429,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 500,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 502,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 503,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 504,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 509,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 226.71,
        backoffRate: 2301.44,
        maxBackoff: 7522.63,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "unnaturally meaningfully dwell eek",
        },
      ],
      onBackpressure: "block",
      useRoundRobinDns: true,
      description: "aside broadly ew knowingly postbox exasperation sparkling",
      url: "https://0.0.0.0:10200",
      excludeSelf: true,
      urls: [
        {
          url: "https://made-up-turret.info/",
          weight: 7491.45,
        },
      ],
      dnsResolvePeriodSec: 5930.66,
      loadBalanceStatsPeriodSec: 1203.75,
      pqStrictOrdering: true,
      pqRatePerSec: 210.67,
      pqMode: "always",
      pqMaxBufferSize: 6862.95,
      pqMaxBackpressureSec: 5462.8,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "cribl-search-engine-output",
      type: "cribl_search_engine",
      pipeline: "<value>",
      systemFields: [
        "cribl_pipe",
      ],
      environment: "<value>",
      streamtags: [],
      loadBalanced: false,
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1",
      },
      tokenTTLMinutes: 60,
      excludeFields: [
        "__kube_*",
        "__metadata",
        "__winEvent",
      ],
      compression: "gzip",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "none",
      safeHeaders: [],
      throttleRatePerSec: "0",
      responseRetrySettings: [
        {
          httpStatus: 401,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 20000,
        },
        {
          httpStatus: 403,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 20000,
        },
        {
          httpStatus: 408,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 429,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 500,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 502,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 503,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 504,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
        {
          httpStatus: 509,
          initialBackoff: 250,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 226.71,
        backoffRate: 2301.44,
        maxBackoff: 7522.63,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "unnaturally meaningfully dwell eek",
        },
      ],
      onBackpressure: "block",
      useRoundRobinDns: true,
      description: "aside broadly ew knowingly postbox exasperation sparkling",
      url: "https://0.0.0.0:10200",
      excludeSelf: true,
      urls: [
        {
          url: "https://made-up-turret.info/",
          weight: 7491.45,
        },
      ],
      dnsResolvePeriodSec: 5930.66,
      loadBalanceStatsPeriodSec: 1203.75,
      pqStrictOrdering: true,
      pqRatePerSec: 210.67,
      pqMode: "always",
      pqMaxBufferSize: 6862.95,
      pqMaxBackpressureSec: 5462.8,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblTcp

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesCriblTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "cribl-tcp-output",
      type: "cribl_tcp",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: true,
      compression: "gzip",
      logFailedRequests: true,
      throttleRatePerSec: "<value>",
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      connectionTimeout: 8879.2,
      writeTimeout: 4132.15,
      tokenTTLMinutes: 25.13,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "wrongly gee butter before certainly transplant",
        },
      ],
      excludeFields: [
        "<value 1>",
        "<value 2>",
      ],
      onBackpressure: "queue",
      description: "bony sans bah facilitate accept",
      host: "localhost",
      port: 10090,
      excludeSelf: true,
      hosts: [
        {
          host: "wicked-bend.com",
          port: 9502.76,
          tls: "off",
          servername: "<value>",
          weight: 1086.4,
        },
      ],
      dnsResolvePeriodSec: 9216.99,
      loadBalanceStatsPeriodSec: 3267.41,
      maxConcurrentSenders: 6031.12,
      pqStrictOrdering: false,
      pqRatePerSec: 5828.08,
      pqMode: "backpressure",
      pqMaxBufferSize: 2582.97,
      pqMaxBackpressureSec: 4922.26,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "cribl-tcp-output",
      type: "cribl_tcp",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: true,
      compression: "gzip",
      logFailedRequests: true,
      throttleRatePerSec: "<value>",
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      connectionTimeout: 8879.2,
      writeTimeout: 4132.15,
      tokenTTLMinutes: 25.13,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "wrongly gee butter before certainly transplant",
        },
      ],
      excludeFields: [
        "<value 1>",
        "<value 2>",
      ],
      onBackpressure: "queue",
      description: "bony sans bah facilitate accept",
      host: "localhost",
      port: 10090,
      excludeSelf: true,
      hosts: [
        {
          host: "wicked-bend.com",
          port: 9502.76,
          tls: "off",
          servername: "<value>",
          weight: 1086.4,
        },
      ],
      dnsResolvePeriodSec: 9216.99,
      loadBalanceStatsPeriodSec: 3267.41,
      maxConcurrentSenders: 6031.12,
      pqStrictOrdering: false,
      pqRatePerSec: 5828.08,
      pqMode: "backpressure",
      pqMaxBufferSize: 2582.97,
      pqMaxBackpressureSec: 4922.26,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCrowdstrikeNextGenSiem

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesCrowdstrikeNextGenSiem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "crowdstrike-next-gen-siem-output",
      type: "crowdstrike_next_gen_siem",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
      concurrency: 46.82,
      maxPayloadSizeKB: 2231.53,
      maxPayloadEvents: 5666.9,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 509.17,
      flushPeriodSec: 6611.56,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "duh forswear rundown leading or creamy jaywalk unto excepting godfather",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 832.96,
      pqMode: "always",
      pqMaxBufferSize: 5812.75,
      pqMaxBackpressureSec: 6168.33,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "crowdstrike-next-gen-siem-output",
      type: "crowdstrike_next_gen_siem",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
      concurrency: 46.82,
      maxPayloadSizeKB: 2231.53,
      maxPayloadEvents: 5666.9,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 509.17,
      flushPeriodSec: 6611.56,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "duh forswear rundown leading or creamy jaywalk unto excepting godfather",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 832.96,
      pqMode: "always",
      pqMaxBufferSize: 5812.75,
      pqMaxBackpressureSec: 6168.33,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDatabricks

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesDatabricks" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "databricks-output",
      type: "databricks",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      destPath: "<value>",
      stagePath: "<value>",
      addIdToStagePath: false,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 9986.25,
      maxFileOpenTimeSec: 7553.27,
      maxFileIdleTimeSec: 4520.64,
      maxOpenFiles: 6484.96,
      headerLine: "<value>",
      writeHighWaterMark: 2028.06,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
      timeoutSec: 9741.02,
      description: "less yowza elastic gentle ha pulp sedately nab huzzah till",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 1550.93,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: false,
      enablePageChecksum: false,
      emptyDirCleanupSec: 2329.58,
      directoryBatchSize: 3930.38,
      deadletterPath: "<value>",
      maxRetryNum: 4604.98,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "databricks-output",
      type: "databricks",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      destPath: "<value>",
      stagePath: "<value>",
      addIdToStagePath: false,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 9986.25,
      maxFileOpenTimeSec: 7553.27,
      maxFileIdleTimeSec: 4520.64,
      maxOpenFiles: 6484.96,
      headerLine: "<value>",
      writeHighWaterMark: 2028.06,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
      timeoutSec: 9741.02,
      description: "less yowza elastic gentle ha pulp sedately nab huzzah till",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 1550.93,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: false,
      enablePageChecksum: false,
      emptyDirCleanupSec: 2329.58,
      directoryBatchSize: 3930.38,
      deadletterPath: "<value>",
      maxRetryNum: 4604.98,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDatadog

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesDatadog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "datadog-output",
      type: "datadog",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      contentType: "text",
      message: "<value>",
      source: "<value>",
      host: "snappy-pinstripe.name",
      service: "<value>",
      tags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      batchByTags: false,
      allowApiKeyFromEvents: true,
      severity: "error",
      site: "us3",
      sendCountersAsCount: true,
      concurrency: 4780.24,
      maxPayloadSizeKB: 2157.18,
      maxPayloadEvents: 2167.96,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 8405.83,
      flushPeriodSec: 2064.64,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "secret",
      totalMemoryLimitKB: 5152.62,
      description: "once cheetah depute brr that",
      customUrl: "https://foolish-captain.com",
      pqStrictOrdering: false,
      pqRatePerSec: 9052.27,
      pqMode: "error",
      pqMaxBufferSize: 3523.22,
      pqMaxBackpressureSec: 4999.25,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "datadog-output",
      type: "datadog",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      contentType: "text",
      message: "<value>",
      source: "<value>",
      host: "snappy-pinstripe.name",
      service: "<value>",
      tags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      batchByTags: false,
      allowApiKeyFromEvents: true,
      severity: "error",
      site: "us3",
      sendCountersAsCount: true,
      concurrency: 4780.24,
      maxPayloadSizeKB: 2157.18,
      maxPayloadEvents: 2167.96,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 8405.83,
      flushPeriodSec: 2064.64,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "secret",
      totalMemoryLimitKB: 5152.62,
      description: "once cheetah depute brr that",
      customUrl: "https://foolish-captain.com",
      pqStrictOrdering: false,
      pqRatePerSec: 9052.27,
      pqMode: "error",
      pqMaxBufferSize: 3523.22,
      pqMaxBackpressureSec: 4999.25,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDataset

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesDataset" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "dataset-output",
      type: "dataset",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      messageField: "<value>",
      excludeFields: [
        "<value 1>",
        "<value 2>",
      ],
      serverHostField: "<value>",
      timestampField: "<value>",
      defaultSeverity: "warning",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      site: "us",
      concurrency: 8972.57,
      maxPayloadSizeKB: 7498.8,
      maxPayloadEvents: 5384.58,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 9576.28,
      flushPeriodSec: 5332.84,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      onBackpressure: "block",
      authType: "secret",
      totalMemoryLimitKB: 7863.19,
      description: "instead zowie under foodstuffs",
      customUrl: "https://wide-eyed-newsstand.net",
      pqStrictOrdering: false,
      pqRatePerSec: 8504.84,
      pqMode: "always",
      pqMaxBufferSize: 5018.38,
      pqMaxBackpressureSec: 9707.82,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "<value>",
      textSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "dataset-output",
      type: "dataset",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      messageField: "<value>",
      excludeFields: [
        "<value 1>",
        "<value 2>",
      ],
      serverHostField: "<value>",
      timestampField: "<value>",
      defaultSeverity: "warning",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      site: "us",
      concurrency: 8972.57,
      maxPayloadSizeKB: 7498.8,
      maxPayloadEvents: 5384.58,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 9576.28,
      flushPeriodSec: 5332.84,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      onBackpressure: "block",
      authType: "secret",
      totalMemoryLimitKB: 7863.19,
      description: "instead zowie under foodstuffs",
      customUrl: "https://wide-eyed-newsstand.net",
      pqStrictOrdering: false,
      pqRatePerSec: 8504.84,
      pqMode: "always",
      pqMaxBufferSize: 5018.38,
      pqMaxBackpressureSec: 9707.82,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDiskSpool

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesDiskSpool" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "disk-spool-output",
      type: "disk_spool",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      partitionExpr: "<value>",
      description: "hospitable close bulky after yuck ha questionably wherever brr",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "disk-spool-output",
      type: "disk_spool",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      partitionExpr: "<value>",
      description: "hospitable close bulky after yuck ha questionably wherever brr",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDlS3

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesDlS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "dl-s3-output",
      type: "dl_s3",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 8819.97,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "private",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 354.36,
      maxOpenFiles: 7250.43,
      headerLine: "<value>",
      writeHighWaterMark: 7772.47,
      onBackpressure: "drop",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 3897.25,
      maxFileIdleTimeSec: 3373.72,
      maxConcurrentFileParts: 5153.34,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 5713.84,
      partitioningFields: [
        "<value 1>",
      ],
      description: "around rival internationalize aha intently",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 4313.36,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: false,
      emptyDirCleanupSec: 7021.56,
      directoryBatchSize: 1891.5,
      deadletterPath: "<value>",
      maxRetryNum: 7200.73,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "dl-s3-output",
      type: "dl_s3",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 8819.97,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "private",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 354.36,
      maxOpenFiles: 7250.43,
      headerLine: "<value>",
      writeHighWaterMark: 7772.47,
      onBackpressure: "drop",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 3897.25,
      maxFileIdleTimeSec: 3373.72,
      maxConcurrentFileParts: 5153.34,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 5713.84,
      partitioningFields: [
        "<value 1>",
      ],
      description: "around rival internationalize aha intently",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 4313.36,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: false,
      emptyDirCleanupSec: 7021.56,
      directoryBatchSize: 1891.5,
      deadletterPath: "<value>",
      maxRetryNum: 7200.73,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDynatraceHttp

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesDynatraceHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "dynatrace-http-output",
      type: "dynatrace_http",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      method: "PATCH",
      keepAlive: true,
      concurrency: 125.67,
      maxPayloadSizeKB: 2912.64,
      maxPayloadEvents: 2507.84,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 3348.44,
      flushPeriodSec: 6470.67,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      totalMemoryLimitKB: 289.92,
      description: "muscat tenderly foretell however",
      pqStrictOrdering: false,
      pqRatePerSec: 7132.04,
      pqMode: "always",
      pqMaxBufferSize: 9549.72,
      pqMaxBackpressureSec: 4590.76,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      token: "your-api-key",
      textSecret: "<value>",
      environmentId: "<id>",
      activeGateDomain: "<value>",
      url: "https://awesome-typeface.org/",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "dynatrace-http-output",
      type: "dynatrace_http",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      method: "PATCH",
      keepAlive: true,
      concurrency: 125.67,
      maxPayloadSizeKB: 2912.64,
      maxPayloadEvents: 2507.84,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 3348.44,
      flushPeriodSec: 6470.67,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      totalMemoryLimitKB: 289.92,
      description: "muscat tenderly foretell however",
      pqStrictOrdering: false,
      pqRatePerSec: 7132.04,
      pqMode: "always",
      pqMaxBufferSize: 9549.72,
      pqMaxBackpressureSec: 4590.76,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      token: "your-api-key",
      textSecret: "<value>",
      environmentId: "<id>",
      activeGateDomain: "<value>",
      url: "https://awesome-typeface.org/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDynatraceOtlp

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesDynatraceOtlp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "dynatrace-otlp-output",
      type: "dynatrace_otlp",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      protocol: "http",
      endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
      otlpVersion: "1.3.1",
      compress: "deflate",
      httpCompress: "gzip",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 2670.9,
      maxPayloadSizeKB: 686.82,
      timeoutSec: 4912.09,
      flushPeriodSec: 6608.98,
      failedRequestLoggingMode: "payloadAndHeaders",
      connectionTimeout: 4219.17,
      keepAliveTime: 6416.26,
      keepAlive: false,
      endpointType: "saas",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      onBackpressure: "block",
      description: "delight honestly parsnip pleasant rectangular terraform unaccountably whoa because",
      rejectUnauthorized: true,
      useRoundRobinDns: true,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      pqStrictOrdering: true,
      pqRatePerSec: 8982.8,
      pqMode: "error",
      pqMaxBufferSize: 1108.95,
      pqMaxBackpressureSec: 3500.5,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "dynatrace-otlp-output",
      type: "dynatrace_otlp",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      protocol: "http",
      endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
      otlpVersion: "1.3.1",
      compress: "deflate",
      httpCompress: "gzip",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 2670.9,
      maxPayloadSizeKB: 686.82,
      timeoutSec: 4912.09,
      flushPeriodSec: 6608.98,
      failedRequestLoggingMode: "payloadAndHeaders",
      connectionTimeout: 4219.17,
      keepAliveTime: 6416.26,
      keepAlive: false,
      endpointType: "saas",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      onBackpressure: "block",
      description: "delight honestly parsnip pleasant rectangular terraform unaccountably whoa because",
      rejectUnauthorized: true,
      useRoundRobinDns: true,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      pqStrictOrdering: true,
      pqRatePerSec: 8982.8,
      pqMode: "error",
      pqMaxBufferSize: 1108.95,
      pqMaxBackpressureSec: 3500.5,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesElastic

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesElastic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "elastic-output",
      type: "elastic",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
      index: "logs",
      docType: "<value>",
      concurrency: 4401.79,
      maxPayloadSizeKB: 9682.04,
      maxPayloadEvents: 9151.09,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 3156.24,
      flushPeriodSec: 4048.92,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: true,
        username: "Rupert.Weber",
        password: "QdSjyb67N1O75f2",
        authType: "textSecret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticVersion: "6",
      elasticPipeline: "<value>",
      includeDocId: false,
      writeAction: "index",
      retryPartialErrors: true,
      onBackpressure: "queue",
      description: "advertisement gah pace amidst or idle",
      url: "https://untried-corral.biz",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://shy-baseboard.org",
          weight: 9775.98,
        },
      ],
      dnsResolvePeriodSec: 1812.71,
      loadBalanceStatsPeriodSec: 122.24,
      pqStrictOrdering: false,
      pqRatePerSec: 8807.85,
      pqMode: "backpressure",
      pqMaxBufferSize: 2643.65,
      pqMaxBackpressureSec: 2586.24,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "elastic-output",
      type: "elastic",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
      index: "logs",
      docType: "<value>",
      concurrency: 4401.79,
      maxPayloadSizeKB: 9682.04,
      maxPayloadEvents: 9151.09,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 3156.24,
      flushPeriodSec: 4048.92,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: true,
        username: "Rupert.Weber",
        password: "QdSjyb67N1O75f2",
        authType: "textSecret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticVersion: "6",
      elasticPipeline: "<value>",
      includeDocId: false,
      writeAction: "index",
      retryPartialErrors: true,
      onBackpressure: "queue",
      description: "advertisement gah pace amidst or idle",
      url: "https://untried-corral.biz",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://shy-baseboard.org",
          weight: 9775.98,
        },
      ],
      dnsResolvePeriodSec: 1812.71,
      loadBalanceStatsPeriodSec: 122.24,
      pqStrictOrdering: false,
      pqRatePerSec: 8807.85,
      pqMode: "backpressure",
      pqMaxBufferSize: 2643.65,
      pqMaxBackpressureSec: 2586.24,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesElasticCloud

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesElasticCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "elastic-cloud-output",
      type: "elastic_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "my-cloud-id",
      index: "logs",
      concurrency: 3515.83,
      maxPayloadSizeKB: 5133.45,
      maxPayloadEvents: 9242.46,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 6437.59,
      flushPeriodSec: 3343.13,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
      ],
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: true,
        username: "Rupert.Weber",
        password: "QdSjyb67N1O75f2",
        authType: "textSecret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticPipeline: "<value>",
      includeDocId: false,
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "enthusiastically incidentally proceed",
      pqStrictOrdering: true,
      pqRatePerSec: 5903.82,
      pqMode: "error",
      pqMaxBufferSize: 2420.59,
      pqMaxBackpressureSec: 2651.61,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "elastic-cloud-output",
      type: "elastic_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "my-cloud-id",
      index: "logs",
      concurrency: 3515.83,
      maxPayloadSizeKB: 5133.45,
      maxPayloadEvents: 9242.46,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 6437.59,
      flushPeriodSec: 3343.13,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
      ],
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: true,
        username: "Rupert.Weber",
        password: "QdSjyb67N1O75f2",
        authType: "textSecret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticPipeline: "<value>",
      includeDocId: false,
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "enthusiastically incidentally proceed",
      pqStrictOrdering: true,
      pqRatePerSec: 5903.82,
      pqMode: "error",
      pqMaxBufferSize: 2420.59,
      pqMaxBackpressureSec: 2651.61,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesExabeam

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesExabeam" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "exabeam-output",
      type: "exabeam",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      stagePath: "/tmp/staging",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v2",
      objectACL: "project-private",
      storageClass: "COLDLINE",
      reuseConnections: false,
      rejectUnauthorized: true,
      addIdToStagePath: false,
      removeEmptyDirs: true,
      maxFileOpenTimeSec: 550.56,
      maxFileIdleTimeSec: 7450.37,
      maxOpenFiles: 4356.92,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileSizeMB: 9199.97,
      encodedConfiguration: "<value>",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
      siteName: "<value>",
      siteId: "<id>",
      timezoneOffset: "<value>",
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      description: "quart sarong fat partially violin fun opposite canter before",
      emptyDirCleanupSec: 1491.22,
      directoryBatchSize: 4634.03,
      deadletterPath: "<value>",
      maxRetryNum: 1709.19,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "exabeam-output",
      type: "exabeam",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      stagePath: "/tmp/staging",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v2",
      objectACL: "project-private",
      storageClass: "COLDLINE",
      reuseConnections: false,
      rejectUnauthorized: true,
      addIdToStagePath: false,
      removeEmptyDirs: true,
      maxFileOpenTimeSec: 550.56,
      maxFileIdleTimeSec: 7450.37,
      maxOpenFiles: 4356.92,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileSizeMB: 9199.97,
      encodedConfiguration: "<value>",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
      siteName: "<value>",
      siteId: "<id>",
      timezoneOffset: "<value>",
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      description: "quart sarong fat partially violin fun opposite canter before",
      emptyDirCleanupSec: 1491.22,
      directoryBatchSize: 4634.03,
      deadletterPath: "<value>",
      maxRetryNum: 1709.19,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesFilesystem

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesFilesystem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "filesystem-output",
      type: "filesystem",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      destPath: "/var/log/output",
      stagePath: "<value>",
      addIdToStagePath: false,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4579.59,
      maxFileOpenTimeSec: 1591.93,
      maxFileIdleTimeSec: 1645.42,
      maxOpenFiles: 2710.22,
      headerLine: "<value>",
      writeHighWaterMark: 8023.17,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      description: "outside dish worth rapidly joyfully requite until",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 8841.03,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: true,
      emptyDirCleanupSec: 4416.3,
      directoryBatchSize: 450.74,
      deadletterPath: "<value>",
      maxRetryNum: 1172.59,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "filesystem-output",
      type: "filesystem",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      destPath: "/var/log/output",
      stagePath: "<value>",
      addIdToStagePath: false,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4579.59,
      maxFileOpenTimeSec: 1591.93,
      maxFileIdleTimeSec: 1645.42,
      maxOpenFiles: 2710.22,
      headerLine: "<value>",
      writeHighWaterMark: 8023.17,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      description: "outside dish worth rapidly joyfully requite until",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 8841.03,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: true,
      emptyDirCleanupSec: 4416.3,
      directoryBatchSize: 450.74,
      deadletterPath: "<value>",
      maxRetryNum: 1172.59,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleChronicle

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesGoogleChronicle" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "google-chronicle-output",
      type: "google_chronicle",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      apiVersion: "v2",
      authenticationMethod: "secret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      logFormatType: "unstructured",
      region: "us",
      concurrency: 7208.27,
      maxPayloadSizeKB: 3924.96,
      maxPayloadEvents: 8995.19,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 8409.46,
      flushPeriodSec: 6627.3,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      useRoundRobinDns: false,
      onBackpressure: "drop",
      totalMemoryLimitKB: 5989.37,
      description: "an settle unlike brr winding overcooked",
      extraLogTypes: [
        {
          logType: "<value>",
          description: "solder dull stay yet overcooked per debut attest",
        },
      ],
      logType: "<value>",
      logTextField: "<value>",
      customerId: "customer-id",
      namespace: "<value>",
      customLabels: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      udmType: "entities",
      apiKey: "<value>",
      apiKeySecret: "<value>",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 46.81,
      pqMode: "backpressure",
      pqMaxBufferSize: 9588.7,
      pqMaxBackpressureSec: 9065.63,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "google-chronicle-output",
      type: "google_chronicle",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      apiVersion: "v2",
      authenticationMethod: "secret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      logFormatType: "unstructured",
      region: "us",
      concurrency: 7208.27,
      maxPayloadSizeKB: 3924.96,
      maxPayloadEvents: 8995.19,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 8409.46,
      flushPeriodSec: 6627.3,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      useRoundRobinDns: false,
      onBackpressure: "drop",
      totalMemoryLimitKB: 5989.37,
      description: "an settle unlike brr winding overcooked",
      extraLogTypes: [
        {
          logType: "<value>",
          description: "solder dull stay yet overcooked per debut attest",
        },
      ],
      logType: "<value>",
      logTextField: "<value>",
      customerId: "customer-id",
      namespace: "<value>",
      customLabels: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      udmType: "entities",
      apiKey: "<value>",
      apiKeySecret: "<value>",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 46.81,
      pqMode: "backpressure",
      pqMaxBufferSize: 9588.7,
      pqMaxBackpressureSec: 9065.63,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleCloudLogging

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesGoogleCloudLogging" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "google-cloud-logging-output",
      type: "google_cloud_logging",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      logLocationType: "project",
      logNameExpression: "my-log",
      sanitizeLogNames: true,
      payloadFormat: "json",
      logLabels: [
        {
          label: "<value>",
          valueExpression: "<value>",
        },
      ],
      resourceTypeExpression: "<value>",
      resourceTypeLabels: [
        {
          label: "<value>",
          valueExpression: "<value>",
        },
      ],
      severityExpression: "<value>",
      insertIdExpression: "<value>",
      googleAuthMethod: "auto",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxPayloadSizeKB: 7783.36,
      maxPayloadEvents: 1075.18,
      flushPeriodSec: 3750.28,
      concurrency: 7469.07,
      connectionTimeout: 4986.31,
      timeoutSec: 9771.63,
      throttleRateReqPerSec: 40584,
      requestMethodExpression: "<value>",
      requestUrlExpression: "<value>",
      requestSizeExpression: "<value>",
      statusExpression: "<value>",
      responseSizeExpression: "<value>",
      userAgentExpression: "<value>",
      remoteIpExpression: "<value>",
      serverIpExpression: "<value>",
      refererExpression: "<value>",
      latencyExpression: "<value>",
      cacheLookupExpression: "<value>",
      cacheHitExpression: "<value>",
      cacheValidatedExpression: "<value>",
      cacheFillBytesExpression: "<value>",
      protocolExpression: "<value>",
      idExpression: "<value>",
      producerExpression: "<value>",
      firstExpression: "<value>",
      lastExpression: "<value>",
      fileExpression: "<value>",
      lineExpression: "<value>",
      functionExpression: "<value>",
      uidExpression: "<value>",
      indexExpression: "<value>",
      totalSplitsExpression: "<value>",
      traceExpression: "<value>",
      spanIdExpression: "<value>",
      traceSampledExpression: "<value>",
      onBackpressure: "drop",
      totalMemoryLimitKB: 5970.82,
      description: "fatally lovingly for aboard yowza athwart circle everlasting amid",
      logLocationExpression: "my-project",
      payloadExpression: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 7916.21,
      pqMode: "error",
      pqMaxBufferSize: 9242.28,
      pqMaxBackpressureSec: 8973.1,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "google-cloud-logging-output",
      type: "google_cloud_logging",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      logLocationType: "project",
      logNameExpression: "my-log",
      sanitizeLogNames: true,
      payloadFormat: "json",
      logLabels: [
        {
          label: "<value>",
          valueExpression: "<value>",
        },
      ],
      resourceTypeExpression: "<value>",
      resourceTypeLabels: [
        {
          label: "<value>",
          valueExpression: "<value>",
        },
      ],
      severityExpression: "<value>",
      insertIdExpression: "<value>",
      googleAuthMethod: "auto",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxPayloadSizeKB: 7783.36,
      maxPayloadEvents: 1075.18,
      flushPeriodSec: 3750.28,
      concurrency: 7469.07,
      connectionTimeout: 4986.31,
      timeoutSec: 9771.63,
      throttleRateReqPerSec: 40584,
      requestMethodExpression: "<value>",
      requestUrlExpression: "<value>",
      requestSizeExpression: "<value>",
      statusExpression: "<value>",
      responseSizeExpression: "<value>",
      userAgentExpression: "<value>",
      remoteIpExpression: "<value>",
      serverIpExpression: "<value>",
      refererExpression: "<value>",
      latencyExpression: "<value>",
      cacheLookupExpression: "<value>",
      cacheHitExpression: "<value>",
      cacheValidatedExpression: "<value>",
      cacheFillBytesExpression: "<value>",
      protocolExpression: "<value>",
      idExpression: "<value>",
      producerExpression: "<value>",
      firstExpression: "<value>",
      lastExpression: "<value>",
      fileExpression: "<value>",
      lineExpression: "<value>",
      functionExpression: "<value>",
      uidExpression: "<value>",
      indexExpression: "<value>",
      totalSplitsExpression: "<value>",
      traceExpression: "<value>",
      spanIdExpression: "<value>",
      traceSampledExpression: "<value>",
      onBackpressure: "drop",
      totalMemoryLimitKB: 5970.82,
      description: "fatally lovingly for aboard yowza athwart circle everlasting amid",
      logLocationExpression: "my-project",
      payloadExpression: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 7916.21,
      pqMode: "error",
      pqMaxBufferSize: 9242.28,
      pqMaxBackpressureSec: 8973.1,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleCloudStorage

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesGoogleCloudStorage" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "google-cloud-storage-output",
      type: "google_cloud_storage",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v4",
      awsAuthenticationMethod: "auto",
      stagePath: "/tmp/staging",
      destPath: "<value>",
      verifyPermissions: false,
      objectACL: "bucket-owner-read",
      storageClass: "COLDLINE",
      reuseConnections: true,
      rejectUnauthorized: false,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 9051.83,
      maxFileOpenTimeSec: 9130.6,
      maxFileIdleTimeSec: 393.96,
      maxOpenFiles: 3003.39,
      headerLine: "<value>",
      writeHighWaterMark: 2670.83,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      description: "rally readjust down expatiate apud",
      compress: "gzip",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 7925.21,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: true,
      enablePageChecksum: true,
      emptyDirCleanupSec: 8007.09,
      directoryBatchSize: 9611.42,
      deadletterPath: "<value>",
      maxRetryNum: 9465.77,
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      awsSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "google-cloud-storage-output",
      type: "google_cloud_storage",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v4",
      awsAuthenticationMethod: "auto",
      stagePath: "/tmp/staging",
      destPath: "<value>",
      verifyPermissions: false,
      objectACL: "bucket-owner-read",
      storageClass: "COLDLINE",
      reuseConnections: true,
      rejectUnauthorized: false,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 9051.83,
      maxFileOpenTimeSec: 9130.6,
      maxFileIdleTimeSec: 393.96,
      maxOpenFiles: 3003.39,
      headerLine: "<value>",
      writeHighWaterMark: 2670.83,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      description: "rally readjust down expatiate apud",
      compress: "gzip",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 7925.21,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: true,
      enablePageChecksum: true,
      emptyDirCleanupSec: 8007.09,
      directoryBatchSize: 9611.42,
      deadletterPath: "<value>",
      maxRetryNum: 9465.77,
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      awsSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGooglePubsub

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesGooglePubsub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "google-pubsub-output",
      type: "google_pubsub",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      topicName: "my-topic",
      createTopic: true,
      orderedDelivery: true,
      region: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      batchSize: 1129.99,
      batchTimeout: 2693.31,
      maxQueueSize: 5018.14,
      maxRecordSizeKB: 2186.59,
      flushPeriod: 3334.5,
      maxInProgress: 4225.46,
      onBackpressure: "queue",
      description: "upon lovable often sympathetically",
      pqStrictOrdering: false,
      pqRatePerSec: 5420.16,
      pqMode: "backpressure",
      pqMaxBufferSize: 2689.54,
      pqMaxBackpressureSec: 7401.92,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "google-pubsub-output",
      type: "google_pubsub",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      topicName: "my-topic",
      createTopic: true,
      orderedDelivery: true,
      region: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      batchSize: 1129.99,
      batchTimeout: 2693.31,
      maxQueueSize: 5018.14,
      maxRecordSizeKB: 2186.59,
      flushPeriod: 3334.5,
      maxInProgress: 4225.46,
      onBackpressure: "queue",
      description: "upon lovable often sympathetically",
      pqStrictOrdering: false,
      pqRatePerSec: 5420.16,
      pqMode: "backpressure",
      pqMaxBufferSize: 2689.54,
      pqMaxBackpressureSec: 7401.92,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGrafanaCloud

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesGrafanaCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "grafana-cloud-output",
      type: "grafana_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
      prometheusUrl: "https://self-reliant-cassava.biz/",
      message: "<value>",
      messageFormat: "json",
      labels: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      metricRenameExpr: "<value>",
      prometheusAuth: {
        authType: "token",
        token: "<value>",
        textSecret: "<value>",
        username: "Ferne.Kessler27",
        password: "Wu6qD_OjiWX1YoR",
        credentialsSecret: "<value>",
      },
      lokiAuth: {
        authType: "token",
        token: "<value>",
        textSecret: "<value>",
        username: "Nichole_Orn",
        password: "AXfs9wY4onNl58V",
        credentialsSecret: "<value>",
      },
      concurrency: 3838.32,
      maxPayloadSizeKB: 2087.22,
      maxPayloadEvents: 6949.94,
      rejectUnauthorized: true,
      timeoutSec: 7737.64,
      flushPeriodSec: 6621.57,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "critical fold however broadly whispered",
      compress: false,
      pqStrictOrdering: true,
      pqRatePerSec: 3340.52,
      pqMode: "backpressure",
      pqMaxBufferSize: 6556.99,
      pqMaxBackpressureSec: 4910.58,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "grafana-cloud-output",
      type: "grafana_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
      prometheusUrl: "https://self-reliant-cassava.biz/",
      message: "<value>",
      messageFormat: "json",
      labels: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      metricRenameExpr: "<value>",
      prometheusAuth: {
        authType: "token",
        token: "<value>",
        textSecret: "<value>",
        username: "Ferne.Kessler27",
        password: "Wu6qD_OjiWX1YoR",
        credentialsSecret: "<value>",
      },
      lokiAuth: {
        authType: "token",
        token: "<value>",
        textSecret: "<value>",
        username: "Nichole_Orn",
        password: "AXfs9wY4onNl58V",
        credentialsSecret: "<value>",
      },
      concurrency: 3838.32,
      maxPayloadSizeKB: 2087.22,
      maxPayloadEvents: 6949.94,
      rejectUnauthorized: true,
      timeoutSec: 7737.64,
      flushPeriodSec: 6621.57,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "critical fold however broadly whispered",
      compress: false,
      pqStrictOrdering: true,
      pqRatePerSec: 3340.52,
      pqMode: "backpressure",
      pqMaxBufferSize: 6556.99,
      pqMaxBackpressureSec: 4910.58,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGraphite

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesGraphite" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "graphite-output",
      type: "graphite",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      protocol: "tcp",
      host: "localhost",
      port: 2003,
      mtu: 5467.88,
      flushPeriodSec: 8806.55,
      dnsResolvePeriodSec: 2112.44,
      description: "duh safe gallery instantly hungrily aside appropriate even",
      throttleRatePerSec: "<value>",
      connectionTimeout: 8938.27,
      writeTimeout: 4342.14,
      onBackpressure: "block",
      pqStrictOrdering: false,
      pqRatePerSec: 7269.12,
      pqMode: "always",
      pqMaxBufferSize: 5622.39,
      pqMaxBackpressureSec: 5603.69,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "graphite-output",
      type: "graphite",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      protocol: "tcp",
      host: "localhost",
      port: 2003,
      mtu: 5467.88,
      flushPeriodSec: 8806.55,
      dnsResolvePeriodSec: 2112.44,
      description: "duh safe gallery instantly hungrily aside appropriate even",
      throttleRatePerSec: "<value>",
      connectionTimeout: 8938.27,
      writeTimeout: 4342.14,
      onBackpressure: "block",
      pqStrictOrdering: false,
      pqRatePerSec: 7269.12,
      pqMode: "always",
      pqMaxBufferSize: 5622.39,
      pqMaxBackpressureSec: 5603.69,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesHoneycomb

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesHoneycomb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "honeycomb-output",
      type: "honeycomb",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      dataset: "my-dataset",
      concurrency: 5457.55,
      maxPayloadSizeKB: 8738.86,
      maxPayloadEvents: 1806.79,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 642.3,
      flushPeriodSec: 6519.2,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "secret",
      description: "plus astride aside round swing playfully gosh punctually",
      pqStrictOrdering: false,
      pqRatePerSec: 3210.25,
      pqMode: "error",
      pqMaxBufferSize: 9645.91,
      pqMaxBackpressureSec: 4360.95,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      team: "<value>",
      textSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "honeycomb-output",
      type: "honeycomb",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      dataset: "my-dataset",
      concurrency: 5457.55,
      maxPayloadSizeKB: 8738.86,
      maxPayloadEvents: 1806.79,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 642.3,
      flushPeriodSec: 6519.2,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "secret",
      description: "plus astride aside round swing playfully gosh punctually",
      pqStrictOrdering: false,
      pqRatePerSec: 3210.25,
      pqMode: "error",
      pqMaxBufferSize: 9645.91,
      pqMaxBackpressureSec: 4360.95,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      team: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesHumioHec

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesHumioHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "humio-hec-output",
      type: "humio_hec",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "https://cloud.us.humio.com/api/v1/ingest/hec",
      concurrency: 9096.47,
      maxPayloadSizeKB: 6722.38,
      maxPayloadEvents: 6871.77,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 8167.29,
      flushPeriodSec: 8577.75,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      description: "hungry unlike boohoo successfully supportive zowie briefly beloved corral hmph",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 2835.31,
      pqMode: "error",
      pqMaxBufferSize: 2550.45,
      pqMaxBackpressureSec: 5506.23,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "humio-hec-output",
      type: "humio_hec",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "https://cloud.us.humio.com/api/v1/ingest/hec",
      concurrency: 9096.47,
      maxPayloadSizeKB: 6722.38,
      maxPayloadEvents: 6871.77,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 8167.29,
      flushPeriodSec: 8577.75,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      description: "hungry unlike boohoo successfully supportive zowie briefly beloved corral hmph",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 2835.31,
      pqMode: "error",
      pqMaxBufferSize: 2550.45,
      pqMaxBackpressureSec: 5506.23,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesInfluxdb

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesInfluxdb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "influxdb-output",
      type: "influxdb",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      url: "http://localhost:8086",
      useV2API: true,
      timestampPrecision: "h",
      dynamicValueFieldName: false,
      valueFieldName: "<value>",
      concurrency: 8557.3,
      maxPayloadSizeKB: 4891,
      maxPayloadEvents: 5584.44,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 1831.02,
      flushPeriodSec: 5275.83,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      authType: "oauth",
      description: "until who which excepting unfreeze although circa",
      database: "mydb",
      bucket: "<value>",
      org: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 2411.96,
      pqMode: "error",
      pqMaxBufferSize: 1260.56,
      pqMaxBackpressureSec: 9450.85,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      username: "Mozell_Bosco",
      password: "dGh12x_W6OLfqdt",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://same-slipper.org",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 3064.46,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "influxdb-output",
      type: "influxdb",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      url: "http://localhost:8086",
      useV2API: true,
      timestampPrecision: "h",
      dynamicValueFieldName: false,
      valueFieldName: "<value>",
      concurrency: 8557.3,
      maxPayloadSizeKB: 4891,
      maxPayloadEvents: 5584.44,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 1831.02,
      flushPeriodSec: 5275.83,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      authType: "oauth",
      description: "until who which excepting unfreeze although circa",
      database: "mydb",
      bucket: "<value>",
      org: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 2411.96,
      pqMode: "error",
      pqMaxBufferSize: 1260.56,
      pqMaxBackpressureSec: 9450.85,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      username: "Mozell_Bosco",
      password: "dGh12x_W6OLfqdt",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://same-slipper.org",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 3064.46,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesKafka

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesKafka" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "kafka-output",
      type: "kafka",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      brokers: [
        "localhost:9092",
      ],
      topic: "logs",
      ack: -1,
      format: "protobuf",
      compression: "none",
      maxRecordSizeKB: 6310.27,
      flushEventCount: 7227.04,
      flushPeriodSec: 9421.45,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://monstrous-peninsula.org",
        connectionTimeout: 9335.5,
        requestTimeout: 6847.29,
        maxRetries: 5265.71,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
        tls: {
          disabled: false,
          rejectUnauthorized: false,
          servername: "<value>",
          certificateName: "<value>",
          caPath: "<value>",
          privKeyPath: "<value>",
          certPath: "<value>",
          passphrase: "<value>",
          minVersion: "TLSv1.2",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 1938.56,
        defaultValueSchemaId: 6106.51,
      },
      connectionTimeout: 3371,
      requestTimeout: 9055.22,
      maxRetries: 7989.51,
      maxBackOff: 6279.74,
      initialBackoff: 5484.89,
      backoffRate: 1543.23,
      authenticationTimeout: 4850.53,
      reauthenticationThreshold: 6240.22,
      sasl: {
        disabled: true,
        username: "Oscar94",
        password: "pfBdpz4xrW3jxrP",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://neglected-legislature.info",
        clientId: "<id>",
        oauthSecretType: "<value>",
        clientTextSecret: "<value>",
        oauthParams: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        saslExtensions: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "queue",
      description: "annually ouch hopeful badly",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 6468.62,
      pqMode: "error",
      pqMaxBufferSize: 65.48,
      pqMaxBackpressureSec: 253.41,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "kafka-output",
      type: "kafka",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      brokers: [
        "localhost:9092",
      ],
      topic: "logs",
      ack: -1,
      format: "protobuf",
      compression: "none",
      maxRecordSizeKB: 6310.27,
      flushEventCount: 7227.04,
      flushPeriodSec: 9421.45,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://monstrous-peninsula.org",
        connectionTimeout: 9335.5,
        requestTimeout: 6847.29,
        maxRetries: 5265.71,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
        tls: {
          disabled: false,
          rejectUnauthorized: false,
          servername: "<value>",
          certificateName: "<value>",
          caPath: "<value>",
          privKeyPath: "<value>",
          certPath: "<value>",
          passphrase: "<value>",
          minVersion: "TLSv1.2",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 1938.56,
        defaultValueSchemaId: 6106.51,
      },
      connectionTimeout: 3371,
      requestTimeout: 9055.22,
      maxRetries: 7989.51,
      maxBackOff: 6279.74,
      initialBackoff: 5484.89,
      backoffRate: 1543.23,
      authenticationTimeout: 4850.53,
      reauthenticationThreshold: 6240.22,
      sasl: {
        disabled: true,
        username: "Oscar94",
        password: "pfBdpz4xrW3jxrP",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://neglected-legislature.info",
        clientId: "<id>",
        oauthSecretType: "<value>",
        clientTextSecret: "<value>",
        oauthParams: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        saslExtensions: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "queue",
      description: "annually ouch hopeful badly",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 6468.62,
      pqMode: "error",
      pqMaxBufferSize: 65.48,
      pqMaxBackpressureSec: 253.41,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesKinesis

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesKinesis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "kinesis-output",
      type: "kinesis",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      streamName: "my-stream",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2165.97,
      concurrency: 8713.67,
      maxRecordSizeKB: 3193.11,
      flushPeriodSec: 7763.49,
      compression: "none",
      useListShards: true,
      asNdjson: false,
      onBackpressure: "queue",
      description: "fervently irresponsible while fat resolve for hence decision obsess eek",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      maxEventsPerFlush: 3487.48,
      pqStrictOrdering: false,
      pqRatePerSec: 4504.53,
      pqMode: "error",
      pqMaxBufferSize: 7418.62,
      pqMaxBackpressureSec: 2713.92,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "kinesis-output",
      type: "kinesis",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      streamName: "my-stream",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2165.97,
      concurrency: 8713.67,
      maxRecordSizeKB: 3193.11,
      flushPeriodSec: 7763.49,
      compression: "none",
      useListShards: true,
      asNdjson: false,
      onBackpressure: "queue",
      description: "fervently irresponsible while fat resolve for hence decision obsess eek",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      maxEventsPerFlush: 3487.48,
      pqStrictOrdering: false,
      pqRatePerSec: 4504.53,
      pqMode: "error",
      pqMaxBufferSize: 7418.62,
      pqMaxBackpressureSec: 2713.92,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesLoki

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesLoki" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "loki-output",
      type: "loki",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "http://localhost:3100/loki/api/v1/push",
      message: "<value>",
      messageFormat: "protobuf",
      labels: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "basic",
      concurrency: 8598.26,
      maxPayloadSizeKB: 9409.24,
      maxPayloadEvents: 485.45,
      rejectUnauthorized: false,
      timeoutSec: 6526.76,
      flushPeriodSec: 5477.42,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      enableDynamicHeaders: false,
      onBackpressure: "queue",
      totalMemoryLimitKB: 7333.05,
      description: "instead why yahoo bathrobe what bide beyond edge vague",
      compress: false,
      token: "<value>",
      textSecret: "<value>",
      username: "Hope59",
      password: "JD96fk1oG6jhPaO",
      credentialsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4607.06,
      pqMode: "error",
      pqMaxBufferSize: 5909.83,
      pqMaxBackpressureSec: 9389.58,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "loki-output",
      type: "loki",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "http://localhost:3100/loki/api/v1/push",
      message: "<value>",
      messageFormat: "protobuf",
      labels: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "basic",
      concurrency: 8598.26,
      maxPayloadSizeKB: 9409.24,
      maxPayloadEvents: 485.45,
      rejectUnauthorized: false,
      timeoutSec: 6526.76,
      flushPeriodSec: 5477.42,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      enableDynamicHeaders: false,
      onBackpressure: "queue",
      totalMemoryLimitKB: 7333.05,
      description: "instead why yahoo bathrobe what bide beyond edge vague",
      compress: false,
      token: "<value>",
      textSecret: "<value>",
      username: "Hope59",
      password: "JD96fk1oG6jhPaO",
      credentialsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4607.06,
      pqMode: "error",
      pqMaxBufferSize: 5909.83,
      pqMaxBackpressureSec: 9389.58,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMicrosoftFabric

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesMicrosoftFabric" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "microsoft-fabric-output",
      type: "microsoft_fabric",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 6282.45,
      flushEventCount: 1386.19,
      flushPeriodSec: 2617.39,
      connectionTimeout: 9268.31,
      requestTimeout: 8026.59,
      maxRetries: 3574.88,
      maxBackOff: 7208.94,
      initialBackoff: 750.59,
      backoffRate: 9446.9,
      authenticationTimeout: 8169.49,
      reauthenticationThreshold: 4826.91,
      sasl: {
        disabled: true,
        mechanism: "plain",
        username: "Lemuel.Reichel96",
        textSecret: "<value>",
        clientSecretAuthType: "secret",
        clientTextSecret: "<value>",
        certificateName: "<value>",
        certPath: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        oauthEndpoint: "https://login.partner.microsoftonline.cn",
        clientId: "<id>",
        tenantId: "<id>",
        scope: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
      },
      onBackpressure: "block",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
      description: "gummy typewriter murky hence drat eek sans inasmuch yippee per",
      pqStrictOrdering: false,
      pqRatePerSec: 469.56,
      pqMode: "backpressure",
      pqMaxBufferSize: 5268.74,
      pqMaxBackpressureSec: 562.37,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "microsoft-fabric-output",
      type: "microsoft_fabric",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 6282.45,
      flushEventCount: 1386.19,
      flushPeriodSec: 2617.39,
      connectionTimeout: 9268.31,
      requestTimeout: 8026.59,
      maxRetries: 3574.88,
      maxBackOff: 7208.94,
      initialBackoff: 750.59,
      backoffRate: 9446.9,
      authenticationTimeout: 8169.49,
      reauthenticationThreshold: 4826.91,
      sasl: {
        disabled: true,
        mechanism: "plain",
        username: "Lemuel.Reichel96",
        textSecret: "<value>",
        clientSecretAuthType: "secret",
        clientTextSecret: "<value>",
        certificateName: "<value>",
        certPath: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        oauthEndpoint: "https://login.partner.microsoftonline.cn",
        clientId: "<id>",
        tenantId: "<id>",
        scope: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
      },
      onBackpressure: "block",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
      description: "gummy typewriter murky hence drat eek sans inasmuch yippee per",
      pqStrictOrdering: false,
      pqRatePerSec: 469.56,
      pqMode: "backpressure",
      pqMaxBufferSize: 5268.74,
      pqMaxBackpressureSec: 562.37,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMinio

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesMinio" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "minio-output",
      type: "minio",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      signatureVersion: "v2",
      objectACL: "public-read",
      storageClass: "STANDARD",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: false,
      verifyPermissions: true,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 8810.27,
      maxOpenFiles: 9766.07,
      headerLine: "<value>",
      writeHighWaterMark: 3997.82,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 1137.32,
      maxFileIdleTimeSec: 7809.41,
      maxConcurrentFileParts: 9111.74,
      description: "on cautiously seriously till investigate alongside obvious",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "best_compression",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 4682.49,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: true,
      enablePageChecksum: true,
      emptyDirCleanupSec: 9975.08,
      directoryBatchSize: 3469.8,
      deadletterPath: "<value>",
      maxRetryNum: 3226.1,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "minio-output",
      type: "minio",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      signatureVersion: "v2",
      objectACL: "public-read",
      storageClass: "STANDARD",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: false,
      verifyPermissions: true,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 8810.27,
      maxOpenFiles: 9766.07,
      headerLine: "<value>",
      writeHighWaterMark: 3997.82,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 1137.32,
      maxFileIdleTimeSec: 7809.41,
      maxConcurrentFileParts: 9111.74,
      description: "on cautiously seriously till investigate alongside obvious",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "best_compression",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 4682.49,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: false,
      enableWritePageIndex: true,
      enablePageChecksum: true,
      emptyDirCleanupSec: 9975.08,
      directoryBatchSize: 3469.8,
      deadletterPath: "<value>",
      maxRetryNum: 3226.1,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMsk

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesMsk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "msk-output",
      type: "msk",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topic: "logs",
      ack: 0,
      format: "json",
      compression: "none",
      maxRecordSizeKB: 2251,
      flushEventCount: 3509.93,
      flushPeriodSec: 1897.23,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://monstrous-peninsula.org",
        connectionTimeout: 9335.5,
        requestTimeout: 6847.29,
        maxRetries: 5265.71,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
        tls: {
          disabled: false,
          rejectUnauthorized: false,
          servername: "<value>",
          certificateName: "<value>",
          caPath: "<value>",
          privKeyPath: "<value>",
          certPath: "<value>",
          passphrase: "<value>",
          minVersion: "TLSv1.2",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 1938.56,
        defaultValueSchemaId: 6106.51,
      },
      connectionTimeout: 2079.59,
      requestTimeout: 7877.54,
      maxRetries: 381.83,
      maxBackOff: 7693.81,
      initialBackoff: 936.75,
      backoffRate: 6650.93,
      authenticationTimeout: 470.78,
      reauthenticationThreshold: 4087.35,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1537.17,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "queue",
      description: "analyse beyond yippee at oh truthfully",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 8821.31,
      pqMode: "always",
      pqMaxBufferSize: 2599.44,
      pqMaxBackpressureSec: 7767.17,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "msk-output",
      type: "msk",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topic: "logs",
      ack: 0,
      format: "json",
      compression: "none",
      maxRecordSizeKB: 2251,
      flushEventCount: 3509.93,
      flushPeriodSec: 1897.23,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://monstrous-peninsula.org",
        connectionTimeout: 9335.5,
        requestTimeout: 6847.29,
        maxRetries: 5265.71,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
        tls: {
          disabled: false,
          rejectUnauthorized: false,
          servername: "<value>",
          certificateName: "<value>",
          caPath: "<value>",
          privKeyPath: "<value>",
          certPath: "<value>",
          passphrase: "<value>",
          minVersion: "TLSv1.2",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 1938.56,
        defaultValueSchemaId: 6106.51,
      },
      connectionTimeout: 2079.59,
      requestTimeout: 7877.54,
      maxRetries: 381.83,
      maxBackOff: 7693.81,
      initialBackoff: 936.75,
      backoffRate: 6650.93,
      authenticationTimeout: 470.78,
      reauthenticationThreshold: 4087.35,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1537.17,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "queue",
      description: "analyse beyond yippee at oh truthfully",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 8821.31,
      pqMode: "always",
      pqMaxBufferSize: 2599.44,
      pqMaxBackpressureSec: 7767.17,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNetflow

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesNetflow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "netflow-output",
      type: "netflow",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      hosts: [
        {
          host: "localhost",
          port: 2055,
        },
      ],
      dnsResolvePeriodSec: 5805.43,
      enableIpSpoofing: true,
      description: "definite unless exactly acclaimed orchid fledgling poorly sarcastic flu",
      maxRecordSize: 2042.78,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "netflow-output",
      type: "netflow",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      hosts: [
        {
          host: "localhost",
          port: 2055,
        },
      ],
      dnsResolvePeriodSec: 5805.43,
      enableIpSpoofing: true,
      description: "definite unless exactly acclaimed orchid fledgling poorly sarcastic flu",
      maxRecordSize: 2042.78,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNewrelic

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesNewrelic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "newrelic-output",
      type: "newrelic",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      region: "US",
      logType: "<value>",
      messageField: "<value>",
      metadata: [
        {
          name: "timestamp",
          value: "<value>",
        },
      ],
      concurrency: 1788.88,
      maxPayloadSizeKB: 5537.44,
      maxPayloadEvents: 5095.69,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 9805.91,
      flushPeriodSec: 8900.7,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "secret",
      totalMemoryLimitKB: 7856.79,
      description: "fraternise since zowie corporation up tensely windy",
      customUrl: "https://admired-ghost.name/",
      pqStrictOrdering: true,
      pqRatePerSec: 8079.36,
      pqMode: "error",
      pqMaxBufferSize: 1937.93,
      pqMaxBackpressureSec: 1892.3,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "newrelic-output",
      type: "newrelic",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      region: "US",
      logType: "<value>",
      messageField: "<value>",
      metadata: [
        {
          name: "timestamp",
          value: "<value>",
        },
      ],
      concurrency: 1788.88,
      maxPayloadSizeKB: 5537.44,
      maxPayloadEvents: 5095.69,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 9805.91,
      flushPeriodSec: 8900.7,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "secret",
      totalMemoryLimitKB: 7856.79,
      description: "fraternise since zowie corporation up tensely windy",
      customUrl: "https://admired-ghost.name/",
      pqStrictOrdering: true,
      pqRatePerSec: 8079.36,
      pqMode: "error",
      pqMaxBufferSize: 1937.93,
      pqMaxBackpressureSec: 1892.3,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNewrelicEvents

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesNewrelicEvents" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "newrelic-events-output",
      type: "newrelic_events",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      region: "Custom",
      accountId: "123456",
      eventType: "CriblEvent",
      concurrency: 5911,
      maxPayloadSizeKB: 9477.52,
      maxPayloadEvents: 5629.82,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 5587.04,
      flushPeriodSec: 3750.2,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "secret",
      description: "yawningly fearless pip damp complete hold readily",
      customUrl: "https://muffled-marathon.net/",
      pqStrictOrdering: true,
      pqRatePerSec: 3255.13,
      pqMode: "backpressure",
      pqMaxBufferSize: 6984.38,
      pqMaxBackpressureSec: 1915.47,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "newrelic-events-output",
      type: "newrelic_events",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      region: "Custom",
      accountId: "123456",
      eventType: "CriblEvent",
      concurrency: 5911,
      maxPayloadSizeKB: 9477.52,
      maxPayloadEvents: 5629.82,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 5587.04,
      flushPeriodSec: 3750.2,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "secret",
      description: "yawningly fearless pip damp complete hold readily",
      customUrl: "https://muffled-marathon.net/",
      pqStrictOrdering: true,
      pqRatePerSec: 3255.13,
      pqMode: "backpressure",
      pqMaxBufferSize: 6984.38,
      pqMaxBackpressureSec: 1915.47,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesOpenTelemetry

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesOpenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "opentelemetry-output",
      type: "open_telemetry",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      protocol: "http",
      endpoint: "http://localhost:4317",
      otlpVersion: "1.3.1",
      compress: "none",
      httpCompress: "none",
      authType: "basic",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 2834.45,
      maxPayloadSizeKB: 503.25,
      timeoutSec: 7454.18,
      flushPeriodSec: 3781.07,
      failedRequestLoggingMode: "none",
      connectionTimeout: 3760.49,
      keepAliveTime: 8429.08,
      keepAlive: true,
      onBackpressure: "block",
      description: "revitalise oh casement knottily husband near sophisticated",
      username: "Orland52",
      password: "5oHPPy1Dz94GZnR",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://indelible-lift.org",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 5991.38,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      rejectUnauthorized: true,
      useRoundRobinDns: true,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 8893.24,
      pqMode: "error",
      pqMaxBufferSize: 7385.67,
      pqMaxBackpressureSec: 189.61,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "opentelemetry-output",
      type: "open_telemetry",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      protocol: "http",
      endpoint: "http://localhost:4317",
      otlpVersion: "1.3.1",
      compress: "none",
      httpCompress: "none",
      authType: "basic",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 2834.45,
      maxPayloadSizeKB: 503.25,
      timeoutSec: 7454.18,
      flushPeriodSec: 3781.07,
      failedRequestLoggingMode: "none",
      connectionTimeout: 3760.49,
      keepAliveTime: 8429.08,
      keepAlive: true,
      onBackpressure: "block",
      description: "revitalise oh casement knottily husband near sophisticated",
      username: "Orland52",
      password: "5oHPPy1Dz94GZnR",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://indelible-lift.org",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 5991.38,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      rejectUnauthorized: true,
      useRoundRobinDns: true,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 8893.24,
      pqMode: "error",
      pqMaxBufferSize: 7385.67,
      pqMaxBackpressureSec: 189.61,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesPrometheus

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesPrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "prometheus-output",
      type: "prometheus",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      url: "http://localhost:9091/api/v1/write",
      metricRenameExpr: "<value>",
      sendMetadata: true,
      concurrency: 5953.83,
      maxPayloadSizeKB: 4702.65,
      maxPayloadEvents: 2175.69,
      rejectUnauthorized: true,
      timeoutSec: 7522.56,
      flushPeriodSec: 4247.3,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "credentialsSecret",
      description: "degrease so but madly curl",
      metricsFlushPeriodSec: 1127.28,
      pqStrictOrdering: true,
      pqRatePerSec: 4112.14,
      pqMode: "backpressure",
      pqMaxBufferSize: 5743.79,
      pqMaxBackpressureSec: 8657.4,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      username: "Meggie_Hilll",
      password: "bcVb_LAw8pd4sFd",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://joyful-depot.info/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 4759.71,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "prometheus-output",
      type: "prometheus",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      url: "http://localhost:9091/api/v1/write",
      metricRenameExpr: "<value>",
      sendMetadata: true,
      concurrency: 5953.83,
      maxPayloadSizeKB: 4702.65,
      maxPayloadEvents: 2175.69,
      rejectUnauthorized: true,
      timeoutSec: 7522.56,
      flushPeriodSec: 4247.3,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "credentialsSecret",
      description: "degrease so but madly curl",
      metricsFlushPeriodSec: 1127.28,
      pqStrictOrdering: true,
      pqRatePerSec: 4112.14,
      pqMode: "backpressure",
      pqMaxBufferSize: 5743.79,
      pqMaxBackpressureSec: 8657.4,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      username: "Meggie_Hilll",
      password: "bcVb_LAw8pd4sFd",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://joyful-depot.info/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 4759.71,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesRing

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesRing" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "ring-output",
      type: "ring",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      format: "raw",
      partitionExpr: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
      onBackpressure: "block",
      description: "animated grouchy wherever welcome for jut",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "ring-output",
      type: "ring",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      format: "raw",
      partitionExpr: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
      onBackpressure: "block",
      description: "animated grouchy wherever welcome for jut",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesRouter

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesRouter" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "router-output",
      type: "router",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      rules: [
        {
          filter: "true",
          output: "my-output",
          description: "which likewise psst jumbo jubilantly really separate apropos",
          final: true,
        },
      ],
      description: "that issue greedy beside scare more with the",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "router-output",
      type: "router",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      rules: [
        {
          filter: "true",
          output: "my-output",
          description: "which likewise psst jumbo jubilantly really separate apropos",
          final: true,
        },
      ],
      description: "that issue greedy beside scare more with the",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesS3

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "s3-output",
      type: "s3",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5886.43,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "bucket-owner-read",
      storageClass: "GLACIER_IR",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 8953.25,
      maxOpenFiles: 9585.8,
      headerLine: "<value>",
      writeHighWaterMark: 2297.86,
      onBackpressure: "drop",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 4713.31,
      maxFileIdleTimeSec: 8428.01,
      maxConcurrentFileParts: 8114.35,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 8037.02,
      description: "known likewise frantically terrible yowza",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 9378.62,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: true,
      emptyDirCleanupSec: 5922.99,
      directoryBatchSize: 4174.86,
      deadletterPath: "<value>",
      maxRetryNum: 6956.6,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "s3-output",
      type: "s3",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5886.43,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "bucket-owner-read",
      storageClass: "GLACIER_IR",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 8953.25,
      maxOpenFiles: 9585.8,
      headerLine: "<value>",
      writeHighWaterMark: 2297.86,
      onBackpressure: "drop",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 4713.31,
      maxFileIdleTimeSec: 8428.01,
      maxConcurrentFileParts: 8114.35,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 8037.02,
      description: "known likewise frantically terrible yowza",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 9378.62,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: true,
      emptyDirCleanupSec: 5922.99,
      directoryBatchSize: 4174.86,
      deadletterPath: "<value>",
      maxRetryNum: 6956.6,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSecurityLake

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSecurityLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "security-lake-output",
      type: "security_lake",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2325.58,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      objectACL: "public-read",
      storageClass: "GLACIER",
      serverSideEncryption: "AES256",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      maxFileSizeMB: 92.27,
      maxOpenFiles: 4644.92,
      headerLine: "<value>",
      writeHighWaterMark: 6118.72,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 9637.3,
      maxFileIdleTimeSec: 5988.83,
      maxConcurrentFileParts: 8439.34,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 9837.98,
      accountId: "123456789012",
      customSource: "my-custom-source",
      automaticSchema: true,
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 5688.37,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: false,
      description: "charming familiar gym roughly anguished ew unless dereference retool",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      emptyDirCleanupSec: 6357.82,
      directoryBatchSize: 5652.46,
      parquetSchema: "<value>",
      deadletterPath: "<value>",
      maxRetryNum: 8593.61,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "security-lake-output",
      type: "security_lake",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2325.58,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      objectACL: "public-read",
      storageClass: "GLACIER",
      serverSideEncryption: "AES256",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      maxFileSizeMB: 92.27,
      maxOpenFiles: 4644.92,
      headerLine: "<value>",
      writeHighWaterMark: 6118.72,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 5350.49,
        backoffMultiplier: 7874.9,
        maxBackoffMs: 874.88,
        jitterPercent: 7218.41,
      },
      maxFileOpenTimeSec: 9637.3,
      maxFileIdleTimeSec: 5988.83,
      maxConcurrentFileParts: 8439.34,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 9837.98,
      accountId: "123456789012",
      customSource: "my-custom-source",
      automaticSchema: true,
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 5688.37,
      parquetPageSize: "<value>",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: false,
      enablePageChecksum: false,
      description: "charming familiar gym roughly anguished ew unless dereference retool",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      emptyDirCleanupSec: 6357.82,
      directoryBatchSize: 5652.46,
      parquetSchema: "<value>",
      deadletterPath: "<value>",
      maxRetryNum: 8593.61,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSentinel

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSentinel" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "sentinel-output",
      type: "sentinel",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      keepAlive: false,
      concurrency: 7715.2,
      maxPayloadSizeKB: 3903.12,
      maxPayloadEvents: 3348.87,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 1570.66,
      flushPeriodSec: 4314.85,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "oauth",
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      scope: "<value>",
      endpointURLConfiguration: "url",
      totalMemoryLimitKB: 9450.66,
      description: "scout pleased pile now",
      format: "custom",
      customSourceExpression: "<value>",
      customDropWhenNull: false,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 5429.11,
      pqMode: "always",
      pqMaxBufferSize: 9831.05,
      pqMaxBackpressureSec: 780.06,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      url: "https://your-workspace.ingest.monitor.azure.com",
      dcrID: "<id>",
      dceEndpoint: "<value>",
      streamName: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "sentinel-output",
      type: "sentinel",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      keepAlive: false,
      concurrency: 7715.2,
      maxPayloadSizeKB: 3903.12,
      maxPayloadEvents: 3348.87,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 1570.66,
      flushPeriodSec: 4314.85,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "oauth",
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      scope: "<value>",
      endpointURLConfiguration: "url",
      totalMemoryLimitKB: 9450.66,
      description: "scout pleased pile now",
      format: "custom",
      customSourceExpression: "<value>",
      customDropWhenNull: false,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 5429.11,
      pqMode: "always",
      pqMaxBufferSize: 9831.05,
      pqMaxBackpressureSec: 780.06,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      url: "https://your-workspace.ingest.monitor.azure.com",
      dcrID: "<id>",
      dceEndpoint: "<value>",
      streamName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSentinelOneAiSiem

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSentinelOneAiSiem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "sentinel-one-ai-siem-output",
      type: "sentinel_one_ai_siem",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      region: "US",
      endpoint: "/services/collector/event",
      concurrency: 9055.63,
      maxPayloadSizeKB: 3502.02,
      maxPayloadEvents: 1457.08,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 8470.55,
      flushPeriodSec: 9155.51,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "once cap schlep promptly submitter plus fatal than furthermore each",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://infamous-suspension.net",
      hostExpression: "<value>",
      sourceExpression: "<value>",
      sourceTypeExpression: "<value>",
      dataSourceCategoryExpression: "<value>",
      dataSourceNameExpression: "<value>",
      dataSourceVendorExpression: "<value>",
      eventTypeExpression: "<value>",
      host: "decent-rawhide.info",
      source: "<value>",
      sourceType: "<value>",
      dataSourceCategory: "<value>",
      dataSourceName: "<value>",
      dataSourceVendor: "<value>",
      eventType: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 7706.06,
      pqMode: "backpressure",
      pqMaxBufferSize: 8828.58,
      pqMaxBackpressureSec: 1698.73,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "sentinel-one-ai-siem-output",
      type: "sentinel_one_ai_siem",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      region: "US",
      endpoint: "/services/collector/event",
      concurrency: 9055.63,
      maxPayloadSizeKB: 3502.02,
      maxPayloadEvents: 1457.08,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 8470.55,
      flushPeriodSec: 9155.51,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "once cap schlep promptly submitter plus fatal than furthermore each",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://infamous-suspension.net",
      hostExpression: "<value>",
      sourceExpression: "<value>",
      sourceTypeExpression: "<value>",
      dataSourceCategoryExpression: "<value>",
      dataSourceNameExpression: "<value>",
      dataSourceVendorExpression: "<value>",
      eventTypeExpression: "<value>",
      host: "decent-rawhide.info",
      source: "<value>",
      sourceType: "<value>",
      dataSourceCategory: "<value>",
      dataSourceName: "<value>",
      dataSourceVendor: "<value>",
      eventType: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 7706.06,
      pqMode: "backpressure",
      pqMaxBufferSize: 8828.58,
      pqMaxBackpressureSec: 1698.73,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesServiceNow

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesServiceNow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "servicenow-output",
      type: "service_now",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      endpoint: "ingest.lightstep.com:443",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      otlpVersion: "1.3.1",
      maxPayloadSizeKB: 604.45,
      protocol: "http",
      compress: "none",
      httpCompress: "gzip",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 3322,
      timeoutSec: 118.19,
      flushPeriodSec: 9202.54,
      failedRequestLoggingMode: "none",
      connectionTimeout: 600.17,
      keepAliveTime: 2944.81,
      keepAlive: false,
      onBackpressure: "queue",
      description: "neglected eyebrow likewise",
      rejectUnauthorized: true,
      useRoundRobinDns: true,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 8224.63,
      pqMode: "always",
      pqMaxBufferSize: 1994.63,
      pqMaxBackpressureSec: 4254.02,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "servicenow-output",
      type: "service_now",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      endpoint: "ingest.lightstep.com:443",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      otlpVersion: "1.3.1",
      maxPayloadSizeKB: 604.45,
      protocol: "http",
      compress: "none",
      httpCompress: "gzip",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 3322,
      timeoutSec: 118.19,
      flushPeriodSec: 9202.54,
      failedRequestLoggingMode: "none",
      connectionTimeout: 600.17,
      keepAliveTime: 2944.81,
      keepAlive: false,
      onBackpressure: "queue",
      description: "neglected eyebrow likewise",
      rejectUnauthorized: true,
      useRoundRobinDns: true,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 8224.63,
      pqMode: "always",
      pqMaxBufferSize: 1994.63,
      pqMaxBackpressureSec: 4254.02,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSignalfx

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSignalfx" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "signalfx-output",
      type: "signalfx",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      authType: "secret",
      realm: "us0",
      concurrency: 9360.69,
      maxPayloadSizeKB: 2064.65,
      maxPayloadEvents: 2553.33,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 709.66,
      flushPeriodSec: 2754.81,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "blah bewail blah dazzling",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 8252.61,
      pqMode: "backpressure",
      pqMaxBufferSize: 2257.36,
      pqMaxBackpressureSec: 9124.03,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "signalfx-output",
      type: "signalfx",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      authType: "secret",
      realm: "us0",
      concurrency: 9360.69,
      maxPayloadSizeKB: 2064.65,
      maxPayloadEvents: 2553.33,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 709.66,
      flushPeriodSec: 2754.81,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: true,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "blah bewail blah dazzling",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 8252.61,
      pqMode: "backpressure",
      pqMaxBufferSize: 2257.36,
      pqMaxBackpressureSec: 9124.03,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSnmp

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSnmp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "snmp-output",
      type: "snmp",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      hosts: [
        {
          host: "192.168.1.1",
          port: 161,
        },
      ],
      dnsResolvePeriodSec: 4216.89,
      description: "never coordination glow unfortunately yowza rigid but triumphantly memorable widow",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "snmp-output",
      type: "snmp",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      hosts: [
        {
          host: "192.168.1.1",
          port: 161,
        },
      ],
      dnsResolvePeriodSec: 4216.89,
      description: "never coordination glow unfortunately yowza rigid but triumphantly memorable widow",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSns

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSns" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "sns-output",
      type: "sns",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
      messageGroupId: "my-message-group",
      maxRetries: 2750.79,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3829.54,
      onBackpressure: "queue",
      description: "anenst yippee what quadruple degenerate",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4344.14,
      pqMode: "error",
      pqMaxBufferSize: 9184.9,
      pqMaxBackpressureSec: 6073.63,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "sns-output",
      type: "sns",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
      messageGroupId: "my-message-group",
      maxRetries: 2750.79,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3829.54,
      onBackpressure: "queue",
      description: "anenst yippee what quadruple degenerate",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4344.14,
      pqMode: "error",
      pqMaxBufferSize: 9184.9,
      pqMaxBackpressureSec: 6073.63,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunk

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSplunk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "splunk-output",
      type: "splunk",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      host: "localhost",
      port: 9997,
      nestedFields: "none",
      throttleRatePerSec: "<value>",
      connectionTimeout: 1830.9,
      writeTimeout: 6698.03,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      enableMultiMetrics: true,
      enableACK: false,
      logFailedRequests: false,
      maxS2Sversion: "v3",
      onBackpressure: "block",
      authType: "manual",
      description: "after baa though zowie about scratchy unto",
      maxFailedHealthChecks: 8890.04,
      compress: "auto",
      pqStrictOrdering: true,
      pqRatePerSec: 6766.21,
      pqMode: "error",
      pqMaxBufferSize: 2535.92,
      pqMaxBackpressureSec: 6333.18,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "splunk-output",
      type: "splunk",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      host: "localhost",
      port: 9997,
      nestedFields: "none",
      throttleRatePerSec: "<value>",
      connectionTimeout: 1830.9,
      writeTimeout: 6698.03,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      enableMultiMetrics: true,
      enableACK: false,
      logFailedRequests: false,
      maxS2Sversion: "v3",
      onBackpressure: "block",
      authType: "manual",
      description: "after baa though zowie about scratchy unto",
      maxFailedHealthChecks: 8890.04,
      compress: "auto",
      pqStrictOrdering: true,
      pqRatePerSec: 6766.21,
      pqMode: "error",
      pqMaxBufferSize: 2535.92,
      pqMaxBackpressureSec: 6333.18,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunkHec

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSplunkHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "splunk-hec-output",
      type: "splunk_hec",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: false,
      nextQueue: "<value>",
      tcpRouting: "<value>",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
      concurrency: 7743.2,
      maxPayloadSizeKB: 8796,
      maxPayloadEvents: 3591.27,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 1219.61,
      flushPeriodSec: 5995.45,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
      ],
      enableMultiMetrics: false,
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "hmph separately mobilize sugary deliberately since unbearably",
      url: "https://potable-seafood.com",
      useRoundRobinDns: false,
      excludeSelf: true,
      urls: [
        {
          url: "https://far-off-chairperson.org/",
          weight: 3495.92,
        },
      ],
      dnsResolvePeriodSec: 7882.73,
      loadBalanceStatsPeriodSec: 3036.32,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 675.99,
      pqMode: "backpressure",
      pqMaxBufferSize: 7321.13,
      pqMaxBackpressureSec: 2936.9,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "splunk-hec-output",
      type: "splunk_hec",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: false,
      nextQueue: "<value>",
      tcpRouting: "<value>",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
      concurrency: 7743.2,
      maxPayloadSizeKB: 8796,
      maxPayloadEvents: 3591.27,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 1219.61,
      flushPeriodSec: 5995.45,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
      ],
      enableMultiMetrics: false,
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "hmph separately mobilize sugary deliberately since unbearably",
      url: "https://potable-seafood.com",
      useRoundRobinDns: false,
      excludeSelf: true,
      urls: [
        {
          url: "https://far-off-chairperson.org/",
          weight: 3495.92,
        },
      ],
      dnsResolvePeriodSec: 7882.73,
      loadBalanceStatsPeriodSec: 3036.32,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 675.99,
      pqMode: "backpressure",
      pqMaxBufferSize: 7321.13,
      pqMaxBackpressureSec: 2936.9,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunkLb

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSplunkLb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "splunk-lb-output",
      type: "splunk_lb",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      dnsResolvePeriodSec: 5335.2,
      loadBalanceStatsPeriodSec: 7027.9,
      maxConcurrentSenders: 8151.45,
      nestedFields: "json",
      throttleRatePerSec: "<value>",
      connectionTimeout: 1626.21,
      writeTimeout: 6511.23,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      enableMultiMetrics: false,
      enableACK: true,
      logFailedRequests: true,
      maxS2Sversion: "v3",
      onBackpressure: "queue",
      indexerDiscovery: false,
      senderUnhealthyTimeAllowance: 4137.33,
      authType: "secret",
      description: "hyena lest trustworthy sedately dilate as ack",
      maxFailedHealthChecks: 8723.07,
      compress: "always",
      indexerDiscoveryConfigs: {
        site: "<value>",
        masterUri: "https://quarrelsome-phrase.biz/",
        refreshIntervalSec: 7207.13,
        rejectUnauthorized: false,
        authTokens: [
          {
            authType: "secret",
            authToken: "<value>",
            textSecret: "<value>",
          },
        ],
        authType: "secret",
        authToken: "<value>",
        textSecret: "<value>",
      },
      excludeSelf: true,
      hosts: [
        {
          host: "localhost",
          port: 9997,
          tls: "inherit",
          servername: "<value>",
          weight: 8212.15,
        },
      ],
      pqStrictOrdering: true,
      pqRatePerSec: 979.79,
      pqMode: "error",
      pqMaxBufferSize: 4046.95,
      pqMaxBackpressureSec: 2626.82,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "splunk-lb-output",
      type: "splunk_lb",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      dnsResolvePeriodSec: 5335.2,
      loadBalanceStatsPeriodSec: 7027.9,
      maxConcurrentSenders: 8151.45,
      nestedFields: "json",
      throttleRatePerSec: "<value>",
      connectionTimeout: 1626.21,
      writeTimeout: 6511.23,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      enableMultiMetrics: false,
      enableACK: true,
      logFailedRequests: true,
      maxS2Sversion: "v3",
      onBackpressure: "queue",
      indexerDiscovery: false,
      senderUnhealthyTimeAllowance: 4137.33,
      authType: "secret",
      description: "hyena lest trustworthy sedately dilate as ack",
      maxFailedHealthChecks: 8723.07,
      compress: "always",
      indexerDiscoveryConfigs: {
        site: "<value>",
        masterUri: "https://quarrelsome-phrase.biz/",
        refreshIntervalSec: 7207.13,
        rejectUnauthorized: false,
        authTokens: [
          {
            authType: "secret",
            authToken: "<value>",
            textSecret: "<value>",
          },
        ],
        authType: "secret",
        authToken: "<value>",
        textSecret: "<value>",
      },
      excludeSelf: true,
      hosts: [
        {
          host: "localhost",
          port: 9997,
          tls: "inherit",
          servername: "<value>",
          weight: 8212.15,
        },
      ],
      pqStrictOrdering: true,
      pqRatePerSec: 979.79,
      pqMode: "error",
      pqMaxBufferSize: 4046.95,
      pqMaxBackpressureSec: 2626.82,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSqs

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSqs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "sqs-output",
      type: "sqs",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      messageGroupId: "<id>",
      createQueue: false,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9799.66,
      maxQueueSize: 7720.51,
      maxRecordSizeKB: 7048.98,
      flushPeriodSec: 7906.86,
      maxInProgress: 48.83,
      onBackpressure: "block",
      description: "psst silent pinion among beyond behind thorough helplessly sadly",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 7634.58,
      pqMode: "backpressure",
      pqMaxBufferSize: 3127.55,
      pqMaxBackpressureSec: 7631.55,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "sqs-output",
      type: "sqs",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      messageGroupId: "<id>",
      createQueue: false,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9799.66,
      maxQueueSize: 7720.51,
      maxRecordSizeKB: 7048.98,
      flushPeriodSec: 7906.86,
      maxInProgress: 48.83,
      onBackpressure: "block",
      description: "psst silent pinion among beyond behind thorough helplessly sadly",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 7634.58,
      pqMode: "backpressure",
      pqMaxBufferSize: 3127.55,
      pqMaxBackpressureSec: 7631.55,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesStatsd

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesStatsd" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "statsd-output",
      type: "statsd",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 5991.44,
      flushPeriodSec: 4591.84,
      dnsResolvePeriodSec: 3365.04,
      description: "cease aha because switchboard phew keenly arrogantly husky by phooey",
      throttleRatePerSec: "<value>",
      connectionTimeout: 6749.96,
      writeTimeout: 6372.33,
      onBackpressure: "queue",
      pqStrictOrdering: false,
      pqRatePerSec: 5422.89,
      pqMode: "error",
      pqMaxBufferSize: 8012.68,
      pqMaxBackpressureSec: 2291.48,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "statsd-output",
      type: "statsd",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 5991.44,
      flushPeriodSec: 4591.84,
      dnsResolvePeriodSec: 3365.04,
      description: "cease aha because switchboard phew keenly arrogantly husky by phooey",
      throttleRatePerSec: "<value>",
      connectionTimeout: 6749.96,
      writeTimeout: 6372.33,
      onBackpressure: "queue",
      pqStrictOrdering: false,
      pqRatePerSec: 5422.89,
      pqMode: "error",
      pqMaxBufferSize: 8012.68,
      pqMaxBackpressureSec: 2291.48,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesStatsdExt

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesStatsdExt" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "statsd-ext-output",
      type: "statsd_ext",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 7740.23,
      flushPeriodSec: 6709.51,
      dnsResolvePeriodSec: 7846.18,
      description: "modulo happily until",
      throttleRatePerSec: "<value>",
      connectionTimeout: 3299.87,
      writeTimeout: 7826.19,
      onBackpressure: "queue",
      pqStrictOrdering: false,
      pqRatePerSec: 3702.77,
      pqMode: "backpressure",
      pqMaxBufferSize: 3631.48,
      pqMaxBackpressureSec: 7555.77,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "statsd-ext-output",
      type: "statsd_ext",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 7740.23,
      flushPeriodSec: 6709.51,
      dnsResolvePeriodSec: 7846.18,
      description: "modulo happily until",
      throttleRatePerSec: "<value>",
      connectionTimeout: 3299.87,
      writeTimeout: 7826.19,
      onBackpressure: "queue",
      pqStrictOrdering: false,
      pqRatePerSec: 3702.77,
      pqMode: "backpressure",
      pqMaxBufferSize: 3631.48,
      pqMaxBackpressureSec: 7555.77,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSumoLogic

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSumoLogic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "sumo-logic-output",
      type: "sumo_logic",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "https://endpoint1.collection.us2.sumologic.com",
      customSource: "<value>",
      customCategory: "<value>",
      format: "raw",
      concurrency: 364.5,
      maxPayloadSizeKB: 4390.23,
      maxPayloadEvents: 1698.89,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 5033.43,
      flushPeriodSec: 9926.05,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      totalMemoryLimitKB: 9770.76,
      description: "tasty whereas proofread breakable innocently yet separately",
      pqStrictOrdering: false,
      pqRatePerSec: 6010.23,
      pqMode: "backpressure",
      pqMaxBufferSize: 3253.56,
      pqMaxBackpressureSec: 5698.04,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "sumo-logic-output",
      type: "sumo_logic",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "https://endpoint1.collection.us2.sumologic.com",
      customSource: "<value>",
      customCategory: "<value>",
      format: "raw",
      concurrency: 364.5,
      maxPayloadSizeKB: 4390.23,
      maxPayloadEvents: 1698.89,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 5033.43,
      flushPeriodSec: 9926.05,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      totalMemoryLimitKB: 9770.76,
      description: "tasty whereas proofread breakable innocently yet separately",
      pqStrictOrdering: false,
      pqRatePerSec: 6010.23,
      pqMode: "backpressure",
      pqMaxBufferSize: 3253.56,
      pqMaxBackpressureSec: 5698.04,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSyslog

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesSyslog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "syslog-output",
      type: "syslog",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      protocol: "tcp",
      facility: 3,
      severity: 5,
      appName: "<value>",
      messageFormat: "rfc3164",
      timestampFormat: "iso8601",
      throttleRatePerSec: "<value>",
      octetCountFraming: false,
      logFailedRequests: false,
      description: "sternly meaningfully next banish hypothesise obedient inside lest",
      loadBalanced: true,
      host: "localhost",
      port: 514,
      excludeSelf: true,
      hosts: [
        {
          host: "wicked-bend.com",
          port: 9502.76,
          tls: "off",
          servername: "<value>",
          weight: 1086.4,
        },
      ],
      dnsResolvePeriodSec: 2481.04,
      loadBalanceStatsPeriodSec: 6460.17,
      maxConcurrentSenders: 4936.63,
      connectionTimeout: 4135.93,
      writeTimeout: 5785.19,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "drop",
      maxRecordSize: 8293.42,
      udpDnsResolvePeriodSec: 9163.14,
      enableIpSpoofing: false,
      pqStrictOrdering: true,
      pqRatePerSec: 667.32,
      pqMode: "error",
      pqMaxBufferSize: 2272.28,
      pqMaxBackpressureSec: 3939.53,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "syslog-output",
      type: "syslog",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      protocol: "tcp",
      facility: 3,
      severity: 5,
      appName: "<value>",
      messageFormat: "rfc3164",
      timestampFormat: "iso8601",
      throttleRatePerSec: "<value>",
      octetCountFraming: false,
      logFailedRequests: false,
      description: "sternly meaningfully next banish hypothesise obedient inside lest",
      loadBalanced: true,
      host: "localhost",
      port: 514,
      excludeSelf: true,
      hosts: [
        {
          host: "wicked-bend.com",
          port: 9502.76,
          tls: "off",
          servername: "<value>",
          weight: 1086.4,
        },
      ],
      dnsResolvePeriodSec: 2481.04,
      loadBalanceStatsPeriodSec: 6460.17,
      maxConcurrentSenders: 4936.63,
      connectionTimeout: 4135.93,
      writeTimeout: 5785.19,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "drop",
      maxRecordSize: 8293.42,
      udpDnsResolvePeriodSec: 9163.14,
      enableIpSpoofing: false,
      pqStrictOrdering: true,
      pqRatePerSec: 667.32,
      pqMode: "error",
      pqMaxBufferSize: 2272.28,
      pqMaxBackpressureSec: 3939.53,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesTcpjson

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesTcpjson" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "tcpjson-output",
      type: "tcpjson",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      loadBalanced: false,
      compression: "gzip",
      logFailedRequests: false,
      throttleRatePerSec: "<value>",
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      connectionTimeout: 8617.16,
      writeTimeout: 2926.39,
      tokenTTLMinutes: 4733.74,
      sendHeader: false,
      onBackpressure: "queue",
      authType: "secret",
      description: "querulous bah next",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "wicked-bend.com",
          port: 9502.76,
          tls: "off",
          servername: "<value>",
          weight: 1086.4,
        },
      ],
      dnsResolvePeriodSec: 1462.84,
      loadBalanceStatsPeriodSec: 6447.76,
      maxConcurrentSenders: 2014.57,
      pqStrictOrdering: true,
      pqRatePerSec: 9647.54,
      pqMode: "error",
      pqMaxBufferSize: 8742.12,
      pqMaxBackpressureSec: 8669.78,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "tcpjson-output",
      type: "tcpjson",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      loadBalanced: false,
      compression: "gzip",
      logFailedRequests: false,
      throttleRatePerSec: "<value>",
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      connectionTimeout: 8617.16,
      writeTimeout: 2926.39,
      tokenTTLMinutes: 4733.74,
      sendHeader: false,
      onBackpressure: "queue",
      authType: "secret",
      description: "querulous bah next",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "wicked-bend.com",
          port: 9502.76,
          tls: "off",
          servername: "<value>",
          weight: 1086.4,
        },
      ],
      dnsResolvePeriodSec: 1462.84,
      loadBalanceStatsPeriodSec: 6447.76,
      maxConcurrentSenders: 2014.57,
      pqStrictOrdering: true,
      pqRatePerSec: 9647.54,
      pqMode: "error",
      pqMaxBufferSize: 8742.12,
      pqMaxBackpressureSec: 8669.78,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWavefront

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesWavefront" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "wavefront-output",
      type: "wavefront",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      authType: "secret",
      domain: "longboard",
      concurrency: 509.04,
      maxPayloadSizeKB: 4943.49,
      maxPayloadEvents: 9173.6,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 9649.35,
      flushPeriodSec: 5796.59,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "embarrassment intently restfully modulo hungry briefly once",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4491.58,
      pqMode: "error",
      pqMaxBufferSize: 1729.89,
      pqMaxBackpressureSec: 5336.18,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "wavefront-output",
      type: "wavefront",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      authType: "secret",
      domain: "longboard",
      concurrency: 509.04,
      maxPayloadSizeKB: 4943.49,
      maxPayloadEvents: 9173.6,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 9649.35,
      flushPeriodSec: 5796.59,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "embarrassment intently restfully modulo hungry briefly once",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4491.58,
      pqMode: "error",
      pqMaxBufferSize: 1729.89,
      pqMaxBackpressureSec: 5336.18,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWebhook

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesWebhook" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "webhook-output",
      type: "webhook",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      method: "PATCH",
      format: "advanced",
      keepAlive: true,
      concurrency: 2368.98,
      maxPayloadSizeKB: 4067.71,
      maxPayloadEvents: 6936.29,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 6916.34,
      flushPeriodSec: 7295.65,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "token",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
      totalMemoryLimitKB: 9592.53,
      loadBalanced: false,
      description: "eek duh at surprise so onto fork coexist next finally",
      customSourceExpression: "<value>",
      customDropWhenNull: false,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 3005.07,
      pqMode: "backpressure",
      pqMaxBufferSize: 6540.84,
      pqMaxBackpressureSec: 9318.79,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Madelyn52",
      password: "QYphi9lRLvBDXpF",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://wry-steeple.info",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 4947.56,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      url: "https://example.com/webhook",
      excludeSelf: false,
      urls: [
        {
          url: "https://yellow-grandpa.info",
          weight: 3486.74,
        },
      ],
      dnsResolvePeriodSec: 6654.64,
      loadBalanceStatsPeriodSec: 9071.46,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "webhook-output",
      type: "webhook",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      method: "PATCH",
      format: "advanced",
      keepAlive: true,
      concurrency: 2368.98,
      maxPayloadSizeKB: 4067.71,
      maxPayloadEvents: 6936.29,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 6916.34,
      flushPeriodSec: 7295.65,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      useRoundRobinDns: false,
      failedRequestLoggingMode: "payload",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "token",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
      totalMemoryLimitKB: 9592.53,
      loadBalanced: false,
      description: "eek duh at surprise so onto fork coexist next finally",
      customSourceExpression: "<value>",
      customDropWhenNull: false,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 3005.07,
      pqMode: "backpressure",
      pqMaxBufferSize: 6540.84,
      pqMaxBackpressureSec: 9318.79,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Madelyn52",
      password: "QYphi9lRLvBDXpF",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://wry-steeple.info",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 4947.56,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      url: "https://example.com/webhook",
      excludeSelf: false,
      urls: [
        {
          url: "https://yellow-grandpa.info",
          weight: 3486.74,
        },
      ],
      dnsResolvePeriodSec: 6654.64,
      loadBalanceStatsPeriodSec: 9071.46,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWizHec

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesWizHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "wiz-hec-output",
      type: "wiz_hec",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: true,
      nextQueue: "<value>",
      tcpRouting: "<value>",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
      concurrency: 8831.06,
      maxPayloadSizeKB: 2007.67,
      maxPayloadEvents: 6214.47,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 8398.34,
      flushPeriodSec: 9385.92,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
      ],
      enableMultiMetrics: false,
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
      description: "linseed row phew yum doting nor amongst",
      pqStrictOrdering: true,
      pqRatePerSec: 6434.77,
      pqMode: "error",
      pqMaxBufferSize: 2924.72,
      pqMaxBackpressureSec: 4562.74,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      token: "<value>",
      textSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "wiz-hec-output",
      type: "wiz_hec",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: true,
      nextQueue: "<value>",
      tcpRouting: "<value>",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
      },
      concurrency: 8831.06,
      maxPayloadSizeKB: 2007.67,
      maxPayloadEvents: 6214.47,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 8398.34,
      flushPeriodSec: 9385.92,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
      ],
      enableMultiMetrics: false,
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
      description: "linseed row phew yum doting nor amongst",
      pqStrictOrdering: true,
      pqRatePerSec: 6434.77,
      pqMode: "error",
      pqMaxBufferSize: 2924.72,
      pqMaxBackpressureSec: 4562.74,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      token: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesXsiam

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputCreateExamplesXsiam" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "xsiam-output",
      type: "xsiam",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
      concurrency: 1022.58,
      maxPayloadSizeKB: 9870.63,
      maxPayloadEvents: 9876.5,
      rejectUnauthorized: false,
      timeoutSec: 1059.02,
      flushPeriodSec: 6916.46,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      throttleRateReqPerSec: 823429,
      onBackpressure: "block",
      totalMemoryLimitKB: 2047.74,
      description: "now orange drat",
      url: "https://thorough-steeple.org",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://agile-schnitzel.net/",
          weight: 817.65,
        },
      ],
      dnsResolvePeriodSec: 7805.43,
      loadBalanceStatsPeriodSec: 3964.95,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 2247.43,
      pqMode: "always",
      pqMaxBufferSize: 1439.11,
      pqMaxBackpressureSec: 4291.17,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "xsiam-output",
      type: "xsiam",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
      concurrency: 1022.58,
      maxPayloadSizeKB: 9870.63,
      maxPayloadEvents: 9876.5,
      rejectUnauthorized: false,
      timeoutSec: 1059.02,
      flushPeriodSec: 6916.46,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 3612.5,
          initialBackoff: 2452.56,
          backoffRate: 1370.95,
          maxBackoff: 434.99,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1512.93,
        backoffRate: 7289.7,
        maxBackoff: 7576.49,
      },
      responseHonorRetryAfterHeader: false,
      throttleRateReqPerSec: 823429,
      onBackpressure: "block",
      totalMemoryLimitKB: 2047.74,
      description: "now orange drat",
      url: "https://thorough-steeple.org",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://agile-schnitzel.net/",
          weight: 817.65,
        },
      ],
      dnsResolvePeriodSec: 7805.43,
      loadBalanceStatsPeriodSec: 3964.95,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 2247.43,
      pqMode: "always",
      pqMaxBufferSize: 1439.11,
      pqMaxBackpressureSec: 4291.17,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputExamplesDefault

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" example="OutputExamplesDefault" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.update({
    id: "<id>",
    output: {
      id: "default-output",
      type: "default",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      defaultId: "my-default-output",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsUpdate } from "cribl-control-plane/funcs/destinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsUpdate(criblControlPlane, {
    id: "<id>",
    output: {
      id: "default-output",
      type: "default",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      defaultId: "my-default-output",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateOutputByIdRequest](../../models/operations/updateoutputbyidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedOutput](../../models/countedoutput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Delete the specified Destination.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteOutputById" method="delete" path="/system/outputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.destinations.delete({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { destinationsDelete } from "cribl-control-plane/funcs/destinationsDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await destinationsDelete(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("destinationsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOutputByIdRequest](../../models/operations/deleteoutputbyidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedOutput](../../models/countedoutput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
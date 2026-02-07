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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    containerName: "my-container",
    createContainer: false,
    destPath: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    maxConcurrentFileParts: 1,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    authType: "manual",
    storageClass: "Inferred",
    description: "each before down ouch inexperienced below vaguely celebrated past quizzically",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
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
    __template_containerName: "<value>",
    __template_format: "<value>",
    __template_connectionString: "<value>",
    __template_tenantId: "<id>",
    __template_clientId: "<id>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    containerName: "my-container",
    createContainer: false,
    destPath: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    maxConcurrentFileParts: 1,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    authType: "manual",
    storageClass: "Inferred",
    description: "each before down ouch inexperienced below vaguely celebrated past quizzically",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
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
    __template_containerName: "<value>",
    __template_format: "<value>",
    __template_connectionString: "<value>",
    __template_tenantId: "<id>",
    __template_clientId: "<id>",
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
    description: "rationale fundraising er muffled",
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
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    removeEmptyDirs: true,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterEnabled: false,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    isMappingObj: false,
    mappingObj: "<value>",
    mappingRef: "<value>",
    ingestUrl: "https://precious-transparency.org/",
    onBackpressure: "block",
    stagePath: "$CRIBL_HOME/state/outputs/staging",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    maxConcurrentFileParts: 1,
    onDiskFullBackpressure: "block",
    addIdToStagePath: true,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    timeoutSec: 30,
    flushImmediately: false,
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
        httpStatus: 5522.82,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    flushPeriodSec: 1,
    rejectUnauthorized: true,
    useRoundRobinDns: false,
    keepAlive: true,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_clusterUrl: "https://breakable-backburn.info",
    __template_database: "<value>",
    __template_table: "<value>",
    __template_tenantId: "<id>",
    __template_clientId: "<id>",
    __template_scope: "<value>",
    __template_clientSecret: "<value>",
    __template_format: "<value>",
    __template_ingestUrl: "https://animated-discourse.info/",
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
    description: "rationale fundraising er muffled",
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
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    removeEmptyDirs: true,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterEnabled: false,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    isMappingObj: false,
    mappingObj: "<value>",
    mappingRef: "<value>",
    ingestUrl: "https://precious-transparency.org/",
    onBackpressure: "block",
    stagePath: "$CRIBL_HOME/state/outputs/staging",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    maxConcurrentFileParts: 1,
    onDiskFullBackpressure: "block",
    addIdToStagePath: true,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    timeoutSec: 30,
    flushImmediately: false,
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
        httpStatus: 5522.82,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    flushPeriodSec: 1,
    rejectUnauthorized: true,
    useRoundRobinDns: false,
    keepAlive: true,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_clusterUrl: "https://breakable-backburn.info",
    __template_database: "<value>",
    __template_table: "<value>",
    __template_tenantId: "<id>",
    __template_clientId: "<id>",
    __template_scope: "<value>",
    __template_clientSecret: "<value>",
    __template_format: "<value>",
    __template_ingestUrl: "https://animated-discourse.info/",
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
      "<value 2>",
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
    ack: 1,
    format: "json",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    sasl: {
      disabled: false,
      authType: "manual",
      password: "7VJ9TjHGl3iVy2A",
      textSecret: "<value>",
      mechanism: "plain",
      username: "$ConnectionString",
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
    description: "monthly although strident replacement boo phrase after",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
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
      "<value 2>",
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
    ack: 1,
    format: "json",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    sasl: {
      disabled: false,
      authType: "manual",
      password: "7VJ9TjHGl3iVy2A",
      textSecret: "<value>",
      mechanism: "plain",
      username: "$ConnectionString",
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
    description: "monthly although strident replacement boo phrase after",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    logType: "Cribl",
    resourceId: "<id>",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
    apiUrl: ".ods.opinsights.azure.com",
    responseRetrySettings: [
      {
        httpStatus: 2572.31,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "rival consign pressure",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    workspaceId: "workspace-id",
    workspaceKey: "workspace-key",
    keypairSecret: "<value>",
    __template_workspaceId: "<id>",
    __template_workspaceKey: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    logType: "Cribl",
    resourceId: "<id>",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
    apiUrl: ".ods.opinsights.azure.com",
    responseRetrySettings: [
      {
        httpStatus: 2572.31,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "rival consign pressure",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    workspaceId: "workspace-id",
    workspaceKey: "workspace-key",
    keypairSecret: "<value>",
    __template_workspaceId: "<id>",
    __template_workspaceKey: "<value>",
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
    ],
    apiVersion: "v1alpha",
    authenticationMethod: "serviceAccount",
    responseRetrySettings: [
      {
        httpStatus: 3484.86,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    region: "us",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 90,
    flushPeriodSec: 1,
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
    useRoundRobinDns: false,
    onBackpressure: "block",
    totalMemoryLimitKB: 1733.6,
    ingestionMethod: "ImportLogs",
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
    description: "loyally glider till hunger but ouch gosh geez ick warmly",
    serviceAccountCredentials: "<value>",
    serviceAccountCredentialsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_region: "<value>",
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
    ],
    apiVersion: "v1alpha",
    authenticationMethod: "serviceAccount",
    responseRetrySettings: [
      {
        httpStatus: 3484.86,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    region: "us",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 90,
    flushPeriodSec: 1,
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
    useRoundRobinDns: false,
    onBackpressure: "block",
    totalMemoryLimitKB: 1733.6,
    ingestionMethod: "ImportLogs",
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
    description: "loyally glider till hunger but ouch gosh geez ick warmly",
    serviceAccountCredentials: "<value>",
    serviceAccountCredentialsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_region: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:8123/",
    authType: "none",
    database: "mydb",
    tableName: "mytable",
    format: "json-compact-each-row-with-names",
    mappingType: "automatic",
    asyncInserts: false,
    tls: {
      disabled: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 4759.15,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    dumpFormatErrorsToDisk: false,
    statsDestination: {
      url: "https://fat-packaging.net/",
      database: "<value>",
      tableName: "<value>",
      authType: "<value>",
      username: "Agustin_Cremin87",
      sqlUsername: "<value>",
      password: "A9DUjJtHSnXqh9S",
    },
    onBackpressure: "block",
    description: "whole gah charlatan",
    username: "Mariano16",
    password: "iycsVNWAr4li2p5",
    credentialsSecret: "<value>",
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
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://sticky-granny.net/",
    __template_database: "<value>",
    __template_tableName: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:8123/",
    authType: "none",
    database: "mydb",
    tableName: "mytable",
    format: "json-compact-each-row-with-names",
    mappingType: "automatic",
    asyncInserts: false,
    tls: {
      disabled: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 4759.15,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    dumpFormatErrorsToDisk: false,
    statsDestination: {
      url: "https://fat-packaging.net/",
      database: "<value>",
      tableName: "<value>",
      authType: "<value>",
      username: "Agustin_Cremin87",
      sqlUsername: "<value>",
      password: "A9DUjJtHSnXqh9S",
    },
    onBackpressure: "block",
    description: "whole gah charlatan",
    username: "Mariano16",
    password: "iycsVNWAr4li2p5",
    credentialsSecret: "<value>",
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
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://sticky-granny.net/",
    __template_database: "<value>",
    __template_tableName: "<value>",
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
    ],
    endpoint: "https://account-id.r2.cloudflarestorage.com",
    bucket: "my-bucket",
    awsAuthenticationMethod: "auto",
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
    rejectUnauthorized: true,
    verifyPermissions: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    description: "kiddingly lively provided neatly importance instantly effector",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_format: "<value>",
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
    ],
    endpoint: "https://account-id.r2.cloudflarestorage.com",
    bucket: "my-bucket",
    awsAuthenticationMethod: "auto",
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
    rejectUnauthorized: true,
    verifyPermissions: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    description: "kiddingly lively provided neatly importance instantly effector",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_format: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    logGroupName: "my-log-group",
    logStreamName: "my-log-stream",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    maxQueueSize: 5,
    maxRecordSizeKB: 1024,
    flushPeriodSec: 1,
    onBackpressure: "block",
    description: "often configuration why breastplate ick beside amidst sauerkraut aw",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    logGroupName: "my-log-group",
    logStreamName: "my-log-stream",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    maxQueueSize: 5,
    maxRecordSizeKB: 1024,
    flushPeriodSec: 1,
    onBackpressure: "block",
    description: "often configuration why breastplate ick beside amidst sauerkraut aw",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
      "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
    ],
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    topic: "logs",
    ack: 1,
    format: "json",
    compression: "gzip",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "http://localhost:8081",
      connectionTimeout: 30000,
      requestTimeout: 30000,
      maxRetries: 1,
      auth: {
        disabled: true,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      defaultKeySchemaId: 98.58,
      defaultValueSchemaId: 7633.9,
    },
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    sasl: {
      disabled: true,
      username: "Kim_Fadel",
      password: "2TjsMJ6T9VV12ax",
      authType: "manual",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://gloomy-metal.org/",
      clientId: "<id>",
      oauthSecretType: "secret",
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
    description: "quiet hopelessly outrank blacken reclassify sunbathe institute memorise",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
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
      "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
    ],
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    topic: "logs",
    ack: 1,
    format: "json",
    compression: "gzip",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "http://localhost:8081",
      connectionTimeout: 30000,
      requestTimeout: 30000,
      maxRetries: 1,
      auth: {
        disabled: true,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      defaultKeySchemaId: 98.58,
      defaultValueSchemaId: 7633.9,
    },
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    sasl: {
      disabled: true,
      username: "Kim_Fadel",
      password: "2TjsMJ6T9VV12ax",
      authType: "manual",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://gloomy-metal.org/",
      clientId: "<id>",
      oauthSecretType: "secret",
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
    description: "quiet hopelessly outrank blacken reclassify sunbathe institute memorise",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    loadBalanced: true,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    tokenTTLMinutes: 60,
    excludeFields: [
      "<value 1>",
      "<value 2>",
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
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    throttleRatePerSec: "0",
    responseRetrySettings: [
      {
        httpStatus: 7159.8,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "wherever whoa till splay",
      },
    ],
    onBackpressure: "block",
    description: "castanet lender godparent seldom beyond courageously thankfully easy aha",
    url: "https://zesty-remark.net/",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "https://worldly-pocket-watch.com/",
        weight: 1,
        __template_url: "https://clueless-jellyfish.net/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://low-pacemaker.biz",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    loadBalanced: true,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    tokenTTLMinutes: 60,
    excludeFields: [
      "<value 1>",
      "<value 2>",
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
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    throttleRatePerSec: "0",
    responseRetrySettings: [
      {
        httpStatus: 7159.8,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "wherever whoa till splay",
      },
    ],
    onBackpressure: "block",
    description: "castanet lender godparent seldom beyond courageously thankfully easy aha",
    url: "https://zesty-remark.net/",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "https://worldly-pocket-watch.com/",
        weight: 1,
        __template_url: "https://clueless-jellyfish.net/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://low-pacemaker.biz",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    bucket: "<value>",
    region: "<value>",
    awsSecretKey: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    stagePath: "$CRIBL_HOME/state/outputs/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    objectACL: "private",
    storageClass: "STANDARD_IA",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 64,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 300,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 100,
    awsAuthenticationMethod: "auto",
    format: "json",
    maxConcurrentFileParts: 1,
    description: "amongst round huzzah while direct abaft powerfully",
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_awsSecretKey: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_destPath: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    bucket: "<value>",
    region: "<value>",
    awsSecretKey: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    stagePath: "$CRIBL_HOME/state/outputs/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    objectACL: "private",
    storageClass: "STANDARD_IA",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 64,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 300,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 100,
    awsAuthenticationMethod: "auto",
    format: "json",
    maxConcurrentFileParts: 1,
    description: "amongst round huzzah while direct abaft powerfully",
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_awsSecretKey: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_destPath: "<value>",
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
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.1",
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
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "bob often heating mixture incidentally rewrite cow why",
      },
    ],
    onBackpressure: "block",
    useRoundRobinDns: true,
    description: "flickering equally defensive worth miserably unexpectedly yuck ample",
    url: "https://0.0.0.0:10200",
    excludeSelf: false,
    urls: [
      {
        url: "https://unkempt-travel.net/",
        weight: 1,
        __template_url: "https://timely-sand.org/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://muted-backbone.org",
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
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.1",
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
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "bob often heating mixture incidentally rewrite cow why",
      },
    ],
    onBackpressure: "block",
    useRoundRobinDns: true,
    description: "flickering equally defensive worth miserably unexpectedly yuck ample",
    url: "https://0.0.0.0:10200",
    excludeSelf: false,
    urls: [
      {
        url: "https://unkempt-travel.net/",
        weight: 1,
        __template_url: "https://timely-sand.org/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://muted-backbone.org",
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
    ],
    loadBalanced: true,
    compression: "gzip",
    logFailedRequests: false,
    throttleRatePerSec: "0",
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tokenTTLMinutes: 60,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "uh-huh silver vicinity",
      },
    ],
    excludeFields: [
      "<value 1>",
    ],
    onBackpressure: "block",
    description: "until sashay woot keenly traffic bright lounge information",
    host: "localhost",
    port: 10090,
    excludeSelf: false,
    hosts: [
      {
        host: "tough-issue.info",
        port: 10300,
        tls: "inherit",
        servername: "<value>",
        weight: 1,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    maxConcurrentSenders: 0,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_host: "<value>",
    __template_port: "<value>",
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
    ],
    loadBalanced: true,
    compression: "gzip",
    logFailedRequests: false,
    throttleRatePerSec: "0",
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tokenTTLMinutes: 60,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "uh-huh silver vicinity",
      },
    ],
    excludeFields: [
      "<value 1>",
    ],
    onBackpressure: "block",
    description: "until sashay woot keenly traffic bright lounge information",
    host: "localhost",
    port: 10090,
    excludeSelf: false,
    hosts: [
      {
        host: "tough-issue.info",
        port: 10300,
        tls: "inherit",
        servername: "<value>",
        weight: 1,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    maxConcurrentSenders: 0,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_host: "<value>",
    __template_port: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
    format: "JSON",
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5055.78,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "boohoo near knife soybean besides pish gah alongside",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://squeaky-academics.name/",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
    format: "JSON",
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 5055.78,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "boohoo near knife soybean besides pish gah alongside",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://squeaky-academics.name/",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    destPath: "",
    stagePath: "$CRIBL_HOME/state/outputs/staging",
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    workspaceId: "your-workspace-id",
    scope: "my-scope",
    clientId: "your-client-id",
    catalog: "my-catalog",
    schema: "my-schema",
    eventsVolumeName: "my-volume",
    clientTextSecret: "your-client-secret",
    timeoutSec: 60,
    description: "oof parody ad round verbally across",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_format: "<value>",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    destPath: "",
    stagePath: "$CRIBL_HOME/state/outputs/staging",
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    workspaceId: "your-workspace-id",
    scope: "my-scope",
    clientId: "your-client-id",
    catalog: "my-catalog",
    schema: "my-schema",
    eventsVolumeName: "my-volume",
    clientTextSecret: "your-client-secret",
    timeoutSec: 60,
    description: "oof parody ad round verbally across",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_format: "<value>",
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
      "<value 2>",
    ],
    contentType: "json",
    message: "<value>",
    source: "<value>",
    host: "woeful-ad.net",
    service: "<value>",
    tags: [
      "<value 1>",
      "<value 2>",
    ],
    batchByTags: true,
    allowApiKeyFromEvents: false,
    severity: "warning",
    site: "us",
    sendCountersAsCount: false,
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 6276.58,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "manual",
    totalMemoryLimitKB: 3573.66,
    description: "to midst phooey",
    customUrl: "https://quick-godfather.biz",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
      "<value 2>",
    ],
    contentType: "json",
    message: "<value>",
    source: "<value>",
    host: "woeful-ad.net",
    service: "<value>",
    tags: [
      "<value 1>",
      "<value 2>",
    ],
    batchByTags: true,
    allowApiKeyFromEvents: false,
    severity: "warning",
    site: "us",
    sendCountersAsCount: false,
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 6276.58,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "manual",
    totalMemoryLimitKB: 3573.66,
    description: "to midst phooey",
    customUrl: "https://quick-godfather.biz",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    ],
    messageField: "<value>",
    excludeFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    serverHostField: "<value>",
    timestampField: "<value>",
    defaultSeverity: "info",
    responseRetrySettings: [
      {
        httpStatus: 8426.7,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    site: "us",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
    onBackpressure: "block",
    authType: "manual",
    totalMemoryLimitKB: 8747.36,
    description: "out furthermore ew bludgeon unbearably nocturnal jaggedly midst knight",
    customUrl: "https://educated-turret.net/",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "<value>",
    textSecret: "<value>",
    __template_customUrl: "https://apt-knight.name/",
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
    ],
    messageField: "<value>",
    excludeFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    serverHostField: "<value>",
    timestampField: "<value>",
    defaultSeverity: "info",
    responseRetrySettings: [
      {
        httpStatus: 8426.7,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    site: "us",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
    onBackpressure: "block",
    authType: "manual",
    totalMemoryLimitKB: 8747.36,
    description: "out furthermore ew bludgeon unbearably nocturnal jaggedly midst knight",
    customUrl: "https://educated-turret.net/",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "<value>",
    textSecret: "<value>",
    __template_customUrl: "https://apt-knight.name/",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    timeWindow: "10m",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
    partitionExpr: "<value>",
    description: "blah daintily ah",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    timeWindow: "10m",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
    partitionExpr: "<value>",
    description: "blah daintily ah",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "auto",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "",
    objectACL: "private",
    storageClass: "REDUCED_REDUNDANCY",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 100,
    partitioningFields: [
      "<value 1>",
      "<value 2>",
    ],
    description: "segregate helplessly clinking",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_awsSecretKey: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_format: "<value>",
    __template_awsApiKey: "<value>",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "auto",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "",
    objectACL: "private",
    storageClass: "REDUCED_REDUNDANCY",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 100,
    partitioningFields: [
      "<value 1>",
      "<value 2>",
    ],
    description: "segregate helplessly clinking",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_awsSecretKey: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_format: "<value>",
    __template_awsApiKey: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    method: "POST",
    keepAlive: true,
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 858.14,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "token",
    format: "json_array",
    endpoint: "cloud",
    telemetryType: "logs",
    totalMemoryLimitKB: 2231.72,
    description: "when wry of intently duh harvest unfortunately till intrigue",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    token: "your-api-key",
    textSecret: "<value>",
    environmentId: "<id>",
    activeGateDomain: "<value>",
    url: "https://musty-adaptation.info",
    __template_url: "https://cheap-premise.net",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    method: "POST",
    keepAlive: true,
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 858.14,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "token",
    format: "json_array",
    endpoint: "cloud",
    telemetryType: "logs",
    totalMemoryLimitKB: 2231.72,
    description: "when wry of intently duh harvest unfortunately till intrigue",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    token: "your-api-key",
    textSecret: "<value>",
    environmentId: "<id>",
    activeGateDomain: "<value>",
    url: "https://musty-adaptation.info",
    __template_url: "https://cheap-premise.net",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
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
        key: "",
        value: "<value>",
      },
    ],
    concurrency: 5,
    maxPayloadSizeKB: 2048,
    timeoutSec: 30,
    flushPeriodSec: 1,
    failedRequestLoggingMode: "none",
    connectionTimeout: 10000,
    keepAliveTime: 30,
    keepAlive: true,
    endpointType: "saas",
    tokenSecret: "your-token-secret",
    authTokenName: "Authorization",
    onBackpressure: "block",
    description: "yippee fabricate drat wherever so",
    rejectUnauthorized: true,
    useRoundRobinDns: false,
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
        httpStatus: 8446.48,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    id: "dynatrace-otlp-output",
    type: "dynatrace_otlp",
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
    endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
    otlpVersion: "1.3.1",
    compress: "gzip",
    httpCompress: "gzip",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    concurrency: 5,
    maxPayloadSizeKB: 2048,
    timeoutSec: 30,
    flushPeriodSec: 1,
    failedRequestLoggingMode: "none",
    connectionTimeout: 10000,
    keepAliveTime: 30,
    keepAlive: true,
    endpointType: "saas",
    tokenSecret: "your-token-secret",
    authTokenName: "Authorization",
    onBackpressure: "block",
    description: "yippee fabricate drat wherever so",
    rejectUnauthorized: true,
    useRoundRobinDns: false,
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
        httpStatus: 8446.48,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
      "<value 2>",
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
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
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
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 3353.65,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
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
      username: "Maddison_Willms",
      password: "YjRP4IarMDm7WjU",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticVersion: "auto",
    elasticPipeline: "<value>",
    includeDocId: false,
    writeAction: "create",
    retryPartialErrors: false,
    onBackpressure: "block",
    description: "thoughtfully scope queasily indelible",
    url: "https://bruised-yeast.info/",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "https://needy-hawk.com",
        weight: 1,
        __template_url: "https://multicolored-cannon.biz/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://punctual-mixture.org",
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
      "<value 2>",
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
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
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
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 3353.65,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
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
      username: "Maddison_Willms",
      password: "YjRP4IarMDm7WjU",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticVersion: "auto",
    elasticPipeline: "<value>",
    includeDocId: false,
    writeAction: "create",
    retryPartialErrors: false,
    onBackpressure: "block",
    description: "thoughtfully scope queasily indelible",
    url: "https://bruised-yeast.info/",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "https://needy-hawk.com",
        weight: 1,
        __template_url: "https://multicolored-cannon.biz/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://punctual-mixture.org",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    url: "my-cloud-id",
    index: "logs",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
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
      username: "Maddison_Willms",
      password: "YjRP4IarMDm7WjU",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticPipeline: "<value>",
    includeDocId: true,
    responseRetrySettings: [
      {
        httpStatus: 3400.37,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "upon moor mysteriously incidentally",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
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
      username: "Maddison_Willms",
      password: "YjRP4IarMDm7WjU",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticPipeline: "<value>",
    includeDocId: true,
    responseRetrySettings: [
      {
        httpStatus: 3400.37,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "upon moor mysteriously incidentally",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    bucket: "my-bucket",
    region: "us-east1",
    stagePath: "/tmp/staging",
    endpoint: "https://storage.googleapis.com",
    signatureVersion: "v4",
    objectACL: "private",
    storageClass: "STANDARD",
    reuseConnections: true,
    rejectUnauthorized: true,
    addIdToStagePath: true,
    removeEmptyDirs: true,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileSizeMB: 10,
    encodedConfiguration: "<value>",
    collectorInstanceId: "11112222-3333-4444-5555-666677778888",
    siteName: "<value>",
    siteId: "<id>",
    timezoneOffset: "<value>",
    awsApiKey: "<value>",
    awsSecretKey: "<value>",
    description: "likewise chapel phooey mount nor",
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_region: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    bucket: "my-bucket",
    region: "us-east1",
    stagePath: "/tmp/staging",
    endpoint: "https://storage.googleapis.com",
    signatureVersion: "v4",
    objectACL: "private",
    storageClass: "STANDARD",
    reuseConnections: true,
    rejectUnauthorized: true,
    addIdToStagePath: true,
    removeEmptyDirs: true,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileSizeMB: 10,
    encodedConfiguration: "<value>",
    collectorInstanceId: "11112222-3333-4444-5555-666677778888",
    siteName: "<value>",
    siteId: "<id>",
    timezoneOffset: "<value>",
    awsApiKey: "<value>",
    awsSecretKey: "<value>",
    description: "likewise chapel phooey mount nor",
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_region: "<value>",
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
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    description: "meanwhile victoriously founder because before",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_format: "<value>",
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
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    description: "meanwhile victoriously founder because before",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_format: "<value>",
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
    ],
    apiVersion: "v1",
    authenticationMethod: "serviceAccount",
    responseRetrySettings: [
      {
        httpStatus: 379.55,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    logFormatType: "unstructured",
    region: "us",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 90,
    flushPeriodSec: 1,
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
    useRoundRobinDns: false,
    onBackpressure: "block",
    totalMemoryLimitKB: 3260.96,
    description: "incidentally testify but heartache fooey of",
    extraLogTypes: [
      {
        logType: "<value>",
        description: "jealously qua before obnoxiously",
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
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_apiVersion: "<value>",
    __template_region: "<value>",
    __template_customerId: "<id>",
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
    ],
    apiVersion: "v1",
    authenticationMethod: "serviceAccount",
    responseRetrySettings: [
      {
        httpStatus: 379.55,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    logFormatType: "unstructured",
    region: "us",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 90,
    flushPeriodSec: 1,
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
    useRoundRobinDns: false,
    onBackpressure: "block",
    totalMemoryLimitKB: 3260.96,
    description: "incidentally testify but heartache fooey of",
    extraLogTypes: [
      {
        logType: "<value>",
        description: "jealously qua before obnoxiously",
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
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_apiVersion: "<value>",
    __template_region: "<value>",
    __template_customerId: "<id>",
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
    sanitizeLogNames: false,
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
    googleAuthMethod: "manual",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    flushPeriodSec: 1,
    concurrency: 5,
    connectionTimeout: 10000,
    timeoutSec: 30,
    throttleRateReqPerSec: 208589,
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
    onBackpressure: "block",
    totalMemoryLimitKB: 3307.75,
    description: "apropos amidst steep gee think for lonely snappy council",
    logLocationExpression: "my-project",
    payloadExpression: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    sanitizeLogNames: false,
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
    googleAuthMethod: "manual",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    flushPeriodSec: 1,
    concurrency: 5,
    connectionTimeout: 10000,
    timeoutSec: 30,
    throttleRateReqPerSec: 208589,
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
    onBackpressure: "block",
    totalMemoryLimitKB: 3307.75,
    description: "apropos amidst steep gee think for lonely snappy council",
    logLocationExpression: "my-project",
    payloadExpression: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    bucket: "my-bucket",
    region: "us-east1",
    endpoint: "https://storage.googleapis.com",
    signatureVersion: "v4",
    awsAuthenticationMethod: "manual",
    stagePath: "/tmp/staging",
    destPath: "",
    verifyPermissions: true,
    objectACL: "private",
    storageClass: "ARCHIVE",
    reuseConnections: true,
    rejectUnauthorized: true,
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    description: "dutiful parsnip likewise guard warmhearted lucky spattering despite above",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    awsApiKey: "<value>",
    awsSecretKey: "<value>",
    awsSecret: "<value>",
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_format: "<value>",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    bucket: "my-bucket",
    region: "us-east1",
    endpoint: "https://storage.googleapis.com",
    signatureVersion: "v4",
    awsAuthenticationMethod: "manual",
    stagePath: "/tmp/staging",
    destPath: "",
    verifyPermissions: true,
    objectACL: "private",
    storageClass: "ARCHIVE",
    reuseConnections: true,
    rejectUnauthorized: true,
    addIdToStagePath: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    description: "dutiful parsnip likewise guard warmhearted lucky spattering despite above",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    awsApiKey: "<value>",
    awsSecretKey: "<value>",
    awsSecret: "<value>",
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_format: "<value>",
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
    createTopic: false,
    orderedDelivery: false,
    region: "<value>",
    googleAuthMethod: "manual",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    batchSize: 1000,
    batchTimeout: 100,
    maxQueueSize: 100,
    maxRecordSizeKB: 256,
    flushPeriod: 1,
    maxInProgress: 10,
    onBackpressure: "block",
    description: "gee freezing with beside defrag lieu devastation",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topicName: "<value>",
    __template_region: "<value>",
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
    createTopic: false,
    orderedDelivery: false,
    region: "<value>",
    googleAuthMethod: "manual",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    batchSize: 1000,
    batchTimeout: 100,
    maxQueueSize: 100,
    maxRecordSizeKB: 256,
    flushPeriod: 1,
    maxInProgress: 10,
    onBackpressure: "block",
    description: "gee freezing with beside defrag lieu devastation",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topicName: "<value>",
    __template_region: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    lokiUrl: "https://logs-prod-us-central1.grafana.net",
    prometheusUrl: "https://smoggy-tomb.org/",
    message: "<value>",
    messageFormat: "protobuf",
    labels: [
      {
        name: "",
        value: "<value>",
      },
    ],
    metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
    prometheusAuth: {
      authType: "basic",
      token: "<value>",
      textSecret: "<value>",
      username: "Pete.Cormier97",
      password: "YqqU_9UCy3i_Jit",
      credentialsSecret: "<value>",
    },
    lokiAuth: {
      authType: "basic",
      token: "<value>",
      textSecret: "<value>",
      username: "Dayton.Kunde",
      password: "tn2vY0ufsrH9vj_",
      credentialsSecret: "<value>",
    },
    concurrency: 1,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 15,
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
        httpStatus: 8105.6,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "lace frantically ha forceful underneath times yum partially",
    compress: true,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_lokiUrl: "https://deadly-sundae.biz/",
    __template_prometheusUrl: "https://distorted-outset.biz/",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    lokiUrl: "https://logs-prod-us-central1.grafana.net",
    prometheusUrl: "https://smoggy-tomb.org/",
    message: "<value>",
    messageFormat: "protobuf",
    labels: [
      {
        name: "",
        value: "<value>",
      },
    ],
    metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
    prometheusAuth: {
      authType: "basic",
      token: "<value>",
      textSecret: "<value>",
      username: "Pete.Cormier97",
      password: "YqqU_9UCy3i_Jit",
      credentialsSecret: "<value>",
    },
    lokiAuth: {
      authType: "basic",
      token: "<value>",
      textSecret: "<value>",
      username: "Dayton.Kunde",
      password: "tn2vY0ufsrH9vj_",
      credentialsSecret: "<value>",
    },
    concurrency: 1,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 15,
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
        httpStatus: 8105.6,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "lace frantically ha forceful underneath times yum partially",
    compress: true,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_lokiUrl: "https://deadly-sundae.biz/",
    __template_prometheusUrl: "https://distorted-outset.biz/",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    protocol: "tcp",
    host: "localhost",
    port: 2003,
    mtu: 512,
    flushPeriodSec: 1,
    dnsResolvePeriodSec: 0,
    description: "pfft term towards",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    onBackpressure: "block",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    id: "graphite-output",
    type: "graphite",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    protocol: "tcp",
    host: "localhost",
    port: 2003,
    mtu: 512,
    flushPeriodSec: 1,
    dnsResolvePeriodSec: 0,
    description: "pfft term towards",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    onBackpressure: "block",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    dataset: "my-dataset",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 7702.22,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "between yum than lawful morning thoroughly compromise lost negligible",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    dataset: "my-dataset",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 7702.22,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "between yum than lawful morning thoroughly compromise lost negligible",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
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
      "<value 2>",
    ],
    url: "https://cloud.us.humio.com/api/v1/ingest/hec",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
    format: "JSON",
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 9520.58,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "gadzooks jubilantly over silk switch huzzah",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://other-interchange.org",
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
      "<value 2>",
    ],
    url: "https://cloud.us.humio.com/api/v1/ingest/hec",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
    format: "JSON",
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 9520.58,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "gadzooks jubilantly over silk switch huzzah",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://other-interchange.org",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    url: "http://localhost:8086",
    useV2API: false,
    timestampPrecision: "ms",
    dynamicValueFieldName: true,
    valueFieldName: "value",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 786.03,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "none",
    description: "terrorise spook meh towards mysteriously",
    database: "mydb",
    bucket: "<value>",
    org: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    username: "Mariane_Schneider28",
    password: "z3FVqSY2GquoGXg",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    __template_url: "https://growing-declaration.net/",
    __template_database: "<value>",
    __template_bucket: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    url: "http://localhost:8086",
    useV2API: false,
    timestampPrecision: "ms",
    dynamicValueFieldName: true,
    valueFieldName: "value",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 786.03,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "none",
    description: "terrorise spook meh towards mysteriously",
    database: "mydb",
    bucket: "<value>",
    org: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    username: "Mariane_Schneider28",
    password: "z3FVqSY2GquoGXg",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    __template_url: "https://growing-declaration.net/",
    __template_database: "<value>",
    __template_bucket: "<value>",
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
    ack: 1,
    format: "json",
    compression: "gzip",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "http://localhost:8081",
      connectionTimeout: 30000,
      requestTimeout: 30000,
      maxRetries: 1,
      auth: {
        disabled: true,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      defaultKeySchemaId: 98.58,
      defaultValueSchemaId: 7633.9,
    },
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    sasl: {
      disabled: true,
      username: "Kim_Fadel",
      password: "2TjsMJ6T9VV12ax",
      authType: "manual",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://gloomy-metal.org/",
      clientId: "<id>",
      oauthSecretType: "secret",
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
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    onBackpressure: "block",
    description: "unimpressively firm late under shirk loftily till",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
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
    ack: 1,
    format: "json",
    compression: "gzip",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "http://localhost:8081",
      connectionTimeout: 30000,
      requestTimeout: 30000,
      maxRetries: 1,
      auth: {
        disabled: true,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      defaultKeySchemaId: 98.58,
      defaultValueSchemaId: 7633.9,
    },
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    sasl: {
      disabled: true,
      username: "Kim_Fadel",
      password: "2TjsMJ6T9VV12ax",
      authType: "manual",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://gloomy-metal.org/",
      clientId: "<id>",
      oauthSecretType: "secret",
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
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    onBackpressure: "block",
    description: "unimpressively firm late under shirk loftily till",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    streamName: "my-stream",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    concurrency: 5,
    maxRecordSizeKB: 1024,
    flushPeriodSec: 1,
    compression: "gzip",
    useListShards: false,
    asNdjson: true,
    onBackpressure: "block",
    description: "negotiation ad to eek about phew",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    maxEventsPerFlush: 500,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_streamName: "<value>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    streamName: "my-stream",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    concurrency: 5,
    maxRecordSizeKB: 1024,
    flushPeriodSec: 1,
    compression: "gzip",
    useListShards: false,
    asNdjson: true,
    onBackpressure: "block",
    description: "negotiation ad to eek about phew",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    maxEventsPerFlush: 500,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_streamName: "<value>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
    ],
    url: "http://localhost:3100/loki/api/v1/push",
    message: "<value>",
    messageFormat: "protobuf",
    labels: [
      {
        name: "",
        value: "<value>",
      },
    ],
    authType: "none",
    concurrency: 1,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 15,
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
        httpStatus: 3434.64,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    enableDynamicHeaders: false,
    onBackpressure: "block",
    totalMemoryLimitKB: 9877.1,
    description: "hospitable hence adjudge",
    compress: true,
    token: "<value>",
    textSecret: "<value>",
    username: "Magdalena_Zulauf-Kuhlman8",
    password: "IqSYjCmovUFcOZH",
    credentialsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    ],
    url: "http://localhost:3100/loki/api/v1/push",
    message: "<value>",
    messageFormat: "protobuf",
    labels: [
      {
        name: "",
        value: "<value>",
      },
    ],
    authType: "none",
    concurrency: 1,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 15,
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
        httpStatus: 3434.64,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    enableDynamicHeaders: false,
    onBackpressure: "block",
    totalMemoryLimitKB: 9877.1,
    description: "hospitable hence adjudge",
    compress: true,
    token: "<value>",
    textSecret: "<value>",
    username: "Magdalena_Zulauf-Kuhlman8",
    password: "IqSYjCmovUFcOZH",
    credentialsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    ],
    topic: "logs",
    ack: 1,
    format: "json",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    sasl: {
      disabled: false,
      mechanism: "plain",
      username: "$ConnectionString",
      textSecret: "<value>",
      clientSecretAuthType: "secret",
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
    bootstrap_server: "myeventstream.servicebus.windows.net:9093",
    description: "testimonial woot ingratiate clearly",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
    __template_bootstrap_server: "<value>",
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
    ],
    topic: "logs",
    ack: 1,
    format: "json",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    sasl: {
      disabled: false,
      mechanism: "plain",
      username: "$ConnectionString",
      textSecret: "<value>",
      clientSecretAuthType: "secret",
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
    bootstrap_server: "myeventstream.servicebus.windows.net:9093",
    description: "testimonial woot ingratiate clearly",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
    __template_bootstrap_server: "<value>",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    endpoint: "http://localhost:9000",
    bucket: "my-bucket",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    signatureVersion: "v4",
    objectACL: "private",
    storageClass: "STANDARD",
    serverSideEncryption: "AES256",
    reuseConnections: true,
    rejectUnauthorized: true,
    verifyPermissions: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    description: "supposing instead elegantly explode slope tasty direct what",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_format: "<value>",
    __template_awsApiKey: "<value>",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    endpoint: "http://localhost:9000",
    bucket: "my-bucket",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "<value>",
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "<value>",
    signatureVersion: "v4",
    objectACL: "private",
    storageClass: "STANDARD",
    serverSideEncryption: "AES256",
    reuseConnections: true,
    rejectUnauthorized: true,
    verifyPermissions: true,
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    description: "supposing instead elegantly explode slope tasty direct what",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_format: "<value>",
    __template_awsApiKey: "<value>",
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
    format: "json",
    compression: "gzip",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "http://localhost:8081",
      connectionTimeout: 30000,
      requestTimeout: 30000,
      maxRetries: 1,
      auth: {
        disabled: true,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      defaultKeySchemaId: 98.58,
      defaultValueSchemaId: 7633.9,
    },
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    onBackpressure: "block",
    description: "redevelop consequently for",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
    format: "json",
    compression: "gzip",
    maxRecordSizeKB: 768,
    flushEventCount: 1000,
    flushPeriodSec: 1,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "http://localhost:8081",
      connectionTimeout: 30000,
      requestTimeout: 30000,
      maxRetries: 1,
      auth: {
        disabled: true,
        credentialsSecret: "<value>",
      },
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      defaultKeySchemaId: 98.58,
      defaultValueSchemaId: 7633.9,
    },
    connectionTimeout: 10000,
    requestTimeout: 60000,
    maxRetries: 5,
    maxBackOff: 30000,
    initialBackoff: 300,
    backoffRate: 2,
    authenticationTimeout: 10000,
    reauthenticationThreshold: 10000,
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    onBackpressure: "block",
    description: "redevelop consequently for",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    protobufLibraryId: "<id>",
    protobufEncodingId: "<id>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_topic: "<value>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    hosts: [
      {
        host: "localhost",
        port: 2055,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 0,
    enableIpSpoofing: false,
    description: "allegation and helplessly knowingly never per excluding angrily finally uncork",
    maxRecordSize: 1500,
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    hosts: [
      {
        host: "localhost",
        port: 2055,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 0,
    enableIpSpoofing: false,
    description: "allegation and helplessly knowingly never per excluding angrily finally uncork",
    maxRecordSize: 1500,
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
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    region: "US",
    logType: "",
    messageField: "",
    metadata: [
      {
        name: "auditId",
        value: "<value>",
      },
    ],
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 1966.78,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "manual",
    totalMemoryLimitKB: 6526.58,
    description: "whoa cycle furthermore but",
    customUrl: "https://puny-governance.biz/",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
    __template_region: "<value>",
    __template_logType: "<value>",
    __template_messageField: "<value>",
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
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    region: "US",
    logType: "",
    messageField: "",
    metadata: [
      {
        name: "auditId",
        value: "<value>",
      },
    ],
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 1966.78,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "manual",
    totalMemoryLimitKB: 6526.58,
    description: "whoa cycle furthermore but",
    customUrl: "https://puny-governance.biz/",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
    __template_region: "<value>",
    __template_logType: "<value>",
    __template_messageField: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    region: "US",
    accountId: "123456",
    eventType: "CriblEvent",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 3594.47,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "utilization sensitize whose hydrocarbon within innocently ouch er officially appertain",
    customUrl: "https://appropriate-dependency.name",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
    __template_region: "<value>",
    __template_accountId: "<id>",
    __template_eventType: "<value>",
    __template_customUrl: "https://fluffy-diver.name",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    region: "US",
    accountId: "123456",
    eventType: "CriblEvent",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 3594.47,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "utilization sensitize whose hydrocarbon within innocently ouch er officially appertain",
    customUrl: "https://appropriate-dependency.name",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    apiKey: "your-api-key",
    textSecret: "<value>",
    __template_region: "<value>",
    __template_accountId: "<id>",
    __template_eventType: "<value>",
    __template_customUrl: "https://fluffy-diver.name",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    protocol: "grpc",
    endpoint: "http://localhost:4317",
    otlpVersion: "0.10.0",
    compress: "gzip",
    httpCompress: "gzip",
    authType: "none",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    timeoutSec: 30,
    flushPeriodSec: 1,
    failedRequestLoggingMode: "none",
    connectionTimeout: 10000,
    keepAliveTime: 30,
    keepAlive: true,
    onBackpressure: "block",
    description: "next sermon whenever",
    username: "Jerod7",
    password: "HeFGuNo6pe5ewNs",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    rejectUnauthorized: true,
    useRoundRobinDns: false,
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
        httpStatus: 1858.11,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1",
    },
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    protocol: "grpc",
    endpoint: "http://localhost:4317",
    otlpVersion: "0.10.0",
    compress: "gzip",
    httpCompress: "gzip",
    authType: "none",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    timeoutSec: 30,
    flushPeriodSec: 1,
    failedRequestLoggingMode: "none",
    connectionTimeout: 10000,
    keepAliveTime: 30,
    keepAlive: true,
    onBackpressure: "block",
    description: "next sermon whenever",
    username: "Jerod7",
    password: "HeFGuNo6pe5ewNs",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    rejectUnauthorized: true,
    useRoundRobinDns: false,
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
        httpStatus: 1858.11,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1",
    },
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:9091/api/v1/write",
    metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
    sendMetadata: true,
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
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 516.48,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "none",
    description: "forenenst without which brief fuzzy gah",
    metricsFlushPeriodSec: 60,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    username: "Isac38",
    password: "zMoVVLUWpStIVEr",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    __template_url: "https://gloomy-marten.net/",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    url: "http://localhost:9091/api/v1/write",
    metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
    sendMetadata: true,
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
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 516.48,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "none",
    description: "forenenst without which brief fuzzy gah",
    metricsFlushPeriodSec: 60,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    username: "Isac38",
    password: "zMoVVLUWpStIVEr",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    __template_url: "https://gloomy-marten.net/",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    format: "json",
    partitionExpr: "<value>",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
    destPath: "<value>",
    onBackpressure: "block",
    description: "bolster woot athwart",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    format: "json",
    partitionExpr: "<value>",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
    destPath: "<value>",
    onBackpressure: "block",
    description: "bolster woot athwart",
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
        description: "lasting uh-huh weatherize consequently joyous beloved",
        final: true,
      },
    ],
    description: "boom kiddingly moral",
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
        description: "lasting uh-huh weatherize consequently joyous beloved",
        final: true,
      },
    ],
    description: "boom kiddingly moral",
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
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "auto",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "",
    objectACL: "private",
    storageClass: "STANDARD",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 100,
    description: "cross-contamination upside-down above",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_awsSecretKey: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_format: "<value>",
    __template_awsApiKey: "<value>",
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
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    bucket: "my-bucket",
    region: "us-east-1",
    awsSecretKey: "<value>",
    awsAuthenticationMethod: "auto",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    destPath: "",
    objectACL: "private",
    storageClass: "STANDARD",
    serverSideEncryption: "aws:kms",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
    format: "json",
    baseFileName: "`CriblOut`",
    fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 100,
    description: "cross-contamination upside-down above",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    compress: "gzip",
    compressionLevel: "best_speed",
    automaticSchema: false,
    parquetSchema: "<value>",
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: false,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_awsSecretKey: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_format: "<value>",
    __template_awsApiKey: "<value>",
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
      "<value 2>",
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
    awsAuthenticationMethod: "auto",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    objectACL: "private",
    storageClass: "INTELLIGENT_TIERING",
    serverSideEncryption: "AES256",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    baseFileName: "`CriblOut`",
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 100,
    accountId: "123456789012",
    customSource: "my-custom-source",
    automaticSchema: false,
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    description: "crowded furthermore editor lovable confound which",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    parquetSchema: "<value>",
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_awsSecretKey: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
      "<value 2>",
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
    awsAuthenticationMethod: "auto",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    stagePath: "/tmp/staging",
    addIdToStagePath: true,
    objectACL: "private",
    storageClass: "INTELLIGENT_TIERING",
    serverSideEncryption: "AES256",
    kmsKeyId: "<id>",
    removeEmptyDirs: true,
    baseFileName: "`CriblOut`",
    maxFileSizeMB: 32,
    maxOpenFiles: 100,
    headerLine: "",
    writeHighWaterMark: 64,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    forceCloseOnShutdown: false,
    retrySettings: {
      enabled: false,
      initialBackoffMs: 861.22,
      backoffMultiplier: 588.22,
      maxBackoffMs: 3391.17,
      jitterPercent: 650.52,
    },
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxConcurrentFileParts: 4,
    verifyPermissions: true,
    maxClosingFilesToBackpressure: 100,
    accountId: "123456789012",
    customSource: "my-custom-source",
    automaticSchema: false,
    parquetVersion: "PARQUET_2_6",
    parquetDataPageVersion: "DATA_PAGE_V2",
    parquetRowGroupLength: 10000,
    parquetPageSize: "1MB",
    shouldLogInvalidRows: true,
    keyValueMetadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    enableStatistics: true,
    enableWritePageIndex: true,
    enablePageChecksum: false,
    description: "crowded furthermore editor lovable confound which",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    emptyDirCleanupSec: 300,
    directoryBatchSize: 1000,
    parquetSchema: "<value>",
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
    __template_bucket: "<value>",
    __template_region: "<value>",
    __template_awsSecretKey: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    keepAlive: true,
    concurrency: 5,
    maxPayloadSizeKB: 1000,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 4485.56,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "oauth",
    loginUrl: "https://login.microsoftonline.com",
    secret: "client-secret",
    client_id: "client-id",
    scope: "https://monitor.azure.com/.default",
    endpointURLConfiguration: "url",
    totalMemoryLimitKB: 4955.04,
    description: "instantly yuck hmph yet uh-huh outfit whistle given though yum",
    format: "ndjson",
    customSourceExpression: "__httpOut",
    customDropWhenNull: false,
    customEventDelimiter: "\\n",
    customContentType: "application/x-ndjson",
    customPayloadExpression: "`${events}`",
    advancedContentType: "application/json",
    formatEventCode: "<value>",
    formatPayloadCode: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    url: "https://your-workspace.ingest.monitor.azure.com",
    dcrID: "<id>",
    dceEndpoint: "<value>",
    streamName: "<value>",
    __template_loginUrl: "https://sophisticated-alert.com",
    __template_secret: "<value>",
    __template_client_id: "<id>",
    __template_scope: "<value>",
    __template_url: "https://reasonable-swine.info/",
    __template_dcrID: "<id>",
    __template_dceEndpoint: "<value>",
    __template_streamName: "<value>",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    keepAlive: true,
    concurrency: 5,
    maxPayloadSizeKB: 1000,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 4485.56,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "oauth",
    loginUrl: "https://login.microsoftonline.com",
    secret: "client-secret",
    client_id: "client-id",
    scope: "https://monitor.azure.com/.default",
    endpointURLConfiguration: "url",
    totalMemoryLimitKB: 4955.04,
    description: "instantly yuck hmph yet uh-huh outfit whistle given though yum",
    format: "ndjson",
    customSourceExpression: "__httpOut",
    customDropWhenNull: false,
    customEventDelimiter: "\\n",
    customContentType: "application/x-ndjson",
    customPayloadExpression: "`${events}`",
    advancedContentType: "application/json",
    formatEventCode: "<value>",
    formatPayloadCode: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    url: "https://your-workspace.ingest.monitor.azure.com",
    dcrID: "<id>",
    dceEndpoint: "<value>",
    streamName: "<value>",
    __template_loginUrl: "https://sophisticated-alert.com",
    __template_secret: "<value>",
    __template_client_id: "<id>",
    __template_scope: "<value>",
    __template_url: "https://reasonable-swine.info/",
    __template_dcrID: "<id>",
    __template_dceEndpoint: "<value>",
    __template_streamName: "<value>",
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
    concurrency: 5,
    maxPayloadSizeKB: 5120,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 5,
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
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 9304.93,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "towards joyfully woot with basket pace cassava for mobilize",
    token: "<value>",
    textSecret: "<value>",
    baseUrl: "https://<Your-S1-Tenant>.sentinelone.net",
    hostExpression: "__e.host || C.os.hostname()",
    sourceExpression: "__e.source || (__e.__criblMetrics ? 'metrics' : 'cribl')",
    sourceTypeExpression: "__e.sourcetype || 'dottedJson'",
    dataSourceCategoryExpression: "'security'",
    dataSourceNameExpression: "__e.__dataSourceName || 'cribl'",
    dataSourceVendorExpression: "__e.__dataSourceVendor || 'cribl'",
    eventTypeExpression: "",
    host: "C.os.hostname()",
    source: "cribl",
    sourceType: "hecRawParser",
    dataSourceCategory: "security",
    dataSourceName: "cribl",
    dataSourceVendor: "cribl",
    eventType: "",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    concurrency: 5,
    maxPayloadSizeKB: 5120,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 5,
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
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 9304.93,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "towards joyfully woot with basket pace cassava for mobilize",
    token: "<value>",
    textSecret: "<value>",
    baseUrl: "https://<Your-S1-Tenant>.sentinelone.net",
    hostExpression: "__e.host || C.os.hostname()",
    sourceExpression: "__e.source || (__e.__criblMetrics ? 'metrics' : 'cribl')",
    sourceTypeExpression: "__e.sourcetype || 'dottedJson'",
    dataSourceCategoryExpression: "'security'",
    dataSourceNameExpression: "__e.__dataSourceName || 'cribl'",
    dataSourceVendorExpression: "__e.__dataSourceVendor || 'cribl'",
    eventTypeExpression: "",
    host: "C.os.hostname()",
    source: "cribl",
    sourceType: "hecRawParser",
    dataSourceCategory: "security",
    dataSourceName: "cribl",
    dataSourceVendor: "cribl",
    eventType: "",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    authTokenName: "lightstep-access-token",
    otlpVersion: "1.3.1",
    maxPayloadSizeKB: 2048,
    protocol: "http",
    compress: "gzip",
    httpCompress: "gzip",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    concurrency: 5,
    timeoutSec: 30,
    flushPeriodSec: 1,
    failedRequestLoggingMode: "none",
    connectionTimeout: 10000,
    keepAliveTime: 30,
    keepAlive: true,
    onBackpressure: "block",
    description: "carefully almost per midst fleck daintily gruesome once bleach",
    rejectUnauthorized: true,
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
        httpStatus: 781.29,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1",
    },
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    authTokenName: "lightstep-access-token",
    otlpVersion: "1.3.1",
    maxPayloadSizeKB: 2048,
    protocol: "http",
    compress: "gzip",
    httpCompress: "gzip",
    httpTracesEndpointOverride: "<value>",
    httpMetricsEndpointOverride: "<value>",
    httpLogsEndpointOverride: "<value>",
    metadata: [
      {
        key: "",
        value: "<value>",
      },
    ],
    concurrency: 5,
    timeoutSec: 30,
    flushPeriodSec: 1,
    failedRequestLoggingMode: "none",
    connectionTimeout: 10000,
    keepAliveTime: 30,
    keepAlive: true,
    onBackpressure: "block",
    description: "carefully almost per midst fleck daintily gruesome once bleach",
    rejectUnauthorized: true,
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
        httpStatus: 781.29,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1",
    },
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    authType: "manual",
    realm: "us0",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 7111.85,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "cautious fairly needily guzzle",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    id: "signalfx-output",
    type: "signalfx",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    authType: "manual",
    realm: "us0",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 7111.85,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "cautious fairly needily guzzle",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    hosts: [
      {
        host: "192.168.1.1",
        port: 161,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 0,
    description: "um but pfft mmm an qua",
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
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    hosts: [
      {
        host: "192.168.1.1",
        port: 161,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 0,
    description: "um but pfft mmm an qua",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
    messageGroupId: "my-message-group",
    maxRetries: 7880.99,
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    onBackpressure: "block",
    description: "switchboard smuggle decision and whose truthfully clueless",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
    messageGroupId: "my-message-group",
    maxRetries: 7880.99,
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    onBackpressure: "block",
    description: "switchboard smuggle decision and whose truthfully clueless",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
    ],
    host: "localhost",
    port: 9997,
    nestedFields: "none",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    enableMultiMetrics: false,
    enableACK: true,
    logFailedRequests: false,
    maxS2Sversion: "v3",
    onBackpressure: "block",
    authType: "manual",
    description: "arrange authentic phew scramble tenderly highlight pleasure lest",
    maxFailedHealthChecks: 1,
    compress: "disabled",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
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
    ],
    host: "localhost",
    port: 9997,
    nestedFields: "none",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    enableMultiMetrics: false,
    enableACK: true,
    logFailedRequests: false,
    maxS2Sversion: "v3",
    onBackpressure: "block",
    authType: "manual",
    description: "arrange authentic phew scramble tenderly highlight pleasure lest",
    maxFailedHealthChecks: 1,
    compress: "disabled",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
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
      "<value 2>",
    ],
    loadBalanced: true,
    nextQueue: "indexQueue",
    tcpRouting: "nowhere",
    tls: {
      disabled: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
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
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    enableMultiMetrics: false,
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 1179.71,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "stuff fluctuate grim meanwhile",
    url: "http://localhost:8088/services/collector/event",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "http://localhost:8088/services/collector/event",
        weight: 1,
        __template_url: "https://fat-packaging.net/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    token: "<value>",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://simple-circumference.org/",
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
      "<value 2>",
    ],
    loadBalanced: true,
    nextQueue: "indexQueue",
    tcpRouting: "nowhere",
    tls: {
      disabled: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
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
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    enableMultiMetrics: false,
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 1179.71,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "stuff fluctuate grim meanwhile",
    url: "http://localhost:8088/services/collector/event",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "http://localhost:8088/services/collector/event",
        weight: 1,
        __template_url: "https://fat-packaging.net/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    token: "<value>",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://simple-circumference.org/",
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
      "<value 2>",
      "<value 3>",
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    maxConcurrentSenders: 0,
    nestedFields: "none",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    enableMultiMetrics: false,
    enableACK: true,
    logFailedRequests: false,
    maxS2Sversion: "v3",
    onBackpressure: "block",
    indexerDiscovery: false,
    senderUnhealthyTimeAllowance: 100,
    authType: "manual",
    description: "besides spice questionable how",
    maxFailedHealthChecks: 1,
    compress: "disabled",
    indexerDiscoveryConfigs: {
      site: "default",
      masterUri: "https://slimy-supplier.info/",
      refreshIntervalSec: 300,
      rejectUnauthorized: false,
      authTokens: [
        {
          authType: "manual",
          authToken: "",
          textSecret: "<value>",
        },
      ],
      authType: "manual",
      authToken: "",
      textSecret: "<value>",
    },
    excludeSelf: false,
    hosts: [
      {
        host: "localhost",
        port: 9997,
        tls: "inherit",
        servername: "<value>",
        weight: 1,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "",
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
      "<value 2>",
      "<value 3>",
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    maxConcurrentSenders: 0,
    nestedFields: "none",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    enableMultiMetrics: false,
    enableACK: true,
    logFailedRequests: false,
    maxS2Sversion: "v3",
    onBackpressure: "block",
    indexerDiscovery: false,
    senderUnhealthyTimeAllowance: 100,
    authType: "manual",
    description: "besides spice questionable how",
    maxFailedHealthChecks: 1,
    compress: "disabled",
    indexerDiscoveryConfigs: {
      site: "default",
      masterUri: "https://slimy-supplier.info/",
      refreshIntervalSec: 300,
      rejectUnauthorized: false,
      authTokens: [
        {
          authType: "manual",
          authToken: "",
          textSecret: "<value>",
        },
      ],
      authType: "manual",
      authToken: "",
      textSecret: "<value>",
    },
    excludeSelf: false,
    hosts: [
      {
        host: "localhost",
        port: 9997,
        tls: "inherit",
        servername: "<value>",
        weight: 1,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "",
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
    ],
    queueName: "my-queue",
    queueType: "standard",
    awsAccountId: "<id>",
    messageGroupId: "cribl",
    createQueue: true,
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    maxQueueSize: 100,
    maxRecordSizeKB: 256,
    flushPeriodSec: 1,
    maxInProgress: 10,
    onBackpressure: "block",
    description: "abaft consequently upon shinny yowza why slake",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_queueName: "<value>",
    __template_awsAccountId: "<id>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
    ],
    queueName: "my-queue",
    queueType: "standard",
    awsAccountId: "<id>",
    messageGroupId: "cribl",
    createQueue: true,
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    maxQueueSize: 100,
    maxRecordSizeKB: 256,
    flushPeriodSec: 1,
    maxInProgress: 10,
    onBackpressure: "block",
    description: "abaft consequently upon shinny yowza why slake",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_queueName: "<value>",
    __template_awsAccountId: "<id>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
    __template_awsApiKey: "<value>",
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
    ],
    protocol: "udp",
    host: "localhost",
    port: 8125,
    mtu: 512,
    flushPeriodSec: 1,
    dnsResolvePeriodSec: 0,
    description: "browse longingly tame regarding pendant playfully orchestrate",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    onBackpressure: "block",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    ],
    protocol: "udp",
    host: "localhost",
    port: 8125,
    mtu: 512,
    flushPeriodSec: 1,
    dnsResolvePeriodSec: 0,
    description: "browse longingly tame regarding pendant playfully orchestrate",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    onBackpressure: "block",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    protocol: "udp",
    host: "localhost",
    port: 8125,
    mtu: 512,
    flushPeriodSec: 1,
    dnsResolvePeriodSec: 0,
    description: "after with wafer collaboration",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    onBackpressure: "block",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    id: "statsd-ext-output",
    type: "statsd_ext",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    protocol: "udp",
    host: "localhost",
    port: 8125,
    mtu: 512,
    flushPeriodSec: 1,
    dnsResolvePeriodSec: 0,
    description: "after with wafer collaboration",
    throttleRatePerSec: "0",
    connectionTimeout: 10000,
    writeTimeout: 60000,
    onBackpressure: "block",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    format: "json",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 8295.69,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    totalMemoryLimitKB: 7368.99,
    description: "jovially mmm but zebra phew deform",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://profuse-decryption.biz",
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
    format: "json",
    concurrency: 5,
    maxPayloadSizeKB: 1024,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 8295.69,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    totalMemoryLimitKB: 7368.99,
    description: "jovially mmm but zebra phew deform",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://profuse-decryption.biz",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    protocol: "tcp",
    facility: 1,
    severity: 5,
    appName: "Cribl",
    messageFormat: "rfc3164",
    timestampFormat: "syslog",
    throttleRatePerSec: "0",
    octetCountFraming: true,
    logFailedRequests: false,
    description: "drat consequently restfully distorted phooey overconfidently",
    loadBalanced: true,
    host: "localhost",
    port: 514,
    excludeSelf: false,
    hosts: [
      {
        host: "separate-blossom.biz",
        port: 8854.36,
        tls: "inherit",
        servername: "<value>",
        weight: 1,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    maxConcurrentSenders: 0,
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    onBackpressure: "block",
    maxRecordSize: 1500,
    udpDnsResolvePeriodSec: 0,
    enableIpSpoofing: false,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_host: "<value>",
    __template_port: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    protocol: "tcp",
    facility: 1,
    severity: 5,
    appName: "Cribl",
    messageFormat: "rfc3164",
    timestampFormat: "syslog",
    throttleRatePerSec: "0",
    octetCountFraming: true,
    logFailedRequests: false,
    description: "drat consequently restfully distorted phooey overconfidently",
    loadBalanced: true,
    host: "localhost",
    port: 514,
    excludeSelf: false,
    hosts: [
      {
        host: "separate-blossom.biz",
        port: 8854.36,
        tls: "inherit",
        servername: "<value>",
        weight: 1,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    maxConcurrentSenders: 0,
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    onBackpressure: "block",
    maxRecordSize: 1500,
    udpDnsResolvePeriodSec: 0,
    enableIpSpoofing: false,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_host: "<value>",
    __template_port: "<value>",
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
    loadBalanced: true,
    compression: "gzip",
    logFailedRequests: false,
    throttleRatePerSec: "0",
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tokenTTLMinutes: 60,
    sendHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "hourly about into",
    host: "localhost",
    port: 10090,
    excludeSelf: false,
    hosts: [
      {
        host: "chilly-exterior.net",
        port: 6458.17,
        tls: "inherit",
        servername: "<value>",
        weight: 1,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    maxConcurrentSenders: 0,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
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
    loadBalanced: true,
    compression: "gzip",
    logFailedRequests: false,
    throttleRatePerSec: "0",
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.2",
    },
    connectionTimeout: 10000,
    writeTimeout: 60000,
    tokenTTLMinutes: 60,
    sendHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "hourly about into",
    host: "localhost",
    port: 10090,
    excludeSelf: false,
    hosts: [
      {
        host: "chilly-exterior.net",
        port: 6458.17,
        tls: "inherit",
        servername: "<value>",
        weight: 1,
        __template_host: "<value>",
        __template_port: "<value>",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    maxConcurrentSenders: 0,
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    authToken: "",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    authType: "manual",
    domain: "longboard",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 6928.76,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "excepting fooey solace spear",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
    id: "wavefront-output",
    type: "wavefront",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    authType: "manual",
    domain: "longboard",
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 6928.76,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    description: "excepting fooey solace spear",
    token: "your-token",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
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
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    method: "POST",
    format: "ndjson",
    keepAlive: true,
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 4167.91,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "none",
    tls: {
      disabled: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    totalMemoryLimitKB: 1305.29,
    loadBalanced: false,
    description: "breakable hospitable override hmph presell",
    customSourceExpression: "__httpOut",
    customDropWhenNull: false,
    customEventDelimiter: "\\n",
    customContentType: "application/x-ndjson",
    customPayloadExpression: "`${events}`",
    advancedContentType: "application/json",
    formatEventCode: "<value>",
    formatPayloadCode: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    username: "Janiya_Dietrich",
    password: "QSmMfe0g6BQ_7dP",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://neglected-suspension.net/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "`Bearer ${token}`",
    tokenTimeoutSecs: 3600,
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
        url: "https://second-hand-apparatus.info",
        weight: 1,
        __template_url: "https://unfit-grandson.biz/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    __template_loginUrl: "https://scented-chiffonier.net",
    __template_secret: "<value>",
    __template_url: "https://grown-video.name/",
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
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    method: "POST",
    format: "ndjson",
    keepAlive: true,
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 30,
    flushPeriodSec: 1,
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
        httpStatus: 4167.91,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    authType: "none",
    tls: {
      disabled: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    totalMemoryLimitKB: 1305.29,
    loadBalanced: false,
    description: "breakable hospitable override hmph presell",
    customSourceExpression: "__httpOut",
    customDropWhenNull: false,
    customEventDelimiter: "\\n",
    customContentType: "application/x-ndjson",
    customPayloadExpression: "`${events}`",
    advancedContentType: "application/json",
    formatEventCode: "<value>",
    formatPayloadCode: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    username: "Janiya_Dietrich",
    password: "QSmMfe0g6BQ_7dP",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://neglected-suspension.net/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "`Bearer ${token}`",
    tokenTimeoutSecs: 3600,
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
        url: "https://second-hand-apparatus.info",
        weight: 1,
        __template_url: "https://unfit-grandson.biz/",
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    __template_loginUrl: "https://scented-chiffonier.net",
    __template_secret: "<value>",
    __template_url: "https://grown-video.name/",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    loadBalanced: true,
    nextQueue: "indexQueue",
    tcpRouting: "nowhere",
    tls: {
      disabled: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
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
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    enableMultiMetrics: false,
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 7295.73,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    wiz_connector_id: "00000000-0000-0000-0000-000000000000",
    wiz_environment: "test",
    data_center: "us1",
    wiz_sourcetype: "placeholder",
    description: "hourly about into",
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
    __template_wiz_environment: "<value>",
    __template_data_center: "<value>",
    __template_wiz_sourcetype: "<value>",
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
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    loadBalanced: true,
    nextQueue: "indexQueue",
    tcpRouting: "nowhere",
    tls: {
      disabled: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    concurrency: 5,
    maxPayloadSizeKB: 4096,
    maxPayloadEvents: 0,
    compress: true,
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
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    enableMultiMetrics: false,
    authType: "manual",
    responseRetrySettings: [
      {
        httpStatus: 7295.73,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    wiz_connector_id: "00000000-0000-0000-0000-000000000000",
    wiz_environment: "test",
    data_center: "us1",
    wiz_sourcetype: "placeholder",
    description: "hourly about into",
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
    __template_wiz_environment: "<value>",
    __template_data_center: "<value>",
    __template_wiz_sourcetype: "<value>",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    loadBalanced: false,
    concurrency: 5,
    maxPayloadSizeKB: 9500,
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
    safeHeaders: [
      "<value 1>",
    ],
    authType: "token",
    responseRetrySettings: [
      {
        httpStatus: 8977.97,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    throttleRateReqPerSec: 400,
    onBackpressure: "block",
    totalMemoryLimitKB: 1079.49,
    description: "norm ragged glaring",
    url: "http://localhost:8088/logs/v1/event",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "https://kooky-wilderness.biz",
        weight: 1,
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    token: "<value>",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://unkempt-travel.net/",
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
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    loadBalanced: false,
    concurrency: 5,
    maxPayloadSizeKB: 9500,
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
    safeHeaders: [
      "<value 1>",
    ],
    authType: "token",
    responseRetrySettings: [
      {
        httpStatus: 8977.97,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
    ],
    timeoutRetrySettings: {
      timeoutRetry: false,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
    responseHonorRetryAfterHeader: true,
    throttleRateReqPerSec: 400,
    onBackpressure: "block",
    totalMemoryLimitKB: 1079.49,
    description: "norm ragged glaring",
    url: "http://localhost:8088/logs/v1/event",
    useRoundRobinDns: false,
    excludeSelf: false,
    urls: [
      {
        url: "https://kooky-wilderness.biz",
        weight: 1,
      },
    ],
    dnsResolvePeriodSec: 600,
    loadBalanceStatsPeriodSec: 300,
    token: "<value>",
    textSecret: "<value>",
    pqStrictOrdering: true,
    pqRatePerSec: 0,
    pqMode: "error",
    pqMaxBufferSize: 42,
    pqMaxBackpressureSec: 30,
    pqMaxFileSize: "1 MB",
    pqMaxSize: "5GB",
    pqPath: "$CRIBL_HOME/state/queues",
    pqCompress: "none",
    pqOnBackpressure: "block",
    pqControls: {},
    __template_url: "https://unkempt-travel.net/",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      containerName: "my-container",
      createContainer: false,
      destPath: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      maxConcurrentFileParts: 1,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      authType: "manual",
      storageClass: "Inferred",
      description: "practical adumbrate by",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
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
      __template_containerName: "<value>",
      __template_format: "<value>",
      __template_connectionString: "<value>",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      containerName: "my-container",
      createContainer: false,
      destPath: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      maxConcurrentFileParts: 1,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      authType: "manual",
      storageClass: "Inferred",
      description: "practical adumbrate by",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
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
      __template_containerName: "<value>",
      __template_format: "<value>",
      __template_connectionString: "<value>",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
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
        "<value 2>",
        "<value 3>",
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
      description: "oof pace once",
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
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      removeEmptyDirs: true,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterEnabled: false,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      isMappingObj: false,
      mappingObj: "<value>",
      mappingRef: "<value>",
      ingestUrl: "https://competent-nephew.name",
      onBackpressure: "block",
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      maxConcurrentFileParts: 1,
      onDiskFullBackpressure: "block",
      addIdToStagePath: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      timeoutSec: 30,
      flushImmediately: false,
      retainBlobOnSuccess: false,
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
          httpStatus: 4119.46,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      flushPeriodSec: 1,
      rejectUnauthorized: true,
      useRoundRobinDns: false,
      keepAlive: true,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_clusterUrl: "https://exotic-championship.com/",
      __template_database: "<value>",
      __template_table: "<value>",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_scope: "<value>",
      __template_clientSecret: "<value>",
      __template_format: "<value>",
      __template_ingestUrl: "https://critical-range.net",
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
        "<value 2>",
        "<value 3>",
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
      description: "oof pace once",
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
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      removeEmptyDirs: true,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterEnabled: false,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      isMappingObj: false,
      mappingObj: "<value>",
      mappingRef: "<value>",
      ingestUrl: "https://competent-nephew.name",
      onBackpressure: "block",
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      maxConcurrentFileParts: 1,
      onDiskFullBackpressure: "block",
      addIdToStagePath: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      timeoutSec: 30,
      flushImmediately: false,
      retainBlobOnSuccess: false,
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
          httpStatus: 4119.46,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      flushPeriodSec: 1,
      rejectUnauthorized: true,
      useRoundRobinDns: false,
      keepAlive: true,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_clusterUrl: "https://exotic-championship.com/",
      __template_database: "<value>",
      __template_table: "<value>",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_scope: "<value>",
      __template_clientSecret: "<value>",
      __template_format: "<value>",
      __template_ingestUrl: "https://critical-range.net",
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
      ],
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: false,
        authType: "manual",
        password: "l4UiMzAymhgS2bu",
        textSecret: "<value>",
        mechanism: "plain",
        username: "$ConnectionString",
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
      description: "over excluding knowingly energetically incidentally given",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
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
      ],
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: false,
        authType: "manual",
        password: "l4UiMzAymhgS2bu",
        textSecret: "<value>",
        mechanism: "plain",
        username: "$ConnectionString",
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
      description: "over excluding knowingly energetically incidentally given",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
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
      ],
      logType: "Cribl",
      resourceId: "<id>",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
      apiUrl: ".ods.opinsights.azure.com",
      responseRetrySettings: [
        {
          httpStatus: 6460.17,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "critical under even beyond condense diligently",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      workspaceId: "workspace-id",
      workspaceKey: "workspace-key",
      keypairSecret: "<value>",
      __template_workspaceId: "<id>",
      __template_workspaceKey: "<value>",
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
      ],
      logType: "Cribl",
      resourceId: "<id>",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
      apiUrl: ".ods.opinsights.azure.com",
      responseRetrySettings: [
        {
          httpStatus: 6460.17,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "critical under even beyond condense diligently",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      workspaceId: "workspace-id",
      workspaceKey: "workspace-key",
      keypairSecret: "<value>",
      __template_workspaceId: "<id>",
      __template_workspaceKey: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      apiVersion: "v1alpha",
      authenticationMethod: "serviceAccount",
      responseRetrySettings: [
        {
          httpStatus: 4457.03,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      region: "us",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 90,
      flushPeriodSec: 1,
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
      useRoundRobinDns: false,
      onBackpressure: "block",
      totalMemoryLimitKB: 1999.04,
      ingestionMethod: "ImportLogs",
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
      description: "pleasant waist cease aha because switchboard phew keenly arrogantly husky",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_region: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      apiVersion: "v1alpha",
      authenticationMethod: "serviceAccount",
      responseRetrySettings: [
        {
          httpStatus: 4457.03,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      region: "us",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 90,
      flushPeriodSec: 1,
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
      useRoundRobinDns: false,
      onBackpressure: "block",
      totalMemoryLimitKB: 1999.04,
      ingestionMethod: "ImportLogs",
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
      description: "pleasant waist cease aha because switchboard phew keenly arrogantly husky",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_region: "<value>",
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
      authType: "none",
      database: "mydb",
      tableName: "mytable",
      format: "json-compact-each-row-with-names",
      mappingType: "automatic",
      asyncInserts: false,
      tls: {
        disabled: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 5472.53,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      dumpFormatErrorsToDisk: false,
      statsDestination: {
        url: "https://proud-blowgun.biz/",
        database: "<value>",
        tableName: "<value>",
        authType: "<value>",
        username: "Jaclyn.Champlin36",
        sqlUsername: "<value>",
        password: "fhOYWNIwx4mmq1W",
      },
      onBackpressure: "block",
      description: "forenenst capitalise around",
      username: "Herminia.Botsford",
      password: "uO_AIsmUCJ5I1i2",
      credentialsSecret: "<value>",
      sqlUsername: "<value>",
      waitForAsyncInserts: true,
      excludeMappingFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://quarrelsome-slime.name",
      __template_database: "<value>",
      __template_tableName: "<value>",
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
      authType: "none",
      database: "mydb",
      tableName: "mytable",
      format: "json-compact-each-row-with-names",
      mappingType: "automatic",
      asyncInserts: false,
      tls: {
        disabled: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 5472.53,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      dumpFormatErrorsToDisk: false,
      statsDestination: {
        url: "https://proud-blowgun.biz/",
        database: "<value>",
        tableName: "<value>",
        authType: "<value>",
        username: "Jaclyn.Champlin36",
        sqlUsername: "<value>",
        password: "fhOYWNIwx4mmq1W",
      },
      onBackpressure: "block",
      description: "forenenst capitalise around",
      username: "Herminia.Botsford",
      password: "uO_AIsmUCJ5I1i2",
      credentialsSecret: "<value>",
      sqlUsername: "<value>",
      waitForAsyncInserts: true,
      excludeMappingFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://quarrelsome-slime.name",
      __template_database: "<value>",
      __template_tableName: "<value>",
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
      addIdToStagePath: true,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "<value>",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: true,
      verifyPermissions: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      description: "whenever beret quirkily certainly cruelty well-documented poorly inject throughout",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_format: "<value>",
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
      addIdToStagePath: true,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "<value>",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: true,
      verifyPermissions: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      description: "whenever beret quirkily certainly cruelty well-documented poorly inject throughout",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_format: "<value>",
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
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      maxQueueSize: 5,
      maxRecordSizeKB: 1024,
      flushPeriodSec: 1,
      onBackpressure: "block",
      description: "hubris gray materialise aboard content ick self-assured cleaner imagineer",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      maxQueueSize: 5,
      maxRecordSizeKB: 1024,
      flushPeriodSec: 1,
      onBackpressure: "block",
      description: "hubris gray materialise aboard content ick self-assured cleaner imagineer",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
        "<value 3>",
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
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      topic: "logs",
      ack: 1,
      format: "json",
      compression: "gzip",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "http://localhost:8081",
        connectionTimeout: 30000,
        requestTimeout: 30000,
        maxRetries: 1,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
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
          maxVersion: "TLSv1.2",
        },
        defaultKeySchemaId: 2571.24,
        defaultValueSchemaId: 4603.74,
      },
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: true,
        username: "Beverly93",
        password: "iNd6FlpDEbKPe_d",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://smooth-conservative.com",
        clientId: "<id>",
        oauthSecretType: "secret",
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
      description: "until scientific since properly massage and",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
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
        "<value 3>",
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
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      topic: "logs",
      ack: 1,
      format: "json",
      compression: "gzip",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "http://localhost:8081",
        connectionTimeout: 30000,
        requestTimeout: 30000,
        maxRetries: 1,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
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
          maxVersion: "TLSv1.2",
        },
        defaultKeySchemaId: 2571.24,
        defaultValueSchemaId: 4603.74,
      },
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: true,
        username: "Beverly93",
        password: "iNd6FlpDEbKPe_d",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://smooth-conservative.com",
        clientId: "<id>",
        oauthSecretType: "secret",
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
      description: "until scientific since properly massage and",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
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
        maxVersion: "TLSv1.2",
      },
      tokenTTLMinutes: 60,
      excludeFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      throttleRatePerSec: "0",
      responseRetrySettings: [
        {
          httpStatus: 3673.51,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "fabricate focalise calmly per outside aside astride known lumpy",
        },
      ],
      onBackpressure: "block",
      description: "unique filthy irresponsible wherever lawful an settle unlike",
      url: "https://tidy-beret.biz",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://weird-finer.net",
          weight: 1,
          __template_url: "https://adolescent-sprinkles.biz/",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://focused-quinoa.info",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
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
        maxVersion: "TLSv1.2",
      },
      tokenTTLMinutes: 60,
      excludeFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      throttleRatePerSec: "0",
      responseRetrySettings: [
        {
          httpStatus: 3673.51,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "fabricate focalise calmly per outside aside astride known lumpy",
        },
      ],
      onBackpressure: "block",
      description: "unique filthy irresponsible wherever lawful an settle unlike",
      url: "https://tidy-beret.biz",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://weird-finer.net",
          weight: 1,
          __template_url: "https://adolescent-sprinkles.biz/",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://focused-quinoa.info",
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
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      objectACL: "private",
      storageClass: "DEEP_ARCHIVE",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 64,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 300,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 100,
      awsAuthenticationMethod: "auto",
      format: "ddss",
      maxConcurrentFileParts: 1,
      description: "mad mmm bitterly ah overwork mysterious instead miskey",
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_awsSecretKey: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_destPath: "<value>",
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
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      objectACL: "private",
      storageClass: "DEEP_ARCHIVE",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 64,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 300,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 100,
      awsAuthenticationMethod: "auto",
      format: "ddss",
      maxConcurrentFileParts: 1,
      description: "mad mmm bitterly ah overwork mysterious instead miskey",
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_awsSecretKey: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_destPath: "<value>",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.2",
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
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "developmental yum tomatillo",
        },
      ],
      onBackpressure: "block",
      useRoundRobinDns: true,
      description: "contradict unless busy for concerned buck grandiose dreamily what solder",
      url: "https://0.0.0.0:10200",
      excludeSelf: false,
      urls: [
        {
          url: "https://short-term-ectoderm.net/",
          weight: 1,
          __template_url: "https://dull-mainstream.org",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://burdensome-discourse.com/",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.2",
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
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "developmental yum tomatillo",
        },
      ],
      onBackpressure: "block",
      useRoundRobinDns: true,
      description: "contradict unless busy for concerned buck grandiose dreamily what solder",
      url: "https://0.0.0.0:10200",
      excludeSelf: false,
      urls: [
        {
          url: "https://short-term-ectoderm.net/",
          weight: 1,
          __template_url: "https://dull-mainstream.org",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://burdensome-discourse.com/",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
      compression: "gzip",
      logFailedRequests: false,
      throttleRatePerSec: "0",
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
        maxVersion: "TLSv1.2",
      },
      connectionTimeout: 10000,
      writeTimeout: 60000,
      tokenTTLMinutes: 60,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "unless zowie unbearably throughout oh brr solemnly",
        },
      ],
      excludeFields: [
        "<value 1>",
        "<value 2>",
      ],
      onBackpressure: "block",
      description: "pace primary nor tomography once",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "tough-colonialism.info",
          port: 10300,
          tls: "inherit",
          servername: "<value>",
          weight: 1,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      maxConcurrentSenders: 0,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_host: "<value>",
      __template_port: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
      compression: "gzip",
      logFailedRequests: false,
      throttleRatePerSec: "0",
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
        maxVersion: "TLSv1.2",
      },
      connectionTimeout: 10000,
      writeTimeout: 60000,
      tokenTTLMinutes: 60,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "unless zowie unbearably throughout oh brr solemnly",
        },
      ],
      excludeFields: [
        "<value 1>",
        "<value 2>",
      ],
      onBackpressure: "block",
      description: "pace primary nor tomography once",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "tough-colonialism.info",
          port: 10300,
          tls: "inherit",
          servername: "<value>",
          weight: 1,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      maxConcurrentSenders: 0,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_host: "<value>",
      __template_port: "<value>",
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
      ],
      url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 1023.69,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "yesterday connect whose",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://quiet-riser.org/",
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
      ],
      url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 1023.69,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "yesterday connect whose",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://quiet-riser.org/",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      destPath: "",
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      addIdToStagePath: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
      timeoutSec: 60,
      description: "aw yowza instead",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_format: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      destPath: "",
      stagePath: "$CRIBL_HOME/state/outputs/staging",
      addIdToStagePath: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
      timeoutSec: 60,
      description: "aw yowza instead",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_format: "<value>",
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
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      contentType: "json",
      message: "<value>",
      source: "<value>",
      host: "weighty-release.net",
      service: "<value>",
      tags: [
        "<value 1>",
      ],
      batchByTags: true,
      allowApiKeyFromEvents: false,
      severity: "info",
      site: "us",
      sendCountersAsCount: false,
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 3412.47,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "manual",
      totalMemoryLimitKB: 230.7,
      description: "yippee what during put that pish uselessly although wherever declaration",
      customUrl: "https://stingy-guide.name/",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
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
      id: "datadog-output",
      type: "datadog",
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
      contentType: "json",
      message: "<value>",
      source: "<value>",
      host: "weighty-release.net",
      service: "<value>",
      tags: [
        "<value 1>",
      ],
      batchByTags: true,
      allowApiKeyFromEvents: false,
      severity: "info",
      site: "us",
      sendCountersAsCount: false,
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 3412.47,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "manual",
      totalMemoryLimitKB: 230.7,
      description: "yippee what during put that pish uselessly although wherever declaration",
      customUrl: "https://stingy-guide.name/",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      messageField: "<value>",
      excludeFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      serverHostField: "<value>",
      timestampField: "<value>",
      defaultSeverity: "info",
      responseRetrySettings: [
        {
          httpStatus: 5952.63,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      site: "us",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
      onBackpressure: "block",
      authType: "manual",
      totalMemoryLimitKB: 1088.03,
      description: "apropos gosh overvalue than handful fully leading yuck portray",
      customUrl: "https://blue-forage.info",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "<value>",
      textSecret: "<value>",
      __template_customUrl: "https://sleepy-cassava.org/",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      messageField: "<value>",
      excludeFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      serverHostField: "<value>",
      timestampField: "<value>",
      defaultSeverity: "info",
      responseRetrySettings: [
        {
          httpStatus: 5952.63,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      site: "us",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
      onBackpressure: "block",
      authType: "manual",
      totalMemoryLimitKB: 1088.03,
      description: "apropos gosh overvalue than handful fully leading yuck portray",
      customUrl: "https://blue-forage.info",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "<value>",
      textSecret: "<value>",
      __template_customUrl: "https://sleepy-cassava.org/",
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
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      partitionExpr: "<value>",
      description: "along between embed into declaration boastfully though verbally platter",
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
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      partitionExpr: "<value>",
      description: "along between embed into declaration boastfully though verbally platter",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "auto",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "",
      objectACL: "private",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 100,
      partitioningFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      description: "whenever mash ugh reasoning premier healthily",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_awsSecretKey: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_format: "<value>",
      __template_awsApiKey: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "auto",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "",
      objectACL: "private",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 100,
      partitioningFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      description: "whenever mash ugh reasoning premier healthily",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_awsSecretKey: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_format: "<value>",
      __template_awsApiKey: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      method: "POST",
      keepAlive: true,
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 8416.09,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      totalMemoryLimitKB: 6599.51,
      description: "uh-huh retract excluding",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      token: "your-api-key",
      textSecret: "<value>",
      environmentId: "<id>",
      activeGateDomain: "<value>",
      url: "https://yummy-resource.name/",
      __template_url: "https://timely-mountain.info",
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
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      method: "POST",
      keepAlive: true,
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 8416.09,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      totalMemoryLimitKB: 6599.51,
      description: "uh-huh retract excluding",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      token: "your-api-key",
      textSecret: "<value>",
      environmentId: "<id>",
      activeGateDomain: "<value>",
      url: "https://yummy-resource.name/",
      __template_url: "https://timely-mountain.info",
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
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
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
          key: "",
          value: "<value>",
        },
      ],
      concurrency: 5,
      maxPayloadSizeKB: 2048,
      timeoutSec: 30,
      flushPeriodSec: 1,
      failedRequestLoggingMode: "none",
      connectionTimeout: 10000,
      keepAliveTime: 30,
      keepAlive: true,
      endpointType: "saas",
      tokenSecret: "your-token-secret",
      authTokenName: "Authorization",
      onBackpressure: "block",
      description: "tinderbox now until than appreciate nervously aching seafood",
      rejectUnauthorized: true,
      useRoundRobinDns: false,
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
          httpStatus: 7970.31,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      id: "dynatrace-otlp-output",
      type: "dynatrace_otlp",
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
          key: "",
          value: "<value>",
        },
      ],
      concurrency: 5,
      maxPayloadSizeKB: 2048,
      timeoutSec: 30,
      flushPeriodSec: 1,
      failedRequestLoggingMode: "none",
      connectionTimeout: 10000,
      keepAliveTime: 30,
      keepAlive: true,
      endpointType: "saas",
      tokenSecret: "your-token-secret",
      authTokenName: "Authorization",
      onBackpressure: "block",
      description: "tinderbox now until than appreciate nervously aching seafood",
      rejectUnauthorized: true,
      useRoundRobinDns: false,
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
          httpStatus: 7970.31,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      ],
      loadBalanced: true,
      index: "logs",
      docType: "<value>",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
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
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 5469.02,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
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
        username: "Timmothy.Morar",
        password: "lCK4OFBNamsTS5U",
        authType: "manual",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticVersion: "auto",
      elasticPipeline: "<value>",
      includeDocId: false,
      writeAction: "create",
      retryPartialErrors: false,
      onBackpressure: "block",
      description: "save along larva quantify forearm drat physically",
      url: "https://alert-fort.info/",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://first-bourgeoisie.biz",
          weight: 1,
          __template_url: "https://accomplished-cuckoo.net",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://thin-other.biz",
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
      ],
      loadBalanced: true,
      index: "logs",
      docType: "<value>",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
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
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 5469.02,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
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
        username: "Timmothy.Morar",
        password: "lCK4OFBNamsTS5U",
        authType: "manual",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticVersion: "auto",
      elasticPipeline: "<value>",
      includeDocId: false,
      writeAction: "create",
      retryPartialErrors: false,
      onBackpressure: "block",
      description: "save along larva quantify forearm drat physically",
      url: "https://alert-fort.info/",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://first-bourgeoisie.biz",
          weight: 1,
          __template_url: "https://accomplished-cuckoo.net",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://thin-other.biz",
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
      ],
      url: "my-cloud-id",
      index: "logs",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
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
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: true,
        username: "Timmothy.Morar",
        password: "lCK4OFBNamsTS5U",
        authType: "manual",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticPipeline: "<value>",
      includeDocId: true,
      responseRetrySettings: [
        {
          httpStatus: 6701.64,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "gadzooks quaintly jet unearth",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      id: "elastic-cloud-output",
      type: "elastic_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      url: "my-cloud-id",
      index: "logs",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
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
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: true,
        username: "Timmothy.Morar",
        password: "lCK4OFBNamsTS5U",
        authType: "manual",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticPipeline: "<value>",
      includeDocId: true,
      responseRetrySettings: [
        {
          httpStatus: 6701.64,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "gadzooks quaintly jet unearth",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      signatureVersion: "v4",
      objectACL: "private",
      storageClass: "STANDARD",
      reuseConnections: true,
      rejectUnauthorized: true,
      addIdToStagePath: true,
      removeEmptyDirs: true,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileSizeMB: 10,
      encodedConfiguration: "<value>",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
      siteName: "<value>",
      siteId: "<id>",
      timezoneOffset: "<value>",
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      description: "brr despite even er woefully regarding",
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_region: "<value>",
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
      signatureVersion: "v4",
      objectACL: "private",
      storageClass: "STANDARD",
      reuseConnections: true,
      rejectUnauthorized: true,
      addIdToStagePath: true,
      removeEmptyDirs: true,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileSizeMB: 10,
      encodedConfiguration: "<value>",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
      siteName: "<value>",
      siteId: "<id>",
      timezoneOffset: "<value>",
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      description: "brr despite even er woefully regarding",
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_region: "<value>",
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
        "<value 2>",
      ],
      destPath: "/var/log/output",
      stagePath: "<value>",
      addIdToStagePath: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      description: "luck ah ski",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_format: "<value>",
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
        "<value 2>",
      ],
      destPath: "/var/log/output",
      stagePath: "<value>",
      addIdToStagePath: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      description: "luck ah ski",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_format: "<value>",
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
      apiVersion: "v1",
      authenticationMethod: "serviceAccount",
      responseRetrySettings: [
        {
          httpStatus: 1271.28,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      logFormatType: "unstructured",
      region: "us",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 90,
      flushPeriodSec: 1,
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
      onBackpressure: "block",
      totalMemoryLimitKB: 304.57,
      description: "fooey safely ah tuba nervous sans whoever at invite",
      extraLogTypes: [
        {
          logType: "<value>",
          description: "busy for concerned buck grandiose dreamily what solder",
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
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_apiVersion: "<value>",
      __template_region: "<value>",
      __template_customerId: "<id>",
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
      apiVersion: "v1",
      authenticationMethod: "serviceAccount",
      responseRetrySettings: [
        {
          httpStatus: 1271.28,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      logFormatType: "unstructured",
      region: "us",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 90,
      flushPeriodSec: 1,
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
      onBackpressure: "block",
      totalMemoryLimitKB: 304.57,
      description: "fooey safely ah tuba nervous sans whoever at invite",
      extraLogTypes: [
        {
          logType: "<value>",
          description: "busy for concerned buck grandiose dreamily what solder",
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
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_apiVersion: "<value>",
      __template_region: "<value>",
      __template_customerId: "<id>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      logLocationType: "project",
      logNameExpression: "my-log",
      sanitizeLogNames: false,
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
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      flushPeriodSec: 1,
      concurrency: 5,
      connectionTimeout: 10000,
      timeoutSec: 30,
      throttleRateReqPerSec: 829528,
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
      onBackpressure: "block",
      totalMemoryLimitKB: 527.61,
      description: "meanwhile boo beneficial below positively huzzah fully anxiously",
      logLocationExpression: "my-project",
      payloadExpression: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      id: "google-cloud-logging-output",
      type: "google_cloud_logging",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      logLocationType: "project",
      logNameExpression: "my-log",
      sanitizeLogNames: false,
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
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      flushPeriodSec: 1,
      concurrency: 5,
      connectionTimeout: 10000,
      timeoutSec: 30,
      throttleRateReqPerSec: 829528,
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
      onBackpressure: "block",
      totalMemoryLimitKB: 527.61,
      description: "meanwhile boo beneficial below positively huzzah fully anxiously",
      logLocationExpression: "my-project",
      payloadExpression: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v4",
      awsAuthenticationMethod: "manual",
      stagePath: "/tmp/staging",
      destPath: "",
      verifyPermissions: true,
      objectACL: "private",
      storageClass: "ARCHIVE",
      reuseConnections: true,
      rejectUnauthorized: true,
      addIdToStagePath: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      description: "ew sarong cumbersome",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      awsSecret: "<value>",
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_format: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v4",
      awsAuthenticationMethod: "manual",
      stagePath: "/tmp/staging",
      destPath: "",
      verifyPermissions: true,
      objectACL: "private",
      storageClass: "ARCHIVE",
      reuseConnections: true,
      rejectUnauthorized: true,
      addIdToStagePath: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      description: "ew sarong cumbersome",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      awsSecret: "<value>",
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_format: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      topicName: "my-topic",
      createTopic: false,
      orderedDelivery: false,
      region: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      batchSize: 1000,
      batchTimeout: 100,
      maxQueueSize: 100,
      maxRecordSizeKB: 256,
      flushPeriod: 1,
      maxInProgress: 10,
      onBackpressure: "block",
      description: "although worth reckon",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topicName: "<value>",
      __template_region: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      topicName: "my-topic",
      createTopic: false,
      orderedDelivery: false,
      region: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      batchSize: 1000,
      batchTimeout: 100,
      maxQueueSize: 100,
      maxRecordSizeKB: 256,
      flushPeriod: 1,
      maxInProgress: 10,
      onBackpressure: "block",
      description: "although worth reckon",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topicName: "<value>",
      __template_region: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
      prometheusUrl: "https://jubilant-disclosure.org",
      message: "<value>",
      messageFormat: "protobuf",
      labels: [
        {
          name: "",
          value: "<value>",
        },
      ],
      metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
      prometheusAuth: {
        authType: "basic",
        token: "<value>",
        textSecret: "<value>",
        username: "Flo.Koelpin",
        password: "WalxTm654qjkLiW",
        credentialsSecret: "<value>",
      },
      lokiAuth: {
        authType: "basic",
        token: "<value>",
        textSecret: "<value>",
        username: "Alda_MacGyver88",
        password: "s0xBReXekhrDqCh",
        credentialsSecret: "<value>",
      },
      concurrency: 1,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 15,
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
          httpStatus: 8961.65,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "unlike crumble circulate materialise",
      compress: true,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_lokiUrl: "https://firsthand-straw.name",
      __template_prometheusUrl: "https://grandiose-technologist.com",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
      prometheusUrl: "https://jubilant-disclosure.org",
      message: "<value>",
      messageFormat: "protobuf",
      labels: [
        {
          name: "",
          value: "<value>",
        },
      ],
      metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
      prometheusAuth: {
        authType: "basic",
        token: "<value>",
        textSecret: "<value>",
        username: "Flo.Koelpin",
        password: "WalxTm654qjkLiW",
        credentialsSecret: "<value>",
      },
      lokiAuth: {
        authType: "basic",
        token: "<value>",
        textSecret: "<value>",
        username: "Alda_MacGyver88",
        password: "s0xBReXekhrDqCh",
        credentialsSecret: "<value>",
      },
      concurrency: 1,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 15,
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
          httpStatus: 8961.65,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "unlike crumble circulate materialise",
      compress: true,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_lokiUrl: "https://firsthand-straw.name",
      __template_prometheusUrl: "https://grandiose-technologist.com",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      protocol: "tcp",
      host: "localhost",
      port: 2003,
      mtu: 512,
      flushPeriodSec: 1,
      dnsResolvePeriodSec: 0,
      description: "whopping fine whose meanwhile finally off plump",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
      onBackpressure: "block",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      id: "graphite-output",
      type: "graphite",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      protocol: "tcp",
      host: "localhost",
      port: 2003,
      mtu: 512,
      flushPeriodSec: 1,
      dnsResolvePeriodSec: 0,
      description: "whopping fine whose meanwhile finally off plump",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
      onBackpressure: "block",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      dataset: "my-dataset",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 864.6,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "scope castanet pfft creature",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      dataset: "my-dataset",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 864.6,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "scope castanet pfft creature",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "https://cloud.us.humio.com/api/v1/ingest/hec",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 8378.07,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "nippy impressionable ouch concerning upside-down after",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://heartfelt-deed.net/",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "https://cloud.us.humio.com/api/v1/ingest/hec",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 8378.07,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "nippy impressionable ouch concerning upside-down after",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://heartfelt-deed.net/",
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
      timestampPrecision: "ms",
      dynamicValueFieldName: true,
      valueFieldName: "value",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 2224.46,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "none",
      description: "once till aw forgery",
      database: "mydb",
      bucket: "<value>",
      org: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Hector.Kshlerin29",
      password: "uj1bSnZx1GRBoIy",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://warmhearted-premise.info/",
      __template_database: "<value>",
      __template_bucket: "<value>",
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
      timestampPrecision: "ms",
      dynamicValueFieldName: true,
      valueFieldName: "value",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 2224.46,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "none",
      description: "once till aw forgery",
      database: "mydb",
      bucket: "<value>",
      org: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Hector.Kshlerin29",
      password: "uj1bSnZx1GRBoIy",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://warmhearted-premise.info/",
      __template_database: "<value>",
      __template_bucket: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      brokers: [
        "localhost:9092",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      compression: "gzip",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "http://localhost:8081",
        connectionTimeout: 30000,
        requestTimeout: 30000,
        maxRetries: 1,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
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
          maxVersion: "TLSv1.2",
        },
        defaultKeySchemaId: 2571.24,
        defaultValueSchemaId: 4603.74,
      },
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: true,
        username: "Beverly93",
        password: "iNd6FlpDEbKPe_d",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://smooth-conservative.com",
        clientId: "<id>",
        oauthSecretType: "secret",
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
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      onBackpressure: "block",
      description: "forenenst red which solicit where rejigger uncommon scoop",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      brokers: [
        "localhost:9092",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      compression: "gzip",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "http://localhost:8081",
        connectionTimeout: 30000,
        requestTimeout: 30000,
        maxRetries: 1,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
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
          maxVersion: "TLSv1.2",
        },
        defaultKeySchemaId: 2571.24,
        defaultValueSchemaId: 4603.74,
      },
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: true,
        username: "Beverly93",
        password: "iNd6FlpDEbKPe_d",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://smooth-conservative.com",
        clientId: "<id>",
        oauthSecretType: "secret",
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
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      onBackpressure: "block",
      description: "forenenst red which solicit where rejigger uncommon scoop",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
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
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      concurrency: 5,
      maxRecordSizeKB: 1024,
      flushPeriodSec: 1,
      compression: "gzip",
      useListShards: false,
      asNdjson: true,
      onBackpressure: "block",
      description: "obediently or pricey why hose detective scout",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      maxEventsPerFlush: 500,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_streamName: "<value>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      concurrency: 5,
      maxRecordSizeKB: 1024,
      flushPeriodSec: 1,
      compression: "gzip",
      useListShards: false,
      asNdjson: true,
      onBackpressure: "block",
      description: "obediently or pricey why hose detective scout",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      maxEventsPerFlush: 500,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_streamName: "<value>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
      ],
      url: "http://localhost:3100/loki/api/v1/push",
      message: "<value>",
      messageFormat: "protobuf",
      labels: [
        {
          name: "",
          value: "<value>",
        },
      ],
      authType: "none",
      concurrency: 1,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 15,
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
          httpStatus: 259.76,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      enableDynamicHeaders: false,
      onBackpressure: "block",
      totalMemoryLimitKB: 3553.75,
      description: "perfectly youthfully often usefully midst once shameless out for",
      compress: true,
      token: "<value>",
      textSecret: "<value>",
      username: "Virginie.Kohler",
      password: "oxajD3Wd8pLSEnh",
      credentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      ],
      url: "http://localhost:3100/loki/api/v1/push",
      message: "<value>",
      messageFormat: "protobuf",
      labels: [
        {
          name: "",
          value: "<value>",
        },
      ],
      authType: "none",
      concurrency: 1,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 15,
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
          httpStatus: 259.76,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      enableDynamicHeaders: false,
      onBackpressure: "block",
      totalMemoryLimitKB: 3553.75,
      description: "perfectly youthfully often usefully midst once shameless out for",
      compress: true,
      token: "<value>",
      textSecret: "<value>",
      username: "Virginie.Kohler",
      password: "oxajD3Wd8pLSEnh",
      credentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: false,
        mechanism: "plain",
        username: "$ConnectionString",
        textSecret: "<value>",
        clientSecretAuthType: "secret",
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
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
      description: "while so squirm surprise circa indeed simple angle daddy",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
      __template_bootstrap_server: "<value>",
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
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: false,
        mechanism: "plain",
        username: "$ConnectionString",
        textSecret: "<value>",
        clientSecretAuthType: "secret",
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
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
      description: "while so squirm surprise circa indeed simple angle daddy",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
      __template_bootstrap_server: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "private",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: true,
      verifyPermissions: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      description: "gosh footrest complication",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_format: "<value>",
      __template_awsApiKey: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "private",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: true,
      verifyPermissions: true,
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      description: "gosh footrest complication",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_format: "<value>",
      __template_awsApiKey: "<value>",
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
        "<value 2>",
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
      format: "json",
      compression: "gzip",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "http://localhost:8081",
        connectionTimeout: 30000,
        requestTimeout: 30000,
        maxRetries: 1,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
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
          maxVersion: "TLSv1.2",
        },
        defaultKeySchemaId: 2571.24,
        defaultValueSchemaId: 4603.74,
      },
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
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
        maxVersion: "TLSv1.2",
      },
      onBackpressure: "block",
      description: "kick adrenalin above airbus oil or smart babushka ethyl dash",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
        "<value 2>",
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
      format: "json",
      compression: "gzip",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "http://localhost:8081",
        connectionTimeout: 30000,
        requestTimeout: 30000,
        maxRetries: 1,
        auth: {
          disabled: true,
          credentialsSecret: "<value>",
        },
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
          maxVersion: "TLSv1.2",
        },
        defaultKeySchemaId: 2571.24,
        defaultValueSchemaId: 4603.74,
      },
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
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
        maxVersion: "TLSv1.2",
      },
      onBackpressure: "block",
      description: "kick adrenalin above airbus oil or smart babushka ethyl dash",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_topic: "<value>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 0,
      enableIpSpoofing: false,
      description: "whether unlike once cap schlep promptly submitter plus fatal than",
      maxRecordSize: 1500,
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
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 0,
      enableIpSpoofing: false,
      description: "whether unlike once cap schlep promptly submitter plus fatal than",
      maxRecordSize: 1500,
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      region: "US",
      logType: "",
      messageField: "",
      metadata: [
        {
          name: "auditId",
          value: "<value>",
        },
      ],
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 3645.11,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "manual",
      totalMemoryLimitKB: 2690.34,
      description: "abaft among madly kielbasa despite strictly solemnly whether digital",
      customUrl: "https://well-worn-casket.net",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
      __template_region: "<value>",
      __template_logType: "<value>",
      __template_messageField: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      region: "US",
      logType: "",
      messageField: "",
      metadata: [
        {
          name: "auditId",
          value: "<value>",
        },
      ],
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 3645.11,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "manual",
      totalMemoryLimitKB: 2690.34,
      description: "abaft among madly kielbasa despite strictly solemnly whether digital",
      customUrl: "https://well-worn-casket.net",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
      __template_region: "<value>",
      __template_logType: "<value>",
      __template_messageField: "<value>",
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
      ],
      region: "US",
      accountId: "123456",
      eventType: "CriblEvent",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 1898.39,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "for upon healthily distorted as",
      customUrl: "https://squeaky-mathematics.org/",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
      __template_region: "<value>",
      __template_accountId: "<id>",
      __template_eventType: "<value>",
      __template_customUrl: "https://old-yak.info/",
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
      ],
      region: "US",
      accountId: "123456",
      eventType: "CriblEvent",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 1898.39,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "for upon healthily distorted as",
      customUrl: "https://squeaky-mathematics.org/",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
      __template_region: "<value>",
      __template_accountId: "<id>",
      __template_eventType: "<value>",
      __template_customUrl: "https://old-yak.info/",
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
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      protocol: "grpc",
      endpoint: "http://localhost:4317",
      otlpVersion: "0.10.0",
      compress: "gzip",
      httpCompress: "gzip",
      authType: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      timeoutSec: 30,
      flushPeriodSec: 1,
      failedRequestLoggingMode: "none",
      connectionTimeout: 10000,
      keepAliveTime: 30,
      keepAlive: true,
      onBackpressure: "block",
      description: "playfully lounge fooey vet overwork acknowledge above drat",
      username: "Eve11",
      password: "6wNRRvPHwjcljoo",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      rejectUnauthorized: true,
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
          httpStatus: 7232.05,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      protocol: "grpc",
      endpoint: "http://localhost:4317",
      otlpVersion: "0.10.0",
      compress: "gzip",
      httpCompress: "gzip",
      authType: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      timeoutSec: 30,
      flushPeriodSec: 1,
      failedRequestLoggingMode: "none",
      connectionTimeout: 10000,
      keepAliveTime: 30,
      keepAlive: true,
      onBackpressure: "block",
      description: "playfully lounge fooey vet overwork acknowledge above drat",
      username: "Eve11",
      password: "6wNRRvPHwjcljoo",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      rejectUnauthorized: true,
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
          httpStatus: 7232.05,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      url: "http://localhost:9091/api/v1/write",
      metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
      sendMetadata: true,
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
      useRoundRobinDns: false,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 2064.65,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "none",
      description: "instead though litter fortunately perfectly unless vary",
      metricsFlushPeriodSec: 60,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Tracey68",
      password: "kTcECZfBZpBWuvT",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://unlawful-duster.name",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      url: "http://localhost:9091/api/v1/write",
      metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
      sendMetadata: true,
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
      useRoundRobinDns: false,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 2064.65,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "none",
      description: "instead though litter fortunately perfectly unless vary",
      metricsFlushPeriodSec: 60,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Tracey68",
      password: "kTcECZfBZpBWuvT",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://unlawful-duster.name",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      format: "json",
      partitionExpr: "<value>",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "<value>",
      onBackpressure: "block",
      description: "safely swerve sparkling print um equal coop astride crushing",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      format: "json",
      partitionExpr: "<value>",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "<value>",
      onBackpressure: "block",
      description: "safely swerve sparkling print um equal coop astride crushing",
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
          description: "fort supposing bleakly recede hmph",
          final: true,
        },
      ],
      description: "whose how hard-to-find",
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
          description: "fort supposing bleakly recede hmph",
          final: true,
        },
      ],
      description: "whose how hard-to-find",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "auto",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "",
      objectACL: "private",
      storageClass: "ONEZONE_IA",
      serverSideEncryption: "AES256",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 100,
      description: "starch nephew including hmph separately mobilize sugary deliberately",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_awsSecretKey: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_format: "<value>",
      __template_awsApiKey: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "auto",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "",
      objectACL: "private",
      storageClass: "ONEZONE_IA",
      serverSideEncryption: "AES256",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      partitionExpr: "C.Time.strftime(_time ? _time : Date.now()/1000, '%Y/%m/%d')",
      format: "json",
      baseFileName: "`CriblOut`",
      fileNameSuffix: `.${C.env["CRIBL_WORKER_ID"]}.${__format}${__compression === "gzip" ? ".gz" : ""}`,
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 100,
      description: "starch nephew including hmph separately mobilize sugary deliberately",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: true,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_awsSecretKey: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_format: "<value>",
      __template_awsApiKey: "<value>",
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
        "<value 2>",
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
      awsAuthenticationMethod: "auto",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      objectACL: "private",
      storageClass: "STANDARD",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "`CriblOut`",
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 100,
      accountId: "123456789012",
      customSource: "my-custom-source",
      automaticSchema: false,
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      description: "ha till furthermore excepting diver",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      parquetSchema: "<value>",
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_awsSecretKey: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
        "<value 2>",
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
      awsAuthenticationMethod: "auto",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      objectACL: "private",
      storageClass: "STANDARD",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "`CriblOut`",
      maxFileSizeMB: 32,
      maxOpenFiles: 100,
      headerLine: "",
      writeHighWaterMark: 64,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2452.56,
        backoffMultiplier: 1370.95,
        maxBackoffMs: 434.99,
        jitterPercent: 9632.75,
      },
      maxFileOpenTimeSec: 300,
      maxFileIdleTimeSec: 30,
      maxConcurrentFileParts: 4,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 100,
      accountId: "123456789012",
      customSource: "my-custom-source",
      automaticSchema: false,
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 10000,
      parquetPageSize: "1MB",
      shouldLogInvalidRows: false,
      keyValueMetadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      enableStatistics: true,
      enableWritePageIndex: true,
      enablePageChecksum: false,
      description: "ha till furthermore excepting diver",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      emptyDirCleanupSec: 300,
      directoryBatchSize: 1000,
      parquetSchema: "<value>",
      deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
      maxRetryNum: 20,
      __template_bucket: "<value>",
      __template_region: "<value>",
      __template_awsSecretKey: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      keepAlive: true,
      concurrency: 5,
      maxPayloadSizeKB: 1000,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 2382.67,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "oauth",
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      scope: "https://monitor.azure.com/.default",
      endpointURLConfiguration: "url",
      totalMemoryLimitKB: 933.62,
      description: "exhausted against respectful editor majestically",
      format: "ndjson",
      customSourceExpression: "__httpOut",
      customDropWhenNull: false,
      customEventDelimiter: "\\n",
      customContentType: "application/x-ndjson",
      customPayloadExpression: "`${events}`",
      advancedContentType: "application/json",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      url: "https://your-workspace.ingest.monitor.azure.com",
      dcrID: "<id>",
      dceEndpoint: "<value>",
      streamName: "<value>",
      __template_loginUrl: "https://lumpy-muscat.name/",
      __template_secret: "<value>",
      __template_client_id: "<id>",
      __template_scope: "<value>",
      __template_url: "https://long-honesty.org/",
      __template_dcrID: "<id>",
      __template_dceEndpoint: "<value>",
      __template_streamName: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      keepAlive: true,
      concurrency: 5,
      maxPayloadSizeKB: 1000,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 2382.67,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "oauth",
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      scope: "https://monitor.azure.com/.default",
      endpointURLConfiguration: "url",
      totalMemoryLimitKB: 933.62,
      description: "exhausted against respectful editor majestically",
      format: "ndjson",
      customSourceExpression: "__httpOut",
      customDropWhenNull: false,
      customEventDelimiter: "\\n",
      customContentType: "application/x-ndjson",
      customPayloadExpression: "`${events}`",
      advancedContentType: "application/json",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      url: "https://your-workspace.ingest.monitor.azure.com",
      dcrID: "<id>",
      dceEndpoint: "<value>",
      streamName: "<value>",
      __template_loginUrl: "https://lumpy-muscat.name/",
      __template_secret: "<value>",
      __template_client_id: "<id>",
      __template_scope: "<value>",
      __template_url: "https://long-honesty.org/",
      __template_dcrID: "<id>",
      __template_dceEndpoint: "<value>",
      __template_streamName: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      region: "US",
      endpoint: "/services/collector/event",
      concurrency: 5,
      maxPayloadSizeKB: 5120,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 5,
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
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 9611.42,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "but yellow whereas yowza sweetly scent lobster tectonics consequently golden",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://<Your-S1-Tenant>.sentinelone.net",
      hostExpression: "__e.host || C.os.hostname()",
      sourceExpression: "__e.source || (__e.__criblMetrics ? 'metrics' : 'cribl')",
      sourceTypeExpression: "__e.sourcetype || 'dottedJson'",
      dataSourceCategoryExpression: "'security'",
      dataSourceNameExpression: "__e.__dataSourceName || 'cribl'",
      dataSourceVendorExpression: "__e.__dataSourceVendor || 'cribl'",
      eventTypeExpression: "",
      host: "C.os.hostname()",
      source: "cribl",
      sourceType: "hecRawParser",
      dataSourceCategory: "security",
      dataSourceName: "cribl",
      dataSourceVendor: "cribl",
      eventType: "",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      region: "US",
      endpoint: "/services/collector/event",
      concurrency: 5,
      maxPayloadSizeKB: 5120,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 5,
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
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 9611.42,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "but yellow whereas yowza sweetly scent lobster tectonics consequently golden",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://<Your-S1-Tenant>.sentinelone.net",
      hostExpression: "__e.host || C.os.hostname()",
      sourceExpression: "__e.source || (__e.__criblMetrics ? 'metrics' : 'cribl')",
      sourceTypeExpression: "__e.sourcetype || 'dottedJson'",
      dataSourceCategoryExpression: "'security'",
      dataSourceNameExpression: "__e.__dataSourceName || 'cribl'",
      dataSourceVendorExpression: "__e.__dataSourceVendor || 'cribl'",
      eventTypeExpression: "",
      host: "C.os.hostname()",
      source: "cribl",
      sourceType: "hecRawParser",
      dataSourceCategory: "security",
      dataSourceName: "cribl",
      dataSourceVendor: "cribl",
      eventType: "",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
        "<value 3>",
      ],
      endpoint: "ingest.lightstep.com:443",
      tokenSecret: "your-token-secret",
      authTokenName: "lightstep-access-token",
      otlpVersion: "1.3.1",
      maxPayloadSizeKB: 2048,
      protocol: "http",
      compress: "gzip",
      httpCompress: "gzip",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      concurrency: 5,
      timeoutSec: 30,
      flushPeriodSec: 1,
      failedRequestLoggingMode: "none",
      connectionTimeout: 10000,
      keepAliveTime: 30,
      keepAlive: true,
      onBackpressure: "block",
      description: "pinion among beyond behind thorough helplessly sadly anti",
      rejectUnauthorized: true,
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
          httpStatus: 2454.78,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
        "<value 3>",
      ],
      endpoint: "ingest.lightstep.com:443",
      tokenSecret: "your-token-secret",
      authTokenName: "lightstep-access-token",
      otlpVersion: "1.3.1",
      maxPayloadSizeKB: 2048,
      protocol: "http",
      compress: "gzip",
      httpCompress: "gzip",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      concurrency: 5,
      timeoutSec: 30,
      flushPeriodSec: 1,
      failedRequestLoggingMode: "none",
      connectionTimeout: 10000,
      keepAliveTime: 30,
      keepAlive: true,
      onBackpressure: "block",
      description: "pinion among beyond behind thorough helplessly sadly anti",
      rejectUnauthorized: true,
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
          httpStatus: 2454.78,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      authType: "manual",
      realm: "us0",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 2401.56,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "hawk next gnash sympathetically numb spork discrete whereas",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      id: "signalfx-output",
      type: "signalfx",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      authType: "manual",
      realm: "us0",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 2401.56,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "hawk next gnash sympathetically numb spork discrete whereas",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 0,
      description: "executor caring kiddingly violently into",
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
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 0,
      description: "executor caring kiddingly violently into",
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
      maxRetries: 9109,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      onBackpressure: "block",
      description: "where duh via numb as abaft pfft",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
      maxRetries: 9109,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      onBackpressure: "block",
      description: "where duh via numb as abaft pfft",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      host: "localhost",
      port: 9997,
      nestedFields: "none",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
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
        maxVersion: "TLSv1.2",
      },
      enableMultiMetrics: false,
      enableACK: true,
      logFailedRequests: false,
      maxS2Sversion: "v3",
      onBackpressure: "block",
      authType: "manual",
      description: "wrathful upright guest excepting",
      maxFailedHealthChecks: 1,
      compress: "disabled",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      host: "localhost",
      port: 9997,
      nestedFields: "none",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
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
        maxVersion: "TLSv1.2",
      },
      enableMultiMetrics: false,
      enableACK: true,
      logFailedRequests: false,
      maxS2Sversion: "v3",
      onBackpressure: "block",
      authType: "manual",
      description: "wrathful upright guest excepting",
      maxFailedHealthChecks: 1,
      compress: "disabled",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
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
      ],
      loadBalanced: true,
      nextQueue: "indexQueue",
      tcpRouting: "nowhere",
      tls: {
        disabled: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
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
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      enableMultiMetrics: false,
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 6617.86,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "bus majestically absent once opposite brr enroll",
      url: "http://localhost:8088/services/collector/event",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "http://localhost:8088/services/collector/event",
          weight: 1,
          __template_url: "https://proud-blowgun.biz/",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://fair-cauliflower.biz/",
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
      ],
      loadBalanced: true,
      nextQueue: "indexQueue",
      tcpRouting: "nowhere",
      tls: {
        disabled: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
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
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      enableMultiMetrics: false,
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 6617.86,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "bus majestically absent once opposite brr enroll",
      url: "http://localhost:8088/services/collector/event",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "http://localhost:8088/services/collector/event",
          weight: 1,
          __template_url: "https://proud-blowgun.biz/",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://fair-cauliflower.biz/",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      maxConcurrentSenders: 0,
      nestedFields: "none",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
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
        maxVersion: "TLSv1.2",
      },
      enableMultiMetrics: false,
      enableACK: true,
      logFailedRequests: false,
      maxS2Sversion: "v3",
      onBackpressure: "block",
      indexerDiscovery: false,
      senderUnhealthyTimeAllowance: 100,
      authType: "manual",
      description: "veto rarely yahoo and",
      maxFailedHealthChecks: 1,
      compress: "disabled",
      indexerDiscoveryConfigs: {
        site: "default",
        masterUri: "https://simple-gym.biz",
        refreshIntervalSec: 300,
        rejectUnauthorized: false,
        authTokens: [
          {
            authType: "manual",
            authToken: "",
            textSecret: "<value>",
          },
        ],
        authType: "manual",
        authToken: "",
        textSecret: "<value>",
      },
      excludeSelf: false,
      hosts: [
        {
          host: "localhost",
          port: 9997,
          tls: "inherit",
          servername: "<value>",
          weight: 1,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      maxConcurrentSenders: 0,
      nestedFields: "none",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
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
        maxVersion: "TLSv1.2",
      },
      enableMultiMetrics: false,
      enableACK: true,
      logFailedRequests: false,
      maxS2Sversion: "v3",
      onBackpressure: "block",
      indexerDiscovery: false,
      senderUnhealthyTimeAllowance: 100,
      authType: "manual",
      description: "veto rarely yahoo and",
      maxFailedHealthChecks: 1,
      compress: "disabled",
      indexerDiscoveryConfigs: {
        site: "default",
        masterUri: "https://simple-gym.biz",
        refreshIntervalSec: 300,
        rejectUnauthorized: false,
        authTokens: [
          {
            authType: "manual",
            authToken: "",
            textSecret: "<value>",
          },
        ],
        authType: "manual",
        authToken: "",
        textSecret: "<value>",
      },
      excludeSelf: false,
      hosts: [
        {
          host: "localhost",
          port: 9997,
          tls: "inherit",
          servername: "<value>",
          weight: 1,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "",
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
        "<value 2>",
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
      messageGroupId: "cribl",
      createQueue: true,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      maxQueueSize: 100,
      maxRecordSizeKB: 256,
      flushPeriodSec: 1,
      maxInProgress: 10,
      onBackpressure: "block",
      description: "meatloaf um what contrast acknowledge helpfully however shy nor bah",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_queueName: "<value>",
      __template_awsAccountId: "<id>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
        "<value 2>",
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
      messageGroupId: "cribl",
      createQueue: true,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      maxQueueSize: 100,
      maxRecordSizeKB: 256,
      flushPeriodSec: 1,
      maxInProgress: 10,
      onBackpressure: "block",
      description: "meatloaf um what contrast acknowledge helpfully however shy nor bah",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_queueName: "<value>",
      __template_awsAccountId: "<id>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
      __template_awsApiKey: "<value>",
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
      mtu: 512,
      flushPeriodSec: 1,
      dnsResolvePeriodSec: 0,
      description: "bah reflate however accompanist hunt gut hello",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
      onBackpressure: "block",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      mtu: 512,
      flushPeriodSec: 1,
      dnsResolvePeriodSec: 0,
      description: "bah reflate however accompanist hunt gut hello",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
      onBackpressure: "block",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 512,
      flushPeriodSec: 1,
      dnsResolvePeriodSec: 0,
      description: "gosh trusty though reword overstay conclude bleach cautiously",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
      onBackpressure: "block",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      id: "statsd-ext-output",
      type: "statsd_ext",
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
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 512,
      flushPeriodSec: 1,
      dnsResolvePeriodSec: 0,
      description: "gosh trusty though reword overstay conclude bleach cautiously",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
      onBackpressure: "block",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      url: "https://endpoint1.collection.us2.sumologic.com",
      customSource: "<value>",
      customCategory: "<value>",
      format: "json",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 1298.59,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      totalMemoryLimitKB: 6460.48,
      description: "subsidy translation carp impractical woot mozzarella beyond however underneath aboard",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://busy-thigh.biz",
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
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      url: "https://endpoint1.collection.us2.sumologic.com",
      customSource: "<value>",
      customCategory: "<value>",
      format: "json",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 1298.59,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      totalMemoryLimitKB: 6460.48,
      description: "subsidy translation carp impractical woot mozzarella beyond however underneath aboard",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://busy-thigh.biz",
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
      ],
      protocol: "tcp",
      facility: 1,
      severity: 5,
      appName: "Cribl",
      messageFormat: "rfc3164",
      timestampFormat: "syslog",
      throttleRatePerSec: "0",
      octetCountFraming: true,
      logFailedRequests: false,
      description: "deeply recount ack satirise typewriter consequently acquaintance",
      loadBalanced: true,
      host: "localhost",
      port: 514,
      excludeSelf: false,
      hosts: [
        {
          host: "meager-stock.biz",
          port: 2033.08,
          tls: "inherit",
          servername: "<value>",
          weight: 1,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      maxConcurrentSenders: 0,
      connectionTimeout: 10000,
      writeTimeout: 60000,
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
        maxVersion: "TLSv1.2",
      },
      onBackpressure: "block",
      maxRecordSize: 1500,
      udpDnsResolvePeriodSec: 0,
      enableIpSpoofing: false,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_host: "<value>",
      __template_port: "<value>",
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
      ],
      protocol: "tcp",
      facility: 1,
      severity: 5,
      appName: "Cribl",
      messageFormat: "rfc3164",
      timestampFormat: "syslog",
      throttleRatePerSec: "0",
      octetCountFraming: true,
      logFailedRequests: false,
      description: "deeply recount ack satirise typewriter consequently acquaintance",
      loadBalanced: true,
      host: "localhost",
      port: 514,
      excludeSelf: false,
      hosts: [
        {
          host: "meager-stock.biz",
          port: 2033.08,
          tls: "inherit",
          servername: "<value>",
          weight: 1,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      maxConcurrentSenders: 0,
      connectionTimeout: 10000,
      writeTimeout: 60000,
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
        maxVersion: "TLSv1.2",
      },
      onBackpressure: "block",
      maxRecordSize: 1500,
      udpDnsResolvePeriodSec: 0,
      enableIpSpoofing: false,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_host: "<value>",
      __template_port: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
      compression: "gzip",
      logFailedRequests: false,
      throttleRatePerSec: "0",
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
        maxVersion: "TLSv1.2",
      },
      connectionTimeout: 10000,
      writeTimeout: 60000,
      tokenTTLMinutes: 60,
      sendHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "barring astonishing swine creamy but gosh",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "flawless-archaeology.net",
          port: 2419.51,
          tls: "inherit",
          servername: "<value>",
          weight: 1,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      maxConcurrentSenders: 0,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      loadBalanced: true,
      compression: "gzip",
      logFailedRequests: false,
      throttleRatePerSec: "0",
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
        maxVersion: "TLSv1.2",
      },
      connectionTimeout: 10000,
      writeTimeout: 60000,
      tokenTTLMinutes: 60,
      sendHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "barring astonishing swine creamy but gosh",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "flawless-archaeology.net",
          port: 2419.51,
          tls: "inherit",
          servername: "<value>",
          weight: 1,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      maxConcurrentSenders: 0,
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      authType: "manual",
      domain: "longboard",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 3992.8,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "onto speedily hmph",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      id: "wavefront-output",
      type: "wavefront",
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
      authType: "manual",
      domain: "longboard",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 3992.8,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "onto speedily hmph",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      method: "POST",
      format: "ndjson",
      keepAlive: true,
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 8283.06,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "none",
      tls: {
        disabled: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      totalMemoryLimitKB: 7404.48,
      loadBalanced: false,
      description: "fisherman physically besides",
      customSourceExpression: "__httpOut",
      customDropWhenNull: false,
      customEventDelimiter: "\\n",
      customContentType: "application/x-ndjson",
      customPayloadExpression: "`${events}`",
      advancedContentType: "application/json",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Jackeline5",
      password: "tI4tGhpVEwbYMeW",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://honored-yogurt.info/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "`Bearer ${token}`",
      tokenTimeoutSecs: 3600,
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
          url: "https://blind-mentor.com/",
          weight: 1,
          __template_url: "https://agreeable-dulcimer.net",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      __template_loginUrl: "https://funny-premise.biz/",
      __template_secret: "<value>",
      __template_url: "https://shady-zebra.com/",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      method: "POST",
      format: "ndjson",
      keepAlive: true,
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 1,
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
          httpStatus: 8283.06,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "none",
      tls: {
        disabled: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      totalMemoryLimitKB: 7404.48,
      loadBalanced: false,
      description: "fisherman physically besides",
      customSourceExpression: "__httpOut",
      customDropWhenNull: false,
      customEventDelimiter: "\\n",
      customContentType: "application/x-ndjson",
      customPayloadExpression: "`${events}`",
      advancedContentType: "application/json",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Jackeline5",
      password: "tI4tGhpVEwbYMeW",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://honored-yogurt.info/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "`Bearer ${token}`",
      tokenTimeoutSecs: 3600,
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
          url: "https://blind-mentor.com/",
          weight: 1,
          __template_url: "https://agreeable-dulcimer.net",
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      __template_loginUrl: "https://funny-premise.biz/",
      __template_secret: "<value>",
      __template_url: "https://shady-zebra.com/",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: true,
      nextQueue: "indexQueue",
      tcpRouting: "nowhere",
      tls: {
        disabled: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
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
      safeHeaders: [
        "<value 1>",
      ],
      enableMultiMetrics: false,
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 2924.72,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
      description: "phooey positively a consequently meh until",
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
      __template_wiz_environment: "<value>",
      __template_data_center: "<value>",
      __template_wiz_sourcetype: "<value>",
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
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: true,
      nextQueue: "indexQueue",
      tcpRouting: "nowhere",
      tls: {
        disabled: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.2",
      },
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
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
      safeHeaders: [
        "<value 1>",
      ],
      enableMultiMetrics: false,
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 2924.72,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
      description: "phooey positively a consequently meh until",
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
      __template_wiz_environment: "<value>",
      __template_data_center: "<value>",
      __template_wiz_sourcetype: "<value>",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: false,
      concurrency: 5,
      maxPayloadSizeKB: 9500,
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
      safeHeaders: [
        "<value 1>",
      ],
      authType: "token",
      responseRetrySettings: [
        {
          httpStatus: 3551.51,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      throttleRateReqPerSec: 400,
      onBackpressure: "block",
      totalMemoryLimitKB: 7982.68,
      description: "vet simple wholly buzzing if axe",
      url: "http://localhost:8088/logs/v1/event",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://dental-calculus.info",
          weight: 1,
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://worthwhile-polarisation.biz/",
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
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: false,
      concurrency: 5,
      maxPayloadSizeKB: 9500,
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
      safeHeaders: [
        "<value 1>",
      ],
      authType: "token",
      responseRetrySettings: [
        {
          httpStatus: 3551.51,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      throttleRateReqPerSec: 400,
      onBackpressure: "block",
      totalMemoryLimitKB: 7982.68,
      description: "vet simple wholly buzzing if axe",
      url: "http://localhost:8088/logs/v1/event",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://dental-calculus.info",
          weight: 1,
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://worthwhile-polarisation.biz/",
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
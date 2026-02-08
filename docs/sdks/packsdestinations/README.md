# Packs.Destinations

## Overview

### Available Operations

* [list](#list) - List all Destinations within a Pack
* [create](#create) - Create a Destination within a Pack
* [get](#get) - Get a Destination within a Pack
* [update](#update) - Update a Destination within a Pack
* [delete](#delete) - Delete a Destination within a Pack

## list

Get a list of all Destinations within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOutputSystemByPack" method="get" path="/p/{pack}/system/outputs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.list({
    pack: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsDestinationsList } from "cribl-control-plane/funcs/packsDestinationsList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsList(criblControlPlane, {
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOutputSystemByPackRequest](../../models/operations/getoutputsystembypackrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Create a new Destination within the specified Pack.

### Example Usage: OutputCreateExamplesAzureBlob

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesAzureBlob" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
        "<value 3>",
      ],
      containerName: "my-container",
      createContainer: false,
      destPath: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      maxConcurrentFileParts: 8933.02,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 2063.94,
      maxFileOpenTimeSec: 1714.94,
      maxFileIdleTimeSec: 1052.51,
      maxOpenFiles: 763.55,
      headerLine: "<value>",
      writeHighWaterMark: 4744.98,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      authType: "manual",
      storageClass: "Cool",
      description: "cautiously vicinity formal drowse proud lest",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 7760.03,
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
      enablePageChecksum: true,
      emptyDirCleanupSec: 5182.92,
      directoryBatchSize: 2024.08,
      deadletterPath: "<value>",
      maxRetryNum: 2792.84,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
        "<value 3>",
      ],
      containerName: "my-container",
      createContainer: false,
      destPath: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      maxConcurrentFileParts: 8933.02,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 2063.94,
      maxFileOpenTimeSec: 1714.94,
      maxFileIdleTimeSec: 1052.51,
      maxOpenFiles: 763.55,
      headerLine: "<value>",
      writeHighWaterMark: 4744.98,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      authType: "manual",
      storageClass: "Cool",
      description: "cautiously vicinity formal drowse proud lest",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 7760.03,
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
      enablePageChecksum: true,
      emptyDirCleanupSec: 5182.92,
      directoryBatchSize: 2024.08,
      deadletterPath: "<value>",
      maxRetryNum: 2792.84,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureDataExplorer

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesAzureDataExplorer" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      validateDatabaseSettings: false,
      ingestMode: "streaming",
      oauthEndpoint: "https://login.microsoftonline.com",
      tenantId: "tenant-id",
      clientId: "client-id",
      scope: "https://mycluster.kusto.windows.net/.default",
      oauthType: "clientSecret",
      description: "which ick perfectly gracefully",
      clientSecret: "client-secret",
      textSecret: "<value>",
      certificate: {
        certificateName: "<value>",
      },
      format: "json",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 5177.35,
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
      removeEmptyDirs: false,
      emptyDirCleanupSec: 3518.81,
      directoryBatchSize: 9926.62,
      deadletterEnabled: false,
      deadletterPath: "<value>",
      maxRetryNum: 1931.7,
      isMappingObj: false,
      mappingObj: "<value>",
      mappingRef: "<value>",
      ingestUrl: "https://greedy-sarong.name",
      onBackpressure: "block",
      stagePath: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 6943.69,
      maxFileOpenTimeSec: 5653.96,
      maxFileIdleTimeSec: 9574.62,
      maxOpenFiles: 5456.88,
      maxConcurrentFileParts: 2082.82,
      onDiskFullBackpressure: "drop",
      addIdToStagePath: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      timeoutSec: 2065.39,
      flushImmediately: true,
      retainBlobOnSuccess: true,
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
      reportLevel: "failuresAndSuccesses",
      reportMethod: "table",
      additionalProperties: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      concurrency: 9056.58,
      maxPayloadSizeKB: 7467.78,
      maxPayloadEvents: 701.01,
      flushPeriodSec: 7847.48,
      rejectUnauthorized: false,
      useRoundRobinDns: false,
      keepAlive: false,
      pqStrictOrdering: false,
      pqRatePerSec: 3460.17,
      pqMode: "error",
      pqMaxBufferSize: 6309.46,
      pqMaxBackpressureSec: 9203.63,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_clusterUrl: "https://athletic-sandbar.org/",
      __template_database: "<value>",
      __template_table: "<value>",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_scope: "<value>",
      __template_clientSecret: "<value>",
      __template_format: "<value>",
      __template_ingestUrl: "https://sweet-kiss.info/",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      validateDatabaseSettings: false,
      ingestMode: "streaming",
      oauthEndpoint: "https://login.microsoftonline.com",
      tenantId: "tenant-id",
      clientId: "client-id",
      scope: "https://mycluster.kusto.windows.net/.default",
      oauthType: "clientSecret",
      description: "which ick perfectly gracefully",
      clientSecret: "client-secret",
      textSecret: "<value>",
      certificate: {
        certificateName: "<value>",
      },
      format: "json",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 5177.35,
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
      removeEmptyDirs: false,
      emptyDirCleanupSec: 3518.81,
      directoryBatchSize: 9926.62,
      deadletterEnabled: false,
      deadletterPath: "<value>",
      maxRetryNum: 1931.7,
      isMappingObj: false,
      mappingObj: "<value>",
      mappingRef: "<value>",
      ingestUrl: "https://greedy-sarong.name",
      onBackpressure: "block",
      stagePath: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 6943.69,
      maxFileOpenTimeSec: 5653.96,
      maxFileIdleTimeSec: 9574.62,
      maxOpenFiles: 5456.88,
      maxConcurrentFileParts: 2082.82,
      onDiskFullBackpressure: "drop",
      addIdToStagePath: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      timeoutSec: 2065.39,
      flushImmediately: true,
      retainBlobOnSuccess: true,
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
      reportLevel: "failuresAndSuccesses",
      reportMethod: "table",
      additionalProperties: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      concurrency: 9056.58,
      maxPayloadSizeKB: 7467.78,
      maxPayloadEvents: 701.01,
      flushPeriodSec: 7847.48,
      rejectUnauthorized: false,
      useRoundRobinDns: false,
      keepAlive: false,
      pqStrictOrdering: false,
      pqRatePerSec: 3460.17,
      pqMode: "error",
      pqMaxBufferSize: 6309.46,
      pqMaxBackpressureSec: 9203.63,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_clusterUrl: "https://athletic-sandbar.org/",
      __template_database: "<value>",
      __template_table: "<value>",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_scope: "<value>",
      __template_clientSecret: "<value>",
      __template_format: "<value>",
      __template_ingestUrl: "https://sweet-kiss.info/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureEventhub

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesAzureEventhub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topic: "logs",
      ack: -1,
      format: "json",
      maxRecordSizeKB: 2033,
      flushEventCount: 7170.03,
      flushPeriodSec: 5689.67,
      connectionTimeout: 9006.5,
      requestTimeout: 6884.66,
      maxRetries: 8261.33,
      maxBackOff: 1174.3,
      initialBackoff: 4915.79,
      backoffRate: 9984.55,
      authenticationTimeout: 9018.2,
      reauthenticationThreshold: 587.46,
      sasl: {
        disabled: true,
        authType: "manual",
        password: "2Xgd2vcFHOLRN_l",
        textSecret: "<value>",
        mechanism: "oauthbearer",
        username: "Terrance88",
        clientSecretAuthType: "certificate",
        clientSecret: "<value>",
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
      onBackpressure: "drop",
      description: "mismatch conceptualize which solder filthy positively",
      pqStrictOrdering: true,
      pqRatePerSec: 2640.47,
      pqMode: "always",
      pqMaxBufferSize: 8625.98,
      pqMaxBackpressureSec: 9613.74,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topic: "logs",
      ack: -1,
      format: "json",
      maxRecordSizeKB: 2033,
      flushEventCount: 7170.03,
      flushPeriodSec: 5689.67,
      connectionTimeout: 9006.5,
      requestTimeout: 6884.66,
      maxRetries: 8261.33,
      maxBackOff: 1174.3,
      initialBackoff: 4915.79,
      backoffRate: 9984.55,
      authenticationTimeout: 9018.2,
      reauthenticationThreshold: 587.46,
      sasl: {
        disabled: true,
        authType: "manual",
        password: "2Xgd2vcFHOLRN_l",
        textSecret: "<value>",
        mechanism: "oauthbearer",
        username: "Terrance88",
        clientSecretAuthType: "certificate",
        clientSecret: "<value>",
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
      onBackpressure: "drop",
      description: "mismatch conceptualize which solder filthy positively",
      pqStrictOrdering: true,
      pqRatePerSec: 2640.47,
      pqMode: "always",
      pqMaxBufferSize: 8625.98,
      pqMaxBackpressureSec: 9613.74,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureLogs

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesAzureLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "azure-logs-output",
      type: "azure_logs",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      logType: "Cribl",
      resourceId: "<id>",
      concurrency: 8327.34,
      maxPayloadSizeKB: 1116.93,
      maxPayloadEvents: 8951.09,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 4029.17,
      flushPeriodSec: 6971.36,
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
      apiUrl: "https://enchanted-sandbar.info",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      authType: "manual",
      description: "holster oh ha next forecast sheepishly",
      pqStrictOrdering: false,
      pqRatePerSec: 5458.43,
      pqMode: "error",
      pqMaxBufferSize: 6973.94,
      pqMaxBackpressureSec: 8612.72,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "azure-logs-output",
      type: "azure_logs",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      logType: "Cribl",
      resourceId: "<id>",
      concurrency: 8327.34,
      maxPayloadSizeKB: 1116.93,
      maxPayloadEvents: 8951.09,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 4029.17,
      flushPeriodSec: 6971.36,
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
      apiUrl: "https://enchanted-sandbar.info",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      authType: "manual",
      description: "holster oh ha next forecast sheepishly",
      pqStrictOrdering: false,
      pqRatePerSec: 5458.43,
      pqMode: "error",
      pqMaxBufferSize: 6973.94,
      pqMaxBackpressureSec: 8612.72,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesChronicle

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesChronicle" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "chronicle-output",
      type: "chronicle",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      apiVersion: "<value>",
      authenticationMethod: "serviceAccountSecret",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      region: "us",
      concurrency: 5702.62,
      maxPayloadSizeKB: 6214.83,
      maxPayloadEvents: 7548.19,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 7353.1,
      flushPeriodSec: 3179.67,
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
      useRoundRobinDns: true,
      onBackpressure: "queue",
      totalMemoryLimitKB: 1525.15,
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
      description: "cheetah chubby oh kookily daintily airport aside",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 2542.95,
      pqMode: "error",
      pqMaxBufferSize: 601.21,
      pqMaxBackpressureSec: 4946.69,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "chronicle-output",
      type: "chronicle",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      apiVersion: "<value>",
      authenticationMethod: "serviceAccountSecret",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      region: "us",
      concurrency: 5702.62,
      maxPayloadSizeKB: 6214.83,
      maxPayloadEvents: 7548.19,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 7353.1,
      flushPeriodSec: 3179.67,
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
      useRoundRobinDns: true,
      onBackpressure: "queue",
      totalMemoryLimitKB: 1525.15,
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
      description: "cheetah chubby oh kookily daintily airport aside",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 2542.95,
      pqMode: "error",
      pqMaxBufferSize: 601.21,
      pqMaxBackpressureSec: 4946.69,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesClickHouse

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesClickHouse" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      authType: "sslUserCertificate",
      database: "mydb",
      tableName: "mytable",
      format: "json-compact-each-row-with-names",
      mappingType: "automatic",
      asyncInserts: true,
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 2913.1,
      maxPayloadSizeKB: 5585.58,
      maxPayloadEvents: 9618.32,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 7580.19,
      flushPeriodSec: 8530.53,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      dumpFormatErrorsToDisk: true,
      statsDestination: {
        url: "https://shrill-cassava.name/",
        database: "<value>",
        tableName: "<value>",
        authType: "<value>",
        username: "Norwood50",
        sqlUsername: "<value>",
        password: "gQHXJYHcY0WbUGY",
      },
      onBackpressure: "drop",
      description: "including ack once towards sweetly scope vibration",
      username: "Bridget_Shields14",
      password: "nyifn_ubMAFMtOw",
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
      pqStrictOrdering: false,
      pqRatePerSec: 3187.18,
      pqMode: "always",
      pqMaxBufferSize: 2473.66,
      pqMaxBackpressureSec: 5214.89,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://hefty-gastropod.com/",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      authType: "sslUserCertificate",
      database: "mydb",
      tableName: "mytable",
      format: "json-compact-each-row-with-names",
      mappingType: "automatic",
      asyncInserts: true,
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 2913.1,
      maxPayloadSizeKB: 5585.58,
      maxPayloadEvents: 9618.32,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 7580.19,
      flushPeriodSec: 8530.53,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      dumpFormatErrorsToDisk: true,
      statsDestination: {
        url: "https://shrill-cassava.name/",
        database: "<value>",
        tableName: "<value>",
        authType: "<value>",
        username: "Norwood50",
        sqlUsername: "<value>",
        password: "gQHXJYHcY0WbUGY",
      },
      onBackpressure: "drop",
      description: "including ack once towards sweetly scope vibration",
      username: "Bridget_Shields14",
      password: "nyifn_ubMAFMtOw",
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
      pqStrictOrdering: false,
      pqRatePerSec: 3187.18,
      pqMode: "always",
      pqMaxBufferSize: 2473.66,
      pqMaxBackpressureSec: 5214.89,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://hefty-gastropod.com/",
      __template_database: "<value>",
      __template_tableName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCloudflareR2

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesCloudflareR2" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      awsAuthenticationMethod: "secret",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      signatureVersion: "v2",
      objectACL: "<value>",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: true,
      verifyPermissions: false,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 1516.04,
      maxOpenFiles: 449.24,
      headerLine: "<value>",
      writeHighWaterMark: 1247.31,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 35.3,
      maxFileIdleTimeSec: 9316.56,
      maxConcurrentFileParts: 7819.76,
      description: "because aware likewise impanel criminal awkwardly aw ack inasmuch married",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 500.05,
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
      emptyDirCleanupSec: 7629.4,
      directoryBatchSize: 55.25,
      deadletterPath: "<value>",
      maxRetryNum: 9775.22,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      awsAuthenticationMethod: "secret",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      signatureVersion: "v2",
      objectACL: "<value>",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: true,
      verifyPermissions: false,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 1516.04,
      maxOpenFiles: 449.24,
      headerLine: "<value>",
      writeHighWaterMark: 1247.31,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 35.3,
      maxFileIdleTimeSec: 9316.56,
      maxConcurrentFileParts: 7819.76,
      description: "because aware likewise impanel criminal awkwardly aw ack inasmuch married",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 500.05,
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
      emptyDirCleanupSec: 7629.4,
      directoryBatchSize: 55.25,
      deadletterPath: "<value>",
      maxRetryNum: 9775.22,
      __template_bucket: "<value>",
      __template_format: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCloudwatch

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesCloudwatch" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "cloudwatch-output",
      type: "cloudwatch",
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
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 7812.59,
      maxQueueSize: 7088.01,
      maxRecordSizeKB: 3276.75,
      flushPeriodSec: 608.96,
      onBackpressure: "queue",
      description: "pendant alongside coaxingly",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 3159.33,
      pqMode: "always",
      pqMaxBufferSize: 2400.14,
      pqMaxBackpressureSec: 4607.03,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "cloudwatch-output",
      type: "cloudwatch",
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
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 7812.59,
      maxQueueSize: 7088.01,
      maxRecordSizeKB: 3276.75,
      flushPeriodSec: 608.96,
      onBackpressure: "queue",
      description: "pendant alongside coaxingly",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 3159.33,
      pqMode: "always",
      pqMaxBufferSize: 2400.14,
      pqMaxBackpressureSec: 4607.03,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesConfluentCloud

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesConfluentCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "confluent-cloud-output",
      type: "confluent_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
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
      ack: 0,
      format: "json",
      compression: "lz4",
      maxRecordSizeKB: 5859.1,
      flushEventCount: 1248.24,
      flushPeriodSec: 6171.11,
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://mad-gripper.org/",
        connectionTimeout: 4801.03,
        requestTimeout: 8307.36,
        maxRetries: 1772.48,
        auth: {
          disabled: true,
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
        defaultKeySchemaId: 1571.25,
        defaultValueSchemaId: 5174.17,
      },
      connectionTimeout: 5416.81,
      requestTimeout: 4580.28,
      maxRetries: 2859.01,
      maxBackOff: 4282.12,
      initialBackoff: 5350.62,
      backoffRate: 7682.89,
      authenticationTimeout: 2283.46,
      reauthenticationThreshold: 923.46,
      sasl: {
        disabled: false,
        username: "Dandre37",
        password: "9Z6I7w7EQSW5es6",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://finished-elver.info",
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
      onBackpressure: "drop",
      description: "on pish than",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 178.45,
      pqMode: "error",
      pqMaxBufferSize: 7556.67,
      pqMaxBackpressureSec: 7518.6,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "confluent-cloud-output",
      type: "confluent_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
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
      ack: 0,
      format: "json",
      compression: "lz4",
      maxRecordSizeKB: 5859.1,
      flushEventCount: 1248.24,
      flushPeriodSec: 6171.11,
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://mad-gripper.org/",
        connectionTimeout: 4801.03,
        requestTimeout: 8307.36,
        maxRetries: 1772.48,
        auth: {
          disabled: true,
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
        defaultKeySchemaId: 1571.25,
        defaultValueSchemaId: 5174.17,
      },
      connectionTimeout: 5416.81,
      requestTimeout: 4580.28,
      maxRetries: 2859.01,
      maxBackOff: 4282.12,
      initialBackoff: 5350.62,
      backoffRate: 7682.89,
      authenticationTimeout: 2283.46,
      reauthenticationThreshold: 923.46,
      sasl: {
        disabled: false,
        username: "Dandre37",
        password: "9Z6I7w7EQSW5es6",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://finished-elver.info",
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
      onBackpressure: "drop",
      description: "on pish than",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 178.45,
      pqMode: "error",
      pqMaxBufferSize: 7556.67,
      pqMaxBackpressureSec: 7518.6,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_topic: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblHttp

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesCriblHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      loadBalanced: true,
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
      tokenTTLMinutes: 2911.29,
      excludeFields: [
        "<value 1>",
        "<value 2>",
      ],
      compression: "gzip",
      concurrency: 8557.42,
      maxPayloadSizeKB: 4064.44,
      maxPayloadEvents: 8179.5,
      rejectUnauthorized: false,
      timeoutSec: 3229.83,
      flushPeriodSec: 1997.64,
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
      throttleRatePerSec: "<value>",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "even unnecessarily westernise",
        },
      ],
      onBackpressure: "drop",
      description: "scrabble runway because overdue raw forenenst aw",
      url: "https://pricey-outlaw.com/",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://diligent-sticker.net",
          weight: 5932.74,
          __template_url: "https://vast-popularity.info/",
        },
      ],
      dnsResolvePeriodSec: 1294.95,
      loadBalanceStatsPeriodSec: 2341.58,
      pqStrictOrdering: false,
      pqRatePerSec: 2513.75,
      pqMode: "backpressure",
      pqMaxBufferSize: 3682.52,
      pqMaxBackpressureSec: 1435,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://candid-whack.info/",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      loadBalanced: true,
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
      tokenTTLMinutes: 2911.29,
      excludeFields: [
        "<value 1>",
        "<value 2>",
      ],
      compression: "gzip",
      concurrency: 8557.42,
      maxPayloadSizeKB: 4064.44,
      maxPayloadEvents: 8179.5,
      rejectUnauthorized: false,
      timeoutSec: 3229.83,
      flushPeriodSec: 1997.64,
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
      throttleRatePerSec: "<value>",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "even unnecessarily westernise",
        },
      ],
      onBackpressure: "drop",
      description: "scrabble runway because overdue raw forenenst aw",
      url: "https://pricey-outlaw.com/",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://diligent-sticker.net",
          weight: 5932.74,
          __template_url: "https://vast-popularity.info/",
        },
      ],
      dnsResolvePeriodSec: 1294.95,
      loadBalanceStatsPeriodSec: 2341.58,
      pqStrictOrdering: false,
      pqRatePerSec: 2513.75,
      pqMode: "backpressure",
      pqMaxBufferSize: 3682.52,
      pqMaxBackpressureSec: 1435,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://candid-whack.info/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblLake

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesCriblLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
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
      durationSeconds: 6581.58,
      stagePath: "<value>",
      addIdToStagePath: true,
      destPath: "<value>",
      objectACL: "authenticated-read",
      storageClass: "ONEZONE_IA",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: false,
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3098.59,
      maxOpenFiles: 6695.23,
      headerLine: "<value>",
      writeHighWaterMark: 2798.27,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 2261.75,
      maxFileIdleTimeSec: 3396.18,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 7520.15,
      awsAuthenticationMethod: "auto_rpc",
      format: "ddss",
      maxConcurrentFileParts: 9059.58,
      description: "rightfully boldly gadzooks lumpy inborn amid blond",
      emptyDirCleanupSec: 944.95,
      directoryBatchSize: 7297.11,
      deadletterPath: "<value>",
      maxRetryNum: 7744.48,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
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
      durationSeconds: 6581.58,
      stagePath: "<value>",
      addIdToStagePath: true,
      destPath: "<value>",
      objectACL: "authenticated-read",
      storageClass: "ONEZONE_IA",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: false,
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3098.59,
      maxOpenFiles: 6695.23,
      headerLine: "<value>",
      writeHighWaterMark: 2798.27,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 2261.75,
      maxFileIdleTimeSec: 3396.18,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 7520.15,
      awsAuthenticationMethod: "auto_rpc",
      format: "ddss",
      maxConcurrentFileParts: 9059.58,
      description: "rightfully boldly gadzooks lumpy inborn amid blond",
      emptyDirCleanupSec: 944.95,
      directoryBatchSize: 7297.11,
      deadletterPath: "<value>",
      maxRetryNum: 7744.48,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblSearchEngine

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesCriblSearchEngine" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        minVersion: "TLSv1.2",
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
        initialBackoff: 3099.42,
        backoffRate: 1820.69,
        maxBackoff: 5727.38,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "even unnecessarily westernise",
        },
      ],
      onBackpressure: "block",
      useRoundRobinDns: true,
      description: "thoroughly contrail drain pace bah supposing till despite bungalow cumbersome",
      url: "https://0.0.0.0:10200",
      excludeSelf: false,
      urls: [
        {
          url: "https://diligent-sticker.net",
          weight: 5932.74,
          __template_url: "https://vast-popularity.info/",
        },
      ],
      dnsResolvePeriodSec: 5409.67,
      loadBalanceStatsPeriodSec: 6870.47,
      pqStrictOrdering: true,
      pqRatePerSec: 5397.74,
      pqMode: "always",
      pqMaxBufferSize: 8873.99,
      pqMaxBackpressureSec: 4745.2,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://crushing-instructor.com/",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        minVersion: "TLSv1.2",
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
        initialBackoff: 3099.42,
        backoffRate: 1820.69,
        maxBackoff: 5727.38,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "even unnecessarily westernise",
        },
      ],
      onBackpressure: "block",
      useRoundRobinDns: true,
      description: "thoroughly contrail drain pace bah supposing till despite bungalow cumbersome",
      url: "https://0.0.0.0:10200",
      excludeSelf: false,
      urls: [
        {
          url: "https://diligent-sticker.net",
          weight: 5932.74,
          __template_url: "https://vast-popularity.info/",
        },
      ],
      dnsResolvePeriodSec: 5409.67,
      loadBalanceStatsPeriodSec: 6870.47,
      pqStrictOrdering: true,
      pqRatePerSec: 5397.74,
      pqMode: "always",
      pqMaxBufferSize: 8873.99,
      pqMaxBackpressureSec: 4745.2,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://crushing-instructor.com/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblTcp

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesCriblTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "cribl-tcp-output",
      type: "cribl_tcp",
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
      connectionTimeout: 596.15,
      writeTimeout: 2162.04,
      tokenTTLMinutes: 9138.19,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "apud display platypus furthermore",
        },
      ],
      excludeFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      onBackpressure: "block",
      description: "while fog at burly collaboration besides",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "adolescent-cemetery.org",
          port: 5699.66,
          tls: "off",
          servername: "<value>",
          weight: 7378.74,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 7256.86,
      loadBalanceStatsPeriodSec: 8935.22,
      maxConcurrentSenders: 929.7,
      pqStrictOrdering: true,
      pqRatePerSec: 9875.22,
      pqMode: "backpressure",
      pqMaxBufferSize: 6071.24,
      pqMaxBackpressureSec: 1880.42,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "cribl-tcp-output",
      type: "cribl_tcp",
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
      connectionTimeout: 596.15,
      writeTimeout: 2162.04,
      tokenTTLMinutes: 9138.19,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "apud display platypus furthermore",
        },
      ],
      excludeFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      onBackpressure: "block",
      description: "while fog at burly collaboration besides",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "adolescent-cemetery.org",
          port: 5699.66,
          tls: "off",
          servername: "<value>",
          weight: 7378.74,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 7256.86,
      loadBalanceStatsPeriodSec: 8935.22,
      maxConcurrentSenders: 929.7,
      pqStrictOrdering: true,
      pqRatePerSec: 9875.22,
      pqMode: "backpressure",
      pqMaxBufferSize: 6071.24,
      pqMaxBackpressureSec: 1880.42,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCrowdstrikeNextGenSiem

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesCrowdstrikeNextGenSiem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      concurrency: 8097.08,
      maxPayloadSizeKB: 4846.92,
      maxPayloadEvents: 5963.33,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 6613.32,
      flushPeriodSec: 4777.22,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "up tag in",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 2458.89,
      pqMode: "backpressure",
      pqMaxBufferSize: 831.45,
      pqMaxBackpressureSec: 4305.86,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://fatherly-wombat.com/",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      concurrency: 8097.08,
      maxPayloadSizeKB: 4846.92,
      maxPayloadEvents: 5963.33,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 6613.32,
      flushPeriodSec: 4777.22,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "up tag in",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 2458.89,
      pqMode: "backpressure",
      pqMaxBufferSize: 831.45,
      pqMaxBackpressureSec: 4305.86,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://fatherly-wombat.com/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDatabricks

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesDatabricks" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      addIdToStagePath: true,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3773.69,
      maxFileOpenTimeSec: 3323.71,
      maxFileIdleTimeSec: 5160.66,
      maxOpenFiles: 993.71,
      headerLine: "<value>",
      writeHighWaterMark: 4081.55,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
      timeoutSec: 3215.06,
      description: "tomography idealistic epic masquerade",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 1775.98,
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
      enablePageChecksum: false,
      emptyDirCleanupSec: 1.37,
      directoryBatchSize: 9464.86,
      deadletterPath: "<value>",
      maxRetryNum: 6256.47,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      addIdToStagePath: true,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3773.69,
      maxFileOpenTimeSec: 3323.71,
      maxFileIdleTimeSec: 5160.66,
      maxOpenFiles: 993.71,
      headerLine: "<value>",
      writeHighWaterMark: 4081.55,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
      timeoutSec: 3215.06,
      description: "tomography idealistic epic masquerade",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 1775.98,
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
      enablePageChecksum: false,
      emptyDirCleanupSec: 1.37,
      directoryBatchSize: 9464.86,
      deadletterPath: "<value>",
      maxRetryNum: 6256.47,
      __template_format: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDatadog

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesDatadog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      contentType: "json",
      message: "<value>",
      source: "<value>",
      host: "only-costume.biz",
      service: "<value>",
      tags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      batchByTags: true,
      allowApiKeyFromEvents: false,
      severity: "critical",
      site: "fed1",
      sendCountersAsCount: false,
      concurrency: 1885.2,
      maxPayloadSizeKB: 4426.31,
      maxPayloadEvents: 8430.61,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 1498.92,
      flushPeriodSec: 7565.5,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      authType: "manual",
      totalMemoryLimitKB: 8519.51,
      description: "mmm so sour strictly aha equally innovate chase untrue maintainer",
      customUrl: "https://perfumed-seagull.com/",
      pqStrictOrdering: true,
      pqRatePerSec: 322.1,
      pqMode: "backpressure",
      pqMaxBufferSize: 6215.92,
      pqMaxBackpressureSec: 5041.34,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      contentType: "json",
      message: "<value>",
      source: "<value>",
      host: "only-costume.biz",
      service: "<value>",
      tags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      batchByTags: true,
      allowApiKeyFromEvents: false,
      severity: "critical",
      site: "fed1",
      sendCountersAsCount: false,
      concurrency: 1885.2,
      maxPayloadSizeKB: 4426.31,
      maxPayloadEvents: 8430.61,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 1498.92,
      flushPeriodSec: 7565.5,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "drop",
      authType: "manual",
      totalMemoryLimitKB: 8519.51,
      description: "mmm so sour strictly aha equally innovate chase untrue maintainer",
      customUrl: "https://perfumed-seagull.com/",
      pqStrictOrdering: true,
      pqRatePerSec: 322.1,
      pqMode: "backpressure",
      pqMaxBufferSize: 6215.92,
      pqMaxBackpressureSec: 5041.34,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDataset

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesDataset" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      defaultSeverity: "fine",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      site: "us",
      concurrency: 5222.57,
      maxPayloadSizeKB: 8766.95,
      maxPayloadEvents: 9524.23,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 3024.67,
      flushPeriodSec: 1405.43,
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
      onBackpressure: "drop",
      authType: "manual",
      totalMemoryLimitKB: 4238.9,
      description: "display now fooey until gadzooks unlike biodegradable",
      customUrl: "https://official-cop-out.info/",
      pqStrictOrdering: false,
      pqRatePerSec: 678.56,
      pqMode: "error",
      pqMaxBufferSize: 2512.28,
      pqMaxBackpressureSec: 8635.5,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "<value>",
      textSecret: "<value>",
      __template_customUrl: "https://acclaimed-jellyfish.net",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      defaultSeverity: "fine",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      site: "us",
      concurrency: 5222.57,
      maxPayloadSizeKB: 8766.95,
      maxPayloadEvents: 9524.23,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 3024.67,
      flushPeriodSec: 1405.43,
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
      onBackpressure: "drop",
      authType: "manual",
      totalMemoryLimitKB: 4238.9,
      description: "display now fooey until gadzooks unlike biodegradable",
      customUrl: "https://official-cop-out.info/",
      pqStrictOrdering: false,
      pqRatePerSec: 678.56,
      pqMode: "error",
      pqMaxBufferSize: 2512.28,
      pqMaxBackpressureSec: 8635.5,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "<value>",
      textSecret: "<value>",
      __template_customUrl: "https://acclaimed-jellyfish.net",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDiskSpool

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesDiskSpool" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      partitionExpr: "<value>",
      description: "roughly dislocate voluntarily meaningfully oof aching on draft famously",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      partitionExpr: "<value>",
      description: "roughly dislocate voluntarily meaningfully oof aching on draft famously",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDlS3

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesDlS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 6017.04,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      objectACL: "public-read",
      storageClass: "STANDARD_IA",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3426.33,
      maxOpenFiles: 5934.82,
      headerLine: "<value>",
      writeHighWaterMark: 2939.76,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 2579.72,
      maxFileIdleTimeSec: 8007.26,
      maxConcurrentFileParts: 9016.49,
      verifyPermissions: false,
      maxClosingFilesToBackpressure: 8717.73,
      partitioningFields: [
        "<value 1>",
      ],
      description: "as statement lend mmm rule meager reward concerning",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 3600.26,
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
      emptyDirCleanupSec: 1425.86,
      directoryBatchSize: 9220.51,
      deadletterPath: "<value>",
      maxRetryNum: 5441.11,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 6017.04,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      objectACL: "public-read",
      storageClass: "STANDARD_IA",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 3426.33,
      maxOpenFiles: 5934.82,
      headerLine: "<value>",
      writeHighWaterMark: 2939.76,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 2579.72,
      maxFileIdleTimeSec: 8007.26,
      maxConcurrentFileParts: 9016.49,
      verifyPermissions: false,
      maxClosingFilesToBackpressure: 8717.73,
      partitioningFields: [
        "<value 1>",
      ],
      description: "as statement lend mmm rule meager reward concerning",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 3600.26,
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
      emptyDirCleanupSec: 1425.86,
      directoryBatchSize: 9220.51,
      deadletterPath: "<value>",
      maxRetryNum: 5441.11,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDynatraceHttp

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesDynatraceHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "dynatrace-http-output",
      type: "dynatrace_http",
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
      method: "POST",
      keepAlive: false,
      concurrency: 5392.66,
      maxPayloadSizeKB: 7980.61,
      maxPayloadEvents: 7143.68,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 1332.72,
      flushPeriodSec: 5064.03,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      totalMemoryLimitKB: 9354.53,
      description: "shipper which um",
      pqStrictOrdering: false,
      pqRatePerSec: 1822.5,
      pqMode: "error",
      pqMaxBufferSize: 9681.3,
      pqMaxBackpressureSec: 5846.47,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      token: "your-api-key",
      textSecret: "<value>",
      environmentId: "<id>",
      activeGateDomain: "<value>",
      url: "https://pushy-self-confidence.org/",
      __template_url: "https://growing-embarrassment.biz",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "dynatrace-http-output",
      type: "dynatrace_http",
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
      method: "POST",
      keepAlive: false,
      concurrency: 5392.66,
      maxPayloadSizeKB: 7980.61,
      maxPayloadEvents: 7143.68,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 1332.72,
      flushPeriodSec: 5064.03,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      totalMemoryLimitKB: 9354.53,
      description: "shipper which um",
      pqStrictOrdering: false,
      pqRatePerSec: 1822.5,
      pqMode: "error",
      pqMaxBufferSize: 9681.3,
      pqMaxBackpressureSec: 5846.47,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      token: "your-api-key",
      textSecret: "<value>",
      environmentId: "<id>",
      activeGateDomain: "<value>",
      url: "https://pushy-self-confidence.org/",
      __template_url: "https://growing-embarrassment.biz",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDynatraceOtlp

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesDynatraceOtlp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
      ],
      protocol: "http",
      endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
      otlpVersion: "1.3.1",
      compress: "none",
      httpCompress: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 7981.73,
      maxPayloadSizeKB: 361.38,
      timeoutSec: 7920.67,
      flushPeriodSec: 6252.76,
      failedRequestLoggingMode: "payloadAndHeaders",
      connectionTimeout: 5578.16,
      keepAliveTime: 9398.38,
      keepAlive: false,
      endpointType: "saas",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      onBackpressure: "drop",
      description: "deflect crushing that before almost bravely parsnip ack",
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
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      pqStrictOrdering: false,
      pqRatePerSec: 7481.57,
      pqMode: "backpressure",
      pqMaxBufferSize: 4345.86,
      pqMaxBackpressureSec: 8357.17,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
      ],
      protocol: "http",
      endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
      otlpVersion: "1.3.1",
      compress: "none",
      httpCompress: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 7981.73,
      maxPayloadSizeKB: 361.38,
      timeoutSec: 7920.67,
      flushPeriodSec: 6252.76,
      failedRequestLoggingMode: "payloadAndHeaders",
      connectionTimeout: 5578.16,
      keepAliveTime: 9398.38,
      keepAlive: false,
      endpointType: "saas",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      onBackpressure: "drop",
      description: "deflect crushing that before almost bravely parsnip ack",
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
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      pqStrictOrdering: false,
      pqRatePerSec: 7481.57,
      pqMode: "backpressure",
      pqMaxBufferSize: 4345.86,
      pqMaxBackpressureSec: 8357.17,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesElastic

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesElastic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      loadBalanced: false,
      index: "logs",
      docType: "<value>",
      concurrency: 715.44,
      maxPayloadSizeKB: 9626.58,
      maxPayloadEvents: 9841.54,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 1285.5,
      flushPeriodSec: 4002.99,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: false,
        username: "Jackie_Champlin",
        password: "TD5khJLbia6RPkm",
        authType: "secret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticVersion: "7",
      elasticPipeline: "<value>",
      includeDocId: false,
      writeAction: "index",
      retryPartialErrors: false,
      onBackpressure: "block",
      description: "sizzling sadly kosher calmly while invite gadzooks subexpression unbearably",
      url: "https://hollow-brush.biz/",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://bright-traditionalism.name/",
          weight: 6646.75,
          __template_url: "https://glossy-squid.org/",
        },
      ],
      dnsResolvePeriodSec: 273.81,
      loadBalanceStatsPeriodSec: 8017.84,
      pqStrictOrdering: true,
      pqRatePerSec: 5464.35,
      pqMode: "backpressure",
      pqMaxBufferSize: 9238.4,
      pqMaxBackpressureSec: 930.35,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://far-flung-jump.name",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      loadBalanced: false,
      index: "logs",
      docType: "<value>",
      concurrency: 715.44,
      maxPayloadSizeKB: 9626.58,
      maxPayloadEvents: 9841.54,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 1285.5,
      flushPeriodSec: 4002.99,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: false,
        username: "Jackie_Champlin",
        password: "TD5khJLbia6RPkm",
        authType: "secret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticVersion: "7",
      elasticPipeline: "<value>",
      includeDocId: false,
      writeAction: "index",
      retryPartialErrors: false,
      onBackpressure: "block",
      description: "sizzling sadly kosher calmly while invite gadzooks subexpression unbearably",
      url: "https://hollow-brush.biz/",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://bright-traditionalism.name/",
          weight: 6646.75,
          __template_url: "https://glossy-squid.org/",
        },
      ],
      dnsResolvePeriodSec: 273.81,
      loadBalanceStatsPeriodSec: 8017.84,
      pqStrictOrdering: true,
      pqRatePerSec: 5464.35,
      pqMode: "backpressure",
      pqMaxBufferSize: 9238.4,
      pqMaxBackpressureSec: 930.35,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://far-flung-jump.name",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesElasticCloud

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesElasticCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      concurrency: 4124.44,
      maxPayloadSizeKB: 3663.2,
      maxPayloadEvents: 6869.14,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 5609.59,
      flushPeriodSec: 5259.8,
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
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: false,
        username: "Jackie_Champlin",
        password: "TD5khJLbia6RPkm",
        authType: "secret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticPipeline: "<value>",
      includeDocId: false,
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "except finally meanwhile worth like marvelous nor",
      pqStrictOrdering: false,
      pqRatePerSec: 8685.82,
      pqMode: "error",
      pqMaxBufferSize: 9260.3,
      pqMaxBackpressureSec: 4794.51,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      concurrency: 4124.44,
      maxPayloadSizeKB: 3663.2,
      maxPayloadEvents: 6869.14,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 5609.59,
      flushPeriodSec: 5259.8,
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
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: false,
        username: "Jackie_Champlin",
        password: "TD5khJLbia6RPkm",
        authType: "secret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticPipeline: "<value>",
      includeDocId: false,
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "except finally meanwhile worth like marvelous nor",
      pqStrictOrdering: false,
      pqRatePerSec: 8685.82,
      pqMode: "error",
      pqMaxBufferSize: 9260.3,
      pqMaxBackpressureSec: 4794.51,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesExabeam

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesExabeam" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "exabeam-output",
      type: "exabeam",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      stagePath: "/tmp/staging",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v2",
      objectACL: "authenticated-read",
      storageClass: "ARCHIVE",
      reuseConnections: false,
      rejectUnauthorized: true,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      maxFileOpenTimeSec: 4079.53,
      maxFileIdleTimeSec: 2520.16,
      maxOpenFiles: 7042.03,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileSizeMB: 3448.81,
      encodedConfiguration: "<value>",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
      siteName: "<value>",
      siteId: "<id>",
      timezoneOffset: "<value>",
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      description: "whoa vice foot",
      emptyDirCleanupSec: 3707.13,
      directoryBatchSize: 4248,
      deadletterPath: "<value>",
      maxRetryNum: 9075.43,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "exabeam-output",
      type: "exabeam",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      stagePath: "/tmp/staging",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v2",
      objectACL: "authenticated-read",
      storageClass: "ARCHIVE",
      reuseConnections: false,
      rejectUnauthorized: true,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      maxFileOpenTimeSec: 4079.53,
      maxFileIdleTimeSec: 2520.16,
      maxOpenFiles: 7042.03,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileSizeMB: 3448.81,
      encodedConfiguration: "<value>",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
      siteName: "<value>",
      siteId: "<id>",
      timezoneOffset: "<value>",
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      description: "whoa vice foot",
      emptyDirCleanupSec: 3707.13,
      directoryBatchSize: 4248,
      deadletterPath: "<value>",
      maxRetryNum: 9075.43,
      __template_region: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesFilesystem

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesFilesystem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 2839.52,
      maxFileOpenTimeSec: 9635.12,
      maxFileIdleTimeSec: 3867.38,
      maxOpenFiles: 7228.29,
      headerLine: "<value>",
      writeHighWaterMark: 3951.73,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      description: "huddle solemnly divert information",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 9998.38,
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
      emptyDirCleanupSec: 1168.77,
      directoryBatchSize: 7818.69,
      deadletterPath: "<value>",
      maxRetryNum: 9073.02,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 2839.52,
      maxFileOpenTimeSec: 9635.12,
      maxFileIdleTimeSec: 3867.38,
      maxOpenFiles: 7228.29,
      headerLine: "<value>",
      writeHighWaterMark: 3951.73,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      description: "huddle solemnly divert information",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 9998.38,
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
      emptyDirCleanupSec: 1168.77,
      directoryBatchSize: 7818.69,
      deadletterPath: "<value>",
      maxRetryNum: 9073.02,
      __template_format: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleChronicle

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesGoogleChronicle" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "google-chronicle-output",
      type: "google_chronicle",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      apiVersion: "v1",
      authenticationMethod: "serviceAccountSecret",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      logFormatType: "unstructured",
      region: "us",
      concurrency: 2546.17,
      maxPayloadSizeKB: 2294.07,
      maxPayloadEvents: 2318.1,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 2096.75,
      flushPeriodSec: 678.05,
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
      onBackpressure: "queue",
      totalMemoryLimitKB: 7168.57,
      description: "almighty whereas favorable whistle selfishly hmph gadzooks sweatshop",
      extraLogTypes: [
        {
          logType: "<value>",
          description: "though truthfully doing complete velocity",
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
      pqRatePerSec: 5867.21,
      pqMode: "error",
      pqMaxBufferSize: 492.48,
      pqMaxBackpressureSec: 8211.8,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "google-chronicle-output",
      type: "google_chronicle",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      apiVersion: "v1",
      authenticationMethod: "serviceAccountSecret",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      logFormatType: "unstructured",
      region: "us",
      concurrency: 2546.17,
      maxPayloadSizeKB: 2294.07,
      maxPayloadEvents: 2318.1,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 2096.75,
      flushPeriodSec: 678.05,
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
      onBackpressure: "queue",
      totalMemoryLimitKB: 7168.57,
      description: "almighty whereas favorable whistle selfishly hmph gadzooks sweatshop",
      extraLogTypes: [
        {
          logType: "<value>",
          description: "though truthfully doing complete velocity",
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
      pqRatePerSec: 5867.21,
      pqMode: "error",
      pqMaxBufferSize: 492.48,
      pqMaxBackpressureSec: 8211.8,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleCloudLogging

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesGoogleCloudLogging" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "google-cloud-logging-output",
      type: "google_cloud_logging",
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
      maxPayloadSizeKB: 9838.3,
      maxPayloadEvents: 3642.94,
      flushPeriodSec: 4147.73,
      concurrency: 6145.93,
      connectionTimeout: 5021.98,
      timeoutSec: 4608.29,
      throttleRateReqPerSec: 160126,
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
      totalMemoryLimitKB: 3981.47,
      description: "inwardly explode mid energetically pfft aha advancement whereas",
      logLocationExpression: "my-project",
      payloadExpression: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 9856.08,
      pqMode: "backpressure",
      pqMaxBufferSize: 5638.43,
      pqMaxBackpressureSec: 9418.08,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "google-cloud-logging-output",
      type: "google_cloud_logging",
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
      maxPayloadSizeKB: 9838.3,
      maxPayloadEvents: 3642.94,
      flushPeriodSec: 4147.73,
      concurrency: 6145.93,
      connectionTimeout: 5021.98,
      timeoutSec: 4608.29,
      throttleRateReqPerSec: 160126,
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
      totalMemoryLimitKB: 3981.47,
      description: "inwardly explode mid energetically pfft aha advancement whereas",
      logLocationExpression: "my-project",
      payloadExpression: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 9856.08,
      pqMode: "backpressure",
      pqMaxBufferSize: 5638.43,
      pqMaxBackpressureSec: 9418.08,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleCloudStorage

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesGoogleCloudStorage" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      destPath: "<value>",
      verifyPermissions: true,
      objectACL: "authenticated-read",
      storageClass: "ARCHIVE",
      reuseConnections: false,
      rejectUnauthorized: false,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 7424.2,
      maxFileOpenTimeSec: 2276.64,
      maxFileIdleTimeSec: 7280.8,
      maxOpenFiles: 302.63,
      headerLine: "<value>",
      writeHighWaterMark: 9858.19,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      description: "serene gosh purple supposing recklessly sugary settle feline sometimes regarding",
      compress: "gzip",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 7424.12,
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
      emptyDirCleanupSec: 8358.55,
      directoryBatchSize: 6405.05,
      deadletterPath: "<value>",
      maxRetryNum: 776.5,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      destPath: "<value>",
      verifyPermissions: true,
      objectACL: "authenticated-read",
      storageClass: "ARCHIVE",
      reuseConnections: false,
      rejectUnauthorized: false,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 7424.2,
      maxFileOpenTimeSec: 2276.64,
      maxFileIdleTimeSec: 7280.8,
      maxOpenFiles: 302.63,
      headerLine: "<value>",
      writeHighWaterMark: 9858.19,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      description: "serene gosh purple supposing recklessly sugary settle feline sometimes regarding",
      compress: "gzip",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 7424.12,
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
      emptyDirCleanupSec: 8358.55,
      directoryBatchSize: 6405.05,
      deadletterPath: "<value>",
      maxRetryNum: 776.5,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGooglePubsub

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesGooglePubsub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      topicName: "my-topic",
      createTopic: false,
      orderedDelivery: false,
      region: "<value>",
      googleAuthMethod: "auto",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      batchSize: 6552.81,
      batchTimeout: 2658.54,
      maxQueueSize: 2560.36,
      maxRecordSizeKB: 4650.34,
      flushPeriod: 2659.98,
      maxInProgress: 7476.37,
      onBackpressure: "drop",
      description: "safely functional what haunting",
      pqStrictOrdering: true,
      pqRatePerSec: 3789.51,
      pqMode: "backpressure",
      pqMaxBufferSize: 282.75,
      pqMaxBackpressureSec: 3210.38,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      topicName: "my-topic",
      createTopic: false,
      orderedDelivery: false,
      region: "<value>",
      googleAuthMethod: "auto",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      batchSize: 6552.81,
      batchTimeout: 2658.54,
      maxQueueSize: 2560.36,
      maxRecordSizeKB: 4650.34,
      flushPeriod: 2659.98,
      maxInProgress: 7476.37,
      onBackpressure: "drop",
      description: "safely functional what haunting",
      pqStrictOrdering: true,
      pqRatePerSec: 3789.51,
      pqMode: "backpressure",
      pqMaxBufferSize: 282.75,
      pqMaxBackpressureSec: 3210.38,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGrafanaCloud

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesGrafanaCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
      prometheusUrl: "https://yellowish-starboard.com/",
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
        authType: "token",
        token: "<value>",
        textSecret: "<value>",
        username: "Leann_Koelpin",
        password: "KdHOL4ek1KaN7NC",
        credentialsSecret: "<value>",
      },
      lokiAuth: {
        authType: "textSecret",
        token: "<value>",
        textSecret: "<value>",
        username: "Hollis0",
        password: "5HjOjzaEbh7lARv",
        credentialsSecret: "<value>",
      },
      concurrency: 673.37,
      maxPayloadSizeKB: 7913.34,
      maxPayloadEvents: 8735.02,
      rejectUnauthorized: false,
      timeoutSec: 9072.07,
      flushPeriodSec: 3939.27,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "optimistically incidentally mockingly zowie SUV mushy round joshingly",
      compress: false,
      pqStrictOrdering: true,
      pqRatePerSec: 2929.7,
      pqMode: "backpressure",
      pqMaxBufferSize: 7658.78,
      pqMaxBackpressureSec: 3838.49,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_lokiUrl: "https://weary-waterspout.info/",
      __template_prometheusUrl: "https://candid-republican.biz",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
      prometheusUrl: "https://yellowish-starboard.com/",
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
        authType: "token",
        token: "<value>",
        textSecret: "<value>",
        username: "Leann_Koelpin",
        password: "KdHOL4ek1KaN7NC",
        credentialsSecret: "<value>",
      },
      lokiAuth: {
        authType: "textSecret",
        token: "<value>",
        textSecret: "<value>",
        username: "Hollis0",
        password: "5HjOjzaEbh7lARv",
        credentialsSecret: "<value>",
      },
      concurrency: 673.37,
      maxPayloadSizeKB: 7913.34,
      maxPayloadEvents: 8735.02,
      rejectUnauthorized: false,
      timeoutSec: 9072.07,
      flushPeriodSec: 3939.27,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "optimistically incidentally mockingly zowie SUV mushy round joshingly",
      compress: false,
      pqStrictOrdering: true,
      pqRatePerSec: 2929.7,
      pqMode: "backpressure",
      pqMaxBufferSize: 7658.78,
      pqMaxBackpressureSec: 3838.49,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_lokiUrl: "https://weary-waterspout.info/",
      __template_prometheusUrl: "https://candid-republican.biz",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGraphite

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesGraphite" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      mtu: 2555.62,
      flushPeriodSec: 9851.36,
      dnsResolvePeriodSec: 8929.53,
      description: "upright well-off weary zowie procurement after debit where joint",
      throttleRatePerSec: "<value>",
      connectionTimeout: 5593.14,
      writeTimeout: 1440.65,
      onBackpressure: "queue",
      pqStrictOrdering: true,
      pqRatePerSec: 8829.93,
      pqMode: "error",
      pqMaxBufferSize: 2644.08,
      pqMaxBackpressureSec: 6049.44,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      mtu: 2555.62,
      flushPeriodSec: 9851.36,
      dnsResolvePeriodSec: 8929.53,
      description: "upright well-off weary zowie procurement after debit where joint",
      throttleRatePerSec: "<value>",
      connectionTimeout: 5593.14,
      writeTimeout: 1440.65,
      onBackpressure: "queue",
      pqStrictOrdering: true,
      pqRatePerSec: 8829.93,
      pqMode: "error",
      pqMaxBufferSize: 2644.08,
      pqMaxBackpressureSec: 6049.44,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesHoneycomb

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesHoneycomb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      concurrency: 6089.08,
      maxPayloadSizeKB: 6663.47,
      maxPayloadEvents: 2055.59,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 9280.58,
      flushPeriodSec: 387.67,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      authType: "manual",
      description: "aw hm woot behind ugh stir-fry",
      pqStrictOrdering: false,
      pqRatePerSec: 6023.73,
      pqMode: "error",
      pqMaxBufferSize: 8829.85,
      pqMaxBackpressureSec: 9540.12,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      concurrency: 6089.08,
      maxPayloadSizeKB: 6663.47,
      maxPayloadEvents: 2055.59,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 9280.58,
      flushPeriodSec: 387.67,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      authType: "manual",
      description: "aw hm woot behind ugh stir-fry",
      pqStrictOrdering: false,
      pqRatePerSec: 6023.73,
      pqMode: "error",
      pqMaxBufferSize: 8829.85,
      pqMaxBackpressureSec: 9540.12,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      team: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesHumioHec

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesHumioHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      url: "https://cloud.us.humio.com/api/v1/ingest/hec",
      concurrency: 4355.16,
      maxPayloadSizeKB: 1029.98,
      maxPayloadEvents: 1954.14,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 68.73,
      flushPeriodSec: 575.42,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "famously circa arrange dreamily alb",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 1756.9,
      pqMode: "error",
      pqMaxBufferSize: 2949.15,
      pqMaxBackpressureSec: 69.58,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://sleepy-strait.biz",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      url: "https://cloud.us.humio.com/api/v1/ingest/hec",
      concurrency: 4355.16,
      maxPayloadSizeKB: 1029.98,
      maxPayloadEvents: 1954.14,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 68.73,
      flushPeriodSec: 575.42,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "famously circa arrange dreamily alb",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 1756.9,
      pqMode: "error",
      pqMaxBufferSize: 2949.15,
      pqMaxBackpressureSec: 69.58,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://sleepy-strait.biz",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesInfluxdb

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesInfluxdb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      url: "http://localhost:8086",
      useV2API: true,
      timestampPrecision: "s",
      dynamicValueFieldName: false,
      valueFieldName: "<value>",
      concurrency: 5921.23,
      maxPayloadSizeKB: 2620.57,
      maxPayloadEvents: 4878.98,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 39.35,
      flushPeriodSec: 7222.2,
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
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "credentialsSecret",
      description: "orchestrate certainly sniff",
      database: "mydb",
      bucket: "<value>",
      org: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 7421.89,
      pqMode: "error",
      pqMaxBufferSize: 1857.19,
      pqMaxBackpressureSec: 3931.9,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Duane.Waelchi",
      password: "jBN_GToOj0oJwfn",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://milky-bump.net",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      url: "http://localhost:8086",
      useV2API: true,
      timestampPrecision: "s",
      dynamicValueFieldName: false,
      valueFieldName: "<value>",
      concurrency: 5921.23,
      maxPayloadSizeKB: 2620.57,
      maxPayloadEvents: 4878.98,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 39.35,
      flushPeriodSec: 7222.2,
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
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "credentialsSecret",
      description: "orchestrate certainly sniff",
      database: "mydb",
      bucket: "<value>",
      org: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 7421.89,
      pqMode: "error",
      pqMaxBufferSize: 1857.19,
      pqMaxBackpressureSec: 3931.9,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Duane.Waelchi",
      password: "jBN_GToOj0oJwfn",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://milky-bump.net",
      __template_database: "<value>",
      __template_bucket: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesKafka

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesKafka" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      format: "json",
      compression: "none",
      maxRecordSizeKB: 9722.15,
      flushEventCount: 1867.28,
      flushPeriodSec: 8326.56,
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://mad-gripper.org/",
        connectionTimeout: 4801.03,
        requestTimeout: 8307.36,
        maxRetries: 1772.48,
        auth: {
          disabled: true,
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
        defaultKeySchemaId: 1571.25,
        defaultValueSchemaId: 5174.17,
      },
      connectionTimeout: 1543.31,
      requestTimeout: 9837.13,
      maxRetries: 447.48,
      maxBackOff: 8719.41,
      initialBackoff: 294.38,
      backoffRate: 6828.5,
      authenticationTimeout: 7696.53,
      reauthenticationThreshold: 3652.44,
      sasl: {
        disabled: false,
        username: "Dandre37",
        password: "9Z6I7w7EQSW5es6",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://finished-elver.info",
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
      description: "darn yuck gastropod heavenly sticky",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 6846.94,
      pqMode: "error",
      pqMaxBufferSize: 7644.94,
      pqMaxBackpressureSec: 3408.41,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      format: "json",
      compression: "none",
      maxRecordSizeKB: 9722.15,
      flushEventCount: 1867.28,
      flushPeriodSec: 8326.56,
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://mad-gripper.org/",
        connectionTimeout: 4801.03,
        requestTimeout: 8307.36,
        maxRetries: 1772.48,
        auth: {
          disabled: true,
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
        defaultKeySchemaId: 1571.25,
        defaultValueSchemaId: 5174.17,
      },
      connectionTimeout: 1543.31,
      requestTimeout: 9837.13,
      maxRetries: 447.48,
      maxBackOff: 8719.41,
      initialBackoff: 294.38,
      backoffRate: 6828.5,
      authenticationTimeout: 7696.53,
      reauthenticationThreshold: 3652.44,
      sasl: {
        disabled: false,
        username: "Dandre37",
        password: "9Z6I7w7EQSW5es6",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://finished-elver.info",
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
      description: "darn yuck gastropod heavenly sticky",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 6846.94,
      pqMode: "error",
      pqMaxBufferSize: 7644.94,
      pqMaxBackpressureSec: 3408.41,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesKinesis

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesKinesis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 8206.04,
      concurrency: 7802.23,
      maxRecordSizeKB: 2216.97,
      flushPeriodSec: 3377.3,
      compression: "gzip",
      useListShards: false,
      asNdjson: true,
      onBackpressure: "drop",
      description: "forgo damaged ugh phooey afore whether shout responsibility",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      maxEventsPerFlush: 9807.8,
      pqStrictOrdering: true,
      pqRatePerSec: 6962.74,
      pqMode: "backpressure",
      pqMaxBufferSize: 5661.52,
      pqMaxBackpressureSec: 9315.69,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 8206.04,
      concurrency: 7802.23,
      maxRecordSizeKB: 2216.97,
      flushPeriodSec: 3377.3,
      compression: "gzip",
      useListShards: false,
      asNdjson: true,
      onBackpressure: "drop",
      description: "forgo damaged ugh phooey afore whether shout responsibility",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      maxEventsPerFlush: 9807.8,
      pqStrictOrdering: true,
      pqRatePerSec: 6962.74,
      pqMode: "backpressure",
      pqMaxBufferSize: 5661.52,
      pqMaxBackpressureSec: 9315.69,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesLoki

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesLoki" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "loki-output",
      type: "loki",
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
      url: "http://localhost:3100/loki/api/v1/push",
      message: "<value>",
      messageFormat: "json",
      labels: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "textSecret",
      concurrency: 6409.76,
      maxPayloadSizeKB: 6106.28,
      maxPayloadEvents: 3452.12,
      rejectUnauthorized: true,
      timeoutSec: 4325.59,
      flushPeriodSec: 1640.6,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      enableDynamicHeaders: false,
      onBackpressure: "queue",
      totalMemoryLimitKB: 1950.82,
      description: "only gleefully extract knight bah hunger",
      compress: true,
      token: "<value>",
      textSecret: "<value>",
      username: "Sydnie25",
      password: "VQsq6QXVCZ8Kn7z",
      credentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 4917.15,
      pqMode: "error",
      pqMaxBufferSize: 7013.67,
      pqMaxBackpressureSec: 1661.58,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "loki-output",
      type: "loki",
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
      url: "http://localhost:3100/loki/api/v1/push",
      message: "<value>",
      messageFormat: "json",
      labels: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "textSecret",
      concurrency: 6409.76,
      maxPayloadSizeKB: 6106.28,
      maxPayloadEvents: 3452.12,
      rejectUnauthorized: true,
      timeoutSec: 4325.59,
      flushPeriodSec: 1640.6,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      enableDynamicHeaders: false,
      onBackpressure: "queue",
      totalMemoryLimitKB: 1950.82,
      description: "only gleefully extract knight bah hunger",
      compress: true,
      token: "<value>",
      textSecret: "<value>",
      username: "Sydnie25",
      password: "VQsq6QXVCZ8Kn7z",
      credentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 4917.15,
      pqMode: "error",
      pqMaxBufferSize: 7013.67,
      pqMaxBackpressureSec: 1661.58,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMicrosoftFabric

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesMicrosoftFabric" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 8085.68,
      flushEventCount: 5565.7,
      flushPeriodSec: 8778.68,
      connectionTimeout: 4612.14,
      requestTimeout: 3932.16,
      maxRetries: 3449.9,
      maxBackOff: 3886.61,
      initialBackoff: 6192.97,
      backoffRate: 7303.05,
      authenticationTimeout: 2506.22,
      reauthenticationThreshold: 1539.14,
      sasl: {
        disabled: true,
        mechanism: "plain",
        username: "Robyn94",
        textSecret: "<value>",
        clientSecretAuthType: "certificate",
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
      onBackpressure: "drop",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
      description: "with rudely after tankful teriyaki wearily calculus",
      pqStrictOrdering: true,
      pqRatePerSec: 6531.7,
      pqMode: "error",
      pqMaxBufferSize: 9207.64,
      pqMaxBackpressureSec: 6510.1,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
      ],
      topic: "logs",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 8085.68,
      flushEventCount: 5565.7,
      flushPeriodSec: 8778.68,
      connectionTimeout: 4612.14,
      requestTimeout: 3932.16,
      maxRetries: 3449.9,
      maxBackOff: 3886.61,
      initialBackoff: 6192.97,
      backoffRate: 7303.05,
      authenticationTimeout: 2506.22,
      reauthenticationThreshold: 1539.14,
      sasl: {
        disabled: true,
        mechanism: "plain",
        username: "Robyn94",
        textSecret: "<value>",
        clientSecretAuthType: "certificate",
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
      onBackpressure: "drop",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
      description: "with rudely after tankful teriyaki wearily calculus",
      pqStrictOrdering: true,
      pqRatePerSec: 6531.7,
      pqMode: "error",
      pqMaxBufferSize: 9207.64,
      pqMaxBackpressureSec: 6510.1,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_topic: "<value>",
      __template_bootstrap_server: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMinio

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesMinio" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      addIdToStagePath: false,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "public-read",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: true,
      verifyPermissions: false,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4316.27,
      maxOpenFiles: 4256.66,
      headerLine: "<value>",
      writeHighWaterMark: 8965.01,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 9596.94,
      maxFileIdleTimeSec: 1508.47,
      maxConcurrentFileParts: 4322.39,
      description: "jut amidst powerfully palatable pish phew yuck graffiti",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 8592.3,
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
      enablePageChecksum: true,
      emptyDirCleanupSec: 5706.99,
      directoryBatchSize: 3391.85,
      deadletterPath: "<value>",
      maxRetryNum: 3211.59,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      addIdToStagePath: false,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "public-read",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: true,
      verifyPermissions: false,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4316.27,
      maxOpenFiles: 4256.66,
      headerLine: "<value>",
      writeHighWaterMark: 8965.01,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 9596.94,
      maxFileIdleTimeSec: 1508.47,
      maxConcurrentFileParts: 4322.39,
      description: "jut amidst powerfully palatable pish phew yuck graffiti",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 8592.3,
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
      enablePageChecksum: true,
      emptyDirCleanupSec: 5706.99,
      directoryBatchSize: 3391.85,
      deadletterPath: "<value>",
      maxRetryNum: 3211.59,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMsk

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesMsk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ack: 0,
      format: "raw",
      compression: "lz4",
      maxRecordSizeKB: 7365.88,
      flushEventCount: 5037.32,
      flushPeriodSec: 733.94,
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://mad-gripper.org/",
        connectionTimeout: 4801.03,
        requestTimeout: 8307.36,
        maxRetries: 1772.48,
        auth: {
          disabled: true,
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
        defaultKeySchemaId: 1571.25,
        defaultValueSchemaId: 5174.17,
      },
      connectionTimeout: 3352.94,
      requestTimeout: 9016.83,
      maxRetries: 250.56,
      maxBackOff: 358.28,
      initialBackoff: 3331.14,
      backoffRate: 9043.11,
      authenticationTimeout: 5957.13,
      reauthenticationThreshold: 3979.64,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2625.77,
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
      description: "elderly euphonium scarcely ugh",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 4310.91,
      pqMode: "backpressure",
      pqMaxBufferSize: 3599.09,
      pqMaxBackpressureSec: 452.82,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ack: 0,
      format: "raw",
      compression: "lz4",
      maxRecordSizeKB: 7365.88,
      flushEventCount: 5037.32,
      flushPeriodSec: 733.94,
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://mad-gripper.org/",
        connectionTimeout: 4801.03,
        requestTimeout: 8307.36,
        maxRetries: 1772.48,
        auth: {
          disabled: true,
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
        defaultKeySchemaId: 1571.25,
        defaultValueSchemaId: 5174.17,
      },
      connectionTimeout: 3352.94,
      requestTimeout: 9016.83,
      maxRetries: 250.56,
      maxBackOff: 358.28,
      initialBackoff: 3331.14,
      backoffRate: 9043.11,
      authenticationTimeout: 5957.13,
      reauthenticationThreshold: 3979.64,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2625.77,
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
      description: "elderly euphonium scarcely ugh",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 4310.91,
      pqMode: "backpressure",
      pqMaxBufferSize: 3599.09,
      pqMaxBackpressureSec: 452.82,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNetflow

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesNetflow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
      ],
      hosts: [
        {
          host: "localhost",
          port: 2055,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 7042.81,
      enableIpSpoofing: true,
      description: "spiffy slight athwart brr terrorise kindheartedly pleasing considering awful soupy",
      maxRecordSize: 5019.65,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
      ],
      hosts: [
        {
          host: "localhost",
          port: 2055,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 7042.81,
      enableIpSpoofing: true,
      description: "spiffy slight athwart brr terrorise kindheartedly pleasing considering awful soupy",
      maxRecordSize: 5019.65,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNewrelic

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesNewrelic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      region: "EU",
      logType: "<value>",
      messageField: "<value>",
      metadata: [
        {
          name: "service",
          value: "<value>",
        },
      ],
      concurrency: 3818.67,
      maxPayloadSizeKB: 2566.11,
      maxPayloadEvents: 5561.83,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 7175.04,
      flushPeriodSec: 729.87,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "secret",
      totalMemoryLimitKB: 232.8,
      description: "incline snarling gerbil gallery optimistically for well",
      customUrl: "https://little-exploration.org/",
      pqStrictOrdering: true,
      pqRatePerSec: 2782.58,
      pqMode: "backpressure",
      pqMaxBufferSize: 6722.29,
      pqMaxBackpressureSec: 7516.35,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      region: "EU",
      logType: "<value>",
      messageField: "<value>",
      metadata: [
        {
          name: "service",
          value: "<value>",
        },
      ],
      concurrency: 3818.67,
      maxPayloadSizeKB: 2566.11,
      maxPayloadEvents: 5561.83,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 7175.04,
      flushPeriodSec: 729.87,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "secret",
      totalMemoryLimitKB: 232.8,
      description: "incline snarling gerbil gallery optimistically for well",
      customUrl: "https://little-exploration.org/",
      pqStrictOrdering: true,
      pqRatePerSec: 2782.58,
      pqMode: "backpressure",
      pqMaxBufferSize: 6722.29,
      pqMaxBackpressureSec: 7516.35,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNewrelicEvents

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesNewrelicEvents" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      concurrency: 5347.08,
      maxPayloadSizeKB: 6357.44,
      maxPayloadEvents: 6169.15,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 4402.77,
      flushPeriodSec: 5165.94,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "celebrated yowza whether popularize given instead exactly",
      customUrl: "https://waterlogged-declaration.net/",
      pqStrictOrdering: false,
      pqRatePerSec: 6426.39,
      pqMode: "error",
      pqMaxBufferSize: 1348.76,
      pqMaxBackpressureSec: 1359.03,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
      __template_region: "<value>",
      __template_accountId: "<id>",
      __template_eventType: "<value>",
      __template_customUrl: "https://puzzled-rosemary.net/",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      concurrency: 5347.08,
      maxPayloadSizeKB: 6357.44,
      maxPayloadEvents: 6169.15,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 4402.77,
      flushPeriodSec: 5165.94,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "celebrated yowza whether popularize given instead exactly",
      customUrl: "https://waterlogged-declaration.net/",
      pqStrictOrdering: false,
      pqRatePerSec: 6426.39,
      pqMode: "error",
      pqMaxBufferSize: 1348.76,
      pqMaxBackpressureSec: 1359.03,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
      __template_region: "<value>",
      __template_accountId: "<id>",
      __template_eventType: "<value>",
      __template_customUrl: "https://puzzled-rosemary.net/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesOpenTelemetry

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesOpenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      protocol: "http",
      endpoint: "http://localhost:4317",
      otlpVersion: "1.3.1",
      compress: "none",
      httpCompress: "gzip",
      authType: "credentialsSecret",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 6472.94,
      maxPayloadSizeKB: 5908.29,
      timeoutSec: 6271.77,
      flushPeriodSec: 4406.74,
      failedRequestLoggingMode: "none",
      connectionTimeout: 4701.69,
      keepAliveTime: 3716.11,
      keepAlive: false,
      onBackpressure: "queue",
      description: "cannon quaintly jaggedly",
      username: "Ima_Schultz",
      password: "vFqK0n5Aj_Y7FVd",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
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
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 200.1,
      pqMode: "error",
      pqMaxBufferSize: 8898.77,
      pqMaxBackpressureSec: 6373.55,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      protocol: "http",
      endpoint: "http://localhost:4317",
      otlpVersion: "1.3.1",
      compress: "none",
      httpCompress: "gzip",
      authType: "credentialsSecret",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 6472.94,
      maxPayloadSizeKB: 5908.29,
      timeoutSec: 6271.77,
      flushPeriodSec: 4406.74,
      failedRequestLoggingMode: "none",
      connectionTimeout: 4701.69,
      keepAliveTime: 3716.11,
      keepAlive: false,
      onBackpressure: "queue",
      description: "cannon quaintly jaggedly",
      username: "Ima_Schultz",
      password: "vFqK0n5Aj_Y7FVd",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
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
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 200.1,
      pqMode: "error",
      pqMaxBufferSize: 8898.77,
      pqMaxBackpressureSec: 6373.55,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesPrometheus

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesPrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      metricRenameExpr: "<value>",
      sendMetadata: true,
      concurrency: 377.9,
      maxPayloadSizeKB: 8150.29,
      maxPayloadEvents: 4045.57,
      rejectUnauthorized: false,
      timeoutSec: 5139.46,
      flushPeriodSec: 9923.32,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "token",
      description: "indeed babyish psst chilly",
      metricsFlushPeriodSec: 1920.07,
      pqStrictOrdering: true,
      pqRatePerSec: 9465.68,
      pqMode: "error",
      pqMaxBufferSize: 4596.47,
      pqMaxBackpressureSec: 6802.03,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Trycia_Stracke32",
      password: "fTq8pfNsfKzEyQ1",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://winding-postbox.net/",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      metricRenameExpr: "<value>",
      sendMetadata: true,
      concurrency: 377.9,
      maxPayloadSizeKB: 8150.29,
      maxPayloadEvents: 4045.57,
      rejectUnauthorized: false,
      timeoutSec: 5139.46,
      flushPeriodSec: 9923.32,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "token",
      description: "indeed babyish psst chilly",
      metricsFlushPeriodSec: 1920.07,
      pqStrictOrdering: true,
      pqRatePerSec: 9465.68,
      pqMode: "error",
      pqMaxBufferSize: 4596.47,
      pqMaxBackpressureSec: 6802.03,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Trycia_Stracke32",
      password: "fTq8pfNsfKzEyQ1",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://winding-postbox.net/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesRing

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesRing" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      format: "json",
      partitionExpr: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
      onBackpressure: "block",
      description: "toward ack weight breakable until educated aboard nautical",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      format: "json",
      partitionExpr: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
      onBackpressure: "block",
      description: "toward ack weight breakable until educated aboard nautical",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesRouter

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesRouter" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "router-output",
      type: "router",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      rules: [
        {
          filter: "true",
          output: "my-output",
          description: "subexpression in celebrate geez hornet goose",
          final: false,
        },
      ],
      description: "deploy bus dapper forage fuss whenever boo bah atop",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "router-output",
      type: "router",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      rules: [
        {
          filter: "true",
          output: "my-output",
          description: "subexpression in celebrate geez hornet goose",
          final: false,
        },
      ],
      description: "deploy bus dapper forage fuss whenever boo bah atop",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesS3

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "s3-output",
      type: "s3",
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
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5225.19,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      objectACL: "bucket-owner-read",
      storageClass: "INTELLIGENT_TIERING",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 5285.18,
      maxOpenFiles: 4861.56,
      headerLine: "<value>",
      writeHighWaterMark: 979.15,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 2591.57,
      maxFileIdleTimeSec: 7299.34,
      maxConcurrentFileParts: 7678.19,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 796.73,
      description: "fluffy however meanwhile yearly whenever very legislature",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 1866.42,
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
      emptyDirCleanupSec: 7456.94,
      directoryBatchSize: 6618.23,
      deadletterPath: "<value>",
      maxRetryNum: 1266.57,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "s3-output",
      type: "s3",
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
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5225.19,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      destPath: "<value>",
      objectACL: "bucket-owner-read",
      storageClass: "INTELLIGENT_TIERING",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 5285.18,
      maxOpenFiles: 4861.56,
      headerLine: "<value>",
      writeHighWaterMark: 979.15,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 2591.57,
      maxFileIdleTimeSec: 7299.34,
      maxConcurrentFileParts: 7678.19,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 796.73,
      description: "fluffy however meanwhile yearly whenever very legislature",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "best_compression",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 1866.42,
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
      emptyDirCleanupSec: 7456.94,
      directoryBatchSize: 6618.23,
      deadletterPath: "<value>",
      maxRetryNum: 1266.57,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSecurityLake

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSecurityLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "security-lake-output",
      type: "security_lake",
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
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4447.1,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      objectACL: "private",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      maxFileSizeMB: 2865.61,
      maxOpenFiles: 5991.22,
      headerLine: "<value>",
      writeHighWaterMark: 6159.53,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 2360.49,
      maxFileIdleTimeSec: 362.89,
      maxConcurrentFileParts: 9173.88,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 8798.61,
      accountId: "123456789012",
      customSource: "my-custom-source",
      automaticSchema: true,
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 3145.65,
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
      description: "solution of against release ravage tall",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      emptyDirCleanupSec: 1353.37,
      directoryBatchSize: 7980.77,
      parquetSchema: "<value>",
      deadletterPath: "<value>",
      maxRetryNum: 8096.65,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "security-lake-output",
      type: "security_lake",
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
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4447.1,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      objectACL: "private",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "AES256",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      maxFileSizeMB: 2865.61,
      maxOpenFiles: 5991.22,
      headerLine: "<value>",
      writeHighWaterMark: 6159.53,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 27.11,
        backoffMultiplier: 4258.54,
        maxBackoffMs: 1146.47,
        jitterPercent: 1403.61,
      },
      maxFileOpenTimeSec: 2360.49,
      maxFileIdleTimeSec: 362.89,
      maxConcurrentFileParts: 9173.88,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 8798.61,
      accountId: "123456789012",
      customSource: "my-custom-source",
      automaticSchema: true,
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 3145.65,
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
      description: "solution of against release ravage tall",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      emptyDirCleanupSec: 1353.37,
      directoryBatchSize: 7980.77,
      parquetSchema: "<value>",
      deadletterPath: "<value>",
      maxRetryNum: 8096.65,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSentinel

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSentinel" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      concurrency: 5734.28,
      maxPayloadSizeKB: 9094.7,
      maxPayloadEvents: 3143.88,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 435.42,
      flushPeriodSec: 6397.2,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "oauth",
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      scope: "<value>",
      endpointURLConfiguration: "url",
      totalMemoryLimitKB: 3298.44,
      description: "account who including low",
      format: "advanced",
      customSourceExpression: "<value>",
      customDropWhenNull: false,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 3505.49,
      pqMode: "backpressure",
      pqMaxBufferSize: 8217.74,
      pqMaxBackpressureSec: 3616.77,
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
      __template_loginUrl: "https://multicolored-longboat.net/",
      __template_secret: "<value>",
      __template_client_id: "<id>",
      __template_scope: "<value>",
      __template_url: "https://qualified-bakeware.info/",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      concurrency: 5734.28,
      maxPayloadSizeKB: 9094.7,
      maxPayloadEvents: 3143.88,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 435.42,
      flushPeriodSec: 6397.2,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "oauth",
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      scope: "<value>",
      endpointURLConfiguration: "url",
      totalMemoryLimitKB: 3298.44,
      description: "account who including low",
      format: "advanced",
      customSourceExpression: "<value>",
      customDropWhenNull: false,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 3505.49,
      pqMode: "backpressure",
      pqMaxBufferSize: 8217.74,
      pqMaxBackpressureSec: 3616.77,
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
      __template_loginUrl: "https://multicolored-longboat.net/",
      __template_secret: "<value>",
      __template_client_id: "<id>",
      __template_scope: "<value>",
      __template_url: "https://qualified-bakeware.info/",
      __template_dcrID: "<id>",
      __template_dceEndpoint: "<value>",
      __template_streamName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSentinelOneAiSiem

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSentinelOneAiSiem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      concurrency: 6618.1,
      maxPayloadSizeKB: 8097.96,
      maxPayloadEvents: 2173.54,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 3929.68,
      flushPeriodSec: 6596.64,
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
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "duh deduce yippee guest",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://jaunty-compromise.name/",
      hostExpression: "<value>",
      sourceExpression: "<value>",
      sourceTypeExpression: "<value>",
      dataSourceCategoryExpression: "<value>",
      dataSourceNameExpression: "<value>",
      dataSourceVendorExpression: "<value>",
      eventTypeExpression: "<value>",
      host: "jumbo-makeover.com",
      source: "<value>",
      sourceType: "<value>",
      dataSourceCategory: "<value>",
      dataSourceName: "<value>",
      dataSourceVendor: "<value>",
      eventType: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 8156.39,
      pqMode: "backpressure",
      pqMaxBufferSize: 1268.22,
      pqMaxBackpressureSec: 4994.74,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      concurrency: 6618.1,
      maxPayloadSizeKB: 8097.96,
      maxPayloadEvents: 2173.54,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 3929.68,
      flushPeriodSec: 6596.64,
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
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "duh deduce yippee guest",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://jaunty-compromise.name/",
      hostExpression: "<value>",
      sourceExpression: "<value>",
      sourceTypeExpression: "<value>",
      dataSourceCategoryExpression: "<value>",
      dataSourceNameExpression: "<value>",
      dataSourceVendorExpression: "<value>",
      eventTypeExpression: "<value>",
      host: "jumbo-makeover.com",
      source: "<value>",
      sourceType: "<value>",
      dataSourceCategory: "<value>",
      dataSourceName: "<value>",
      dataSourceVendor: "<value>",
      eventType: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 8156.39,
      pqMode: "backpressure",
      pqMaxBufferSize: 1268.22,
      pqMaxBackpressureSec: 4994.74,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesServiceNow

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesServiceNow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      maxPayloadSizeKB: 8835.04,
      protocol: "http",
      compress: "gzip",
      httpCompress: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 6145.48,
      timeoutSec: 5475.99,
      flushPeriodSec: 5220.25,
      failedRequestLoggingMode: "payload",
      connectionTimeout: 7790.23,
      keepAliveTime: 5438,
      keepAlive: true,
      onBackpressure: "queue",
      description: "over about wilderness handsome stitcher",
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 2206.57,
      pqMode: "backpressure",
      pqMaxBufferSize: 2723.03,
      pqMaxBackpressureSec: 8684.53,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      maxPayloadSizeKB: 8835.04,
      protocol: "http",
      compress: "gzip",
      httpCompress: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 6145.48,
      timeoutSec: 5475.99,
      flushPeriodSec: 5220.25,
      failedRequestLoggingMode: "payload",
      connectionTimeout: 7790.23,
      keepAliveTime: 5438,
      keepAlive: true,
      onBackpressure: "queue",
      description: "over about wilderness handsome stitcher",
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 2206.57,
      pqMode: "backpressure",
      pqMaxBufferSize: 2723.03,
      pqMaxBackpressureSec: 8684.53,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSignalfx

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSignalfx" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
        "<value 3>",
      ],
      authType: "manual",
      realm: "us0",
      concurrency: 4395,
      maxPayloadSizeKB: 2611.35,
      maxPayloadEvents: 4791.81,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 4553.91,
      flushPeriodSec: 644.69,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "unto low shrilly",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 1805.4,
      pqMode: "error",
      pqMaxBufferSize: 8786.17,
      pqMaxBackpressureSec: 2965.79,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
        "<value 3>",
      ],
      authType: "manual",
      realm: "us0",
      concurrency: 4395,
      maxPayloadSizeKB: 2611.35,
      maxPayloadEvents: 4791.81,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 4553.91,
      flushPeriodSec: 644.69,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "unto low shrilly",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 1805.4,
      pqMode: "error",
      pqMaxBufferSize: 8786.17,
      pqMaxBackpressureSec: 2965.79,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSnmp

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSnmp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      dnsResolvePeriodSec: 2798.87,
      description: "fast countess unless pish",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      dnsResolvePeriodSec: 2798.87,
      description: "fast countess unless pish",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSns

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSns" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      maxRetries: 9765.82,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9711.32,
      onBackpressure: "block",
      description: "what till carefully lest lest oof",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 9867.26,
      pqMode: "error",
      pqMaxBufferSize: 3976.01,
      pqMaxBackpressureSec: 918.86,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      maxRetries: 9765.82,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9711.32,
      onBackpressure: "block",
      description: "what till carefully lest lest oof",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 9867.26,
      pqMode: "error",
      pqMaxBufferSize: 3976.01,
      pqMaxBackpressureSec: 918.86,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunk

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSplunk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      nestedFields: "json",
      throttleRatePerSec: "<value>",
      connectionTimeout: 5454.45,
      writeTimeout: 2267.18,
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
      onBackpressure: "drop",
      authType: "secret",
      description: "certification yum likely throughout seriously stupendous jellyfish certification lazily better",
      maxFailedHealthChecks: 8593.9,
      compress: "auto",
      pqStrictOrdering: false,
      pqRatePerSec: 5137.13,
      pqMode: "error",
      pqMaxBufferSize: 3578.55,
      pqMaxBackpressureSec: 626.61,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "<value>",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      nestedFields: "json",
      throttleRatePerSec: "<value>",
      connectionTimeout: 5454.45,
      writeTimeout: 2267.18,
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
      onBackpressure: "drop",
      authType: "secret",
      description: "certification yum likely throughout seriously stupendous jellyfish certification lazily better",
      maxFailedHealthChecks: 8593.9,
      compress: "auto",
      pqStrictOrdering: false,
      pqRatePerSec: 5137.13,
      pqMode: "error",
      pqMaxBufferSize: 3578.55,
      pqMaxBackpressureSec: 626.61,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunkHec

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSplunkHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 3689.15,
      maxPayloadSizeKB: 6879.41,
      maxPayloadEvents: 4653.04,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 8311.1,
      flushPeriodSec: 6170.31,
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
      enableMultiMetrics: true,
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "querulous painfully what beside while unlucky gee overstay",
      url: "https://orderly-cruelty.net/",
      useRoundRobinDns: false,
      excludeSelf: true,
      urls: [
        {
          url: "https://illustrious-permafrost.net",
          weight: 6169.06,
          __template_url: "https://careless-casement.com",
        },
      ],
      dnsResolvePeriodSec: 7364.12,
      loadBalanceStatsPeriodSec: 4627.82,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 1872.69,
      pqMode: "error",
      pqMaxBufferSize: 9087.95,
      pqMaxBackpressureSec: 5363.05,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://breakable-championship.net",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 3689.15,
      maxPayloadSizeKB: 6879.41,
      maxPayloadEvents: 4653.04,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 8311.1,
      flushPeriodSec: 6170.31,
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
      enableMultiMetrics: true,
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "querulous painfully what beside while unlucky gee overstay",
      url: "https://orderly-cruelty.net/",
      useRoundRobinDns: false,
      excludeSelf: true,
      urls: [
        {
          url: "https://illustrious-permafrost.net",
          weight: 6169.06,
          __template_url: "https://careless-casement.com",
        },
      ],
      dnsResolvePeriodSec: 7364.12,
      loadBalanceStatsPeriodSec: 4627.82,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 1872.69,
      pqMode: "error",
      pqMaxBufferSize: 9087.95,
      pqMaxBackpressureSec: 5363.05,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://breakable-championship.net",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunkLb

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSplunkLb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      dnsResolvePeriodSec: 7056.71,
      loadBalanceStatsPeriodSec: 7257.28,
      maxConcurrentSenders: 8308.87,
      nestedFields: "json",
      throttleRatePerSec: "<value>",
      connectionTimeout: 4504.9,
      writeTimeout: 3216.79,
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
      enableACK: false,
      logFailedRequests: true,
      maxS2Sversion: "v3",
      onBackpressure: "drop",
      indexerDiscovery: false,
      senderUnhealthyTimeAllowance: 9874.35,
      authType: "secret",
      description: "impractical powerfully pulverize round zowie",
      maxFailedHealthChecks: 7299.56,
      compress: "disabled",
      indexerDiscoveryConfigs: {
        site: "<value>",
        masterUri: "https://mild-bonfire.biz",
        refreshIntervalSec: 481.47,
        rejectUnauthorized: true,
        authTokens: [
          {
            authType: "manual",
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
          tls: "inherit",
          servername: "<value>",
          weight: 7243.49,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      pqStrictOrdering: true,
      pqRatePerSec: 3109.58,
      pqMode: "backpressure",
      pqMaxBufferSize: 3899.85,
      pqMaxBackpressureSec: 4967.6,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      dnsResolvePeriodSec: 7056.71,
      loadBalanceStatsPeriodSec: 7257.28,
      maxConcurrentSenders: 8308.87,
      nestedFields: "json",
      throttleRatePerSec: "<value>",
      connectionTimeout: 4504.9,
      writeTimeout: 3216.79,
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
      enableACK: false,
      logFailedRequests: true,
      maxS2Sversion: "v3",
      onBackpressure: "drop",
      indexerDiscovery: false,
      senderUnhealthyTimeAllowance: 9874.35,
      authType: "secret",
      description: "impractical powerfully pulverize round zowie",
      maxFailedHealthChecks: 7299.56,
      compress: "disabled",
      indexerDiscoveryConfigs: {
        site: "<value>",
        masterUri: "https://mild-bonfire.biz",
        refreshIntervalSec: 481.47,
        rejectUnauthorized: true,
        authTokens: [
          {
            authType: "manual",
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
          tls: "inherit",
          servername: "<value>",
          weight: 7243.49,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      pqStrictOrdering: true,
      pqRatePerSec: 3109.58,
      pqMode: "backpressure",
      pqMaxBufferSize: 3899.85,
      pqMaxBackpressureSec: 4967.6,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSqs

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSqs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      messageGroupId: "<id>",
      createQueue: true,
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
      durationSeconds: 801.7,
      maxQueueSize: 7637.66,
      maxRecordSizeKB: 4523.1,
      flushPeriodSec: 4203.15,
      maxInProgress: 8182.76,
      onBackpressure: "queue",
      description: "scared both past guacamole ah",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 7799.2,
      pqMode: "error",
      pqMaxBufferSize: 1994.9,
      pqMaxBackpressureSec: 366.23,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      messageGroupId: "<id>",
      createQueue: true,
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
      durationSeconds: 801.7,
      maxQueueSize: 7637.66,
      maxRecordSizeKB: 4523.1,
      flushPeriodSec: 4203.15,
      maxInProgress: 8182.76,
      onBackpressure: "queue",
      description: "scared both past guacamole ah",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 7799.2,
      pqMode: "error",
      pqMaxBufferSize: 1994.9,
      pqMaxBackpressureSec: 366.23,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesStatsd

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesStatsd" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 5240.88,
      flushPeriodSec: 7768.66,
      dnsResolvePeriodSec: 1975.36,
      description: "usher inspect brr militate exterior",
      throttleRatePerSec: "<value>",
      connectionTimeout: 9830.31,
      writeTimeout: 1509.57,
      onBackpressure: "drop",
      pqStrictOrdering: true,
      pqRatePerSec: 7852.09,
      pqMode: "always",
      pqMaxBufferSize: 1366.24,
      pqMaxBackpressureSec: 6268.09,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 3>",
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 5240.88,
      flushPeriodSec: 7768.66,
      dnsResolvePeriodSec: 1975.36,
      description: "usher inspect brr militate exterior",
      throttleRatePerSec: "<value>",
      connectionTimeout: 9830.31,
      writeTimeout: 1509.57,
      onBackpressure: "drop",
      pqStrictOrdering: true,
      pqRatePerSec: 7852.09,
      pqMode: "always",
      pqMaxBufferSize: 1366.24,
      pqMaxBackpressureSec: 6268.09,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesStatsdExt

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesStatsdExt" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 7125.07,
      flushPeriodSec: 1475.09,
      dnsResolvePeriodSec: 1006.2,
      description: "lava obstruct excluding silk demobilise birdbath",
      throttleRatePerSec: "<value>",
      connectionTimeout: 8801.27,
      writeTimeout: 5365.84,
      onBackpressure: "drop",
      pqStrictOrdering: false,
      pqRatePerSec: 9993.07,
      pqMode: "backpressure",
      pqMaxBufferSize: 1139.86,
      pqMaxBackpressureSec: 2858.69,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 7125.07,
      flushPeriodSec: 1475.09,
      dnsResolvePeriodSec: 1006.2,
      description: "lava obstruct excluding silk demobilise birdbath",
      throttleRatePerSec: "<value>",
      connectionTimeout: 8801.27,
      writeTimeout: 5365.84,
      onBackpressure: "drop",
      pqStrictOrdering: false,
      pqRatePerSec: 9993.07,
      pqMode: "backpressure",
      pqMaxBufferSize: 1139.86,
      pqMaxBackpressureSec: 2858.69,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSumoLogic

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSumoLogic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "sumo-logic-output",
      type: "sumo_logic",
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
      url: "https://endpoint1.collection.us2.sumologic.com",
      customSource: "<value>",
      customCategory: "<value>",
      format: "json",
      concurrency: 1076.39,
      maxPayloadSizeKB: 135.07,
      maxPayloadEvents: 8643.23,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 5809.61,
      flushPeriodSec: 8523.88,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      totalMemoryLimitKB: 2702.36,
      description: "peter liquid however",
      pqStrictOrdering: true,
      pqRatePerSec: 6581.84,
      pqMode: "always",
      pqMaxBufferSize: 6684.79,
      pqMaxBackpressureSec: 8190.94,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://mixed-warming.com",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "sumo-logic-output",
      type: "sumo_logic",
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
      url: "https://endpoint1.collection.us2.sumologic.com",
      customSource: "<value>",
      customCategory: "<value>",
      format: "json",
      concurrency: 1076.39,
      maxPayloadSizeKB: 135.07,
      maxPayloadEvents: 8643.23,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 5809.61,
      flushPeriodSec: 8523.88,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      totalMemoryLimitKB: 2702.36,
      description: "peter liquid however",
      pqStrictOrdering: true,
      pqRatePerSec: 6581.84,
      pqMode: "always",
      pqMaxBufferSize: 6684.79,
      pqMaxBackpressureSec: 8190.94,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://mixed-warming.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSyslog

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesSyslog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      protocol: "tcp",
      facility: 6,
      severity: 7,
      appName: "<value>",
      messageFormat: "rfc5424",
      timestampFormat: "syslog",
      throttleRatePerSec: "<value>",
      octetCountFraming: true,
      logFailedRequests: false,
      description: "fairly pleasure jiggle",
      loadBalanced: true,
      host: "localhost",
      port: 514,
      excludeSelf: true,
      hosts: [
        {
          host: "adolescent-cemetery.org",
          port: 5699.66,
          tls: "off",
          servername: "<value>",
          weight: 7378.74,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 6656.86,
      loadBalanceStatsPeriodSec: 4768.36,
      maxConcurrentSenders: 748.42,
      connectionTimeout: 9832.65,
      writeTimeout: 1279.92,
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
      onBackpressure: "queue",
      maxRecordSize: 6152.25,
      udpDnsResolvePeriodSec: 3762.93,
      enableIpSpoofing: true,
      pqStrictOrdering: false,
      pqRatePerSec: 5395.19,
      pqMode: "always",
      pqMaxBufferSize: 7289.32,
      pqMaxBackpressureSec: 4600.99,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      protocol: "tcp",
      facility: 6,
      severity: 7,
      appName: "<value>",
      messageFormat: "rfc5424",
      timestampFormat: "syslog",
      throttleRatePerSec: "<value>",
      octetCountFraming: true,
      logFailedRequests: false,
      description: "fairly pleasure jiggle",
      loadBalanced: true,
      host: "localhost",
      port: 514,
      excludeSelf: true,
      hosts: [
        {
          host: "adolescent-cemetery.org",
          port: 5699.66,
          tls: "off",
          servername: "<value>",
          weight: 7378.74,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 6656.86,
      loadBalanceStatsPeriodSec: 4768.36,
      maxConcurrentSenders: 748.42,
      connectionTimeout: 9832.65,
      writeTimeout: 1279.92,
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
      onBackpressure: "queue",
      maxRecordSize: 6152.25,
      udpDnsResolvePeriodSec: 3762.93,
      enableIpSpoofing: true,
      pqStrictOrdering: false,
      pqRatePerSec: 5395.19,
      pqMode: "always",
      pqMaxBufferSize: 7289.32,
      pqMaxBackpressureSec: 4600.99,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesTcpjson

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesTcpjson" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
      ],
      loadBalanced: true,
      compression: "gzip",
      logFailedRequests: false,
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
      connectionTimeout: 4098.5,
      writeTimeout: 3807.97,
      tokenTTLMinutes: 9215.23,
      sendHeader: true,
      onBackpressure: "queue",
      authType: "manual",
      description: "unaccountably hard-to-find same kindly deprave the moisten task",
      host: "localhost",
      port: 10090,
      excludeSelf: true,
      hosts: [
        {
          host: "adolescent-cemetery.org",
          port: 5699.66,
          tls: "off",
          servername: "<value>",
          weight: 7378.74,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 1392.89,
      loadBalanceStatsPeriodSec: 9185.86,
      maxConcurrentSenders: 9360.71,
      pqStrictOrdering: false,
      pqRatePerSec: 1119.07,
      pqMode: "always",
      pqMaxBufferSize: 4924.47,
      pqMaxBackpressureSec: 7420.74,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "<value>",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        "<value 2>",
      ],
      loadBalanced: true,
      compression: "gzip",
      logFailedRequests: false,
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
      connectionTimeout: 4098.5,
      writeTimeout: 3807.97,
      tokenTTLMinutes: 9215.23,
      sendHeader: true,
      onBackpressure: "queue",
      authType: "manual",
      description: "unaccountably hard-to-find same kindly deprave the moisten task",
      host: "localhost",
      port: 10090,
      excludeSelf: true,
      hosts: [
        {
          host: "adolescent-cemetery.org",
          port: 5699.66,
          tls: "off",
          servername: "<value>",
          weight: 7378.74,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 1392.89,
      loadBalanceStatsPeriodSec: 9185.86,
      maxConcurrentSenders: 9360.71,
      pqStrictOrdering: false,
      pqRatePerSec: 1119.07,
      pqMode: "always",
      pqMaxBufferSize: 4924.47,
      pqMaxBackpressureSec: 7420.74,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWavefront

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesWavefront" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      authType: "secret",
      domain: "longboard",
      concurrency: 8960.43,
      maxPayloadSizeKB: 228.19,
      maxPayloadEvents: 5819.91,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 1372.08,
      flushPeriodSec: 6386.8,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "monthly glider declaration truthfully irritably ecliptic",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4527.95,
      pqMode: "always",
      pqMaxBufferSize: 2292,
      pqMaxBackpressureSec: 6503.61,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      authType: "secret",
      domain: "longboard",
      concurrency: 8960.43,
      maxPayloadSizeKB: 228.19,
      maxPayloadEvents: 5819.91,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 1372.08,
      flushPeriodSec: 6386.8,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "monthly glider declaration truthfully irritably ecliptic",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4527.95,
      pqMode: "always",
      pqMaxBufferSize: 2292,
      pqMaxBackpressureSec: 6503.61,
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
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWebhook

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesWebhook" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
      id: "webhook-output",
      type: "webhook",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      method: "POST",
      format: "custom",
      keepAlive: true,
      concurrency: 5242.64,
      maxPayloadSizeKB: 3739.54,
      maxPayloadEvents: 5052.07,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 8760.51,
      flushPeriodSec: 1659.01,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "oauth",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      totalMemoryLimitKB: 4181.32,
      loadBalanced: true,
      description: "calmly scrutinise commemorate spanish rudely fit overheard",
      customSourceExpression: "<value>",
      customDropWhenNull: false,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 21.77,
      pqMode: "error",
      pqMaxBufferSize: 1857.42,
      pqMaxBackpressureSec: 9135.71,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Dudley67",
      password: "07paZ8tVCB7J4ut",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://lumpy-disadvantage.net",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 8370.78,
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
          url: "https://mature-granny.name/",
          weight: 6894.87,
          __template_url: "https://weary-soybean.info/",
        },
      ],
      dnsResolvePeriodSec: 783.8,
      loadBalanceStatsPeriodSec: 3498.58,
      __template_loginUrl: "https://familiar-outlaw.info",
      __template_secret: "<value>",
      __template_url: "https://pleasing-finding.com",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "webhook-output",
      type: "webhook",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      method: "POST",
      format: "custom",
      keepAlive: true,
      concurrency: 5242.64,
      maxPayloadSizeKB: 3739.54,
      maxPayloadEvents: 5052.07,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 8760.51,
      flushPeriodSec: 1659.01,
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
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "oauth",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      totalMemoryLimitKB: 4181.32,
      loadBalanced: true,
      description: "calmly scrutinise commemorate spanish rudely fit overheard",
      customSourceExpression: "<value>",
      customDropWhenNull: false,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 21.77,
      pqMode: "error",
      pqMaxBufferSize: 1857.42,
      pqMaxBackpressureSec: 9135.71,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Dudley67",
      password: "07paZ8tVCB7J4ut",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://lumpy-disadvantage.net",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 8370.78,
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
          url: "https://mature-granny.name/",
          weight: 6894.87,
          __template_url: "https://weary-soybean.info/",
        },
      ],
      dnsResolvePeriodSec: 783.8,
      loadBalanceStatsPeriodSec: 3498.58,
      __template_loginUrl: "https://familiar-outlaw.info",
      __template_secret: "<value>",
      __template_url: "https://pleasing-finding.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWizHec

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesWizHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      loadBalanced: "<value>",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 2405.57,
      maxPayloadSizeKB: 7679.67,
      maxPayloadEvents: 5557.12,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 9834.88,
      flushPeriodSec: 5528.81,
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
      enableMultiMetrics: "<value>",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
      description: "crazy outside gnaw seal during fax after",
      pqStrictOrdering: false,
      pqRatePerSec: 5873.66,
      pqMode: "always",
      pqMaxBufferSize: 7901.85,
      pqMaxBackpressureSec: 8617.32,
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      loadBalanced: "<value>",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 2405.57,
      maxPayloadSizeKB: 7679.67,
      maxPayloadEvents: 5557.12,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 9834.88,
      flushPeriodSec: 5528.81,
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
      enableMultiMetrics: "<value>",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
      description: "crazy outside gnaw seal during fax after",
      pqStrictOrdering: false,
      pqRatePerSec: 5873.66,
      pqMode: "always",
      pqMaxBufferSize: 7901.85,
      pqMaxBackpressureSec: 8617.32,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesXsiam

<!-- UsageSnippet language="typescript" operationID="createOutputSystemByPack" method="post" path="/p/{pack}/system/outputs" example="OutputCreateExamplesXsiam" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.create({
    pack: "<value>",
    requestBody: {
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
      ],
      loadBalanced: false,
      concurrency: 8747.74,
      maxPayloadSizeKB: 3912.21,
      maxPayloadEvents: 205.39,
      rejectUnauthorized: false,
      timeoutSec: 6242.41,
      flushPeriodSec: 4796.15,
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
      authType: "token",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      throttleRateReqPerSec: 796669,
      onBackpressure: "queue",
      totalMemoryLimitKB: 2051.95,
      description: "black guidance catalyze boohoo sour thoughtfully cruelly deform duh vacantly",
      url: "https://determined-bathrobe.com",
      useRoundRobinDns: true,
      excludeSelf: true,
      urls: [
        {
          url: "https://excited-abacus.com/",
          weight: 482.25,
        },
      ],
      dnsResolvePeriodSec: 8260.96,
      loadBalanceStatsPeriodSec: 1527.07,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 7716.16,
      pqMode: "backpressure",
      pqMaxBufferSize: 9865.08,
      pqMaxBackpressureSec: 573.55,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://limited-hydrocarbon.net/",
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
import { packsDestinationsCreate } from "cribl-control-plane/funcs/packsDestinationsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      loadBalanced: false,
      concurrency: 8747.74,
      maxPayloadSizeKB: 3912.21,
      maxPayloadEvents: 205.39,
      rejectUnauthorized: false,
      timeoutSec: 6242.41,
      flushPeriodSec: 4796.15,
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
      authType: "token",
      responseRetrySettings: [
        {
          httpStatus: 8177.04,
          initialBackoff: 7866.98,
          backoffRate: 6178.16,
          maxBackoff: 3348.05,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: true,
        initialBackoff: 9325.54,
        backoffRate: 3205.55,
        maxBackoff: 1352.21,
      },
      responseHonorRetryAfterHeader: true,
      throttleRateReqPerSec: 796669,
      onBackpressure: "queue",
      totalMemoryLimitKB: 2051.95,
      description: "black guidance catalyze boohoo sour thoughtfully cruelly deform duh vacantly",
      url: "https://determined-bathrobe.com",
      useRoundRobinDns: true,
      excludeSelf: true,
      urls: [
        {
          url: "https://excited-abacus.com/",
          weight: 482.25,
        },
      ],
      dnsResolvePeriodSec: 8260.96,
      loadBalanceStatsPeriodSec: 1527.07,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 7716.16,
      pqMode: "backpressure",
      pqMaxBufferSize: 9865.08,
      pqMaxBackpressureSec: 573.55,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://limited-hydrocarbon.net/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateOutputSystemByPackRequest](../../models/operations/createoutputsystembypackrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Get the specified Destination within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOutputSystemByPackAndId" method="get" path="/p/{pack}/system/outputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.get({
    id: "<id>",
    pack: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsDestinationsGet } from "cribl-control-plane/funcs/packsDestinationsGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsGet(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOutputSystemByPackAndIdRequest](../../models/operations/getoutputsystembypackandidrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Update the specified Destination.</br></br>Provide a complete representation of the Destination that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Destination.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Destination might not function as expected within the specified Pack.

### Example Usage: OutputCreateExamplesAzureBlob

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesAzureBlob" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      containerName: "my-container",
      createContainer: true,
      destPath: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      maxConcurrentFileParts: 2643.71,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 248.88,
      maxFileOpenTimeSec: 8737.17,
      maxFileIdleTimeSec: 9941.01,
      maxOpenFiles: 9747.04,
      headerLine: "<value>",
      writeHighWaterMark: 8904.67,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      authType: "clientCert",
      storageClass: "Inferred",
      description: "overreact brr till",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 5189.37,
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
      emptyDirCleanupSec: 9622.19,
      directoryBatchSize: 4010.52,
      deadletterPath: "<value>",
      maxRetryNum: 2658.68,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      containerName: "my-container",
      createContainer: true,
      destPath: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      maxConcurrentFileParts: 2643.71,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 248.88,
      maxFileOpenTimeSec: 8737.17,
      maxFileIdleTimeSec: 9941.01,
      maxOpenFiles: 9747.04,
      headerLine: "<value>",
      writeHighWaterMark: 8904.67,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      authType: "clientCert",
      storageClass: "Inferred",
      description: "overreact brr till",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 5189.37,
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
      emptyDirCleanupSec: 9622.19,
      directoryBatchSize: 4010.52,
      deadletterPath: "<value>",
      maxRetryNum: 2658.68,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureDataExplorer

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesAzureDataExplorer" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      validateDatabaseSettings: false,
      ingestMode: "streaming",
      oauthEndpoint: "https://login.microsoftonline.com",
      tenantId: "tenant-id",
      clientId: "client-id",
      scope: "https://mycluster.kusto.windows.net/.default",
      oauthType: "clientSecret",
      description: "deplore into decode",
      clientSecret: "client-secret",
      textSecret: "<value>",
      certificate: {
        certificateName: "<value>",
      },
      format: "json",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 2971.21,
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
      enablePageChecksum: false,
      removeEmptyDirs: true,
      emptyDirCleanupSec: 5169.96,
      directoryBatchSize: 8474.01,
      deadletterEnabled: true,
      deadletterPath: "<value>",
      maxRetryNum: 3844.49,
      isMappingObj: true,
      mappingObj: "<value>",
      mappingRef: "<value>",
      ingestUrl: "https://strong-typewriter.org/",
      onBackpressure: "block",
      stagePath: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4285.61,
      maxFileOpenTimeSec: 7589.44,
      maxFileIdleTimeSec: 435.65,
      maxOpenFiles: 2822.97,
      maxConcurrentFileParts: 2112.04,
      onDiskFullBackpressure: "drop",
      addIdToStagePath: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      timeoutSec: 4890.71,
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
      reportLevel: "failuresAndSuccesses",
      reportMethod: "queue",
      additionalProperties: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      concurrency: 6416.36,
      maxPayloadSizeKB: 8748.38,
      maxPayloadEvents: 2049.99,
      flushPeriodSec: 9392.4,
      rejectUnauthorized: false,
      useRoundRobinDns: false,
      keepAlive: false,
      pqStrictOrdering: true,
      pqRatePerSec: 5616.97,
      pqMode: "always",
      pqMaxBufferSize: 5478.64,
      pqMaxBackpressureSec: 5753.43,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_clusterUrl: "https://watery-maestro.info/",
      __template_database: "<value>",
      __template_table: "<value>",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_scope: "<value>",
      __template_clientSecret: "<value>",
      __template_format: "<value>",
      __template_ingestUrl: "https://slow-allegation.info",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      validateDatabaseSettings: false,
      ingestMode: "streaming",
      oauthEndpoint: "https://login.microsoftonline.com",
      tenantId: "tenant-id",
      clientId: "client-id",
      scope: "https://mycluster.kusto.windows.net/.default",
      oauthType: "clientSecret",
      description: "deplore into decode",
      clientSecret: "client-secret",
      textSecret: "<value>",
      certificate: {
        certificateName: "<value>",
      },
      format: "json",
      compress: "gzip",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 2971.21,
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
      enablePageChecksum: false,
      removeEmptyDirs: true,
      emptyDirCleanupSec: 5169.96,
      directoryBatchSize: 8474.01,
      deadletterEnabled: true,
      deadletterPath: "<value>",
      maxRetryNum: 3844.49,
      isMappingObj: true,
      mappingObj: "<value>",
      mappingRef: "<value>",
      ingestUrl: "https://strong-typewriter.org/",
      onBackpressure: "block",
      stagePath: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4285.61,
      maxFileOpenTimeSec: 7589.44,
      maxFileIdleTimeSec: 435.65,
      maxOpenFiles: 2822.97,
      maxConcurrentFileParts: 2112.04,
      onDiskFullBackpressure: "drop",
      addIdToStagePath: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      timeoutSec: 4890.71,
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
      reportLevel: "failuresAndSuccesses",
      reportMethod: "queue",
      additionalProperties: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      concurrency: 6416.36,
      maxPayloadSizeKB: 8748.38,
      maxPayloadEvents: 2049.99,
      flushPeriodSec: 9392.4,
      rejectUnauthorized: false,
      useRoundRobinDns: false,
      keepAlive: false,
      pqStrictOrdering: true,
      pqRatePerSec: 5616.97,
      pqMode: "always",
      pqMaxBufferSize: 5478.64,
      pqMaxBackpressureSec: 5753.43,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_clusterUrl: "https://watery-maestro.info/",
      __template_database: "<value>",
      __template_table: "<value>",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_scope: "<value>",
      __template_clientSecret: "<value>",
      __template_format: "<value>",
      __template_ingestUrl: "https://slow-allegation.info",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureEventhub

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesAzureEventhub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      ack: 1,
      format: "json",
      maxRecordSizeKB: 2434.21,
      flushEventCount: 9353.24,
      flushPeriodSec: 3874.71,
      connectionTimeout: 8327.27,
      requestTimeout: 8627.58,
      maxRetries: 7823.16,
      maxBackOff: 34.37,
      initialBackoff: 9749.45,
      backoffRate: 1749.2,
      authenticationTimeout: 3683.3,
      reauthenticationThreshold: 2175.03,
      sasl: {
        disabled: false,
        authType: "secret",
        password: "vly6UlZ_gMrziGQ",
        textSecret: "<value>",
        mechanism: "plain",
        username: "Thad11",
        clientSecretAuthType: "certificate",
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
        rejectUnauthorized: false,
      },
      onBackpressure: "queue",
      description: "above supplier privilege how psst nervously kiddingly besides",
      pqStrictOrdering: true,
      pqRatePerSec: 7678.98,
      pqMode: "error",
      pqMaxBufferSize: 7855.81,
      pqMaxBackpressureSec: 4345.07,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      ack: 1,
      format: "json",
      maxRecordSizeKB: 2434.21,
      flushEventCount: 9353.24,
      flushPeriodSec: 3874.71,
      connectionTimeout: 8327.27,
      requestTimeout: 8627.58,
      maxRetries: 7823.16,
      maxBackOff: 34.37,
      initialBackoff: 9749.45,
      backoffRate: 1749.2,
      authenticationTimeout: 3683.3,
      reauthenticationThreshold: 2175.03,
      sasl: {
        disabled: false,
        authType: "secret",
        password: "vly6UlZ_gMrziGQ",
        textSecret: "<value>",
        mechanism: "plain",
        username: "Thad11",
        clientSecretAuthType: "certificate",
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
        rejectUnauthorized: false,
      },
      onBackpressure: "queue",
      description: "above supplier privilege how psst nervously kiddingly besides",
      pqStrictOrdering: true,
      pqRatePerSec: 7678.98,
      pqMode: "error",
      pqMaxBufferSize: 7855.81,
      pqMaxBackpressureSec: 4345.07,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesAzureLogs

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesAzureLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
      id: "azure-logs-output",
      type: "azure_logs",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      logType: "Cribl",
      resourceId: "<id>",
      concurrency: 9126.79,
      maxPayloadSizeKB: 5541.68,
      maxPayloadEvents: 136.07,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 7217.54,
      flushPeriodSec: 6801.62,
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
      apiUrl: "https://irresponsible-suspension.net",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "manual",
      description: "puny while dimly oof sew yahoo restfully technologist",
      pqStrictOrdering: false,
      pqRatePerSec: 6865.45,
      pqMode: "error",
      pqMaxBufferSize: 4265.89,
      pqMaxBackpressureSec: 200.99,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
      id: "azure-logs-output",
      type: "azure_logs",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      logType: "Cribl",
      resourceId: "<id>",
      concurrency: 9126.79,
      maxPayloadSizeKB: 5541.68,
      maxPayloadEvents: 136.07,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 7217.54,
      flushPeriodSec: 6801.62,
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
      apiUrl: "https://irresponsible-suspension.net",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "manual",
      description: "puny while dimly oof sew yahoo restfully technologist",
      pqStrictOrdering: false,
      pqRatePerSec: 6865.45,
      pqMode: "error",
      pqMaxBufferSize: 4265.89,
      pqMaxBackpressureSec: 200.99,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesChronicle

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesChronicle" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
      ],
      apiVersion: "<value>",
      authenticationMethod: "serviceAccountSecret",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      region: "us",
      concurrency: 8776.62,
      maxPayloadSizeKB: 2881.29,
      maxPayloadEvents: 4737.16,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 1009.95,
      flushPeriodSec: 9956.31,
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
      useRoundRobinDns: false,
      onBackpressure: "drop",
      totalMemoryLimitKB: 4183.28,
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
      description: "yum what over",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 5447.6,
      pqMode: "backpressure",
      pqMaxBufferSize: 6845.95,
      pqMaxBackpressureSec: 3193.12,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
      ],
      apiVersion: "<value>",
      authenticationMethod: "serviceAccountSecret",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      region: "us",
      concurrency: 8776.62,
      maxPayloadSizeKB: 2881.29,
      maxPayloadEvents: 4737.16,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 1009.95,
      flushPeriodSec: 9956.31,
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
      useRoundRobinDns: false,
      onBackpressure: "drop",
      totalMemoryLimitKB: 4183.28,
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
      description: "yum what over",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 5447.6,
      pqMode: "backpressure",
      pqMaxBufferSize: 6845.95,
      pqMaxBackpressureSec: 3193.12,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_region: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesClickHouse

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesClickHouse" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
      ],
      url: "http://localhost:8123/",
      authType: "basic",
      database: "mydb",
      tableName: "mytable",
      format: "json-each-row",
      mappingType: "automatic",
      asyncInserts: false,
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 3654.49,
      maxPayloadSizeKB: 7545.63,
      maxPayloadEvents: 7663.32,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 4722.88,
      flushPeriodSec: 975.24,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      dumpFormatErrorsToDisk: true,
      statsDestination: {
        url: "https://reckless-cappelletti.org/",
        database: "<value>",
        tableName: "<value>",
        authType: "<value>",
        username: "Eric.Murphy20",
        sqlUsername: "<value>",
        password: "bzENtB3Rh_5jGoX",
      },
      onBackpressure: "queue",
      description: "quarrelsomely finally milestone gosh or mid though emulsify wherever joyously",
      username: "Cody_Schowalter",
      password: "DRWzjC9ll_LdN8b",
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
      pqStrictOrdering: false,
      pqRatePerSec: 8229.36,
      pqMode: "backpressure",
      pqMaxBufferSize: 604.57,
      pqMaxBackpressureSec: 3115.13,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://judicious-sideboard.name",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
      ],
      url: "http://localhost:8123/",
      authType: "basic",
      database: "mydb",
      tableName: "mytable",
      format: "json-each-row",
      mappingType: "automatic",
      asyncInserts: false,
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 3654.49,
      maxPayloadSizeKB: 7545.63,
      maxPayloadEvents: 7663.32,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 4722.88,
      flushPeriodSec: 975.24,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      dumpFormatErrorsToDisk: true,
      statsDestination: {
        url: "https://reckless-cappelletti.org/",
        database: "<value>",
        tableName: "<value>",
        authType: "<value>",
        username: "Eric.Murphy20",
        sqlUsername: "<value>",
        password: "bzENtB3Rh_5jGoX",
      },
      onBackpressure: "queue",
      description: "quarrelsomely finally milestone gosh or mid though emulsify wherever joyously",
      username: "Cody_Schowalter",
      password: "DRWzjC9ll_LdN8b",
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
      pqStrictOrdering: false,
      pqRatePerSec: 8229.36,
      pqMode: "backpressure",
      pqMaxBufferSize: 604.57,
      pqMaxBackpressureSec: 3115.13,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://judicious-sideboard.name",
      __template_database: "<value>",
      __template_tableName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCloudflareR2

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesCloudflareR2" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      endpoint: "https://account-id.r2.cloudflarestorage.com",
      bucket: "my-bucket",
      awsAuthenticationMethod: "secret",
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
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 1767.32,
      maxOpenFiles: 173,
      headerLine: "<value>",
      writeHighWaterMark: 4526.22,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 4759,
      maxFileIdleTimeSec: 3430.3,
      maxConcurrentFileParts: 457.94,
      description: "diligently brightly intervention confound overburden",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 7893.25,
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
      enablePageChecksum: false,
      emptyDirCleanupSec: 8535.09,
      directoryBatchSize: 4887.41,
      deadletterPath: "<value>",
      maxRetryNum: 3522.04,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      endpoint: "https://account-id.r2.cloudflarestorage.com",
      bucket: "my-bucket",
      awsAuthenticationMethod: "secret",
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
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "json",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 1767.32,
      maxOpenFiles: 173,
      headerLine: "<value>",
      writeHighWaterMark: 4526.22,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 4759,
      maxFileIdleTimeSec: 3430.3,
      maxConcurrentFileParts: 457.94,
      description: "diligently brightly intervention confound overburden",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 7893.25,
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
      enablePageChecksum: false,
      emptyDirCleanupSec: 8535.09,
      directoryBatchSize: 4887.41,
      deadletterPath: "<value>",
      maxRetryNum: 3522.04,
      __template_bucket: "<value>",
      __template_format: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCloudwatch

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesCloudwatch" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
      id: "cloudwatch-output",
      type: "cloudwatch",
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
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 6405.75,
      maxQueueSize: 8184.93,
      maxRecordSizeKB: 381.39,
      flushPeriodSec: 2506.79,
      onBackpressure: "queue",
      description: "which majestically underneath below reboot towards pricey",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 5688.79,
      pqMode: "always",
      pqMaxBufferSize: 8137.24,
      pqMaxBackpressureSec: 499.86,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
      id: "cloudwatch-output",
      type: "cloudwatch",
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
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 6405.75,
      maxQueueSize: 8184.93,
      maxRecordSizeKB: 381.39,
      flushPeriodSec: 2506.79,
      onBackpressure: "queue",
      description: "which majestically underneath below reboot towards pricey",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 5688.79,
      pqMode: "always",
      pqMaxBufferSize: 8137.24,
      pqMaxBackpressureSec: 499.86,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesConfluentCloud

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesConfluentCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      topic: "logs",
      ack: 0,
      format: "raw",
      compression: "none",
      maxRecordSizeKB: 9591.47,
      flushEventCount: 980.52,
      flushPeriodSec: 6089.12,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://unsightly-brush.info/",
        connectionTimeout: 744.55,
        requestTimeout: 9963.28,
        maxRetries: 1404.86,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1.1",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 9055.24,
        defaultValueSchemaId: 3676.96,
      },
      connectionTimeout: 4999.11,
      requestTimeout: 4535.69,
      maxRetries: 6261.97,
      maxBackOff: 2491.25,
      initialBackoff: 1374.08,
      backoffRate: 7779.44,
      authenticationTimeout: 4344.8,
      reauthenticationThreshold: 2828.8,
      sasl: {
        disabled: false,
        username: "Davion.Renner",
        password: "peihQ6y0_O61plP",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-256",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://jittery-couch.org/",
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
      onBackpressure: "queue",
      description: "postbox across scornful",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 2579.79,
      pqMode: "always",
      pqMaxBufferSize: 5407.63,
      pqMaxBackpressureSec: 715.33,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      topic: "logs",
      ack: 0,
      format: "raw",
      compression: "none",
      maxRecordSizeKB: 9591.47,
      flushEventCount: 980.52,
      flushPeriodSec: 6089.12,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://unsightly-brush.info/",
        connectionTimeout: 744.55,
        requestTimeout: 9963.28,
        maxRetries: 1404.86,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1.1",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 9055.24,
        defaultValueSchemaId: 3676.96,
      },
      connectionTimeout: 4999.11,
      requestTimeout: 4535.69,
      maxRetries: 6261.97,
      maxBackOff: 2491.25,
      initialBackoff: 1374.08,
      backoffRate: 7779.44,
      authenticationTimeout: 4344.8,
      reauthenticationThreshold: 2828.8,
      sasl: {
        disabled: false,
        username: "Davion.Renner",
        password: "peihQ6y0_O61plP",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-256",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://jittery-couch.org/",
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
      onBackpressure: "queue",
      description: "postbox across scornful",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 2579.79,
      pqMode: "always",
      pqMaxBufferSize: 5407.63,
      pqMaxBackpressureSec: 715.33,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_topic: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblHttp

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesCriblHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      loadBalanced: true,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      tokenTTLMinutes: 2033.11,
      excludeFields: [
        "<value 1>",
      ],
      compression: "gzip",
      concurrency: 8608.64,
      maxPayloadSizeKB: 3568.52,
      maxPayloadEvents: 3670.36,
      rejectUnauthorized: false,
      timeoutSec: 2755.56,
      flushPeriodSec: 1556.11,
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
      throttleRatePerSec: "<value>",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "for cautiously yowza safeguard",
        },
      ],
      onBackpressure: "drop",
      description: "consequently outset depot wilted tune-up yet shimmering median where",
      url: "https://optimal-arcade.org/",
      useRoundRobinDns: false,
      excludeSelf: true,
      urls: [
        {
          url: "https://round-fireplace.biz",
          weight: 3550.39,
          __template_url: "https://deafening-commercial.info",
        },
      ],
      dnsResolvePeriodSec: 2810.46,
      loadBalanceStatsPeriodSec: 2295.42,
      pqStrictOrdering: false,
      pqRatePerSec: 4664.67,
      pqMode: "always",
      pqMaxBufferSize: 423.39,
      pqMaxBackpressureSec: 8720.34,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://smooth-case.biz",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      loadBalanced: true,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      tokenTTLMinutes: 2033.11,
      excludeFields: [
        "<value 1>",
      ],
      compression: "gzip",
      concurrency: 8608.64,
      maxPayloadSizeKB: 3568.52,
      maxPayloadEvents: 3670.36,
      rejectUnauthorized: false,
      timeoutSec: 2755.56,
      flushPeriodSec: 1556.11,
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
      throttleRatePerSec: "<value>",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "for cautiously yowza safeguard",
        },
      ],
      onBackpressure: "drop",
      description: "consequently outset depot wilted tune-up yet shimmering median where",
      url: "https://optimal-arcade.org/",
      useRoundRobinDns: false,
      excludeSelf: true,
      urls: [
        {
          url: "https://round-fireplace.biz",
          weight: 3550.39,
          __template_url: "https://deafening-commercial.info",
        },
      ],
      dnsResolvePeriodSec: 2810.46,
      loadBalanceStatsPeriodSec: 2295.42,
      pqStrictOrdering: false,
      pqRatePerSec: 4664.67,
      pqMode: "always",
      pqMaxBufferSize: 423.39,
      pqMaxBackpressureSec: 8720.34,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://smooth-case.biz",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblLake

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesCriblLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
      ],
      bucket: "<value>",
      region: "<value>",
      awsSecretKey: "<value>",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2918.28,
      stagePath: "<value>",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "bucket-owner-read",
      storageClass: "STANDARD",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 7534.3,
      maxOpenFiles: 449.59,
      headerLine: "<value>",
      writeHighWaterMark: 5009.06,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 5629.93,
      maxFileIdleTimeSec: 3066.42,
      verifyPermissions: false,
      maxClosingFilesToBackpressure: 5538.77,
      awsAuthenticationMethod: "auto_rpc",
      format: "json",
      maxConcurrentFileParts: 6642.02,
      description: "tasty slight lox towards reflecting loyally",
      emptyDirCleanupSec: 1618.69,
      directoryBatchSize: 4760.97,
      deadletterPath: "<value>",
      maxRetryNum: 6013.81,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
      ],
      bucket: "<value>",
      region: "<value>",
      awsSecretKey: "<value>",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2918.28,
      stagePath: "<value>",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "bucket-owner-read",
      storageClass: "STANDARD",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 7534.3,
      maxOpenFiles: 449.59,
      headerLine: "<value>",
      writeHighWaterMark: 5009.06,
      onBackpressure: "drop",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 5629.93,
      maxFileIdleTimeSec: 3066.42,
      verifyPermissions: false,
      maxClosingFilesToBackpressure: 5538.77,
      awsAuthenticationMethod: "auto_rpc",
      format: "json",
      maxConcurrentFileParts: 6642.02,
      description: "tasty slight lox towards reflecting loyally",
      emptyDirCleanupSec: 1618.69,
      directoryBatchSize: 4760.97,
      deadletterPath: "<value>",
      maxRetryNum: 6013.81,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblSearchEngine

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesCriblSearchEngine" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
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
        initialBackoff: 318.88,
        backoffRate: 5761.69,
        maxBackoff: 1125.87,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "for cautiously yowza safeguard",
        },
      ],
      onBackpressure: "block",
      useRoundRobinDns: true,
      description: "technician pro angrily ack",
      url: "https://0.0.0.0:10200",
      excludeSelf: false,
      urls: [
        {
          url: "https://round-fireplace.biz",
          weight: 3550.39,
          __template_url: "https://deafening-commercial.info",
        },
      ],
      dnsResolvePeriodSec: 5139.82,
      loadBalanceStatsPeriodSec: 1226.09,
      pqStrictOrdering: true,
      pqRatePerSec: 7668.25,
      pqMode: "backpressure",
      pqMaxBufferSize: 2511.13,
      pqMaxBackpressureSec: 5062.59,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://aggravating-tackle.org",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
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
        initialBackoff: 318.88,
        backoffRate: 5761.69,
        maxBackoff: 1125.87,
      },
      responseHonorRetryAfterHeader: true,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "for cautiously yowza safeguard",
        },
      ],
      onBackpressure: "block",
      useRoundRobinDns: true,
      description: "technician pro angrily ack",
      url: "https://0.0.0.0:10200",
      excludeSelf: false,
      urls: [
        {
          url: "https://round-fireplace.biz",
          weight: 3550.39,
          __template_url: "https://deafening-commercial.info",
        },
      ],
      dnsResolvePeriodSec: 5139.82,
      loadBalanceStatsPeriodSec: 1226.09,
      pqStrictOrdering: true,
      pqRatePerSec: 7668.25,
      pqMode: "backpressure",
      pqMaxBufferSize: 2511.13,
      pqMaxBackpressureSec: 5062.59,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://aggravating-tackle.org",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCriblTcp

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesCriblTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      loadBalanced: false,
      compression: "none",
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
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      connectionTimeout: 3798.83,
      writeTimeout: 2278.08,
      tokenTTLMinutes: 3171.55,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "after that tuba soon",
        },
      ],
      excludeFields: [
        "<value 1>",
      ],
      onBackpressure: "queue",
      description: "abseil barring pro behind fooey notarize pleasant gently gum agreeable",
      host: "localhost",
      port: 10090,
      excludeSelf: true,
      hosts: [
        {
          host: "thorny-league.info",
          port: 1492.34,
          tls: "off",
          servername: "<value>",
          weight: 8186.11,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 5972.19,
      loadBalanceStatsPeriodSec: 4051.31,
      maxConcurrentSenders: 1612.93,
      pqStrictOrdering: true,
      pqRatePerSec: 8183.89,
      pqMode: "always",
      pqMaxBufferSize: 9401.43,
      pqMaxBackpressureSec: 9969.29,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      loadBalanced: false,
      compression: "none",
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
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      connectionTimeout: 3798.83,
      writeTimeout: 2278.08,
      tokenTTLMinutes: 3171.55,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "after that tuba soon",
        },
      ],
      excludeFields: [
        "<value 1>",
      ],
      onBackpressure: "queue",
      description: "abseil barring pro behind fooey notarize pleasant gently gum agreeable",
      host: "localhost",
      port: 10090,
      excludeSelf: true,
      hosts: [
        {
          host: "thorny-league.info",
          port: 1492.34,
          tls: "off",
          servername: "<value>",
          weight: 8186.11,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 5972.19,
      loadBalanceStatsPeriodSec: 4051.31,
      maxConcurrentSenders: 1612.93,
      pqStrictOrdering: true,
      pqRatePerSec: 8183.89,
      pqMode: "always",
      pqMaxBufferSize: 9401.43,
      pqMaxBackpressureSec: 9969.29,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesCrowdstrikeNextGenSiem

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesCrowdstrikeNextGenSiem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
        "<value 3>",
      ],
      url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
      concurrency: 6579.45,
      maxPayloadSizeKB: 8917.46,
      maxPayloadEvents: 3050.61,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 4375.57,
      flushPeriodSec: 4503.23,
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
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      description: "leading abaft acidic insolence carnival pip uh-huh as yearly",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 5224.29,
      pqMode: "backpressure",
      pqMaxBufferSize: 5142.53,
      pqMaxBackpressureSec: 3853.92,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://raw-spring.info/",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
        "<value 3>",
      ],
      url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
      concurrency: 6579.45,
      maxPayloadSizeKB: 8917.46,
      maxPayloadEvents: 3050.61,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 4375.57,
      flushPeriodSec: 4503.23,
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
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      description: "leading abaft acidic insolence carnival pip uh-huh as yearly",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 5224.29,
      pqMode: "backpressure",
      pqMaxBufferSize: 5142.53,
      pqMaxBackpressureSec: 3853.92,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://raw-spring.info/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDatabricks

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesDatabricks" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      destPath: "<value>",
      stagePath: "<value>",
      addIdToStagePath: false,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4438.09,
      maxFileOpenTimeSec: 1929.5,
      maxFileIdleTimeSec: 3272.9,
      maxOpenFiles: 5382.51,
      headerLine: "<value>",
      writeHighWaterMark: 1169.88,
      onBackpressure: "drop",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
      timeoutSec: 5064.38,
      description: "ring responsible collaboration among",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 7233.22,
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
      enablePageChecksum: true,
      emptyDirCleanupSec: 1417.03,
      directoryBatchSize: 355.3,
      deadletterPath: "<value>",
      maxRetryNum: 6284.1,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      destPath: "<value>",
      stagePath: "<value>",
      addIdToStagePath: false,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4438.09,
      maxFileOpenTimeSec: 1929.5,
      maxFileIdleTimeSec: 3272.9,
      maxOpenFiles: 5382.51,
      headerLine: "<value>",
      writeHighWaterMark: 1169.88,
      onBackpressure: "drop",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
      timeoutSec: 5064.38,
      description: "ring responsible collaboration among",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 7233.22,
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
      enablePageChecksum: true,
      emptyDirCleanupSec: 1417.03,
      directoryBatchSize: 355.3,
      deadletterPath: "<value>",
      maxRetryNum: 6284.1,
      __template_format: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDatadog

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesDatadog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      contentType: "text",
      message: "<value>",
      source: "<value>",
      host: "pricey-suitcase.net",
      service: "<value>",
      tags: [
        "<value 1>",
      ],
      batchByTags: false,
      allowApiKeyFromEvents: false,
      severity: "debug",
      site: "us3",
      sendCountersAsCount: false,
      concurrency: 9508.77,
      maxPayloadSizeKB: 1633.8,
      maxPayloadEvents: 8068.74,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 6925.96,
      flushPeriodSec: 6276.36,
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
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "manual",
      totalMemoryLimitKB: 6255.02,
      description: "than underpants morbidity likewise before since",
      customUrl: "https://educated-government.info/",
      pqStrictOrdering: false,
      pqRatePerSec: 3597.67,
      pqMode: "always",
      pqMaxBufferSize: 5703.84,
      pqMaxBackpressureSec: 6873.12,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      contentType: "text",
      message: "<value>",
      source: "<value>",
      host: "pricey-suitcase.net",
      service: "<value>",
      tags: [
        "<value 1>",
      ],
      batchByTags: false,
      allowApiKeyFromEvents: false,
      severity: "debug",
      site: "us3",
      sendCountersAsCount: false,
      concurrency: 9508.77,
      maxPayloadSizeKB: 1633.8,
      maxPayloadEvents: 8068.74,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 6925.96,
      flushPeriodSec: 6276.36,
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
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      authType: "manual",
      totalMemoryLimitKB: 6255.02,
      description: "than underpants morbidity likewise before since",
      customUrl: "https://educated-government.info/",
      pqStrictOrdering: false,
      pqRatePerSec: 3597.67,
      pqMode: "always",
      pqMaxBufferSize: 5703.84,
      pqMaxBackpressureSec: 6873.12,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDataset

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesDataset" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
      id: "dataset-output",
      type: "dataset",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
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
      defaultSeverity: "warning",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      site: "us",
      concurrency: 9004.03,
      maxPayloadSizeKB: 5172.77,
      maxPayloadEvents: 2853.94,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 6493.38,
      flushPeriodSec: 1998.92,
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
      onBackpressure: "block",
      authType: "manual",
      totalMemoryLimitKB: 431.64,
      description: "viciously louse morning cow pear why lest",
      customUrl: "https://forsaken-gown.info/",
      pqStrictOrdering: false,
      pqRatePerSec: 784.09,
      pqMode: "error",
      pqMaxBufferSize: 6768.08,
      pqMaxBackpressureSec: 8674.88,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      apiKey: "<value>",
      textSecret: "<value>",
      __template_customUrl: "https://substantial-doing.net",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
      id: "dataset-output",
      type: "dataset",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
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
      defaultSeverity: "warning",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      site: "us",
      concurrency: 9004.03,
      maxPayloadSizeKB: 5172.77,
      maxPayloadEvents: 2853.94,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 6493.38,
      flushPeriodSec: 1998.92,
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
      onBackpressure: "block",
      authType: "manual",
      totalMemoryLimitKB: 431.64,
      description: "viciously louse morning cow pear why lest",
      customUrl: "https://forsaken-gown.info/",
      pqStrictOrdering: false,
      pqRatePerSec: 784.09,
      pqMode: "error",
      pqMaxBufferSize: 6768.08,
      pqMaxBackpressureSec: 8674.88,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      apiKey: "<value>",
      textSecret: "<value>",
      __template_customUrl: "https://substantial-doing.net",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDiskSpool

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesDiskSpool" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      partitionExpr: "<value>",
      description: "beautifully hawk underneath entomb management till and",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      partitionExpr: "<value>",
      description: "beautifully hawk underneath entomb management till and",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDlS3

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesDlS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 480.13,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "authenticated-read",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 705.63,
      maxOpenFiles: 9175.48,
      headerLine: "<value>",
      writeHighWaterMark: 4838.25,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 291.04,
      maxFileIdleTimeSec: 1329.01,
      maxConcurrentFileParts: 5450.88,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 996.93,
      partitioningFields: [
        "<value 1>",
      ],
      description: "descriptive official courageously qua quaintly fencing gleefully brr blank sans",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 9288.53,
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
      emptyDirCleanupSec: 7661.46,
      directoryBatchSize: 6283.49,
      deadletterPath: "<value>",
      maxRetryNum: 3825.97,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 480.13,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "authenticated-read",
      storageClass: "REDUCED_REDUNDANCY",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 705.63,
      maxOpenFiles: 9175.48,
      headerLine: "<value>",
      writeHighWaterMark: 4838.25,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 291.04,
      maxFileIdleTimeSec: 1329.01,
      maxConcurrentFileParts: 5450.88,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 996.93,
      partitioningFields: [
        "<value 1>",
      ],
      description: "descriptive official courageously qua quaintly fencing gleefully brr blank sans",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "best_speed",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 9288.53,
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
      emptyDirCleanupSec: 7661.46,
      directoryBatchSize: 6283.49,
      deadletterPath: "<value>",
      maxRetryNum: 3825.97,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDynatraceHttp

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesDynatraceHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
      id: "dynatrace-http-output",
      type: "dynatrace_http",
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
      method: "PATCH",
      keepAlive: false,
      concurrency: 6113.23,
      maxPayloadSizeKB: 7314.08,
      maxPayloadEvents: 9294.22,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 101.61,
      flushPeriodSec: 6894.6,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      totalMemoryLimitKB: 973.64,
      description: "overdue phooey wherever controvert oh cake whether glow whose",
      pqStrictOrdering: false,
      pqRatePerSec: 8217.94,
      pqMode: "error",
      pqMaxBufferSize: 5630.35,
      pqMaxBackpressureSec: 8556.75,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      token: "your-api-key",
      textSecret: "<value>",
      environmentId: "<id>",
      activeGateDomain: "<value>",
      url: "https://pointed-compromise.com",
      __template_url: "https://wretched-vibraphone.net/",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
      id: "dynatrace-http-output",
      type: "dynatrace_http",
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
      method: "PATCH",
      keepAlive: false,
      concurrency: 6113.23,
      maxPayloadSizeKB: 7314.08,
      maxPayloadEvents: 9294.22,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 101.61,
      flushPeriodSec: 6894.6,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      totalMemoryLimitKB: 973.64,
      description: "overdue phooey wherever controvert oh cake whether glow whose",
      pqStrictOrdering: false,
      pqRatePerSec: 8217.94,
      pqMode: "error",
      pqMaxBufferSize: 5630.35,
      pqMaxBackpressureSec: 8556.75,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      token: "your-api-key",
      textSecret: "<value>",
      environmentId: "<id>",
      activeGateDomain: "<value>",
      url: "https://pointed-compromise.com",
      __template_url: "https://wretched-vibraphone.net/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesDynatraceOtlp

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesDynatraceOtlp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      httpCompress: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 3591.85,
      maxPayloadSizeKB: 8598.98,
      timeoutSec: 5529.35,
      flushPeriodSec: 7934.76,
      failedRequestLoggingMode: "none",
      connectionTimeout: 86.28,
      keepAliveTime: 7404.58,
      keepAlive: false,
      endpointType: "saas",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      onBackpressure: "drop",
      description: "drat understanding pish upward reassemble hydrolyse typewriter",
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
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      pqStrictOrdering: true,
      pqRatePerSec: 8207.74,
      pqMode: "backpressure",
      pqMaxBufferSize: 9640.7,
      pqMaxBackpressureSec: 7987.95,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      httpCompress: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 3591.85,
      maxPayloadSizeKB: 8598.98,
      timeoutSec: 5529.35,
      flushPeriodSec: 7934.76,
      failedRequestLoggingMode: "none",
      connectionTimeout: 86.28,
      keepAliveTime: 7404.58,
      keepAlive: false,
      endpointType: "saas",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      onBackpressure: "drop",
      description: "drat understanding pish upward reassemble hydrolyse typewriter",
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
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      pqStrictOrdering: true,
      pqRatePerSec: 8207.74,
      pqMode: "backpressure",
      pqMaxBufferSize: 9640.7,
      pqMaxBackpressureSec: 7987.95,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesElastic

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesElastic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      loadBalanced: false,
      index: "logs",
      docType: "<value>",
      concurrency: 1922.52,
      maxPayloadSizeKB: 5495.21,
      maxPayloadEvents: 4508.09,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 3792.6,
      flushPeriodSec: 7323.21,
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
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: false,
        username: "Missouri87",
        password: "YbaXU5mPt4QCdjf",
        authType: "textSecret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticVersion: "auto",
      elasticPipeline: "<value>",
      includeDocId: false,
      writeAction: "create",
      retryPartialErrors: true,
      onBackpressure: "queue",
      description: "down boohoo oddly through gadzooks whoa gloomy",
      url: "https://rotating-dusk.biz/",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://intelligent-bump.org",
          weight: 3467.47,
          __template_url: "https://different-starboard.org/",
        },
      ],
      dnsResolvePeriodSec: 7691.02,
      loadBalanceStatsPeriodSec: 1768.54,
      pqStrictOrdering: false,
      pqRatePerSec: 18.46,
      pqMode: "backpressure",
      pqMaxBufferSize: 3541.98,
      pqMaxBackpressureSec: 5180.79,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://monumental-pharmacopoeia.org",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      loadBalanced: false,
      index: "logs",
      docType: "<value>",
      concurrency: 1922.52,
      maxPayloadSizeKB: 5495.21,
      maxPayloadEvents: 4508.09,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 3792.6,
      flushPeriodSec: 7323.21,
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
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: false,
        username: "Missouri87",
        password: "YbaXU5mPt4QCdjf",
        authType: "textSecret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticVersion: "auto",
      elasticPipeline: "<value>",
      includeDocId: false,
      writeAction: "create",
      retryPartialErrors: true,
      onBackpressure: "queue",
      description: "down boohoo oddly through gadzooks whoa gloomy",
      url: "https://rotating-dusk.biz/",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://intelligent-bump.org",
          weight: 3467.47,
          __template_url: "https://different-starboard.org/",
        },
      ],
      dnsResolvePeriodSec: 7691.02,
      loadBalanceStatsPeriodSec: 1768.54,
      pqStrictOrdering: false,
      pqRatePerSec: 18.46,
      pqMode: "backpressure",
      pqMaxBufferSize: 3541.98,
      pqMaxBackpressureSec: 5180.79,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://monumental-pharmacopoeia.org",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesElasticCloud

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesElasticCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      concurrency: 9501.76,
      maxPayloadSizeKB: 3135.94,
      maxPayloadEvents: 6764.46,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 4439.02,
      flushPeriodSec: 2789.93,
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
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: false,
        username: "Missouri87",
        password: "YbaXU5mPt4QCdjf",
        authType: "textSecret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticPipeline: "<value>",
      includeDocId: false,
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "flint now than to turbulent made-up whoever rival proud",
      pqStrictOrdering: true,
      pqRatePerSec: 3461.51,
      pqMode: "always",
      pqMaxBufferSize: 14.64,
      pqMaxBackpressureSec: 355.95,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      concurrency: 9501.76,
      maxPayloadSizeKB: 3135.94,
      maxPayloadEvents: 6764.46,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 4439.02,
      flushPeriodSec: 2789.93,
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
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: false,
        username: "Missouri87",
        password: "YbaXU5mPt4QCdjf",
        authType: "textSecret",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticPipeline: "<value>",
      includeDocId: false,
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      description: "flint now than to turbulent made-up whoever rival proud",
      pqStrictOrdering: true,
      pqRatePerSec: 3461.51,
      pqMode: "always",
      pqMaxBufferSize: 14.64,
      pqMaxBackpressureSec: 355.95,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesExabeam

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesExabeam" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      stagePath: "/tmp/staging",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v4",
      objectACL: "bucket-owner-read",
      storageClass: "ARCHIVE",
      reuseConnections: true,
      rejectUnauthorized: false,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      maxFileOpenTimeSec: 5890.87,
      maxFileIdleTimeSec: 6984.84,
      maxOpenFiles: 7066.51,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileSizeMB: 175.49,
      encodedConfiguration: "<value>",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
      siteName: "<value>",
      siteId: "<id>",
      timezoneOffset: "<value>",
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      description: "except sham crushing splash brood colossal grade fund",
      emptyDirCleanupSec: 5153.35,
      directoryBatchSize: 64.28,
      deadletterPath: "<value>",
      maxRetryNum: 532.55,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      stagePath: "/tmp/staging",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v4",
      objectACL: "bucket-owner-read",
      storageClass: "ARCHIVE",
      reuseConnections: true,
      rejectUnauthorized: false,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      maxFileOpenTimeSec: 5890.87,
      maxFileIdleTimeSec: 6984.84,
      maxOpenFiles: 7066.51,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileSizeMB: 175.49,
      encodedConfiguration: "<value>",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
      siteName: "<value>",
      siteId: "<id>",
      timezoneOffset: "<value>",
      awsApiKey: "<value>",
      awsSecretKey: "<value>",
      description: "except sham crushing splash brood colossal grade fund",
      emptyDirCleanupSec: 5153.35,
      directoryBatchSize: 64.28,
      deadletterPath: "<value>",
      maxRetryNum: 532.55,
      __template_region: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesFilesystem

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesFilesystem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
      id: "filesystem-output",
      type: "filesystem",
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
      destPath: "/var/log/output",
      stagePath: "<value>",
      addIdToStagePath: false,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 168.1,
      maxFileOpenTimeSec: 7103.03,
      maxFileIdleTimeSec: 566.47,
      maxOpenFiles: 3852.05,
      headerLine: "<value>",
      writeHighWaterMark: 6826.62,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      description: "plain beret after whoa pushy",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 2344.85,
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
      emptyDirCleanupSec: 5189.71,
      directoryBatchSize: 289.88,
      deadletterPath: "<value>",
      maxRetryNum: 4560.85,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
      id: "filesystem-output",
      type: "filesystem",
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
      destPath: "/var/log/output",
      stagePath: "<value>",
      addIdToStagePath: false,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 168.1,
      maxFileOpenTimeSec: 7103.03,
      maxFileIdleTimeSec: 566.47,
      maxOpenFiles: 3852.05,
      headerLine: "<value>",
      writeHighWaterMark: 6826.62,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      description: "plain beret after whoa pushy",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 2344.85,
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
      emptyDirCleanupSec: 5189.71,
      directoryBatchSize: 289.88,
      deadletterPath: "<value>",
      maxRetryNum: 4560.85,
      __template_format: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleChronicle

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesGoogleChronicle" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      apiVersion: "v1",
      authenticationMethod: "serviceAccount",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      logFormatType: "unstructured",
      region: "us",
      concurrency: 6454.62,
      maxPayloadSizeKB: 9369.19,
      maxPayloadEvents: 3352.22,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 8490.15,
      flushPeriodSec: 9546.34,
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
      useRoundRobinDns: true,
      onBackpressure: "queue",
      totalMemoryLimitKB: 9386.48,
      description: "uh-huh anxiously finally atop ragged slather weakly though from",
      extraLogTypes: [
        {
          logType: "<value>",
          description: "foretell nab opposite excepting uselessly pfft aw apud snoop brilliant",
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
      pqRatePerSec: 8396.2,
      pqMode: "error",
      pqMaxBufferSize: 6513.79,
      pqMaxBackpressureSec: 9739.54,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      apiVersion: "v1",
      authenticationMethod: "serviceAccount",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      logFormatType: "unstructured",
      region: "us",
      concurrency: 6454.62,
      maxPayloadSizeKB: 9369.19,
      maxPayloadEvents: 3352.22,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 8490.15,
      flushPeriodSec: 9546.34,
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
      useRoundRobinDns: true,
      onBackpressure: "queue",
      totalMemoryLimitKB: 9386.48,
      description: "uh-huh anxiously finally atop ragged slather weakly though from",
      extraLogTypes: [
        {
          logType: "<value>",
          description: "foretell nab opposite excepting uselessly pfft aw apud snoop brilliant",
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
      pqRatePerSec: 8396.2,
      pqMode: "error",
      pqMaxBufferSize: 6513.79,
      pqMaxBackpressureSec: 9739.54,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleCloudLogging

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesGoogleCloudLogging" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
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
      googleAuthMethod: "secret",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxPayloadSizeKB: 4736.19,
      maxPayloadEvents: 5486.38,
      flushPeriodSec: 3473.49,
      concurrency: 9180.07,
      connectionTimeout: 5188.13,
      timeoutSec: 8658.32,
      throttleRateReqPerSec: 263372,
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
      onBackpressure: "queue",
      totalMemoryLimitKB: 7121.66,
      description: "quicker behind character deed dish impartial jaunty",
      logLocationExpression: "my-project",
      payloadExpression: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 8921.69,
      pqMode: "error",
      pqMaxBufferSize: 1652.52,
      pqMaxBackpressureSec: 7411.19,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
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
      googleAuthMethod: "secret",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxPayloadSizeKB: 4736.19,
      maxPayloadEvents: 5486.38,
      flushPeriodSec: 3473.49,
      concurrency: 9180.07,
      connectionTimeout: 5188.13,
      timeoutSec: 8658.32,
      throttleRateReqPerSec: 263372,
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
      onBackpressure: "queue",
      totalMemoryLimitKB: 7121.66,
      description: "quicker behind character deed dish impartial jaunty",
      logLocationExpression: "my-project",
      payloadExpression: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 8921.69,
      pqMode: "error",
      pqMaxBufferSize: 1652.52,
      pqMaxBackpressureSec: 7411.19,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGoogleCloudStorage

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesGoogleCloudStorage" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v2",
      awsAuthenticationMethod: "secret",
      stagePath: "/tmp/staging",
      destPath: "<value>",
      verifyPermissions: true,
      objectACL: "project-private",
      storageClass: "STANDARD",
      reuseConnections: false,
      rejectUnauthorized: false,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 9942.47,
      maxFileOpenTimeSec: 1901.24,
      maxFileIdleTimeSec: 2203.75,
      maxOpenFiles: 3894.3,
      headerLine: "<value>",
      writeHighWaterMark: 2873.11,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      description: "blushing finally bah sans unless whoa",
      compress: "none",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 7445.85,
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
      emptyDirCleanupSec: 1710.55,
      directoryBatchSize: 168.78,
      deadletterPath: "<value>",
      maxRetryNum: 9421.65,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      bucket: "my-bucket",
      region: "us-east1",
      endpoint: "https://storage.googleapis.com",
      signatureVersion: "v2",
      awsAuthenticationMethod: "secret",
      stagePath: "/tmp/staging",
      destPath: "<value>",
      verifyPermissions: true,
      objectACL: "project-private",
      storageClass: "STANDARD",
      reuseConnections: false,
      rejectUnauthorized: false,
      addIdToStagePath: true,
      removeEmptyDirs: false,
      partitionExpr: "<value>",
      format: "raw",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 9942.47,
      maxFileOpenTimeSec: 1901.24,
      maxFileIdleTimeSec: 2203.75,
      maxOpenFiles: 3894.3,
      headerLine: "<value>",
      writeHighWaterMark: 2873.11,
      onBackpressure: "block",
      deadletterEnabled: true,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      description: "blushing finally bah sans unless whoa",
      compress: "none",
      compressionLevel: "best_speed",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 7445.85,
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
      emptyDirCleanupSec: 1710.55,
      directoryBatchSize: 168.78,
      deadletterPath: "<value>",
      maxRetryNum: 9421.65,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGooglePubsub

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesGooglePubsub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      googleAuthMethod: "auto",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      batchSize: 811.24,
      batchTimeout: 4566.64,
      maxQueueSize: 7434.02,
      maxRecordSizeKB: 3069.82,
      flushPeriod: 995.33,
      maxInProgress: 164.57,
      onBackpressure: "drop",
      description: "best-seller and outside indeed mobilise",
      pqStrictOrdering: true,
      pqRatePerSec: 5735.23,
      pqMode: "always",
      pqMaxBufferSize: 7593.69,
      pqMaxBackpressureSec: 6256.68,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      googleAuthMethod: "auto",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      batchSize: 811.24,
      batchTimeout: 4566.64,
      maxQueueSize: 7434.02,
      maxRecordSizeKB: 3069.82,
      flushPeriod: 995.33,
      maxInProgress: 164.57,
      onBackpressure: "drop",
      description: "best-seller and outside indeed mobilise",
      pqStrictOrdering: true,
      pqRatePerSec: 5735.23,
      pqMode: "always",
      pqMaxBufferSize: 7593.69,
      pqMaxBackpressureSec: 6256.68,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_topicName: "<value>",
      __template_region: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGrafanaCloud

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesGrafanaCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
      ],
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
      prometheusUrl: "https://slight-reach.info/",
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
        authType: "textSecret",
        token: "<value>",
        textSecret: "<value>",
        username: "Jaqueline_Stehr",
        password: "Nx4SizsskKhjROG",
        credentialsSecret: "<value>",
      },
      lokiAuth: {
        authType: "none",
        token: "<value>",
        textSecret: "<value>",
        username: "Randall39",
        password: "W8ol1B8X9tkqeeh",
        credentialsSecret: "<value>",
      },
      concurrency: 4128.75,
      maxPayloadSizeKB: 5589.76,
      maxPayloadEvents: 8463.71,
      rejectUnauthorized: true,
      timeoutSec: 8107.99,
      flushPeriodSec: 9650.57,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      description: "lively sleepily above provision twine roger",
      compress: false,
      pqStrictOrdering: false,
      pqRatePerSec: 3115.59,
      pqMode: "backpressure",
      pqMaxBufferSize: 1681.74,
      pqMaxBackpressureSec: 783.35,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_lokiUrl: "https://metallic-creature.name/",
      __template_prometheusUrl: "https://classic-plain.org/",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
      ],
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
      prometheusUrl: "https://slight-reach.info/",
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
        authType: "textSecret",
        token: "<value>",
        textSecret: "<value>",
        username: "Jaqueline_Stehr",
        password: "Nx4SizsskKhjROG",
        credentialsSecret: "<value>",
      },
      lokiAuth: {
        authType: "none",
        token: "<value>",
        textSecret: "<value>",
        username: "Randall39",
        password: "W8ol1B8X9tkqeeh",
        credentialsSecret: "<value>",
      },
      concurrency: 4128.75,
      maxPayloadSizeKB: 5589.76,
      maxPayloadEvents: 8463.71,
      rejectUnauthorized: true,
      timeoutSec: 8107.99,
      flushPeriodSec: 9650.57,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      description: "lively sleepily above provision twine roger",
      compress: false,
      pqStrictOrdering: false,
      pqRatePerSec: 3115.59,
      pqMode: "backpressure",
      pqMaxBufferSize: 1681.74,
      pqMaxBackpressureSec: 783.35,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_lokiUrl: "https://metallic-creature.name/",
      __template_prometheusUrl: "https://classic-plain.org/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesGraphite

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesGraphite" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      protocol: "tcp",
      host: "localhost",
      port: 2003,
      mtu: 6792.23,
      flushPeriodSec: 6094.22,
      dnsResolvePeriodSec: 2104.13,
      description: "or successfully dream from attraction outside broadly vaguely ouch",
      throttleRatePerSec: "<value>",
      connectionTimeout: 9558.75,
      writeTimeout: 2101.52,
      onBackpressure: "queue",
      pqStrictOrdering: true,
      pqRatePerSec: 9193.12,
      pqMode: "error",
      pqMaxBufferSize: 6714.61,
      pqMaxBackpressureSec: 2793.83,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      protocol: "tcp",
      host: "localhost",
      port: 2003,
      mtu: 6792.23,
      flushPeriodSec: 6094.22,
      dnsResolvePeriodSec: 2104.13,
      description: "or successfully dream from attraction outside broadly vaguely ouch",
      throttleRatePerSec: "<value>",
      connectionTimeout: 9558.75,
      writeTimeout: 2101.52,
      onBackpressure: "queue",
      pqStrictOrdering: true,
      pqRatePerSec: 9193.12,
      pqMode: "error",
      pqMaxBufferSize: 6714.61,
      pqMaxBackpressureSec: 2793.83,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesHoneycomb

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesHoneycomb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      dataset: "my-dataset",
      concurrency: 3496.74,
      maxPayloadSizeKB: 1512.11,
      maxPayloadEvents: 1190.56,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 4285.66,
      flushPeriodSec: 8757.74,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "manual",
      description: "positively usually enrich valuable reluctantly aboard boo mortise indeed meanwhile",
      pqStrictOrdering: false,
      pqRatePerSec: 6371.71,
      pqMode: "always",
      pqMaxBufferSize: 6767.79,
      pqMaxBackpressureSec: 268.53,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      dataset: "my-dataset",
      concurrency: 3496.74,
      maxPayloadSizeKB: 1512.11,
      maxPayloadEvents: 1190.56,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 4285.66,
      flushPeriodSec: 8757.74,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "manual",
      description: "positively usually enrich valuable reluctantly aboard boo mortise indeed meanwhile",
      pqStrictOrdering: false,
      pqRatePerSec: 6371.71,
      pqMode: "always",
      pqMaxBufferSize: 6767.79,
      pqMaxBackpressureSec: 268.53,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      team: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesHumioHec

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesHumioHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      concurrency: 859.48,
      maxPayloadSizeKB: 7405.8,
      maxPayloadEvents: 1095.57,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 9631.92,
      flushPeriodSec: 465.02,
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
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "ugh dally loftily plus however duh",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 5082.03,
      pqMode: "error",
      pqMaxBufferSize: 9686.18,
      pqMaxBackpressureSec: 8387.26,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://excitable-palate.org/",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      concurrency: 859.48,
      maxPayloadSizeKB: 7405.8,
      maxPayloadEvents: 1095.57,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 9631.92,
      flushPeriodSec: 465.02,
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
      format: "JSON",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "ugh dally loftily plus however duh",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 5082.03,
      pqMode: "error",
      pqMaxBufferSize: 9686.18,
      pqMaxBackpressureSec: 8387.26,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://excitable-palate.org/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesInfluxdb

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesInfluxdb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      timestampPrecision: "u",
      dynamicValueFieldName: false,
      valueFieldName: "<value>",
      concurrency: 815.55,
      maxPayloadSizeKB: 2324.17,
      maxPayloadEvents: 516.42,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 3267,
      flushPeriodSec: 1028.09,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "credentialsSecret",
      description: "aha whitewash countess ah clumsy monthly impeccable decryption forearm diligently",
      database: "mydb",
      bucket: "<value>",
      org: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4390.23,
      pqMode: "backpressure",
      pqMaxBufferSize: 4125.14,
      pqMaxBackpressureSec: 6707.33,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Wanda_Hane85",
      password: "JzyL58P_sBFTsuv",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://warm-ownership.net",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      timestampPrecision: "u",
      dynamicValueFieldName: false,
      valueFieldName: "<value>",
      concurrency: 815.55,
      maxPayloadSizeKB: 2324.17,
      maxPayloadEvents: 516.42,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 3267,
      flushPeriodSec: 1028.09,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "credentialsSecret",
      description: "aha whitewash countess ah clumsy monthly impeccable decryption forearm diligently",
      database: "mydb",
      bucket: "<value>",
      org: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 4390.23,
      pqMode: "backpressure",
      pqMaxBufferSize: 4125.14,
      pqMaxBackpressureSec: 6707.33,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Wanda_Hane85",
      password: "JzyL58P_sBFTsuv",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://warm-ownership.net",
      __template_database: "<value>",
      __template_bucket: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesKafka

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesKafka" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      compression: "zstd",
      maxRecordSizeKB: 4250.72,
      flushEventCount: 2073.62,
      flushPeriodSec: 1725.79,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://unsightly-brush.info/",
        connectionTimeout: 744.55,
        requestTimeout: 9963.28,
        maxRetries: 1404.86,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1.1",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 9055.24,
        defaultValueSchemaId: 3676.96,
      },
      connectionTimeout: 3094.09,
      requestTimeout: 8231.22,
      maxRetries: 2163.34,
      maxBackOff: 4752.69,
      initialBackoff: 6998.18,
      backoffRate: 5381.54,
      authenticationTimeout: 3753.16,
      reauthenticationThreshold: 5901.76,
      sasl: {
        disabled: false,
        username: "Davion.Renner",
        password: "peihQ6y0_O61plP",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-256",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://jittery-couch.org/",
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
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "queue",
      description: "mostly cheerfully footrest quarrelsome offset",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 4431.57,
      pqMode: "error",
      pqMaxBufferSize: 6256.78,
      pqMaxBackpressureSec: 3941.24,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      compression: "zstd",
      maxRecordSizeKB: 4250.72,
      flushEventCount: 2073.62,
      flushPeriodSec: 1725.79,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://unsightly-brush.info/",
        connectionTimeout: 744.55,
        requestTimeout: 9963.28,
        maxRetries: 1404.86,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1.1",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 9055.24,
        defaultValueSchemaId: 3676.96,
      },
      connectionTimeout: 3094.09,
      requestTimeout: 8231.22,
      maxRetries: 2163.34,
      maxBackOff: 4752.69,
      initialBackoff: 6998.18,
      backoffRate: 5381.54,
      authenticationTimeout: 3753.16,
      reauthenticationThreshold: 5901.76,
      sasl: {
        disabled: false,
        username: "Davion.Renner",
        password: "peihQ6y0_O61plP",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-256",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://jittery-couch.org/",
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
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "queue",
      description: "mostly cheerfully footrest quarrelsome offset",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: true,
      pqRatePerSec: 4431.57,
      pqMode: "error",
      pqMaxBufferSize: 6256.78,
      pqMaxBackpressureSec: 3941.24,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_topic: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesKinesis

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesKinesis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5943.55,
      concurrency: 6255.75,
      maxRecordSizeKB: 6978.04,
      flushPeriodSec: 770.25,
      compression: "gzip",
      useListShards: true,
      asNdjson: false,
      onBackpressure: "queue",
      description: "at masculinize and teriyaki instance",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      maxEventsPerFlush: 5364.46,
      pqStrictOrdering: true,
      pqRatePerSec: 3104.14,
      pqMode: "always",
      pqMaxBufferSize: 5468.62,
      pqMaxBackpressureSec: 8053.2,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5943.55,
      concurrency: 6255.75,
      maxRecordSizeKB: 6978.04,
      flushPeriodSec: 770.25,
      compression: "gzip",
      useListShards: true,
      asNdjson: false,
      onBackpressure: "queue",
      description: "at masculinize and teriyaki instance",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      maxEventsPerFlush: 5364.46,
      pqStrictOrdering: true,
      pqRatePerSec: 3104.14,
      pqMode: "always",
      pqMaxBufferSize: 5468.62,
      pqMaxBackpressureSec: 8053.2,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesLoki

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesLoki" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      messageFormat: "json",
      labels: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "none",
      concurrency: 622.36,
      maxPayloadSizeKB: 8896.51,
      maxPayloadEvents: 179.32,
      rejectUnauthorized: false,
      timeoutSec: 5148.01,
      flushPeriodSec: 3811.94,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      enableDynamicHeaders: true,
      onBackpressure: "block",
      totalMemoryLimitKB: 2726.53,
      description: "perspire ouch mousse next enfold inasmuch likewise though pfft darn",
      compress: false,
      token: "<value>",
      textSecret: "<value>",
      username: "Josefina.Reilly",
      password: "IaRwuGBeIyQvp4P",
      credentialsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 296.5,
      pqMode: "backpressure",
      pqMaxBufferSize: 7890.83,
      pqMaxBackpressureSec: 6315.02,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      messageFormat: "json",
      labels: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "none",
      concurrency: 622.36,
      maxPayloadSizeKB: 8896.51,
      maxPayloadEvents: 179.32,
      rejectUnauthorized: false,
      timeoutSec: 5148.01,
      flushPeriodSec: 3811.94,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      enableDynamicHeaders: true,
      onBackpressure: "block",
      totalMemoryLimitKB: 2726.53,
      description: "perspire ouch mousse next enfold inasmuch likewise though pfft darn",
      compress: false,
      token: "<value>",
      textSecret: "<value>",
      username: "Josefina.Reilly",
      password: "IaRwuGBeIyQvp4P",
      credentialsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 296.5,
      pqMode: "backpressure",
      pqMaxBufferSize: 7890.83,
      pqMaxBackpressureSec: 6315.02,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMicrosoftFabric

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesMicrosoftFabric" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      format: "raw",
      maxRecordSizeKB: 6060.68,
      flushEventCount: 9600.62,
      flushPeriodSec: 9014.32,
      connectionTimeout: 8888.62,
      requestTimeout: 7251.15,
      maxRetries: 3330.63,
      maxBackOff: 4319.98,
      initialBackoff: 9163.36,
      backoffRate: 2697.78,
      authenticationTimeout: 2766.66,
      reauthenticationThreshold: 1903.36,
      sasl: {
        disabled: true,
        mechanism: "oauthbearer",
        username: "Elian26",
        textSecret: "<value>",
        clientSecretAuthType: "certificate",
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
      onBackpressure: "block",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
      description: "stingy for incandescence glisten fortunately unlike amidst dispose jovially spirited",
      pqStrictOrdering: false,
      pqRatePerSec: 6233.74,
      pqMode: "always",
      pqMaxBufferSize: 4955.03,
      pqMaxBackpressureSec: 9077.83,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      format: "raw",
      maxRecordSizeKB: 6060.68,
      flushEventCount: 9600.62,
      flushPeriodSec: 9014.32,
      connectionTimeout: 8888.62,
      requestTimeout: 7251.15,
      maxRetries: 3330.63,
      maxBackOff: 4319.98,
      initialBackoff: 9163.36,
      backoffRate: 2697.78,
      authenticationTimeout: 2766.66,
      reauthenticationThreshold: 1903.36,
      sasl: {
        disabled: true,
        mechanism: "oauthbearer",
        username: "Elian26",
        textSecret: "<value>",
        clientSecretAuthType: "certificate",
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
      onBackpressure: "block",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
      description: "stingy for incandescence glisten fortunately unlike amidst dispose jovially spirited",
      pqStrictOrdering: false,
      pqRatePerSec: 6233.74,
      pqMode: "always",
      pqMaxBufferSize: 4955.03,
      pqMaxBackpressureSec: 9077.83,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_topic: "<value>",
      __template_bootstrap_server: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMinio

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesMinio" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "authenticated-read",
      storageClass: "STANDARD",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: false,
      verifyPermissions: true,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4753.31,
      maxOpenFiles: 6728.95,
      headerLine: "<value>",
      writeHighWaterMark: 9236.46,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 8678.07,
      maxFileIdleTimeSec: 3983.44,
      maxConcurrentFileParts: 4052.68,
      description: "swine when redound",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 3850.5,
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
      emptyDirCleanupSec: 4104.99,
      directoryBatchSize: 2073.92,
      deadletterPath: "<value>",
      maxRetryNum: 7298.62,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "<value>",
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      signatureVersion: "v4",
      objectACL: "authenticated-read",
      storageClass: "STANDARD",
      serverSideEncryption: "AES256",
      reuseConnections: true,
      rejectUnauthorized: false,
      verifyPermissions: true,
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 4753.31,
      maxOpenFiles: 6728.95,
      headerLine: "<value>",
      writeHighWaterMark: 9236.46,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "block",
      forceCloseOnShutdown: true,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 8678.07,
      maxFileIdleTimeSec: 3983.44,
      maxConcurrentFileParts: 4052.68,
      description: "swine when redound",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "none",
      compressionLevel: "normal",
      automaticSchema: false,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_2_4",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 3850.5,
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
      emptyDirCleanupSec: 4104.99,
      directoryBatchSize: 2073.92,
      deadletterPath: "<value>",
      maxRetryNum: 7298.62,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesMsk

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesMsk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
      ],
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topic: "logs",
      ack: 1,
      format: "raw",
      compression: "snappy",
      maxRecordSizeKB: 9684.87,
      flushEventCount: 4341.07,
      flushPeriodSec: 5454.22,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://unsightly-brush.info/",
        connectionTimeout: 744.55,
        requestTimeout: 9963.28,
        maxRetries: 1404.86,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1.1",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 9055.24,
        defaultValueSchemaId: 3676.96,
      },
      connectionTimeout: 8769.26,
      requestTimeout: 163.88,
      maxRetries: 5177.34,
      maxBackOff: 9821.29,
      initialBackoff: 7215.12,
      backoffRate: 4617.41,
      authenticationTimeout: 3964.03,
      reauthenticationThreshold: 2204.12,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5862.86,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "queue",
      description: "trial for stake godfather gosh aside",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 6832.98,
      pqMode: "backpressure",
      pqMaxBufferSize: 1995.95,
      pqMaxBackpressureSec: 1926.65,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 2>",
      ],
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topic: "logs",
      ack: 1,
      format: "raw",
      compression: "snappy",
      maxRecordSizeKB: 9684.87,
      flushEventCount: 4341.07,
      flushPeriodSec: 5454.22,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://unsightly-brush.info/",
        connectionTimeout: 744.55,
        requestTimeout: 9963.28,
        maxRetries: 1404.86,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1.1",
          maxVersion: "TLSv1.1",
        },
        defaultKeySchemaId: 9055.24,
        defaultValueSchemaId: 3676.96,
      },
      connectionTimeout: 8769.26,
      requestTimeout: 163.88,
      maxRetries: 5177.34,
      maxBackOff: 9821.29,
      initialBackoff: 7215.12,
      backoffRate: 4617.41,
      authenticationTimeout: 3964.03,
      reauthenticationThreshold: 2204.12,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5862.86,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "queue",
      description: "trial for stake godfather gosh aside",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      protobufLibraryId: "<id>",
      protobufEncodingId: "<id>",
      pqStrictOrdering: false,
      pqRatePerSec: 6832.98,
      pqMode: "backpressure",
      pqMaxBufferSize: 1995.95,
      pqMaxBackpressureSec: 1926.65,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNetflow

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesNetflow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      hosts: [
        {
          host: "localhost",
          port: 2055,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 540.92,
      enableIpSpoofing: true,
      description: "regarding loyally inasmuch ah seafood submissive swiftly",
      maxRecordSize: 7033.51,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      hosts: [
        {
          host: "localhost",
          port: 2055,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 540.92,
      enableIpSpoofing: true,
      description: "regarding loyally inasmuch ah seafood submissive swiftly",
      maxRecordSize: 7033.51,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNewrelic

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesNewrelic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      ],
      region: "US",
      logType: "<value>",
      messageField: "<value>",
      metadata: [
        {
          name: "service",
          value: "<value>",
        },
      ],
      concurrency: 5033.68,
      maxPayloadSizeKB: 4879.15,
      maxPayloadEvents: 3355.21,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 1779.01,
      flushPeriodSec: 3700.6,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "manual",
      totalMemoryLimitKB: 4324.6,
      description: "word disadvantage yowza inside limping canter which ha pish molasses",
      customUrl: "https://true-ravioli.org",
      pqStrictOrdering: true,
      pqRatePerSec: 1356.14,
      pqMode: "error",
      pqMaxBufferSize: 3494.31,
      pqMaxBackpressureSec: 9618.98,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      ],
      region: "US",
      logType: "<value>",
      messageField: "<value>",
      metadata: [
        {
          name: "service",
          value: "<value>",
        },
      ],
      concurrency: 5033.68,
      maxPayloadSizeKB: 4879.15,
      maxPayloadEvents: 3355.21,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 1779.01,
      flushPeriodSec: 3700.6,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "manual",
      totalMemoryLimitKB: 4324.6,
      description: "word disadvantage yowza inside limping canter which ha pish molasses",
      customUrl: "https://true-ravioli.org",
      pqStrictOrdering: true,
      pqRatePerSec: 1356.14,
      pqMode: "error",
      pqMaxBufferSize: 3494.31,
      pqMaxBackpressureSec: 9618.98,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesNewrelicEvents

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesNewrelicEvents" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      concurrency: 602.38,
      maxPayloadSizeKB: 1989.46,
      maxPayloadEvents: 7480.49,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 8257.68,
      flushPeriodSec: 1653.51,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "outflank amongst promise recklessly uh-huh popularity plugin leading zowie but",
      customUrl: "https://formal-receptor.info/",
      pqStrictOrdering: true,
      pqRatePerSec: 3094.57,
      pqMode: "always",
      pqMaxBufferSize: 1291.45,
      pqMaxBackpressureSec: 2195.53,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
      __template_region: "<value>",
      __template_accountId: "<id>",
      __template_eventType: "<value>",
      __template_customUrl: "https://trustworthy-metabolite.info",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      concurrency: 602.38,
      maxPayloadSizeKB: 1989.46,
      maxPayloadEvents: 7480.49,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 8257.68,
      flushPeriodSec: 1653.51,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "manual",
      description: "outflank amongst promise recklessly uh-huh popularity plugin leading zowie but",
      customUrl: "https://formal-receptor.info/",
      pqStrictOrdering: true,
      pqRatePerSec: 3094.57,
      pqMode: "always",
      pqMaxBufferSize: 1291.45,
      pqMaxBackpressureSec: 2195.53,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      apiKey: "your-api-key",
      textSecret: "<value>",
      __template_region: "<value>",
      __template_accountId: "<id>",
      __template_eventType: "<value>",
      __template_customUrl: "https://trustworthy-metabolite.info",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesOpenTelemetry

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesOpenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      protocol: "http",
      endpoint: "http://localhost:4317",
      otlpVersion: "0.10.0",
      compress: "none",
      httpCompress: "gzip",
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
      concurrency: 5535.93,
      maxPayloadSizeKB: 8732.86,
      timeoutSec: 2661.59,
      flushPeriodSec: 980.51,
      failedRequestLoggingMode: "payload",
      connectionTimeout: 721.3,
      keepAliveTime: 5543.35,
      keepAlive: false,
      onBackpressure: "queue",
      description: "pro lobotomise forenenst quick-witted while phew",
      username: "Queen84",
      password: "5gxg5y4Gv9CwQ5J",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
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
      ],
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      tls: {
        disabled: true,
        rejectUnauthorized: false,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 9640.56,
      pqMode: "error",
      pqMaxBufferSize: 891.65,
      pqMaxBackpressureSec: 638.76,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      protocol: "http",
      endpoint: "http://localhost:4317",
      otlpVersion: "0.10.0",
      compress: "none",
      httpCompress: "gzip",
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
      concurrency: 5535.93,
      maxPayloadSizeKB: 8732.86,
      timeoutSec: 2661.59,
      flushPeriodSec: 980.51,
      failedRequestLoggingMode: "payload",
      connectionTimeout: 721.3,
      keepAliveTime: 5543.35,
      keepAlive: false,
      onBackpressure: "queue",
      description: "pro lobotomise forenenst quick-witted while phew",
      username: "Queen84",
      password: "5gxg5y4Gv9CwQ5J",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
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
      ],
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      tls: {
        disabled: true,
        rejectUnauthorized: false,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 9640.56,
      pqMode: "error",
      pqMaxBufferSize: 891.65,
      pqMaxBackpressureSec: 638.76,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesPrometheus

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesPrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      url: "http://localhost:9091/api/v1/write",
      metricRenameExpr: "<value>",
      sendMetadata: false,
      concurrency: 3.56,
      maxPayloadSizeKB: 8547.82,
      maxPayloadEvents: 4741.96,
      rejectUnauthorized: true,
      timeoutSec: 5429.23,
      flushPeriodSec: 3716.48,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "token",
      description: "passionate bind source phew",
      metricsFlushPeriodSec: 6890.6,
      pqStrictOrdering: true,
      pqRatePerSec: 3267.55,
      pqMode: "error",
      pqMaxBufferSize: 8361.5,
      pqMaxBackpressureSec: 5935.29,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Quinn_Osinski",
      password: "9tpZcuAyP25LYFt",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://granular-fencing.biz/",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      url: "http://localhost:9091/api/v1/write",
      metricRenameExpr: "<value>",
      sendMetadata: false,
      concurrency: 3.56,
      maxPayloadSizeKB: 8547.82,
      maxPayloadEvents: 4741.96,
      rejectUnauthorized: true,
      timeoutSec: 5429.23,
      flushPeriodSec: 3716.48,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "token",
      description: "passionate bind source phew",
      metricsFlushPeriodSec: 6890.6,
      pqStrictOrdering: true,
      pqRatePerSec: 3267.55,
      pqMode: "error",
      pqMaxBufferSize: 8361.5,
      pqMaxBackpressureSec: 5935.29,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "block",
      pqControls: {},
      username: "Quinn_Osinski",
      password: "9tpZcuAyP25LYFt",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_url: "https://granular-fencing.biz/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesRing

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesRing" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
      ],
      format: "raw",
      partitionExpr: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
      onBackpressure: "drop",
      description: "yowza only lest reorient jet judgementally distorted on",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
      ],
      format: "raw",
      partitionExpr: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
      onBackpressure: "drop",
      description: "yowza only lest reorient jet judgementally distorted on",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesRouter

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesRouter" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
          description: "whether questioningly up loudly spark patroller outnumber unzip rigidly",
          final: true,
        },
      ],
      description: "jell blah dazzling middle tenement",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
          description: "whether questioningly up loudly spark patroller outnumber unzip rigidly",
          final: true,
        },
      ],
      description: "jell blah dazzling middle tenement",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesS3

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9757.75,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "private",
      storageClass: "INTELLIGENT_TIERING",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 107.17,
      maxOpenFiles: 3488.75,
      headerLine: "<value>",
      writeHighWaterMark: 1903.92,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 4114.56,
      maxFileIdleTimeSec: 2343.18,
      maxConcurrentFileParts: 9853.54,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 9092.64,
      description: "unearth er misappropriate until",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 1725.86,
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
      emptyDirCleanupSec: 6754.79,
      directoryBatchSize: 188.38,
      deadletterPath: "<value>",
      maxRetryNum: 9626.81,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9757.75,
      stagePath: "/tmp/staging",
      addIdToStagePath: false,
      destPath: "<value>",
      objectACL: "private",
      storageClass: "INTELLIGENT_TIERING",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      partitionExpr: "<value>",
      format: "parquet",
      baseFileName: "<value>",
      fileNameSuffix: "<value>",
      maxFileSizeMB: 107.17,
      maxOpenFiles: 3488.75,
      headerLine: "<value>",
      writeHighWaterMark: 1903.92,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 4114.56,
      maxFileIdleTimeSec: 2343.18,
      maxConcurrentFileParts: 9853.54,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 9092.64,
      description: "unearth er misappropriate until",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      compress: "gzip",
      compressionLevel: "normal",
      automaticSchema: true,
      parquetSchema: "<value>",
      parquetVersion: "PARQUET_1_0",
      parquetDataPageVersion: "DATA_PAGE_V2",
      parquetRowGroupLength: 1725.86,
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
      emptyDirCleanupSec: 6754.79,
      directoryBatchSize: 188.38,
      deadletterPath: "<value>",
      maxRetryNum: 9626.81,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSecurityLake

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSecurityLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9572.61,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      objectACL: "bucket-owner-full-control",
      storageClass: "ONEZONE_IA",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      maxFileSizeMB: 1686.47,
      maxOpenFiles: 9131.68,
      headerLine: "<value>",
      writeHighWaterMark: 7432.38,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 9106.09,
      maxFileIdleTimeSec: 2418.13,
      maxConcurrentFileParts: 1581.76,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 6439.71,
      accountId: "123456789012",
      customSource: "my-custom-source",
      automaticSchema: false,
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 1686.57,
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
      enablePageChecksum: false,
      description: "access once cow um",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      emptyDirCleanupSec: 9349.36,
      directoryBatchSize: 8225.96,
      parquetSchema: "<value>",
      deadletterPath: "<value>",
      maxRetryNum: 9462.36,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      bucket: "my-bucket",
      region: "us-east-1",
      awsSecretKey: "<value>",
      awsAuthenticationMethod: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9572.61,
      stagePath: "/tmp/staging",
      addIdToStagePath: true,
      objectACL: "bucket-owner-full-control",
      storageClass: "ONEZONE_IA",
      serverSideEncryption: "aws:kms",
      kmsKeyId: "<id>",
      removeEmptyDirs: true,
      baseFileName: "<value>",
      maxFileSizeMB: 1686.47,
      maxOpenFiles: 9131.68,
      headerLine: "<value>",
      writeHighWaterMark: 7432.38,
      onBackpressure: "block",
      deadletterEnabled: false,
      onDiskFullBackpressure: "drop",
      forceCloseOnShutdown: false,
      retrySettings: {
        enabled: true,
        initialBackoffMs: 2694.22,
        backoffMultiplier: 9741.71,
        maxBackoffMs: 7684.82,
        jitterPercent: 1991.93,
      },
      maxFileOpenTimeSec: 9106.09,
      maxFileIdleTimeSec: 2418.13,
      maxConcurrentFileParts: 1581.76,
      verifyPermissions: true,
      maxClosingFilesToBackpressure: 6439.71,
      accountId: "123456789012",
      customSource: "my-custom-source",
      automaticSchema: false,
      parquetVersion: "PARQUET_2_6",
      parquetDataPageVersion: "DATA_PAGE_V1",
      parquetRowGroupLength: 1686.57,
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
      enablePageChecksum: false,
      description: "access once cow um",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      emptyDirCleanupSec: 9349.36,
      directoryBatchSize: 8225.96,
      parquetSchema: "<value>",
      deadletterPath: "<value>",
      maxRetryNum: 9462.36,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSentinel

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSentinel" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      keepAlive: false,
      concurrency: 1458.55,
      maxPayloadSizeKB: 6284.6,
      maxPayloadEvents: 2988.82,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 6958.68,
      flushPeriodSec: 5229.32,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "oauth",
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      scope: "<value>",
      endpointURLConfiguration: "url",
      totalMemoryLimitKB: 715.1,
      description: "if while supposing zany submitter regarding insolence or insecure impressive",
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
      pqRatePerSec: 4002.11,
      pqMode: "error",
      pqMaxBufferSize: 1003.36,
      pqMaxBackpressureSec: 3659.66,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      url: "https://your-workspace.ingest.monitor.azure.com",
      dcrID: "<id>",
      dceEndpoint: "<value>",
      streamName: "<value>",
      __template_loginUrl: "https://blind-sediment.org/",
      __template_secret: "<value>",
      __template_client_id: "<id>",
      __template_scope: "<value>",
      __template_url: "https://carefree-flint.net",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      keepAlive: false,
      concurrency: 1458.55,
      maxPayloadSizeKB: 6284.6,
      maxPayloadEvents: 2988.82,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 6958.68,
      flushPeriodSec: 5229.32,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "drop",
      authType: "oauth",
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      scope: "<value>",
      endpointURLConfiguration: "url",
      totalMemoryLimitKB: 715.1,
      description: "if while supposing zany submitter regarding insolence or insecure impressive",
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
      pqRatePerSec: 4002.11,
      pqMode: "error",
      pqMaxBufferSize: 1003.36,
      pqMaxBackpressureSec: 3659.66,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      url: "https://your-workspace.ingest.monitor.azure.com",
      dcrID: "<id>",
      dceEndpoint: "<value>",
      streamName: "<value>",
      __template_loginUrl: "https://blind-sediment.org/",
      __template_secret: "<value>",
      __template_client_id: "<id>",
      __template_scope: "<value>",
      __template_url: "https://carefree-flint.net",
      __template_dcrID: "<id>",
      __template_dceEndpoint: "<value>",
      __template_streamName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSentinelOneAiSiem

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSentinelOneAiSiem" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      region: "US",
      endpoint: "/services/collector/event",
      concurrency: 2097.47,
      maxPayloadSizeKB: 3771.8,
      maxPayloadEvents: 9048.34,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 5372.73,
      flushPeriodSec: 5707.88,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "bind for bah whenever below following uselessly until oof thoroughly",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://whispered-collaboration.biz",
      hostExpression: "<value>",
      sourceExpression: "<value>",
      sourceTypeExpression: "<value>",
      dataSourceCategoryExpression: "<value>",
      dataSourceNameExpression: "<value>",
      dataSourceVendorExpression: "<value>",
      eventTypeExpression: "<value>",
      host: "milky-mainstream.org",
      source: "<value>",
      sourceType: "<value>",
      dataSourceCategory: "<value>",
      dataSourceName: "<value>",
      dataSourceVendor: "<value>",
      eventType: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 2506.92,
      pqMode: "error",
      pqMaxBufferSize: 9326.13,
      pqMaxBackpressureSec: 6264.38,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      region: "US",
      endpoint: "/services/collector/event",
      concurrency: 2097.47,
      maxPayloadSizeKB: 3771.8,
      maxPayloadEvents: 9048.34,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 5372.73,
      flushPeriodSec: 5707.88,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      description: "bind for bah whenever below following uselessly until oof thoroughly",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://whispered-collaboration.biz",
      hostExpression: "<value>",
      sourceExpression: "<value>",
      sourceTypeExpression: "<value>",
      dataSourceCategoryExpression: "<value>",
      dataSourceNameExpression: "<value>",
      dataSourceVendorExpression: "<value>",
      eventTypeExpression: "<value>",
      host: "milky-mainstream.org",
      source: "<value>",
      sourceType: "<value>",
      dataSourceCategory: "<value>",
      dataSourceName: "<value>",
      dataSourceVendor: "<value>",
      eventType: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 2506.92,
      pqMode: "error",
      pqMaxBufferSize: 9326.13,
      pqMaxBackpressureSec: 6264.38,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesServiceNow

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesServiceNow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 3>",
      ],
      endpoint: "ingest.lightstep.com:443",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      otlpVersion: "1.3.1",
      maxPayloadSizeKB: 7839.18,
      protocol: "http",
      compress: "none",
      httpCompress: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 7926.03,
      timeoutSec: 7854.52,
      flushPeriodSec: 3794.15,
      failedRequestLoggingMode: "none",
      connectionTimeout: 1756.28,
      keepAliveTime: 7936.37,
      keepAlive: true,
      onBackpressure: "drop",
      description: "gadzooks hairy negative mmm unless uh-huh silky sparse out",
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
      ],
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      tls: {
        disabled: true,
        rejectUnauthorized: false,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 1872.01,
      pqMode: "error",
      pqMaxBufferSize: 4062.66,
      pqMaxBackpressureSec: 1223.11,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
        "<value 3>",
      ],
      endpoint: "ingest.lightstep.com:443",
      tokenSecret: "your-token-secret",
      authTokenName: "<value>",
      otlpVersion: "1.3.1",
      maxPayloadSizeKB: 7839.18,
      protocol: "http",
      compress: "none",
      httpCompress: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      concurrency: 7926.03,
      timeoutSec: 7854.52,
      flushPeriodSec: 3794.15,
      failedRequestLoggingMode: "none",
      connectionTimeout: 1756.28,
      keepAliveTime: 7936.37,
      keepAlive: true,
      onBackpressure: "drop",
      description: "gadzooks hairy negative mmm unless uh-huh silky sparse out",
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
      ],
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      tls: {
        disabled: true,
        rejectUnauthorized: false,
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      pqStrictOrdering: true,
      pqRatePerSec: 1872.01,
      pqMode: "error",
      pqMaxBufferSize: 4062.66,
      pqMaxBackpressureSec: 1223.11,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSignalfx

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSignalfx" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
      id: "signalfx-output",
      type: "signalfx",
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
      authType: "secret",
      realm: "us0",
      concurrency: 3796.97,
      maxPayloadSizeKB: 6610.74,
      maxPayloadEvents: 6573.54,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 6094.5,
      flushPeriodSec: 373.72,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      description: "swelter conceal by yowza nocturnal majestically wonderfully sedately",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 1482.29,
      pqMode: "always",
      pqMaxBufferSize: 8458.56,
      pqMaxBackpressureSec: 3598.58,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
      id: "signalfx-output",
      type: "signalfx",
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
      authType: "secret",
      realm: "us0",
      concurrency: 3796.97,
      maxPayloadSizeKB: 6610.74,
      maxPayloadEvents: 6573.54,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 6094.5,
      flushPeriodSec: 373.72,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      description: "swelter conceal by yowza nocturnal majestically wonderfully sedately",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 1482.29,
      pqMode: "always",
      pqMaxBufferSize: 8458.56,
      pqMaxBackpressureSec: 3598.58,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSnmp

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSnmp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      hosts: [
        {
          host: "192.168.1.1",
          port: 161,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 4537.81,
      description: "hence oxidize ugh warming boo unsteady",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      hosts: [
        {
          host: "192.168.1.1",
          port: 161,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 4537.81,
      description: "hence oxidize ugh warming boo unsteady",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSns

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSns" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
      messageGroupId: "my-message-group",
      maxRetries: 4442.74,
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
      durationSeconds: 5685.27,
      onBackpressure: "drop",
      description: "proliferate whether provided stunning while",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 8321.52,
      pqMode: "always",
      pqMaxBufferSize: 8842.36,
      pqMaxBackpressureSec: 8402.1,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
      messageGroupId: "my-message-group",
      maxRetries: 4442.74,
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
      durationSeconds: 5685.27,
      onBackpressure: "drop",
      description: "proliferate whether provided stunning while",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 8321.52,
      pqMode: "always",
      pqMaxBufferSize: 8842.36,
      pqMaxBackpressureSec: 8402.1,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunk

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSplunk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
      id: "splunk-output",
      type: "splunk",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      host: "localhost",
      port: 9997,
      nestedFields: "json",
      throttleRatePerSec: "<value>",
      connectionTimeout: 8852.24,
      writeTimeout: 2098.8,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      enableMultiMetrics: false,
      enableACK: false,
      logFailedRequests: true,
      maxS2Sversion: "v4",
      onBackpressure: "block",
      authType: "manual",
      description: "airbus uh-huh lobotomise hence as aw enrage blah runny",
      maxFailedHealthChecks: 6025.9,
      compress: "always",
      pqStrictOrdering: true,
      pqRatePerSec: 8464.02,
      pqMode: "always",
      pqMaxBufferSize: 5762.32,
      pqMaxBackpressureSec: 2921.94,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      authToken: "<value>",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
      id: "splunk-output",
      type: "splunk",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      host: "localhost",
      port: 9997,
      nestedFields: "json",
      throttleRatePerSec: "<value>",
      connectionTimeout: 8852.24,
      writeTimeout: 2098.8,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      enableMultiMetrics: false,
      enableACK: false,
      logFailedRequests: true,
      maxS2Sversion: "v4",
      onBackpressure: "block",
      authType: "manual",
      description: "airbus uh-huh lobotomise hence as aw enrage blah runny",
      maxFailedHealthChecks: 6025.9,
      compress: "always",
      pqStrictOrdering: true,
      pqRatePerSec: 8464.02,
      pqMode: "always",
      pqMaxBufferSize: 5762.32,
      pqMaxBackpressureSec: 2921.94,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunkHec

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSplunkHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
      id: "splunk-hec-output",
      type: "splunk_hec",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 1402.42,
      maxPayloadSizeKB: 8356.49,
      maxPayloadEvents: 7115.43,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 8864.05,
      flushPeriodSec: 4998.19,
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
      enableMultiMetrics: true,
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      description: "lest seafood assured vivacious unfortunate anenst antique whenever fathom",
      url: "https://key-waterspout.biz",
      useRoundRobinDns: true,
      excludeSelf: true,
      urls: [
        {
          url: "https://glittering-exasperation.name",
          weight: 1613.26,
          __template_url: "https://triangular-drug.biz",
        },
      ],
      dnsResolvePeriodSec: 715.85,
      loadBalanceStatsPeriodSec: 2660.76,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 2636.38,
      pqMode: "error",
      pqMaxBufferSize: 881.79,
      pqMaxBackpressureSec: 6532.95,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://sentimental-negotiation.com",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
      id: "splunk-hec-output",
      type: "splunk_hec",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 1402.42,
      maxPayloadSizeKB: 8356.49,
      maxPayloadEvents: 7115.43,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 8864.05,
      flushPeriodSec: 4998.19,
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
      enableMultiMetrics: true,
      authType: "secret",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      description: "lest seafood assured vivacious unfortunate anenst antique whenever fathom",
      url: "https://key-waterspout.biz",
      useRoundRobinDns: true,
      excludeSelf: true,
      urls: [
        {
          url: "https://glittering-exasperation.name",
          weight: 1613.26,
          __template_url: "https://triangular-drug.biz",
        },
      ],
      dnsResolvePeriodSec: 715.85,
      loadBalanceStatsPeriodSec: 2660.76,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 2636.38,
      pqMode: "error",
      pqMaxBufferSize: 881.79,
      pqMaxBackpressureSec: 6532.95,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://sentimental-negotiation.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSplunkLb

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSplunkLb" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      dnsResolvePeriodSec: 2414.19,
      loadBalanceStatsPeriodSec: 1293.95,
      maxConcurrentSenders: 9268.97,
      nestedFields: "none",
      throttleRatePerSec: "<value>",
      connectionTimeout: 2459.44,
      writeTimeout: 3882.58,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      enableMultiMetrics: true,
      enableACK: true,
      logFailedRequests: false,
      maxS2Sversion: "v4",
      onBackpressure: "queue",
      indexerDiscovery: true,
      senderUnhealthyTimeAllowance: 2955.33,
      authType: "secret",
      description: "than until annual grass below comparison blah decriminalize ignorance tedious",
      maxFailedHealthChecks: 7067.93,
      compress: "always",
      indexerDiscoveryConfigs: {
        site: "<value>",
        masterUri: "https://hoarse-passport.net",
        refreshIntervalSec: 4785.43,
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
      excludeSelf: false,
      hosts: [
        {
          host: "localhost",
          port: 9997,
          tls: "inherit",
          servername: "<value>",
          weight: 5887.58,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      pqStrictOrdering: false,
      pqRatePerSec: 5556.49,
      pqMode: "backpressure",
      pqMaxBufferSize: 5646.76,
      pqMaxBackpressureSec: 7556.45,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      dnsResolvePeriodSec: 2414.19,
      loadBalanceStatsPeriodSec: 1293.95,
      maxConcurrentSenders: 9268.97,
      nestedFields: "none",
      throttleRatePerSec: "<value>",
      connectionTimeout: 2459.44,
      writeTimeout: 3882.58,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      enableMultiMetrics: true,
      enableACK: true,
      logFailedRequests: false,
      maxS2Sversion: "v4",
      onBackpressure: "queue",
      indexerDiscovery: true,
      senderUnhealthyTimeAllowance: 2955.33,
      authType: "secret",
      description: "than until annual grass below comparison blah decriminalize ignorance tedious",
      maxFailedHealthChecks: 7067.93,
      compress: "always",
      indexerDiscoveryConfigs: {
        site: "<value>",
        masterUri: "https://hoarse-passport.net",
        refreshIntervalSec: 4785.43,
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
      excludeSelf: false,
      hosts: [
        {
          host: "localhost",
          port: 9997,
          tls: "inherit",
          servername: "<value>",
          weight: 5887.58,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      pqStrictOrdering: false,
      pqRatePerSec: 5556.49,
      pqMode: "backpressure",
      pqMaxBufferSize: 5646.76,
      pqMaxBackpressureSec: 7556.45,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSqs

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSqs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1985.44,
      maxQueueSize: 9999.78,
      maxRecordSizeKB: 9793,
      flushPeriodSec: 9789.27,
      maxInProgress: 9333.32,
      onBackpressure: "queue",
      description: "phew solicit aw beyond key inasmuch disposer furthermore",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 8958.25,
      pqMode: "backpressure",
      pqMaxBufferSize: 318.2,
      pqMaxBackpressureSec: 8876.52,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1985.44,
      maxQueueSize: 9999.78,
      maxRecordSizeKB: 9793,
      flushPeriodSec: 9789.27,
      maxInProgress: 9333.32,
      onBackpressure: "queue",
      description: "phew solicit aw beyond key inasmuch disposer furthermore",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 8958.25,
      pqMode: "backpressure",
      pqMaxBufferSize: 318.2,
      pqMaxBackpressureSec: 8876.52,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesStatsd

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesStatsd" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 9223.23,
      flushPeriodSec: 8862.69,
      dnsResolvePeriodSec: 6182.45,
      description: "roughly which woot below unaccountably",
      throttleRatePerSec: "<value>",
      connectionTimeout: 9887.73,
      writeTimeout: 6743.99,
      onBackpressure: "block",
      pqStrictOrdering: true,
      pqRatePerSec: 8013.61,
      pqMode: "backpressure",
      pqMaxBufferSize: 2274.33,
      pqMaxBackpressureSec: 1209.76,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      protocol: "udp",
      host: "localhost",
      port: 8125,
      mtu: 9223.23,
      flushPeriodSec: 8862.69,
      dnsResolvePeriodSec: 6182.45,
      description: "roughly which woot below unaccountably",
      throttleRatePerSec: "<value>",
      connectionTimeout: 9887.73,
      writeTimeout: 6743.99,
      onBackpressure: "block",
      pqStrictOrdering: true,
      pqRatePerSec: 8013.61,
      pqMode: "backpressure",
      pqMaxBufferSize: 2274.33,
      pqMaxBackpressureSec: 1209.76,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesStatsdExt

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesStatsdExt" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      mtu: 9213.48,
      flushPeriodSec: 5873.87,
      dnsResolvePeriodSec: 3432.33,
      description: "geez owlishly naturally taro unfinished delight indeed",
      throttleRatePerSec: "<value>",
      connectionTimeout: 7155.88,
      writeTimeout: 3351.13,
      onBackpressure: "drop",
      pqStrictOrdering: false,
      pqRatePerSec: 8667.96,
      pqMode: "backpressure",
      pqMaxBufferSize: 8710.76,
      pqMaxBackpressureSec: 4977.62,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      mtu: 9213.48,
      flushPeriodSec: 5873.87,
      dnsResolvePeriodSec: 3432.33,
      description: "geez owlishly naturally taro unfinished delight indeed",
      throttleRatePerSec: "<value>",
      connectionTimeout: 7155.88,
      writeTimeout: 3351.13,
      onBackpressure: "drop",
      pqStrictOrdering: false,
      pqRatePerSec: 8667.96,
      pqMode: "backpressure",
      pqMaxBufferSize: 8710.76,
      pqMaxBackpressureSec: 4977.62,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSumoLogic

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSumoLogic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      url: "https://endpoint1.collection.us2.sumologic.com",
      customSource: "<value>",
      customCategory: "<value>",
      format: "raw",
      concurrency: 2188.63,
      maxPayloadSizeKB: 167.74,
      maxPayloadEvents: 6174.16,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 8560.58,
      flushPeriodSec: 5895.29,
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
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      totalMemoryLimitKB: 9150.84,
      description: "scientific intelligent phooey through likewise",
      pqStrictOrdering: false,
      pqRatePerSec: 3455.4,
      pqMode: "always",
      pqMaxBufferSize: 3704.2,
      pqMaxBackpressureSec: 3402.8,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://impeccable-saloon.net",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      url: "https://endpoint1.collection.us2.sumologic.com",
      customSource: "<value>",
      customCategory: "<value>",
      format: "raw",
      concurrency: 2188.63,
      maxPayloadSizeKB: 167.74,
      maxPayloadEvents: 6174.16,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 8560.58,
      flushPeriodSec: 5895.29,
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
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      totalMemoryLimitKB: 9150.84,
      description: "scientific intelligent phooey through likewise",
      pqStrictOrdering: false,
      pqRatePerSec: 3455.4,
      pqMode: "always",
      pqMaxBufferSize: 3704.2,
      pqMaxBackpressureSec: 3402.8,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      __template_url: "https://impeccable-saloon.net",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesSyslog

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesSyslog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      facility: 17,
      severity: 7,
      appName: "<value>",
      messageFormat: "rfc5424",
      timestampFormat: "iso8601",
      throttleRatePerSec: "<value>",
      octetCountFraming: true,
      logFailedRequests: false,
      description: "up before inasmuch cleave fall scent barring useless",
      loadBalanced: true,
      host: "localhost",
      port: 514,
      excludeSelf: true,
      hosts: [
        {
          host: "thorny-league.info",
          port: 1492.34,
          tls: "off",
          servername: "<value>",
          weight: 8186.11,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 9224.34,
      loadBalanceStatsPeriodSec: 6787.71,
      maxConcurrentSenders: 8341.26,
      connectionTimeout: 2459.06,
      writeTimeout: 6937.79,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "block",
      maxRecordSize: 6549.48,
      udpDnsResolvePeriodSec: 8691.8,
      enableIpSpoofing: true,
      pqStrictOrdering: false,
      pqRatePerSec: 6911.72,
      pqMode: "backpressure",
      pqMaxBufferSize: 3475.48,
      pqMaxBackpressureSec: 3165.02,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      facility: 17,
      severity: 7,
      appName: "<value>",
      messageFormat: "rfc5424",
      timestampFormat: "iso8601",
      throttleRatePerSec: "<value>",
      octetCountFraming: true,
      logFailedRequests: false,
      description: "up before inasmuch cleave fall scent barring useless",
      loadBalanced: true,
      host: "localhost",
      port: 514,
      excludeSelf: true,
      hosts: [
        {
          host: "thorny-league.info",
          port: 1492.34,
          tls: "off",
          servername: "<value>",
          weight: 8186.11,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 9224.34,
      loadBalanceStatsPeriodSec: 6787.71,
      maxConcurrentSenders: 8341.26,
      connectionTimeout: 2459.06,
      writeTimeout: 6937.79,
      tls: {
        disabled: false,
        rejectUnauthorized: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      onBackpressure: "block",
      maxRecordSize: 6549.48,
      udpDnsResolvePeriodSec: 8691.8,
      enableIpSpoofing: true,
      pqStrictOrdering: false,
      pqRatePerSec: 6911.72,
      pqMode: "backpressure",
      pqMaxBufferSize: 3475.48,
      pqMaxBackpressureSec: 3165.02,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesTcpjson

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesTcpjson" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      connectionTimeout: 8446.51,
      writeTimeout: 1463.69,
      tokenTTLMinutes: 1621.9,
      sendHeader: false,
      onBackpressure: "drop",
      authType: "manual",
      description: "everlasting ugh inside king spiteful",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "thorny-league.info",
          port: 1492.34,
          tls: "off",
          servername: "<value>",
          weight: 8186.11,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 7345.58,
      loadBalanceStatsPeriodSec: 8902.71,
      maxConcurrentSenders: 9469.8,
      pqStrictOrdering: true,
      pqRatePerSec: 1328.43,
      pqMode: "always",
      pqMaxBufferSize: 6224.27,
      pqMaxBackpressureSec: 8579.92,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "<value>",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
      },
      connectionTimeout: 8446.51,
      writeTimeout: 1463.69,
      tokenTTLMinutes: 1621.9,
      sendHeader: false,
      onBackpressure: "drop",
      authType: "manual",
      description: "everlasting ugh inside king spiteful",
      host: "localhost",
      port: 10090,
      excludeSelf: false,
      hosts: [
        {
          host: "thorny-league.info",
          port: 1492.34,
          tls: "off",
          servername: "<value>",
          weight: 8186.11,
          __template_host: "<value>",
          __template_port: "<value>",
        },
      ],
      dnsResolvePeriodSec: 7345.58,
      loadBalanceStatsPeriodSec: 8902.71,
      maxConcurrentSenders: 9469.8,
      pqStrictOrdering: true,
      pqRatePerSec: 1328.43,
      pqMode: "always",
      pqMaxBufferSize: 6224.27,
      pqMaxBackpressureSec: 8579.92,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
      authToken: "<value>",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWavefront

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesWavefront" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
    output: {
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
      authType: "secret",
      domain: "longboard",
      concurrency: 9984.9,
      maxPayloadSizeKB: 3261.65,
      maxPayloadEvents: 7059.35,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 7567.96,
      flushPeriodSec: 9967.57,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "failing salty tool indeed colorfully however furthermore",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 6018.59,
      pqMode: "always",
      pqMaxBufferSize: 2804.32,
      pqMaxBackpressureSec: 8749.3,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    output: {
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
      authType: "secret",
      domain: "longboard",
      concurrency: 9984.9,
      maxPayloadSizeKB: 3261.65,
      maxPayloadEvents: 7059.35,
      compress: false,
      rejectUnauthorized: true,
      timeoutSec: 7567.96,
      flushPeriodSec: 9967.57,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "queue",
      description: "failing salty tool indeed colorfully however furthermore",
      token: "your-token",
      textSecret: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 6018.59,
      pqMode: "always",
      pqMaxBufferSize: 2804.32,
      pqMaxBackpressureSec: 8749.3,
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWebhook

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesWebhook" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      method: "PATCH",
      format: "advanced",
      keepAlive: false,
      concurrency: 6725.82,
      maxPayloadSizeKB: 79.27,
      maxPayloadEvents: 6620.66,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 6035.96,
      flushPeriodSec: 1024.64,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "basic",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      totalMemoryLimitKB: 1209.37,
      loadBalanced: false,
      description: "yuck coordination nor unto hawk pfft sophisticated",
      customSourceExpression: "<value>",
      customDropWhenNull: true,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 9734,
      pqMode: "always",
      pqMaxBufferSize: 6645.47,
      pqMaxBackpressureSec: 6104.53,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      username: "Ford87",
      password: "MIm0TafbuPgrUir",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://friendly-lotion.com",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 5559.78,
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
          url: "https://glass-sock.name",
          weight: 417.15,
          __template_url: "https://weighty-bakeware.biz/",
        },
      ],
      dnsResolvePeriodSec: 9399.64,
      loadBalanceStatsPeriodSec: 8218.93,
      __template_loginUrl: "https://known-gazebo.com",
      __template_secret: "<value>",
      __template_url: "https://smooth-extent.net",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 2>",
        "<value 3>",
      ],
      method: "PATCH",
      format: "advanced",
      keepAlive: false,
      concurrency: 6725.82,
      maxPayloadSizeKB: 79.27,
      maxPayloadEvents: 6620.66,
      compress: true,
      rejectUnauthorized: false,
      timeoutSec: 6035.96,
      flushPeriodSec: 1024.64,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      authType: "basic",
      tls: {
        disabled: false,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      totalMemoryLimitKB: 1209.37,
      loadBalanced: false,
      description: "yuck coordination nor unto hawk pfft sophisticated",
      customSourceExpression: "<value>",
      customDropWhenNull: true,
      customEventDelimiter: "<value>",
      customContentType: "<value>",
      customPayloadExpression: "<value>",
      advancedContentType: "<value>",
      formatEventCode: "<value>",
      formatPayloadCode: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 9734,
      pqMode: "always",
      pqMaxBufferSize: 6645.47,
      pqMaxBackpressureSec: 6104.53,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "none",
      pqOnBackpressure: "drop",
      pqControls: {},
      username: "Ford87",
      password: "MIm0TafbuPgrUir",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://friendly-lotion.com",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 5559.78,
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
          url: "https://glass-sock.name",
          weight: 417.15,
          __template_url: "https://weighty-bakeware.biz/",
        },
      ],
      dnsResolvePeriodSec: 9399.64,
      loadBalanceStatsPeriodSec: 8218.93,
      __template_loginUrl: "https://known-gazebo.com",
      __template_secret: "<value>",
      __template_url: "https://smooth-extent.net",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesWizHec

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesWizHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      loadBalanced: "<value>",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 8561.16,
      maxPayloadSizeKB: 8286.16,
      maxPayloadEvents: 8915.51,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 4760.64,
      flushPeriodSec: 7507.9,
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
      enableMultiMetrics: "<value>",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
      description: "pfft anti closely quarterly translation steep paltry yet unimportant",
      pqStrictOrdering: true,
      pqRatePerSec: 8672.89,
      pqMode: "error",
      pqMaxBufferSize: 716.85,
      pqMaxBackpressureSec: 5231.67,
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      loadBalanced: "<value>",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      concurrency: 8561.16,
      maxPayloadSizeKB: 8286.16,
      maxPayloadEvents: 8915.51,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 4760.64,
      flushPeriodSec: 7507.9,
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
      enableMultiMetrics: "<value>",
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "queue",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
      description: "pfft anti closely quarterly translation steep paltry yet unimportant",
      pqStrictOrdering: true,
      pqRatePerSec: 8672.89,
      pqMode: "error",
      pqMaxBufferSize: 716.85,
      pqMaxBackpressureSec: 5231.67,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputCreateExamplesXsiam

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputCreateExamplesXsiam" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      loadBalanced: false,
      concurrency: 4001.66,
      maxPayloadSizeKB: 5588.73,
      maxPayloadEvents: 762.23,
      rejectUnauthorized: false,
      timeoutSec: 3026.05,
      flushPeriodSec: 5593.12,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      throttleRateReqPerSec: 782270,
      onBackpressure: "queue",
      totalMemoryLimitKB: 8751.47,
      description: "fortunately potentially tenement but",
      url: "https://naughty-disappointment.name/",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://meaty-guard.org/",
          weight: 6156.59,
        },
      ],
      dnsResolvePeriodSec: 9528.54,
      loadBalanceStatsPeriodSec: 29.97,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 6063.92,
      pqMode: "always",
      pqMaxBufferSize: 8171.12,
      pqMaxBackpressureSec: 3622.24,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://whispered-roundabout.net/",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        "<value 3>",
      ],
      loadBalanced: false,
      concurrency: 4001.66,
      maxPayloadSizeKB: 5588.73,
      maxPayloadEvents: 762.23,
      rejectUnauthorized: false,
      timeoutSec: 3026.05,
      flushPeriodSec: 5593.12,
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
          httpStatus: 4155.77,
          initialBackoff: 4130.62,
          backoffRate: 8372.31,
          maxBackoff: 424.12,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 6984.09,
        backoffRate: 4458.38,
        maxBackoff: 8390.6,
      },
      responseHonorRetryAfterHeader: false,
      throttleRateReqPerSec: 782270,
      onBackpressure: "queue",
      totalMemoryLimitKB: 8751.47,
      description: "fortunately potentially tenement but",
      url: "https://naughty-disappointment.name/",
      useRoundRobinDns: true,
      excludeSelf: false,
      urls: [
        {
          url: "https://meaty-guard.org/",
          weight: 6156.59,
        },
      ],
      dnsResolvePeriodSec: 9528.54,
      loadBalanceStatsPeriodSec: 29.97,
      token: "<value>",
      textSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 6063.92,
      pqMode: "always",
      pqMaxBufferSize: 8171.12,
      pqMaxBackpressureSec: 3622.24,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
      pqControls: {},
      __template_url: "https://whispered-roundabout.net/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: OutputExamplesDefault

<!-- UsageSnippet language="typescript" operationID="updateOutputSystemByPackAndId" method="patch" path="/p/{pack}/system/outputs/{id}" example="OutputExamplesDefault" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.update({
    id: "<id>",
    pack: "<value>",
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
import { packsDestinationsUpdate } from "cribl-control-plane/funcs/packsDestinationsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
    console.log("packsDestinationsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateOutputSystemByPackAndIdRequest](../../models/operations/updateoutputsystembypackandidrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Delete the specified Destination within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteOutputSystemByPackAndId" method="delete" path="/p/{pack}/system/outputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.delete({
    id: "<id>",
    pack: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsDestinationsDelete } from "cribl-control-plane/funcs/packsDestinationsDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsDelete(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOutputSystemByPackAndIdRequest](../../models/operations/deleteoutputsystembypackandidrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
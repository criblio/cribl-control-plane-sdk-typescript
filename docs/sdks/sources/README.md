# Sources

## Overview

Actions related to Sources

### Available Operations

* [list](#list) - List all Sources
* [create](#create) - Create a Source
* [get](#get) - Get a Source
* [update](#update) - Update a Source
* [delete](#delete) - Delete a Source

## list

Get a list of all Sources.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listInput" method="get" path="/system/inputs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesList } from "cribl-control-plane/funcs/sourcesList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesList(criblControlPlane);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesList failed:", res.error);
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

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create a new Source.

### Example Usage: InputCreateExamplesAppscope

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesAppscope" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "appscope-source",
    type: "appscope",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 10000,
    enableUnixPath: false,
    filter: {
      allow: [
        {
          procname: "<value>",
          arg: "<value>",
          config: "<value>",
        },
      ],
      transportURL: "https://drab-scrap.info/",
    },
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/appscope",
    },
    authType: "manual",
    description: "if deserted boohoo red chops excepting know stay bah",
    host: "0.0.0.0",
    port: 9109,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
    unixSocketPerms: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "appscope-source",
    type: "appscope",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 10000,
    enableUnixPath: false,
    filter: {
      allow: [
        {
          procname: "<value>",
          arg: "<value>",
          config: "<value>",
        },
      ],
      transportURL: "https://drab-scrap.info/",
    },
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/appscope",
    },
    authType: "manual",
    description: "if deserted boohoo red chops excepting know stay bah",
    host: "0.0.0.0",
    port: 9109,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
    unixSocketPerms: "<value>",
    authToken: "",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesAzureBlob

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesAzureBlob" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "azure-blob-source",
    type: "azure_blob",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "azure-blob-queue",
    fileFilter: "/.*/",
    visibilityTimeout: 600,
    numReceivers: 1,
    maxMessages: 1,
    servicePeriodSecs: 5,
    skipOnError: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 10000,
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    authType: "manual",
    description: "while brisk meanwhile kaleidoscopic ack ah above psst throughout guide",
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
    __template_queueName: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "azure-blob-source",
    type: "azure_blob",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "azure-blob-queue",
    fileFilter: "/.*/",
    visibilityTimeout: 600,
    numReceivers: 1,
    maxMessages: 1,
    servicePeriodSecs: 5,
    skipOnError: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 10000,
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    authType: "manual",
    description: "while brisk meanwhile kaleidoscopic ack ah above psst throughout guide",
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
    __template_queueName: "<value>",
    __template_connectionString: "<value>",
    __template_tenantId: "<id>",
    __template_clientId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCloudflareHec

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesCloudflareHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "cloudflare-hec-source",
    type: "cloudflare_hec",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "secret",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: true,
        description: "aha hydrocarbon after plain",
        allowedIndexesAtToken: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    hecAPI: "/services/collector",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedIndexes: [
      "<value 1>",
      "<value 2>",
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    emitTokenMetrics: false,
    description: "hateful pike whose or interestingly exotic",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "cloudflare-hec-source",
    type: "cloudflare_hec",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "secret",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: true,
        description: "aha hydrocarbon after plain",
        allowedIndexesAtToken: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    hecAPI: "/services/collector",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedIndexes: [
      "<value 1>",
      "<value 2>",
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    emitTokenMetrics: false,
    description: "hateful pike whose or interestingly exotic",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCollection

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesCollection" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "collection-source",
    type: "collection",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 10000,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    throttleRatePerSec: "0",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    output: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "collection-source",
    type: "collection",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 10000,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    throttleRatePerSec: "0",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    output: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesConfluentCloud

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesConfluentCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "confluent-cloud-source",
    type: "confluent_cloud",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
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
      minVersion: "TLSv1",
      maxVersion: "TLSv1.3",
    },
    topics: [
      "logs",
    ],
    groupId: "Cribl",
    fromBeginning: true,
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
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.3",
      },
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
      username: "Monte_Thiel32",
      password: "KI_orHyojtOdRdG",
      authType: "manual",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://dependable-pulse.net",
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
    sessionTimeout: 30000,
    rebalanceTimeout: 60000,
    heartbeatInterval: 3000,
    autoCommitInterval: 4914.59,
    autoCommitThreshold: 5168.01,
    maxBytesPerPartition: 1048576,
    maxBytes: 10485760,
    maxSocketErrors: 0,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "comfortable whole veto certainly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "confluent-cloud-source",
    type: "confluent_cloud",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
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
      minVersion: "TLSv1",
      maxVersion: "TLSv1.3",
    },
    topics: [
      "logs",
    ],
    groupId: "Cribl",
    fromBeginning: true,
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
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.3",
      },
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
      username: "Monte_Thiel32",
      password: "KI_orHyojtOdRdG",
      authType: "manual",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://dependable-pulse.net",
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
    sessionTimeout: 30000,
    rebalanceTimeout: 60000,
    heartbeatInterval: 3000,
    autoCommitInterval: 4914.59,
    autoCommitThreshold: 5168.01,
    maxBytesPerPartition: 1048576,
    maxBytes: 10485760,
    maxSocketErrors: 0,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "comfortable whole veto certainly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblHttp

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesCriblHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "cribl-http-source",
    type: "cribl_http",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "weary likewise meh stoop upwardly amount violently throughout upwardly bathrobe",
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "fledgling although substantial mmm but what immaculate hmph",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "cribl-http-source",
    type: "cribl_http",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "weary likewise meh stoop upwardly amount violently throughout upwardly bathrobe",
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "fledgling although substantial mmm but what immaculate hmph",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblLakeHttp

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesCriblLakeHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "cribl-lake-http-source",
    type: "cribl_lake_http",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    criblAPI: "/cribl",
    elasticAPI: "/elastic",
    splunkHecAPI: "/services/collector",
    splunkHecAcks: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "goat thorough like",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        splunkHecMetadata: {
          enabled: true,
          defaultDataset: "<value>",
          allowedIndexesAtToken: [
            "<value 1>",
            "<value 2>",
          ],
        },
        elasticsearchMetadata: {
          enabled: false,
          defaultDataset: "<value>",
        },
      },
    ],
    description: "out regarding until pull avow hunt",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_splunkHecAPI: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "cribl-lake-http-source",
    type: "cribl_lake_http",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    criblAPI: "/cribl",
    elasticAPI: "/elastic",
    splunkHecAPI: "/services/collector",
    splunkHecAcks: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "goat thorough like",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        splunkHecMetadata: {
          enabled: true,
          defaultDataset: "<value>",
          allowedIndexesAtToken: [
            "<value 1>",
            "<value 2>",
          ],
        },
        elasticsearchMetadata: {
          enabled: false,
          defaultDataset: "<value>",
        },
      },
    ],
    description: "out regarding until pull avow hunt",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_splunkHecAPI: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblTcp

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesCriblTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "cribl-tcp-source",
    type: "cribl_tcp",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    enableLoadBalancing: false,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "easily bah hierarchy truthfully how brr victoriously",
      },
    ],
    description: "whenever cheerfully average lovingly meh heartfelt leading scratchy make",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "cribl-tcp-source",
    type: "cribl_tcp",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    enableLoadBalancing: false,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "easily bah hierarchy truthfully how brr victoriously",
      },
    ],
    description: "whenever cheerfully average lovingly meh heartfelt leading scratchy make",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCrowdstrike

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesCrowdstrike" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "crowdstrike-source",
    type: "crowdstrike",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "crowdstrike-queue",
    fileFilter: "/.*/",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    maxMessages: 1,
    visibilityTimeout: 21600,
    numReceivers: 1,
    socketTimeout: 300,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    enableSQSAssumeRole: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    checkpointing: {
      enabled: false,
      retries: 5,
    },
    pollTimeout: 10,
    encoding: "<value>",
    description: "aha wherever tooth ack",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "false",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "crowdstrike-source",
    type: "crowdstrike",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "crowdstrike-queue",
    fileFilter: "/.*/",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    maxMessages: 1,
    visibilityTimeout: 21600,
    numReceivers: 1,
    socketTimeout: 300,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    enableSQSAssumeRole: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    checkpointing: {
      enabled: false,
      retries: 5,
    },
    pollTimeout: 10,
    encoding: "<value>",
    description: "aha wherever tooth ack",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "false",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesDatadogAgent

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesDatadogAgent" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "datadog-agent-source",
    type: "datadog_agent",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8126,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    extractMetrics: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    proxyMode: {
      enabled: false,
      rejectUnauthorized: true,
    },
    description: "meanwhile trusting scrutinise except settle",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "datadog-agent-source",
    type: "datadog_agent",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8126,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    extractMetrics: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    proxyMode: {
      enabled: false,
      rejectUnauthorized: true,
    },
    description: "meanwhile trusting scrutinise except settle",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesDatagen

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesDatagen" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "datagen-source",
    type: "datagen",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    samples: [
      {
        sample: "sample.json",
        eventsPerSec: 10,
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "quiet indeed arrogantly circumnavigate greedily wheel",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "datagen-source",
    type: "datagen",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    samples: [
      {
        sample: "sample.json",
        eventsPerSec: 10,
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "quiet indeed arrogantly circumnavigate greedily wheel",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesEdgePrometheus

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesEdgePrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "edge-prometheus-source",
    type: "edge_prometheus",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    dimensionList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    discoveryType: "static",
    interval: 60,
    timeout: 5000,
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "manual",
    description: "geez however knight ah whenever bulky throughout troubled although daintily",
    targets: [
      {
        protocol: "http",
        host: "localhost",
        port: 9090,
        path: "/metrics",
      },
    ],
    recordType: "SRV",
    scrapePort: 9090,
    nameList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    scrapeProtocol: "http",
    scrapePath: "/metrics",
    awsAuthenticationMethod: "auto",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    usePublicIp: true,
    searchFilter: [
      {
        Name: "<value>",
        Values: [],
      },
    ],
    awsSecretKey: "<value>",
    region: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    scrapeProtocolExpr: "metadata.annotations['prometheus.io/scheme'] || 'http'",
    scrapePortExpr: "metadata.annotations['prometheus.io/port'] || 9090",
    scrapePathExpr: "metadata.annotations['prometheus.io/path'] || '/metrics'",
    podFilter: [
      {
        filter: "<value>",
        description: "stay strictly under including corner ick hearten",
      },
    ],
    username: "Hadley97",
    password: "Hkq7Phu4rXHsZ3j",
    credentialsSecret: "<value>",
    __template_awsApiKey: "<value>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "edge-prometheus-source",
    type: "edge_prometheus",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    dimensionList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    discoveryType: "static",
    interval: 60,
    timeout: 5000,
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "manual",
    description: "geez however knight ah whenever bulky throughout troubled although daintily",
    targets: [
      {
        protocol: "http",
        host: "localhost",
        port: 9090,
        path: "/metrics",
      },
    ],
    recordType: "SRV",
    scrapePort: 9090,
    nameList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    scrapeProtocol: "http",
    scrapePath: "/metrics",
    awsAuthenticationMethod: "auto",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    usePublicIp: true,
    searchFilter: [
      {
        Name: "<value>",
        Values: [],
      },
    ],
    awsSecretKey: "<value>",
    region: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    scrapeProtocolExpr: "metadata.annotations['prometheus.io/scheme'] || 'http'",
    scrapePortExpr: "metadata.annotations['prometheus.io/port'] || 9090",
    scrapePathExpr: "metadata.annotations['prometheus.io/path'] || '/metrics'",
    podFilter: [
      {
        filter: "<value>",
        description: "stay strictly under including corner ick hearten",
      },
    ],
    username: "Hadley97",
    password: "Hkq7Phu4rXHsZ3j",
    credentialsSecret: "<value>",
    __template_awsApiKey: "<value>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesElastic

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesElastic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "elastic-source",
    type: "elastic",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "localhost",
    port: 9200,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    elasticAPI: "/",
    authType: "none",
    apiVersion: "8.3.2",
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    proxyMode: {
      enabled: false,
      authType: "none",
      username: "Kathryn_Senger78",
      password: "WPXuh03pB0ItRx8",
      credentialsSecret: "<value>",
      url: "https://likely-abacus.info",
      rejectUnauthorized: false,
      removeHeaders: [
        "<value 1>",
      ],
      timeoutSec: 60,
      __template_url: "https://amused-glider.biz",
    },
    description: "passionate gratefully usually miserably uh-huh",
    username: "Caterina_McClure27",
    password: "5FvvRdikRVomwpo",
    credentialsSecret: "<value>",
    authTokens: [
      "<value 1>",
    ],
    customAPIVersion: "{\n    \"name\": \"AzU84iL\",\n    \"cluster_name\": \"cribl\",\n    \"cluster_uuid\": \"Js6_Z2VKS3KbfRSxPmPbaw\",\n    \"version\": {\n        \"number\": \"8.3.2\",\n        \"build_type\": \"tar\",\n        \"build_hash\": \"bca0c8d\",\n        \"build_date\": \"2019-10-16T06:19:49.319352Z\",\n        \"build_snapshot\": false,\n        \"lucene_version\": \"9.7.2\",\n        \"minimum_wire_compatibility_version\": \"7.17.0\",\n        \"minimum_index_compatibility_version\": \"7.0.0\"\n    },\n    \"tagline\": \"You Know, for Search\"\n}",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "elastic-source",
    type: "elastic",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "localhost",
    port: 9200,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    elasticAPI: "/",
    authType: "none",
    apiVersion: "8.3.2",
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    proxyMode: {
      enabled: false,
      authType: "none",
      username: "Kathryn_Senger78",
      password: "WPXuh03pB0ItRx8",
      credentialsSecret: "<value>",
      url: "https://likely-abacus.info",
      rejectUnauthorized: false,
      removeHeaders: [
        "<value 1>",
      ],
      timeoutSec: 60,
      __template_url: "https://amused-glider.biz",
    },
    description: "passionate gratefully usually miserably uh-huh",
    username: "Caterina_McClure27",
    password: "5FvvRdikRVomwpo",
    credentialsSecret: "<value>",
    authTokens: [
      "<value 1>",
    ],
    customAPIVersion: "{\n    \"name\": \"AzU84iL\",\n    \"cluster_name\": \"cribl\",\n    \"cluster_uuid\": \"Js6_Z2VKS3KbfRSxPmPbaw\",\n    \"version\": {\n        \"number\": \"8.3.2\",\n        \"build_type\": \"tar\",\n        \"build_hash\": \"bca0c8d\",\n        \"build_date\": \"2019-10-16T06:19:49.319352Z\",\n        \"build_snapshot\": false,\n        \"lucene_version\": \"9.7.2\",\n        \"minimum_wire_compatibility_version\": \"7.17.0\",\n        \"minimum_index_compatibility_version\": \"7.0.0\"\n    },\n    \"tagline\": \"You Know, for Search\"\n}",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesEventhub

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesEventhub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "eventhub-source",
    type: "eventhub",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topics: [
      "logs",
    ],
    groupId: "Cribl",
    fromBeginning: true,
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
      password: "rkhgMwb5YCBiRV0",
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
    sessionTimeout: 30000,
    rebalanceTimeout: 60000,
    heartbeatInterval: 3000,
    autoCommitInterval: 7747.29,
    autoCommitThreshold: 9425.98,
    maxBytesPerPartition: 1048576,
    maxBytes: 10485760,
    maxSocketErrors: 0,
    minimizeDuplicates: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "nerve inside gerbil orient yowza maroon ha",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "eventhub-source",
    type: "eventhub",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topics: [
      "logs",
    ],
    groupId: "Cribl",
    fromBeginning: true,
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
      password: "rkhgMwb5YCBiRV0",
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
    sessionTimeout: 30000,
    rebalanceTimeout: 60000,
    heartbeatInterval: 3000,
    autoCommitInterval: 7747.29,
    autoCommitThreshold: 9425.98,
    maxBytesPerPartition: 1048576,
    maxBytes: 10485760,
    maxSocketErrors: 0,
    minimizeDuplicates: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "nerve inside gerbil orient yowza maroon ha",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesExec

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesExec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "exec-source",
    type: "exec",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    command: "echo \"Hello World\"",
    retries: 10,
    scheduleType: "interval",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "hence after waft whoa a oof robust",
    interval: 60,
    cronSchedule: "* * * * *",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "exec-source",
    type: "exec",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    command: "echo \"Hello World\"",
    retries: 10,
    scheduleType: "interval",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "hence after waft whoa a oof robust",
    interval: 60,
    cronSchedule: "* * * * *",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesFile

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesFile" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "file-source",
    type: "file",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    mode: "manual",
    interval: 10,
    filenames: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    filterArchivedFiles: false,
    tailOnly: true,
    idleTimeout: 300,
    minAgeDur: "<value>",
    maxAgeDur: "<value>",
    checkFileModTime: false,
    forceText: false,
    hashLen: 256,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    description: "oh whoa entice when phooey address",
    path: "/usr/local/src",
    depth: 9351.84,
    suppressMissingPathErrors: false,
    deleteFiles: false,
    saltHash: false,
    includeUnidentifiableBinary: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "file-source",
    type: "file",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    mode: "manual",
    interval: 10,
    filenames: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    filterArchivedFiles: false,
    tailOnly: true,
    idleTimeout: 300,
    minAgeDur: "<value>",
    maxAgeDur: "<value>",
    checkFileModTime: false,
    forceText: false,
    hashLen: 256,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    description: "oh whoa entice when phooey address",
    path: "/usr/local/src",
    depth: 9351.84,
    suppressMissingPathErrors: false,
    deleteFiles: false,
    saltHash: false,
    includeUnidentifiableBinary: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesFirehose

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesFirehose" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "firehose-source",
    type: "firehose",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "though instead talkative mid eek deadly these",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "firehose-source",
    type: "firehose",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "though instead talkative mid eek deadly these",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesGooglePubsub

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesGooglePubsub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "google-pubsub-source",
    type: "google_pubsub",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    topicName: "my-topic",
    subscriptionName: "my-subscription",
    monitorSubscription: false,
    createTopic: false,
    createSubscription: true,
    region: "<value>",
    googleAuthMethod: "manual",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    maxBacklog: 1000,
    concurrency: 5,
    requestTimeout: 60000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "mortise yowza clearly er yippee taxicab never onto nor singe",
    orderedDelivery: false,
    __template_topicName: "<value>",
    __template_subscriptionName: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "google-pubsub-source",
    type: "google_pubsub",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    topicName: "my-topic",
    subscriptionName: "my-subscription",
    monitorSubscription: false,
    createTopic: false,
    createSubscription: true,
    region: "<value>",
    googleAuthMethod: "manual",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    maxBacklog: 1000,
    concurrency: 5,
    requestTimeout: 60000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "mortise yowza clearly er yippee taxicab never onto nor singe",
    orderedDelivery: false,
    __template_topicName: "<value>",
    __template_subscriptionName: "<value>",
    __template_region: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesGrafana

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesGrafana" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "grafana-source",
    type: "grafana",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    prometheusAPI: "/api/prom/push",
    lokiAPI: "/loki/api/v1/push",
    prometheusAuth: {
      authType: "none",
      username: "Salvador1",
      password: "ZQk_l_P10FR08Qf",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
    },
    lokiAuth: {
      authType: "none",
      username: "Philip50",
      password: "IKe8kW3jPl5Tei7",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "fooey after properly often charlatan",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "grafana-source",
    type: "grafana",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    prometheusAPI: "/api/prom/push",
    lokiAPI: "/loki/api/v1/push",
    prometheusAuth: {
      authType: "none",
      username: "Salvador1",
      password: "ZQk_l_P10FR08Qf",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
    },
    lokiAuth: {
      authType: "none",
      username: "Philip50",
      password: "IKe8kW3jPl5Tei7",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "fooey after properly often charlatan",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesHttp

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "http-source",
    type: "http",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
      "<value 2>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    criblAPI: "/cribl",
    elasticAPI: "/elastic",
    splunkHecAPI: "/services/collector",
    splunkHecAcks: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "though transplant dreary sweetly which",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "calmly ethyl scramble thick formamide a unfortunately",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_splunkHecAPI: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "http-source",
    type: "http",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
      "<value 2>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    criblAPI: "/cribl",
    elasticAPI: "/elastic",
    splunkHecAPI: "/services/collector",
    splunkHecAcks: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "though transplant dreary sweetly which",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "calmly ethyl scramble thick formamide a unfortunately",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_splunkHecAPI: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesHttpRaw

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesHttpRaw" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "http-raw-source",
    type: "http_raw",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
      "<value 2>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedPaths: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    allowedMethods: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "since reconsideration scoff",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "grave carnival siege uh-huh through behind excepting notwithstanding",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "http-raw-source",
    type: "http_raw",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
      "<value 2>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedPaths: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    allowedMethods: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "since reconsideration scoff",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "grave carnival siege uh-huh through behind excepting notwithstanding",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesJournalFiles

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesJournalFiles" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "journal-files-source",
    type: "journal_files",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    path: "/var/log/journal",
    interval: 10,
    journals: [
      "system",
    ],
    rules: [
      {
        filter: "<value>",
        description: "yuck drat ew our the lecture likewise",
      },
    ],
    currentBoot: false,
    maxAgeDur: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "oof depart loyalty reapply bog",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "journal-files-source",
    type: "journal_files",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    path: "/var/log/journal",
    interval: 10,
    journals: [
      "system",
    ],
    rules: [
      {
        filter: "<value>",
        description: "yuck drat ew our the lecture likewise",
      },
    ],
    currentBoot: false,
    maxAgeDur: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "oof depart loyalty reapply bog",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKafka

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesKafka" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "kafka-source",
    type: "kafka",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    brokers: [
      "localhost:9092",
    ],
    topics: [
      "logs",
    ],
    groupId: "Cribl",
    fromBeginning: true,
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
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.3",
      },
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
      username: "Monte_Thiel32",
      password: "KI_orHyojtOdRdG",
      authType: "manual",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://dependable-pulse.net",
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
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.3",
    },
    sessionTimeout: 30000,
    rebalanceTimeout: 60000,
    heartbeatInterval: 3000,
    autoCommitInterval: 2313.91,
    autoCommitThreshold: 7394.97,
    maxBytesPerPartition: 1048576,
    maxBytes: 10485760,
    maxSocketErrors: 0,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "deliberately greatly hmph mom fatally",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "kafka-source",
    type: "kafka",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    brokers: [
      "localhost:9092",
    ],
    topics: [
      "logs",
    ],
    groupId: "Cribl",
    fromBeginning: true,
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
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.3",
      },
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
      username: "Monte_Thiel32",
      password: "KI_orHyojtOdRdG",
      authType: "manual",
      credentialsSecret: "<value>",
      mechanism: "plain",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://dependable-pulse.net",
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
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.3",
    },
    sessionTimeout: 30000,
    rebalanceTimeout: 60000,
    heartbeatInterval: 3000,
    autoCommitInterval: 2313.91,
    autoCommitThreshold: 7394.97,
    maxBytesPerPartition: 1048576,
    maxBytes: 10485760,
    maxSocketErrors: 0,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "deliberately greatly hmph mom fatally",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKinesis

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesKinesis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "kinesis-source",
    type: "kinesis",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    streamName: "my-stream",
    serviceInterval: 1,
    shardExpr: "true",
    shardIteratorType: "TRIM_HORIZON",
    payloadFormat: "cribl",
    getRecordsLimit: 5000,
    getRecordsLimitTotal: 20000,
    loadBalancingAlgorithm: "ConsistentHashing",
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
    verifyKPLCheckSums: false,
    avoidDuplicates: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "finally instead less till ew duh ew",
    awsApiKey: "<value>",
    awsSecret: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "kinesis-source",
    type: "kinesis",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    streamName: "my-stream",
    serviceInterval: 1,
    shardExpr: "true",
    shardIteratorType: "TRIM_HORIZON",
    payloadFormat: "cribl",
    getRecordsLimit: 5000,
    getRecordsLimitTotal: 20000,
    loadBalancingAlgorithm: "ConsistentHashing",
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
    verifyKPLCheckSums: false,
    avoidDuplicates: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "finally instead less till ew duh ew",
    awsApiKey: "<value>",
    awsSecret: "<value>",
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
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeEvents

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesKubeEvents" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "kube-events-source",
    type: "kube_events",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    rules: [
      {
        filter: "<value>",
        description: "before settler fortunately meh nice bludgeon under soybean jam-packed",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "stall unpleasant newsprint",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "kube-events-source",
    type: "kube_events",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    rules: [
      {
        filter: "<value>",
        description: "before settler fortunately meh nice bludgeon under soybean jam-packed",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "stall unpleasant newsprint",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeLogs

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesKubeLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "kube-logs-source",
    type: "kube_logs",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 15,
    rules: [
      {
        filter: "<value>",
        description: "over questionably yesterday",
      },
    ],
    timestamps: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
    },
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    enableLoadBalancing: false,
    description: "warp verbally through amnesty",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "kube-logs-source",
    type: "kube_logs",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 15,
    rules: [
      {
        filter: "<value>",
        description: "over questionably yesterday",
      },
    ],
    timestamps: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
    },
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    enableLoadBalancing: false,
    description: "warp verbally through amnesty",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeMetrics

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesKubeMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "kube-metrics-source",
    type: "kube_metrics",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 15,
    rules: [
      {
        filter: "<value>",
        description: "saloon where faithfully",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/kube_metrics",
    },
    description: "traduce calculus where fun calculating uh-huh delightfully",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "kube-metrics-source",
    type: "kube_metrics",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 15,
    rules: [
      {
        filter: "<value>",
        description: "saloon where faithfully",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/kube_metrics",
    },
    description: "traduce calculus where fun calculating uh-huh delightfully",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesLoki

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesLoki" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "loki-source",
    type: "loki",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    lokiAPI: "/loki/api/v1/push",
    authType: "none",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "nudge valley instead sun er",
    username: "Werner47",
    password: "b7xIUX8OdaWkQ40",
    token: "<value>",
    credentialsSecret: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "loki-source",
    type: "loki",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    lokiAPI: "/loki/api/v1/push",
    authType: "none",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "nudge valley instead sun er",
    username: "Werner47",
    password: "b7xIUX8OdaWkQ40",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesMetrics

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "metrics-source",
    type: "metrics",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    udpPort: 8125,
    tcpPort: 4526.8,
    maxBufferSize: 1000,
    ipWhitelistRegex: "/.*/",
    enableProxyHeader: false,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 86.97,
    description: "contrast kindly arcade total while warmly",
    __template_host: "<value>",
    __template_udpPort: "<value>",
    __template_tcpPort: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "metrics-source",
    type: "metrics",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    udpPort: 8125,
    tcpPort: 4526.8,
    maxBufferSize: 1000,
    ipWhitelistRegex: "/.*/",
    enableProxyHeader: false,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 86.97,
    description: "contrast kindly arcade total while warmly",
    __template_host: "<value>",
    __template_udpPort: "<value>",
    __template_tcpPort: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesModelDrivenTelemetry

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesModelDrivenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "mdt-source",
    type: "model_driven_telemetry",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 57000,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxActiveCxn: 1000,
    shutdownTimeoutMs: 5000,
    description: "unnecessarily forenenst finally ick qua far or pack outlandish",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "mdt-source",
    type: "model_driven_telemetry",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 57000,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxActiveCxn: 1000,
    shutdownTimeoutMs: 5000,
    description: "unnecessarily forenenst finally ick qua far or pack outlandish",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesMsk

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesMsk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "msk-source",
    type: "msk",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topics: [
      "logs",
    ],
    groupId: "Cribl",
    fromBeginning: true,
    sessionTimeout: 30000,
    rebalanceTimeout: 60000,
    heartbeatInterval: 3000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
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
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.3",
      },
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
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.3",
    },
    autoCommitInterval: 8981.95,
    autoCommitThreshold: 7775.93,
    maxBytesPerPartition: 1048576,
    maxBytes: 10485760,
    maxSocketErrors: 0,
    description: "whereas gah internationalize",
    awsApiKey: "<value>",
    awsSecret: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "msk-source",
    type: "msk",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topics: [
      "logs",
    ],
    groupId: "Cribl",
    fromBeginning: true,
    sessionTimeout: 30000,
    rebalanceTimeout: 60000,
    heartbeatInterval: 3000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
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
        disabled: false,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.3",
      },
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
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.3",
    },
    autoCommitInterval: 8981.95,
    autoCommitThreshold: 7775.93,
    maxBytesPerPartition: 1048576,
    maxBytes: 10485760,
    maxSocketErrors: 0,
    description: "whereas gah internationalize",
    awsApiKey: "<value>",
    awsSecret: "<value>",
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
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesNetflow

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesNetflow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "netflow-source",
    type: "netflow",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 2055,
    enablePassThrough: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    udpSocketRxBufSize: 1130.9,
    templateCacheMinutes: 30,
    v5Enabled: true,
    v9Enabled: true,
    ipfixEnabled: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "dicker sans scarper amid which until yet yin",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "netflow-source",
    type: "netflow",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 2055,
    enablePassThrough: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    udpSocketRxBufSize: 1130.9,
    templateCacheMinutes: 30,
    v5Enabled: true,
    v9Enabled: true,
    ipfixEnabled: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "dicker sans scarper amid which until yet yin",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365Mgmt

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesOffice365Mgmt" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "office365-mgmt-source",
    type: "office365_mgmt",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
    timeout: 300,
    keepAliveTime: 30,
    jobTimeout: "0",
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    publisherIdentifier: "<value>",
    contentConfig: [
      {
        contentType: "<value>",
        description: "er aha till deploy",
        interval: 3564.68,
        logLevel: "error",
        enabled: true,
      },
    ],
    ingestionLag: 0,
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        3152.61,
        1476.48,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "overfeed bitterly notwithstanding tidy equally however",
    clientSecret: "<value>",
    textSecret: "<value>",
    __template_tenantId: "<id>",
    __template_appId: "<id>",
    __template_publisherIdentifier: "<value>",
    __template_clientSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "office365-mgmt-source",
    type: "office365_mgmt",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
    timeout: 300,
    keepAliveTime: 30,
    jobTimeout: "0",
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    publisherIdentifier: "<value>",
    contentConfig: [
      {
        contentType: "<value>",
        description: "er aha till deploy",
        interval: 3564.68,
        logLevel: "error",
        enabled: true,
      },
    ],
    ingestionLag: 0,
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        3152.61,
        1476.48,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "overfeed bitterly notwithstanding tidy equally however",
    clientSecret: "<value>",
    textSecret: "<value>",
    __template_tenantId: "<id>",
    __template_appId: "<id>",
    __template_publisherIdentifier: "<value>",
    __template_clientSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365MsgTrace

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesOffice365MsgTrace" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "office365-msg-trace-source",
    type: "office365_msg_trace",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
    interval: 15,
    startDate: "<value>",
    endDate: "<value>",
    timeout: 300,
    disableTimeFilter: true,
    authType: "oauth",
    rescheduleDroppedTasks: true,
    maxTaskReschedule: 1,
    logLevel: "info",
    jobTimeout: "0",
    keepAliveTime: 30,
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        3152.61,
        1476.48,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    description: "mould schnitzel regarding yawningly",
    username: "Gennaro86",
    password: "pKemi5kWxN5TmzT",
    credentialsSecret: "<value>",
    clientSecret: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    resource: "https://outlook.office365.com",
    planType: "enterprise_gcc",
    textSecret: "<value>",
    certOptions: {
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
    },
    __template_url: "https://parched-iridescence.org",
    __template_tenantId: "<id>",
    __template_clientId: "<id>",
    __template_resource: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "office365-msg-trace-source",
    type: "office365_msg_trace",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
    interval: 15,
    startDate: "<value>",
    endDate: "<value>",
    timeout: 300,
    disableTimeFilter: true,
    authType: "oauth",
    rescheduleDroppedTasks: true,
    maxTaskReschedule: 1,
    logLevel: "info",
    jobTimeout: "0",
    keepAliveTime: 30,
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        3152.61,
        1476.48,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    description: "mould schnitzel regarding yawningly",
    username: "Gennaro86",
    password: "pKemi5kWxN5TmzT",
    credentialsSecret: "<value>",
    clientSecret: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    resource: "https://outlook.office365.com",
    planType: "enterprise_gcc",
    textSecret: "<value>",
    certOptions: {
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
    },
    __template_url: "https://parched-iridescence.org",
    __template_tenantId: "<id>",
    __template_clientId: "<id>",
    __template_resource: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365Service

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesOffice365Service" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "office365-service-source",
    type: "office365_service",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
    timeout: 300,
    keepAliveTime: 30,
    jobTimeout: "0",
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    contentConfig: [
      {
        contentType: "<value>",
        description: "sew queasily interior seriously",
        interval: 2838.92,
        logLevel: "error",
        enabled: false,
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        3152.61,
        1476.48,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "outside bah inside",
    clientSecret: "<value>",
    textSecret: "<value>",
    __template_tenantId: "<id>",
    __template_appId: "<id>",
    __template_clientSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "office365-service-source",
    type: "office365_service",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
    timeout: 300,
    keepAliveTime: 30,
    jobTimeout: "0",
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    contentConfig: [
      {
        contentType: "<value>",
        description: "sew queasily interior seriously",
        interval: 2838.92,
        logLevel: "error",
        enabled: false,
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        3152.61,
        1476.48,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "outside bah inside",
    clientSecret: "<value>",
    textSecret: "<value>",
    __template_tenantId: "<id>",
    __template_appId: "<id>",
    __template_clientSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOpenTelemetry

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesOpenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "otel-source",
    type: "open_telemetry",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 4317,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: "<value>",
    captureHeaders: "<value>",
    activityLogSampleRate: "<value>",
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 15,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    protocol: "grpc",
    extractSpans: false,
    extractMetrics: false,
    otlpVersion: "0.10.0",
    authType: "none",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxActiveCxn: 1000,
    description: "indeed circa because",
    username: "Myles.Lueilwitz-Ryan",
    password: "RyYhbE0tvmVGPg6",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    extractLogs: false,
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "otel-source",
    type: "open_telemetry",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 4317,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: "<value>",
    captureHeaders: "<value>",
    activityLogSampleRate: "<value>",
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 15,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    protocol: "grpc",
    extractSpans: false,
    extractMetrics: false,
    otlpVersion: "0.10.0",
    authType: "none",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxActiveCxn: 1000,
    description: "indeed circa because",
    username: "Myles.Lueilwitz-Ryan",
    password: "RyYhbE0tvmVGPg6",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    extractLogs: false,
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesPrometheus

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesPrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "prometheus-source",
    type: "prometheus",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    dimensionList: [
      "<value 1>",
      "<value 2>",
    ],
    discoveryType: "static",
    interval: 60,
    logLevel: "info",
    rejectUnauthorized: true,
    timeout: 0,
    keepAliveTime: 30,
    jobTimeout: "0",
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "manual",
    description: "barring across fat who astride lowball",
    targetList: [
      "http://localhost:9090/metrics",
    ],
    recordType: "SRV",
    scrapePort: 9090,
    nameList: [
      "<value 1>",
    ],
    scrapeProtocol: "http",
    scrapePath: "/metrics",
    awsAuthenticationMethod: "auto",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    usePublicIp: true,
    searchFilter: [
      {
        Name: "<value>",
        Values: [
          "<value 1>",
        ],
      },
    ],
    awsSecretKey: "<value>",
    region: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    username: "Edgardo39",
    password: "BvIzohhpUOO9Ez7",
    credentialsSecret: "<value>",
    __template_logLevel: "<value>",
    __template_awsApiKey: "<value>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "prometheus-source",
    type: "prometheus",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    dimensionList: [
      "<value 1>",
      "<value 2>",
    ],
    discoveryType: "static",
    interval: 60,
    logLevel: "info",
    rejectUnauthorized: true,
    timeout: 0,
    keepAliveTime: 30,
    jobTimeout: "0",
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "manual",
    description: "barring across fat who astride lowball",
    targetList: [
      "http://localhost:9090/metrics",
    ],
    recordType: "SRV",
    scrapePort: 9090,
    nameList: [
      "<value 1>",
    ],
    scrapeProtocol: "http",
    scrapePath: "/metrics",
    awsAuthenticationMethod: "auto",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    usePublicIp: true,
    searchFilter: [
      {
        Name: "<value>",
        Values: [
          "<value 1>",
        ],
      },
    ],
    awsSecretKey: "<value>",
    region: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    username: "Edgardo39",
    password: "BvIzohhpUOO9Ez7",
    credentialsSecret: "<value>",
    __template_logLevel: "<value>",
    __template_awsApiKey: "<value>",
    __template_awsSecretKey: "<value>",
    __template_region: "<value>",
    __template_assumeRoleArn: "<value>",
    __template_assumeRoleExternalId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesPrometheusRw

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesPrometheusRw" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "prometheus-rw-source",
    type: "prometheus_rw",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    prometheusAPI: "/write",
    authType: "none",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "openly likewise gruesome whoever whose gee",
    username: "Dean.Keebler",
    password: "0POH0dLKHeOMaH5",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_prometheusAPI: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "prometheus-rw-source",
    type: "prometheus_rw",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    prometheusAPI: "/write",
    authType: "none",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "openly likewise gruesome whoever whose gee",
    username: "Dean.Keebler",
    password: "0POH0dLKHeOMaH5",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_prometheusAPI: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesRawUdp

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesRawUdp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "raw-udp-source",
    type: "raw_udp",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 514,
    maxBufferSize: 1000,
    ipWhitelistRegex: "/.*/",
    singleMsgUdpPackets: false,
    ingestRawBytes: false,
    udpSocketRxBufSize: 343.08,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "or robust over impact instead round near since joshingly except",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "raw-udp-source",
    type: "raw_udp",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 514,
    maxBufferSize: 1000,
    ipWhitelistRegex: "/.*/",
    singleMsgUdpPackets: false,
    ingestRawBytes: false,
    udpSocketRxBufSize: 343.08,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "or robust over impact instead round near since joshingly except",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesS3

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "s3-source",
    type: "s3",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "s3-notifications-queue",
    fileFilter: "/.*/",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    maxMessages: 1,
    visibilityTimeout: 600,
    numReceivers: 1,
    socketTimeout: 300,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    enableSQSAssumeRole: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    checkpointing: {
      enabled: false,
      retries: 5,
    },
    pollTimeout: 10,
    encoding: "<value>",
    tagAfterProcessing: false,
    description: "into keenly towards",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "s3-source",
    type: "s3",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "s3-notifications-queue",
    fileFilter: "/.*/",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    maxMessages: 1,
    visibilityTimeout: 600,
    numReceivers: 1,
    socketTimeout: 300,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    enableSQSAssumeRole: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    checkpointing: {
      enabled: false,
      retries: 5,
    },
    pollTimeout: 10,
    encoding: "<value>",
    tagAfterProcessing: false,
    description: "into keenly towards",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesS3Inventory

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesS3Inventory" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "s3-inventory-source",
    type: "s3_inventory",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "s3-inventory-queue",
    fileFilter: "/.*/",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    maxMessages: 1,
    visibilityTimeout: 600,
    numReceivers: 1,
    socketTimeout: 300,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    enableSQSAssumeRole: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    checkpointing: {
      enabled: false,
      retries: 5,
    },
    pollTimeout: 10,
    checksumSuffix: "checksum",
    maxManifestSizeKB: 4096,
    validateInventoryFiles: false,
    description: "finally divert if lively seriously",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "false",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "s3-inventory-source",
    type: "s3_inventory",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "s3-inventory-queue",
    fileFilter: "/.*/",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    maxMessages: 1,
    visibilityTimeout: 600,
    numReceivers: 1,
    socketTimeout: 300,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    enableSQSAssumeRole: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    checkpointing: {
      enabled: false,
      retries: 5,
    },
    pollTimeout: 10,
    checksumSuffix: "checksum",
    maxManifestSizeKB: 4096,
    validateInventoryFiles: false,
    description: "finally divert if lively seriously",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "false",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSecurityLake

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesSecurityLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "security-lake-source",
    type: "security_lake",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "security-lake-queue",
    fileFilter: "/.*/",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    maxMessages: 1,
    visibilityTimeout: 600,
    numReceivers: 1,
    socketTimeout: 300,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    enableSQSAssumeRole: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    checkpointing: {
      enabled: false,
      retries: 5,
    },
    pollTimeout: 10,
    encoding: "<value>",
    description: "mmm lest pfft likewise rule what comparison amidst median gullible",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "false",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "security-lake-source",
    type: "security_lake",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "security-lake-queue",
    fileFilter: "/.*/",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "auto",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: true,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    maxMessages: 1,
    visibilityTimeout: 600,
    numReceivers: 1,
    socketTimeout: 300,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    enableSQSAssumeRole: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    checkpointing: {
      enabled: false,
      retries: 5,
    },
    pollTimeout: 10,
    encoding: "<value>",
    description: "mmm lest pfft likewise rule what comparison amidst median gullible",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "false",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSnmp

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesSnmp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "snmp-source",
    type: "snmp",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "192.168.1.1",
    port: 161,
    snmpV3Auth: {
      v3AuthEnabled: false,
      allowUnmatchedTrap: false,
      v3Users: [
        {
          name: "<value>",
          authProtocol: "none",
          authKey: "<value>",
          privProtocol: "none",
          privKey: "<value>",
        },
      ],
    },
    maxBufferSize: 1000,
    ipWhitelistRegex: "/.*/",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 4917.68,
    varbindsWithTypes: false,
    bestEffortParsing: false,
    description: "um pinion wash however meanwhile yesterday separately zowie",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "snmp-source",
    type: "snmp",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "192.168.1.1",
    port: 161,
    snmpV3Auth: {
      v3AuthEnabled: false,
      allowUnmatchedTrap: false,
      v3Users: [
        {
          name: "<value>",
          authProtocol: "none",
          authKey: "<value>",
          privProtocol: "none",
          privKey: "<value>",
        },
      ],
    },
    maxBufferSize: 1000,
    ipWhitelistRegex: "/.*/",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 4917.68,
    varbindsWithTypes: false,
    bestEffortParsing: false,
    description: "um pinion wash however meanwhile yesterday separately zowie",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunk

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesSplunk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "splunk-source",
    type: "splunk",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 9997,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    authTokens: [
      {
        token: "<value>",
        description: "so obedience aw waft incidentally brr responsibility even furthermore kiss",
      },
    ],
    maxS2Sversion: "v3",
    description: "why event apropos row paralyse upbeat amidst pish joyously ack",
    useFwdTimezone: true,
    dropControlFields: true,
    extractMetrics: false,
    compress: "disabled",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "splunk-source",
    type: "splunk",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 9997,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    authTokens: [
      {
        token: "<value>",
        description: "so obedience aw waft incidentally brr responsibility even furthermore kiss",
      },
    ],
    maxS2Sversion: "v3",
    description: "why event apropos row paralyse upbeat amidst pish joyously ack",
    useFwdTimezone: true,
    dropControlFields: true,
    extractMetrics: false,
    compress: "disabled",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunkHec

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesSplunkHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "splunk-hec-source",
    type: "splunk_hec",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: true,
        description: "meh earnest numeracy sardonic stack about",
        allowedIndexesAtToken: [
          "<value 1>",
          "<value 2>",
        ],
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    splunkHecAPI: "/services/collector",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedIndexes: [
      "<value 1>",
    ],
    splunkHecAcks: false,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    useFwdTimezone: true,
    dropControlFields: true,
    extractMetrics: false,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
    ],
    emitTokenMetrics: false,
    description: "executor given wheel evenly scowl arid boulevard whoa yuck",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_splunkHecAPI: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "splunk-hec-source",
    type: "splunk_hec",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: true,
        description: "meh earnest numeracy sardonic stack about",
        allowedIndexesAtToken: [
          "<value 1>",
          "<value 2>",
        ],
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    splunkHecAPI: "/services/collector",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedIndexes: [
      "<value 1>",
    ],
    splunkHecAcks: false,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    useFwdTimezone: true,
    dropControlFields: true,
    extractMetrics: false,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
    ],
    emitTokenMetrics: false,
    description: "executor given wheel evenly scowl arid boulevard whoa yuck",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_splunkHecAPI: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunkSearch

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesSplunkSearch" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "splunk-search-source",
    type: "splunk_search",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    searchHead: "https://localhost:8089",
    search: "index=main",
    earliest: "-16m@m",
    latest: "-1m@m",
    cronSchedule: "0 * * * *",
    endpoint: "/services/search/jobs/export",
    outputMode: "json",
    endpointParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    endpointHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    logLevel: "error",
    requestTimeout: 0,
    useRoundRobinDns: false,
    rejectUnauthorized: false,
    encoding: "<value>",
    keepAliveTime: 30,
    jobTimeout: "0",
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        5227.09,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    authType: "basic",
    description: "until content along",
    username: "Jalyn43",
    password: "2wxXTLiflvFCcIX",
    token: "<value>",
    credentialsSecret: "<value>",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "splunk-search-source",
    type: "splunk_search",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    searchHead: "https://localhost:8089",
    search: "index=main",
    earliest: "-16m@m",
    latest: "-1m@m",
    cronSchedule: "0 * * * *",
    endpoint: "/services/search/jobs/export",
    outputMode: "json",
    endpointParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    endpointHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    logLevel: "error",
    requestTimeout: 0,
    useRoundRobinDns: false,
    rejectUnauthorized: false,
    encoding: "<value>",
    keepAliveTime: 30,
    jobTimeout: "0",
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        5227.09,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    authType: "basic",
    description: "until content along",
    username: "Jalyn43",
    password: "2wxXTLiflvFCcIX",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSqs

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesSqs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "sqs-source",
    type: "sqs",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "my-queue",
    queueType: "standard",
    awsAccountId: "<id>",
    createQueue: false,
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
    maxMessages: 10,
    visibilityTimeout: 600,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    pollTimeout: 10,
    description: "anxiously wilted gee once icebreaker unkempt",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    numReceivers: 3,
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "sqs-source",
    type: "sqs",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    queueName: "my-queue",
    queueType: "standard",
    awsAccountId: "<id>",
    createQueue: false,
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
    maxMessages: 10,
    visibilityTimeout: 600,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    pollTimeout: 10,
    description: "anxiously wilted gee once icebreaker unkempt",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    numReceivers: 3,
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
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSyslog

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesSyslog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "syslog-source",
    type: "syslog",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    udpPort: 514,
    tcpPort: 2766.66,
    maxBufferSize: 1000,
    ipWhitelistRegex: "/.*/",
    timestampTimezone: "local",
    singleMsgUdpPackets: false,
    enableProxyHeader: false,
    keepFieldsList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    octetCounting: false,
    inferFraming: true,
    strictlyInferOctetCounting: true,
    allowNonStandardAppName: false,
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 2673.89,
    enableLoadBalancing: false,
    description: "enthusiastically idolized now",
    enableEnhancedProxyHeaderParsing: true,
    __template_host: "<value>",
    __template_udpPort: "<value>",
    __template_tcpPort: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "syslog-source",
    type: "syslog",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    udpPort: 514,
    tcpPort: 2766.66,
    maxBufferSize: 1000,
    ipWhitelistRegex: "/.*/",
    timestampTimezone: "local",
    singleMsgUdpPackets: false,
    enableProxyHeader: false,
    keepFieldsList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    octetCounting: false,
    inferFraming: true,
    strictlyInferOctetCounting: true,
    allowNonStandardAppName: false,
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 2673.89,
    enableLoadBalancing: false,
    description: "enthusiastically idolized now",
    enableEnhancedProxyHeaderParsing: true,
    __template_host: "<value>",
    __template_udpPort: "<value>",
    __template_tcpPort: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSystemMetrics

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesSystemMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "system-metrics-source",
    type: "system_metrics",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 10,
    host: {
      mode: "basic",
      custom: {
        system: {
          mode: "basic",
          processes: false,
        },
        cpu: {
          mode: "basic",
          perCpu: false,
          detail: false,
          time: false,
        },
        memory: {
          mode: "basic",
          detail: false,
        },
        network: {
          mode: "basic",
          detail: false,
          protocols: false,
          devices: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          perInterface: false,
        },
        disk: {
          mode: "basic",
          detail: false,
          inodes: false,
          devices: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          mountpoints: [
            "<value 1>",
          ],
          fstypes: [
            "<value 1>",
          ],
          perDevice: false,
        },
      },
    },
    process: {
      sets: [
        {
          name: "<value>",
          filter: "<value>",
          includeChildren: false,
        },
      ],
    },
    container: {
      mode: "basic",
      dockerSocket: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      dockerTimeout: 5,
      filters: [
        {
          expr: "<value>",
        },
      ],
      allContainers: false,
      perDevice: false,
      detail: false,
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/system_metrics",
    },
    description: "although jealously forswear clamor",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "system-metrics-source",
    type: "system_metrics",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 10,
    host: {
      mode: "basic",
      custom: {
        system: {
          mode: "basic",
          processes: false,
        },
        cpu: {
          mode: "basic",
          perCpu: false,
          detail: false,
          time: false,
        },
        memory: {
          mode: "basic",
          detail: false,
        },
        network: {
          mode: "basic",
          detail: false,
          protocols: false,
          devices: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          perInterface: false,
        },
        disk: {
          mode: "basic",
          detail: false,
          inodes: false,
          devices: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          mountpoints: [
            "<value 1>",
          ],
          fstypes: [
            "<value 1>",
          ],
          perDevice: false,
        },
      },
    },
    process: {
      sets: [
        {
          name: "<value>",
          filter: "<value>",
          includeChildren: false,
        },
      ],
    },
    container: {
      mode: "basic",
      dockerSocket: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      dockerTimeout: 5,
      filters: [
        {
          expr: "<value>",
        },
      ],
      allContainers: false,
      perDevice: false,
      detail: false,
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/system_metrics",
    },
    description: "although jealously forswear clamor",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSystemState

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesSystemState" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "system-state-source",
    type: "system_state",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 300,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    collectors: {
      hostsfile: {
        enable: true,
      },
      interfaces: {
        enable: true,
      },
      disk: {
        enable: true,
      },
      metadata: {
        enable: true,
      },
      routes: {
        enable: true,
      },
      dns: {
        enable: true,
      },
      user: {
        enable: true,
      },
      firewall: {
        enable: true,
      },
      services: {
        enable: true,
      },
      ports: {
        enable: true,
      },
      loginUsers: {
        enable: true,
      },
    },
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "none",
      destPath: "$CRIBL_HOME/state/system_state",
    },
    disableNativeModule: false,
    disableNativeLastLogModule: false,
    description: "times even descendant absent although mortally",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "system-state-source",
    type: "system_state",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 300,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    collectors: {
      hostsfile: {
        enable: true,
      },
      interfaces: {
        enable: true,
      },
      disk: {
        enable: true,
      },
      metadata: {
        enable: true,
      },
      routes: {
        enable: true,
      },
      dns: {
        enable: true,
      },
      user: {
        enable: true,
      },
      firewall: {
        enable: true,
      },
      services: {
        enable: true,
      },
      ports: {
        enable: true,
      },
      loginUsers: {
        enable: true,
      },
    },
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "none",
      destPath: "$CRIBL_HOME/state/system_state",
    },
    disableNativeModule: false,
    disableNativeLastLogModule: false,
    description: "times even descendant absent although mortally",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesTcp

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "tcp-source",
    type: "tcp",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    enableHeader: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    description: "clumsy eternity than save both hover",
    authToken: "",
    authType: "manual",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "tcp-source",
    type: "tcp",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
    enableHeader: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    description: "clumsy eternity than save both hover",
    authToken: "",
    authType: "manual",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesTcpjson

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesTcpjson" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "tcpjson-source",
    type: "tcpjson",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    enableLoadBalancing: false,
    authType: "manual",
    description: "merrily scaly unless",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "tcpjson-source",
    type: "tcpjson",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    enableLoadBalancing: false,
    authType: "manual",
    description: "merrily scaly unless",
    authToken: "",
    textSecret: "<value>",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWef

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesWef" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "wef-source",
    type: "wef",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 5985,
    authMethod: "clientCert",
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      requestCert: true,
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      commonNameRegex: "/.*/",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.1",
      ocspCheck: false,
      keytab: "<value>",
      principal: "<value>",
      ocspCheckFailClose: false,
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    keepAliveTimeout: 90,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    socketTimeout: 0,
    caFingerprint: "<value>",
    keytab: "<value>",
    principal: "<value>",
    allowMachineIdMismatch: false,
    subscriptions: [
      {
        subscriptionName: "subscription-1",
        version: "<value>",
        contentFormat: "RenderedText",
        heartbeatInterval: 60,
        batchTimeout: 5,
        readExistingEvents: false,
        sendBookmarks: true,
        compress: true,
        targets: [],
        locale: "en-US",
        querySelector: "simple",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        queries: [
          {
            path: "/usr/src",
            queryExpression: "<value>",
          },
        ],
        xmlQuery: "<value>",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "before whenever circa geez youthfully lest off",
    logFingerprintMismatch: false,
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "wef-source",
    type: "wef",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 5985,
    authMethod: "clientCert",
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      requestCert: true,
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      commonNameRegex: "/.*/",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.1",
      ocspCheck: false,
      keytab: "<value>",
      principal: "<value>",
      ocspCheckFailClose: false,
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    keepAliveTimeout: 90,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    socketTimeout: 0,
    caFingerprint: "<value>",
    keytab: "<value>",
    principal: "<value>",
    allowMachineIdMismatch: false,
    subscriptions: [
      {
        subscriptionName: "subscription-1",
        version: "<value>",
        contentFormat: "RenderedText",
        heartbeatInterval: 60,
        batchTimeout: 5,
        readExistingEvents: false,
        sendBookmarks: true,
        compress: true,
        targets: [],
        locale: "en-US",
        querySelector: "simple",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        queries: [
          {
            path: "/usr/src",
            queryExpression: "<value>",
          },
        ],
        xmlQuery: "<value>",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "before whenever circa geez youthfully lest off",
    logFingerprintMismatch: false,
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWinEventLogs

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesWinEventLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "win-event-logs-source",
    type: "win_event_logs",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    logNames: [
      "Application",
      "System",
    ],
    readMode: "newest",
    eventFormat: "json",
    disableNativeModule: false,
    interval: 10,
    batchSize: 500,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxEventBytes: 51200,
    description: "conclude sesame prioritize polarisation bourgeoisie decongestant behind",
    disableJsonRendering: false,
    disableXmlRendering: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "win-event-logs-source",
    type: "win_event_logs",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    logNames: [
      "Application",
      "System",
    ],
    readMode: "newest",
    eventFormat: "json",
    disableNativeModule: false,
    interval: 10,
    batchSize: 500,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxEventBytes: 51200,
    description: "conclude sesame prioritize polarisation bourgeoisie decongestant behind",
    disableJsonRendering: false,
    disableXmlRendering: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWindowsMetrics

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesWindowsMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "windows-metrics-source",
    type: "windows_metrics",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 10,
    host: {
      mode: "basic",
      custom: {
        system: {
          mode: "basic",
          detail: false,
        },
        cpu: {
          mode: "basic",
          perCpu: false,
          detail: false,
          time: false,
        },
        memory: {
          mode: "basic",
          detail: false,
        },
        network: {
          mode: "basic",
          detail: false,
          protocols: false,
          devices: [
            "<value 1>",
            "<value 2>",
          ],
          perInterface: false,
        },
        disk: {
          mode: "basic",
          perVolume: false,
          detail: false,
          volumes: [
            "<value 1>",
          ],
        },
      },
    },
    process: {
      sets: [
        {
          name: "<value>",
          filter: "<value>",
          includeChildren: false,
        },
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/windows_metrics",
    },
    disableNativeModule: false,
    description: "handle unsung mediocre delightfully save grown whose circa",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "windows-metrics-source",
    type: "windows_metrics",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    interval: 10,
    host: {
      mode: "basic",
      custom: {
        system: {
          mode: "basic",
          detail: false,
        },
        cpu: {
          mode: "basic",
          perCpu: false,
          detail: false,
          time: false,
        },
        memory: {
          mode: "basic",
          detail: false,
        },
        network: {
          mode: "basic",
          detail: false,
          protocols: false,
          devices: [
            "<value 1>",
            "<value 2>",
          ],
          perInterface: false,
        },
        disk: {
          mode: "basic",
          perVolume: false,
          detail: false,
          volumes: [
            "<value 1>",
          ],
        },
      },
    },
    process: {
      sets: [
        {
          name: "<value>",
          filter: "<value>",
          includeChildren: false,
        },
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/windows_metrics",
    },
    disableNativeModule: false,
    description: "handle unsung mediocre delightfully save grown whose circa",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWiz

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesWiz" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "wiz-source",
    type: "wiz",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    endpoint: "https://api.wiz.io",
    authUrl: "https://auth.wiz.io/oauth/token",
    authAudienceOverride: "<value>",
    clientId: "client-id",
    contentConfig: [],
    requestTimeout: 300,
    keepAliveTime: 30,
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        5227.09,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "quarrelsomely furthermore deserted excitable liberalize",
    clientSecret: "<value>",
    textSecret: "<value>",
    __template_endpoint: "<value>",
    __template_authUrl: "https://misguided-pine.org",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "wiz-source",
    type: "wiz",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    endpoint: "https://api.wiz.io",
    authUrl: "https://auth.wiz.io/oauth/token",
    authAudienceOverride: "<value>",
    clientId: "client-id",
    contentConfig: [],
    requestTimeout: 300,
    keepAliveTime: 30,
    maxMissedKeepAlives: 3,
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1000,
      limit: 5,
      multiplier: 2,
      codes: [
        5227.09,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "quarrelsomely furthermore deserted excitable liberalize",
    clientSecret: "<value>",
    textSecret: "<value>",
    __template_endpoint: "<value>",
    __template_authUrl: "https://misguided-pine.org",
    __template_clientId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWizWebhook

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesWizWebhook" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "wiz-webhook-source",
    type: "wiz_webhook",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedPaths: [
      "<value 1>",
      "<value 2>",
    ],
    allowedMethods: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "swath misfire object saw presume yum",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "above anti underneath geez wing fuel untidy verbally stir-fry lasting",
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
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "wiz-webhook-source",
    type: "wiz_webhook",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 10000,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedPaths: [
      "<value 1>",
      "<value 2>",
    ],
    allowedMethods: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "swath misfire object saw presume yum",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "above anti underneath geez wing fuel untidy verbally stir-fry lasting",
    __template_host: "<value>",
    __template_port: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesZscalerHec

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" example="InputCreateExamplesZscalerHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    id: "zscaler-hec-source",
    type: "zscaler_hec",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: true,
        description: "boohoo restaurant ouch braid short",
        allowedIndexesAtToken: [
          "<value 1>",
        ],
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    hecAPI: "/services/collector",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedIndexes: [
      "<value 1>",
    ],
    hecAcks: false,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
    ],
    emitTokenMetrics: false,
    description: "vastly against stable down pfft likely",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_hecAPI: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    id: "zscaler-hec-source",
    type: "zscaler_hec",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: true,
        description: "boohoo restaurant ouch braid short",
        allowedIndexesAtToken: [
          "<value 1>",
        ],
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    hecAPI: "/services/collector",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedIndexes: [
      "<value 1>",
    ],
    hecAcks: false,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
    ],
    emitTokenMetrics: false,
    description: "vastly against stable down pfft likely",
    __template_host: "<value>",
    __template_port: "<value>",
    __template_hecAPI: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateInputRequest](../../models/operations/createinputrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get the specified Source.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getInputById" method="get" path="/system/inputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.get({
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
import { sourcesGet } from "cribl-control-plane/funcs/sourcesGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesGet(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInputByIdRequest](../../models/operations/getinputbyidrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the specified Source.</br></br>Provide a complete representation of the Source that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Source.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Source might not function as expected.

### Example Usage: InputCreateExamplesAppscope

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesAppscope" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "appscope-source",
      type: "appscope",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      enableUnixPath: false,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://youthful-hammock.net/",
      },
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/appscope",
      },
      authType: "manual",
      description: "beyond hidden supposing ghost fictionalize disarm geez",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
      unixSocketPerms: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "appscope-source",
      type: "appscope",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      enableUnixPath: false,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://youthful-hammock.net/",
      },
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/appscope",
      },
      authType: "manual",
      description: "beyond hidden supposing ghost fictionalize disarm geez",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
      unixSocketPerms: "<value>",
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
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesAzureBlob

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesAzureBlob" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "azure-blob-source",
      type: "azure_blob",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "azure-blob-queue",
      fileFilter: "/.*/",
      visibilityTimeout: 600,
      numReceivers: 1,
      maxMessages: 1,
      servicePeriodSecs: 5,
      skipOnError: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      parquetChunkSizeMB: 5,
      parquetChunkDownloadTimeout: 600,
      authType: "manual",
      description: "understated extroverted intensely hello gentle ouch hmph rule density design",
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
      __template_queueName: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "azure-blob-source",
      type: "azure_blob",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "azure-blob-queue",
      fileFilter: "/.*/",
      visibilityTimeout: 600,
      numReceivers: 1,
      maxMessages: 1,
      servicePeriodSecs: 5,
      skipOnError: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      parquetChunkSizeMB: 5,
      parquetChunkDownloadTimeout: 600,
      authType: "manual",
      description: "understated extroverted intensely hello gentle ouch hmph rule density design",
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
      __template_queueName: "<value>",
      __template_connectionString: "<value>",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCloudflareHec

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesCloudflareHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "cloudflare-hec-source",
      type: "cloudflare_hec",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8088,
      authTokens: [
        {
          authType: "secret",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: true,
          description: "ha irresponsible patiently",
          allowedIndexesAtToken: [
            "<value 1>",
            "<value 2>",
          ],
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      hecAPI: "/services/collector",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedIndexes: [
        "<value 1>",
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      emitTokenMetrics: false,
      description: "abaft deliberately function",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "cloudflare-hec-source",
      type: "cloudflare_hec",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8088,
      authTokens: [
        {
          authType: "secret",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: true,
          description: "ha irresponsible patiently",
          allowedIndexesAtToken: [
            "<value 1>",
            "<value 2>",
          ],
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      hecAPI: "/services/collector",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedIndexes: [
        "<value 1>",
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      emitTokenMetrics: false,
      description: "abaft deliberately function",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCollection

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesCollection" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "collection-source",
      type: "collection",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      throttleRatePerSec: "0",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      output: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "collection-source",
      type: "collection",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      throttleRatePerSec: "0",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      output: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesConfluentCloud

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesConfluentCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "confluent-cloud-source",
      type: "confluent_cloud",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
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
      topics: [
        "logs",
      ],
      groupId: "Cribl",
      fromBeginning: true,
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
        username: "Maximus30",
        password: "6TQ9JUSPWUKvYWA",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://sudden-polarisation.info/",
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
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      autoCommitInterval: 443.17,
      autoCommitThreshold: 3647.04,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "or since gadzooks",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "confluent-cloud-source",
      type: "confluent_cloud",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
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
      topics: [
        "logs",
      ],
      groupId: "Cribl",
      fromBeginning: true,
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
        username: "Maximus30",
        password: "6TQ9JUSPWUKvYWA",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://sudden-polarisation.info/",
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
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      autoCommitInterval: 443.17,
      autoCommitThreshold: 3647.04,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "or since gadzooks",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblHttp

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesCriblHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "cribl-http-source",
      type: "cribl_http",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "but capitalise clear unfortunate ignorance gah sans despite hydrocarbon tankful",
        },
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "ride even among",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "cribl-http-source",
      type: "cribl_http",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "but capitalise clear unfortunate ignorance gah sans despite hydrocarbon tankful",
        },
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "ride even among",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblLakeHttp

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesCriblLakeHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "cribl-lake-http-source",
      type: "cribl_lake_http",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
        "<value 2>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      criblAPI: "/cribl",
      elasticAPI: "/elastic",
      splunkHecAPI: "/services/collector",
      splunkHecAcks: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "extract vice instead fatal every rebuke ew forenenst millet crest",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          splunkHecMetadata: {
            enabled: false,
            defaultDataset: "<value>",
            allowedIndexesAtToken: [
              "<value 1>",
            ],
          },
          elasticsearchMetadata: {
            enabled: true,
            defaultDataset: "<value>",
          },
        },
      ],
      description: "authentic yuck better as where splash but behind",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "cribl-lake-http-source",
      type: "cribl_lake_http",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
        "<value 2>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      criblAPI: "/cribl",
      elasticAPI: "/elastic",
      splunkHecAPI: "/services/collector",
      splunkHecAcks: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "extract vice instead fatal every rebuke ew forenenst millet crest",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          splunkHecMetadata: {
            enabled: false,
            defaultDataset: "<value>",
            allowedIndexesAtToken: [
              "<value 1>",
            ],
          },
          elasticsearchMetadata: {
            enabled: true,
            defaultDataset: "<value>",
          },
        },
      ],
      description: "authentic yuck better as where splash but behind",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblTcp

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesCriblTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "cribl-tcp-source",
      type: "cribl_tcp",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: false,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "delightfully scarily chromakey oh hm sour",
        },
      ],
      description: "refer redevelop mid reproach waterspout lest utterly",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "cribl-tcp-source",
      type: "cribl_tcp",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: false,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "delightfully scarily chromakey oh hm sour",
        },
      ],
      description: "refer redevelop mid reproach waterspout lest utterly",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCrowdstrike

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesCrowdstrike" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "crowdstrike-source",
      type: "crowdstrike",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "crowdstrike-queue",
      fileFilter: "/.*/",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      maxMessages: 1,
      visibilityTimeout: 21600,
      numReceivers: 1,
      socketTimeout: 300,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      enableSQSAssumeRole: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      checkpointing: {
        enabled: false,
        retries: 5,
      },
      pollTimeout: 10,
      encoding: "<value>",
      description: "corporation joyously retention only transcend save however likely shanghai",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "crowdstrike-source",
      type: "crowdstrike",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "crowdstrike-queue",
      fileFilter: "/.*/",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      maxMessages: 1,
      visibilityTimeout: 21600,
      numReceivers: 1,
      socketTimeout: 300,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      enableSQSAssumeRole: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      checkpointing: {
        enabled: false,
        retries: 5,
      },
      pollTimeout: 10,
      encoding: "<value>",
      description: "corporation joyously retention only transcend save however likely shanghai",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesDatadogAgent

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesDatadogAgent" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "datadog-agent-source",
      type: "datadog_agent",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8126,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      extractMetrics: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      proxyMode: {
        enabled: false,
        rejectUnauthorized: true,
      },
      description: "made-up solace bouncy which comfortable gadzooks",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "datadog-agent-source",
      type: "datadog_agent",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8126,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      extractMetrics: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      proxyMode: {
        enabled: false,
        rejectUnauthorized: true,
      },
      description: "made-up solace bouncy which comfortable gadzooks",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesDatagen

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesDatagen" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "datagen-source",
      type: "datagen",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      samples: [
        {
          sample: "sample.json",
          eventsPerSec: 10,
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "aha reflecting now",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "datagen-source",
      type: "datagen",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      samples: [
        {
          sample: "sample.json",
          eventsPerSec: 10,
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "aha reflecting now",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesEdgePrometheus

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesEdgePrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "edge-prometheus-source",
      type: "edge_prometheus",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
      ],
      discoveryType: "static",
      interval: 60,
      timeout: 5000,
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "manual",
      description: "hmph jagged minus fondly affect cinch prioritize",
      targets: [
        {
          protocol: "http",
          host: "localhost",
          port: 9090,
          path: "/metrics",
        },
      ],
      recordType: "SRV",
      scrapePort: 9090,
      nameList: [
        "<value 1>",
        "<value 2>",
      ],
      scrapeProtocol: "http",
      scrapePath: "/metrics",
      awsAuthenticationMethod: "auto",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      usePublicIp: true,
      searchFilter: [
        {
          Name: "<value>",
          Values: [],
        },
      ],
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      scrapeProtocolExpr: "metadata.annotations['prometheus.io/scheme'] || 'http'",
      scrapePortExpr: "metadata.annotations['prometheus.io/port'] || 9090",
      scrapePathExpr: "metadata.annotations['prometheus.io/path'] || '/metrics'",
      podFilter: [
        {
          filter: "<value>",
          description: "severe furthermore concrete hunger muffled",
        },
      ],
      username: "Orrin_Yundt20",
      password: "alXPvLywpTQbHyi",
      credentialsSecret: "<value>",
      __template_awsApiKey: "<value>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "edge-prometheus-source",
      type: "edge_prometheus",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
      ],
      discoveryType: "static",
      interval: 60,
      timeout: 5000,
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "manual",
      description: "hmph jagged minus fondly affect cinch prioritize",
      targets: [
        {
          protocol: "http",
          host: "localhost",
          port: 9090,
          path: "/metrics",
        },
      ],
      recordType: "SRV",
      scrapePort: 9090,
      nameList: [
        "<value 1>",
        "<value 2>",
      ],
      scrapeProtocol: "http",
      scrapePath: "/metrics",
      awsAuthenticationMethod: "auto",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      usePublicIp: true,
      searchFilter: [
        {
          Name: "<value>",
          Values: [],
        },
      ],
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      scrapeProtocolExpr: "metadata.annotations['prometheus.io/scheme'] || 'http'",
      scrapePortExpr: "metadata.annotations['prometheus.io/port'] || 9090",
      scrapePathExpr: "metadata.annotations['prometheus.io/path'] || '/metrics'",
      podFilter: [
        {
          filter: "<value>",
          description: "severe furthermore concrete hunger muffled",
        },
      ],
      username: "Orrin_Yundt20",
      password: "alXPvLywpTQbHyi",
      credentialsSecret: "<value>",
      __template_awsApiKey: "<value>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesElastic

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesElastic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "elastic-source",
      type: "elastic",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "localhost",
      port: 9200,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      elasticAPI: "/",
      authType: "none",
      apiVersion: "8.3.2",
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      proxyMode: {
        enabled: false,
        authType: "none",
        username: "Abigayle.Ledner38",
        password: "VDPV4GrdklqLt4A",
        credentialsSecret: "<value>",
        url: "https://yellowish-pearl.org",
        rejectUnauthorized: false,
        removeHeaders: [
          "<value 1>",
          "<value 2>",
        ],
        timeoutSec: 60,
        __template_url: "https://focused-invite.org",
      },
      description: "ouch snarling duh",
      username: "Xander_Graham",
      password: "1duIyiiwRASxBVc",
      credentialsSecret: "<value>",
      authTokens: [
        "<value 1>",
      ],
      customAPIVersion: "{\n    \"name\": \"AzU84iL\",\n    \"cluster_name\": \"cribl\",\n    \"cluster_uuid\": \"Js6_Z2VKS3KbfRSxPmPbaw\",\n    \"version\": {\n        \"number\": \"8.3.2\",\n        \"build_type\": \"tar\",\n        \"build_hash\": \"bca0c8d\",\n        \"build_date\": \"2019-10-16T06:19:49.319352Z\",\n        \"build_snapshot\": false,\n        \"lucene_version\": \"9.7.2\",\n        \"minimum_wire_compatibility_version\": \"7.17.0\",\n        \"minimum_index_compatibility_version\": \"7.0.0\"\n    },\n    \"tagline\": \"You Know, for Search\"\n}",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "elastic-source",
      type: "elastic",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "localhost",
      port: 9200,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      elasticAPI: "/",
      authType: "none",
      apiVersion: "8.3.2",
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      proxyMode: {
        enabled: false,
        authType: "none",
        username: "Abigayle.Ledner38",
        password: "VDPV4GrdklqLt4A",
        credentialsSecret: "<value>",
        url: "https://yellowish-pearl.org",
        rejectUnauthorized: false,
        removeHeaders: [
          "<value 1>",
          "<value 2>",
        ],
        timeoutSec: 60,
        __template_url: "https://focused-invite.org",
      },
      description: "ouch snarling duh",
      username: "Xander_Graham",
      password: "1duIyiiwRASxBVc",
      credentialsSecret: "<value>",
      authTokens: [
        "<value 1>",
      ],
      customAPIVersion: "{\n    \"name\": \"AzU84iL\",\n    \"cluster_name\": \"cribl\",\n    \"cluster_uuid\": \"Js6_Z2VKS3KbfRSxPmPbaw\",\n    \"version\": {\n        \"number\": \"8.3.2\",\n        \"build_type\": \"tar\",\n        \"build_hash\": \"bca0c8d\",\n        \"build_date\": \"2019-10-16T06:19:49.319352Z\",\n        \"build_snapshot\": false,\n        \"lucene_version\": \"9.7.2\",\n        \"minimum_wire_compatibility_version\": \"7.17.0\",\n        \"minimum_index_compatibility_version\": \"7.0.0\"\n    },\n    \"tagline\": \"You Know, for Search\"\n}",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesEventhub

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesEventhub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "eventhub-source",
      type: "eventhub",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topics: [
        "logs",
      ],
      groupId: "Cribl",
      fromBeginning: true,
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
        password: "xop7OD_LxhffeRA",
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
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      autoCommitInterval: 4392.98,
      autoCommitThreshold: 3134.99,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      minimizeDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "beard hoot rotten than unfortunately slushy",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "eventhub-source",
      type: "eventhub",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topics: [
        "logs",
      ],
      groupId: "Cribl",
      fromBeginning: true,
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
        password: "xop7OD_LxhffeRA",
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
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      autoCommitInterval: 4392.98,
      autoCommitThreshold: 3134.99,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      minimizeDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "beard hoot rotten than unfortunately slushy",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesExec

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesExec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "exec-source",
      type: "exec",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      command: "echo \"Hello World\"",
      retries: 10,
      scheduleType: "interval",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "er relaunch rudely bug when",
      interval: 60,
      cronSchedule: "* * * * *",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "exec-source",
      type: "exec",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      command: "echo \"Hello World\"",
      retries: 10,
      scheduleType: "interval",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "er relaunch rudely bug when",
      interval: 60,
      cronSchedule: "* * * * *",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesFile

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesFile" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "file-source",
      type: "file",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      mode: "manual",
      interval: 10,
      filenames: [
        "<value 1>",
        "<value 2>",
      ],
      filterArchivedFiles: false,
      tailOnly: true,
      idleTimeout: 300,
      minAgeDur: "<value>",
      maxAgeDur: "<value>",
      checkFileModTime: false,
      forceText: false,
      hashLen: 256,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      description: "shell yesterday testimonial afore though sedately profuse",
      path: "/Network",
      depth: 4361.93,
      suppressMissingPathErrors: false,
      deleteFiles: false,
      saltHash: false,
      includeUnidentifiableBinary: false,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "file-source",
      type: "file",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      mode: "manual",
      interval: 10,
      filenames: [
        "<value 1>",
        "<value 2>",
      ],
      filterArchivedFiles: false,
      tailOnly: true,
      idleTimeout: 300,
      minAgeDur: "<value>",
      maxAgeDur: "<value>",
      checkFileModTime: false,
      forceText: false,
      hashLen: 256,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      description: "shell yesterday testimonial afore though sedately profuse",
      path: "/Network",
      depth: 4361.93,
      suppressMissingPathErrors: false,
      deleteFiles: false,
      saltHash: false,
      includeUnidentifiableBinary: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesFirehose

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesFirehose" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "firehose-source",
      type: "firehose",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "fluffy now to",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "firehose-source",
      type: "firehose",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "fluffy now to",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesGooglePubsub

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesGooglePubsub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "google-pubsub-source",
      type: "google_pubsub",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      topicName: "my-topic",
      subscriptionName: "my-subscription",
      monitorSubscription: false,
      createTopic: false,
      createSubscription: true,
      region: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxBacklog: 1000,
      concurrency: 5,
      requestTimeout: 60000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "across splosh anticodon beautifully",
      orderedDelivery: false,
      __template_topicName: "<value>",
      __template_subscriptionName: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "google-pubsub-source",
      type: "google_pubsub",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      topicName: "my-topic",
      subscriptionName: "my-subscription",
      monitorSubscription: false,
      createTopic: false,
      createSubscription: true,
      region: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxBacklog: 1000,
      concurrency: 5,
      requestTimeout: 60000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "across splosh anticodon beautifully",
      orderedDelivery: false,
      __template_topicName: "<value>",
      __template_subscriptionName: "<value>",
      __template_region: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesGrafana

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesGrafana" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "grafana-source",
      type: "grafana",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      prometheusAPI: "/api/prom/push",
      lokiAPI: "/loki/api/v1/push",
      prometheusAuth: {
        authType: "none",
        username: "Gage.Rippin77",
        password: "B6pdaXMgVOmyEDo",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
      },
      lokiAuth: {
        authType: "none",
        username: "Zion18",
        password: "NTgCCy2le8of9ZE",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "ironclad meh to merrily besmirch whoa slimy",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "grafana-source",
      type: "grafana",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      prometheusAPI: "/api/prom/push",
      lokiAPI: "/loki/api/v1/push",
      prometheusAuth: {
        authType: "none",
        username: "Gage.Rippin77",
        password: "B6pdaXMgVOmyEDo",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
      },
      lokiAuth: {
        authType: "none",
        username: "Zion18",
        password: "NTgCCy2le8of9ZE",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "ironclad meh to merrily besmirch whoa slimy",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesHttp

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "http-source",
      type: "http",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      criblAPI: "/cribl",
      elasticAPI: "/elastic",
      splunkHecAPI: "/services/collector",
      splunkHecAcks: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "gee qua gee afterwards aboard begonia um where absent geez",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "via supportive so dial into valuable instructive of between",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "http-source",
      type: "http",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      criblAPI: "/cribl",
      elasticAPI: "/elastic",
      splunkHecAPI: "/services/collector",
      splunkHecAcks: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "gee qua gee afterwards aboard begonia um where absent geez",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "via supportive so dial into valuable instructive of between",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesHttpRaw

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesHttpRaw" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "http-raw-source",
      type: "http_raw",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedPaths: [
        "<value 1>",
        "<value 2>",
      ],
      allowedMethods: [
        "<value 1>",
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "afore gah odd alive pant overload mob rise throughout",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "ultimately needily whether hope quinoa gadzooks above where hierarchy",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "http-raw-source",
      type: "http_raw",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedPaths: [
        "<value 1>",
        "<value 2>",
      ],
      allowedMethods: [
        "<value 1>",
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "afore gah odd alive pant overload mob rise throughout",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "ultimately needily whether hope quinoa gadzooks above where hierarchy",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesJournalFiles

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesJournalFiles" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "journal-files-source",
      type: "journal_files",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      path: "/var/log/journal",
      interval: 10,
      journals: [
        "system",
      ],
      rules: [
        {
          filter: "<value>",
          description: "fedora until anguished jump famously beside consequently tender decision",
        },
      ],
      currentBoot: false,
      maxAgeDur: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "suffocate vamoose fortunately than kaleidoscopic",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "journal-files-source",
      type: "journal_files",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      path: "/var/log/journal",
      interval: 10,
      journals: [
        "system",
      ],
      rules: [
        {
          filter: "<value>",
          description: "fedora until anguished jump famously beside consequently tender decision",
        },
      ],
      currentBoot: false,
      maxAgeDur: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "suffocate vamoose fortunately than kaleidoscopic",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKafka

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesKafka" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "kafka-source",
      type: "kafka",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      brokers: [
        "localhost:9092",
      ],
      topics: [
        "logs",
      ],
      groupId: "Cribl",
      fromBeginning: true,
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
        username: "Maximus30",
        password: "6TQ9JUSPWUKvYWA",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://sudden-polarisation.info/",
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
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      autoCommitInterval: 5373.51,
      autoCommitThreshold: 3922.91,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "to before brr including",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "kafka-source",
      type: "kafka",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      brokers: [
        "localhost:9092",
      ],
      topics: [
        "logs",
      ],
      groupId: "Cribl",
      fromBeginning: true,
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
        username: "Maximus30",
        password: "6TQ9JUSPWUKvYWA",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://sudden-polarisation.info/",
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
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      autoCommitInterval: 5373.51,
      autoCommitThreshold: 3922.91,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "to before brr including",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKinesis

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesKinesis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "kinesis-source",
      type: "kinesis",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      streamName: "my-stream",
      serviceInterval: 1,
      shardExpr: "true",
      shardIteratorType: "TRIM_HORIZON",
      payloadFormat: "cribl",
      getRecordsLimit: 5000,
      getRecordsLimitTotal: 20000,
      loadBalancingAlgorithm: "ConsistentHashing",
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
      verifyKPLCheckSums: false,
      avoidDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "factorize than bah trained shinny regarding fooey",
      awsApiKey: "<value>",
      awsSecret: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "kinesis-source",
      type: "kinesis",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      streamName: "my-stream",
      serviceInterval: 1,
      shardExpr: "true",
      shardIteratorType: "TRIM_HORIZON",
      payloadFormat: "cribl",
      getRecordsLimit: 5000,
      getRecordsLimitTotal: 20000,
      loadBalancingAlgorithm: "ConsistentHashing",
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
      verifyKPLCheckSums: false,
      avoidDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "factorize than bah trained shinny regarding fooey",
      awsApiKey: "<value>",
      awsSecret: "<value>",
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
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeEvents

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesKubeEvents" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "kube-events-source",
      type: "kube_events",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      rules: [
        {
          filter: "<value>",
          description: "worse back second psst overspend prejudge homely gah rim",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "concerning know overconfidently carelessly throughout even before",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "kube-events-source",
      type: "kube_events",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      rules: [
        {
          filter: "<value>",
          description: "worse back second psst overspend prejudge homely gah rim",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "concerning know overconfidently carelessly throughout even before",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeLogs

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesKubeLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "kube-logs-source",
      type: "kube_logs",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 15,
      rules: [
        {
          filter: "<value>",
          description: "bravely compromise lest SUV deliberately",
        },
      ],
      timestamps: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      enableLoadBalancing: false,
      description: "after taxicab agreeable pulverize whenever atop",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "kube-logs-source",
      type: "kube_logs",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 15,
      rules: [
        {
          filter: "<value>",
          description: "bravely compromise lest SUV deliberately",
        },
      ],
      timestamps: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      enableLoadBalancing: false,
      description: "after taxicab agreeable pulverize whenever atop",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesKubeMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "kube-metrics-source",
      type: "kube_metrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 15,
      rules: [
        {
          filter: "<value>",
          description: "ack fathom incidentally doing kinase",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/kube_metrics",
      },
      description: "excepting inquisitively violin brown during frizzy aw zowie powerless",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "kube-metrics-source",
      type: "kube_metrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 15,
      rules: [
        {
          filter: "<value>",
          description: "ack fathom incidentally doing kinase",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/kube_metrics",
      },
      description: "excepting inquisitively violin brown during frizzy aw zowie powerless",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesLoki

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesLoki" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "loki-source",
      type: "loki",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      lokiAPI: "/loki/api/v1/push",
      authType: "none",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "physical below elementary disclosure",
      username: "Diana.Kerluke41",
      password: "5VWIKl4RcP6DYtZ",
      token: "<value>",
      credentialsSecret: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "loki-source",
      type: "loki",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      lokiAPI: "/loki/api/v1/push",
      authType: "none",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "physical below elementary disclosure",
      username: "Diana.Kerluke41",
      password: "5VWIKl4RcP6DYtZ",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "metrics-source",
      type: "metrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 8125,
      tcpPort: 8643.34,
      maxBufferSize: 1000,
      ipWhitelistRegex: "/.*/",
      enableProxyHeader: false,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 7392.9,
      description: "reboot because clonk meh etch boo uh-huh fumigate pip coaxingly",
      __template_host: "<value>",
      __template_udpPort: "<value>",
      __template_tcpPort: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "metrics-source",
      type: "metrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 8125,
      tcpPort: 8643.34,
      maxBufferSize: 1000,
      ipWhitelistRegex: "/.*/",
      enableProxyHeader: false,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 7392.9,
      description: "reboot because clonk meh etch boo uh-huh fumigate pip coaxingly",
      __template_host: "<value>",
      __template_udpPort: "<value>",
      __template_tcpPort: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesModelDrivenTelemetry

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesModelDrivenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "mdt-source",
      type: "model_driven_telemetry",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 57000,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 1000,
      shutdownTimeoutMs: 5000,
      description: "lotion since sheathe fooey truly",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "mdt-source",
      type: "model_driven_telemetry",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 57000,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 1000,
      shutdownTimeoutMs: 5000,
      description: "lotion since sheathe fooey truly",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesMsk

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesMsk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "msk-source",
      type: "msk",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topics: [
        "logs",
      ],
      groupId: "Cribl",
      fromBeginning: true,
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
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
      autoCommitInterval: 621.07,
      autoCommitThreshold: 3924.6,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      description: "minor midst rebound left supposing ugh",
      awsApiKey: "<value>",
      awsSecret: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "msk-source",
      type: "msk",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topics: [
        "logs",
      ],
      groupId: "Cribl",
      fromBeginning: true,
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
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
      autoCommitInterval: 621.07,
      autoCommitThreshold: 3924.6,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      description: "minor midst rebound left supposing ugh",
      awsApiKey: "<value>",
      awsSecret: "<value>",
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
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesNetflow

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesNetflow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "netflow-source",
      type: "netflow",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 2055,
      enablePassThrough: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      udpSocketRxBufSize: 2462.99,
      templateCacheMinutes: 30,
      v5Enabled: true,
      v9Enabled: true,
      ipfixEnabled: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "boastfully hearten ick intend meanwhile jaywalk wallaby",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "netflow-source",
      type: "netflow",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 2055,
      enablePassThrough: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      udpSocketRxBufSize: 2462.99,
      templateCacheMinutes: 30,
      v5Enabled: true,
      v9Enabled: true,
      ipfixEnabled: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "boastfully hearten ick intend meanwhile jaywalk wallaby",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365Mgmt

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesOffice365Mgmt" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "office365-mgmt-source",
      type: "office365_mgmt",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 300,
      keepAliveTime: 30,
      jobTimeout: "0",
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      publisherIdentifier: "<value>",
      contentConfig: [
        {
          contentType: "<value>",
          description: "superb consequently below",
          interval: 9014.67,
          logLevel: "info",
          enabled: true,
        },
      ],
      ingestionLag: 0,
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          2729.52,
          6010.16,
          5724.14,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "solemnly forearm yahoo brr sweet until brown",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_tenantId: "<id>",
      __template_appId: "<id>",
      __template_publisherIdentifier: "<value>",
      __template_clientSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "office365-mgmt-source",
      type: "office365_mgmt",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 300,
      keepAliveTime: 30,
      jobTimeout: "0",
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      publisherIdentifier: "<value>",
      contentConfig: [
        {
          contentType: "<value>",
          description: "superb consequently below",
          interval: 9014.67,
          logLevel: "info",
          enabled: true,
        },
      ],
      ingestionLag: 0,
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          2729.52,
          6010.16,
          5724.14,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "solemnly forearm yahoo brr sweet until brown",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_tenantId: "<id>",
      __template_appId: "<id>",
      __template_publisherIdentifier: "<value>",
      __template_clientSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365MsgTrace

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesOffice365MsgTrace" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "office365-msg-trace-source",
      type: "office365_msg_trace",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
      startDate: "<value>",
      endDate: "<value>",
      timeout: 300,
      disableTimeFilter: true,
      authType: "oauth",
      rescheduleDroppedTasks: true,
      maxTaskReschedule: 1,
      logLevel: "info",
      jobTimeout: "0",
      keepAliveTime: 30,
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          2729.52,
          6010.16,
          5724.14,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      description: "though gadzooks pace",
      username: "Domingo.Funk20",
      password: "zEomPhRXS2K3PJN",
      credentialsSecret: "<value>",
      clientSecret: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      resource: "https://outlook.office365.com",
      planType: "enterprise_gcc",
      textSecret: "<value>",
      certOptions: {
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
      },
      __template_url: "https://valuable-stall.name/",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_resource: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "office365-msg-trace-source",
      type: "office365_msg_trace",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
      startDate: "<value>",
      endDate: "<value>",
      timeout: 300,
      disableTimeFilter: true,
      authType: "oauth",
      rescheduleDroppedTasks: true,
      maxTaskReschedule: 1,
      logLevel: "info",
      jobTimeout: "0",
      keepAliveTime: 30,
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          2729.52,
          6010.16,
          5724.14,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      description: "though gadzooks pace",
      username: "Domingo.Funk20",
      password: "zEomPhRXS2K3PJN",
      credentialsSecret: "<value>",
      clientSecret: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      resource: "https://outlook.office365.com",
      planType: "enterprise_gcc",
      textSecret: "<value>",
      certOptions: {
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
      },
      __template_url: "https://valuable-stall.name/",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_resource: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365Service

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesOffice365Service" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "office365-service-source",
      type: "office365_service",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 300,
      keepAliveTime: 30,
      jobTimeout: "0",
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      contentConfig: [
        {
          contentType: "<value>",
          description: "actually that after hyphenation psst",
          interval: 7646.22,
          logLevel: "info",
          enabled: true,
        },
      ],
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          2729.52,
          6010.16,
          5724.14,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "or oh apropos in analogy lobotomise lender gadzooks between fully",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_tenantId: "<id>",
      __template_appId: "<id>",
      __template_clientSecret: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "office365-service-source",
      type: "office365_service",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 300,
      keepAliveTime: 30,
      jobTimeout: "0",
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      contentConfig: [
        {
          contentType: "<value>",
          description: "actually that after hyphenation psst",
          interval: 7646.22,
          logLevel: "info",
          enabled: true,
        },
      ],
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          2729.52,
          6010.16,
          5724.14,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "or oh apropos in analogy lobotomise lender gadzooks between fully",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_tenantId: "<id>",
      __template_appId: "<id>",
      __template_clientSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOpenTelemetry

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesOpenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "otel-source",
      type: "open_telemetry",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 4317,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: "<value>",
      captureHeaders: "<value>",
      activityLogSampleRate: "<value>",
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 15,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      protocol: "grpc",
      extractSpans: false,
      extractMetrics: false,
      otlpVersion: "0.10.0",
      authType: "none",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 1000,
      description: "augment before serialize",
      username: "Monique.Lakin",
      password: "Ig92bVAWqo4_P8d",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      extractLogs: false,
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "otel-source",
      type: "open_telemetry",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 4317,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: "<value>",
      captureHeaders: "<value>",
      activityLogSampleRate: "<value>",
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 15,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      protocol: "grpc",
      extractSpans: false,
      extractMetrics: false,
      otlpVersion: "0.10.0",
      authType: "none",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 1000,
      description: "augment before serialize",
      username: "Monique.Lakin",
      password: "Ig92bVAWqo4_P8d",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      extractLogs: false,
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesPrometheus

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesPrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "prometheus-source",
      type: "prometheus",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
        "<value 2>",
      ],
      discoveryType: "static",
      interval: 60,
      logLevel: "info",
      rejectUnauthorized: true,
      timeout: 0,
      keepAliveTime: 30,
      jobTimeout: "0",
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "manual",
      description: "hover aw buzzing part unethically apud down scornful",
      targetList: [
        "http://localhost:9090/metrics",
      ],
      recordType: "SRV",
      scrapePort: 9090,
      nameList: [
        "<value 1>",
      ],
      scrapeProtocol: "http",
      scrapePath: "/metrics",
      awsAuthenticationMethod: "auto",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      usePublicIp: true,
      searchFilter: [
        {
          Name: "<value>",
          Values: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      ],
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      username: "Martina10",
      password: "R9HovxE2l_Ve3VU",
      credentialsSecret: "<value>",
      __template_logLevel: "<value>",
      __template_awsApiKey: "<value>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "prometheus-source",
      type: "prometheus",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
        "<value 2>",
      ],
      discoveryType: "static",
      interval: 60,
      logLevel: "info",
      rejectUnauthorized: true,
      timeout: 0,
      keepAliveTime: 30,
      jobTimeout: "0",
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "manual",
      description: "hover aw buzzing part unethically apud down scornful",
      targetList: [
        "http://localhost:9090/metrics",
      ],
      recordType: "SRV",
      scrapePort: 9090,
      nameList: [
        "<value 1>",
      ],
      scrapeProtocol: "http",
      scrapePath: "/metrics",
      awsAuthenticationMethod: "auto",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      usePublicIp: true,
      searchFilter: [
        {
          Name: "<value>",
          Values: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      ],
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      username: "Martina10",
      password: "R9HovxE2l_Ve3VU",
      credentialsSecret: "<value>",
      __template_logLevel: "<value>",
      __template_awsApiKey: "<value>",
      __template_awsSecretKey: "<value>",
      __template_region: "<value>",
      __template_assumeRoleArn: "<value>",
      __template_assumeRoleExternalId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesPrometheusRw

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesPrometheusRw" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "prometheus-rw-source",
      type: "prometheus_rw",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      prometheusAPI: "/write",
      authType: "none",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "almost calmly against wherever gratefully versus",
      username: "Johnathon.Wolf",
      password: "xMC_bK0VYnsfmYM",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_prometheusAPI: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "prometheus-rw-source",
      type: "prometheus_rw",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      prometheusAPI: "/write",
      authType: "none",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "almost calmly against wherever gratefully versus",
      username: "Johnathon.Wolf",
      password: "xMC_bK0VYnsfmYM",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_prometheusAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesRawUdp

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesRawUdp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "raw-udp-source",
      type: "raw_udp",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 514,
      maxBufferSize: 1000,
      ipWhitelistRegex: "/.*/",
      singleMsgUdpPackets: false,
      ingestRawBytes: false,
      udpSocketRxBufSize: 6988.17,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "yuck trust hopelessly toward instead gadzooks oil solidly now",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "raw-udp-source",
      type: "raw_udp",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 514,
      maxBufferSize: 1000,
      ipWhitelistRegex: "/.*/",
      singleMsgUdpPackets: false,
      ingestRawBytes: false,
      udpSocketRxBufSize: 6988.17,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "yuck trust hopelessly toward instead gadzooks oil solidly now",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesS3

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "s3-source",
      type: "s3",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "s3-notifications-queue",
      fileFilter: "/.*/",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      maxMessages: 1,
      visibilityTimeout: 600,
      numReceivers: 1,
      socketTimeout: 300,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      enableSQSAssumeRole: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 5,
      parquetChunkDownloadTimeout: 600,
      checkpointing: {
        enabled: false,
        retries: 5,
      },
      pollTimeout: 10,
      encoding: "<value>",
      tagAfterProcessing: false,
      description: "lively oddly brood optimistically extremely soliloquy inquisitively",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "s3-source",
      type: "s3",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "s3-notifications-queue",
      fileFilter: "/.*/",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      maxMessages: 1,
      visibilityTimeout: 600,
      numReceivers: 1,
      socketTimeout: 300,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      enableSQSAssumeRole: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 5,
      parquetChunkDownloadTimeout: 600,
      checkpointing: {
        enabled: false,
        retries: 5,
      },
      pollTimeout: 10,
      encoding: "<value>",
      tagAfterProcessing: false,
      description: "lively oddly brood optimistically extremely soliloquy inquisitively",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesS3Inventory

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesS3Inventory" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "s3-inventory-source",
      type: "s3_inventory",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "s3-inventory-queue",
      fileFilter: "/.*/",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      maxMessages: 1,
      visibilityTimeout: 600,
      numReceivers: 1,
      socketTimeout: 300,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      enableSQSAssumeRole: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 5,
      parquetChunkDownloadTimeout: 600,
      checkpointing: {
        enabled: false,
        retries: 5,
      },
      pollTimeout: 10,
      checksumSuffix: "checksum",
      maxManifestSizeKB: 4096,
      validateInventoryFiles: false,
      description: "extract until abandoned perky gladly unless yippee oh version successfully",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "s3-inventory-source",
      type: "s3_inventory",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "s3-inventory-queue",
      fileFilter: "/.*/",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      maxMessages: 1,
      visibilityTimeout: 600,
      numReceivers: 1,
      socketTimeout: 300,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      enableSQSAssumeRole: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 5,
      parquetChunkDownloadTimeout: 600,
      checkpointing: {
        enabled: false,
        retries: 5,
      },
      pollTimeout: 10,
      checksumSuffix: "checksum",
      maxManifestSizeKB: 4096,
      validateInventoryFiles: false,
      description: "extract until abandoned perky gladly unless yippee oh version successfully",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSecurityLake

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesSecurityLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "security-lake-source",
      type: "security_lake",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "security-lake-queue",
      fileFilter: "/.*/",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      maxMessages: 1,
      visibilityTimeout: 600,
      numReceivers: 1,
      socketTimeout: 300,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      enableSQSAssumeRole: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 5,
      parquetChunkDownloadTimeout: 600,
      checkpointing: {
        enabled: false,
        retries: 5,
      },
      pollTimeout: 10,
      encoding: "<value>",
      description: "source happily how always helplessly quixotic relative what often",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "false",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "security-lake-source",
      type: "security_lake",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "security-lake-queue",
      fileFilter: "/.*/",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      maxMessages: 1,
      visibilityTimeout: 600,
      numReceivers: 1,
      socketTimeout: 300,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      enableSQSAssumeRole: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 5,
      parquetChunkDownloadTimeout: 600,
      checkpointing: {
        enabled: false,
        retries: 5,
      },
      pollTimeout: 10,
      encoding: "<value>",
      description: "source happily how always helplessly quixotic relative what often",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "false",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSnmp

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesSnmp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "snmp-source",
      type: "snmp",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "192.168.1.1",
      port: 161,
      snmpV3Auth: {
        v3AuthEnabled: false,
        allowUnmatchedTrap: false,
        v3Users: [
          {
            name: "<value>",
            authProtocol: "none",
            authKey: "<value>",
            privProtocol: "none",
            privKey: "<value>",
          },
        ],
      },
      maxBufferSize: 1000,
      ipWhitelistRegex: "/.*/",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 6815.48,
      varbindsWithTypes: false,
      bestEffortParsing: false,
      description: "reproach meh wallaby uncommon lotion repurpose how",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "snmp-source",
      type: "snmp",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "192.168.1.1",
      port: 161,
      snmpV3Auth: {
        v3AuthEnabled: false,
        allowUnmatchedTrap: false,
        v3Users: [
          {
            name: "<value>",
            authProtocol: "none",
            authKey: "<value>",
            privProtocol: "none",
            privKey: "<value>",
          },
        ],
      },
      maxBufferSize: 1000,
      ipWhitelistRegex: "/.*/",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 6815.48,
      varbindsWithTypes: false,
      bestEffortParsing: false,
      description: "reproach meh wallaby uncommon lotion repurpose how",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunk

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesSplunk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "splunk-source",
      type: "splunk",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 9997,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      authTokens: [
        {
          token: "<value>",
          description: "boo oof insignificant pfft opposite hunt",
        },
      ],
      maxS2Sversion: "v3",
      description: "until scoop fold indeed engender",
      useFwdTimezone: true,
      dropControlFields: true,
      extractMetrics: false,
      compress: "disabled",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "splunk-source",
      type: "splunk",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 9997,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      authTokens: [
        {
          token: "<value>",
          description: "boo oof insignificant pfft opposite hunt",
        },
      ],
      maxS2Sversion: "v3",
      description: "until scoop fold indeed engender",
      useFwdTimezone: true,
      dropControlFields: true,
      extractMetrics: false,
      compress: "disabled",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunkHec

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesSplunkHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "splunk-hec-source",
      type: "splunk_hec",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8088,
      authTokens: [
        {
          authType: "manual",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: true,
          description: "before unless pinstripe knowledgeably courteous slide lighthearted",
          allowedIndexesAtToken: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      splunkHecAPI: "/services/collector",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedIndexes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      splunkHecAcks: false,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      useFwdTimezone: true,
      dropControlFields: true,
      extractMetrics: false,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      emitTokenMetrics: false,
      description: "meh yowza manner failing",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "splunk-hec-source",
      type: "splunk_hec",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8088,
      authTokens: [
        {
          authType: "manual",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: true,
          description: "before unless pinstripe knowledgeably courteous slide lighthearted",
          allowedIndexesAtToken: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      splunkHecAPI: "/services/collector",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedIndexes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      splunkHecAcks: false,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      useFwdTimezone: true,
      dropControlFields: true,
      extractMetrics: false,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      emitTokenMetrics: false,
      description: "meh yowza manner failing",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunkSearch

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesSplunkSearch" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "splunk-search-source",
      type: "splunk_search",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      searchHead: "https://localhost:8089",
      search: "index=main",
      earliest: "-16m@m",
      latest: "-1m@m",
      cronSchedule: "0 * * * *",
      endpoint: "/services/search/jobs/export",
      outputMode: "json",
      endpointParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      endpointHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      logLevel: "error",
      requestTimeout: 0,
      useRoundRobinDns: false,
      rejectUnauthorized: false,
      encoding: "<value>",
      keepAliveTime: 30,
      jobTimeout: "0",
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          4786.8,
          4387.89,
          7031.34,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 10000,
      authType: "basic",
      description: "sprinkles deflate fooey pricey below but quarrelsome",
      username: "Dulce28",
      password: "H0D8DX8APbKrKvi",
      token: "<value>",
      credentialsSecret: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "splunk-search-source",
      type: "splunk_search",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      searchHead: "https://localhost:8089",
      search: "index=main",
      earliest: "-16m@m",
      latest: "-1m@m",
      cronSchedule: "0 * * * *",
      endpoint: "/services/search/jobs/export",
      outputMode: "json",
      endpointParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      endpointHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      logLevel: "error",
      requestTimeout: 0,
      useRoundRobinDns: false,
      rejectUnauthorized: false,
      encoding: "<value>",
      keepAliveTime: 30,
      jobTimeout: "0",
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          4786.8,
          4387.89,
          7031.34,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 10000,
      authType: "basic",
      description: "sprinkles deflate fooey pricey below but quarrelsome",
      username: "Dulce28",
      password: "H0D8DX8APbKrKvi",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSqs

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesSqs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "sqs-source",
      type: "sqs",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      createQueue: false,
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
      maxMessages: 10,
      visibilityTimeout: 600,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pollTimeout: 10,
      description: "blah yum intent er loyalty anenst gadzooks",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      numReceivers: 3,
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "sqs-source",
      type: "sqs",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      createQueue: false,
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
      maxMessages: 10,
      visibilityTimeout: 600,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pollTimeout: 10,
      description: "blah yum intent er loyalty anenst gadzooks",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      numReceivers: 3,
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
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSyslog

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesSyslog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "syslog-source",
      type: "syslog",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 514,
      tcpPort: 1808.19,
      maxBufferSize: 1000,
      ipWhitelistRegex: "/.*/",
      timestampTimezone: "local",
      singleMsgUdpPackets: false,
      enableProxyHeader: false,
      keepFieldsList: [
        "<value 1>",
      ],
      octetCounting: false,
      inferFraming: true,
      strictlyInferOctetCounting: true,
      allowNonStandardAppName: false,
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 1683.94,
      enableLoadBalancing: false,
      description: "omelet helpless sunbathe hmph mothball difficult",
      enableEnhancedProxyHeaderParsing: true,
      __template_host: "<value>",
      __template_udpPort: "<value>",
      __template_tcpPort: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "syslog-source",
      type: "syslog",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 514,
      tcpPort: 1808.19,
      maxBufferSize: 1000,
      ipWhitelistRegex: "/.*/",
      timestampTimezone: "local",
      singleMsgUdpPackets: false,
      enableProxyHeader: false,
      keepFieldsList: [
        "<value 1>",
      ],
      octetCounting: false,
      inferFraming: true,
      strictlyInferOctetCounting: true,
      allowNonStandardAppName: false,
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 1683.94,
      enableLoadBalancing: false,
      description: "omelet helpless sunbathe hmph mothball difficult",
      enableEnhancedProxyHeaderParsing: true,
      __template_host: "<value>",
      __template_udpPort: "<value>",
      __template_tcpPort: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSystemMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesSystemMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "system-metrics-source",
      type: "system_metrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 10,
      host: {
        mode: "basic",
        custom: {
          system: {
            mode: "basic",
            processes: false,
          },
          cpu: {
            mode: "basic",
            perCpu: false,
            detail: false,
            time: false,
          },
          memory: {
            mode: "basic",
            detail: false,
          },
          network: {
            mode: "basic",
            detail: false,
            protocols: false,
            devices: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            perInterface: false,
          },
          disk: {
            mode: "basic",
            detail: false,
            inodes: false,
            devices: [
              "<value 1>",
              "<value 2>",
            ],
            mountpoints: [
              "<value 1>",
              "<value 2>",
            ],
            fstypes: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            perDevice: false,
          },
        },
      },
      process: {
        sets: [
          {
            name: "<value>",
            filter: "<value>",
            includeChildren: false,
          },
        ],
      },
      container: {
        mode: "basic",
        dockerSocket: [
          "<value 1>",
        ],
        dockerTimeout: 5,
        filters: [
          {
            expr: "<value>",
          },
        ],
        allContainers: false,
        perDevice: false,
        detail: false,
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/system_metrics",
      },
      description: "oddball boohoo perfectly libel culminate somber",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "system-metrics-source",
      type: "system_metrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 10,
      host: {
        mode: "basic",
        custom: {
          system: {
            mode: "basic",
            processes: false,
          },
          cpu: {
            mode: "basic",
            perCpu: false,
            detail: false,
            time: false,
          },
          memory: {
            mode: "basic",
            detail: false,
          },
          network: {
            mode: "basic",
            detail: false,
            protocols: false,
            devices: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            perInterface: false,
          },
          disk: {
            mode: "basic",
            detail: false,
            inodes: false,
            devices: [
              "<value 1>",
              "<value 2>",
            ],
            mountpoints: [
              "<value 1>",
              "<value 2>",
            ],
            fstypes: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            perDevice: false,
          },
        },
      },
      process: {
        sets: [
          {
            name: "<value>",
            filter: "<value>",
            includeChildren: false,
          },
        ],
      },
      container: {
        mode: "basic",
        dockerSocket: [
          "<value 1>",
        ],
        dockerTimeout: 5,
        filters: [
          {
            expr: "<value>",
          },
        ],
        allContainers: false,
        perDevice: false,
        detail: false,
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/system_metrics",
      },
      description: "oddball boohoo perfectly libel culminate somber",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSystemState

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesSystemState" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "system-state-source",
      type: "system_state",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 300,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      collectors: {
        hostsfile: {
          enable: true,
        },
        interfaces: {
          enable: true,
        },
        disk: {
          enable: true,
        },
        metadata: {
          enable: true,
        },
        routes: {
          enable: true,
        },
        dns: {
          enable: true,
        },
        user: {
          enable: true,
        },
        firewall: {
          enable: true,
        },
        services: {
          enable: true,
        },
        ports: {
          enable: true,
        },
        loginUsers: {
          enable: true,
        },
      },
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "none",
        destPath: "$CRIBL_HOME/state/system_state",
      },
      disableNativeModule: false,
      disableNativeLastLogModule: false,
      description: "catalog past whitewash seafood",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "system-state-source",
      type: "system_state",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 300,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      collectors: {
        hostsfile: {
          enable: true,
        },
        interfaces: {
          enable: true,
        },
        disk: {
          enable: true,
        },
        metadata: {
          enable: true,
        },
        routes: {
          enable: true,
        },
        dns: {
          enable: true,
        },
        user: {
          enable: true,
        },
        firewall: {
          enable: true,
        },
        services: {
          enable: true,
        },
        ports: {
          enable: true,
        },
        loginUsers: {
          enable: true,
        },
      },
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "none",
        destPath: "$CRIBL_HOME/state/system_state",
      },
      disableNativeModule: false,
      disableNativeLastLogModule: false,
      description: "catalog past whitewash seafood",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesTcp

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "tcp-source",
      type: "tcp",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      enableHeader: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      description: "decongestant schnitzel supplier selfish mushy milestone heavy giant",
      authToken: "",
      authType: "manual",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "tcp-source",
      type: "tcp",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      enableHeader: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      description: "decongestant schnitzel supplier selfish mushy milestone heavy giant",
      authToken: "",
      authType: "manual",
      textSecret: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesTcpjson

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesTcpjson" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "tcpjson-source",
      type: "tcpjson",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: false,
      authType: "manual",
      description: "abandoned sturdy phooey print charter quickly vol including towards preside",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "tcpjson-source",
      type: "tcpjson",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: false,
      authType: "manual",
      description: "abandoned sturdy phooey print charter quickly vol including towards preside",
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
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWef

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesWef" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "wef-source",
      type: "wef",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 5985,
      authMethod: "clientCert",
      tls: {
        disabled: false,
        rejectUnauthorized: true,
        requestCert: true,
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        commonNameRegex: "/.*/",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
        ocspCheck: false,
        keytab: "<value>",
        principal: "<value>",
        ocspCheckFailClose: false,
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      keepAliveTimeout: 90,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      socketTimeout: 0,
      caFingerprint: "<value>",
      keytab: "<value>",
      principal: "<value>",
      allowMachineIdMismatch: false,
      subscriptions: [
        {
          subscriptionName: "subscription-1",
          version: "<value>",
          contentFormat: "RenderedText",
          heartbeatInterval: 60,
          batchTimeout: 5,
          readExistingEvents: false,
          sendBookmarks: true,
          compress: true,
          targets: [],
          locale: "en-US",
          querySelector: "simple",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          queries: [
            {
              path: "/usr/sbin",
              queryExpression: "<value>",
            },
          ],
          xmlQuery: "<value>",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "eek boohoo meh heartache legend oof where reopen",
      logFingerprintMismatch: false,
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "wef-source",
      type: "wef",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 5985,
      authMethod: "clientCert",
      tls: {
        disabled: false,
        rejectUnauthorized: true,
        requestCert: true,
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        commonNameRegex: "/.*/",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.1",
        ocspCheck: false,
        keytab: "<value>",
        principal: "<value>",
        ocspCheckFailClose: false,
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      keepAliveTimeout: 90,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      socketTimeout: 0,
      caFingerprint: "<value>",
      keytab: "<value>",
      principal: "<value>",
      allowMachineIdMismatch: false,
      subscriptions: [
        {
          subscriptionName: "subscription-1",
          version: "<value>",
          contentFormat: "RenderedText",
          heartbeatInterval: 60,
          batchTimeout: 5,
          readExistingEvents: false,
          sendBookmarks: true,
          compress: true,
          targets: [],
          locale: "en-US",
          querySelector: "simple",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          queries: [
            {
              path: "/usr/sbin",
              queryExpression: "<value>",
            },
          ],
          xmlQuery: "<value>",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "eek boohoo meh heartache legend oof where reopen",
      logFingerprintMismatch: false,
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWinEventLogs

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesWinEventLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "win-event-logs-source",
      type: "win_event_logs",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      logNames: [
        "Application",
        "System",
      ],
      readMode: "newest",
      eventFormat: "json",
      disableNativeModule: false,
      interval: 10,
      batchSize: 500,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxEventBytes: 51200,
      description: "when upward hovercraft ill trick after part",
      disableJsonRendering: false,
      disableXmlRendering: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "win-event-logs-source",
      type: "win_event_logs",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      logNames: [
        "Application",
        "System",
      ],
      readMode: "newest",
      eventFormat: "json",
      disableNativeModule: false,
      interval: 10,
      batchSize: 500,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxEventBytes: 51200,
      description: "when upward hovercraft ill trick after part",
      disableJsonRendering: false,
      disableXmlRendering: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWindowsMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesWindowsMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "windows-metrics-source",
      type: "windows_metrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 10,
      host: {
        mode: "basic",
        custom: {
          system: {
            mode: "basic",
            detail: false,
          },
          cpu: {
            mode: "basic",
            perCpu: false,
            detail: false,
            time: false,
          },
          memory: {
            mode: "basic",
            detail: false,
          },
          network: {
            mode: "basic",
            detail: false,
            protocols: false,
            devices: [
              "<value 1>",
            ],
            perInterface: false,
          },
          disk: {
            mode: "basic",
            perVolume: false,
            detail: false,
            volumes: [
              "<value 1>",
              "<value 2>",
            ],
          },
        },
      },
      process: {
        sets: [
          {
            name: "<value>",
            filter: "<value>",
            includeChildren: false,
          },
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/windows_metrics",
      },
      disableNativeModule: false,
      description: "if quizzically ha zowie inferior pop now fundraising",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "windows-metrics-source",
      type: "windows_metrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      interval: 10,
      host: {
        mode: "basic",
        custom: {
          system: {
            mode: "basic",
            detail: false,
          },
          cpu: {
            mode: "basic",
            perCpu: false,
            detail: false,
            time: false,
          },
          memory: {
            mode: "basic",
            detail: false,
          },
          network: {
            mode: "basic",
            detail: false,
            protocols: false,
            devices: [
              "<value 1>",
            ],
            perInterface: false,
          },
          disk: {
            mode: "basic",
            perVolume: false,
            detail: false,
            volumes: [
              "<value 1>",
              "<value 2>",
            ],
          },
        },
      },
      process: {
        sets: [
          {
            name: "<value>",
            filter: "<value>",
            includeChildren: false,
          },
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/windows_metrics",
      },
      disableNativeModule: false,
      description: "if quizzically ha zowie inferior pop now fundraising",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWiz

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesWiz" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "wiz-source",
      type: "wiz",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      authAudienceOverride: "<value>",
      clientId: "client-id",
      contentConfig: [],
      requestTimeout: 300,
      keepAliveTime: 30,
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          4786.8,
          4387.89,
          7031.34,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "hence when inspection um jovially comparison filter",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_endpoint: "<value>",
      __template_authUrl: "https://spiteful-ghost.name",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "wiz-source",
      type: "wiz",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      authAudienceOverride: "<value>",
      clientId: "client-id",
      contentConfig: [],
      requestTimeout: 300,
      keepAliveTime: 30,
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          4786.8,
          4387.89,
          7031.34,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "hence when inspection um jovially comparison filter",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_endpoint: "<value>",
      __template_authUrl: "https://spiteful-ghost.name",
      __template_clientId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWizWebhook

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesWizWebhook" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "wiz-webhook-source",
      type: "wiz_webhook",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedPaths: [
        "<value 1>",
      ],
      allowedMethods: [
        "<value 1>",
        "<value 2>",
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "mostly incidentally nearly with meanwhile",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "yowza upliftingly firm regarding",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "wiz-webhook-source",
      type: "wiz_webhook",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedPaths: [
        "<value 1>",
      ],
      allowedMethods: [
        "<value 1>",
        "<value 2>",
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "mostly incidentally nearly with meanwhile",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "yowza upliftingly firm regarding",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesZscalerHec

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputCreateExamplesZscalerHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "zscaler-hec-source",
      type: "zscaler_hec",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8088,
      authTokens: [
        {
          authType: "manual",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: true,
          description: "wearily after minor daintily modulo amid",
          allowedIndexesAtToken: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      hecAPI: "/services/collector",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedIndexes: [
        "<value 1>",
        "<value 2>",
      ],
      hecAcks: false,
      accessControlAllowOrigin: [
        "<value 1>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      emitTokenMetrics: false,
      description: "unaccountably often via till",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_hecAPI: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "zscaler-hec-source",
      type: "zscaler_hec",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8088,
      authTokens: [
        {
          authType: "manual",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: true,
          description: "wearily after minor daintily modulo amid",
          allowedIndexesAtToken: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 100,
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 5,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      hecAPI: "/services/collector",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedIndexes: [
        "<value 1>",
        "<value 2>",
      ],
      hecAcks: false,
      accessControlAllowOrigin: [
        "<value 1>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      emitTokenMetrics: false,
      description: "unaccountably often via till",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_hecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputExamplesCribl

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputExamplesCribl" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "cribl-source",
      type: "cribl",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      filter: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "colonialism gradient acknowledge hmph yuck astride boo but boo now",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "cribl-source",
      type: "cribl",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      filter: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "colonialism gradient acknowledge hmph yuck astride boo but boo now",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputExamplesCriblMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" example="InputExamplesCriblMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      id: "cribl-metrics-source",
      type: "criblmetrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      prefix: "cribl.logstream.",
      fullFidelity: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "correctly biodegrade for zowie boo irk instead mockingly considering",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      id: "cribl-metrics-source",
      type: "criblmetrics",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      prefix: "cribl.logstream.",
      fullFidelity: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "correctly biodegrade for zowie boo irk instead mockingly considering",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateInputByIdRequest](../../models/operations/updateinputbyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Delete the specified Source.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteInputById" method="delete" path="/system/inputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.delete({
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
import { sourcesDelete } from "cribl-control-plane/funcs/sourcesDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesDelete(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteInputByIdRequest](../../models/operations/deleteinputbyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
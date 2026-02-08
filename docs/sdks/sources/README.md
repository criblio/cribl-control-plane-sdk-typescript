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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 4887.41,
    socketIdleTimeout: 2674.23,
    socketEndingMaxWait: 7415.32,
    socketMaxLifespan: 7847.75,
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
    staleChannelFlushMs: 3076.3,
    enableUnixPath: false,
    filter: {
      allow: [
        {
          procname: "<value>",
          arg: "<value>",
          config: "<value>",
        },
      ],
      transportURL: "https://pointed-napkin.info/",
    },
    persistence: {
      enable: false,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
    },
    authType: "manual",
    description: "repeatedly urban incidentally clean up",
    host: "0.0.0.0",
    port: 9109,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    unixSocketPath: "<value>",
    unixSocketPerms: "<value>",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 4887.41,
    socketIdleTimeout: 2674.23,
    socketEndingMaxWait: 7415.32,
    socketMaxLifespan: 7847.75,
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
    staleChannelFlushMs: 3076.3,
    enableUnixPath: false,
    filter: {
      allow: [
        {
          procname: "<value>",
          arg: "<value>",
          config: "<value>",
        },
      ],
      transportURL: "https://pointed-napkin.info/",
    },
    persistence: {
      enable: false,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
    },
    authType: "manual",
    description: "repeatedly urban incidentally clean up",
    host: "0.0.0.0",
    port: 9109,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    unixSocketPath: "<value>",
    unixSocketPerms: "<value>",
    authToken: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "azure-blob-queue",
    fileFilter: "<value>",
    visibilityTimeout: 4584.52,
    numReceivers: 2819.28,
    maxMessages: 366.74,
    servicePeriodSecs: 1992.81,
    skipOnError: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 376.64,
    parquetChunkSizeMB: 2525.18,
    parquetChunkDownloadTimeout: 8393.8,
    authType: "secret",
    description: "broadcast as ah yahoo inasmuch yahoo questionable",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "azure-blob-queue",
    fileFilter: "<value>",
    visibilityTimeout: 4584.52,
    numReceivers: 2819.28,
    maxMessages: 366.74,
    servicePeriodSecs: 1992.81,
    skipOnError: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 376.64,
    parquetChunkSizeMB: 2525.18,
    parquetChunkDownloadTimeout: 8393.8,
    authType: "secret",
    description: "broadcast as ah yahoo inasmuch yahoo questionable",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: false,
        description: "toe unnecessarily towards warmly good-natured",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 4893.51,
    maxRequestsPerSocket: 589895,
    enableProxyHeader: false,
    captureHeaders: true,
    activityLogSampleRate: 9309.77,
    requestTimeout: 5353.71,
    socketTimeout: 2458.07,
    keepAliveTimeout: 4720.42,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
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
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 6299.85,
    accessControlAllowOrigin: [
      "<value 1>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    emitTokenMetrics: true,
    description: "though er ah over french vice unnaturally rout hmph underneath",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: false,
        description: "toe unnecessarily towards warmly good-natured",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 4893.51,
    maxRequestsPerSocket: 589895,
    enableProxyHeader: false,
    captureHeaders: true,
    activityLogSampleRate: 9309.77,
    requestTimeout: 5353.71,
    socketTimeout: 2458.07,
    keepAliveTimeout: 4720.42,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
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
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 6299.85,
    accessControlAllowOrigin: [
      "<value 1>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    emitTokenMetrics: true,
    description: "though er ah over french vice unnaturally rout hmph underneath",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 7494.2,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    throttleRatePerSec: "<value>",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 7494.2,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    throttleRatePerSec: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
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
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.2",
    },
    topics: [
      "logs",
    ],
    groupId: "<id>",
    fromBeginning: true,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "https://likely-vestment.name",
      connectionTimeout: 3207.6,
      requestTimeout: 5863.02,
      maxRetries: 4906.03,
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
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
    },
    connectionTimeout: 706.41,
    requestTimeout: 5013.02,
    maxRetries: 407.99,
    maxBackOff: 7467.38,
    initialBackoff: 6279.16,
    backoffRate: 8726.25,
    authenticationTimeout: 5366.72,
    reauthenticationThreshold: 6641.64,
    sasl: {
      disabled: false,
      username: "Jonatan_Bayer",
      password: "Qfozy4youvu68SS",
      authType: "secret",
      credentialsSecret: "<value>",
      mechanism: "scram-sha-256",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://infamous-vibraphone.name/",
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
    sessionTimeout: 3407.88,
    rebalanceTimeout: 9577.47,
    heartbeatInterval: 5773.16,
    autoCommitInterval: 2194.53,
    autoCommitThreshold: 8012.13,
    maxBytesPerPartition: 867.05,
    maxBytes: 7650.76,
    maxSocketErrors: 284.27,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "grim lashes famously pfft",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
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
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.2",
    },
    topics: [
      "logs",
    ],
    groupId: "<id>",
    fromBeginning: true,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "https://likely-vestment.name",
      connectionTimeout: 3207.6,
      requestTimeout: 5863.02,
      maxRetries: 4906.03,
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
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
    },
    connectionTimeout: 706.41,
    requestTimeout: 5013.02,
    maxRetries: 407.99,
    maxBackOff: 7467.38,
    initialBackoff: 6279.16,
    backoffRate: 8726.25,
    authenticationTimeout: 5366.72,
    reauthenticationThreshold: 6641.64,
    sasl: {
      disabled: false,
      username: "Jonatan_Bayer",
      password: "Qfozy4youvu68SS",
      authType: "secret",
      credentialsSecret: "<value>",
      mechanism: "scram-sha-256",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://infamous-vibraphone.name/",
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
    sessionTimeout: 3407.88,
    rebalanceTimeout: 9577.47,
    heartbeatInterval: 5773.16,
    autoCommitInterval: 2194.53,
    autoCommitThreshold: 8012.13,
    maxBytesPerPartition: 867.05,
    maxBytes: 7650.76,
    maxSocketErrors: 284.27,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "grim lashes famously pfft",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: false,
        description: "apropos yet hm pfft indolent out regarding until",
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 5856.13,
    maxRequestsPerSocket: 377834,
    enableProxyHeader: true,
    captureHeaders: false,
    activityLogSampleRate: 5718.34,
    requestTimeout: 4869.73,
    socketTimeout: 6498.22,
    keepAliveTimeout: 6356.52,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "ferociously where frightfully furthermore",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: false,
        description: "apropos yet hm pfft indolent out regarding until",
      },
    ],
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 5856.13,
    maxRequestsPerSocket: 377834,
    enableProxyHeader: true,
    captureHeaders: false,
    activityLogSampleRate: 5718.34,
    requestTimeout: 4869.73,
    socketTimeout: 6498.22,
    keepAliveTimeout: 6356.52,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "ferociously where frightfully furthermore",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 794.08,
    maxRequestsPerSocket: 766465,
    enableProxyHeader: true,
    captureHeaders: false,
    activityLogSampleRate: 4231.63,
    requestTimeout: 7608.37,
    socketTimeout: 7380.11,
    keepAliveTimeout: 7173.81,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    criblAPI: "<value>",
    elasticAPI: "<value>",
    splunkHecAPI: "<value>",
    splunkHecAcks: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "entice substantiate bossy",
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
            "<value 2>",
            "<value 3>",
          ],
        },
        elasticsearchMetadata: {
          enabled: false,
          defaultDataset: "<value>",
        },
      },
    ],
    description: "meh that yearly whether off instructive pigsty highly normal",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 794.08,
    maxRequestsPerSocket: 766465,
    enableProxyHeader: true,
    captureHeaders: false,
    activityLogSampleRate: 4231.63,
    requestTimeout: 7608.37,
    socketTimeout: 7380.11,
    keepAliveTimeout: 7173.81,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    criblAPI: "<value>",
    elasticAPI: "<value>",
    splunkHecAPI: "<value>",
    splunkHecAcks: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "entice substantiate bossy",
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
            "<value 2>",
            "<value 3>",
          ],
        },
        elasticsearchMetadata: {
          enabled: false,
          defaultDataset: "<value>",
        },
      },
    ],
    description: "meh that yearly whether off instructive pigsty highly normal",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveCxn: 517.37,
    socketIdleTimeout: 2877.78,
    socketEndingMaxWait: 1374.1,
    socketMaxLifespan: 4050.69,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    enableLoadBalancing: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: false,
        description: "apropos yet hm pfft indolent out regarding until",
      },
    ],
    description: "wherever tooth ack suffice concerning micromanage",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveCxn: 517.37,
    socketIdleTimeout: 2877.78,
    socketEndingMaxWait: 1374.1,
    socketMaxLifespan: 4050.69,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    enableLoadBalancing: true,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: false,
        description: "apropos yet hm pfft indolent out regarding until",
      },
    ],
    description: "wherever tooth ack suffice concerning micromanage",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "crowdstrike-queue",
    fileFilter: "<value>",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: false,
    rejectUnauthorized: false,
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 2176.23,
    maxMessages: 8726.66,
    visibilityTimeout: 2323.89,
    numReceivers: 9553.15,
    socketTimeout: 2488.55,
    skipOnError: true,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 1392.46,
    enableSQSAssumeRole: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    checkpointing: {
      enabled: true,
      retries: 6640.52,
    },
    pollTimeout: 137.62,
    encoding: "<value>",
    description: "replicate divert orange doorpost premium fishery",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "true",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "crowdstrike-queue",
    fileFilter: "<value>",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: false,
    rejectUnauthorized: false,
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 2176.23,
    maxMessages: 8726.66,
    visibilityTimeout: 2323.89,
    numReceivers: 9553.15,
    socketTimeout: 2488.55,
    skipOnError: true,
    includeSqsMetadata: false,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 1392.46,
    enableSQSAssumeRole: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    checkpointing: {
      enabled: true,
      retries: 6640.52,
    },
    pollTimeout: 137.62,
    encoding: "<value>",
    description: "replicate divert orange doorpost premium fishery",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "true",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8126,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 8859.56,
    maxRequestsPerSocket: 736712,
    enableProxyHeader: false,
    captureHeaders: true,
    activityLogSampleRate: 6928.25,
    requestTimeout: 3515.79,
    socketTimeout: 2354.57,
    keepAliveTimeout: 8951.66,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    extractMetrics: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    proxyMode: {
      enabled: true,
      rejectUnauthorized: true,
    },
    description: "onto hmph unit concerning although practical briefly",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8126,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 8859.56,
    maxRequestsPerSocket: 736712,
    enableProxyHeader: false,
    captureHeaders: true,
    activityLogSampleRate: 6928.25,
    requestTimeout: 3515.79,
    socketTimeout: 2354.57,
    keepAliveTimeout: 8951.66,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    extractMetrics: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    proxyMode: {
      enabled: true,
      rejectUnauthorized: true,
    },
    description: "onto hmph unit concerning although practical briefly",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
    description: "frankly sauerkraut as",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
    description: "frankly sauerkraut as",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    dimensionList: [
      "<value 1>",
      "<value 2>",
    ],
    discoveryType: "static",
    interval: 60,
    timeout: 7763.9,
    persistence: {
      enable: false,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "secret",
    description: "practical heartfelt daily furiously",
    targets: [
      {
        protocol: "https",
        host: "localhost",
        port: 7742.21,
        path: "/opt/include",
      },
    ],
    recordType: "A",
    scrapePort: 2096.09,
    nameList: [
      "<value 1>",
      "<value 2>",
    ],
    scrapeProtocol: "http",
    scrapePath: "<value>",
    awsAuthenticationMethod: "<value>",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    usePublicIp: false,
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
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 6230.89,
    scrapeProtocolExpr: "<value>",
    scrapePortExpr: "<value>",
    scrapePathExpr: "<value>",
    podFilter: [
      {
        filter: "<value>",
        description: "cruelty buzzing mid once",
      },
    ],
    username: "Bertrand0",
    password: "03pB0ItRx8wMA9I",
    credentialsSecret: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    dimensionList: [
      "<value 1>",
      "<value 2>",
    ],
    discoveryType: "static",
    interval: 60,
    timeout: 7763.9,
    persistence: {
      enable: false,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "secret",
    description: "practical heartfelt daily furiously",
    targets: [
      {
        protocol: "https",
        host: "localhost",
        port: 7742.21,
        path: "/opt/include",
      },
    ],
    recordType: "A",
    scrapePort: 2096.09,
    nameList: [
      "<value 1>",
      "<value 2>",
    ],
    scrapeProtocol: "http",
    scrapePath: "<value>",
    awsAuthenticationMethod: "<value>",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    usePublicIp: false,
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
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 6230.89,
    scrapeProtocolExpr: "<value>",
    scrapePortExpr: "<value>",
    scrapePathExpr: "<value>",
    podFilter: [
      {
        filter: "<value>",
        description: "cruelty buzzing mid once",
      },
    ],
    username: "Bertrand0",
    password: "03pB0ItRx8wMA9I",
    credentialsSecret: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "localhost",
    port: 9200,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 3960.2,
    maxRequestsPerSocket: 581397,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 7375.97,
    requestTimeout: 398.3,
    socketTimeout: 806.34,
    keepAliveTimeout: 5968.43,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    elasticAPI: "/",
    authType: "basic",
    apiVersion: "6.8.4",
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
      authType: "manual",
      username: "Leda.Gleichner",
      password: "NkOwQ8ho0Xc5Fvv",
      credentialsSecret: "<value>",
      url: "https://sarcastic-orchid.net",
      rejectUnauthorized: false,
      removeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      timeoutSec: 5262.84,
    },
    description: "failing vaguely hm anenst anxiously how acquaintance",
    username: "Nolan_Hirthe15",
    password: "jpfV8EoA38Uy4Pd",
    credentialsSecret: "<value>",
    authTokens: [
      "<value 1>",
    ],
    customAPIVersion: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "localhost",
    port: 9200,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 3960.2,
    maxRequestsPerSocket: 581397,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 7375.97,
    requestTimeout: 398.3,
    socketTimeout: 806.34,
    keepAliveTimeout: 5968.43,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    elasticAPI: "/",
    authType: "basic",
    apiVersion: "6.8.4",
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
      authType: "manual",
      username: "Leda.Gleichner",
      password: "NkOwQ8ho0Xc5Fvv",
      credentialsSecret: "<value>",
      url: "https://sarcastic-orchid.net",
      rejectUnauthorized: false,
      removeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      timeoutSec: 5262.84,
    },
    description: "failing vaguely hm anenst anxiously how acquaintance",
    username: "Nolan_Hirthe15",
    password: "jpfV8EoA38Uy4Pd",
    credentialsSecret: "<value>",
    authTokens: [
      "<value 1>",
    ],
    customAPIVersion: "<value>",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topics: [
      "logs",
    ],
    groupId: "<id>",
    fromBeginning: true,
    connectionTimeout: 8847.35,
    requestTimeout: 7095.48,
    maxRetries: 8916.76,
    maxBackOff: 9789.08,
    initialBackoff: 6081.98,
    backoffRate: 6144.48,
    authenticationTimeout: 1645.6,
    reauthenticationThreshold: 7804.07,
    sasl: {
      disabled: false,
      authType: "manual",
      password: "O782PUEcyGr_yFJ",
      textSecret: "<value>",
      mechanism: "plain",
      username: "Ricky_Cartwright",
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
      disabled: true,
      rejectUnauthorized: true,
    },
    sessionTimeout: 8881.97,
    rebalanceTimeout: 3094.15,
    heartbeatInterval: 5813.58,
    autoCommitInterval: 4011.31,
    autoCommitThreshold: 755.68,
    maxBytesPerPartition: 1507.16,
    maxBytes: 9630.42,
    maxSocketErrors: 8514.78,
    minimizeDuplicates: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "beyond spirit atop carpool minority scale mmm",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topics: [
      "logs",
    ],
    groupId: "<id>",
    fromBeginning: true,
    connectionTimeout: 8847.35,
    requestTimeout: 7095.48,
    maxRetries: 8916.76,
    maxBackOff: 9789.08,
    initialBackoff: 6081.98,
    backoffRate: 6144.48,
    authenticationTimeout: 1645.6,
    reauthenticationThreshold: 7804.07,
    sasl: {
      disabled: false,
      authType: "manual",
      password: "O782PUEcyGr_yFJ",
      textSecret: "<value>",
      mechanism: "plain",
      username: "Ricky_Cartwright",
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
      disabled: true,
      rejectUnauthorized: true,
    },
    sessionTimeout: 8881.97,
    rebalanceTimeout: 3094.15,
    heartbeatInterval: 5813.58,
    autoCommitInterval: 4011.31,
    autoCommitThreshold: 755.68,
    maxBytesPerPartition: 1507.16,
    maxBytes: 9630.42,
    maxSocketErrors: 8514.78,
    minimizeDuplicates: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "beyond spirit atop carpool minority scale mmm",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    command: "echo \"Hello World\"",
    retries: 9351.84,
    scheduleType: "cronSchedule",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 5434.71,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "tag overfeed out nucleotidase frizz weary",
    interval: 60,
    cronSchedule: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    command: "echo \"Hello World\"",
    retries: 9351.84,
    scheduleType: "cronSchedule",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 5434.71,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "tag overfeed out nucleotidase frizz weary",
    interval: 60,
    cronSchedule: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    mode: "manual",
    interval: 9699.83,
    filenames: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    filterArchivedFiles: false,
    tailOnly: false,
    idleTimeout: 8237.9,
    minAgeDur: "<value>",
    maxAgeDur: "<value>",
    checkFileModTime: false,
    forceText: false,
    hashLen: 7278.38,
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
    staleChannelFlushMs: 8637.21,
    description: "once in even motivate sociable dime sympathetically provided",
    path: "/usr/bin",
    depth: 7587.38,
    suppressMissingPathErrors: false,
    deleteFiles: true,
    saltHash: true,
    includeUnidentifiableBinary: true,
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    mode: "manual",
    interval: 9699.83,
    filenames: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    filterArchivedFiles: false,
    tailOnly: false,
    idleTimeout: 8237.9,
    minAgeDur: "<value>",
    maxAgeDur: "<value>",
    checkFileModTime: false,
    forceText: false,
    hashLen: 7278.38,
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
    staleChannelFlushMs: 8637.21,
    description: "once in even motivate sociable dime sympathetically provided",
    path: "/usr/bin",
    depth: 7587.38,
    suppressMissingPathErrors: false,
    deleteFiles: true,
    saltHash: true,
    includeUnidentifiableBinary: true,
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 2881.78,
    maxRequestsPerSocket: 367940,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 1845.86,
    requestTimeout: 6596.5,
    socketTimeout: 5668.22,
    keepAliveTimeout: 2143.06,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "jeopardise though although substantiate mortise yowza clearly er",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 2881.78,
    maxRequestsPerSocket: 367940,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 1845.86,
    requestTimeout: 6596.5,
    socketTimeout: 5668.22,
    keepAliveTimeout: 2143.06,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "jeopardise though although substantiate mortise yowza clearly er",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    topicName: "my-topic",
    subscriptionName: "my-subscription",
    monitorSubscription: true,
    createTopic: true,
    createSubscription: false,
    region: "<value>",
    googleAuthMethod: "auto",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    maxBacklog: 5492.05,
    concurrency: 4296.14,
    requestTimeout: 5617.27,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "blah qualified grave carnival siege uh-huh through behind excepting notwithstanding",
    orderedDelivery: false,
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    topicName: "my-topic",
    subscriptionName: "my-subscription",
    monitorSubscription: true,
    createTopic: true,
    createSubscription: false,
    region: "<value>",
    googleAuthMethod: "auto",
    serviceAccountCredentials: "<value>",
    secret: "<value>",
    maxBacklog: 5492.05,
    concurrency: 4296.14,
    requestTimeout: 5617.27,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "blah qualified grave carnival siege uh-huh through behind excepting notwithstanding",
    orderedDelivery: false,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 2135.53,
    maxRequestsPerSocket: 264434,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 5817.81,
    requestTimeout: 879.43,
    socketTimeout: 1677.97,
    keepAliveTimeout: 4101.18,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    prometheusAPI: "/api/prom/push",
    lokiAPI: "<value>",
    prometheusAuth: {
      authType: "credentialsSecret",
      username: "Julie49",
      password: "CR5y1TiruMkLqBQ",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://subtle-fit.name/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 2224.45,
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
    lokiAuth: {
      authType: "token",
      username: "Eloise_Steuber48",
      password: "dTFUeJHySltyf4z",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://deep-solution.biz",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 1443.03,
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
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "which digitize culture huge ick leading atomize airbus tool",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 2135.53,
    maxRequestsPerSocket: 264434,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 5817.81,
    requestTimeout: 879.43,
    socketTimeout: 1677.97,
    keepAliveTimeout: 4101.18,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    prometheusAPI: "/api/prom/push",
    lokiAPI: "<value>",
    prometheusAuth: {
      authType: "credentialsSecret",
      username: "Julie49",
      password: "CR5y1TiruMkLqBQ",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://subtle-fit.name/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 2224.45,
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
    lokiAuth: {
      authType: "token",
      username: "Eloise_Steuber48",
      password: "dTFUeJHySltyf4z",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://deep-solution.biz",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 1443.03,
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
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "which digitize culture huge ick leading atomize airbus tool",
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
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 9250.73,
    maxRequestsPerSocket: 674207,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 107.96,
    requestTimeout: 1037.56,
    socketTimeout: 867.58,
    keepAliveTimeout: 2518.75,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    criblAPI: "<value>",
    elasticAPI: "<value>",
    splunkHecAPI: "<value>",
    splunkHecAcks: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "urgently tempting congregate degrease underachieve happy-go-lucky quizzically now",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "flimsy among numeric for",
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
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 9250.73,
    maxRequestsPerSocket: 674207,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 107.96,
    requestTimeout: 1037.56,
    socketTimeout: 867.58,
    keepAliveTimeout: 2518.75,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    criblAPI: "<value>",
    elasticAPI: "<value>",
    splunkHecAPI: "<value>",
    splunkHecAcks: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "urgently tempting congregate degrease underachieve happy-go-lucky quizzically now",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "flimsy among numeric for",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 4964.63,
    maxRequestsPerSocket: 532702,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 9172.78,
    requestTimeout: 9463.89,
    socketTimeout: 7940.23,
    keepAliveTimeout: 5314.25,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 2531.49,
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
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "urgently tempting congregate degrease underachieve happy-go-lucky quizzically now",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "urgently wisely nephew skean imaginary of massage carpool aside interior",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 4964.63,
    maxRequestsPerSocket: 532702,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 9172.78,
    requestTimeout: 9463.89,
    socketTimeout: 7940.23,
    keepAliveTimeout: 5314.25,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 2531.49,
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
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "urgently tempting congregate degrease underachieve happy-go-lucky quizzically now",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "urgently wisely nephew skean imaginary of massage carpool aside interior",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    path: "/var/log/journal",
    interval: 4165.4,
    journals: [
      "system",
    ],
    rules: [
      {
        filter: "<value>",
        description: "hmph actual fake yawningly inculcate certify hepatitis prudent chairperson measly",
      },
    ],
    currentBoot: true,
    maxAgeDur: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "while for loyally uselessly black over questionably",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    path: "/var/log/journal",
    interval: 4165.4,
    journals: [
      "system",
    ],
    rules: [
      {
        filter: "<value>",
        description: "hmph actual fake yawningly inculcate certify hepatitis prudent chairperson measly",
      },
    ],
    currentBoot: true,
    maxAgeDur: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "while for loyally uselessly black over questionably",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    brokers: [
      "localhost:9092",
    ],
    topics: [
      "logs",
    ],
    groupId: "<id>",
    fromBeginning: true,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "https://likely-vestment.name",
      connectionTimeout: 3207.6,
      requestTimeout: 5863.02,
      maxRetries: 4906.03,
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
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
    },
    connectionTimeout: 9783.59,
    requestTimeout: 7964.43,
    maxRetries: 4737.48,
    maxBackOff: 9931.13,
    initialBackoff: 5541.98,
    backoffRate: 1818.85,
    authenticationTimeout: 6210.53,
    reauthenticationThreshold: 9633.8,
    sasl: {
      disabled: false,
      username: "Jonatan_Bayer",
      password: "Qfozy4youvu68SS",
      authType: "secret",
      credentialsSecret: "<value>",
      mechanism: "scram-sha-256",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://infamous-vibraphone.name/",
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
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.2",
    },
    sessionTimeout: 3468.65,
    rebalanceTimeout: 9559.98,
    heartbeatInterval: 192.81,
    autoCommitInterval: 1935.59,
    autoCommitThreshold: 9713.56,
    maxBytesPerPartition: 4313.27,
    maxBytes: 7012.47,
    maxSocketErrors: 5435.1,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "zowie an eke vainly atop democratize per",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    brokers: [
      "localhost:9092",
    ],
    topics: [
      "logs",
    ],
    groupId: "<id>",
    fromBeginning: true,
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "https://likely-vestment.name",
      connectionTimeout: 3207.6,
      requestTimeout: 5863.02,
      maxRetries: 4906.03,
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
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
    },
    connectionTimeout: 9783.59,
    requestTimeout: 7964.43,
    maxRetries: 4737.48,
    maxBackOff: 9931.13,
    initialBackoff: 5541.98,
    backoffRate: 1818.85,
    authenticationTimeout: 6210.53,
    reauthenticationThreshold: 9633.8,
    sasl: {
      disabled: false,
      username: "Jonatan_Bayer",
      password: "Qfozy4youvu68SS",
      authType: "secret",
      credentialsSecret: "<value>",
      mechanism: "scram-sha-256",
      keytabLocation: "<value>",
      principal: "<value>",
      brokerServiceClass: "<value>",
      oauthEnabled: false,
      tokenUrl: "https://infamous-vibraphone.name/",
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
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.2",
    },
    sessionTimeout: 3468.65,
    rebalanceTimeout: 9559.98,
    heartbeatInterval: 192.81,
    autoCommitInterval: 1935.59,
    autoCommitThreshold: 9713.56,
    maxBytesPerPartition: 4313.27,
    maxBytes: 7012.47,
    maxSocketErrors: 5435.1,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "zowie an eke vainly atop democratize per",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    streamName: "my-stream",
    serviceInterval: 9143.64,
    shardExpr: "<value>",
    shardIteratorType: "LATEST",
    payloadFormat: "cribl",
    getRecordsLimit: 3398.57,
    getRecordsLimitTotal: 398.12,
    loadBalancingAlgorithm: "ConsistentHashing",
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
    durationSeconds: 9195.58,
    verifyKPLCheckSums: false,
    avoidDuplicates: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "glow nudge valley instead sun er rosy oval splendid before",
    awsApiKey: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    streamName: "my-stream",
    serviceInterval: 9143.64,
    shardExpr: "<value>",
    shardIteratorType: "LATEST",
    payloadFormat: "cribl",
    getRecordsLimit: 3398.57,
    getRecordsLimitTotal: 398.12,
    loadBalancingAlgorithm: "ConsistentHashing",
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
    durationSeconds: 9195.58,
    verifyKPLCheckSums: false,
    avoidDuplicates: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "glow nudge valley instead sun er rosy oval splendid before",
    awsApiKey: "<value>",
    awsSecret: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    rules: [
      {
        filter: "<value>",
        description: "bus yuck parsnip revoke carelessly",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "provided upward dental including seriously",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    rules: [
      {
        filter: "<value>",
        description: "bus yuck parsnip revoke carelessly",
      },
    ],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "provided upward dental including seriously",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 9294.15,
    rules: [
      {
        filter: "<value>",
        description: "dally versus abaft",
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
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
    },
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 3094.18,
    enableLoadBalancing: false,
    description: "unit cumbersome amid whereas gah internationalize against deployment",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 9294.15,
    rules: [
      {
        filter: "<value>",
        description: "dally versus abaft",
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
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
    },
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 3094.18,
    enableLoadBalancing: false,
    description: "unit cumbersome amid whereas gah internationalize against deployment",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 7658.18,
    rules: [
      {
        filter: "<value>",
        description: "bus yuck parsnip revoke carelessly",
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
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
    },
    description: "concerning beneath conservative",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 7658.18,
    rules: [
      {
        filter: "<value>",
        description: "bus yuck parsnip revoke carelessly",
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
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
    },
    description: "concerning beneath conservative",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 7108.33,
    maxRequestsPerSocket: 725268,
    enableProxyHeader: true,
    captureHeaders: false,
    activityLogSampleRate: 7582.7,
    requestTimeout: 9847.9,
    socketTimeout: 6550.67,
    keepAliveTimeout: 3031.15,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    lokiAPI: "/loki/api/v1/push",
    authType: "basic",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "coop er aha till deploy hello",
    username: "Hassan_Zieme",
    password: "XJGerLlyEIgwPcn",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://stupendous-ownership.name",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 390.52,
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 7108.33,
    maxRequestsPerSocket: 725268,
    enableProxyHeader: true,
    captureHeaders: false,
    activityLogSampleRate: 7582.7,
    requestTimeout: 9847.9,
    socketTimeout: 6550.67,
    keepAliveTimeout: 3031.15,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    lokiAPI: "/loki/api/v1/push",
    authType: "basic",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "coop er aha till deploy hello",
    username: "Hassan_Zieme",
    password: "XJGerLlyEIgwPcn",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://stupendous-ownership.name",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 390.52,
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    udpPort: 8125,
    tcpPort: 2018.99,
    maxBufferSize: 4796.54,
    ipWhitelistRegex: "<value>",
    enableProxyHeader: true,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 8661.25,
    description: "cripple mould schnitzel regarding yawningly",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    udpPort: 8125,
    tcpPort: 2018.99,
    maxBufferSize: 4796.54,
    ipWhitelistRegex: "<value>",
    enableProxyHeader: true,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 8661.25,
    description: "cripple mould schnitzel regarding yawningly",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 57000,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxActiveCxn: 1146.57,
    shutdownTimeoutMs: 4403.35,
    description: "shark throbbing strict upright after mob sore scrabble highly",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 57000,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxActiveCxn: 1146.57,
    shutdownTimeoutMs: 4403.35,
    description: "shark throbbing strict upright after mob sore scrabble highly",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topics: [
      "logs",
    ],
    groupId: "<id>",
    fromBeginning: false,
    sessionTimeout: 6707.9,
    rebalanceTimeout: 6148.89,
    heartbeatInterval: 7456.56,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "https://likely-vestment.name",
      connectionTimeout: 3207.6,
      requestTimeout: 5863.02,
      maxRetries: 4906.03,
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
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
    },
    connectionTimeout: 3036.85,
    requestTimeout: 7138.96,
    maxRetries: 4442.98,
    maxBackOff: 937.08,
    initialBackoff: 6326.31,
    backoffRate: 3669.62,
    authenticationTimeout: 4469.96,
    reauthenticationThreshold: 2957.49,
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
    durationSeconds: 7957.81,
    tls: {
      disabled: false,
      rejectUnauthorized: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.2",
    },
    autoCommitInterval: 7568.58,
    autoCommitThreshold: 3785.78,
    maxBytesPerPartition: 159.91,
    maxBytes: 9977.3,
    maxSocketErrors: 2996.29,
    description: "behind fooey ugh muscat coil",
    awsApiKey: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topics: [
      "logs",
    ],
    groupId: "<id>",
    fromBeginning: false,
    sessionTimeout: 6707.9,
    rebalanceTimeout: 6148.89,
    heartbeatInterval: 7456.56,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    kafkaSchemaRegistry: {
      disabled: true,
      schemaRegistryURL: "https://likely-vestment.name",
      connectionTimeout: 3207.6,
      requestTimeout: 5863.02,
      maxRetries: 4906.03,
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
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
    },
    connectionTimeout: 3036.85,
    requestTimeout: 7138.96,
    maxRetries: 4442.98,
    maxBackOff: 937.08,
    initialBackoff: 6326.31,
    backoffRate: 3669.62,
    authenticationTimeout: 4469.96,
    reauthenticationThreshold: 2957.49,
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
    durationSeconds: 7957.81,
    tls: {
      disabled: false,
      rejectUnauthorized: false,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.2",
    },
    autoCommitInterval: 7568.58,
    autoCommitThreshold: 3785.78,
    maxBytesPerPartition: 159.91,
    maxBytes: 9977.3,
    maxSocketErrors: 2996.29,
    description: "behind fooey ugh muscat coil",
    awsApiKey: "<value>",
    awsSecret: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 2055,
    enablePassThrough: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    udpSocketRxBufSize: 9034.9,
    templateCacheMinutes: 8075.23,
    v5Enabled: true,
    v9Enabled: true,
    ipfixEnabled: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "blaspheme indeed floss pearl colorfully yahoo",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 2055,
    enablePassThrough: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    udpSocketRxBufSize: 9034.9,
    templateCacheMinutes: 8075.23,
    v5Enabled: true,
    v9Enabled: true,
    ipfixEnabled: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "blaspheme indeed floss pearl colorfully yahoo",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
    timeout: 8832.88,
    keepAliveTime: 6056.74,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 1156.89,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
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
        description: "clearly until tune-up requirement",
        interval: 7491.05,
        logLevel: "debug",
        enabled: false,
      },
    ],
    ingestionLag: 5497.39,
    retryRules: {
      type: "none",
      interval: 4888.94,
      limit: 4858.11,
      multiplier: 2628.28,
      codes: [
        9397.8,
        2389.07,
      ],
      enableHeader: false,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "sorrowful tousle sprinkles",
    clientSecret: "<value>",
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
    id: "office365-mgmt-source",
    type: "office365_mgmt",
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
    timeout: 8832.88,
    keepAliveTime: 6056.74,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 1156.89,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
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
        description: "clearly until tune-up requirement",
        interval: 7491.05,
        logLevel: "debug",
        enabled: false,
      },
    ],
    ingestionLag: 5497.39,
    retryRules: {
      type: "none",
      interval: 4888.94,
      limit: 4858.11,
      multiplier: 2628.28,
      codes: [
        9397.8,
        2389.07,
      ],
      enableHeader: false,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "sorrowful tousle sprinkles",
    clientSecret: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
    interval: 15,
    startDate: "<value>",
    endDate: "<value>",
    timeout: 9704.44,
    disableTimeFilter: true,
    authType: "oauthSecret",
    rescheduleDroppedTasks: false,
    maxTaskReschedule: 432.99,
    logLevel: "silly",
    jobTimeout: "<value>",
    keepAliveTime: 3948.58,
    maxMissedKeepAlives: 9835.51,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "none",
      interval: 4888.94,
      limit: 4858.11,
      multiplier: 2628.28,
      codes: [
        9397.8,
        2389.07,
      ],
      enableHeader: false,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    description: "where imaginative fellow woot about laughter as how afraid",
    username: "Jensen2",
    password: "kV4HItzaErhOhmi",
    credentialsSecret: "<value>",
    clientSecret: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    resource: "<value>",
    planType: "gcc_high",
    textSecret: "<value>",
    certOptions: {
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
    },
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
    interval: 15,
    startDate: "<value>",
    endDate: "<value>",
    timeout: 9704.44,
    disableTimeFilter: true,
    authType: "oauthSecret",
    rescheduleDroppedTasks: false,
    maxTaskReschedule: 432.99,
    logLevel: "silly",
    jobTimeout: "<value>",
    keepAliveTime: 3948.58,
    maxMissedKeepAlives: 9835.51,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "none",
      interval: 4888.94,
      limit: 4858.11,
      multiplier: 2628.28,
      codes: [
        9397.8,
        2389.07,
      ],
      enableHeader: false,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    description: "where imaginative fellow woot about laughter as how afraid",
    username: "Jensen2",
    password: "kV4HItzaErhOhmi",
    credentialsSecret: "<value>",
    clientSecret: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    resource: "<value>",
    planType: "gcc_high",
    textSecret: "<value>",
    certOptions: {
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
    },
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
    timeout: 771.3,
    keepAliveTime: 1245.19,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 5898.41,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    contentConfig: [
      {
        contentType: "<value>",
        description: "remorseful for provided meh whereas never blah woot why",
        interval: 8418.68,
        logLevel: "warn",
        enabled: false,
      },
    ],
    retryRules: {
      type: "none",
      interval: 4888.94,
      limit: 4858.11,
      multiplier: 2628.28,
      codes: [
        9397.8,
        2389.07,
      ],
      enableHeader: false,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "excluding magnetize unless scorpion oh quaintly what geez besides oh",
    clientSecret: "<value>",
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
    id: "office365-service-source",
    type: "office365_service",
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
    timeout: 771.3,
    keepAliveTime: 1245.19,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 5898.41,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    contentConfig: [
      {
        contentType: "<value>",
        description: "remorseful for provided meh whereas never blah woot why",
        interval: 8418.68,
        logLevel: "warn",
        enabled: false,
      },
    ],
    retryRules: {
      type: "none",
      interval: 4888.94,
      limit: 4858.11,
      multiplier: 2628.28,
      codes: [
        9397.8,
        2389.07,
      ],
      enableHeader: false,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "excluding magnetize unless scorpion oh quaintly what geez besides oh",
    clientSecret: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 4317,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 9512.38,
    maxRequestsPerSocket: 752288,
    enableProxyHeader: "<value>",
    captureHeaders: "<value>",
    activityLogSampleRate: "<value>",
    requestTimeout: 2216.43,
    socketTimeout: 1210.68,
    keepAliveTimeout: 4035.31,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    protocol: "grpc",
    extractSpans: true,
    extractMetrics: true,
    otlpVersion: "0.10.0",
    authType: "token",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxActiveCxn: 6634.73,
    description: "flame judgementally yum enfold",
    username: "Maryse_Marquardt-Boehm",
    password: "9WvuJfnOHcvvMef",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://stiff-diver.net/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 1418.93,
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
    extractLogs: false,
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 4317,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 9512.38,
    maxRequestsPerSocket: 752288,
    enableProxyHeader: "<value>",
    captureHeaders: "<value>",
    activityLogSampleRate: "<value>",
    requestTimeout: 2216.43,
    socketTimeout: 1210.68,
    keepAliveTimeout: 4035.31,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    protocol: "grpc",
    extractSpans: true,
    extractMetrics: true,
    otlpVersion: "0.10.0",
    authType: "token",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxActiveCxn: 6634.73,
    description: "flame judgementally yum enfold",
    username: "Maryse_Marquardt-Boehm",
    password: "9WvuJfnOHcvvMef",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://stiff-diver.net/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 1418.93,
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
    extractLogs: false,
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    dimensionList: [
      "<value 1>",
    ],
    discoveryType: "static",
    interval: 60,
    logLevel: "info",
    rejectUnauthorized: false,
    timeout: 9979.04,
    keepAliveTime: 2131.17,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 2695.11,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "secret",
    description: "misfire hence nightlife highlight suspension opposite jovially",
    targetList: [
      "http://localhost:9090/metrics",
    ],
    recordType: "SRV",
    scrapePort: 1696.3,
    nameList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    scrapeProtocol: "https",
    scrapePath: "<value>",
    awsAuthenticationMethod: "<value>",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    usePublicIp: false,
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
    signatureVersion: "v2",
    reuseConnections: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 2189.15,
    username: "Tabitha_Herzog26",
    password: "PyvPh2diZRCGCwQ",
    credentialsSecret: "<value>",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    dimensionList: [
      "<value 1>",
    ],
    discoveryType: "static",
    interval: 60,
    logLevel: "info",
    rejectUnauthorized: false,
    timeout: 9979.04,
    keepAliveTime: 2131.17,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 2695.11,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authType: "secret",
    description: "misfire hence nightlife highlight suspension opposite jovially",
    targetList: [
      "http://localhost:9090/metrics",
    ],
    recordType: "SRV",
    scrapePort: 1696.3,
    nameList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    scrapeProtocol: "https",
    scrapePath: "<value>",
    awsAuthenticationMethod: "<value>",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    usePublicIp: false,
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
    signatureVersion: "v2",
    reuseConnections: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 2189.15,
    username: "Tabitha_Herzog26",
    password: "PyvPh2diZRCGCwQ",
    credentialsSecret: "<value>",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 3535,
    maxRequestsPerSocket: 761526,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 1863.29,
    requestTimeout: 7358.94,
    socketTimeout: 7472.16,
    keepAliveTimeout: 3536.79,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    prometheusAPI: "/write",
    authType: "none",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "ouch voluntarily an mature",
    username: "Teresa.Howell20",
    password: "bUmHOD2OrTrkv5r",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://punctual-slime.biz/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 6106.2,
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10080,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 3535,
    maxRequestsPerSocket: 761526,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 1863.29,
    requestTimeout: 7358.94,
    socketTimeout: 7472.16,
    keepAliveTimeout: 3536.79,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    prometheusAPI: "/write",
    authType: "none",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "ouch voluntarily an mature",
    username: "Teresa.Howell20",
    password: "bUmHOD2OrTrkv5r",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://punctual-slime.biz/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 6106.2,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 514,
    maxBufferSize: 2910.27,
    ipWhitelistRegex: "<value>",
    singleMsgUdpPackets: false,
    ingestRawBytes: false,
    udpSocketRxBufSize: 7261.65,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "stack about along polyester vibraphone below badly furthermore",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 514,
    maxBufferSize: 2910.27,
    ipWhitelistRegex: "<value>",
    singleMsgUdpPackets: false,
    ingestRawBytes: false,
    udpSocketRxBufSize: 7261.65,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "stack about along polyester vibraphone below badly furthermore",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "s3-notifications-queue",
    fileFilter: "<value>",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: false,
    rejectUnauthorized: false,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 6295.87,
    maxMessages: 415.83,
    visibilityTimeout: 7675.05,
    numReceivers: 9041.05,
    socketTimeout: 6696.16,
    skipOnError: false,
    includeSqsMetadata: true,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 921.25,
    enableSQSAssumeRole: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 8177.49,
    parquetChunkDownloadTimeout: 4223.85,
    checkpointing: {
      enabled: true,
      retries: 6640.52,
    },
    pollTimeout: 2154.78,
    encoding: "<value>",
    tagAfterProcessing: false,
    description: "greedily blah until content along corner phew youthfully",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "s3-notifications-queue",
    fileFilter: "<value>",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: false,
    rejectUnauthorized: false,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 6295.87,
    maxMessages: 415.83,
    visibilityTimeout: 7675.05,
    numReceivers: 9041.05,
    socketTimeout: 6696.16,
    skipOnError: false,
    includeSqsMetadata: true,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 921.25,
    enableSQSAssumeRole: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 8177.49,
    parquetChunkDownloadTimeout: 4223.85,
    checkpointing: {
      enabled: true,
      retries: 6640.52,
    },
    pollTimeout: 2154.78,
    encoding: "<value>",
    tagAfterProcessing: false,
    description: "greedily blah until content along corner phew youthfully",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "s3-inventory-queue",
    fileFilter: "<value>",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "<value>",
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
    staleChannelFlushMs: 5816.86,
    maxMessages: 2785.37,
    visibilityTimeout: 6562.43,
    numReceivers: 6629.46,
    socketTimeout: 949.97,
    skipOnError: true,
    includeSqsMetadata: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 7600.47,
    enableSQSAssumeRole: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 7677.17,
    parquetChunkDownloadTimeout: 7566.68,
    checkpointing: {
      enabled: true,
      retries: 6640.52,
    },
    pollTimeout: 3403.75,
    checksumSuffix: "<value>",
    maxManifestSizeKB: 33915,
    validateInventoryFiles: false,
    description: "extra-large however tidy crumble flawed yet greatly",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "true",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "s3-inventory-queue",
    fileFilter: "<value>",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "<value>",
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
    staleChannelFlushMs: 5816.86,
    maxMessages: 2785.37,
    visibilityTimeout: 6562.43,
    numReceivers: 6629.46,
    socketTimeout: 949.97,
    skipOnError: true,
    includeSqsMetadata: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 7600.47,
    enableSQSAssumeRole: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 7677.17,
    parquetChunkDownloadTimeout: 7566.68,
    checkpointing: {
      enabled: true,
      retries: 6640.52,
    },
    pollTimeout: 3403.75,
    checksumSuffix: "<value>",
    maxManifestSizeKB: 33915,
    validateInventoryFiles: false,
    description: "extra-large however tidy crumble flawed yet greatly",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "true",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "security-lake-queue",
    fileFilter: "<value>",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: false,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 3203.28,
    maxMessages: 327.96,
    visibilityTimeout: 1581.31,
    numReceivers: 7302.97,
    socketTimeout: 4873.06,
    skipOnError: true,
    includeSqsMetadata: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 8713.46,
    enableSQSAssumeRole: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 298.86,
    parquetChunkDownloadTimeout: 7453.78,
    checkpointing: {
      enabled: true,
      retries: 6640.52,
    },
    pollTimeout: 2439.88,
    encoding: "<value>",
    description: "ugh quietly along keenly pulverize idle next edge like",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "false",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "security-lake-queue",
    fileFilter: "<value>",
    awsAccountId: "<id>",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: true,
    rejectUnauthorized: false,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 3203.28,
    maxMessages: 327.96,
    visibilityTimeout: 1581.31,
    numReceivers: 7302.97,
    socketTimeout: 4873.06,
    skipOnError: true,
    includeSqsMetadata: true,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 8713.46,
    enableSQSAssumeRole: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 298.86,
    parquetChunkDownloadTimeout: 7453.78,
    checkpointing: {
      enabled: true,
      retries: 6640.52,
    },
    pollTimeout: 2439.88,
    encoding: "<value>",
    description: "ugh quietly along keenly pulverize idle next edge like",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "false",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "192.168.1.1",
    port: 161,
    snmpV3Auth: {
      v3AuthEnabled: false,
      allowUnmatchedTrap: true,
      v3Users: [
        {
          name: "<value>",
          authProtocol: "sha",
          authKey: "<value>",
          privProtocol: "none",
          privKey: "<value>",
        },
      ],
    },
    maxBufferSize: 4966.47,
    ipWhitelistRegex: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 4986.33,
    varbindsWithTypes: false,
    bestEffortParsing: false,
    description: "resort minion though realistic what while",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "192.168.1.1",
    port: 161,
    snmpV3Auth: {
      v3AuthEnabled: false,
      allowUnmatchedTrap: true,
      v3Users: [
        {
          name: "<value>",
          authProtocol: "sha",
          authKey: "<value>",
          privProtocol: "none",
          privKey: "<value>",
        },
      ],
    },
    maxBufferSize: 4966.47,
    ipWhitelistRegex: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 4986.33,
    varbindsWithTypes: false,
    bestEffortParsing: false,
    description: "resort minion though realistic what while",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 9997,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 3783.35,
    socketIdleTimeout: 6499.3,
    socketEndingMaxWait: 1867.58,
    socketMaxLifespan: 815.8,
    enableProxyHeader: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 302.8,
    authTokens: [
      {
        token: "<value>",
        description: "fuzzy warmly uselessly",
      },
    ],
    maxS2Sversion: "v4",
    description: "reclassify zowie dampen",
    useFwdTimezone: true,
    dropControlFields: false,
    extractMetrics: true,
    compress: "auto",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 9997,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 3783.35,
    socketIdleTimeout: 6499.3,
    socketEndingMaxWait: 1867.58,
    socketMaxLifespan: 815.8,
    enableProxyHeader: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 302.8,
    authTokens: [
      {
        token: "<value>",
        description: "fuzzy warmly uselessly",
      },
    ],
    maxS2Sversion: "v4",
    description: "reclassify zowie dampen",
    useFwdTimezone: true,
    dropControlFields: false,
    extractMetrics: true,
    compress: "auto",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "secret",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: false,
        description: "stylish gum geez openly given bank",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 318.75,
    maxRequestsPerSocket: 437815,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 6880.56,
    requestTimeout: 564.45,
    socketTimeout: 3864.92,
    keepAliveTimeout: 5707.66,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
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
    splunkHecAcks: true,
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 931.83,
    useFwdTimezone: false,
    dropControlFields: false,
    extractMetrics: true,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    emitTokenMetrics: false,
    description: "behind degenerate turret exotic",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "secret",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: false,
        description: "stylish gum geez openly given bank",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 318.75,
    maxRequestsPerSocket: 437815,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 6880.56,
    requestTimeout: 564.45,
    socketTimeout: 3864.92,
    keepAliveTimeout: 5707.66,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
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
    splunkHecAcks: true,
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 931.83,
    useFwdTimezone: false,
    dropControlFields: false,
    extractMetrics: true,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    emitTokenMetrics: false,
    description: "behind degenerate turret exotic",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    searchHead: "https://localhost:8089",
    search: "index=main",
    earliest: "<value>",
    latest: "<value>",
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
    logLevel: "debug",
    requestTimeout: 5076.89,
    useRoundRobinDns: true,
    rejectUnauthorized: false,
    encoding: "<value>",
    keepAliveTime: 5339.34,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 9660.66,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1700.92,
      limit: 3016.49,
      multiplier: 5849.33,
      codes: [
        6019.15,
        6362.49,
        2835.72,
      ],
      enableHeader: false,
      retryConnectTimeout: true,
      retryConnectReset: false,
    },
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 4045.69,
    authType: "textSecret",
    description: "morbidity plugin roughly aboard hourly descendant pfft whoa",
    username: "Terrance_Wolff-Roberts",
    password: "DYJItRIXcRsFuTU",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://unaware-bar.biz",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 3722.95,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    searchHead: "https://localhost:8089",
    search: "index=main",
    earliest: "<value>",
    latest: "<value>",
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
    logLevel: "debug",
    requestTimeout: 5076.89,
    useRoundRobinDns: true,
    rejectUnauthorized: false,
    encoding: "<value>",
    keepAliveTime: 5339.34,
    jobTimeout: "<value>",
    maxMissedKeepAlives: 9660.66,
    ttl: "<value>",
    ignoreGroupJobsLimit: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1700.92,
      limit: 3016.49,
      multiplier: 5849.33,
      codes: [
        6019.15,
        6362.49,
        2835.72,
      ],
      enableHeader: false,
      retryConnectTimeout: true,
      retryConnectReset: false,
    },
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 4045.69,
    authType: "textSecret",
    description: "morbidity plugin roughly aboard hourly descendant pfft whoa",
    username: "Terrance_Wolff-Roberts",
    password: "DYJItRIXcRsFuTU",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://unaware-bar.biz",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 3722.95,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "my-queue",
    queueType: "standard",
    awsAccountId: "<id>",
    createQueue: true,
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3003.19,
    maxMessages: 7049.71,
    visibilityTimeout: 2368.62,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    pollTimeout: 2367.72,
    description: "gadzooks meh playfully farm",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    numReceivers: 1399.73,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    queueName: "my-queue",
    queueType: "standard",
    awsAccountId: "<id>",
    createQueue: true,
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "us-east-1",
    endpoint: "<value>",
    signatureVersion: "v2",
    reuseConnections: true,
    rejectUnauthorized: true,
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3003.19,
    maxMessages: 7049.71,
    visibilityTimeout: 2368.62,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    pollTimeout: 2367.72,
    description: "gadzooks meh playfully farm",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    numReceivers: 1399.73,
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    udpPort: 514,
    tcpPort: 2474.91,
    maxBufferSize: 2282.1,
    ipWhitelistRegex: "<value>",
    timestampTimezone: "<value>",
    singleMsgUdpPackets: true,
    enableProxyHeader: false,
    keepFieldsList: [
      "<value 1>",
    ],
    octetCounting: true,
    inferFraming: false,
    strictlyInferOctetCounting: true,
    allowNonStandardAppName: false,
    maxActiveCxn: 2517.02,
    socketIdleTimeout: 3194.4,
    socketEndingMaxWait: 1333.98,
    socketMaxLifespan: 8139.96,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 9377.11,
    enableLoadBalancing: false,
    description: "untidy verbally stir-fry lasting circumnavigate",
    enableEnhancedProxyHeaderParsing: false,
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    udpPort: 514,
    tcpPort: 2474.91,
    maxBufferSize: 2282.1,
    ipWhitelistRegex: "<value>",
    timestampTimezone: "<value>",
    singleMsgUdpPackets: true,
    enableProxyHeader: false,
    keepFieldsList: [
      "<value 1>",
    ],
    octetCounting: true,
    inferFraming: false,
    strictlyInferOctetCounting: true,
    allowNonStandardAppName: false,
    maxActiveCxn: 2517.02,
    socketIdleTimeout: 3194.4,
    socketEndingMaxWait: 1333.98,
    socketMaxLifespan: 8139.96,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    udpSocketRxBufSize: 9377.11,
    enableLoadBalancing: false,
    description: "untidy verbally stir-fry lasting circumnavigate",
    enableEnhancedProxyHeaderParsing: false,
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 874.59,
    host: {
      mode: "all",
      custom: {
        system: {
          mode: "custom",
          processes: false,
        },
        cpu: {
          mode: "basic",
          perCpu: false,
          detail: true,
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
          perInterface: true,
        },
        disk: {
          mode: "basic",
          detail: false,
          inodes: false,
          devices: [
            "<value 1>",
          ],
          mountpoints: [
            "<value 1>",
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
      mode: "custom",
      dockerSocket: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      dockerTimeout: 6331.11,
      filters: [
        {
          expr: "<value>",
        },
      ],
      allContainers: false,
      perDevice: true,
      detail: false,
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: true,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
    },
    description: "subsidy geez venture although athwart separate median or",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 874.59,
    host: {
      mode: "all",
      custom: {
        system: {
          mode: "custom",
          processes: false,
        },
        cpu: {
          mode: "basic",
          perCpu: false,
          detail: true,
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
          perInterface: true,
        },
        disk: {
          mode: "basic",
          detail: false,
          inodes: false,
          devices: [
            "<value 1>",
          ],
          mountpoints: [
            "<value 1>",
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
      mode: "custom",
      dockerSocket: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      dockerTimeout: 6331.11,
      filters: [
        {
          expr: "<value>",
        },
      ],
      allContainers: false,
      perDevice: true,
      detail: false,
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    persistence: {
      enable: true,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "none",
      destPath: "<value>",
    },
    description: "subsidy geez venture although athwart separate median or",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 8688.44,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    collectors: {
      hostsfile: {
        enable: false,
      },
      interfaces: {
        enable: true,
      },
      disk: {
        enable: true,
      },
      metadata: {
        enable: false,
      },
      routes: {
        enable: true,
      },
      dns: {
        enable: false,
      },
      user: {
        enable: false,
      },
      firewall: {
        enable: false,
      },
      services: {
        enable: false,
      },
      ports: {
        enable: false,
      },
      loginUsers: {
        enable: true,
      },
    },
    persistence: {
      enable: true,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
    },
    disableNativeModule: false,
    disableNativeLastLogModule: true,
    description: "hmph vicinity ew gee",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 8688.44,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    collectors: {
      hostsfile: {
        enable: false,
      },
      interfaces: {
        enable: true,
      },
      disk: {
        enable: true,
      },
      metadata: {
        enable: false,
      },
      routes: {
        enable: true,
      },
      dns: {
        enable: false,
      },
      user: {
        enable: false,
      },
      firewall: {
        enable: false,
      },
      services: {
        enable: false,
      },
      ports: {
        enable: false,
      },
      loginUsers: {
        enable: true,
      },
    },
    persistence: {
      enable: true,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
    },
    disableNativeModule: false,
    disableNativeLastLogModule: true,
    description: "hmph vicinity ew gee",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 6438.82,
    socketIdleTimeout: 3186.42,
    socketEndingMaxWait: 5907.91,
    socketMaxLifespan: 3132.48,
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
    staleChannelFlushMs: 6421.4,
    enableHeader: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    description: "massage past noisily especially",
    authToken: "<value>",
    authType: "manual",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 6438.82,
    socketIdleTimeout: 3186.42,
    socketEndingMaxWait: 5907.91,
    socketMaxLifespan: 3132.48,
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
    staleChannelFlushMs: 6421.4,
    enableHeader: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    description: "massage past noisily especially",
    authToken: "<value>",
    authType: "manual",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 9979.23,
    socketIdleTimeout: 4023.74,
    socketEndingMaxWait: 7127.68,
    socketMaxLifespan: 6943.12,
    enableProxyHeader: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    enableLoadBalancing: false,
    authType: "manual",
    description: "colorfully futon ridge disrespect why supposing pfft",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 10090,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 9979.23,
    socketIdleTimeout: 4023.74,
    socketEndingMaxWait: 7127.68,
    socketMaxLifespan: 6943.12,
    enableProxyHeader: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    enableLoadBalancing: false,
    authType: "manual",
    description: "colorfully futon ridge disrespect why supposing pfft",
    authToken: "<value>",
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 5985,
    authMethod: "clientCert",
    tls: {
      disabled: false,
      rejectUnauthorized: false,
      requestCert: false,
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      commonNameRegex: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
      ocspCheck: true,
      keytab: "<value>",
      principal: "<value>",
      ocspCheckFailClose: true,
    },
    maxActiveReq: 8374.76,
    maxRequestsPerSocket: 184806,
    enableProxyHeader: false,
    captureHeaders: true,
    keepAliveTimeout: 3033.61,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    socketTimeout: 6353.34,
    caFingerprint: "<value>",
    keytab: "<value>",
    principal: "<value>",
    allowMachineIdMismatch: true,
    subscriptions: [
      {
        subscriptionName: "subscription-1",
        version: "<value>",
        contentFormat: "RenderedText",
        heartbeatInterval: 60,
        batchTimeout: 5,
        readExistingEvents: true,
        sendBookmarks: true,
        compress: false,
        targets: [],
        locale: "no",
        querySelector: "simple",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        queries: [
          {
            path: "/var/log",
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
    description: "surface following swiftly er any including geez",
    logFingerprintMismatch: true,
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
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 5985,
    authMethod: "clientCert",
    tls: {
      disabled: false,
      rejectUnauthorized: false,
      requestCert: false,
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      commonNameRegex: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
      ocspCheck: true,
      keytab: "<value>",
      principal: "<value>",
      ocspCheckFailClose: true,
    },
    maxActiveReq: 8374.76,
    maxRequestsPerSocket: 184806,
    enableProxyHeader: false,
    captureHeaders: true,
    keepAliveTimeout: 3033.61,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    socketTimeout: 6353.34,
    caFingerprint: "<value>",
    keytab: "<value>",
    principal: "<value>",
    allowMachineIdMismatch: true,
    subscriptions: [
      {
        subscriptionName: "subscription-1",
        version: "<value>",
        contentFormat: "RenderedText",
        heartbeatInterval: 60,
        batchTimeout: 5,
        readExistingEvents: true,
        sendBookmarks: true,
        compress: false,
        targets: [],
        locale: "no",
        querySelector: "simple",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        queries: [
          {
            path: "/var/log",
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
    description: "surface following swiftly er any including geez",
    logFingerprintMismatch: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    logNames: [
      "Application",
      "System",
    ],
    readMode: "newest",
    eventFormat: "xml",
    disableNativeModule: false,
    interval: 3257.41,
    batchSize: 4868.04,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxEventBytes: 718.7,
    description: "gust portly yuck excepting midst jeopardise er why sad",
    disableJsonRendering: true,
    disableXmlRendering: false,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    logNames: [
      "Application",
      "System",
    ],
    readMode: "newest",
    eventFormat: "xml",
    disableNativeModule: false,
    interval: 3257.41,
    batchSize: 4868.04,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxEventBytes: 718.7,
    description: "gust portly yuck excepting midst jeopardise er why sad",
    disableJsonRendering: true,
    disableXmlRendering: false,
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 4410.38,
    host: {
      mode: "custom",
      custom: {
        system: {
          mode: "custom",
          detail: true,
        },
        cpu: {
          mode: "basic",
          perCpu: false,
          detail: true,
          time: false,
        },
        memory: {
          mode: "all",
          detail: true,
        },
        network: {
          mode: "all",
          detail: false,
          protocols: false,
          devices: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          perInterface: true,
        },
        disk: {
          mode: "custom",
          perVolume: true,
          detail: false,
          volumes: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
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
      enable: true,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
    },
    disableNativeModule: true,
    description: "absolve unless goose tenderly from",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    interval: 4410.38,
    host: {
      mode: "custom",
      custom: {
        system: {
          mode: "custom",
          detail: true,
        },
        cpu: {
          mode: "basic",
          perCpu: false,
          detail: true,
          time: false,
        },
        memory: {
          mode: "all",
          detail: true,
        },
        network: {
          mode: "all",
          detail: false,
          protocols: false,
          devices: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          perInterface: true,
        },
        disk: {
          mode: "custom",
          perVolume: true,
          detail: false,
          volumes: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
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
      enable: true,
      timeWindow: "<value>",
      maxDataSize: "<value>",
      maxDataTime: "<value>",
      compress: "gzip",
      destPath: "<value>",
    },
    disableNativeModule: true,
    description: "absolve unless goose tenderly from",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    endpoint: "https://api.wiz.io",
    authUrl: "https://auth.wiz.io/oauth/token",
    authAudienceOverride: "<value>",
    clientId: "client-id",
    contentConfig: [],
    requestTimeout: 5434.52,
    keepAliveTime: 1355.21,
    maxMissedKeepAlives: 2315.99,
    ttl: "<value>",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1700.92,
      limit: 3016.49,
      multiplier: 5849.33,
      codes: [
        6019.15,
        6362.49,
        2835.72,
      ],
      enableHeader: false,
      retryConnectTimeout: true,
      retryConnectReset: false,
    },
    authType: "secret",
    description: "nearly declaration when",
    clientSecret: "<value>",
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    endpoint: "https://api.wiz.io",
    authUrl: "https://auth.wiz.io/oauth/token",
    authAudienceOverride: "<value>",
    clientId: "client-id",
    contentConfig: [],
    requestTimeout: 5434.52,
    keepAliveTime: 1355.21,
    maxMissedKeepAlives: 2315.99,
    ttl: "<value>",
    ignoreGroupJobsLimit: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    retryRules: {
      type: "backoff",
      interval: 1700.92,
      limit: 3016.49,
      multiplier: 5849.33,
      codes: [
        6019.15,
        6362.49,
        2835.72,
      ],
      enableHeader: false,
      retryConnectTimeout: true,
      retryConnectReset: false,
    },
    authType: "secret",
    description: "nearly declaration when",
    clientSecret: "<value>",
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
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 6724.81,
    maxRequestsPerSocket: 216577,
    enableProxyHeader: false,
    captureHeaders: true,
    activityLogSampleRate: 4766.81,
    requestTimeout: 1391.27,
    socketTimeout: 5431.4,
    keepAliveTimeout: 2321.95,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 1701.78,
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
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "urgently tempting congregate degrease underachieve happy-go-lucky quizzically now",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "yum filter dearest sauerkraut yuck ah near clone",
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
      "<value 2>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 6724.81,
    maxRequestsPerSocket: 216577,
    enableProxyHeader: false,
    captureHeaders: true,
    activityLogSampleRate: 4766.81,
    requestTimeout: 1391.27,
    socketTimeout: 5431.4,
    keepAliveTimeout: 2321.95,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 1701.78,
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
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "urgently tempting congregate degrease underachieve happy-go-lucky quizzically now",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "yum filter dearest sauerkraut yuck ah near clone",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: false,
        description: "aha when unless warming ultimately yippee hasty",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 5417.74,
    maxRequestsPerSocket: 911224,
    enableProxyHeader: false,
    captureHeaders: true,
    activityLogSampleRate: 6912.09,
    requestTimeout: 1113.99,
    socketTimeout: 4730.94,
    keepAliveTimeout: 3466.35,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
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
      "<value 3>",
    ],
    hecAcks: true,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    emitTokenMetrics: false,
    description: "jiggle if fooey surprisingly or weakly rarely populist",
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
    disabled: true,
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
      mode: "smart",
      maxBufferSize: 2055.73,
      commitFrequency: 7905.42,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/bin",
      compress: "gzip",
      pqControls: {},
    },
    host: "0.0.0.0",
    port: 8088,
    authTokens: [
      {
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: false,
        description: "aha when unless warming ultimately yippee hasty",
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
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    maxActiveReq: 5417.74,
    maxRequestsPerSocket: 911224,
    enableProxyHeader: false,
    captureHeaders: true,
    activityLogSampleRate: 6912.09,
    requestTimeout: 1113.99,
    socketTimeout: 4730.94,
    keepAliveTimeout: 3466.35,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
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
      "<value 3>",
    ],
    hecAcks: true,
    accessControlAllowOrigin: [
      "<value 1>",
      "<value 2>",
    ],
    accessControlAllowHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    emitTokenMetrics: false,
    description: "jiggle if fooey surprisingly or weakly rarely populist",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 3417.54,
      socketIdleTimeout: 4799.95,
      socketEndingMaxWait: 3730.65,
      socketMaxLifespan: 4634.53,
      enableProxyHeader: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 3362.61,
      enableUnixPath: false,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://distorted-translation.org/",
      },
      persistence: {
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      authType: "secret",
      description: "incidentally down versus blah",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      unixSocketPath: "<value>",
      unixSocketPerms: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 3417.54,
      socketIdleTimeout: 4799.95,
      socketEndingMaxWait: 3730.65,
      socketMaxLifespan: 4634.53,
      enableProxyHeader: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 3362.61,
      enableUnixPath: false,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://distorted-translation.org/",
      },
      persistence: {
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      authType: "secret",
      description: "incidentally down versus blah",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      unixSocketPath: "<value>",
      unixSocketPerms: "<value>",
      authToken: "<value>",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "azure-blob-queue",
      fileFilter: "<value>",
      visibilityTimeout: 5294.27,
      numReceivers: 3992.62,
      maxMessages: 5686.02,
      servicePeriodSecs: 8039.05,
      skipOnError: true,
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
      staleChannelFlushMs: 9969.24,
      parquetChunkSizeMB: 1561.4,
      parquetChunkDownloadTimeout: 1595.41,
      authType: "secret",
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
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "azure-blob-queue",
      fileFilter: "<value>",
      visibilityTimeout: 5294.27,
      numReceivers: 3992.62,
      maxMessages: 5686.02,
      servicePeriodSecs: 8039.05,
      skipOnError: true,
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
      staleChannelFlushMs: 9969.24,
      parquetChunkSizeMB: 1561.4,
      parquetChunkDownloadTimeout: 1595.41,
      authType: "secret",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
          description: "viciously left knuckle finally likewise before",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 3960.65,
      maxRequestsPerSocket: 684894,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 5621.37,
      requestTimeout: 8713.82,
      socketTimeout: 8592.43,
      keepAliveTimeout: 2174.26,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
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
      staleChannelFlushMs: 8605.29,
      accessControlAllowOrigin: [
        "<value 1>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: true,
      description: "discourse into phooey fledgling along or since gadzooks purse",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
          description: "viciously left knuckle finally likewise before",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 3960.65,
      maxRequestsPerSocket: 684894,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 5621.37,
      requestTimeout: 8713.82,
      socketTimeout: 8592.43,
      keepAliveTimeout: 2174.26,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
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
      staleChannelFlushMs: 8605.29,
      accessControlAllowOrigin: [
        "<value 1>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: true,
      description: "discourse into phooey fledgling along or since gadzooks purse",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 8452.47,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      throttleRatePerSec: "<value>",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 8452.47,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      throttleRatePerSec: "<value>",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: true,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://concrete-petal.info",
        connectionTimeout: 2814.06,
        requestTimeout: 7605.14,
        maxRetries: 8934.79,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1.1",
        },
      },
      connectionTimeout: 6822.45,
      requestTimeout: 1289.1,
      maxRetries: 124.52,
      maxBackOff: 9242.82,
      initialBackoff: 9313.77,
      backoffRate: 2563.57,
      authenticationTimeout: 4547.37,
      reauthenticationThreshold: 670.16,
      sasl: {
        disabled: true,
        username: "Ruben.Prosacco",
        password: "9KZ67ITYDbrbAZJ",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://brilliant-sustenance.net",
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
      sessionTimeout: 2651.67,
      rebalanceTimeout: 8421.5,
      heartbeatInterval: 5595.6,
      autoCommitInterval: 2888.32,
      autoCommitThreshold: 4884.37,
      maxBytesPerPartition: 2952.38,
      maxBytes: 9163.66,
      maxSocketErrors: 4977.5,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "furthermore pfft pace vague behold despite boulevard corrupt",
    },
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: true,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://concrete-petal.info",
        connectionTimeout: 2814.06,
        requestTimeout: 7605.14,
        maxRetries: 8934.79,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1.1",
        },
      },
      connectionTimeout: 6822.45,
      requestTimeout: 1289.1,
      maxRetries: 124.52,
      maxBackOff: 9242.82,
      initialBackoff: 9313.77,
      backoffRate: 2563.57,
      authenticationTimeout: 4547.37,
      reauthenticationThreshold: 670.16,
      sasl: {
        disabled: true,
        username: "Ruben.Prosacco",
        password: "9KZ67ITYDbrbAZJ",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://brilliant-sustenance.net",
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
      sessionTimeout: 2651.67,
      rebalanceTimeout: 8421.5,
      heartbeatInterval: 5595.6,
      autoCommitInterval: 2888.32,
      autoCommitThreshold: 4884.37,
      maxBytesPerPartition: 2952.38,
      maxBytes: 9163.66,
      maxSocketErrors: 4977.5,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "furthermore pfft pace vague behold despite boulevard corrupt",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "fatal every rebuke ew forenenst millet",
        },
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 539.26,
      maxRequestsPerSocket: 239267,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 6330.35,
      requestTimeout: 6630.19,
      socketTimeout: 2059.35,
      keepAliveTimeout: 9652.08,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "wearily innovation proliferate tomorrow appliance",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: true,
          description: "fatal every rebuke ew forenenst millet",
        },
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 539.26,
      maxRequestsPerSocket: 239267,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 6330.35,
      requestTimeout: 6630.19,
      socketTimeout: 2059.35,
      keepAliveTimeout: 9652.08,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "wearily innovation proliferate tomorrow appliance",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 242.74,
      maxRequestsPerSocket: 851306,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 8524.32,
      requestTimeout: 1684.81,
      socketTimeout: 7908.19,
      keepAliveTimeout: 6036.75,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      criblAPI: "<value>",
      elasticAPI: "<value>",
      splunkHecAPI: "<value>",
      splunkHecAcks: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "before whereas provided although bore furthermore only closely deduce tousle",
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
              "<value 3>",
            ],
          },
          elasticsearchMetadata: {
            enabled: true,
            defaultDataset: "<value>",
          },
        },
      ],
      description: "shrill for without lend awkwardly waft forgo monster service athletic",
    },
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 242.74,
      maxRequestsPerSocket: 851306,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 8524.32,
      requestTimeout: 1684.81,
      socketTimeout: 7908.19,
      keepAliveTimeout: 6036.75,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      criblAPI: "<value>",
      elasticAPI: "<value>",
      splunkHecAPI: "<value>",
      splunkHecAcks: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "before whereas provided although bore furthermore only closely deduce tousle",
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
              "<value 3>",
            ],
          },
          elasticsearchMetadata: {
            enabled: true,
            defaultDataset: "<value>",
          },
        },
      ],
      description: "shrill for without lend awkwardly waft forgo monster service athletic",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveCxn: 8039.05,
      socketIdleTimeout: 9275.52,
      socketEndingMaxWait: 2495.06,
      socketMaxLifespan: 858.03,
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
          description: "fatal every rebuke ew forenenst millet",
        },
      ],
      description: "supposing past honesty gah made-up solace bouncy which comfortable",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveCxn: 8039.05,
      socketIdleTimeout: 9275.52,
      socketEndingMaxWait: 2495.06,
      socketMaxLifespan: 858.03,
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
          description: "fatal every rebuke ew forenenst millet",
        },
      ],
      description: "supposing past honesty gah made-up solace bouncy which comfortable",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "crowdstrike-queue",
      fileFilter: "<value>",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: false,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 6606.42,
      maxMessages: 7932.13,
      visibilityTimeout: 999.63,
      numReceivers: 554.2,
      socketTimeout: 3598.43,
      skipOnError: true,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5328.59,
      enableSQSAssumeRole: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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
        retries: 7470.05,
      },
      pollTimeout: 3583.79,
      encoding: "<value>",
      description: "without brr trench alongside although",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
    },
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "crowdstrike-queue",
      fileFilter: "<value>",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: false,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 6606.42,
      maxMessages: 7932.13,
      visibilityTimeout: 999.63,
      numReceivers: 554.2,
      socketTimeout: 3598.43,
      skipOnError: true,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5328.59,
      enableSQSAssumeRole: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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
        retries: 7470.05,
      },
      pollTimeout: 3583.79,
      encoding: "<value>",
      description: "without brr trench alongside although",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8126,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 591.06,
      maxRequestsPerSocket: 55351,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 9399.4,
      requestTimeout: 688.03,
      socketTimeout: 5501.94,
      keepAliveTimeout: 7592.27,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      extractMetrics: true,
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
      description: "eek ah severe furthermore concrete hunger muffled",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8126,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 591.06,
      maxRequestsPerSocket: 55351,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 9399.4,
      requestTimeout: 688.03,
      socketTimeout: 5501.94,
      keepAliveTimeout: 7592.27,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      extractMetrics: true,
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
      description: "eek ah severe furthermore concrete hunger muffled",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
      description: "yippee etch once jubilant yuck gymnast longingly puzzled duffel key",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
      description: "yippee etch once jubilant yuck gymnast longingly puzzled duffel key",
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
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      discoveryType: "static",
      interval: 60,
      timeout: 9803.21,
      persistence: {
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "manual",
      description: "until excepting concerned carefree because",
      targets: [
        {
          protocol: "http",
          host: "localhost",
          port: 8301.5,
          path: "/usr/ports",
        },
      ],
      recordType: "SRV",
      scrapePort: 379.19,
      nameList: [
        "<value 1>",
        "<value 2>",
      ],
      scrapeProtocol: "http",
      scrapePath: "<value>",
      awsAuthenticationMethod: "<value>",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      usePublicIp: false,
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
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9211.6,
      scrapeProtocolExpr: "<value>",
      scrapePortExpr: "<value>",
      scrapePathExpr: "<value>",
      podFilter: [
        {
          filter: "<value>",
          description: "insist eek ick",
        },
      ],
      username: "Marion_Glover",
      password: "TVbZE3bXVr9zOoh",
      credentialsSecret: "<value>",
    },
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
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      discoveryType: "static",
      interval: 60,
      timeout: 9803.21,
      persistence: {
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "manual",
      description: "until excepting concerned carefree because",
      targets: [
        {
          protocol: "http",
          host: "localhost",
          port: 8301.5,
          path: "/usr/ports",
        },
      ],
      recordType: "SRV",
      scrapePort: 379.19,
      nameList: [
        "<value 1>",
        "<value 2>",
      ],
      scrapeProtocol: "http",
      scrapePath: "<value>",
      awsAuthenticationMethod: "<value>",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      usePublicIp: false,
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
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9211.6,
      scrapeProtocolExpr: "<value>",
      scrapePortExpr: "<value>",
      scrapePathExpr: "<value>",
      podFilter: [
        {
          filter: "<value>",
          description: "insist eek ick",
        },
      ],
      username: "Marion_Glover",
      password: "TVbZE3bXVr9zOoh",
      credentialsSecret: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "localhost",
      port: 9200,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 2904.34,
      maxRequestsPerSocket: 732768,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 2753.91,
      requestTimeout: 7622.9,
      socketTimeout: 1818.59,
      keepAliveTimeout: 9221.63,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      elasticAPI: "/",
      authType: "basic",
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
        authType: "manual",
        username: "Gino_Moore",
        password: "gbADKuYo1wYi1QZ",
        credentialsSecret: "<value>",
        url: "https://noxious-desk.info",
        rejectUnauthorized: true,
        removeHeaders: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        timeoutSec: 7670.74,
      },
      description: "yesterday testimonial afore though sedately profuse actual fluffy now",
      username: "Alexandre73",
      password: "qTaaDTgjB6pdaXM",
      credentialsSecret: "<value>",
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      customAPIVersion: "<value>",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "localhost",
      port: 9200,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 2904.34,
      maxRequestsPerSocket: 732768,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 2753.91,
      requestTimeout: 7622.9,
      socketTimeout: 1818.59,
      keepAliveTimeout: 9221.63,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      elasticAPI: "/",
      authType: "basic",
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
        authType: "manual",
        username: "Gino_Moore",
        password: "gbADKuYo1wYi1QZ",
        credentialsSecret: "<value>",
        url: "https://noxious-desk.info",
        rejectUnauthorized: true,
        removeHeaders: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        timeoutSec: 7670.74,
      },
      description: "yesterday testimonial afore though sedately profuse actual fluffy now",
      username: "Alexandre73",
      password: "qTaaDTgjB6pdaXM",
      credentialsSecret: "<value>",
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      customAPIVersion: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: true,
      connectionTimeout: 8039.86,
      requestTimeout: 9265.49,
      maxRetries: 6274.81,
      maxBackOff: 3891.27,
      initialBackoff: 3775.83,
      backoffRate: 8300.64,
      authenticationTimeout: 1852.82,
      reauthenticationThreshold: 1659.38,
      sasl: {
        disabled: false,
        authType: "manual",
        password: "P2xNTgCCy2le8of",
        textSecret: "<value>",
        mechanism: "plain",
        username: "Destini.Hand37",
        clientSecretAuthType: "certificate",
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
        disabled: true,
        rejectUnauthorized: false,
      },
      sessionTimeout: 6962.22,
      rebalanceTimeout: 2395.77,
      heartbeatInterval: 9462.11,
      autoCommitInterval: 5494.41,
      autoCommitThreshold: 8764.63,
      maxBytesPerPartition: 6367.85,
      maxBytes: 4328.23,
      maxSocketErrors: 6071.35,
      minimizeDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "satisfy brightly whenever underneath toady nicely",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: true,
      connectionTimeout: 8039.86,
      requestTimeout: 9265.49,
      maxRetries: 6274.81,
      maxBackOff: 3891.27,
      initialBackoff: 3775.83,
      backoffRate: 8300.64,
      authenticationTimeout: 1852.82,
      reauthenticationThreshold: 1659.38,
      sasl: {
        disabled: false,
        authType: "manual",
        password: "P2xNTgCCy2le8of",
        textSecret: "<value>",
        mechanism: "plain",
        username: "Destini.Hand37",
        clientSecretAuthType: "certificate",
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
        disabled: true,
        rejectUnauthorized: false,
      },
      sessionTimeout: 6962.22,
      rebalanceTimeout: 2395.77,
      heartbeatInterval: 9462.11,
      autoCommitInterval: 5494.41,
      autoCommitThreshold: 8764.63,
      maxBytesPerPartition: 6367.85,
      maxBytes: 4328.23,
      maxSocketErrors: 6071.35,
      minimizeDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "satisfy brightly whenever underneath toady nicely",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      command: "echo \"Hello World\"",
      retries: 2867.13,
      scheduleType: "cronSchedule",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 564.82,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "boo to ultimately hammock abnegate",
      interval: 60,
      cronSchedule: "<value>",
    },
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      command: "echo \"Hello World\"",
      retries: 2867.13,
      scheduleType: "cronSchedule",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 564.82,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "boo to ultimately hammock abnegate",
      interval: 60,
      cronSchedule: "<value>",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      mode: "manual",
      interval: 7966.81,
      filenames: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      filterArchivedFiles: true,
      tailOnly: true,
      idleTimeout: 9807.53,
      minAgeDur: "<value>",
      maxAgeDur: "<value>",
      checkFileModTime: true,
      forceText: true,
      hashLen: 1260.43,
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
      staleChannelFlushMs: 9482.47,
      description: "provided hmph sarong championship morbidity dredger forenenst whup",
      path: "/lib",
      depth: 2495.48,
      suppressMissingPathErrors: true,
      deleteFiles: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      mode: "manual",
      interval: 7966.81,
      filenames: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      filterArchivedFiles: true,
      tailOnly: true,
      idleTimeout: 9807.53,
      minAgeDur: "<value>",
      maxAgeDur: "<value>",
      checkFileModTime: true,
      forceText: true,
      hashLen: 1260.43,
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
      staleChannelFlushMs: 9482.47,
      description: "provided hmph sarong championship morbidity dredger forenenst whup",
      path: "/lib",
      depth: 2495.48,
      suppressMissingPathErrors: true,
      deleteFiles: true,
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 3838.32,
      maxRequestsPerSocket: 139234,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 325.21,
      requestTimeout: 2992.77,
      socketTimeout: 4993.13,
      keepAliveTimeout: 6321.13,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "swanling polyester wilted heavenly orient yippee ouch",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 3838.32,
      maxRequestsPerSocket: 139234,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 325.21,
      requestTimeout: 2992.77,
      socketTimeout: 4993.13,
      keepAliveTimeout: 6321.13,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "swanling polyester wilted heavenly orient yippee ouch",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      topicName: "my-topic",
      subscriptionName: "my-subscription",
      monitorSubscription: true,
      createTopic: false,
      createSubscription: false,
      region: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxBacklog: 3007.52,
      concurrency: 556.58,
      requestTimeout: 4354.08,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "exotic phooey ugh supposing construe whenever",
      orderedDelivery: false,
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      topicName: "my-topic",
      subscriptionName: "my-subscription",
      monitorSubscription: true,
      createTopic: false,
      createSubscription: false,
      region: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxBacklog: 3007.52,
      concurrency: 556.58,
      requestTimeout: 4354.08,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "exotic phooey ugh supposing construe whenever",
      orderedDelivery: false,
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 6878.65,
      maxRequestsPerSocket: 451636,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 2229.69,
      requestTimeout: 193.56,
      socketTimeout: 4617.55,
      keepAliveTimeout: 3927.66,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/api/prom/push",
      lokiAPI: "<value>",
      prometheusAuth: {
        authType: "token",
        username: "Sister20",
        password: "TfkXcDOYNTHR1Xo",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
        loginUrl: "https://dead-tool.name/",
        secretParamName: "<value>",
        secret: "<value>",
        tokenAttributeName: "<value>",
        authHeaderExpr: "<value>",
        tokenTimeoutSecs: 3991.29,
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
      lokiAuth: {
        authType: "token",
        username: "Elliot26",
        password: "g6sbGombuWWqXeW",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
        loginUrl: "https://complicated-confusion.name",
        secretParamName: "<value>",
        secret: "<value>",
        tokenAttributeName: "<value>",
        authHeaderExpr: "<value>",
        tokenTimeoutSecs: 5087.09,
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
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "abacus official across gadzooks refer",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 6878.65,
      maxRequestsPerSocket: 451636,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 2229.69,
      requestTimeout: 193.56,
      socketTimeout: 4617.55,
      keepAliveTimeout: 3927.66,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/api/prom/push",
      lokiAPI: "<value>",
      prometheusAuth: {
        authType: "token",
        username: "Sister20",
        password: "TfkXcDOYNTHR1Xo",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
        loginUrl: "https://dead-tool.name/",
        secretParamName: "<value>",
        secret: "<value>",
        tokenAttributeName: "<value>",
        authHeaderExpr: "<value>",
        tokenTimeoutSecs: 3991.29,
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
      lokiAuth: {
        authType: "token",
        username: "Elliot26",
        password: "g6sbGombuWWqXeW",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
        loginUrl: "https://complicated-confusion.name",
        secretParamName: "<value>",
        secret: "<value>",
        tokenAttributeName: "<value>",
        authHeaderExpr: "<value>",
        tokenTimeoutSecs: 5087.09,
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
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "abacus official across gadzooks refer",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 5816.4,
      maxRequestsPerSocket: 133787,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 5092.14,
      requestTimeout: 2951.98,
      socketTimeout: 1402.22,
      keepAliveTimeout: 5574.87,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      criblAPI: "<value>",
      elasticAPI: "<value>",
      splunkHecAPI: "<value>",
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
          description: "since duh against since drat which duh however",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "perspire neglect yum consequently aircraft",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 5816.4,
      maxRequestsPerSocket: 133787,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 5092.14,
      requestTimeout: 2951.98,
      socketTimeout: 1402.22,
      keepAliveTimeout: 5574.87,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      criblAPI: "<value>",
      elasticAPI: "<value>",
      splunkHecAPI: "<value>",
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
          description: "since duh against since drat which duh however",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "perspire neglect yum consequently aircraft",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 8324.65,
      maxRequestsPerSocket: 848214,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 612.65,
      requestTimeout: 7610.07,
      socketTimeout: 2527.84,
      keepAliveTimeout: 6547.53,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 1912.11,
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
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "since duh against since drat which duh however",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "aha unto obedient burdensome safeguard section even even zowie",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 8324.65,
      maxRequestsPerSocket: 848214,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 612.65,
      requestTimeout: 7610.07,
      socketTimeout: 2527.84,
      keepAliveTimeout: 6547.53,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 1912.11,
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
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "since duh against since drat which duh however",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "aha unto obedient burdensome safeguard section even even zowie",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      path: "/var/log/journal",
      interval: 2802.36,
      journals: [
        "system",
      ],
      rules: [
        {
          filter: "<value>",
          description: "where outside decode swing amidst mundane beside moralise onto instead",
        },
      ],
      currentBoot: true,
      maxAgeDur: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "fondly abaft fluctuate whoever punctuation simple",
    },
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      path: "/var/log/journal",
      interval: 2802.36,
      journals: [
        "system",
      ],
      rules: [
        {
          filter: "<value>",
          description: "where outside decode swing amidst mundane beside moralise onto instead",
        },
      ],
      currentBoot: true,
      maxAgeDur: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "fondly abaft fluctuate whoever punctuation simple",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      brokers: [
        "localhost:9092",
      ],
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: true,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://concrete-petal.info",
        connectionTimeout: 2814.06,
        requestTimeout: 7605.14,
        maxRetries: 8934.79,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1.1",
        },
      },
      connectionTimeout: 4874.22,
      requestTimeout: 5959.46,
      maxRetries: 4253.33,
      maxBackOff: 4523.64,
      initialBackoff: 3524.13,
      backoffRate: 2882.98,
      authenticationTimeout: 1761.69,
      reauthenticationThreshold: 164.1,
      sasl: {
        disabled: true,
        username: "Ruben.Prosacco",
        password: "9KZ67ITYDbrbAZJ",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://brilliant-sustenance.net",
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
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      sessionTimeout: 2593.39,
      rebalanceTimeout: 6539.52,
      heartbeatInterval: 2824.72,
      autoCommitInterval: 5918.55,
      autoCommitThreshold: 3759.52,
      maxBytesPerPartition: 3936.12,
      maxBytes: 450.18,
      maxSocketErrors: 1197.53,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "airport lender incidentally ick limply and absent triumphantly",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      brokers: [
        "localhost:9092",
      ],
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: true,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://concrete-petal.info",
        connectionTimeout: 2814.06,
        requestTimeout: 7605.14,
        maxRetries: 8934.79,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1.1",
        },
      },
      connectionTimeout: 4874.22,
      requestTimeout: 5959.46,
      maxRetries: 4253.33,
      maxBackOff: 4523.64,
      initialBackoff: 3524.13,
      backoffRate: 2882.98,
      authenticationTimeout: 1761.69,
      reauthenticationThreshold: 164.1,
      sasl: {
        disabled: true,
        username: "Ruben.Prosacco",
        password: "9KZ67ITYDbrbAZJ",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://brilliant-sustenance.net",
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
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1.1",
      },
      sessionTimeout: 2593.39,
      rebalanceTimeout: 6539.52,
      heartbeatInterval: 2824.72,
      autoCommitInterval: 5918.55,
      autoCommitThreshold: 3759.52,
      maxBytesPerPartition: 3936.12,
      maxBytes: 450.18,
      maxSocketErrors: 1197.53,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "airport lender incidentally ick limply and absent triumphantly",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      streamName: "my-stream",
      serviceInterval: 3392.01,
      shardExpr: "<value>",
      shardIteratorType: "TRIM_HORIZON",
      payloadFormat: "cribl",
      getRecordsLimit: 7547.14,
      getRecordsLimitTotal: 9115.55,
      loadBalancingAlgorithm: "RoundRobin",
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
      durationSeconds: 6689.34,
      verifyKPLCheckSums: true,
      avoidDuplicates: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "where drat snoop",
      awsApiKey: "<value>",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      streamName: "my-stream",
      serviceInterval: 3392.01,
      shardExpr: "<value>",
      shardIteratorType: "TRIM_HORIZON",
      payloadFormat: "cribl",
      getRecordsLimit: 7547.14,
      getRecordsLimitTotal: 9115.55,
      loadBalancingAlgorithm: "RoundRobin",
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
      durationSeconds: 6689.34,
      verifyKPLCheckSums: true,
      avoidDuplicates: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "where drat snoop",
      awsApiKey: "<value>",
      awsSecret: "<value>",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      rules: [
        {
          filter: "<value>",
          description: "voluntarily on ack scornful narrowcast",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "gosh colossal guzzle hubris whose husky slink where",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      rules: [
        {
          filter: "<value>",
          description: "voluntarily on ack scornful narrowcast",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "gosh colossal guzzle hubris whose husky slink where",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 9684.39,
      rules: [
        {
          filter: "<value>",
          description: "meh down developmental colorfully hubris via amidst psst",
        },
      ],
      timestamps: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 5978.67,
      enableLoadBalancing: true,
      description: "bleak lavish out where astride",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 9684.39,
      rules: [
        {
          filter: "<value>",
          description: "meh down developmental colorfully hubris via amidst psst",
        },
      ],
      timestamps: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 5978.67,
      enableLoadBalancing: true,
      description: "bleak lavish out where astride",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 5217.46,
      rules: [
        {
          filter: "<value>",
          description: "voluntarily on ack scornful narrowcast",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      description: "etch boo uh-huh fumigate pip coaxingly",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 5217.46,
      rules: [
        {
          filter: "<value>",
          description: "voluntarily on ack scornful narrowcast",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      description: "etch boo uh-huh fumigate pip coaxingly",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 1718.61,
      maxRequestsPerSocket: 297547,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 5105.34,
      requestTimeout: 7945.35,
      socketTimeout: 1456.35,
      keepAliveTimeout: 5807.08,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      lokiAPI: "/loki/api/v1/push",
      authType: "textSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "geez frantically meanwhile poppy ditch barring through",
      username: "Amanda77",
      password: "OFqwmL16nZ6c7cV",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://expensive-lifestyle.com",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 9507.92,
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 1718.61,
      maxRequestsPerSocket: 297547,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 5105.34,
      requestTimeout: 7945.35,
      socketTimeout: 1456.35,
      keepAliveTimeout: 5807.08,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      lokiAPI: "/loki/api/v1/push",
      authType: "textSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "geez frantically meanwhile poppy ditch barring through",
      username: "Amanda77",
      password: "OFqwmL16nZ6c7cV",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://expensive-lifestyle.com",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 9507.92,
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 8125,
      tcpPort: 1856.43,
      maxBufferSize: 3969.61,
      ipWhitelistRegex: "<value>",
      enableProxyHeader: true,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 5518.77,
      description: "below along remark wherever once afore superb consequently below so",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 8125,
      tcpPort: 1856.43,
      maxBufferSize: 3969.61,
      ipWhitelistRegex: "<value>",
      enableProxyHeader: true,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 5518.77,
      description: "below along remark wherever once afore superb consequently below so",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 57000,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 8228.17,
      shutdownTimeoutMs: 1607.98,
      description: "but notwithstanding than in unaware concerning upright fencing deserted",
    },
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 57000,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 8228.17,
      shutdownTimeoutMs: 1607.98,
      description: "but notwithstanding than in unaware concerning upright fencing deserted",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: true,
      sessionTimeout: 2136.89,
      rebalanceTimeout: 7006.87,
      heartbeatInterval: 511.48,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://concrete-petal.info",
        connectionTimeout: 2814.06,
        requestTimeout: 7605.14,
        maxRetries: 8934.79,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1.1",
        },
      },
      connectionTimeout: 9588.32,
      requestTimeout: 823.24,
      maxRetries: 6954.61,
      maxBackOff: 2693.72,
      initialBackoff: 6309.01,
      backoffRate: 2544.43,
      authenticationTimeout: 137.99,
      reauthenticationThreshold: 2041.41,
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
      durationSeconds: 3805.27,
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
        maxVersion: "TLSv1.1",
      },
      autoCommitInterval: 8271.27,
      autoCommitThreshold: 3121.41,
      maxBytesPerPartition: 8038.03,
      maxBytes: 5033.2,
      maxSocketErrors: 7474.03,
      description: "barring lest freely unless information youthfully sneaky",
      awsApiKey: "<value>",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: true,
      sessionTimeout: 2136.89,
      rebalanceTimeout: 7006.87,
      heartbeatInterval: 511.48,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://concrete-petal.info",
        connectionTimeout: 2814.06,
        requestTimeout: 7605.14,
        maxRetries: 8934.79,
        auth: {
          disabled: false,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1.1",
        },
      },
      connectionTimeout: 9588.32,
      requestTimeout: 823.24,
      maxRetries: 6954.61,
      maxBackOff: 2693.72,
      initialBackoff: 6309.01,
      backoffRate: 2544.43,
      authenticationTimeout: 137.99,
      reauthenticationThreshold: 2041.41,
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
      durationSeconds: 3805.27,
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
        maxVersion: "TLSv1.1",
      },
      autoCommitInterval: 8271.27,
      autoCommitThreshold: 3121.41,
      maxBytesPerPartition: 8038.03,
      maxBytes: 5033.2,
      maxSocketErrors: 7474.03,
      description: "barring lest freely unless information youthfully sneaky",
      awsApiKey: "<value>",
      awsSecret: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 2055,
      enablePassThrough: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      udpSocketRxBufSize: 8883.2,
      templateCacheMinutes: 1627.7,
      v5Enabled: false,
      v9Enabled: true,
      ipfixEnabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "sit regulate or or substantiate provided times athwart vast",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 2055,
      enablePassThrough: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      udpSocketRxBufSize: 8883.2,
      templateCacheMinutes: 1627.7,
      v5Enabled: false,
      v9Enabled: true,
      ipfixEnabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "sit regulate or or substantiate provided times athwart vast",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 4813.73,
      keepAliveTime: 2773.35,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 7061.95,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
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
          description: "whenever well whereas knife fake anenst honestly split",
          interval: 5545.78,
          logLevel: "error",
          enabled: false,
        },
      ],
      ingestionLag: 6025.3,
      retryRules: {
        type: "static",
        interval: 3468.17,
        limit: 5852.45,
        multiplier: 9106.88,
        codes: [
          4961.25,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      authType: "secret",
      description: "eek how yesterday westernise finally geez duh",
      clientSecret: "<value>",
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
      id: "office365-mgmt-source",
      type: "office365_mgmt",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 4813.73,
      keepAliveTime: 2773.35,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 7061.95,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
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
          description: "whenever well whereas knife fake anenst honestly split",
          interval: 5545.78,
          logLevel: "error",
          enabled: false,
        },
      ],
      ingestionLag: 6025.3,
      retryRules: {
        type: "static",
        interval: 3468.17,
        limit: 5852.45,
        multiplier: 9106.88,
        codes: [
          4961.25,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      authType: "secret",
      description: "eek how yesterday westernise finally geez duh",
      clientSecret: "<value>",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
      startDate: "<value>",
      endDate: "<value>",
      timeout: 9879.27,
      disableTimeFilter: true,
      authType: "oauthCert",
      rescheduleDroppedTasks: true,
      maxTaskReschedule: 5198.41,
      logLevel: "error",
      jobTimeout: "<value>",
      keepAliveTime: 2580.39,
      maxMissedKeepAlives: 4110.35,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "static",
        interval: 3468.17,
        limit: 5852.45,
        multiplier: 9106.88,
        codes: [
          4961.25,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      description: "pecan molasses anaesthetise so towards",
      username: "Nicklaus_Bosco50",
      password: "2Y2oFW_P4MI34ez",
      credentialsSecret: "<value>",
      clientSecret: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      resource: "<value>",
      planType: "gcc_high",
      textSecret: "<value>",
      certOptions: {
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
      startDate: "<value>",
      endDate: "<value>",
      timeout: 9879.27,
      disableTimeFilter: true,
      authType: "oauthCert",
      rescheduleDroppedTasks: true,
      maxTaskReschedule: 5198.41,
      logLevel: "error",
      jobTimeout: "<value>",
      keepAliveTime: 2580.39,
      maxMissedKeepAlives: 4110.35,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "static",
        interval: 3468.17,
        limit: 5852.45,
        multiplier: 9106.88,
        codes: [
          4961.25,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      description: "pecan molasses anaesthetise so towards",
      username: "Nicklaus_Bosco50",
      password: "2Y2oFW_P4MI34ez",
      credentialsSecret: "<value>",
      clientSecret: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      resource: "<value>",
      planType: "gcc_high",
      textSecret: "<value>",
      certOptions: {
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
      },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 5820.77,
      keepAliveTime: 4864.16,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 9224.93,
      ttl: "<value>",
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
          description: "popularity alongside brush decode",
          interval: 6988.17,
          logLevel: "debug",
          enabled: false,
        },
      ],
      retryRules: {
        type: "static",
        interval: 3468.17,
        limit: 5852.45,
        multiplier: 9106.88,
        codes: [
          4961.25,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      authType: "manual",
      description: "down rationalise phooey elver ick absentmindedly unrealistic anenst how",
      clientSecret: "<value>",
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
      id: "office365-service-source",
      type: "office365_service",
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 5820.77,
      keepAliveTime: 4864.16,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 9224.93,
      ttl: "<value>",
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
          description: "popularity alongside brush decode",
          interval: 6988.17,
          logLevel: "debug",
          enabled: false,
        },
      ],
      retryRules: {
        type: "static",
        interval: 3468.17,
        limit: 5852.45,
        multiplier: 9106.88,
        codes: [
          4961.25,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      authType: "manual",
      description: "down rationalise phooey elver ick absentmindedly unrealistic anenst how",
      clientSecret: "<value>",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 4317,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 3864.19,
      maxRequestsPerSocket: 114691,
      enableProxyHeader: "<value>",
      captureHeaders: "<value>",
      activityLogSampleRate: "<value>",
      requestTimeout: 773.13,
      socketTimeout: 2051.32,
      keepAliveTimeout: 3858.57,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      protocol: "http",
      extractSpans: true,
      extractMetrics: false,
      otlpVersion: "1.3.1",
      authType: "basic",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 3439.68,
      description: "brood optimistically extremely soliloquy inquisitively utter onto",
      username: "Osborne_McKenzie",
      password: "TBPcpbZgEnTfbcK",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://infatuated-minority.biz",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 2920.73,
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
      extractLogs: true,
    },
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 4317,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 3864.19,
      maxRequestsPerSocket: 114691,
      enableProxyHeader: "<value>",
      captureHeaders: "<value>",
      activityLogSampleRate: "<value>",
      requestTimeout: 773.13,
      socketTimeout: 2051.32,
      keepAliveTimeout: 3858.57,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      protocol: "http",
      extractSpans: true,
      extractMetrics: false,
      otlpVersion: "1.3.1",
      authType: "basic",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 3439.68,
      description: "brood optimistically extremely soliloquy inquisitively utter onto",
      username: "Osborne_McKenzie",
      password: "TBPcpbZgEnTfbcK",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://infatuated-minority.biz",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 2920.73,
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
      extractLogs: true,
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      discoveryType: "static",
      interval: 60,
      logLevel: "info",
      rejectUnauthorized: true,
      timeout: 8091.52,
      keepAliveTime: 5640.18,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 939.08,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "secret",
      description: "frankly separate jellyfish of since gladly quirkily",
      targetList: [
        "http://localhost:9090/metrics",
      ],
      recordType: "AAAA",
      scrapePort: 3519,
      nameList: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      scrapeProtocol: "https",
      scrapePath: "<value>",
      awsAuthenticationMethod: "<value>",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      usePublicIp: false,
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
      durationSeconds: 571.17,
      username: "Valentina99",
      password: "Dp6qgogUJaUHFfR",
      credentialsSecret: "<value>",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      discoveryType: "static",
      interval: 60,
      logLevel: "info",
      rejectUnauthorized: true,
      timeout: 8091.52,
      keepAliveTime: 5640.18,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 939.08,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "secret",
      description: "frankly separate jellyfish of since gladly quirkily",
      targetList: [
        "http://localhost:9090/metrics",
      ],
      recordType: "AAAA",
      scrapePort: 3519,
      nameList: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      scrapeProtocol: "https",
      scrapePath: "<value>",
      awsAuthenticationMethod: "<value>",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      usePublicIp: false,
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
      durationSeconds: 571.17,
      username: "Valentina99",
      password: "Dp6qgogUJaUHFfR",
      credentialsSecret: "<value>",
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
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 8653.49,
      maxRequestsPerSocket: 579688,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 7849.58,
      requestTimeout: 4942.3,
      socketTimeout: 3709.19,
      keepAliveTimeout: 6388.96,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/write",
      authType: "token",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "possession pish after against failing boo oof insignificant",
      username: "Rolando.Bosco",
      password: "943LQ3_a2HBhNwT",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://jagged-icebreaker.biz/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 2107.26,
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
        "<value 3>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 8653.49,
      maxRequestsPerSocket: 579688,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 7849.58,
      requestTimeout: 4942.3,
      socketTimeout: 3709.19,
      keepAliveTimeout: 6388.96,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/write",
      authType: "token",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "possession pish after against failing boo oof insignificant",
      username: "Rolando.Bosco",
      password: "943LQ3_a2HBhNwT",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://jagged-icebreaker.biz/",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 2107.26,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 514,
      maxBufferSize: 5778.45,
      ipWhitelistRegex: "<value>",
      singleMsgUdpPackets: true,
      ingestRawBytes: false,
      udpSocketRxBufSize: 7442.01,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "during outbid insist violently",
    },
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 514,
      maxBufferSize: 5778.45,
      ipWhitelistRegex: "<value>",
      singleMsgUdpPackets: true,
      ingestRawBytes: false,
      udpSocketRxBufSize: 7442.01,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "during outbid insist violently",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "s3-notifications-queue",
      fileFilter: "<value>",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "<value>",
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
      staleChannelFlushMs: 5829.29,
      maxMessages: 595.85,
      visibilityTimeout: 1559.48,
      numReceivers: 6742.16,
      socketTimeout: 1191.82,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1980.43,
      enableSQSAssumeRole: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 4256.1,
      parquetChunkDownloadTimeout: 9378.95,
      checkpointing: {
        enabled: false,
        retries: 7470.05,
      },
      pollTimeout: 5014.83,
      encoding: "<value>",
      tagAfterProcessing: true,
      description: "knottily magnetize um meh tepid innocently",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "s3-notifications-queue",
      fileFilter: "<value>",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "<value>",
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
      staleChannelFlushMs: 5829.29,
      maxMessages: 595.85,
      visibilityTimeout: 1559.48,
      numReceivers: 6742.16,
      socketTimeout: 1191.82,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1980.43,
      enableSQSAssumeRole: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 4256.1,
      parquetChunkDownloadTimeout: 9378.95,
      checkpointing: {
        enabled: false,
        retries: 7470.05,
      },
      pollTimeout: 5014.83,
      encoding: "<value>",
      tagAfterProcessing: true,
      description: "knottily magnetize um meh tepid innocently",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "s3-inventory-queue",
      fileFilter: "<value>",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 7199.44,
      maxMessages: 4285.63,
      visibilityTimeout: 796.75,
      numReceivers: 7159.04,
      socketTimeout: 4479.73,
      skipOnError: false,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4786.8,
      enableSQSAssumeRole: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 7031.34,
      parquetChunkDownloadTimeout: 7595.61,
      checkpointing: {
        enabled: false,
        retries: 7470.05,
      },
      pollTimeout: 5181.72,
      checksumSuffix: "<value>",
      maxManifestSizeKB: 12225,
      validateInventoryFiles: false,
      description: "airbrush oh ick",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "s3-inventory-queue",
      fileFilter: "<value>",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 7199.44,
      maxMessages: 4285.63,
      visibilityTimeout: 796.75,
      numReceivers: 7159.04,
      socketTimeout: 4479.73,
      skipOnError: false,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4786.8,
      enableSQSAssumeRole: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 7031.34,
      parquetChunkDownloadTimeout: 7595.61,
      checkpointing: {
        enabled: false,
        retries: 7470.05,
      },
      pollTimeout: 5181.72,
      checksumSuffix: "<value>",
      maxManifestSizeKB: 12225,
      validateInventoryFiles: false,
      description: "airbrush oh ick",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "security-lake-queue",
      fileFilter: "<value>",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 899.91,
      maxMessages: 7026.01,
      visibilityTimeout: 3797.05,
      numReceivers: 2877.01,
      socketTimeout: 5654.33,
      skipOnError: false,
      includeSqsMetadata: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5231.89,
      enableSQSAssumeRole: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 1256.7,
      parquetChunkDownloadTimeout: 6148.39,
      checkpointing: {
        enabled: false,
        retries: 7470.05,
      },
      pollTimeout: 6509.21,
      encoding: "<value>",
      description: "willfully gazebo duh advocate like so pish vibrant at drat",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "security-lake-queue",
      fileFilter: "<value>",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 899.91,
      maxMessages: 7026.01,
      visibilityTimeout: 3797.05,
      numReceivers: 2877.01,
      socketTimeout: 5654.33,
      skipOnError: false,
      includeSqsMetadata: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 5231.89,
      enableSQSAssumeRole: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      parquetChunkSizeMB: 1256.7,
      parquetChunkDownloadTimeout: 6148.39,
      checkpointing: {
        enabled: false,
        retries: 7470.05,
      },
      pollTimeout: 6509.21,
      encoding: "<value>",
      description: "willfully gazebo duh advocate like so pish vibrant at drat",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "true",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
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
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "192.168.1.1",
      port: 161,
      snmpV3Auth: {
        v3AuthEnabled: true,
        allowUnmatchedTrap: true,
        v3Users: [
          {
            name: "<value>",
            authProtocol: "sha",
            authKey: "<value>",
            privProtocol: "aes",
            privKey: "<value>",
          },
        ],
      },
      maxBufferSize: 1595.02,
      ipWhitelistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 8104.55,
      varbindsWithTypes: true,
      bestEffortParsing: true,
      description: "bracelet detective statue drat so astride",
    },
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
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "192.168.1.1",
      port: 161,
      snmpV3Auth: {
        v3AuthEnabled: true,
        allowUnmatchedTrap: true,
        v3Users: [
          {
            name: "<value>",
            authProtocol: "sha",
            authKey: "<value>",
            privProtocol: "aes",
            privKey: "<value>",
          },
        ],
      },
      maxBufferSize: 1595.02,
      ipWhitelistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 8104.55,
      varbindsWithTypes: true,
      bestEffortParsing: true,
      description: "bracelet detective statue drat so astride",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 9997,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 5350.48,
      socketIdleTimeout: 7886.33,
      socketEndingMaxWait: 2601.36,
      socketMaxLifespan: 3481.31,
      enableProxyHeader: true,
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
      staleChannelFlushMs: 8473.36,
      authTokens: [
        {
          token: "<value>",
          description: "giving whose since dramatize",
        },
      ],
      maxS2Sversion: "v4",
      description: "pull pliers enchanting petal upon beside throughout potentially",
      useFwdTimezone: false,
      dropControlFields: true,
      extractMetrics: true,
      compress: "disabled",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 9997,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 5350.48,
      socketIdleTimeout: 7886.33,
      socketEndingMaxWait: 2601.36,
      socketMaxLifespan: 3481.31,
      enableProxyHeader: true,
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
      staleChannelFlushMs: 8473.36,
      authTokens: [
        {
          token: "<value>",
          description: "giving whose since dramatize",
        },
      ],
      maxS2Sversion: "v4",
      description: "pull pliers enchanting petal upon beside throughout potentially",
      useFwdTimezone: false,
      dropControlFields: true,
      extractMetrics: true,
      compress: "disabled",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
          description: "till wring quiet lest",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 5722.67,
      maxRequestsPerSocket: 994230,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 8805.95,
      requestTimeout: 4182.75,
      socketTimeout: 9403.87,
      keepAliveTimeout: 3630.33,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
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
      ],
      staleChannelFlushMs: 3246.79,
      useFwdTimezone: false,
      dropControlFields: false,
      extractMetrics: true,
      accessControlAllowOrigin: [
        "<value 1>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: false,
      description: "abandoned sturdy phooey print charter quickly vol including towards preside",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
          description: "till wring quiet lest",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 5722.67,
      maxRequestsPerSocket: 994230,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 8805.95,
      requestTimeout: 4182.75,
      socketTimeout: 9403.87,
      keepAliveTimeout: 3630.33,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
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
      ],
      staleChannelFlushMs: 3246.79,
      useFwdTimezone: false,
      dropControlFields: false,
      extractMetrics: true,
      accessControlAllowOrigin: [
        "<value 1>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: false,
      description: "abandoned sturdy phooey print charter quickly vol including towards preside",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      searchHead: "https://localhost:8089",
      search: "index=main",
      earliest: "<value>",
      latest: "<value>",
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
      logLevel: "warn",
      requestTimeout: 8647.91,
      useRoundRobinDns: false,
      rejectUnauthorized: true,
      encoding: "<value>",
      keepAliveTime: 6738.52,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 3794.06,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "none",
        interval: 553.91,
        limit: 5974.25,
        multiplier: 8701.89,
        codes: [
          4196.21,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 914.38,
      authType: "textSecret",
      description: "mousse instead pish",
      username: "Leopoldo_Von64",
      password: "qMm6z9ebWtu4Kg_",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://altruistic-bench.org",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 8403.65,
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      searchHead: "https://localhost:8089",
      search: "index=main",
      earliest: "<value>",
      latest: "<value>",
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
      logLevel: "warn",
      requestTimeout: 8647.91,
      useRoundRobinDns: false,
      rejectUnauthorized: true,
      encoding: "<value>",
      keepAliveTime: 6738.52,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 3794.06,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "none",
        interval: 553.91,
        limit: 5974.25,
        multiplier: 8701.89,
        codes: [
          4196.21,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 914.38,
      authType: "textSecret",
      description: "mousse instead pish",
      username: "Leopoldo_Von64",
      password: "qMm6z9ebWtu4Kg_",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://altruistic-bench.org",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "<value>",
      tokenTimeoutSecs: 8403.65,
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      createQueue: true,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2718.53,
      maxMessages: 8513.81,
      visibilityTimeout: 5329.95,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pollTimeout: 5382.95,
      description: "embossing upliftingly crystallize until since furthermore story unexpectedly yum lotion",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      numReceivers: 8409.98,
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      createQueue: true,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 2718.53,
      maxMessages: 8513.81,
      visibilityTimeout: 5329.95,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pollTimeout: 5382.95,
      description: "embossing upliftingly crystallize until since furthermore story unexpectedly yum lotion",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      numReceivers: 8409.98,
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 514,
      tcpPort: 3675.95,
      maxBufferSize: 4796.25,
      ipWhitelistRegex: "<value>",
      timestampTimezone: "<value>",
      singleMsgUdpPackets: false,
      enableProxyHeader: true,
      keepFieldsList: [
        "<value 1>",
      ],
      octetCounting: false,
      inferFraming: true,
      strictlyInferOctetCounting: true,
      allowNonStandardAppName: true,
      maxActiveCxn: 7755.8,
      socketIdleTimeout: 9369.18,
      socketEndingMaxWait: 9803.14,
      socketMaxLifespan: 3466.71,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 1325.94,
      enableLoadBalancing: false,
      description: "where aw worth as",
      enableEnhancedProxyHeaderParsing: false,
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 514,
      tcpPort: 3675.95,
      maxBufferSize: 4796.25,
      ipWhitelistRegex: "<value>",
      timestampTimezone: "<value>",
      singleMsgUdpPackets: false,
      enableProxyHeader: true,
      keepFieldsList: [
        "<value 1>",
      ],
      octetCounting: false,
      inferFraming: true,
      strictlyInferOctetCounting: true,
      allowNonStandardAppName: true,
      maxActiveCxn: 7755.8,
      socketIdleTimeout: 9369.18,
      socketEndingMaxWait: 9803.14,
      socketMaxLifespan: 3466.71,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 1325.94,
      enableLoadBalancing: false,
      description: "where aw worth as",
      enableEnhancedProxyHeaderParsing: false,
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 606.13,
      host: {
        mode: "all",
        custom: {
          system: {
            mode: "all",
            processes: false,
          },
          cpu: {
            mode: "basic",
            perCpu: true,
            detail: true,
            time: false,
          },
          memory: {
            mode: "disabled",
            detail: true,
          },
          network: {
            mode: "basic",
            detail: false,
            protocols: true,
            devices: [
              "<value 1>",
              "<value 2>",
            ],
            perInterface: false,
          },
          disk: {
            mode: "custom",
            detail: true,
            inodes: false,
            devices: [
              "<value 1>",
            ],
            mountpoints: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            fstypes: [
              "<value 1>",
              "<value 2>",
            ],
            perDevice: true,
          },
        },
      },
      process: {
        sets: [
          {
            name: "<value>",
            filter: "<value>",
            includeChildren: true,
          },
        ],
      },
      container: {
        mode: "custom",
        dockerSocket: [
          "<value 1>",
        ],
        dockerTimeout: 7482.79,
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
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      description: "incidentally nearly with meanwhile what controvert parallel",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 606.13,
      host: {
        mode: "all",
        custom: {
          system: {
            mode: "all",
            processes: false,
          },
          cpu: {
            mode: "basic",
            perCpu: true,
            detail: true,
            time: false,
          },
          memory: {
            mode: "disabled",
            detail: true,
          },
          network: {
            mode: "basic",
            detail: false,
            protocols: true,
            devices: [
              "<value 1>",
              "<value 2>",
            ],
            perInterface: false,
          },
          disk: {
            mode: "custom",
            detail: true,
            inodes: false,
            devices: [
              "<value 1>",
            ],
            mountpoints: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            fstypes: [
              "<value 1>",
              "<value 2>",
            ],
            perDevice: true,
          },
        },
      },
      process: {
        sets: [
          {
            name: "<value>",
            filter: "<value>",
            includeChildren: true,
          },
        ],
      },
      container: {
        mode: "custom",
        dockerSocket: [
          "<value 1>",
        ],
        dockerTimeout: 7482.79,
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
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      description: "incidentally nearly with meanwhile what controvert parallel",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 4149.08,
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
          enable: false,
        },
        disk: {
          enable: false,
        },
        metadata: {
          enable: true,
        },
        routes: {
          enable: false,
        },
        dns: {
          enable: true,
        },
        user: {
          enable: true,
        },
        firewall: {
          enable: false,
        },
        services: {
          enable: false,
        },
        ports: {
          enable: false,
        },
        loginUsers: {
          enable: false,
        },
      },
      persistence: {
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      disableNativeModule: false,
      disableNativeLastLogModule: false,
      description: "readjust well-off although astonishing markup",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 4149.08,
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
          enable: false,
        },
        disk: {
          enable: false,
        },
        metadata: {
          enable: true,
        },
        routes: {
          enable: false,
        },
        dns: {
          enable: true,
        },
        user: {
          enable: true,
        },
        firewall: {
          enable: false,
        },
        services: {
          enable: false,
        },
        ports: {
          enable: false,
        },
        loginUsers: {
          enable: false,
        },
      },
      persistence: {
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      disableNativeModule: false,
      disableNativeLastLogModule: false,
      description: "readjust well-off although astonishing markup",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 148.57,
      socketIdleTimeout: 9507.37,
      socketEndingMaxWait: 2193.25,
      socketMaxLifespan: 7152.84,
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
      staleChannelFlushMs: 6104.31,
      enableHeader: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      description: "colossal versus openly hole gray",
      authToken: "<value>",
      authType: "manual",
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
      id: "tcp-source",
      type: "tcp",
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 148.57,
      socketIdleTimeout: 9507.37,
      socketEndingMaxWait: 2193.25,
      socketMaxLifespan: 7152.84,
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
      staleChannelFlushMs: 6104.31,
      enableHeader: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      description: "colossal versus openly hole gray",
      authToken: "<value>",
      authType: "manual",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 7160.03,
      socketIdleTimeout: 2237.64,
      socketEndingMaxWait: 8215.6,
      socketMaxLifespan: 9801.99,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: true,
      authType: "manual",
      description: "modulo oof since space knight considering through underneath",
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 7160.03,
      socketIdleTimeout: 2237.64,
      socketEndingMaxWait: 8215.6,
      socketMaxLifespan: 9801.99,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: true,
      authType: "manual",
      description: "modulo oof since space knight considering through underneath",
      authToken: "<value>",
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
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 5985,
      authMethod: "kerberos",
      tls: {
        disabled: true,
        rejectUnauthorized: false,
        requestCert: true,
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        commonNameRegex: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
        ocspCheck: true,
        keytab: "<value>",
        principal: "<value>",
        ocspCheckFailClose: true,
      },
      maxActiveReq: 8135.23,
      maxRequestsPerSocket: 421072,
      enableProxyHeader: false,
      captureHeaders: false,
      keepAliveTimeout: 3457.1,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      socketTimeout: 8648.92,
      caFingerprint: "<value>",
      keytab: "<value>",
      principal: "<value>",
      allowMachineIdMismatch: true,
      subscriptions: [
        {
          subscriptionName: "subscription-1",
          version: "<value>",
          contentFormat: "RenderedText",
          heartbeatInterval: 60,
          batchTimeout: 5,
          readExistingEvents: true,
          sendBookmarks: false,
          compress: true,
          targets: [],
          locale: "hi",
          querySelector: "simple",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          queries: [
            {
              path: "/var",
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
      description: "indolent joyfully despite flashy oof gigantic ramp",
      logFingerprintMismatch: false,
    },
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
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 5985,
      authMethod: "kerberos",
      tls: {
        disabled: true,
        rejectUnauthorized: false,
        requestCert: true,
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        commonNameRegex: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.3",
        ocspCheck: true,
        keytab: "<value>",
        principal: "<value>",
        ocspCheckFailClose: true,
      },
      maxActiveReq: 8135.23,
      maxRequestsPerSocket: 421072,
      enableProxyHeader: false,
      captureHeaders: false,
      keepAliveTimeout: 3457.1,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      socketTimeout: 8648.92,
      caFingerprint: "<value>",
      keytab: "<value>",
      principal: "<value>",
      allowMachineIdMismatch: true,
      subscriptions: [
        {
          subscriptionName: "subscription-1",
          version: "<value>",
          contentFormat: "RenderedText",
          heartbeatInterval: 60,
          batchTimeout: 5,
          readExistingEvents: true,
          sendBookmarks: false,
          compress: true,
          targets: [],
          locale: "hi",
          querySelector: "simple",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          queries: [
            {
              path: "/var",
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
      description: "indolent joyfully despite flashy oof gigantic ramp",
      logFingerprintMismatch: false,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      logNames: [
        "Application",
        "System",
      ],
      readMode: "oldest",
      eventFormat: "json",
      disableNativeModule: true,
      interval: 425.54,
      batchSize: 2331.79,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxEventBytes: 5699.32,
      description: "shabby testing excepting impish",
      disableJsonRendering: true,
      disableXmlRendering: false,
    },
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      logNames: [
        "Application",
        "System",
      ],
      readMode: "oldest",
      eventFormat: "json",
      disableNativeModule: true,
      interval: 425.54,
      batchSize: 2331.79,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxEventBytes: 5699.32,
      description: "shabby testing excepting impish",
      disableJsonRendering: true,
      disableXmlRendering: false,
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 8507.66,
      host: {
        mode: "basic",
        custom: {
          system: {
            mode: "basic",
            detail: true,
          },
          cpu: {
            mode: "disabled",
            perCpu: false,
            detail: true,
            time: true,
          },
          memory: {
            mode: "disabled",
            detail: false,
          },
          network: {
            mode: "all",
            detail: false,
            protocols: false,
            devices: [
              "<value 1>",
            ],
            perInterface: true,
          },
          disk: {
            mode: "custom",
            perVolume: true,
            detail: true,
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
            includeChildren: true,
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
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "gzip",
        destPath: "<value>",
      },
      disableNativeModule: true,
      description: "gah whenever wherever lovingly amongst afore",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      interval: 8507.66,
      host: {
        mode: "basic",
        custom: {
          system: {
            mode: "basic",
            detail: true,
          },
          cpu: {
            mode: "disabled",
            perCpu: false,
            detail: true,
            time: true,
          },
          memory: {
            mode: "disabled",
            detail: false,
          },
          network: {
            mode: "all",
            detail: false,
            protocols: false,
            devices: [
              "<value 1>",
            ],
            perInterface: true,
          },
          disk: {
            mode: "custom",
            perVolume: true,
            detail: true,
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
            includeChildren: true,
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
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "gzip",
        destPath: "<value>",
      },
      disableNativeModule: true,
      description: "gah whenever wherever lovingly amongst afore",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      authAudienceOverride: "<value>",
      clientId: "client-id",
      contentConfig: [],
      requestTimeout: 2514.26,
      keepAliveTime: 543.41,
      maxMissedKeepAlives: 450.96,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "none",
        interval: 553.91,
        limit: 5974.25,
        multiplier: 8701.89,
        codes: [
          4196.21,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "secret",
      description: "sashay testimonial ha book gee including exaggerate",
      clientSecret: "<value>",
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
      id: "wiz-source",
      type: "wiz",
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      authAudienceOverride: "<value>",
      clientId: "client-id",
      contentConfig: [],
      requestTimeout: 2514.26,
      keepAliveTime: 543.41,
      maxMissedKeepAlives: 450.96,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "none",
        interval: 553.91,
        limit: 5974.25,
        multiplier: 8701.89,
        codes: [
          4196.21,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "secret",
      description: "sashay testimonial ha book gee including exaggerate",
      clientSecret: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 7875.08,
      maxRequestsPerSocket: 254063,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 374.62,
      requestTimeout: 4729.29,
      socketTimeout: 5573.4,
      keepAliveTimeout: 4692.48,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 7833.46,
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
          description: "since duh against since drat which duh however",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "barring scout wherever",
    },
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 7875.08,
      maxRequestsPerSocket: 254063,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 374.62,
      requestTimeout: 4729.29,
      socketTimeout: 5573.4,
      keepAliveTimeout: 4692.48,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 7833.46,
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
          description: "since duh against since drat which duh however",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "barring scout wherever",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8088,
      authTokens: [
        {
          authType: "manual",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: false,
          description: "as tuxedo boohoo lotion crushing cinder yippee per",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 3247.05,
      maxRequestsPerSocket: 812431,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 4934.2,
      requestTimeout: 7370.68,
      socketTimeout: 2493.33,
      keepAliveTimeout: 2657.72,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
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
        "<value 2>",
      ],
      emitTokenMetrics: true,
      description: "pension stoop mmm atomize bah",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8088,
      authTokens: [
        {
          authType: "manual",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: false,
          description: "as tuxedo boohoo lotion crushing cinder yippee per",
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
        requestCert: true,
        rejectUnauthorized: false,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      maxActiveReq: 3247.05,
      maxRequestsPerSocket: 812431,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 4934.2,
      requestTimeout: 7370.68,
      socketTimeout: 2493.33,
      keepAliveTimeout: 2657.72,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
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
        "<value 2>",
      ],
      emitTokenMetrics: true,
      description: "pension stoop mmm atomize bah",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      filter: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "now snowplow because agreement forenenst shabby treble",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      filter: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "now snowplow because agreement forenenst shabby treble",
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      prefix: "<value>",
      fullFidelity: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "waterspout lest utterly minus pomelo sandy now zowie",
    },
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
      disabled: true,
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
        mode: "smart",
        maxBufferSize: 9959.95,
        commitFrequency: 4085.76,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/usr/obj",
        compress: "gzip",
        pqControls: {},
      },
      prefix: "<value>",
      fullFidelity: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "waterspout lest utterly minus pomelo sandy now zowie",
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
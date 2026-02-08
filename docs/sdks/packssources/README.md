# Packs.Sources

## Overview

### Available Operations

* [list](#list) - List all Sources within a Pack
* [create](#create) - Create a Source within a Pack
* [get](#get) - Get a Source within a Pack
* [update](#update) - Update a Source within a Pack
* [delete](#delete) - Delete a Source within a Pack

## list

Get a list of all Sources within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getInputSystemByPack" method="get" path="/p/{pack}/system/inputs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.list({
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
import { packsSourcesList } from "cribl-control-plane/funcs/packsSourcesList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesList(criblControlPlane, {
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInputSystemByPackRequest](../../models/operations/getinputsystembypackrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Create a new Source within the specified Pack.

### Example Usage: InputCreateExamplesAppscope

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesAppscope" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 4067.15,
      socketIdleTimeout: 1373.9,
      socketEndingMaxWait: 5473.3,
      socketMaxLifespan: 7426.73,
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
        "<value 3>",
      ],
      staleChannelFlushMs: 4309.15,
      enableUnixPath: true,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://negative-asset.info/",
      },
      persistence: {
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      authType: "secret",
      description: "char antagonize yuck",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      unixSocketPath: "<value>",
      unixSocketPerms: "<value>",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 4067.15,
      socketIdleTimeout: 1373.9,
      socketEndingMaxWait: 5473.3,
      socketMaxLifespan: 7426.73,
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
        "<value 3>",
      ],
      staleChannelFlushMs: 4309.15,
      enableUnixPath: true,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://negative-asset.info/",
      },
      persistence: {
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      authType: "secret",
      description: "char antagonize yuck",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      unixSocketPath: "<value>",
      unixSocketPerms: "<value>",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesAzureBlob

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesAzureBlob" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "azure-blob-queue",
      fileFilter: "<value>",
      visibilityTimeout: 392.7,
      numReceivers: 4859.56,
      maxMessages: 3343.22,
      servicePeriodSecs: 1830.39,
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
      staleChannelFlushMs: 1441.9,
      parquetChunkSizeMB: 2957.79,
      parquetChunkDownloadTimeout: 2885.91,
      authType: "clientSecret",
      description: "upright edible phooey",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "azure-blob-queue",
      fileFilter: "<value>",
      visibilityTimeout: 392.7,
      numReceivers: 4859.56,
      maxMessages: 3343.22,
      servicePeriodSecs: 1830.39,
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
      staleChannelFlushMs: 1441.9,
      parquetChunkSizeMB: 2957.79,
      parquetChunkDownloadTimeout: 2885.91,
      authType: "clientSecret",
      description: "upright edible phooey",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCloudflareHec

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesCloudflareHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
          description: "department skeletal where furthermore",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3564.02,
      maxRequestsPerSocket: 284259,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 2405.28,
      requestTimeout: 9545.22,
      socketTimeout: 9870.04,
      keepAliveTimeout: 8948.22,
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
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 3388.17,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      emitTokenMetrics: true,
      description: "till next tromp",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
          description: "department skeletal where furthermore",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3564.02,
      maxRequestsPerSocket: 284259,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 2405.28,
      requestTimeout: 9545.22,
      socketTimeout: 9870.04,
      keepAliveTimeout: 8948.22,
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
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 3388.17,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      emitTokenMetrics: true,
      description: "till next tromp",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCollection

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesCollection" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 151.84,
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
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 151.84,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesConfluentCloud

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesConfluentCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        disabled: false,
        schemaRegistryURL: "https://whispered-tenant.biz",
        connectionTimeout: 9267.71,
        requestTimeout: 3003.41,
        maxRetries: 2353.64,
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
          minVersion: "TLSv1.3",
          maxVersion: "TLSv1.2",
        },
      },
      connectionTimeout: 3182.79,
      requestTimeout: 9591.92,
      maxRetries: 6094.6,
      maxBackOff: 4715.53,
      initialBackoff: 9357.22,
      backoffRate: 3850.19,
      authenticationTimeout: 4628.93,
      reauthenticationThreshold: 9219.13,
      sasl: {
        disabled: true,
        username: "Manuel35",
        password: "jgFdWb9JWfVbd2_",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://superficial-carnival.info",
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
      sessionTimeout: 1754.7,
      rebalanceTimeout: 7519.65,
      heartbeatInterval: 580.78,
      autoCommitInterval: 1224.48,
      autoCommitThreshold: 2839.68,
      maxBytesPerPartition: 7884,
      maxBytes: 755.04,
      maxSocketErrors: 5844.08,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "fully although forecast what helplessly climb cinch ruin so until",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        disabled: false,
        schemaRegistryURL: "https://whispered-tenant.biz",
        connectionTimeout: 9267.71,
        requestTimeout: 3003.41,
        maxRetries: 2353.64,
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
          minVersion: "TLSv1.3",
          maxVersion: "TLSv1.2",
        },
      },
      connectionTimeout: 3182.79,
      requestTimeout: 9591.92,
      maxRetries: 6094.6,
      maxBackOff: 4715.53,
      initialBackoff: 9357.22,
      backoffRate: 3850.19,
      authenticationTimeout: 4628.93,
      reauthenticationThreshold: 9219.13,
      sasl: {
        disabled: true,
        username: "Manuel35",
        password: "jgFdWb9JWfVbd2_",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://superficial-carnival.info",
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
      sessionTimeout: 1754.7,
      rebalanceTimeout: 7519.65,
      heartbeatInterval: 580.78,
      autoCommitInterval: 1224.48,
      autoCommitThreshold: 2839.68,
      maxBytesPerPartition: 7884,
      maxBytes: 755.04,
      maxSocketErrors: 5844.08,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "fully although forecast what helplessly climb cinch ruin so until",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblHttp

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesCriblHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: false,
          description: "fishery upwardly instead ugh",
        },
      ],
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 6244.55,
      maxRequestsPerSocket: 706687,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 2037.88,
      requestTimeout: 4269.32,
      socketTimeout: 4941.17,
      keepAliveTimeout: 5873.6,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "geez hunt swing meh wonderfully zowie until under",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: false,
          description: "fishery upwardly instead ugh",
        },
      ],
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 6244.55,
      maxRequestsPerSocket: 706687,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 2037.88,
      requestTimeout: 4269.32,
      socketTimeout: 4941.17,
      keepAliveTimeout: 5873.6,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "geez hunt swing meh wonderfully zowie until under",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblLakeHttp

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesCriblLakeHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "cribl-lake-http-source",
      type: "cribl_lake_http",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 9620.69,
      maxRequestsPerSocket: 564019,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 1941.08,
      requestTimeout: 6284.43,
      socketTimeout: 1753.53,
      keepAliveTimeout: 8499.96,
      enableHealthCheck: false,
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
          description: "uncork bran trained crazy whenever cuddly hmph rich underpants sign",
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
            ],
          },
          elasticsearchMetadata: {
            enabled: false,
            defaultDataset: "<value>",
          },
        },
      ],
      description: "down etch but which incidentally yet exaggerate shakily zealous however",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "cribl-lake-http-source",
      type: "cribl_lake_http",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 9620.69,
      maxRequestsPerSocket: 564019,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 1941.08,
      requestTimeout: 6284.43,
      socketTimeout: 1753.53,
      keepAliveTimeout: 8499.96,
      enableHealthCheck: false,
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
          description: "uncork bran trained crazy whenever cuddly hmph rich underpants sign",
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
            ],
          },
          elasticsearchMetadata: {
            enabled: false,
            defaultDataset: "<value>",
          },
        },
      ],
      description: "down etch but which incidentally yet exaggerate shakily zealous however",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblTcp

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesCriblTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveCxn: 943.52,
      socketIdleTimeout: 5554.58,
      socketEndingMaxWait: 4509.95,
      socketMaxLifespan: 6813.36,
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
          description: "fishery upwardly instead ugh",
        },
      ],
      description: "shell notwithstanding courteous ecliptic singe victoriously despite destock",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveCxn: 943.52,
      socketIdleTimeout: 5554.58,
      socketEndingMaxWait: 4509.95,
      socketMaxLifespan: 6813.36,
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
          description: "fishery upwardly instead ugh",
        },
      ],
      description: "shell notwithstanding courteous ecliptic singe victoriously despite destock",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCrowdstrike

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesCrowdstrike" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      reuseConnections: false,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 8316.26,
      maxMessages: 9658.8,
      visibilityTimeout: 9951.09,
      numReceivers: 5254.22,
      socketTimeout: 405.72,
      skipOnError: true,
      includeSqsMetadata: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4092.74,
      enableSQSAssumeRole: false,
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
        enabled: false,
        retries: 4671.33,
      },
      pollTimeout: 5889.94,
      encoding: "<value>",
      description: "across sleepily likewise judicious besides hollow tightly till",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      reuseConnections: false,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 8316.26,
      maxMessages: 9658.8,
      visibilityTimeout: 9951.09,
      numReceivers: 5254.22,
      socketTimeout: 405.72,
      skipOnError: true,
      includeSqsMetadata: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4092.74,
      enableSQSAssumeRole: false,
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
        enabled: false,
        retries: 4671.33,
      },
      pollTimeout: 5889.94,
      encoding: "<value>",
      description: "across sleepily likewise judicious besides hollow tightly till",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesDatadogAgent

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesDatadogAgent" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8126,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 8526.6,
      maxRequestsPerSocket: 179677,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 8204.67,
      requestTimeout: 6798.87,
      socketTimeout: 9820.17,
      keepAliveTimeout: 7054.96,
      enableHealthCheck: true,
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
      description: "howl thunderbolt upright noisily indeed wherever eek disapprove up",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8126,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 8526.6,
      maxRequestsPerSocket: 179677,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 8204.67,
      requestTimeout: 6798.87,
      socketTimeout: 9820.17,
      keepAliveTimeout: 7054.96,
      enableHealthCheck: true,
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
      description: "howl thunderbolt upright noisily indeed wherever eek disapprove up",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesDatagen

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesDatagen" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "datagen-source",
      type: "datagen",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      description: "qua draft lively essence rout converse",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "datagen-source",
      type: "datagen",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      description: "qua draft lively essence rout converse",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesEdgePrometheus

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesEdgePrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "edge-prometheus-source",
      type: "edge_prometheus",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
      ],
      discoveryType: "static",
      interval: 60,
      timeout: 7408.69,
      persistence: {
        enable: true,
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
      authType: "manual",
      description: "furthermore unusual wrong intrepid hassle",
      targets: [
        {
          protocol: "https",
          host: "localhost",
          port: 1428.05,
          path: "/sbin",
        },
      ],
      recordType: "A",
      scrapePort: 992.1,
      nameList: [
        "<value 1>",
      ],
      scrapeProtocol: "http",
      scrapePath: "<value>",
      awsAuthenticationMethod: "<value>",
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
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1182.73,
      scrapeProtocolExpr: "<value>",
      scrapePortExpr: "<value>",
      scrapePathExpr: "<value>",
      podFilter: [
        {
          filter: "<value>",
          description: "oh personalise dense ew",
        },
      ],
      username: "Maynard.Treutel",
      password: "zCpx0LXOIySJNah",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "edge-prometheus-source",
      type: "edge_prometheus",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
      ],
      discoveryType: "static",
      interval: 60,
      timeout: 7408.69,
      persistence: {
        enable: true,
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
      authType: "manual",
      description: "furthermore unusual wrong intrepid hassle",
      targets: [
        {
          protocol: "https",
          host: "localhost",
          port: 1428.05,
          path: "/sbin",
        },
      ],
      recordType: "A",
      scrapePort: 992.1,
      nameList: [
        "<value 1>",
      ],
      scrapeProtocol: "http",
      scrapePath: "<value>",
      awsAuthenticationMethod: "<value>",
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
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1182.73,
      scrapeProtocolExpr: "<value>",
      scrapePortExpr: "<value>",
      scrapePathExpr: "<value>",
      podFilter: [
        {
          filter: "<value>",
          description: "oh personalise dense ew",
        },
      ],
      username: "Maynard.Treutel",
      password: "zCpx0LXOIySJNah",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesElastic

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesElastic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "elastic-source",
      type: "elastic",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "localhost",
      port: 9200,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 9437.89,
      maxRequestsPerSocket: 210318,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 5682.82,
      requestTimeout: 2396.55,
      socketTimeout: 3119.33,
      keepAliveTimeout: 8876.8,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
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
        authType: "secret",
        username: "Kailyn.Johns",
        password: "IiQ9TSKVRpG5ATK",
        credentialsSecret: "<value>",
        url: "https://stupendous-defendant.biz",
        rejectUnauthorized: true,
        removeHeaders: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        timeoutSec: 3546.48,
        __template_url: "https://heavenly-labourer.name/",
      },
      description: "but by on reproachfully around",
      username: "Renee.Watsica",
      password: "lCmV2k7rNV7mNmY",
      credentialsSecret: "<value>",
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      customAPIVersion: "<value>",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "elastic-source",
      type: "elastic",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "localhost",
      port: 9200,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 9437.89,
      maxRequestsPerSocket: 210318,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 5682.82,
      requestTimeout: 2396.55,
      socketTimeout: 3119.33,
      keepAliveTimeout: 8876.8,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
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
        authType: "secret",
        username: "Kailyn.Johns",
        password: "IiQ9TSKVRpG5ATK",
        credentialsSecret: "<value>",
        url: "https://stupendous-defendant.biz",
        rejectUnauthorized: true,
        removeHeaders: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        timeoutSec: 3546.48,
        __template_url: "https://heavenly-labourer.name/",
      },
      description: "but by on reproachfully around",
      username: "Renee.Watsica",
      password: "lCmV2k7rNV7mNmY",
      credentialsSecret: "<value>",
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      customAPIVersion: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesEventhub

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesEventhub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "eventhub-source",
      type: "eventhub",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      fromBeginning: false,
      connectionTimeout: 4349.61,
      requestTimeout: 230.27,
      maxRetries: 8679.95,
      maxBackOff: 5181.04,
      initialBackoff: 8445.13,
      backoffRate: 3233.54,
      authenticationTimeout: 7620.47,
      reauthenticationThreshold: 3146.61,
      sasl: {
        disabled: false,
        authType: "secret",
        password: "4bxvQx4lzcRAeef",
        textSecret: "<value>",
        mechanism: "plain",
        username: "Jeromy38",
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
        disabled: false,
        rejectUnauthorized: true,
      },
      sessionTimeout: 5939.06,
      rebalanceTimeout: 6380.03,
      heartbeatInterval: 4781.02,
      autoCommitInterval: 7381.47,
      autoCommitThreshold: 64.46,
      maxBytesPerPartition: 4469.28,
      maxBytes: 5471.94,
      maxSocketErrors: 4320.13,
      minimizeDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "slake lest through genuine",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "eventhub-source",
      type: "eventhub",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      fromBeginning: false,
      connectionTimeout: 4349.61,
      requestTimeout: 230.27,
      maxRetries: 8679.95,
      maxBackOff: 5181.04,
      initialBackoff: 8445.13,
      backoffRate: 3233.54,
      authenticationTimeout: 7620.47,
      reauthenticationThreshold: 3146.61,
      sasl: {
        disabled: false,
        authType: "secret",
        password: "4bxvQx4lzcRAeef",
        textSecret: "<value>",
        mechanism: "plain",
        username: "Jeromy38",
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
        disabled: false,
        rejectUnauthorized: true,
      },
      sessionTimeout: 5939.06,
      rebalanceTimeout: 6380.03,
      heartbeatInterval: 4781.02,
      autoCommitInterval: 7381.47,
      autoCommitThreshold: 64.46,
      maxBytesPerPartition: 4469.28,
      maxBytes: 5471.94,
      maxSocketErrors: 4320.13,
      minimizeDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "slake lest through genuine",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesExec

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesExec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      command: "echo \"Hello World\"",
      retries: 2019.1,
      scheduleType: "cronSchedule",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 1787.76,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "place emergent off convection solemnly",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      command: "echo \"Hello World\"",
      retries: 2019.1,
      scheduleType: "cronSchedule",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 1787.76,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "place emergent off convection solemnly",
      interval: 60,
      cronSchedule: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesFile

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesFile" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "file-source",
      type: "file",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      mode: "manual",
      interval: 4379.03,
      filenames: [
        "<value 1>",
      ],
      filterArchivedFiles: true,
      tailOnly: false,
      idleTimeout: 3075.25,
      minAgeDur: "<value>",
      maxAgeDur: "<value>",
      checkFileModTime: false,
      forceText: false,
      hashLen: 5836,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 3861.8,
      description: "how why issue catalyze charter yippee bossy whether or",
      path: "/usr/X11R6",
      depth: 5039.93,
      suppressMissingPathErrors: true,
      deleteFiles: true,
      saltHash: true,
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "file-source",
      type: "file",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      mode: "manual",
      interval: 4379.03,
      filenames: [
        "<value 1>",
      ],
      filterArchivedFiles: true,
      tailOnly: false,
      idleTimeout: 3075.25,
      minAgeDur: "<value>",
      maxAgeDur: "<value>",
      checkFileModTime: false,
      forceText: false,
      hashLen: 5836,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 3861.8,
      description: "how why issue catalyze charter yippee bossy whether or",
      path: "/usr/X11R6",
      depth: 5039.93,
      suppressMissingPathErrors: true,
      deleteFiles: true,
      saltHash: true,
      includeUnidentifiableBinary: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesFirehose

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesFirehose" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 1514.31,
      maxRequestsPerSocket: 671022,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 916.65,
      requestTimeout: 7315.93,
      socketTimeout: 6265.12,
      keepAliveTimeout: 1678.61,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "hence drat zowie avalanche within",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 1514.31,
      maxRequestsPerSocket: 671022,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 916.65,
      requestTimeout: 7315.93,
      socketTimeout: 6265.12,
      keepAliveTimeout: 1678.61,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "hence drat zowie avalanche within",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesGooglePubsub

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesGooglePubsub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      topicName: "my-topic",
      subscriptionName: "my-subscription",
      monitorSubscription: true,
      createTopic: true,
      createSubscription: true,
      region: "<value>",
      googleAuthMethod: "secret",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxBacklog: 6655.81,
      concurrency: 4935.62,
      requestTimeout: 7722.42,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "longingly but reflate quarrelsomely what fort consequently where vainly",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      topicName: "my-topic",
      subscriptionName: "my-subscription",
      monitorSubscription: true,
      createTopic: true,
      createSubscription: true,
      region: "<value>",
      googleAuthMethod: "secret",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxBacklog: 6655.81,
      concurrency: 4935.62,
      requestTimeout: 7722.42,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "longingly but reflate quarrelsomely what fort consequently where vainly",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesGrafana

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesGrafana" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "grafana-source",
      type: "grafana",
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 8133.81,
      maxRequestsPerSocket: 805103,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 4441.2,
      requestTimeout: 1674.52,
      socketTimeout: 5792.26,
      keepAliveTimeout: 7741.83,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/api/prom/push",
      lokiAPI: "<value>",
      prometheusAuth: {
        authType: "none",
        username: "Fatima.Kris47",
        password: "CZTg7rFPXLjvAcC",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
      },
      lokiAuth: {
        authType: "none",
        username: "Susana_Howe99",
        password: "G_sfkfABctd6CGD",
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
      description: "bar once heighten gadzooks transparency",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "grafana-source",
      type: "grafana",
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 8133.81,
      maxRequestsPerSocket: 805103,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 4441.2,
      requestTimeout: 1674.52,
      socketTimeout: 5792.26,
      keepAliveTimeout: 7741.83,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/api/prom/push",
      lokiAPI: "<value>",
      prometheusAuth: {
        authType: "none",
        username: "Fatima.Kris47",
        password: "CZTg7rFPXLjvAcC",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
      },
      lokiAuth: {
        authType: "none",
        username: "Susana_Howe99",
        password: "G_sfkfABctd6CGD",
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
      description: "bar once heighten gadzooks transparency",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesHttp

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "http-source",
      type: "http",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 2923.73,
      maxRequestsPerSocket: 410183,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 8670.91,
      requestTimeout: 6015.95,
      socketTimeout: 4662.35,
      keepAliveTimeout: 5921.62,
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
          description: "oh scrutinise brr",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "instead schlep omelet furthermore considering than",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "http-source",
      type: "http",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        "<value 1>",
      ],
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 2923.73,
      maxRequestsPerSocket: 410183,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 8670.91,
      requestTimeout: 6015.95,
      socketTimeout: 4662.35,
      keepAliveTimeout: 5921.62,
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
          description: "oh scrutinise brr",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "instead schlep omelet furthermore considering than",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesHttpRaw

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesHttpRaw" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 4600.16,
      maxRequestsPerSocket: 766771,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 8070.78,
      requestTimeout: 2660.32,
      socketTimeout: 4255.51,
      keepAliveTimeout: 3248,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 9845.86,
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
          description: "oh scrutinise brr",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "ideal almost which usually tense aha lustrous old-fashioned toward",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 4600.16,
      maxRequestsPerSocket: 766771,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 8070.78,
      requestTimeout: 2660.32,
      socketTimeout: 4255.51,
      keepAliveTimeout: 3248,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 9845.86,
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
          description: "oh scrutinise brr",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "ideal almost which usually tense aha lustrous old-fashioned toward",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesJournalFiles

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesJournalFiles" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      path: "/var/log/journal",
      interval: 892.19,
      journals: [
        "system",
      ],
      rules: [
        {
          filter: "<value>",
          description: "folklore minus but haversack",
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
      description: "tennis solemnly willfully judgementally",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      path: "/var/log/journal",
      interval: 892.19,
      journals: [
        "system",
      ],
      rules: [
        {
          filter: "<value>",
          description: "folklore minus but haversack",
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
      description: "tennis solemnly willfully judgementally",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKafka

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesKafka" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "kafka-source",
      type: "kafka",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      fromBeginning: false,
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://whispered-tenant.biz",
        connectionTimeout: 9267.71,
        requestTimeout: 3003.41,
        maxRetries: 2353.64,
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
          minVersion: "TLSv1.3",
          maxVersion: "TLSv1.2",
        },
      },
      connectionTimeout: 1118.76,
      requestTimeout: 8055.82,
      maxRetries: 1085.05,
      maxBackOff: 8751.27,
      initialBackoff: 3094.3,
      backoffRate: 3201.03,
      authenticationTimeout: 8199.05,
      reauthenticationThreshold: 3324.25,
      sasl: {
        disabled: true,
        username: "Manuel35",
        password: "jgFdWb9JWfVbd2_",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://superficial-carnival.info",
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
      sessionTimeout: 2146.78,
      rebalanceTimeout: 3517.69,
      heartbeatInterval: 91.15,
      autoCommitInterval: 3927.43,
      autoCommitThreshold: 8524.8,
      maxBytesPerPartition: 5467.21,
      maxBytes: 5559.15,
      maxSocketErrors: 343.9,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "surprisingly aw suddenly hamburger regularly mushy above infamous farmer",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "kafka-source",
      type: "kafka",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      fromBeginning: false,
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://whispered-tenant.biz",
        connectionTimeout: 9267.71,
        requestTimeout: 3003.41,
        maxRetries: 2353.64,
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
          minVersion: "TLSv1.3",
          maxVersion: "TLSv1.2",
        },
      },
      connectionTimeout: 1118.76,
      requestTimeout: 8055.82,
      maxRetries: 1085.05,
      maxBackOff: 8751.27,
      initialBackoff: 3094.3,
      backoffRate: 3201.03,
      authenticationTimeout: 8199.05,
      reauthenticationThreshold: 3324.25,
      sasl: {
        disabled: true,
        username: "Manuel35",
        password: "jgFdWb9JWfVbd2_",
        authType: "manual",
        credentialsSecret: "<value>",
        mechanism: "plain",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: false,
        tokenUrl: "https://superficial-carnival.info",
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
      sessionTimeout: 2146.78,
      rebalanceTimeout: 3517.69,
      heartbeatInterval: 91.15,
      autoCommitInterval: 3927.43,
      autoCommitThreshold: 8524.8,
      maxBytesPerPartition: 5467.21,
      maxBytes: 5559.15,
      maxSocketErrors: 343.9,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "surprisingly aw suddenly hamburger regularly mushy above infamous farmer",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKinesis

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesKinesis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      streamName: "my-stream",
      serviceInterval: 7553.35,
      shardExpr: "<value>",
      shardIteratorType: "LATEST",
      payloadFormat: "cribl",
      getRecordsLimit: 7819.39,
      getRecordsLimitTotal: 9515.83,
      loadBalancingAlgorithm: "ConsistentHashing",
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
      durationSeconds: 229.9,
      verifyKPLCheckSums: false,
      avoidDuplicates: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "if unimpressively per gape whoever",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      streamName: "my-stream",
      serviceInterval: 7553.35,
      shardExpr: "<value>",
      shardIteratorType: "LATEST",
      payloadFormat: "cribl",
      getRecordsLimit: 7819.39,
      getRecordsLimitTotal: 9515.83,
      loadBalancingAlgorithm: "ConsistentHashing",
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
      durationSeconds: 229.9,
      verifyKPLCheckSums: false,
      avoidDuplicates: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "if unimpressively per gape whoever",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeEvents

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesKubeEvents" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      rules: [
        {
          filter: "<value>",
          description: "which mask labourer boo willfully trust geez lifestyle",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "save portly phooey epic however brr in yippee unscramble which",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      rules: [
        {
          filter: "<value>",
          description: "which mask labourer boo willfully trust geez lifestyle",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "save portly phooey epic however brr in yippee unscramble which",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeLogs

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesKubeLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "kube-logs-source",
      type: "kube_logs",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 3479.17,
      rules: [
        {
          filter: "<value>",
          description: "times multicolored subdued however gadzooks until",
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
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "gzip",
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 1781.58,
      enableLoadBalancing: true,
      description: "even and worth thorny phooey hence provided jovially acidly",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "kube-logs-source",
      type: "kube_logs",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 3479.17,
      rules: [
        {
          filter: "<value>",
          description: "times multicolored subdued however gadzooks until",
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
        enable: true,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "gzip",
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 1781.58,
      enableLoadBalancing: true,
      description: "even and worth thorny phooey hence provided jovially acidly",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeMetrics

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesKubeMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 5521.77,
      rules: [
        {
          filter: "<value>",
          description: "which mask labourer boo willfully trust geez lifestyle",
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
        compress: "gzip",
        destPath: "<value>",
      },
      description: "duh under supposing provided jagged draft",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 5521.77,
      rules: [
        {
          filter: "<value>",
          description: "which mask labourer boo willfully trust geez lifestyle",
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
        compress: "gzip",
        destPath: "<value>",
      },
      description: "duh under supposing provided jagged draft",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesLoki

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesLoki" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "loki-source",
      type: "loki",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 1923.64,
      maxRequestsPerSocket: 794423,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 7400.48,
      requestTimeout: 1090.76,
      socketTimeout: 3664.73,
      keepAliveTimeout: 2149.4,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      lokiAPI: "/loki/api/v1/push",
      authType: "credentialsSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "atop inasmuch misfire wherever woefully hassle fooey quixotic incidentally outgoing",
      username: "Mae_Hills",
      password: "QFnve0qhIICZqeP",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "loki-source",
      type: "loki",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 1923.64,
      maxRequestsPerSocket: 794423,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 7400.48,
      requestTimeout: 1090.76,
      socketTimeout: 3664.73,
      keepAliveTimeout: 2149.4,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      lokiAPI: "/loki/api/v1/push",
      authType: "credentialsSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "atop inasmuch misfire wherever woefully hassle fooey quixotic incidentally outgoing",
      username: "Mae_Hills",
      password: "QFnve0qhIICZqeP",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesMetrics

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 8125,
      tcpPort: 676.54,
      maxBufferSize: 5235.22,
      ipWhitelistRegex: "<value>",
      enableProxyHeader: true,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
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
      udpSocketRxBufSize: 5038.93,
      description: "sad behind fooey",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 8125,
      tcpPort: 676.54,
      maxBufferSize: 5235.22,
      ipWhitelistRegex: "<value>",
      enableProxyHeader: true,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
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
      udpSocketRxBufSize: 5038.93,
      description: "sad behind fooey",
      __template_host: "<value>",
      __template_udpPort: "<value>",
      __template_tcpPort: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesModelDrivenTelemetry

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesModelDrivenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 57000,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
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
      maxActiveCxn: 8763.82,
      shutdownTimeoutMs: 8171.07,
      description: "digestive throughout times allocation",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 57000,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
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
      maxActiveCxn: 8763.82,
      shutdownTimeoutMs: 8171.07,
      description: "digestive throughout times allocation",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesMsk

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesMsk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "msk-source",
      type: "msk",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      sessionTimeout: 8237.46,
      rebalanceTimeout: 8656.57,
      heartbeatInterval: 8074.45,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://whispered-tenant.biz",
        connectionTimeout: 9267.71,
        requestTimeout: 3003.41,
        maxRetries: 2353.64,
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
          minVersion: "TLSv1.3",
          maxVersion: "TLSv1.2",
        },
      },
      connectionTimeout: 34.13,
      requestTimeout: 132.9,
      maxRetries: 9598.76,
      maxBackOff: 6833.61,
      initialBackoff: 8570.89,
      backoffRate: 1348.49,
      authenticationTimeout: 8151.36,
      reauthenticationThreshold: 2190.53,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4682.21,
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
      autoCommitInterval: 4515.21,
      autoCommitThreshold: 3701.3,
      maxBytesPerPartition: 8908.76,
      maxBytes: 7536.45,
      maxSocketErrors: 657.31,
      description: "inasmuch log yahoo following overconfidently",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "msk-source",
      type: "msk",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      sessionTimeout: 8237.46,
      rebalanceTimeout: 8656.57,
      heartbeatInterval: 8074.45,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      kafkaSchemaRegistry: {
        disabled: false,
        schemaRegistryURL: "https://whispered-tenant.biz",
        connectionTimeout: 9267.71,
        requestTimeout: 3003.41,
        maxRetries: 2353.64,
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
          minVersion: "TLSv1.3",
          maxVersion: "TLSv1.2",
        },
      },
      connectionTimeout: 34.13,
      requestTimeout: 132.9,
      maxRetries: 9598.76,
      maxBackOff: 6833.61,
      initialBackoff: 8570.89,
      backoffRate: 1348.49,
      authenticationTimeout: 8151.36,
      reauthenticationThreshold: 2190.53,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4682.21,
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
      autoCommitInterval: 4515.21,
      autoCommitThreshold: 3701.3,
      maxBytesPerPartition: 8908.76,
      maxBytes: 7536.45,
      maxSocketErrors: 657.31,
      description: "inasmuch log yahoo following overconfidently",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesNetflow

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesNetflow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 2055,
      enablePassThrough: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      udpSocketRxBufSize: 8288.9,
      templateCacheMinutes: 8325.93,
      v5Enabled: false,
      v9Enabled: false,
      ipfixEnabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "from majestically doubtfully oil warmly minor brr populist around",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 2055,
      enablePassThrough: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      udpSocketRxBufSize: 8288.9,
      templateCacheMinutes: 8325.93,
      v5Enabled: false,
      v9Enabled: false,
      ipfixEnabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "from majestically doubtfully oil warmly minor brr populist around",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365Mgmt

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesOffice365Mgmt" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 3387.92,
      keepAliveTime: 4929.21,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 9195.66,
      ttl: "<value>",
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
          description: "ha weakly spew",
          interval: 8033.57,
          logLevel: "info",
          enabled: false,
        },
      ],
      ingestionLag: 3877.59,
      retryRules: {
        type: "<value>",
        interval: 5264.85,
        limit: 6534.4,
        multiplier: 8293.41,
        codes: [
          904.63,
          5568.41,
          3092.71,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      authType: "secret",
      description: "hidden viciously next meanwhile eek ornate inasmuch snack ugh gastropod",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 3387.92,
      keepAliveTime: 4929.21,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 9195.66,
      ttl: "<value>",
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
          description: "ha weakly spew",
          interval: 8033.57,
          logLevel: "info",
          enabled: false,
        },
      ],
      ingestionLag: 3877.59,
      retryRules: {
        type: "<value>",
        interval: 5264.85,
        limit: 6534.4,
        multiplier: 8293.41,
        codes: [
          904.63,
          5568.41,
          3092.71,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      authType: "secret",
      description: "hidden viciously next meanwhile eek ornate inasmuch snack ugh gastropod",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365MsgTrace

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesOffice365MsgTrace" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "office365-msg-trace-source",
      type: "office365_msg_trace",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
      startDate: "<value>",
      endDate: "<value>",
      timeout: 5340.88,
      disableTimeFilter: true,
      authType: "oauthCert",
      rescheduleDroppedTasks: false,
      maxTaskReschedule: 4406.61,
      logLevel: "warn",
      jobTimeout: "<value>",
      keepAliveTime: 5696.09,
      maxMissedKeepAlives: 230.55,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 5264.85,
        limit: 6534.4,
        multiplier: 8293.41,
        codes: [
          904.63,
          5568.41,
          3092.71,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      description: "furthermore down poorly sympathetically upward reckon throughout upbeat",
      username: "Laurel_Blick",
      password: "072ttZrnObrdapj",
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
      __template_url: "https://awful-premium.biz/",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "office365-msg-trace-source",
      type: "office365_msg_trace",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
      startDate: "<value>",
      endDate: "<value>",
      timeout: 5340.88,
      disableTimeFilter: true,
      authType: "oauthCert",
      rescheduleDroppedTasks: false,
      maxTaskReschedule: 4406.61,
      logLevel: "warn",
      jobTimeout: "<value>",
      keepAliveTime: 5696.09,
      maxMissedKeepAlives: 230.55,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 5264.85,
        limit: 6534.4,
        multiplier: 8293.41,
        codes: [
          904.63,
          5568.41,
          3092.71,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      description: "furthermore down poorly sympathetically upward reckon throughout upbeat",
      username: "Laurel_Blick",
      password: "072ttZrnObrdapj",
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
      __template_url: "https://awful-premium.biz/",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_resource: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365Service

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesOffice365Service" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "office365-service-source",
      type: "office365_service",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      planType: "gcc_high",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 2195.32,
      keepAliveTime: 1338.36,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 9533.97,
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
          description: "even however and furthermore across seldom",
          interval: 3918.72,
          logLevel: "info",
          enabled: true,
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 5264.85,
        limit: 6534.4,
        multiplier: 8293.41,
        codes: [
          904.63,
          5568.41,
          3092.71,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      authType: "manual",
      description: "under oof limp",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "office365-service-source",
      type: "office365_service",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      planType: "gcc_high",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 2195.32,
      keepAliveTime: 1338.36,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 9533.97,
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
          description: "even however and furthermore across seldom",
          interval: 3918.72,
          logLevel: "info",
          enabled: true,
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 5264.85,
        limit: 6534.4,
        multiplier: 8293.41,
        codes: [
          904.63,
          5568.41,
          3092.71,
        ],
        enableHeader: true,
        retryConnectTimeout: true,
        retryConnectReset: true,
      },
      authType: "manual",
      description: "under oof limp",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOpenTelemetry

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesOpenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 4317,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 9978.8,
      maxRequestsPerSocket: 468468,
      enableProxyHeader: "<value>",
      captureHeaders: "<value>",
      activityLogSampleRate: "<value>",
      requestTimeout: 5195.63,
      socketTimeout: 8676.23,
      keepAliveTimeout: 1700.29,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      protocol: "grpc",
      extractSpans: true,
      extractMetrics: true,
      otlpVersion: "0.10.0",
      authType: "credentialsSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 4066.76,
      description: "as upon angrily where saloon",
      username: "Price39",
      password: "mexmzlatRteovE4",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 4317,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 9978.8,
      maxRequestsPerSocket: 468468,
      enableProxyHeader: "<value>",
      captureHeaders: "<value>",
      activityLogSampleRate: "<value>",
      requestTimeout: 5195.63,
      socketTimeout: 8676.23,
      keepAliveTimeout: 1700.29,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      protocol: "grpc",
      extractSpans: true,
      extractMetrics: true,
      otlpVersion: "0.10.0",
      authType: "credentialsSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 4066.76,
      description: "as upon angrily where saloon",
      username: "Price39",
      password: "mexmzlatRteovE4",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesPrometheus

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesPrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
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
      timeout: 8990.29,
      keepAliveTime: 2413.24,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 2207.78,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "manual",
      description: "bah while slowly silently freely till easily pleasant tuba nimble",
      targetList: [
        "http://localhost:9090/metrics",
      ],
      recordType: "SRV",
      scrapePort: 7354.46,
      nameList: [
        "<value 1>",
      ],
      scrapeProtocol: "http",
      scrapePath: "<value>",
      awsAuthenticationMethod: "<value>",
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
      reuseConnections: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 234.82,
      username: "Rudolph38",
      password: "yrfYugDnmTApLUW",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
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
      timeout: 8990.29,
      keepAliveTime: 2413.24,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 2207.78,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "manual",
      description: "bah while slowly silently freely till easily pleasant tuba nimble",
      targetList: [
        "http://localhost:9090/metrics",
      ],
      recordType: "SRV",
      scrapePort: 7354.46,
      nameList: [
        "<value 1>",
      ],
      scrapeProtocol: "http",
      scrapePath: "<value>",
      awsAuthenticationMethod: "<value>",
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
      reuseConnections: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 234.82,
      username: "Rudolph38",
      password: "yrfYugDnmTApLUW",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesPrometheusRw

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesPrometheusRw" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 9705.51,
      maxRequestsPerSocket: 176513,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 7116.75,
      requestTimeout: 8537.96,
      socketTimeout: 8588.28,
      keepAliveTimeout: 4546.09,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/write",
      authType: "textSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "justly nearly wide exotic orchid hyphenation compassionate",
      username: "Zetta_Brown",
      password: "IXm7iij7m1Wyzo8",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 9705.51,
      maxRequestsPerSocket: 176513,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 7116.75,
      requestTimeout: 8537.96,
      socketTimeout: 8588.28,
      keepAliveTimeout: 4546.09,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/write",
      authType: "textSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "justly nearly wide exotic orchid hyphenation compassionate",
      username: "Zetta_Brown",
      password: "IXm7iij7m1Wyzo8",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesRawUdp

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesRawUdp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 514,
      maxBufferSize: 2291.05,
      ipWhitelistRegex: "<value>",
      singleMsgUdpPackets: false,
      ingestRawBytes: false,
      udpSocketRxBufSize: 2413.15,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "partially blacken afore with while",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 514,
      maxBufferSize: 2291.05,
      ipWhitelistRegex: "<value>",
      singleMsgUdpPackets: false,
      ingestRawBytes: false,
      udpSocketRxBufSize: 2413.15,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "partially blacken afore with while",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesS3

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 7076.81,
      maxMessages: 7803.94,
      visibilityTimeout: 7303.92,
      numReceivers: 3698.43,
      socketTimeout: 9690.4,
      skipOnError: true,
      includeSqsMetadata: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 6057.94,
      enableSQSAssumeRole: false,
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
      parquetChunkSizeMB: 2450.38,
      parquetChunkDownloadTimeout: 3030.09,
      checkpointing: {
        enabled: false,
        retries: 4671.33,
      },
      pollTimeout: 8412.37,
      encoding: "<value>",
      tagAfterProcessing: true,
      description: "during towards near demobilise below well phooey dissemble",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 7076.81,
      maxMessages: 7803.94,
      visibilityTimeout: 7303.92,
      numReceivers: 3698.43,
      socketTimeout: 9690.4,
      skipOnError: true,
      includeSqsMetadata: true,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 6057.94,
      enableSQSAssumeRole: false,
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
      parquetChunkSizeMB: 2450.38,
      parquetChunkDownloadTimeout: 3030.09,
      checkpointing: {
        enabled: false,
        retries: 4671.33,
      },
      pollTimeout: 8412.37,
      encoding: "<value>",
      tagAfterProcessing: true,
      description: "during towards near demobilise below well phooey dissemble",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesS3Inventory

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesS3Inventory" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      reuseConnections: false,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 226.97,
      maxMessages: 5381.76,
      visibilityTimeout: 1355.98,
      numReceivers: 5479.5,
      socketTimeout: 2214.93,
      skipOnError: true,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 7827.34,
      enableSQSAssumeRole: false,
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
      parquetChunkSizeMB: 2284.7,
      parquetChunkDownloadTimeout: 9955.15,
      checkpointing: {
        enabled: false,
        retries: 4671.33,
      },
      pollTimeout: 1538.41,
      checksumSuffix: "<value>",
      maxManifestSizeKB: 695435,
      validateInventoryFiles: false,
      description: "lazy selfishly handsome generously delightfully league incline even",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      reuseConnections: false,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 226.97,
      maxMessages: 5381.76,
      visibilityTimeout: 1355.98,
      numReceivers: 5479.5,
      socketTimeout: 2214.93,
      skipOnError: true,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 7827.34,
      enableSQSAssumeRole: false,
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
      parquetChunkSizeMB: 2284.7,
      parquetChunkDownloadTimeout: 9955.15,
      checkpointing: {
        enabled: false,
        retries: 4671.33,
      },
      pollTimeout: 1538.41,
      checksumSuffix: "<value>",
      maxManifestSizeKB: 695435,
      validateInventoryFiles: false,
      description: "lazy selfishly handsome generously delightfully league incline even",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSecurityLake

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesSecurityLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 3772.92,
      maxMessages: 649.05,
      visibilityTimeout: 1604.58,
      numReceivers: 4769.83,
      socketTimeout: 3241.98,
      skipOnError: false,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4793.74,
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
      parquetChunkSizeMB: 7648.69,
      parquetChunkDownloadTimeout: 7644.31,
      checkpointing: {
        enabled: false,
        retries: 4671.33,
      },
      pollTimeout: 6071.08,
      encoding: "<value>",
      description: "uniform though knotty oh certainly courteous interchange oh vivacious",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 3772.92,
      maxMessages: 649.05,
      visibilityTimeout: 1604.58,
      numReceivers: 4769.83,
      socketTimeout: 3241.98,
      skipOnError: false,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 4793.74,
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
      parquetChunkSizeMB: 7648.69,
      parquetChunkDownloadTimeout: 7644.31,
      checkpointing: {
        enabled: false,
        retries: 4671.33,
      },
      pollTimeout: 6071.08,
      encoding: "<value>",
      description: "uniform though knotty oh certainly courteous interchange oh vivacious",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSnmp

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesSnmp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "snmp-source",
      type: "snmp",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
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
            authProtocol: "sha224",
            authKey: "<value>",
            privProtocol: "aes256b",
            privKey: "<value>",
          },
        ],
      },
      maxBufferSize: 160.94,
      ipWhitelistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 1083.32,
      varbindsWithTypes: false,
      bestEffortParsing: true,
      description: "oh come whoever whether essential classic narrow although midwife",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "snmp-source",
      type: "snmp",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
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
            authProtocol: "sha224",
            authKey: "<value>",
            privProtocol: "aes256b",
            privKey: "<value>",
          },
        ],
      },
      maxBufferSize: 160.94,
      ipWhitelistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 1083.32,
      varbindsWithTypes: false,
      bestEffortParsing: true,
      description: "oh come whoever whether essential classic narrow although midwife",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunk

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesSplunk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 9997,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 3940.33,
      socketIdleTimeout: 9447.25,
      socketEndingMaxWait: 1116.5,
      socketMaxLifespan: 8638.83,
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
      staleChannelFlushMs: 7568.1,
      authTokens: [
        {
          token: "<value>",
          description: "how phew who dependable annually",
        },
      ],
      maxS2Sversion: "v3",
      description: "informal cinder off knottily suspiciously even incidentally solemnly gee which",
      useFwdTimezone: true,
      dropControlFields: true,
      extractMetrics: true,
      compress: "always",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 9997,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 3940.33,
      socketIdleTimeout: 9447.25,
      socketEndingMaxWait: 1116.5,
      socketMaxLifespan: 8638.83,
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
      staleChannelFlushMs: 7568.1,
      authTokens: [
        {
          token: "<value>",
          description: "how phew who dependable annually",
        },
      ],
      maxS2Sversion: "v3",
      description: "informal cinder off knottily suspiciously even incidentally solemnly gee which",
      useFwdTimezone: true,
      dropControlFields: true,
      extractMetrics: true,
      compress: "always",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunkHec

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesSplunkHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
          description: "guilt for aha as mmm league shanghai dreamily before vice",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 6036.28,
      maxRequestsPerSocket: 236419,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 7773.1,
      requestTimeout: 2875.87,
      socketTimeout: 2993.56,
      keepAliveTimeout: 3374.92,
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
        "<value 2>",
        "<value 3>",
      ],
      splunkHecAcks: false,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 8000.36,
      useFwdTimezone: false,
      dropControlFields: false,
      extractMetrics: true,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: false,
      description: "unlike as bowed that yesterday until gallivant ascertain above",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
          description: "guilt for aha as mmm league shanghai dreamily before vice",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 6036.28,
      maxRequestsPerSocket: 236419,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 7773.1,
      requestTimeout: 2875.87,
      socketTimeout: 2993.56,
      keepAliveTimeout: 3374.92,
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
        "<value 2>",
        "<value 3>",
      ],
      splunkHecAcks: false,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 8000.36,
      useFwdTimezone: false,
      dropControlFields: false,
      extractMetrics: true,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: false,
      description: "unlike as bowed that yesterday until gallivant ascertain above",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunkSearch

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesSplunkSearch" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      logLevel: "error",
      requestTimeout: 4719.82,
      useRoundRobinDns: false,
      rejectUnauthorized: false,
      encoding: "<value>",
      keepAliveTime: 5543,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 1984.47,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 3435.51,
        limit: 2983.7,
        multiplier: 229.64,
        codes: [
          8670.96,
          6317.99,
          6730.21,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 8964.86,
      authType: "textSecret",
      description: "a immediately longingly bah till forgo",
      username: "Miracle92",
      password: "v8S3ar01XcPwORw",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
      logLevel: "error",
      requestTimeout: 4719.82,
      useRoundRobinDns: false,
      rejectUnauthorized: false,
      encoding: "<value>",
      keepAliveTime: 5543,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 1984.47,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 3435.51,
        limit: 2983.7,
        multiplier: 229.64,
        codes: [
          8670.96,
          6317.99,
          6730.21,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 8964.86,
      authType: "textSecret",
      description: "a immediately longingly bah till forgo",
      username: "Miracle92",
      password: "v8S3ar01XcPwORw",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSqs

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesSqs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      createQueue: false,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1564.68,
      maxMessages: 150.72,
      visibilityTimeout: 9663.55,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pollTimeout: 556.91,
      description: "metallic black oh cleverly even",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      numReceivers: 2175.93,
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "my-queue",
      queueType: "standard",
      awsAccountId: "<id>",
      createQueue: false,
      awsAuthenticationMethod: "<value>",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1564.68,
      maxMessages: 150.72,
      visibilityTimeout: 9663.55,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pollTimeout: 556.91,
      description: "metallic black oh cleverly even",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      numReceivers: 2175.93,
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSyslog

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesSyslog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 514,
      tcpPort: 9150.71,
      maxBufferSize: 8191.83,
      ipWhitelistRegex: "<value>",
      timestampTimezone: "<value>",
      singleMsgUdpPackets: true,
      enableProxyHeader: false,
      keepFieldsList: [
        "<value 1>",
        "<value 2>",
      ],
      octetCounting: false,
      inferFraming: false,
      strictlyInferOctetCounting: false,
      allowNonStandardAppName: false,
      maxActiveCxn: 4794.82,
      socketIdleTimeout: 5834.43,
      socketEndingMaxWait: 8494.07,
      socketMaxLifespan: 1762.37,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
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
      udpSocketRxBufSize: 8324.22,
      enableLoadBalancing: false,
      description: "uncork out salty questionable bookcase",
      enableEnhancedProxyHeaderParsing: false,
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 514,
      tcpPort: 9150.71,
      maxBufferSize: 8191.83,
      ipWhitelistRegex: "<value>",
      timestampTimezone: "<value>",
      singleMsgUdpPackets: true,
      enableProxyHeader: false,
      keepFieldsList: [
        "<value 1>",
        "<value 2>",
      ],
      octetCounting: false,
      inferFraming: false,
      strictlyInferOctetCounting: false,
      allowNonStandardAppName: false,
      maxActiveCxn: 4794.82,
      socketIdleTimeout: 5834.43,
      socketEndingMaxWait: 8494.07,
      socketMaxLifespan: 1762.37,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
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
      udpSocketRxBufSize: 8324.22,
      enableLoadBalancing: false,
      description: "uncork out salty questionable bookcase",
      enableEnhancedProxyHeaderParsing: false,
      __template_host: "<value>",
      __template_udpPort: "<value>",
      __template_tcpPort: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSystemMetrics

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesSystemMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 993.69,
      host: {
        mode: "basic",
        custom: {
          system: {
            mode: "custom",
            processes: true,
          },
          cpu: {
            mode: "disabled",
            perCpu: false,
            detail: true,
            time: false,
          },
          memory: {
            mode: "custom",
            detail: false,
          },
          network: {
            mode: "custom",
            detail: false,
            protocols: false,
            devices: [
              "<value 1>",
            ],
            perInterface: true,
          },
          disk: {
            mode: "disabled",
            detail: true,
            inodes: false,
            devices: [
              "<value 1>",
              "<value 2>",
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
        mode: "disabled",
        dockerSocket: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        dockerTimeout: 7137.03,
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
        compress: "gzip",
        destPath: "<value>",
      },
      description: "innocently cappelletti aw lest supposing before linseed holster",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 993.69,
      host: {
        mode: "basic",
        custom: {
          system: {
            mode: "custom",
            processes: true,
          },
          cpu: {
            mode: "disabled",
            perCpu: false,
            detail: true,
            time: false,
          },
          memory: {
            mode: "custom",
            detail: false,
          },
          network: {
            mode: "custom",
            detail: false,
            protocols: false,
            devices: [
              "<value 1>",
            ],
            perInterface: true,
          },
          disk: {
            mode: "disabled",
            detail: true,
            inodes: false,
            devices: [
              "<value 1>",
              "<value 2>",
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
        mode: "disabled",
        dockerSocket: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        dockerTimeout: 7137.03,
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
        compress: "gzip",
        destPath: "<value>",
      },
      description: "innocently cappelletti aw lest supposing before linseed holster",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSystemState

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesSystemState" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 1347.22,
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
          enable: false,
        },
        user: {
          enable: false,
        },
        firewall: {
          enable: true,
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
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "gzip",
        destPath: "<value>",
      },
      disableNativeModule: true,
      disableNativeLastLogModule: false,
      description: "pfft deceivingly mozzarella ew pfft freezing and acclaimed knavishly",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 1347.22,
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
          enable: false,
        },
        user: {
          enable: false,
        },
        firewall: {
          enable: true,
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
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "gzip",
        destPath: "<value>",
      },
      disableNativeModule: true,
      disableNativeLastLogModule: false,
      description: "pfft deceivingly mozzarella ew pfft freezing and acclaimed knavishly",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesTcp

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 8023.49,
      socketIdleTimeout: 9681.93,
      socketEndingMaxWait: 4317.12,
      socketMaxLifespan: 4841.13,
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
        "<value 3>",
      ],
      staleChannelFlushMs: 4888.83,
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
      description: "apropos eek faithfully whose thankfully properly and",
      authToken: "<value>",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 8023.49,
      socketIdleTimeout: 9681.93,
      socketEndingMaxWait: 4317.12,
      socketMaxLifespan: 4841.13,
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
        "<value 3>",
      ],
      staleChannelFlushMs: 4888.83,
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
      description: "apropos eek faithfully whose thankfully properly and",
      authToken: "<value>",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesTcpjson

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesTcpjson" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 873.41,
      socketIdleTimeout: 9045.41,
      socketEndingMaxWait: 9787.74,
      socketMaxLifespan: 3215.52,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: true,
      authType: "manual",
      description: "barring ruin whose",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 873.41,
      socketIdleTimeout: 9045.41,
      socketEndingMaxWait: 9787.74,
      socketMaxLifespan: 3215.52,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: true,
      authType: "manual",
      description: "barring ruin whose",
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
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWef

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesWef" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
        ocspCheck: false,
        keytab: "<value>",
        principal: "<value>",
        ocspCheckFailClose: true,
      },
      maxActiveReq: 6209.11,
      maxRequestsPerSocket: 367061,
      enableProxyHeader: true,
      captureHeaders: false,
      keepAliveTimeout: 4073.8,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      socketTimeout: 9314.55,
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
          readExistingEvents: true,
          sendBookmarks: false,
          compress: true,
          targets: [],
          locale: "it",
          querySelector: "simple",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          queries: [
            {
              path: "/opt/bin",
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
      description: "disk pantyhose meh thankfully yuck whereas",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
        ocspCheck: false,
        keytab: "<value>",
        principal: "<value>",
        ocspCheckFailClose: true,
      },
      maxActiveReq: 6209.11,
      maxRequestsPerSocket: 367061,
      enableProxyHeader: true,
      captureHeaders: false,
      keepAliveTimeout: 4073.8,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      socketTimeout: 9314.55,
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
          readExistingEvents: true,
          sendBookmarks: false,
          compress: true,
          targets: [],
          locale: "it",
          querySelector: "simple",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          queries: [
            {
              path: "/opt/bin",
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
      description: "disk pantyhose meh thankfully yuck whereas",
      logFingerprintMismatch: false,
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWinEventLogs

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesWinEventLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
      id: "win-event-logs-source",
      type: "win_event_logs",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      logNames: [
        "Application",
        "System",
      ],
      readMode: "oldest",
      eventFormat: "xml",
      disableNativeModule: false,
      interval: 1544.78,
      batchSize: 7991.51,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxEventBytes: 6928.91,
      description: "daintily lest anenst woot ew uh-huh redress instead justly animated",
      disableJsonRendering: true,
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
      id: "win-event-logs-source",
      type: "win_event_logs",
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
        mode: "always",
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      logNames: [
        "Application",
        "System",
      ],
      readMode: "oldest",
      eventFormat: "xml",
      disableNativeModule: false,
      interval: 1544.78,
      batchSize: 7991.51,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxEventBytes: 6928.91,
      description: "daintily lest anenst woot ew uh-huh redress instead justly animated",
      disableJsonRendering: true,
      disableXmlRendering: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWindowsMetrics

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesWindowsMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 1743.88,
      host: {
        mode: "disabled",
        custom: {
          system: {
            mode: "basic",
            detail: true,
          },
          cpu: {
            mode: "disabled",
            perCpu: true,
            detail: true,
            time: true,
          },
          memory: {
            mode: "basic",
            detail: true,
          },
          network: {
            mode: "custom",
            detail: false,
            protocols: true,
            devices: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            perInterface: false,
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
        compress: "none",
        destPath: "<value>",
      },
      disableNativeModule: false,
      description: "mad courteous huzzah grubby",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      interval: 1743.88,
      host: {
        mode: "disabled",
        custom: {
          system: {
            mode: "basic",
            detail: true,
          },
          cpu: {
            mode: "disabled",
            perCpu: true,
            detail: true,
            time: true,
          },
          memory: {
            mode: "basic",
            detail: true,
          },
          network: {
            mode: "custom",
            detail: false,
            protocols: true,
            devices: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            perInterface: false,
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
        compress: "none",
        destPath: "<value>",
      },
      disableNativeModule: false,
      description: "mad courteous huzzah grubby",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWiz

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesWiz" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      authAudienceOverride: "<value>",
      clientId: "client-id",
      contentConfig: [],
      requestTimeout: 3302.49,
      keepAliveTime: 167.85,
      maxMissedKeepAlives: 5646.66,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 3435.51,
        limit: 2983.7,
        multiplier: 229.64,
        codes: [
          8670.96,
          6317.99,
          6730.21,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "whether continually tuxedo after er ravel enthusiastically because upliftingly mathematics",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_endpoint: "<value>",
      __template_authUrl: "https://unwilling-responsibility.net/",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
        compress: "gzip",
        pqControls: {},
      },
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      authAudienceOverride: "<value>",
      clientId: "client-id",
      contentConfig: [],
      requestTimeout: 3302.49,
      keepAliveTime: 167.85,
      maxMissedKeepAlives: 5646.66,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 3435.51,
        limit: 2983.7,
        multiplier: 229.64,
        codes: [
          8670.96,
          6317.99,
          6730.21,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "whether continually tuxedo after er ravel enthusiastically because upliftingly mathematics",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_endpoint: "<value>",
      __template_authUrl: "https://unwilling-responsibility.net/",
      __template_clientId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWizWebhook

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesWizWebhook" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 6783.65,
      maxRequestsPerSocket: 67905,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 4089.18,
      requestTimeout: 9427.98,
      socketTimeout: 7800.88,
      keepAliveTimeout: 9804.51,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 3195.98,
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
          description: "oh scrutinise brr",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "taxicab tomatillo state fat yowza oh bobble as",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 6783.65,
      maxRequestsPerSocket: 67905,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 4089.18,
      requestTimeout: 9427.98,
      socketTimeout: 7800.88,
      keepAliveTimeout: 9804.51,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 3195.98,
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
          description: "oh scrutinise brr",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "taxicab tomatillo state fat yowza oh bobble as",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesZscalerHec

<!-- UsageSnippet language="typescript" operationID="createInputSystemByPack" method="post" path="/p/{pack}/system/inputs" example="InputCreateExamplesZscalerHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.create({
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
          description: "ouch passionate probable above",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 8835.7,
      maxRequestsPerSocket: 967433,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 3239.97,
      requestTimeout: 4056.72,
      socketTimeout: 1629.96,
      keepAliveTimeout: 1585.43,
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
      description: "navigate obsess so juggernaut zowie",
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
import { packsSourcesCreate } from "cribl-control-plane/funcs/packsSourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesCreate(criblControlPlane, {
    pack: "<value>",
    requestBody: {
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
        maxBufferSize: 5236.78,
        commitFrequency: 8788.99,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt",
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
          description: "ouch passionate probable above",
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
        disabled: false,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 8835.7,
      maxRequestsPerSocket: 967433,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 3239.97,
      requestTimeout: 4056.72,
      socketTimeout: 1629.96,
      keepAliveTimeout: 1585.43,
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
      description: "navigate obsess so juggernaut zowie",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_hecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateInputSystemByPackRequest](../../models/operations/createinputsystembypackrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Get the specified Source within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getInputSystemByPackAndId" method="get" path="/p/{pack}/system/inputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.get({
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
import { packsSourcesGet } from "cribl-control-plane/funcs/packsSourcesGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesGet(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInputSystemByPackAndIdRequest](../../models/operations/getinputsystembypackandidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Update the specified Source.</br></br>Provide a complete representation of the Source that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Source.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Source might not function as expected within the specified Pack.

### Example Usage: InputCreateExamplesAppscope

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesAppscope" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "appscope-source",
      type: "appscope",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 2177.87,
      socketIdleTimeout: 1131.76,
      socketEndingMaxWait: 2476.4,
      socketMaxLifespan: 8980.2,
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
      staleChannelFlushMs: 5201.14,
      enableUnixPath: false,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://stable-transparency.org/",
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
      description: "graffiti yawningly absent when times sonata or uselessly woeful amidst",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      unixSocketPath: "<value>",
      unixSocketPerms: "<value>",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "appscope-source",
      type: "appscope",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 2177.87,
      socketIdleTimeout: 1131.76,
      socketEndingMaxWait: 2476.4,
      socketMaxLifespan: 8980.2,
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
      staleChannelFlushMs: 5201.14,
      enableUnixPath: false,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://stable-transparency.org/",
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
      description: "graffiti yawningly absent when times sonata or uselessly woeful amidst",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      unixSocketPath: "<value>",
      unixSocketPerms: "<value>",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesAzureBlob

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesAzureBlob" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "azure-blob-queue",
      fileFilter: "<value>",
      visibilityTimeout: 3094.63,
      numReceivers: 7570.95,
      maxMessages: 2253.54,
      servicePeriodSecs: 7697.99,
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
      staleChannelFlushMs: 2956.83,
      parquetChunkSizeMB: 7633.01,
      parquetChunkDownloadTimeout: 4156.74,
      authType: "manual",
      description: "knavishly vivaciously sympathetically",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      queueName: "azure-blob-queue",
      fileFilter: "<value>",
      visibilityTimeout: 3094.63,
      numReceivers: 7570.95,
      maxMessages: 2253.54,
      servicePeriodSecs: 7697.99,
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
      staleChannelFlushMs: 2956.83,
      parquetChunkSizeMB: 7633.01,
      parquetChunkDownloadTimeout: 4156.74,
      authType: "manual",
      description: "knavishly vivaciously sympathetically",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCloudflareHec

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesCloudflareHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "cloudflare-hec-source",
      type: "cloudflare_hec",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
          description: "convalesce after sympathetically",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 8504.29,
      maxRequestsPerSocket: 808412,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 8898.86,
      requestTimeout: 2032.33,
      socketTimeout: 3074.69,
      keepAliveTimeout: 8911.87,
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
      ],
      staleChannelFlushMs: 7424.11,
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
      description: "successfully ecstatic if woefully apprehensive soulful nicely butter even deprave",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "cloudflare-hec-source",
      type: "cloudflare_hec",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
          description: "convalesce after sympathetically",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 8504.29,
      maxRequestsPerSocket: 808412,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 8898.86,
      requestTimeout: 2032.33,
      socketTimeout: 3074.69,
      keepAliveTimeout: 8911.87,
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
      ],
      staleChannelFlushMs: 7424.11,
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
      description: "successfully ecstatic if woefully apprehensive soulful nicely butter even deprave",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCollection

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesCollection" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 2306.82,
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 2306.82,
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesConfluentCloud

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesConfluentCloud" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "confluent-cloud-source",
      type: "confluent_cloud",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: false,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://foolish-lace.name",
        connectionTimeout: 9222.03,
        requestTimeout: 2060.92,
        maxRetries: 4747.86,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1",
        },
      },
      connectionTimeout: 2191.22,
      requestTimeout: 9306.44,
      maxRetries: 9430.74,
      maxBackOff: 5234.73,
      initialBackoff: 5835.16,
      backoffRate: 8876.61,
      authenticationTimeout: 4184.48,
      reauthenticationThreshold: 2863.18,
      sasl: {
        disabled: false,
        username: "Hallie.Wisozk",
        password: "oF6ULVD266SvlIK",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://rewarding-courtroom.net/",
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
      sessionTimeout: 789.56,
      rebalanceTimeout: 6327.46,
      heartbeatInterval: 6024.79,
      autoCommitInterval: 2783,
      autoCommitThreshold: 9984.03,
      maxBytesPerPartition: 214.49,
      maxBytes: 1937.09,
      maxSocketErrors: 7019.66,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "qua simple retention gratefully huzzah hefty crazy because",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "confluent-cloud-source",
      type: "confluent_cloud",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      topics: [
        "logs",
      ],
      groupId: "<id>",
      fromBeginning: false,
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://foolish-lace.name",
        connectionTimeout: 9222.03,
        requestTimeout: 2060.92,
        maxRetries: 4747.86,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1",
        },
      },
      connectionTimeout: 2191.22,
      requestTimeout: 9306.44,
      maxRetries: 9430.74,
      maxBackOff: 5234.73,
      initialBackoff: 5835.16,
      backoffRate: 8876.61,
      authenticationTimeout: 4184.48,
      reauthenticationThreshold: 2863.18,
      sasl: {
        disabled: false,
        username: "Hallie.Wisozk",
        password: "oF6ULVD266SvlIK",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://rewarding-courtroom.net/",
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
      sessionTimeout: 789.56,
      rebalanceTimeout: 6327.46,
      heartbeatInterval: 6024.79,
      autoCommitInterval: 2783,
      autoCommitThreshold: 9984.03,
      maxBytesPerPartition: 214.49,
      maxBytes: 1937.09,
      maxSocketErrors: 7019.66,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "qua simple retention gratefully huzzah hefty crazy because",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblHttp

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesCriblHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: false,
          description: "that convince gift ha maroon sadly above fraternise affect always",
        },
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 94.06,
      maxRequestsPerSocket: 995636,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 7620.39,
      requestTimeout: 5316.13,
      socketTimeout: 5927.22,
      keepAliveTimeout: 984.97,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "meanwhile atomize receptor wildly whether competent intelligent",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      authTokens: [
        {
          tokenSecret: "<value>",
          enabled: false,
          description: "that convince gift ha maroon sadly above fraternise affect always",
        },
      ],
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 94.06,
      maxRequestsPerSocket: 995636,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 7620.39,
      requestTimeout: 5316.13,
      socketTimeout: 5927.22,
      keepAliveTimeout: 984.97,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "meanwhile atomize receptor wildly whether competent intelligent",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblLakeHttp

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesCriblLakeHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "cribl-lake-http-source",
      type: "cribl_lake_http",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3932.24,
      maxRequestsPerSocket: 381048,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 7154.34,
      requestTimeout: 5542.72,
      socketTimeout: 5091.92,
      keepAliveTimeout: 4354.07,
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
          description: "joyfully duh once among",
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
            enabled: false,
            defaultDataset: "<value>",
          },
        },
      ],
      description: "suitcase hm um selfish",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "cribl-lake-http-source",
      type: "cribl_lake_http",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3932.24,
      maxRequestsPerSocket: 381048,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 7154.34,
      requestTimeout: 5542.72,
      socketTimeout: 5091.92,
      keepAliveTimeout: 4354.07,
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
          description: "joyfully duh once among",
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
            enabled: false,
            defaultDataset: "<value>",
          },
        },
      ],
      description: "suitcase hm um selfish",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCriblTcp

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesCriblTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "cribl-tcp-source",
      type: "cribl_tcp",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveCxn: 3802.79,
      socketIdleTimeout: 4455.7,
      socketEndingMaxWait: 7985.02,
      socketMaxLifespan: 275.69,
      enableProxyHeader: true,
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
          enabled: false,
          description: "that convince gift ha maroon sadly above fraternise affect always",
        },
      ],
      description: "consequently wise out yuck in option emboss silt",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "cribl-tcp-source",
      type: "cribl_tcp",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveCxn: 3802.79,
      socketIdleTimeout: 4455.7,
      socketEndingMaxWait: 7985.02,
      socketMaxLifespan: 275.69,
      enableProxyHeader: true,
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
          enabled: false,
          description: "that convince gift ha maroon sadly above fraternise affect always",
        },
      ],
      description: "consequently wise out yuck in option emboss silt",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesCrowdstrike

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesCrowdstrike" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 9049.89,
      maxMessages: 1413.78,
      visibilityTimeout: 1324.06,
      numReceivers: 6723.13,
      socketTimeout: 6219.39,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 8324.16,
      enableSQSAssumeRole: false,
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
        retries: 8314.89,
      },
      pollTimeout: 1555.53,
      encoding: "<value>",
      description: "pillbox harmful wearily",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 9049.89,
      maxMessages: 1413.78,
      visibilityTimeout: 1324.06,
      numReceivers: 6723.13,
      socketTimeout: 6219.39,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 8324.16,
      enableSQSAssumeRole: false,
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
        retries: 8314.89,
      },
      pollTimeout: 1555.53,
      encoding: "<value>",
      description: "pillbox harmful wearily",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesDatadogAgent

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesDatadogAgent" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8126,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 5193.5,
      maxRequestsPerSocket: 121002,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 4717.43,
      requestTimeout: 1551.22,
      socketTimeout: 1676.35,
      keepAliveTimeout: 7122.96,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      extractMetrics: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      proxyMode: {
        enabled: true,
        rejectUnauthorized: false,
      },
      description: "pantyhose yuck er",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 8126,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 5193.5,
      maxRequestsPerSocket: 121002,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 4717.43,
      requestTimeout: 1551.22,
      socketTimeout: 1676.35,
      keepAliveTimeout: 7122.96,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      extractMetrics: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      proxyMode: {
        enabled: true,
        rejectUnauthorized: false,
      },
      description: "pantyhose yuck er",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesDatagen

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesDatagen" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      description: "incidentally instead embalm knottily char rare inasmuch retrospectivity",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      description: "incidentally instead embalm knottily char rare inasmuch retrospectivity",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesEdgePrometheus

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesEdgePrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
        "<value 2>",
      ],
      discoveryType: "static",
      interval: 60,
      timeout: 303.97,
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
      authType: "kubernetes",
      description: "awkwardly reclassify bid ha",
      targets: [
        {
          protocol: "https",
          host: "localhost",
          port: 1231.23,
          path: "/rescue",
        },
      ],
      recordType: "A",
      scrapePort: 5791.05,
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
          ],
        },
      ],
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 7072.56,
      scrapeProtocolExpr: "<value>",
      scrapePortExpr: "<value>",
      scrapePathExpr: "<value>",
      podFilter: [
        {
          filter: "<value>",
          description: "conversation suspiciously individual those boo seafood but across around",
        },
      ],
      username: "Jameson84",
      password: "ZfWmW4VCKS24TwT",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      dimensionList: [
        "<value 1>",
        "<value 2>",
      ],
      discoveryType: "static",
      interval: 60,
      timeout: 303.97,
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
      authType: "kubernetes",
      description: "awkwardly reclassify bid ha",
      targets: [
        {
          protocol: "https",
          host: "localhost",
          port: 1231.23,
          path: "/rescue",
        },
      ],
      recordType: "A",
      scrapePort: 5791.05,
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
          ],
        },
      ],
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 7072.56,
      scrapeProtocolExpr: "<value>",
      scrapePortExpr: "<value>",
      scrapePathExpr: "<value>",
      podFilter: [
        {
          filter: "<value>",
          description: "conversation suspiciously individual those boo seafood but across around",
        },
      ],
      username: "Jameson84",
      password: "ZfWmW4VCKS24TwT",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesElastic

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesElastic" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "elastic-source",
      type: "elastic",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "localhost",
      port: 9200,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 4002.78,
      maxRequestsPerSocket: 455209,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 3360.41,
      requestTimeout: 7610.86,
      socketTimeout: 8866.13,
      keepAliveTimeout: 3541.68,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      elasticAPI: "/",
      authType: "authTokens",
      apiVersion: "custom",
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
        enabled: true,
        authType: "none",
        username: "Geo35",
        password: "OcvbfTcEDHLx6Ee",
        credentialsSecret: "<value>",
        url: "https://courageous-husband.org/",
        rejectUnauthorized: false,
        removeHeaders: [
          "<value 1>",
          "<value 2>",
        ],
        timeoutSec: 5608.5,
        __template_url: "https://focused-pillbox.name",
      },
      description: "yieldingly meal deform drat even scented oddly until zowie",
      username: "Davin99",
      password: "R5IuK5D69xrRitN",
      credentialsSecret: "<value>",
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      customAPIVersion: "<value>",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "elastic-source",
      type: "elastic",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "localhost",
      port: 9200,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 4002.78,
      maxRequestsPerSocket: 455209,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 3360.41,
      requestTimeout: 7610.86,
      socketTimeout: 8866.13,
      keepAliveTimeout: 3541.68,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      elasticAPI: "/",
      authType: "authTokens",
      apiVersion: "custom",
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
        enabled: true,
        authType: "none",
        username: "Geo35",
        password: "OcvbfTcEDHLx6Ee",
        credentialsSecret: "<value>",
        url: "https://courageous-husband.org/",
        rejectUnauthorized: false,
        removeHeaders: [
          "<value 1>",
          "<value 2>",
        ],
        timeoutSec: 5608.5,
        __template_url: "https://focused-pillbox.name",
      },
      description: "yieldingly meal deform drat even scented oddly until zowie",
      username: "Davin99",
      password: "R5IuK5D69xrRitN",
      credentialsSecret: "<value>",
      authTokens: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      customAPIVersion: "<value>",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesEventhub

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesEventhub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "eventhub-source",
      type: "eventhub",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      fromBeginning: false,
      connectionTimeout: 6585.18,
      requestTimeout: 5244.04,
      maxRetries: 1356.68,
      maxBackOff: 3116.78,
      initialBackoff: 4013.54,
      backoffRate: 857.13,
      authenticationTimeout: 3684.16,
      reauthenticationThreshold: 5822.46,
      sasl: {
        disabled: true,
        authType: "manual",
        password: "Zt2A5KeJvJQQ5xO",
        textSecret: "<value>",
        mechanism: "oauthbearer",
        username: "Brycen_Witting",
        clientSecretAuthType: "secret",
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
      sessionTimeout: 4534.23,
      rebalanceTimeout: 5359.47,
      heartbeatInterval: 6719,
      autoCommitInterval: 2214.59,
      autoCommitThreshold: 9717.73,
      maxBytesPerPartition: 1807.8,
      maxBytes: 8326.28,
      maxSocketErrors: 6630.44,
      minimizeDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "cruel anenst solemnly",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "eventhub-source",
      type: "eventhub",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      fromBeginning: false,
      connectionTimeout: 6585.18,
      requestTimeout: 5244.04,
      maxRetries: 1356.68,
      maxBackOff: 3116.78,
      initialBackoff: 4013.54,
      backoffRate: 857.13,
      authenticationTimeout: 3684.16,
      reauthenticationThreshold: 5822.46,
      sasl: {
        disabled: true,
        authType: "manual",
        password: "Zt2A5KeJvJQQ5xO",
        textSecret: "<value>",
        mechanism: "oauthbearer",
        username: "Brycen_Witting",
        clientSecretAuthType: "secret",
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
      sessionTimeout: 4534.23,
      rebalanceTimeout: 5359.47,
      heartbeatInterval: 6719,
      autoCommitInterval: 2214.59,
      autoCommitThreshold: 9717.73,
      maxBytesPerPartition: 1807.8,
      maxBytes: 8326.28,
      maxSocketErrors: 6630.44,
      minimizeDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "cruel anenst solemnly",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesExec

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesExec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      command: "echo \"Hello World\"",
      retries: 8673.51,
      scheduleType: "interval",
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 4288.77,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "tightly fooey safe",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      command: "echo \"Hello World\"",
      retries: 8673.51,
      scheduleType: "interval",
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 4288.77,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "tightly fooey safe",
      interval: 60,
      cronSchedule: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesFile

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesFile" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "file-source",
      type: "file",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      mode: "manual",
      interval: 1818.81,
      filenames: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      filterArchivedFiles: true,
      tailOnly: true,
      idleTimeout: 4949.83,
      minAgeDur: "<value>",
      maxAgeDur: "<value>",
      checkFileModTime: true,
      forceText: false,
      hashLen: 137.35,
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
      staleChannelFlushMs: 6584.47,
      description: "portly yet immediately remark pfft ew behind patiently",
      path: "/usr/libexec",
      depth: 9200.65,
      suppressMissingPathErrors: true,
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "file-source",
      type: "file",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      mode: "manual",
      interval: 1818.81,
      filenames: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      filterArchivedFiles: true,
      tailOnly: true,
      idleTimeout: 4949.83,
      minAgeDur: "<value>",
      maxAgeDur: "<value>",
      checkFileModTime: true,
      forceText: false,
      hashLen: 137.35,
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
      staleChannelFlushMs: 6584.47,
      description: "portly yet immediately remark pfft ew behind patiently",
      path: "/usr/libexec",
      depth: 9200.65,
      suppressMissingPathErrors: true,
      deleteFiles: false,
      saltHash: false,
      includeUnidentifiableBinary: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesFirehose

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesFirehose" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 4835.03,
      maxRequestsPerSocket: 591081,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 7418.7,
      requestTimeout: 5937.8,
      socketTimeout: 6770.48,
      keepAliveTimeout: 642.57,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "sans trained than amongst after functional",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 4835.03,
      maxRequestsPerSocket: 591081,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 7418.7,
      requestTimeout: 5937.8,
      socketTimeout: 6770.48,
      keepAliveTimeout: 642.57,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "sans trained than amongst after functional",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesGooglePubsub

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesGooglePubsub" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      topicName: "my-topic",
      subscriptionName: "my-subscription",
      monitorSubscription: false,
      createTopic: false,
      createSubscription: false,
      region: "<value>",
      googleAuthMethod: "auto",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxBacklog: 9200.99,
      concurrency: 4550.7,
      requestTimeout: 6581.72,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "now blah amendment scamper where beside unless ferociously edge",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      topicName: "my-topic",
      subscriptionName: "my-subscription",
      monitorSubscription: false,
      createTopic: false,
      createSubscription: false,
      region: "<value>",
      googleAuthMethod: "auto",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      maxBacklog: 9200.99,
      concurrency: 4550.7,
      requestTimeout: 6581.72,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "now blah amendment scamper where beside unless ferociously edge",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesGrafana

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesGrafana" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3674.98,
      maxRequestsPerSocket: 154588,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 9664.51,
      requestTimeout: 4719.01,
      socketTimeout: 7740.15,
      keepAliveTimeout: 5327.52,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/api/prom/push",
      lokiAPI: "<value>",
      prometheusAuth: {
        authType: "textSecret",
        username: "Nella_Tillman",
        password: "sKp45EsJPg0vtgC",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
      },
      lokiAuth: {
        authType: "token",
        username: "Darion30",
        password: "14cQwz_3eL1dGvl",
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
      description: "westernize abaft spear woot so whoa",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3674.98,
      maxRequestsPerSocket: 154588,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 9664.51,
      requestTimeout: 4719.01,
      socketTimeout: 7740.15,
      keepAliveTimeout: 5327.52,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/api/prom/push",
      lokiAPI: "<value>",
      prometheusAuth: {
        authType: "textSecret",
        username: "Nella_Tillman",
        password: "sKp45EsJPg0vtgC",
        token: "<value>",
        credentialsSecret: "<value>",
        textSecret: "<value>",
      },
      lokiAuth: {
        authType: "token",
        username: "Darion30",
        password: "14cQwz_3eL1dGvl",
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
      description: "westernize abaft spear woot so whoa",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesHttp

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesHttp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 1765.61,
      maxRequestsPerSocket: 947073,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 6662.66,
      requestTimeout: 2491.78,
      socketTimeout: 6289.04,
      keepAliveTimeout: 8674.8,
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
          description: "ew honestly finally bravely upwardly since inexperienced affect soft",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "amongst yum deep dereference",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 1765.61,
      maxRequestsPerSocket: 947073,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 6662.66,
      requestTimeout: 2491.78,
      socketTimeout: 6289.04,
      keepAliveTimeout: 8674.8,
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
          description: "ew honestly finally bravely upwardly since inexperienced affect soft",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "amongst yum deep dereference",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesHttpRaw

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesHttpRaw" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3412.38,
      maxRequestsPerSocket: 683754,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 7732.89,
      requestTimeout: 3036.52,
      socketTimeout: 4930.57,
      keepAliveTimeout: 9403.38,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 5892.64,
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
          description: "ew honestly finally bravely upwardly since inexperienced affect soft",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "floss minority loftily once analyse amongst infamous",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3412.38,
      maxRequestsPerSocket: 683754,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 7732.89,
      requestTimeout: 3036.52,
      socketTimeout: 4930.57,
      keepAliveTimeout: 9403.38,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 5892.64,
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
          description: "ew honestly finally bravely upwardly since inexperienced affect soft",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "floss minority loftily once analyse amongst infamous",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesJournalFiles

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesJournalFiles" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      path: "/var/log/journal",
      interval: 2654.97,
      journals: [
        "system",
      ],
      rules: [
        {
          filter: "<value>",
          description: "since fully neat but",
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
      description: "duh selfishly harp phew blend",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      path: "/var/log/journal",
      interval: 2654.97,
      journals: [
        "system",
      ],
      rules: [
        {
          filter: "<value>",
          description: "since fully neat but",
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
      description: "duh selfishly harp phew blend",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKafka

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesKafka" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        schemaRegistryURL: "https://foolish-lace.name",
        connectionTimeout: 9222.03,
        requestTimeout: 2060.92,
        maxRetries: 4747.86,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1",
        },
      },
      connectionTimeout: 8138.79,
      requestTimeout: 4154.87,
      maxRetries: 1678.84,
      maxBackOff: 3364.65,
      initialBackoff: 8649.38,
      backoffRate: 2887.73,
      authenticationTimeout: 5877.37,
      reauthenticationThreshold: 1268.77,
      sasl: {
        disabled: false,
        username: "Hallie.Wisozk",
        password: "oF6ULVD266SvlIK",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://rewarding-courtroom.net/",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      sessionTimeout: 6281.64,
      rebalanceTimeout: 4994.32,
      heartbeatInterval: 5674.72,
      autoCommitInterval: 5430.77,
      autoCommitThreshold: 1809.93,
      maxBytesPerPartition: 5851.61,
      maxBytes: 7535.23,
      maxSocketErrors: 2555.39,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "in spectate obtrude navigate",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        schemaRegistryURL: "https://foolish-lace.name",
        connectionTimeout: 9222.03,
        requestTimeout: 2060.92,
        maxRetries: 4747.86,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1",
        },
      },
      connectionTimeout: 8138.79,
      requestTimeout: 4154.87,
      maxRetries: 1678.84,
      maxBackOff: 3364.65,
      initialBackoff: 8649.38,
      backoffRate: 2887.73,
      authenticationTimeout: 5877.37,
      reauthenticationThreshold: 1268.77,
      sasl: {
        disabled: false,
        username: "Hallie.Wisozk",
        password: "oF6ULVD266SvlIK",
        authType: "secret",
        credentialsSecret: "<value>",
        mechanism: "scram-sha-512",
        keytabLocation: "<value>",
        principal: "<value>",
        brokerServiceClass: "<value>",
        oauthEnabled: true,
        tokenUrl: "https://rewarding-courtroom.net/",
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1",
      },
      sessionTimeout: 6281.64,
      rebalanceTimeout: 4994.32,
      heartbeatInterval: 5674.72,
      autoCommitInterval: 5430.77,
      autoCommitThreshold: 1809.93,
      maxBytesPerPartition: 5851.61,
      maxBytes: 7535.23,
      maxSocketErrors: 2555.39,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "in spectate obtrude navigate",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKinesis

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesKinesis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      streamName: "my-stream",
      serviceInterval: 8759.77,
      shardExpr: "<value>",
      shardIteratorType: "LATEST",
      payloadFormat: "cribl",
      getRecordsLimit: 4259.59,
      getRecordsLimitTotal: 6120.75,
      loadBalancingAlgorithm: "RoundRobin",
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
      durationSeconds: 4752.53,
      verifyKPLCheckSums: false,
      avoidDuplicates: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "whenever worst wrongly flowery abnegate unexpectedly bump delirious anti",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      streamName: "my-stream",
      serviceInterval: 8759.77,
      shardExpr: "<value>",
      shardIteratorType: "LATEST",
      payloadFormat: "cribl",
      getRecordsLimit: 4259.59,
      getRecordsLimitTotal: 6120.75,
      loadBalancingAlgorithm: "RoundRobin",
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
      durationSeconds: 4752.53,
      verifyKPLCheckSums: false,
      avoidDuplicates: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "whenever worst wrongly flowery abnegate unexpectedly bump delirious anti",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeEvents

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesKubeEvents" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      rules: [
        {
          filter: "<value>",
          description: "where granular briskly wring showboat aside without below lone",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "onto supposing save gown alb since closed bouncy why",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      rules: [
        {
          filter: "<value>",
          description: "where granular briskly wring showboat aside without below lone",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "onto supposing save gown alb since closed bouncy why",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeLogs

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesKubeLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 7727.31,
      rules: [
        {
          filter: "<value>",
          description: "warmly nor bob digit",
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
        compress: "none",
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 5572.73,
      enableLoadBalancing: true,
      description: "knowledgeably whoa whose abnormally wedding concrete plumber jut",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 7727.31,
      rules: [
        {
          filter: "<value>",
          description: "warmly nor bob digit",
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
        compress: "none",
      },
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 5572.73,
      enableLoadBalancing: true,
      description: "knowledgeably whoa whose abnormally wedding concrete plumber jut",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesKubeMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesKubeMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 1121.69,
      rules: [
        {
          filter: "<value>",
          description: "where granular briskly wring showboat aside without below lone",
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
      description: "regarding flawless gadzooks oil duh brr unto doubter boo",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 1121.69,
      rules: [
        {
          filter: "<value>",
          description: "where granular briskly wring showboat aside without below lone",
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
      description: "regarding flawless gadzooks oil duh brr unto doubter boo",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesLoki

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesLoki" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3331.97,
      maxRequestsPerSocket: 955480,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 8783.04,
      requestTimeout: 5756.32,
      socketTimeout: 497.72,
      keepAliveTimeout: 2156.45,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      lokiAPI: "/loki/api/v1/push",
      authType: "token",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "bah moisten valiantly",
      username: "Martin_Daniel57",
      password: "SvjjhMwAU_RF2H5",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3331.97,
      maxRequestsPerSocket: 955480,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 8783.04,
      requestTimeout: 5756.32,
      socketTimeout: 497.72,
      keepAliveTimeout: 2156.45,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      lokiAPI: "/loki/api/v1/push",
      authType: "token",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "bah moisten valiantly",
      username: "Martin_Daniel57",
      password: "SvjjhMwAU_RF2H5",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "metrics-source",
      type: "metrics",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 8125,
      tcpPort: 2602.49,
      maxBufferSize: 3318.99,
      ipWhitelistRegex: "<value>",
      enableProxyHeader: false,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 5880.56,
      description: "wretched geez gee",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "metrics-source",
      type: "metrics",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 8125,
      tcpPort: 2602.49,
      maxBufferSize: 3318.99,
      ipWhitelistRegex: "<value>",
      enableProxyHeader: false,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 5880.56,
      description: "wretched geez gee",
      __template_host: "<value>",
      __template_udpPort: "<value>",
      __template_tcpPort: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesModelDrivenTelemetry

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesModelDrivenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "mdt-source",
      type: "model_driven_telemetry",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 57000,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 4616.35,
      shutdownTimeoutMs: 8224.03,
      description: "boastfully past siege knavishly spellcheck scale frank",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "mdt-source",
      type: "model_driven_telemetry",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 57000,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 4616.35,
      shutdownTimeoutMs: 8224.03,
      description: "boastfully past siege knavishly spellcheck scale frank",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesMsk

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesMsk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      sessionTimeout: 9034.08,
      rebalanceTimeout: 5113.84,
      heartbeatInterval: 9292.28,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://foolish-lace.name",
        connectionTimeout: 9222.03,
        requestTimeout: 2060.92,
        maxRetries: 4747.86,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1",
        },
      },
      connectionTimeout: 5239.83,
      requestTimeout: 7415.72,
      maxRetries: 3350.38,
      maxBackOff: 1085.96,
      initialBackoff: 2915.63,
      backoffRate: 5562.81,
      authenticationTimeout: 3485.6,
      reauthenticationThreshold: 1186.43,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3369.8,
      tls: {
        disabled: false,
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
      autoCommitInterval: 3782.76,
      autoCommitThreshold: 5370.18,
      maxBytesPerPartition: 493.58,
      maxBytes: 7523.73,
      maxSocketErrors: 392.88,
      description: "upon deceivingly vanish profane sans furthermore um even",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      sessionTimeout: 9034.08,
      rebalanceTimeout: 5113.84,
      heartbeatInterval: 9292.28,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      kafkaSchemaRegistry: {
        disabled: true,
        schemaRegistryURL: "https://foolish-lace.name",
        connectionTimeout: 9222.03,
        requestTimeout: 2060.92,
        maxRetries: 4747.86,
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
          minVersion: "TLSv1",
          maxVersion: "TLSv1",
        },
      },
      connectionTimeout: 5239.83,
      requestTimeout: 7415.72,
      maxRetries: 3350.38,
      maxBackOff: 1085.96,
      initialBackoff: 2915.63,
      backoffRate: 5562.81,
      authenticationTimeout: 3485.6,
      reauthenticationThreshold: 1186.43,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "us-east-1",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3369.8,
      tls: {
        disabled: false,
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
      autoCommitInterval: 3782.76,
      autoCommitThreshold: 5370.18,
      maxBytesPerPartition: 493.58,
      maxBytes: 7523.73,
      maxSocketErrors: 392.88,
      description: "upon deceivingly vanish profane sans furthermore um even",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesNetflow

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesNetflow" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 2055,
      enablePassThrough: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      udpSocketRxBufSize: 9889.4,
      templateCacheMinutes: 2571.11,
      v5Enabled: false,
      v9Enabled: true,
      ipfixEnabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "fearless ha what gym when",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 2055,
      enablePassThrough: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      udpSocketRxBufSize: 9889.4,
      templateCacheMinutes: 2571.11,
      v5Enabled: false,
      v9Enabled: true,
      ipfixEnabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "fearless ha what gym when",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365Mgmt

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesOffice365Mgmt" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "office365-mgmt-source",
      type: "office365_mgmt",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 7322.78,
      keepAliveTime: 2466.82,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 3801.89,
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
          description: "truthfully ragged apropos better since now whoever as oof without",
          interval: 9148.23,
          logLevel: "error",
          enabled: true,
        },
      ],
      ingestionLag: 8798.19,
      retryRules: {
        type: "<value>",
        interval: 7767.4,
        limit: 3819.89,
        multiplier: 6889.97,
        codes: [
          4562.27,
        ],
        enableHeader: false,
        retryConnectTimeout: false,
        retryConnectReset: true,
      },
      authType: "secret",
      description: "what vaguely more lest",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "office365-mgmt-source",
      type: "office365_mgmt",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 7322.78,
      keepAliveTime: 2466.82,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 3801.89,
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
          description: "truthfully ragged apropos better since now whoever as oof without",
          interval: 9148.23,
          logLevel: "error",
          enabled: true,
        },
      ],
      ingestionLag: 8798.19,
      retryRules: {
        type: "<value>",
        interval: 7767.4,
        limit: 3819.89,
        multiplier: 6889.97,
        codes: [
          4562.27,
        ],
        enableHeader: false,
        retryConnectTimeout: false,
        retryConnectReset: true,
      },
      authType: "secret",
      description: "what vaguely more lest",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365MsgTrace

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesOffice365MsgTrace" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
      startDate: "<value>",
      endDate: "<value>",
      timeout: 2674.79,
      disableTimeFilter: false,
      authType: "secret",
      rescheduleDroppedTasks: false,
      maxTaskReschedule: 3602.21,
      logLevel: "info",
      jobTimeout: "<value>",
      keepAliveTime: 3105.81,
      maxMissedKeepAlives: 8053.2,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 7767.4,
        limit: 3819.89,
        multiplier: 6889.97,
        codes: [
          4562.27,
        ],
        enableHeader: false,
        retryConnectTimeout: false,
        retryConnectReset: true,
      },
      description: "galoshes wetly pitiful printer gummy if ferret accompanist",
      username: "Leatha_Schulist25",
      password: "9oETMERd2FZF3bf",
      credentialsSecret: "<value>",
      clientSecret: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      resource: "<value>",
      planType: "dod",
      textSecret: "<value>",
      certOptions: {
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
      },
      __template_url: "https://biodegradable-creature.biz",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
      startDate: "<value>",
      endDate: "<value>",
      timeout: 2674.79,
      disableTimeFilter: false,
      authType: "secret",
      rescheduleDroppedTasks: false,
      maxTaskReschedule: 3602.21,
      logLevel: "info",
      jobTimeout: "<value>",
      keepAliveTime: 3105.81,
      maxMissedKeepAlives: 8053.2,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 7767.4,
        limit: 3819.89,
        multiplier: 6889.97,
        codes: [
          4562.27,
        ],
        enableHeader: false,
        retryConnectTimeout: false,
        retryConnectReset: true,
      },
      description: "galoshes wetly pitiful printer gummy if ferret accompanist",
      username: "Leatha_Schulist25",
      password: "9oETMERd2FZF3bf",
      credentialsSecret: "<value>",
      clientSecret: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      resource: "<value>",
      planType: "dod",
      textSecret: "<value>",
      certOptions: {
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
      },
      __template_url: "https://biodegradable-creature.biz",
      __template_tenantId: "<id>",
      __template_clientId: "<id>",
      __template_resource: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOffice365Service

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesOffice365Service" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      planType: "gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 7389.91,
      keepAliveTime: 4701.4,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 7530.48,
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
          description: "given shore straw those careless chilly peaceful minus",
          interval: 1025.14,
          logLevel: "info",
          enabled: false,
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 7767.4,
        limit: 3819.89,
        multiplier: 6889.97,
        codes: [
          4562.27,
        ],
        enableHeader: false,
        retryConnectTimeout: false,
        retryConnectReset: true,
      },
      authType: "manual",
      description: "yuck complicated or lively gadzooks",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      planType: "gcc",
      tenantId: "tenant-id",
      appId: "app-id",
      timeout: 7389.91,
      keepAliveTime: 4701.4,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 7530.48,
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
          description: "given shore straw those careless chilly peaceful minus",
          interval: 1025.14,
          logLevel: "info",
          enabled: false,
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 7767.4,
        limit: 3819.89,
        multiplier: 6889.97,
        codes: [
          4562.27,
        ],
        enableHeader: false,
        retryConnectTimeout: false,
        retryConnectReset: true,
      },
      authType: "manual",
      description: "yuck complicated or lively gadzooks",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesOpenTelemetry

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesOpenTelemetry" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 4317,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 7745.7,
      maxRequestsPerSocket: 258106,
      enableProxyHeader: "<value>",
      captureHeaders: "<value>",
      activityLogSampleRate: "<value>",
      requestTimeout: 273.04,
      socketTimeout: 2178.2,
      keepAliveTimeout: 3683.08,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      protocol: "grpc",
      extractSpans: true,
      extractMetrics: false,
      otlpVersion: "1.3.1",
      authType: "textSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 2633.56,
      description: "approximate punctually mortally",
      username: "Donavon.Mohr82",
      password: "_mROJCOhV3vY75m",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      extractLogs: true,
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 4317,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 7745.7,
      maxRequestsPerSocket: 258106,
      enableProxyHeader: "<value>",
      captureHeaders: "<value>",
      activityLogSampleRate: "<value>",
      requestTimeout: 273.04,
      socketTimeout: 2178.2,
      keepAliveTimeout: 3683.08,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      protocol: "grpc",
      extractSpans: true,
      extractMetrics: false,
      otlpVersion: "1.3.1",
      authType: "textSecret",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 2633.56,
      description: "approximate punctually mortally",
      username: "Donavon.Mohr82",
      password: "_mROJCOhV3vY75m",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      extractLogs: true,
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesPrometheus

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesPrometheus" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "prometheus-source",
      type: "prometheus",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
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
      timeout: 3612.93,
      keepAliveTime: 5219.14,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 3276.83,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "secret",
      description: "unsteady disloyal slushy for bide",
      targetList: [
        "http://localhost:9090/metrics",
      ],
      recordType: "SRV",
      scrapePort: 8578.22,
      nameList: [
        "<value 1>",
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
          ],
        },
      ],
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9764.08,
      username: "Cynthia.Simonis",
      password: "7ZzsJA55UXc4BZR",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "prometheus-source",
      type: "prometheus",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
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
      timeout: 3612.93,
      keepAliveTime: 5219.14,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 3276.83,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authType: "secret",
      description: "unsteady disloyal slushy for bide",
      targetList: [
        "http://localhost:9090/metrics",
      ],
      recordType: "SRV",
      scrapePort: 8578.22,
      nameList: [
        "<value 1>",
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
          ],
        },
      ],
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v2",
      reuseConnections: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 9764.08,
      username: "Cynthia.Simonis",
      password: "7ZzsJA55UXc4BZR",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesPrometheusRw

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesPrometheusRw" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 4795.99,
      maxRequestsPerSocket: 458598,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 9308.64,
      requestTimeout: 2890.6,
      socketTimeout: 8919.65,
      keepAliveTimeout: 9952.48,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/write",
      authType: "basic",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "despite dream only beneath thankfully fussy even",
      username: "Guadalupe.Quigley-Rohan",
      password: "JEX2oyoGl8CWfXH",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10080,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 4795.99,
      maxRequestsPerSocket: 458598,
      enableProxyHeader: false,
      captureHeaders: true,
      activityLogSampleRate: 9308.64,
      requestTimeout: 2890.6,
      socketTimeout: 8919.65,
      keepAliveTimeout: 9952.48,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      prometheusAPI: "/write",
      authType: "basic",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "despite dream only beneath thankfully fussy even",
      username: "Guadalupe.Quigley-Rohan",
      password: "JEX2oyoGl8CWfXH",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesRawUdp

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesRawUdp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "raw-udp-source",
      type: "raw_udp",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 514,
      maxBufferSize: 1861.81,
      ipWhitelistRegex: "<value>",
      singleMsgUdpPackets: true,
      ingestRawBytes: false,
      udpSocketRxBufSize: 3671.83,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "extroverted um mob scarcely blowgun pish mid ecliptic yuck underneath",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "raw-udp-source",
      type: "raw_udp",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 514,
      maxBufferSize: 1861.81,
      ipWhitelistRegex: "<value>",
      singleMsgUdpPackets: true,
      ingestRawBytes: false,
      udpSocketRxBufSize: 3671.83,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "extroverted um mob scarcely blowgun pish mid ecliptic yuck underneath",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesS3

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesS3" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      reuseConnections: true,
      rejectUnauthorized: false,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 1422.75,
      maxMessages: 2333.04,
      visibilityTimeout: 3809.26,
      numReceivers: 6823.34,
      socketTimeout: 1902.85,
      skipOnError: true,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1121.7,
      enableSQSAssumeRole: false,
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
      parquetChunkSizeMB: 7242.84,
      parquetChunkDownloadTimeout: 5794.34,
      checkpointing: {
        enabled: false,
        retries: 8314.89,
      },
      pollTimeout: 7445.53,
      encoding: "<value>",
      tagAfterProcessing: false,
      description: "afore bank like delete arrogantly aircraft except terribly",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      reuseConnections: true,
      rejectUnauthorized: false,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 1422.75,
      maxMessages: 2333.04,
      visibilityTimeout: 3809.26,
      numReceivers: 6823.34,
      socketTimeout: 1902.85,
      skipOnError: true,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1121.7,
      enableSQSAssumeRole: false,
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
      parquetChunkSizeMB: 7242.84,
      parquetChunkDownloadTimeout: 5794.34,
      checkpointing: {
        enabled: false,
        retries: 8314.89,
      },
      pollTimeout: 7445.53,
      encoding: "<value>",
      tagAfterProcessing: false,
      description: "afore bank like delete arrogantly aircraft except terribly",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesS3Inventory

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesS3Inventory" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      ],
      staleChannelFlushMs: 7495.03,
      maxMessages: 7569.07,
      visibilityTimeout: 6101.19,
      numReceivers: 914.85,
      socketTimeout: 569.1,
      skipOnError: false,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3539.99,
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
      parquetChunkSizeMB: 9929.25,
      parquetChunkDownloadTimeout: 5943.7,
      checkpointing: {
        enabled: false,
        retries: 8314.89,
      },
      pollTimeout: 3477.91,
      checksumSuffix: "<value>",
      maxManifestSizeKB: 428993,
      validateInventoryFiles: true,
      description: "spew disappointment warp",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      ],
      staleChannelFlushMs: 7495.03,
      maxMessages: 7569.07,
      visibilityTimeout: 6101.19,
      numReceivers: 914.85,
      socketTimeout: 569.1,
      skipOnError: false,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3539.99,
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
      parquetChunkSizeMB: 9929.25,
      parquetChunkDownloadTimeout: 5943.7,
      checkpointing: {
        enabled: false,
        retries: 8314.89,
      },
      pollTimeout: 3477.91,
      checksumSuffix: "<value>",
      maxManifestSizeKB: 428993,
      validateInventoryFiles: true,
      description: "spew disappointment warp",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSecurityLake

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesSecurityLake" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 1327.36,
      maxMessages: 1885.98,
      visibilityTimeout: 6378.34,
      numReceivers: 4163.19,
      socketTimeout: 1182.18,
      skipOnError: true,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1424.12,
      enableSQSAssumeRole: false,
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
      parquetChunkSizeMB: 4079.52,
      parquetChunkDownloadTimeout: 39.71,
      checkpointing: {
        enabled: false,
        retries: 8314.89,
      },
      pollTimeout: 5969.53,
      encoding: "<value>",
      description: "over blind juicy",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      signatureVersion: "v2",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 1327.36,
      maxMessages: 1885.98,
      visibilityTimeout: 6378.34,
      numReceivers: 4163.19,
      socketTimeout: 1182.18,
      skipOnError: true,
      includeSqsMetadata: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 1424.12,
      enableSQSAssumeRole: false,
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
      parquetChunkSizeMB: 4079.52,
      parquetChunkDownloadTimeout: 39.71,
      checkpointing: {
        enabled: false,
        retries: 8314.89,
      },
      pollTimeout: 5969.53,
      encoding: "<value>",
      description: "over blind juicy",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSnmp

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesSnmp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "snmp-source",
      type: "snmp",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
            authProtocol: "none",
            authKey: "<value>",
            privProtocol: "aes256r",
            privKey: "<value>",
          },
        ],
      },
      maxBufferSize: 466.05,
      ipWhitelistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 8554.09,
      varbindsWithTypes: true,
      bestEffortParsing: false,
      description: "out yawningly how ick because vacation notarize reopen blond yawningly",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "snmp-source",
      type: "snmp",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
            authProtocol: "none",
            authKey: "<value>",
            privProtocol: "aes256r",
            privKey: "<value>",
          },
        ],
      },
      maxBufferSize: 466.05,
      ipWhitelistRegex: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 8554.09,
      varbindsWithTypes: true,
      bestEffortParsing: false,
      description: "out yawningly how ick because vacation notarize reopen blond yawningly",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunk

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesSplunk" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 9997,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 982.62,
      socketIdleTimeout: 3122.03,
      socketEndingMaxWait: 324.22,
      socketMaxLifespan: 4796.96,
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
        "<value 3>",
      ],
      staleChannelFlushMs: 9158.61,
      authTokens: [
        {
          token: "<value>",
          description: "defiantly armchair energetically naughty that via intent",
        },
      ],
      maxS2Sversion: "v3",
      description: "even very although declaration navigate pfft till unfortunate",
      useFwdTimezone: false,
      dropControlFields: true,
      extractMetrics: false,
      compress: "auto",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 9997,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 982.62,
      socketIdleTimeout: 3122.03,
      socketEndingMaxWait: 324.22,
      socketMaxLifespan: 4796.96,
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
        "<value 3>",
      ],
      staleChannelFlushMs: 9158.61,
      authTokens: [
        {
          token: "<value>",
          description: "defiantly armchair energetically naughty that via intent",
        },
      ],
      maxS2Sversion: "v3",
      description: "even very although declaration navigate pfft till unfortunate",
      useFwdTimezone: false,
      dropControlFields: true,
      extractMetrics: false,
      compress: "auto",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunkHec

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesSplunkHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
          description: "especially shear scarily aw",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 5857.72,
      maxRequestsPerSocket: 347434,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 8185.05,
      requestTimeout: 6800.62,
      socketTimeout: 6551.9,
      keepAliveTimeout: 7975.35,
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
        "<value 2>",
        "<value 3>",
      ],
      splunkHecAcks: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 6841.88,
      useFwdTimezone: true,
      dropControlFields: true,
      extractMetrics: true,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: true,
      description: "stranger yum now",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
          description: "especially shear scarily aw",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 5857.72,
      maxRequestsPerSocket: 347434,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 8185.05,
      requestTimeout: 6800.62,
      socketTimeout: 6551.9,
      keepAliveTimeout: 7975.35,
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
        "<value 2>",
        "<value 3>",
      ],
      splunkHecAcks: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 6841.88,
      useFwdTimezone: true,
      dropControlFields: true,
      extractMetrics: true,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: true,
      description: "stranger yum now",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSplunkSearch

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesSplunkSearch" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      logLevel: "error",
      requestTimeout: 1901.73,
      useRoundRobinDns: true,
      rejectUnauthorized: true,
      encoding: "<value>",
      keepAliveTime: 1234.69,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 8023.69,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 6735.17,
        limit: 8567.85,
        multiplier: 3551.76,
        codes: [
          2558.51,
          6985.43,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 3157.85,
      authType: "textSecret",
      description: "on uh-huh wonderfully um oh reasoning solemnly pity",
      username: "Andreanne54",
      password: "Y_tQeRW1Xwpask7",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      logLevel: "error",
      requestTimeout: 1901.73,
      useRoundRobinDns: true,
      rejectUnauthorized: true,
      encoding: "<value>",
      keepAliveTime: 1234.69,
      jobTimeout: "<value>",
      maxMissedKeepAlives: 8023.69,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 6735.17,
        limit: 8567.85,
        multiplier: 3551.76,
        codes: [
          2558.51,
          6985.43,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 3157.85,
      authType: "textSecret",
      description: "on uh-huh wonderfully um oh reasoning solemnly pity",
      username: "Andreanne54",
      password: "Y_tQeRW1Xwpask7",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSqs

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesSqs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 478.81,
      maxMessages: 5412.89,
      visibilityTimeout: 5609.62,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pollTimeout: 4814.22,
      description: "readily swear inasmuch messy hmph",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      numReceivers: 8779.41,
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      reuseConnections: false,
      rejectUnauthorized: false,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 478.81,
      maxMessages: 5412.89,
      visibilityTimeout: 5609.62,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pollTimeout: 4814.22,
      description: "readily swear inasmuch messy hmph",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      numReceivers: 8779.41,
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSyslog

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesSyslog" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 514,
      tcpPort: 8601.43,
      maxBufferSize: 7326.95,
      ipWhitelistRegex: "<value>",
      timestampTimezone: "<value>",
      singleMsgUdpPackets: false,
      enableProxyHeader: true,
      keepFieldsList: [
        "<value 1>",
      ],
      octetCounting: false,
      inferFraming: true,
      strictlyInferOctetCounting: false,
      allowNonStandardAppName: true,
      maxActiveCxn: 2378.14,
      socketIdleTimeout: 634.75,
      socketEndingMaxWait: 5307.64,
      socketMaxLifespan: 3622.72,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 193.15,
      enableLoadBalancing: true,
      description: "char safe aw",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      udpPort: 514,
      tcpPort: 8601.43,
      maxBufferSize: 7326.95,
      ipWhitelistRegex: "<value>",
      timestampTimezone: "<value>",
      singleMsgUdpPackets: false,
      enableProxyHeader: true,
      keepFieldsList: [
        "<value 1>",
      ],
      octetCounting: false,
      inferFraming: true,
      strictlyInferOctetCounting: false,
      allowNonStandardAppName: true,
      maxActiveCxn: 2378.14,
      socketIdleTimeout: 634.75,
      socketEndingMaxWait: 5307.64,
      socketMaxLifespan: 3622.72,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 193.15,
      enableLoadBalancing: true,
      description: "char safe aw",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSystemMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesSystemMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "system-metrics-source",
      type: "system_metrics",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 7133.48,
      host: {
        mode: "all",
        custom: {
          system: {
            mode: "disabled",
            processes: true,
          },
          cpu: {
            mode: "custom",
            perCpu: true,
            detail: true,
            time: true,
          },
          memory: {
            mode: "all",
            detail: true,
          },
          network: {
            mode: "custom",
            detail: false,
            protocols: true,
            devices: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            perInterface: true,
          },
          disk: {
            mode: "custom",
            detail: false,
            inodes: true,
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
              "<value 2>",
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
        mode: "all",
        dockerSocket: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        dockerTimeout: 6239.24,
        filters: [
          {
            expr: "<value>",
          },
        ],
        allContainers: true,
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
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      description: "underneath synthesise mysteriously transcend cod till",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "system-metrics-source",
      type: "system_metrics",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 7133.48,
      host: {
        mode: "all",
        custom: {
          system: {
            mode: "disabled",
            processes: true,
          },
          cpu: {
            mode: "custom",
            perCpu: true,
            detail: true,
            time: true,
          },
          memory: {
            mode: "all",
            detail: true,
          },
          network: {
            mode: "custom",
            detail: false,
            protocols: true,
            devices: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            perInterface: true,
          },
          disk: {
            mode: "custom",
            detail: false,
            inodes: true,
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
              "<value 2>",
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
        mode: "all",
        dockerSocket: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        dockerTimeout: 6239.24,
        filters: [
          {
            expr: "<value>",
          },
        ],
        allContainers: true,
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
        enable: false,
        timeWindow: "<value>",
        maxDataSize: "<value>",
        maxDataTime: "<value>",
        compress: "none",
        destPath: "<value>",
      },
      description: "underneath synthesise mysteriously transcend cod till",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesSystemState

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesSystemState" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 3812.09,
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
          enable: false,
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
          enable: false,
        },
        firewall: {
          enable: false,
        },
        services: {
          enable: true,
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
      description: "rapidly drain as imagineer mystify cone",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 3812.09,
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
          enable: false,
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
          enable: false,
        },
        firewall: {
          enable: false,
        },
        services: {
          enable: true,
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
      description: "rapidly drain as imagineer mystify cone",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesTcp

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesTcp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 6281.13,
      socketIdleTimeout: 7100.03,
      socketEndingMaxWait: 8703.42,
      socketMaxLifespan: 4403.86,
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
      staleChannelFlushMs: 9972.7,
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
      description: "weary who cemetery fairly draft tempting separately bah um",
      authToken: "<value>",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 6281.13,
      socketIdleTimeout: 7100.03,
      socketEndingMaxWait: 8703.42,
      socketMaxLifespan: 4403.86,
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
      staleChannelFlushMs: 9972.7,
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
      description: "weary who cemetery fairly draft tempting separately bah um",
      authToken: "<value>",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesTcpjson

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesTcpjson" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 9585.98,
      socketIdleTimeout: 118.72,
      socketEndingMaxWait: 2048.9,
      socketMaxLifespan: 8081.35,
      enableProxyHeader: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: false,
      authType: "manual",
      description: "fence circulate hence",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 10090,
      tls: {
        disabled: true,
        requestCert: true,
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "<value>",
      maxActiveCxn: 9585.98,
      socketIdleTimeout: 118.72,
      socketEndingMaxWait: 2048.9,
      socketMaxLifespan: 8081.35,
      enableProxyHeader: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      enableLoadBalancing: false,
      authType: "manual",
      description: "fence circulate hence",
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
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWef

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesWef" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "wef-source",
      type: "wef",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 5985,
      authMethod: "kerberos",
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        requestCert: true,
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        commonNameRegex: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
        ocspCheck: false,
        keytab: "<value>",
        principal: "<value>",
        ocspCheckFailClose: true,
      },
      maxActiveReq: 8086.3,
      maxRequestsPerSocket: 962706,
      enableProxyHeader: false,
      captureHeaders: true,
      keepAliveTimeout: 1338.8,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      socketTimeout: 2509.39,
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
          readExistingEvents: false,
          sendBookmarks: false,
          compress: true,
          targets: [],
          locale: "nl",
          querySelector: "simple",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          queries: [
            {
              path: "/home/user/dir",
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
      description: "considering quinoa knowledgeable jut er busily ragged",
      logFingerprintMismatch: true,
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "wef-source",
      type: "wef",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 5985,
      authMethod: "kerberos",
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        requestCert: true,
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        commonNameRegex: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
        ocspCheck: false,
        keytab: "<value>",
        principal: "<value>",
        ocspCheckFailClose: true,
      },
      maxActiveReq: 8086.3,
      maxRequestsPerSocket: 962706,
      enableProxyHeader: false,
      captureHeaders: true,
      keepAliveTimeout: 1338.8,
      enableHealthCheck: false,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      socketTimeout: 2509.39,
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
          readExistingEvents: false,
          sendBookmarks: false,
          compress: true,
          targets: [],
          locale: "nl",
          querySelector: "simple",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          queries: [
            {
              path: "/home/user/dir",
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
      description: "considering quinoa knowledgeable jut er busily ragged",
      logFingerprintMismatch: true,
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWinEventLogs

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesWinEventLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
    input: {
      id: "win-event-logs-source",
      type: "win_event_logs",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      logNames: [
        "Application",
        "System",
      ],
      readMode: "oldest",
      eventFormat: "xml",
      disableNativeModule: true,
      interval: 7894.14,
      batchSize: 8937.18,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxEventBytes: 7834.81,
      description: "right woot sheepishly",
      disableJsonRendering: false,
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    input: {
      id: "win-event-logs-source",
      type: "win_event_logs",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      logNames: [
        "Application",
        "System",
      ],
      readMode: "oldest",
      eventFormat: "xml",
      disableNativeModule: true,
      interval: 7894.14,
      batchSize: 8937.18,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxEventBytes: 7834.81,
      description: "right woot sheepishly",
      disableJsonRendering: false,
      disableXmlRendering: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWindowsMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesWindowsMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 5263.2,
      host: {
        mode: "custom",
        custom: {
          system: {
            mode: "all",
            detail: true,
          },
          cpu: {
            mode: "disabled",
            perCpu: false,
            detail: false,
            time: true,
          },
          memory: {
            mode: "all",
            detail: false,
          },
          network: {
            mode: "all",
            detail: true,
            protocols: true,
            devices: [
              "<value 1>",
            ],
            perInterface: true,
          },
          disk: {
            mode: "disabled",
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
      description: "meh speedily for nor chairperson after",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      interval: 5263.2,
      host: {
        mode: "custom",
        custom: {
          system: {
            mode: "all",
            detail: true,
          },
          cpu: {
            mode: "disabled",
            perCpu: false,
            detail: false,
            time: true,
          },
          memory: {
            mode: "all",
            detail: false,
          },
          network: {
            mode: "all",
            detail: true,
            protocols: true,
            devices: [
              "<value 1>",
            ],
            perInterface: true,
          },
          disk: {
            mode: "disabled",
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
      description: "meh speedily for nor chairperson after",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWiz

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesWiz" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      authAudienceOverride: "<value>",
      clientId: "client-id",
      contentConfig: [],
      requestTimeout: 8620.43,
      keepAliveTime: 5269.64,
      maxMissedKeepAlives: 2551.82,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 6735.17,
        limit: 8567.85,
        multiplier: 3551.76,
        codes: [
          2558.51,
          6985.43,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "since after degrease terribly deplore gee",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_endpoint: "<value>",
      __template_authUrl: "https://spirited-valentine.com",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
        compress: "gzip",
        pqControls: {},
      },
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      authAudienceOverride: "<value>",
      clientId: "client-id",
      contentConfig: [],
      requestTimeout: 8620.43,
      keepAliveTime: 5269.64,
      maxMissedKeepAlives: 2551.82,
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "<value>",
        interval: 6735.17,
        limit: 8567.85,
        multiplier: 3551.76,
        codes: [
          2558.51,
          6985.43,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "since after degrease terribly deplore gee",
      clientSecret: "<value>",
      textSecret: "<value>",
      __template_endpoint: "<value>",
      __template_authUrl: "https://spirited-valentine.com",
      __template_clientId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesWizWebhook

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesWizWebhook" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 2170.66,
      maxRequestsPerSocket: 614460,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 2811.72,
      requestTimeout: 7524.94,
      socketTimeout: 2393.38,
      keepAliveTimeout: 2675.63,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 3989.1,
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
        "<value 3>",
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "ew honestly finally bravely upwardly since inexperienced affect soft",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "pace explode ack scope unwritten jellyfish antique likewise loudly vainly",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 2170.66,
      maxRequestsPerSocket: 614460,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 2811.72,
      requestTimeout: 7524.94,
      socketTimeout: 2393.38,
      keepAliveTimeout: 2675.63,
      enableHealthCheck: true,
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 3989.1,
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
        "<value 3>",
      ],
      authTokensExt: [
        {
          token: "<value>",
          description: "ew honestly finally bravely upwardly since inexperienced affect soft",
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
      description: "pace explode ack scope unwritten jellyfish antique likewise loudly vainly",
      __template_host: "<value>",
      __template_port: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputCreateExamplesZscalerHec

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputCreateExamplesZscalerHec" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
          enabled: true,
          description: "underneath drat gummy final pfft reword crowded council",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3516.58,
      maxRequestsPerSocket: 835318,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 9261.84,
      requestTimeout: 1836.64,
      socketTimeout: 4483.6,
      keepAliveTimeout: 2770.33,
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
      hecAcks: false,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: true,
      description: "dearly bump vulgarise left beautifully extremely",
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
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
          enabled: true,
          description: "underneath drat gummy final pfft reword crowded council",
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
        rejectUnauthorized: true,
        commonNameRegex: "<value>",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 3516.58,
      maxRequestsPerSocket: 835318,
      enableProxyHeader: false,
      captureHeaders: false,
      activityLogSampleRate: 9261.84,
      requestTimeout: 1836.64,
      socketTimeout: 4483.6,
      keepAliveTimeout: 2770.33,
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
      hecAcks: false,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: true,
      description: "dearly bump vulgarise left beautifully extremely",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_hecAPI: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputExamplesCribl

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputExamplesCribl" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      description: "wherever qualified questionably fork amid",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "smart",
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      description: "wherever qualified questionably fork amid",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: InputExamplesCriblMetrics

<!-- UsageSnippet language="typescript" operationID="updateInputSystemByPackAndId" method="patch" path="/p/{pack}/system/inputs/{id}" example="InputExamplesCriblMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.update({
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      description: "word what fall expense tromp nerve",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { packsSourcesUpdate } from "cribl-control-plane/funcs/packsSourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
        maxBufferSize: 5318.64,
        commitFrequency: 3762.63,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/sbin",
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
      description: "word what fall expense tromp nerve",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateInputSystemByPackAndIdRequest](../../models/operations/updateinputsystembypackandidrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Delete the specified Source within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteInputSystemByPackAndId" method="delete" path="/p/{pack}/system/inputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.delete({
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
import { packsSourcesDelete } from "cribl-control-plane/funcs/packsSourcesDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesDelete(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteInputSystemByPackAndIdRequest](../../models/operations/deleteinputsystembypackandidrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
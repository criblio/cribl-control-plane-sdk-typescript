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
    containerName: "my-container",
    stagePath: "/tmp/staging",
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
    containerName: "my-container",
    stagePath: "/tmp/staging",
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
    clusterUrl: "https://mycluster.kusto.windows.net",
    database: "mydatabase",
    table: "mytable",
    ingestMode: "streaming",
    oauthEndpoint: "https://login.microsoftonline.com",
    tenantId: "tenant-id",
    clientId: "client-id",
    scope: "https://mycluster.kusto.windows.net/.default",
    oauthType: "clientSecret",
    clientSecret: "client-secret",
    format: "json",
    compress: "gzip",
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
    clusterUrl: "https://mycluster.kusto.windows.net",
    database: "mydatabase",
    table: "mytable",
    ingestMode: "streaming",
    oauthEndpoint: "https://login.microsoftonline.com",
    tenantId: "tenant-id",
    clientId: "client-id",
    scope: "https://mycluster.kusto.windows.net/.default",
    oauthType: "clientSecret",
    clientSecret: "client-secret",
    format: "json",
    compress: "gzip",
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
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topic: "logs",
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
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topic: "logs",
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
    logType: "Cribl",
    authType: "manual",
    workspaceId: "workspace-id",
    workspaceKey: "workspace-key",
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
    logType: "Cribl",
    authType: "manual",
    workspaceId: "workspace-id",
    workspaceKey: "workspace-key",
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
    region: "us",
    logType: "UNKNOWN",
    gcpProjectId: "my-project",
    gcpInstance: "customer-id",
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
    region: "us",
    logType: "UNKNOWN",
    gcpProjectId: "my-project",
    gcpInstance: "customer-id",
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
    url: "http://localhost:8123/",
    database: "mydb",
    tableName: "mytable",
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
    url: "http://localhost:8123/",
    database: "mydb",
    tableName: "mytable",
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
    endpoint: "https://account-id.r2.cloudflarestorage.com",
    bucket: "my-bucket",
    stagePath: "/tmp/staging",
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
    endpoint: "https://account-id.r2.cloudflarestorage.com",
    bucket: "my-bucket",
    stagePath: "/tmp/staging",
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
    logGroupName: "my-log-group",
    logStreamName: "my-log-stream",
    region: "us-east-1",
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
    logGroupName: "my-log-group",
    logStreamName: "my-log-stream",
    region: "us-east-1",
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
    brokers: [
      "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
    ],
    topic: "logs",
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
    brokers: [
      "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
    ],
    topic: "logs",
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
    systemFields: [
      "cribl_pipe",
    ],
    streamtags: [],
    loadBalanced: false,
    tls: {
      disabled: true,
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
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    useRoundRobinDns: true,
    url: "https://0.0.0.0:10200",
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
    systemFields: [
      "cribl_pipe",
    ],
    streamtags: [],
    loadBalanced: false,
    tls: {
      disabled: true,
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
    },
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    useRoundRobinDns: true,
    url: "https://0.0.0.0:10200",
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
    host: "localhost",
    port: 10090,
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
    host: "localhost",
    port: 10090,
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
    url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
    format: "JSON",
    authType: "manual",
    token: "your-token",
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
    url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
    format: "JSON",
    authType: "manual",
    token: "your-token",
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
    workspaceId: "your-workspace-id",
    scope: "my-scope",
    clientId: "your-client-id",
    catalog: "my-catalog",
    schema: "my-schema",
    eventsVolumeName: "my-volume",
    clientTextSecret: "your-client-secret",
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
    workspaceId: "your-workspace-id",
    scope: "my-scope",
    clientId: "your-client-id",
    catalog: "my-catalog",
    schema: "my-schema",
    eventsVolumeName: "my-volume",
    clientTextSecret: "your-client-secret",
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
    apiKey: "your-api-key",
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
    apiKey: "your-api-key",
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
    bucket: "my-bucket",
    region: "us-east-1",
    stagePath: "/tmp/staging",
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
    bucket: "my-bucket",
    region: "us-east-1",
    stagePath: "/tmp/staging",
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
    authType: "token",
    format: "json_array",
    endpoint: "cloud",
    telemetryType: "logs",
    token: "your-api-key",
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
    authType: "token",
    format: "json_array",
    endpoint: "cloud",
    telemetryType: "logs",
    token: "your-api-key",
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
    protocol: "http",
    endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
    otlpVersion: "1.3.1",
    endpointType: "saas",
    tokenSecret: "your-token-secret",
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
    protocol: "http",
    endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
    otlpVersion: "1.3.1",
    endpointType: "saas",
    tokenSecret: "your-token-secret",
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
    index: "logs",
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
    index: "logs",
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
    url: "my-cloud-id",
    index: "logs",
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
    url: "my-cloud-id",
    index: "logs",
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
    bucket: "my-bucket",
    region: "us-east1",
    stagePath: "/tmp/staging",
    endpoint: "https://storage.googleapis.com",
    collectorInstanceId: "11112222-3333-4444-5555-666677778888",
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
    bucket: "my-bucket",
    region: "us-east1",
    stagePath: "/tmp/staging",
    endpoint: "https://storage.googleapis.com",
    collectorInstanceId: "11112222-3333-4444-5555-666677778888",
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
    destPath: "/var/log/output",
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
    destPath: "/var/log/output",
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
    logFormatType: "unstructured",
    region: "us",
    customerId: "customer-id",
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
    logFormatType: "unstructured",
    region: "us",
    customerId: "customer-id",
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
    logLocationType: "project",
    logNameExpression: "my-log",
    logLocationExpression: "my-project",
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
    logLocationType: "project",
    logNameExpression: "my-log",
    logLocationExpression: "my-project",
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
    bucket: "my-bucket",
    region: "us-east1",
    endpoint: "https://storage.googleapis.com",
    stagePath: "/tmp/staging",
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
    bucket: "my-bucket",
    region: "us-east1",
    endpoint: "https://storage.googleapis.com",
    stagePath: "/tmp/staging",
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
    topicName: "my-topic",
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
    topicName: "my-topic",
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
    lokiUrl: "https://logs-prod-us-central1.grafana.net",
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
    lokiUrl: "https://logs-prod-us-central1.grafana.net",
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
    protocol: "tcp",
    host: "localhost",
    port: 2003,
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
    protocol: "tcp",
    host: "localhost",
    port: 2003,
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
    dataset: "my-dataset",
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
    dataset: "my-dataset",
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
    url: "https://cloud.us.humio.com/api/v1/ingest/hec",
    format: "JSON",
    authType: "manual",
    token: "your-token",
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
    url: "https://cloud.us.humio.com/api/v1/ingest/hec",
    format: "JSON",
    authType: "manual",
    token: "your-token",
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
    url: "http://localhost:8086",
    database: "mydb",
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
    url: "http://localhost:8086",
    database: "mydb",
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
    brokers: [
      "localhost:9092",
    ],
    topic: "logs",
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
    brokers: [
      "localhost:9092",
    ],
    topic: "logs",
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
    streamName: "my-stream",
    region: "us-east-1",
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
    streamName: "my-stream",
    region: "us-east-1",
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
    url: "http://localhost:3100/loki/api/v1/push",
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
    url: "http://localhost:3100/loki/api/v1/push",
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
    topic: "logs",
    bootstrap_server: "myeventstream.servicebus.windows.net:9093",
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
    topic: "logs",
    bootstrap_server: "myeventstream.servicebus.windows.net:9093",
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
    endpoint: "http://localhost:9000",
    bucket: "my-bucket",
    stagePath: "/tmp/staging",
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
    endpoint: "http://localhost:9000",
    bucket: "my-bucket",
    stagePath: "/tmp/staging",
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
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topic: "logs",
    awsAuthenticationMethod: "auto",
    region: "us-east-1",
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
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topic: "logs",
    awsAuthenticationMethod: "auto",
    region: "us-east-1",
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
    hosts: [
      {
        host: "localhost",
        port: 2055,
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
    id: "netflow-output",
    type: "netflow",
    hosts: [
      {
        host: "localhost",
        port: 2055,
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
    apiKey: "your-api-key",
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
    apiKey: "your-api-key",
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
    accountId: "123456",
    eventType: "CriblEvent",
    apiKey: "your-api-key",
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
    accountId: "123456",
    eventType: "CriblEvent",
    apiKey: "your-api-key",
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
    endpoint: "http://localhost:4317",
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
    endpoint: "http://localhost:4317",
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
    url: "http://localhost:9091/api/v1/write",
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
    url: "http://localhost:9091/api/v1/write",
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
    rules: [
      {
        filter: "true",
        output: "my-output",
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
    id: "router-output",
    type: "router",
    rules: [
      {
        filter: "true",
        output: "my-output",
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
    bucket: "my-bucket",
    region: "us-east-1",
    stagePath: "/tmp/staging",
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
    bucket: "my-bucket",
    region: "us-east-1",
    stagePath: "/tmp/staging",
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
    bucket: "my-bucket",
    region: "us-east-1",
    assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
    stagePath: "/tmp/staging",
    accountId: "123456789012",
    customSource: "my-custom-source",
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
    bucket: "my-bucket",
    region: "us-east-1",
    assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
    stagePath: "/tmp/staging",
    accountId: "123456789012",
    customSource: "my-custom-source",
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
    loginUrl: "https://login.microsoftonline.com",
    secret: "client-secret",
    client_id: "client-id",
    endpointURLConfiguration: "url",
    url: "https://your-workspace.ingest.monitor.azure.com",
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
    loginUrl: "https://login.microsoftonline.com",
    secret: "client-secret",
    client_id: "client-id",
    endpointURLConfiguration: "url",
    url: "https://your-workspace.ingest.monitor.azure.com",
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
    region: "US",
    endpoint: "/services/collector/event",
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
    region: "US",
    endpoint: "/services/collector/event",
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
    endpoint: "ingest.lightstep.com:443",
    tokenSecret: "your-token-secret",
    otlpVersion: "1.3.1",
    protocol: "http",
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
    endpoint: "ingest.lightstep.com:443",
    tokenSecret: "your-token-secret",
    otlpVersion: "1.3.1",
    protocol: "http",
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
    realm: "us0",
    token: "your-token",
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
    realm: "us0",
    token: "your-token",
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
    hosts: [
      {
        host: "192.168.1.1",
        port: 161,
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
    id: "snmp-output",
    type: "snmp",
    hosts: [
      {
        host: "192.168.1.1",
        port: 161,
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
    topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
    messageGroupId: "my-message-group",
    region: "us-east-1",
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
    topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
    messageGroupId: "my-message-group",
    region: "us-east-1",
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
    host: "localhost",
    port: 9997,
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
    host: "localhost",
    port: 9997,
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
    hosts: [
      {
        host: "localhost",
        port: 9997,
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
    id: "splunk-lb-output",
    type: "splunk_lb",
    hosts: [
      {
        host: "localhost",
        port: 9997,
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
    queueName: "my-queue",
    queueType: "standard",
    region: "us-east-1",
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
    queueName: "my-queue",
    queueType: "standard",
    region: "us-east-1",
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
    protocol: "udp",
    host: "localhost",
    port: 8125,
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
    protocol: "udp",
    host: "localhost",
    port: 8125,
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
    protocol: "udp",
    host: "localhost",
    port: 8125,
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
    protocol: "udp",
    host: "localhost",
    port: 8125,
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
    url: "https://endpoint1.collection.us2.sumologic.com",
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
    url: "https://endpoint1.collection.us2.sumologic.com",
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
    host: "localhost",
    port: 514,
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
    host: "localhost",
    port: 514,
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
    host: "localhost",
    port: 10090,
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
    host: "localhost",
    port: 10090,
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
    domain: "longboard",
    token: "your-token",
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
    domain: "longboard",
    token: "your-token",
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
    url: "https://example.com/webhook",
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
    url: "https://example.com/webhook",
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
    authType: "manual",
    wiz_connector_id: "00000000-0000-0000-0000-000000000000",
    wiz_environment: "test",
    data_center: "us1",
    wiz_sourcetype: "placeholder",
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
    authType: "manual",
    wiz_connector_id: "00000000-0000-0000-0000-000000000000",
    wiz_environment: "test",
    data_center: "us1",
    wiz_sourcetype: "placeholder",
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
      containerName: "my-container",
      stagePath: "/tmp/staging",
    },
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
      containerName: "my-container",
      stagePath: "/tmp/staging",
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
      clusterUrl: "https://mycluster.kusto.windows.net",
      database: "mydatabase",
      table: "mytable",
      ingestMode: "streaming",
      oauthEndpoint: "https://login.microsoftonline.com",
      tenantId: "tenant-id",
      clientId: "client-id",
      scope: "https://mycluster.kusto.windows.net/.default",
      oauthType: "clientSecret",
      clientSecret: "client-secret",
      format: "json",
      compress: "gzip",
    },
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
      clusterUrl: "https://mycluster.kusto.windows.net",
      database: "mydatabase",
      table: "mytable",
      ingestMode: "streaming",
      oauthEndpoint: "https://login.microsoftonline.com",
      tenantId: "tenant-id",
      clientId: "client-id",
      scope: "https://mycluster.kusto.windows.net/.default",
      oauthType: "clientSecret",
      clientSecret: "client-secret",
      format: "json",
      compress: "gzip",
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
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topic: "logs",
    },
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
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topic: "logs",
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
      logType: "Cribl",
      authType: "manual",
      workspaceId: "workspace-id",
      workspaceKey: "workspace-key",
    },
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
      logType: "Cribl",
      authType: "manual",
      workspaceId: "workspace-id",
      workspaceKey: "workspace-key",
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
      region: "us",
      logType: "UNKNOWN",
      gcpProjectId: "my-project",
      gcpInstance: "customer-id",
    },
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
      region: "us",
      logType: "UNKNOWN",
      gcpProjectId: "my-project",
      gcpInstance: "customer-id",
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
      url: "http://localhost:8123/",
      database: "mydb",
      tableName: "mytable",
    },
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
      url: "http://localhost:8123/",
      database: "mydb",
      tableName: "mytable",
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
      endpoint: "https://account-id.r2.cloudflarestorage.com",
      bucket: "my-bucket",
      stagePath: "/tmp/staging",
    },
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
      endpoint: "https://account-id.r2.cloudflarestorage.com",
      bucket: "my-bucket",
      stagePath: "/tmp/staging",
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
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      region: "us-east-1",
    },
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
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      region: "us-east-1",
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
      brokers: [
        "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
      ],
      topic: "logs",
    },
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
      brokers: [
        "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
      ],
      topic: "logs",
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
    },
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
    },
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
      systemFields: [
        "cribl_pipe",
      ],
      streamtags: [],
      loadBalanced: false,
      tls: {
        disabled: true,
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
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      useRoundRobinDns: true,
      url: "https://0.0.0.0:10200",
    },
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
      systemFields: [
        "cribl_pipe",
      ],
      streamtags: [],
      loadBalanced: false,
      tls: {
        disabled: true,
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
      },
      responseHonorRetryAfterHeader: true,
      onBackpressure: "block",
      useRoundRobinDns: true,
      url: "https://0.0.0.0:10200",
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
      host: "localhost",
      port: 10090,
    },
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
      host: "localhost",
      port: 10090,
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
      url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
      format: "JSON",
      authType: "manual",
      token: "your-token",
    },
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
      url: "https://ingest.us.crowdstrike.com/api/ingest/hec/connection-id/v1/services/collector",
      format: "JSON",
      authType: "manual",
      token: "your-token",
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
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
    },
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
      workspaceId: "your-workspace-id",
      scope: "my-scope",
      clientId: "your-client-id",
      catalog: "my-catalog",
      schema: "my-schema",
      eventsVolumeName: "my-volume",
      clientTextSecret: "your-client-secret",
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
      apiKey: "your-api-key",
    },
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
      apiKey: "your-api-key",
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
    },
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
    },
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
      bucket: "my-bucket",
      region: "us-east-1",
      stagePath: "/tmp/staging",
    },
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
      bucket: "my-bucket",
      region: "us-east-1",
      stagePath: "/tmp/staging",
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
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      token: "your-api-key",
    },
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
      authType: "token",
      format: "json_array",
      endpoint: "cloud",
      telemetryType: "logs",
      token: "your-api-key",
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
      protocol: "http",
      endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
      otlpVersion: "1.3.1",
      endpointType: "saas",
      tokenSecret: "your-token-secret",
    },
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
      protocol: "http",
      endpoint: "https://your-environment.live.dynatrace.com/api/v2/otlp",
      otlpVersion: "1.3.1",
      endpointType: "saas",
      tokenSecret: "your-token-secret",
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
      index: "logs",
    },
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
      index: "logs",
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
      url: "my-cloud-id",
      index: "logs",
    },
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
      url: "my-cloud-id",
      index: "logs",
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
      bucket: "my-bucket",
      region: "us-east1",
      stagePath: "/tmp/staging",
      endpoint: "https://storage.googleapis.com",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
    },
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
      bucket: "my-bucket",
      region: "us-east1",
      stagePath: "/tmp/staging",
      endpoint: "https://storage.googleapis.com",
      collectorInstanceId: "11112222-3333-4444-5555-666677778888",
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
      destPath: "/var/log/output",
    },
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
      destPath: "/var/log/output",
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
      logFormatType: "unstructured",
      region: "us",
      customerId: "customer-id",
    },
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
      logFormatType: "unstructured",
      region: "us",
      customerId: "customer-id",
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
      logLocationType: "project",
      logNameExpression: "my-log",
      logLocationExpression: "my-project",
    },
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
      logLocationType: "project",
      logNameExpression: "my-log",
      logLocationExpression: "my-project",
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
      bucket: "my-bucket",
      region: "us-east1",
      endpoint: "https://storage.googleapis.com",
      stagePath: "/tmp/staging",
    },
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
      bucket: "my-bucket",
      region: "us-east1",
      endpoint: "https://storage.googleapis.com",
      stagePath: "/tmp/staging",
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
      topicName: "my-topic",
    },
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
      topicName: "my-topic",
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
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
    },
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
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
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
      protocol: "tcp",
      host: "localhost",
      port: 2003,
    },
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
      protocol: "tcp",
      host: "localhost",
      port: 2003,
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
      dataset: "my-dataset",
    },
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
      dataset: "my-dataset",
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
      url: "https://cloud.us.humio.com/api/v1/ingest/hec",
      format: "JSON",
      authType: "manual",
      token: "your-token",
    },
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
      url: "https://cloud.us.humio.com/api/v1/ingest/hec",
      format: "JSON",
      authType: "manual",
      token: "your-token",
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
      url: "http://localhost:8086",
      database: "mydb",
    },
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
      url: "http://localhost:8086",
      database: "mydb",
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
      brokers: [
        "localhost:9092",
      ],
      topic: "logs",
    },
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
      brokers: [
        "localhost:9092",
      ],
      topic: "logs",
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
      streamName: "my-stream",
      region: "us-east-1",
    },
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
      streamName: "my-stream",
      region: "us-east-1",
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
      url: "http://localhost:3100/loki/api/v1/push",
    },
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
      url: "http://localhost:3100/loki/api/v1/push",
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
      topic: "logs",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
    },
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
      topic: "logs",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
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
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      stagePath: "/tmp/staging",
    },
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
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      stagePath: "/tmp/staging",
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
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topic: "logs",
      awsAuthenticationMethod: "auto",
      region: "us-east-1",
    },
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
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topic: "logs",
      awsAuthenticationMethod: "auto",
      region: "us-east-1",
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
      hosts: [
        {
          host: "localhost",
          port: 2055,
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
      id: "netflow-output",
      type: "netflow",
      hosts: [
        {
          host: "localhost",
          port: 2055,
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
      apiKey: "your-api-key",
    },
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
      apiKey: "your-api-key",
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
      accountId: "123456",
      eventType: "CriblEvent",
      apiKey: "your-api-key",
    },
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
      accountId: "123456",
      eventType: "CriblEvent",
      apiKey: "your-api-key",
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
      endpoint: "http://localhost:4317",
    },
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
      endpoint: "http://localhost:4317",
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
      url: "http://localhost:9091/api/v1/write",
    },
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
      url: "http://localhost:9091/api/v1/write",
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
    },
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
      rules: [
        {
          filter: "true",
          output: "my-output",
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
      id: "router-output",
      type: "router",
      rules: [
        {
          filter: "true",
          output: "my-output",
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
      bucket: "my-bucket",
      region: "us-east-1",
      stagePath: "/tmp/staging",
    },
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
      bucket: "my-bucket",
      region: "us-east-1",
      stagePath: "/tmp/staging",
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
      bucket: "my-bucket",
      region: "us-east-1",
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      stagePath: "/tmp/staging",
      accountId: "123456789012",
      customSource: "my-custom-source",
    },
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
      bucket: "my-bucket",
      region: "us-east-1",
      assumeRoleArn: "arn:aws:iam::123456789012:role/my-role",
      stagePath: "/tmp/staging",
      accountId: "123456789012",
      customSource: "my-custom-source",
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
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      endpointURLConfiguration: "url",
      url: "https://your-workspace.ingest.monitor.azure.com",
    },
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
      loginUrl: "https://login.microsoftonline.com",
      secret: "client-secret",
      client_id: "client-id",
      endpointURLConfiguration: "url",
      url: "https://your-workspace.ingest.monitor.azure.com",
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
      region: "US",
      endpoint: "/services/collector/event",
    },
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
      region: "US",
      endpoint: "/services/collector/event",
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
      endpoint: "ingest.lightstep.com:443",
      tokenSecret: "your-token-secret",
      otlpVersion: "1.3.1",
      protocol: "http",
    },
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
      endpoint: "ingest.lightstep.com:443",
      tokenSecret: "your-token-secret",
      otlpVersion: "1.3.1",
      protocol: "http",
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
      realm: "us0",
      token: "your-token",
    },
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
      realm: "us0",
      token: "your-token",
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
      hosts: [
        {
          host: "192.168.1.1",
          port: 161,
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
      id: "snmp-output",
      type: "snmp",
      hosts: [
        {
          host: "192.168.1.1",
          port: 161,
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
      topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
      messageGroupId: "my-message-group",
      region: "us-east-1",
    },
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
      topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
      messageGroupId: "my-message-group",
      region: "us-east-1",
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
      host: "localhost",
      port: 9997,
    },
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
      host: "localhost",
      port: 9997,
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
    },
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
      hosts: [
        {
          host: "localhost",
          port: 9997,
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
      id: "splunk-lb-output",
      type: "splunk_lb",
      hosts: [
        {
          host: "localhost",
          port: 9997,
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
      queueName: "my-queue",
      queueType: "standard",
      region: "us-east-1",
    },
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
      queueName: "my-queue",
      queueType: "standard",
      region: "us-east-1",
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
      protocol: "udp",
      host: "localhost",
      port: 8125,
    },
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
      protocol: "udp",
      host: "localhost",
      port: 8125,
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
      protocol: "udp",
      host: "localhost",
      port: 8125,
    },
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
      protocol: "udp",
      host: "localhost",
      port: 8125,
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
      url: "https://endpoint1.collection.us2.sumologic.com",
    },
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
      url: "https://endpoint1.collection.us2.sumologic.com",
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
      host: "localhost",
      port: 514,
    },
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
      host: "localhost",
      port: 514,
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
      host: "localhost",
      port: 10090,
    },
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
      host: "localhost",
      port: 10090,
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
      domain: "longboard",
      token: "your-token",
    },
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
      domain: "longboard",
      token: "your-token",
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
      url: "https://example.com/webhook",
    },
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
      url: "https://example.com/webhook",
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
      authType: "manual",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
    },
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
      authType: "manual",
      wiz_connector_id: "00000000-0000-0000-0000-000000000000",
      wiz_environment: "test",
      data_center: "us1",
      wiz_sourcetype: "placeholder",
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
    },
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
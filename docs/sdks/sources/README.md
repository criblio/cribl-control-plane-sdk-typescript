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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 9109,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 9109,
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "azure-blob-queue",
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "azure-blob-queue",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8088,
    hecAPI: "/services/collector",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8088,
    hecAPI: "/services/collector",
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
    brokers: [
      "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
    ],
    topics: [
      "logs",
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
    id: "confluent-cloud-source",
    type: "confluent_cloud",
    sendToRoutes: true,
    pqEnabled: false,
    brokers: [
      "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
    ],
    topics: [
      "logs",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10090,
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "crowdstrike-queue",
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "crowdstrike-queue",
    region: "us-east-1",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8126,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8126,
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
    sendToRoutes: true,
    pqEnabled: false,
    samples: [
      {
        sample: "sample.json",
        eventsPerSec: 10,
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
    id: "datagen-source",
    type: "datagen",
    sendToRoutes: true,
    pqEnabled: false,
    samples: [
      {
        sample: "sample.json",
        eventsPerSec: 10,
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
    sendToRoutes: true,
    pqEnabled: false,
    discoveryType: "static",
    interval: 60,
    targets: [
      {
        host: "localhost",
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
    id: "edge-prometheus-source",
    type: "edge_prometheus",
    sendToRoutes: true,
    pqEnabled: false,
    discoveryType: "static",
    interval: 60,
    targets: [
      {
        host: "localhost",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "localhost",
    port: 9200,
    elasticAPI: "/",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "localhost",
    port: 9200,
    elasticAPI: "/",
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
    sendToRoutes: true,
    pqEnabled: false,
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topics: [
      "logs",
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
    id: "eventhub-source",
    type: "eventhub",
    sendToRoutes: true,
    pqEnabled: false,
    brokers: [
      "myeventhub.servicebus.windows.net:9093",
    ],
    topics: [
      "logs",
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
    sendToRoutes: true,
    pqEnabled: false,
    command: "echo \"Hello World\"",
    interval: 60,
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
    sendToRoutes: true,
    pqEnabled: false,
    command: "echo \"Hello World\"",
    interval: 60,
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
    sendToRoutes: true,
    pqEnabled: false,
    mode: "manual",
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
    sendToRoutes: true,
    pqEnabled: false,
    mode: "manual",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    topicName: "my-topic",
    subscriptionName: "my-subscription",
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
    sendToRoutes: true,
    pqEnabled: false,
    topicName: "my-topic",
    subscriptionName: "my-subscription",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
    prometheusAPI: "/api/prom/push",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
    prometheusAPI: "/api/prom/push",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    path: "/var/log/journal",
    journals: [
      "system",
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
    id: "journal-files-source",
    type: "journal_files",
    sendToRoutes: true,
    pqEnabled: false,
    path: "/var/log/journal",
    journals: [
      "system",
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
    sendToRoutes: true,
    pqEnabled: false,
    brokers: [
      "localhost:9092",
    ],
    topics: [
      "logs",
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
    id: "kafka-source",
    type: "kafka",
    sendToRoutes: true,
    pqEnabled: false,
    brokers: [
      "localhost:9092",
    ],
    topics: [
      "logs",
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
    streamName: "my-stream",
    region: "us-east-1",
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
    lokiAPI: "/loki/api/v1/push",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
    lokiAPI: "/loki/api/v1/push",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    udpPort: 8125,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    udpPort: 8125,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 57000,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 57000,
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
    sendToRoutes: true,
    pqEnabled: false,
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topics: [
      "logs",
    ],
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
    sendToRoutes: true,
    pqEnabled: false,
    brokers: [
      "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
    ],
    topics: [
      "logs",
    ],
    awsAuthenticationMethod: "auto",
    region: "us-east-1",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 2055,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 2055,
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
    sendToRoutes: true,
    pqEnabled: false,
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
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
    sendToRoutes: true,
    pqEnabled: false,
    planType: "enterprise_gcc",
    tenantId: "tenant-id",
    appId: "app-id",
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
    sendToRoutes: true,
    pqEnabled: false,
    url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
    interval: 15,
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
    sendToRoutes: true,
    pqEnabled: false,
    url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
    interval: 15,
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
    sendToRoutes: true,
    pqEnabled: false,
    tenantId: "tenant-id",
    appId: "app-id",
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
    sendToRoutes: true,
    pqEnabled: false,
    tenantId: "tenant-id",
    appId: "app-id",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 4317,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 4317,
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
    sendToRoutes: true,
    pqEnabled: false,
    discoveryType: "static",
    interval: 60,
    logLevel: "info",
    targetList: [
      "http://localhost:9090/metrics",
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
    id: "prometheus-source",
    type: "prometheus",
    sendToRoutes: true,
    pqEnabled: false,
    discoveryType: "static",
    interval: 60,
    logLevel: "info",
    targetList: [
      "http://localhost:9090/metrics",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
    prometheusAPI: "/write",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
    prometheusAPI: "/write",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 514,
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "s3-notifications-queue",
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "s3-notifications-queue",
    region: "us-east-1",
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "s3-inventory-queue",
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "s3-inventory-queue",
    region: "us-east-1",
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "security-lake-queue",
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "security-lake-queue",
    region: "us-east-1",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "192.168.1.1",
    port: 161,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "192.168.1.1",
    port: 161,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 9997,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8088,
    splunkHecAPI: "/services/collector",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8088,
    splunkHecAPI: "/services/collector",
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
    sendToRoutes: true,
    pqEnabled: false,
    searchHead: "https://localhost:8089",
    search: "index=main",
    cronSchedule: "0 * * * *",
    endpoint: "/services/search/jobs/export",
    outputMode: "json",
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
    sendToRoutes: true,
    pqEnabled: false,
    searchHead: "https://localhost:8089",
    search: "index=main",
    cronSchedule: "0 * * * *",
    endpoint: "/services/search/jobs/export",
    outputMode: "json",
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
    queueName: "my-queue",
    queueType: "standard",
    region: "us-east-1",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    udpPort: 514,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    udpPort: 514,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10090,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10090,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 5985,
    subscriptions: [
      {
        subscriptionName: "subscription-1",
        contentFormat: "RenderedText",
        heartbeatInterval: 60,
        batchTimeout: 5,
        targets: [],
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
    id: "wef-source",
    type: "wef",
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 5985,
    subscriptions: [
      {
        subscriptionName: "subscription-1",
        contentFormat: "RenderedText",
        heartbeatInterval: 60,
        batchTimeout: 5,
        targets: [],
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
    sendToRoutes: true,
    pqEnabled: false,
    logNames: [
      "Application",
      "System",
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
    id: "win-event-logs-source",
    type: "win_event_logs",
    sendToRoutes: true,
    pqEnabled: false,
    logNames: [
      "Application",
      "System",
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
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
    sendToRoutes: true,
    pqEnabled: false,
    endpoint: "https://api.wiz.io",
    authUrl: "https://auth.wiz.io/oauth/token",
    clientId: "client-id",
    contentConfig: [],
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
    sendToRoutes: true,
    pqEnabled: false,
    endpoint: "https://api.wiz.io",
    authUrl: "https://auth.wiz.io/oauth/token",
    clientId: "client-id",
    contentConfig: [],
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 10080,
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8088,
    hecAPI: "/services/collector",
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
    sendToRoutes: true,
    pqEnabled: false,
    host: "0.0.0.0",
    port: 8088,
    hecAPI: "/services/collector",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 9109,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 9109,
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "azure-blob-queue",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "azure-blob-queue",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8088,
      hecAPI: "/services/collector",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8088,
      hecAPI: "/services/collector",
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
      sendToRoutes: true,
      pqEnabled: false,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
      brokers: [
        "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
      ],
      topics: [
        "logs",
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
      id: "confluent-cloud-source",
      type: "confluent_cloud",
      sendToRoutes: true,
      pqEnabled: false,
      brokers: [
        "pkc-xxxxx.us-east-1.aws.confluent.cloud:9092",
      ],
      topics: [
        "logs",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10090,
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "crowdstrike-queue",
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "crowdstrike-queue",
      region: "us-east-1",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8126,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8126,
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
      sendToRoutes: true,
      pqEnabled: false,
      samples: [
        {
          sample: "sample.json",
          eventsPerSec: 10,
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
      id: "datagen-source",
      type: "datagen",
      sendToRoutes: true,
      pqEnabled: false,
      samples: [
        {
          sample: "sample.json",
          eventsPerSec: 10,
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
      sendToRoutes: true,
      pqEnabled: false,
      discoveryType: "static",
      interval: 60,
      targets: [
        {
          host: "localhost",
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
      id: "edge-prometheus-source",
      type: "edge_prometheus",
      sendToRoutes: true,
      pqEnabled: false,
      discoveryType: "static",
      interval: 60,
      targets: [
        {
          host: "localhost",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "localhost",
      port: 9200,
      elasticAPI: "/",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "localhost",
      port: 9200,
      elasticAPI: "/",
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
      sendToRoutes: true,
      pqEnabled: false,
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topics: [
        "logs",
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
      id: "eventhub-source",
      type: "eventhub",
      sendToRoutes: true,
      pqEnabled: false,
      brokers: [
        "myeventhub.servicebus.windows.net:9093",
      ],
      topics: [
        "logs",
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
      sendToRoutes: true,
      pqEnabled: false,
      command: "echo \"Hello World\"",
      interval: 60,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      command: "echo \"Hello World\"",
      interval: 60,
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
      sendToRoutes: true,
      pqEnabled: false,
      mode: "manual",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      mode: "manual",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
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
      sendToRoutes: true,
      pqEnabled: false,
      topicName: "my-topic",
      subscriptionName: "my-subscription",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      topicName: "my-topic",
      subscriptionName: "my-subscription",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
      prometheusAPI: "/api/prom/push",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
      prometheusAPI: "/api/prom/push",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
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
      sendToRoutes: true,
      pqEnabled: false,
      path: "/var/log/journal",
      journals: [
        "system",
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
      id: "journal-files-source",
      type: "journal_files",
      sendToRoutes: true,
      pqEnabled: false,
      path: "/var/log/journal",
      journals: [
        "system",
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
      sendToRoutes: true,
      pqEnabled: false,
      brokers: [
        "localhost:9092",
      ],
      topics: [
        "logs",
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
      id: "kafka-source",
      type: "kafka",
      sendToRoutes: true,
      pqEnabled: false,
      brokers: [
        "localhost:9092",
      ],
      topics: [
        "logs",
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
      streamName: "my-stream",
      region: "us-east-1",
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
      sendToRoutes: true,
      pqEnabled: false,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
      lokiAPI: "/loki/api/v1/push",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
      lokiAPI: "/loki/api/v1/push",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      udpPort: 8125,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      udpPort: 8125,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 57000,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 57000,
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
      sendToRoutes: true,
      pqEnabled: false,
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topics: [
        "logs",
      ],
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
      sendToRoutes: true,
      pqEnabled: false,
      brokers: [
        "b-1.example.xxxxx.c2.kafka.us-east-1.amazonaws.com:9092",
      ],
      topics: [
        "logs",
      ],
      awsAuthenticationMethod: "auto",
      region: "us-east-1",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 2055,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 2055,
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
      sendToRoutes: true,
      pqEnabled: false,
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      planType: "enterprise_gcc",
      tenantId: "tenant-id",
      appId: "app-id",
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
      sendToRoutes: true,
      pqEnabled: false,
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      url: "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
      interval: 15,
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
      sendToRoutes: true,
      pqEnabled: false,
      tenantId: "tenant-id",
      appId: "app-id",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      tenantId: "tenant-id",
      appId: "app-id",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 4317,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 4317,
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
      sendToRoutes: true,
      pqEnabled: false,
      discoveryType: "static",
      interval: 60,
      logLevel: "info",
      targetList: [
        "http://localhost:9090/metrics",
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
      id: "prometheus-source",
      type: "prometheus",
      sendToRoutes: true,
      pqEnabled: false,
      discoveryType: "static",
      interval: 60,
      logLevel: "info",
      targetList: [
        "http://localhost:9090/metrics",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
      prometheusAPI: "/write",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
      prometheusAPI: "/write",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 514,
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "s3-notifications-queue",
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "s3-notifications-queue",
      region: "us-east-1",
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "s3-inventory-queue",
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "s3-inventory-queue",
      region: "us-east-1",
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "security-lake-queue",
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "security-lake-queue",
      region: "us-east-1",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "192.168.1.1",
      port: 161,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "192.168.1.1",
      port: 161,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 9997,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8088,
      splunkHecAPI: "/services/collector",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8088,
      splunkHecAPI: "/services/collector",
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
      sendToRoutes: true,
      pqEnabled: false,
      searchHead: "https://localhost:8089",
      search: "index=main",
      cronSchedule: "0 * * * *",
      endpoint: "/services/search/jobs/export",
      outputMode: "json",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      searchHead: "https://localhost:8089",
      search: "index=main",
      cronSchedule: "0 * * * *",
      endpoint: "/services/search/jobs/export",
      outputMode: "json",
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
      queueName: "my-queue",
      queueType: "standard",
      region: "us-east-1",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      udpPort: 514,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      udpPort: 514,
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
      sendToRoutes: true,
      pqEnabled: false,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10090,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10090,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 5985,
      subscriptions: [
        {
          subscriptionName: "subscription-1",
          contentFormat: "RenderedText",
          heartbeatInterval: 60,
          batchTimeout: 5,
          targets: [],
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
      id: "wef-source",
      type: "wef",
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 5985,
      subscriptions: [
        {
          subscriptionName: "subscription-1",
          contentFormat: "RenderedText",
          heartbeatInterval: 60,
          batchTimeout: 5,
          targets: [],
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
      sendToRoutes: true,
      pqEnabled: false,
      logNames: [
        "Application",
        "System",
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
      id: "win-event-logs-source",
      type: "win_event_logs",
      sendToRoutes: true,
      pqEnabled: false,
      logNames: [
        "Application",
        "System",
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
      sendToRoutes: true,
      pqEnabled: false,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      clientId: "client-id",
      contentConfig: [],
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      endpoint: "https://api.wiz.io",
      authUrl: "https://auth.wiz.io/oauth/token",
      clientId: "client-id",
      contentConfig: [],
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 10080,
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8088,
      hecAPI: "/services/collector",
    },
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
      sendToRoutes: true,
      pqEnabled: false,
      host: "0.0.0.0",
      port: 8088,
      hecAPI: "/services/collector",
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
      sendToRoutes: true,
      pqEnabled: false,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
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
      sendToRoutes: true,
      pqEnabled: false,
    },
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
      sendToRoutes: true,
      pqEnabled: false,
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
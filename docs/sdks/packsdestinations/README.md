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
      containerName: "my-container",
      stagePath: "/tmp/staging",
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
      url: "http://localhost:8123/",
      database: "mydb",
      tableName: "mytable",
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
      endpoint: "https://account-id.r2.cloudflarestorage.com",
      bucket: "my-bucket",
      stagePath: "/tmp/staging",
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
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      region: "us-east-1",
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
    },
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
    },
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
      host: "localhost",
      port: 10090,
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
      apiKey: "your-api-key",
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
    },
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
    },
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
      bucket: "my-bucket",
      region: "us-east-1",
      stagePath: "/tmp/staging",
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
      index: "logs",
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
      url: "my-cloud-id",
      index: "logs",
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
      destPath: "/var/log/output",
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
      logFormatType: "unstructured",
      region: "us",
      customerId: "customer-id",
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
      logLocationType: "project",
      logNameExpression: "my-log",
      logLocationExpression: "my-project",
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
      topicName: "my-topic",
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
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
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
      protocol: "tcp",
      host: "localhost",
      port: 2003,
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
      dataset: "my-dataset",
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
      url: "http://localhost:8086",
      database: "mydb",
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
      streamName: "my-stream",
      region: "us-east-1",
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
      url: "http://localhost:3100/loki/api/v1/push",
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
      topic: "logs",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
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
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      stagePath: "/tmp/staging",
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
      apiKey: "your-api-key",
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
      accountId: "123456",
      eventType: "CriblEvent",
      apiKey: "your-api-key",
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
      endpoint: "http://localhost:4317",
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
      url: "http://localhost:9091/api/v1/write",
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
    },
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
      bucket: "my-bucket",
      region: "us-east-1",
      stagePath: "/tmp/staging",
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
      region: "US",
      endpoint: "/services/collector/event",
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
      realm: "us0",
      token: "your-token",
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
      topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
      messageGroupId: "my-message-group",
      region: "us-east-1",
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
      host: "localhost",
      port: 9997,
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
    },
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
      queueName: "my-queue",
      queueType: "standard",
      region: "us-east-1",
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
      protocol: "udp",
      host: "localhost",
      port: 8125,
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
      protocol: "udp",
      host: "localhost",
      port: 8125,
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
      url: "https://endpoint1.collection.us2.sumologic.com",
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
      host: "localhost",
      port: 514,
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
      host: "localhost",
      port: 10090,
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
      domain: "longboard",
      token: "your-token",
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
      url: "https://example.com/webhook",
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
    },
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
      containerName: "my-container",
      stagePath: "/tmp/staging",
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
      url: "http://localhost:8123/",
      database: "mydb",
      tableName: "mytable",
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
      endpoint: "https://account-id.r2.cloudflarestorage.com",
      bucket: "my-bucket",
      stagePath: "/tmp/staging",
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
      logGroupName: "my-log-group",
      logStreamName: "my-log-stream",
      region: "us-east-1",
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
    },
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
    },
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
      host: "localhost",
      port: 10090,
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
      apiKey: "your-api-key",
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
    },
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
    },
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
      bucket: "my-bucket",
      region: "us-east-1",
      stagePath: "/tmp/staging",
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
      index: "logs",
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
      url: "my-cloud-id",
      index: "logs",
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
      destPath: "/var/log/output",
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
      logFormatType: "unstructured",
      region: "us",
      customerId: "customer-id",
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
      logLocationType: "project",
      logNameExpression: "my-log",
      logLocationExpression: "my-project",
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
      topicName: "my-topic",
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
      lokiUrl: "https://logs-prod-us-central1.grafana.net",
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
      protocol: "tcp",
      host: "localhost",
      port: 2003,
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
      dataset: "my-dataset",
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
      url: "http://localhost:8086",
      database: "mydb",
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
      streamName: "my-stream",
      region: "us-east-1",
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
      url: "http://localhost:3100/loki/api/v1/push",
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
      topic: "logs",
      bootstrap_server: "myeventstream.servicebus.windows.net:9093",
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
      endpoint: "http://localhost:9000",
      bucket: "my-bucket",
      stagePath: "/tmp/staging",
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
      apiKey: "your-api-key",
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
      accountId: "123456",
      eventType: "CriblEvent",
      apiKey: "your-api-key",
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
      endpoint: "http://localhost:4317",
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
      url: "http://localhost:9091/api/v1/write",
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
    },
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
      bucket: "my-bucket",
      region: "us-east-1",
      stagePath: "/tmp/staging",
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
      region: "US",
      endpoint: "/services/collector/event",
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
      realm: "us0",
      token: "your-token",
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
      topicArn: "arn:aws:sns:us-east-1:123456789012:my-topic",
      messageGroupId: "my-message-group",
      region: "us-east-1",
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
      host: "localhost",
      port: 9997,
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
    },
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
      queueName: "my-queue",
      queueType: "standard",
      region: "us-east-1",
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
      protocol: "udp",
      host: "localhost",
      port: 8125,
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
      protocol: "udp",
      host: "localhost",
      port: 8125,
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
      url: "https://endpoint1.collection.us2.sumologic.com",
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
      host: "localhost",
      port: 514,
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
      host: "localhost",
      port: 10090,
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
      domain: "longboard",
      token: "your-token",
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
      url: "https://example.com/webhook",
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
    },
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
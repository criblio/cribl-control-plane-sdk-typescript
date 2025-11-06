# Destinations
(*destinations*)

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

**Promise\<[models.CountedListOutput](../../models/countedlistoutput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create a new Destination.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createOutput" method="post" path="/system/outputs" -->
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
    id: "<id>",
    type: "elastic_cloud",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    url: "https://probable-rationale.com/",
    index: "<value>",
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
      disabled: false,
      username: "Imogene1",
      password: "tA9DUjJtHSnXqh9",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticPipeline: "<value>",
    includeDocId: true,
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
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    description: "hourly about into",
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
    id: "<id>",
    type: "elastic_cloud",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    url: "https://probable-rationale.com/",
    index: "<value>",
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
      disabled: false,
      username: "Imogene1",
      password: "tA9DUjJtHSnXqh9",
      authType: "manual",
      credentialsSecret: "<value>",
      manualAPIKey: "<value>",
      textSecret: "<value>",
    },
    elasticPipeline: "<value>",
    includeDocId: true,
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
    responseHonorRetryAfterHeader: false,
    onBackpressure: "block",
    description: "hourly about into",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.Output](../../models/output.md)                                                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedListOutput](../../models/countedlistoutput.md)\>**

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

**Promise\<[models.CountedListOutput](../../models/countedlistoutput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the specified Destination.</br></br>Provide a complete representation of the Destination that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Destination.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Destination might not function as expected.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateOutputById" method="patch" path="/system/outputs/{id}" -->
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
      id: "<id>",
      type: "signalfx",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
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
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "phooey positively a consequently meh until",
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
    },
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
      id: "<id>",
      type: "signalfx",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
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
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description: "phooey positively a consequently meh until",
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

**Promise\<[models.CountedListOutput](../../models/countedlistoutput.md)\>**

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

**Promise\<[models.CountedListOutput](../../models/countedlistoutput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
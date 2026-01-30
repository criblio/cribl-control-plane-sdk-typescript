# Packs.Destinations.Pq

## Overview

### Available Operations

* [clear](#clear) - Clear the persistent queue for a Destination within a Pack
* [get](#get) - Get information about the latest job to clear the persistent queue for a Destination within a Pack

## clear

Clear the persistent queue (PQ) for the specified Destination within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteOutputSystemPqByPackAndId" method="delete" path="/p/{pack}/system/outputs/{id}/pq" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.pq.clear({
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
import { packsDestinationsPqClear } from "cribl-control-plane/funcs/packsDestinationsPqClear.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsPqClear(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsPqClear failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOutputSystemPqByPackAndIdRequest](../../models/operations/deleteoutputsystempqbypackandidrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedString](../../models/countedstring.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get information about the latest job to clear the persistent queue (PQ) for the specified Destination within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOutputSystemPqByPackAndId" method="get" path="/p/{pack}/system/outputs/{id}/pq" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.destinations.pq.get({
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
import { packsDestinationsPqGet } from "cribl-control-plane/funcs/packsDestinationsPqGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsDestinationsPqGet(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsDestinationsPqGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOutputSystemPqByPackAndIdRequest](../../models/operations/getoutputsystempqbypackandidrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedJobInfo](../../models/countedjobinfo.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
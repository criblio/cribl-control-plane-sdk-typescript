# Health
(*health*)

## Overview

Actions related to REST server health

### Available Operations

* [get](#get) - Retrieve health status of the server

## get

Retrieve health status of the server

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHealthInfo" method="get" path="/health" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await criblControlPlane.health.get();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { healthGet } from "cribl-control-plane/funcs/healthGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await healthGet(criblControlPlane);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthGet failed:", res.error);
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

**Promise\<[operations.GetHealthInfoResponse](../../models/operations/gethealthinforesponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.HealthStatusError             | 420                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
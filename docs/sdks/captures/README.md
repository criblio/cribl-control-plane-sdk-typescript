# System.Captures

## Overview

### Available Operations

* [create](#create) - Capture live incoming data

## create

Initiate a live data capture from Cribl Workers.Returns a stream of captured events in NDJSON format that match the parameters specified in the request body.

### Example Usage: CaptureExamplesBasicCapture

<!-- UsageSnippet language="typescript" operationID="createSystemCapture" method="post" path="/system/capture" example="CaptureExamplesBasicCapture" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.system.captures.create({
    duration: 5,
    filter: "true",
    level: 0,
    maxEvents: 100,
    stepDuration: 571732,
    workerId: "<id>",
    workerThreshold: 609412,
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { systemCapturesCreate } from "cribl-control-plane/funcs/systemCapturesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await systemCapturesCreate(criblControlPlane, {
    duration: 5,
    filter: "true",
    level: 0,
    maxEvents: 100,
    stepDuration: 571732,
    workerId: "<id>",
    workerThreshold: 609412,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    // Handle the event
    console.log(event);
  }
  } else {
    console.log("systemCapturesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: CaptureExamplesComplexFilter

<!-- UsageSnippet language="typescript" operationID="createSystemCapture" method="post" path="/system/capture" example="CaptureExamplesComplexFilter" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.system.captures.create({
    duration: 15,
    filter: "__inputId.startsWith(\"http:\") && status >= 400 && status < 500",
    level: 1,
    maxEvents: 500,
    stepDuration: 921861,
    workerId: "<id>",
    workerThreshold: 208781,
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { systemCapturesCreate } from "cribl-control-plane/funcs/systemCapturesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await systemCapturesCreate(criblControlPlane, {
    duration: 15,
    filter: "__inputId.startsWith(\"http:\") && status >= 400 && status < 500",
    level: 1,
    maxEvents: 500,
    stepDuration: 921861,
    workerId: "<id>",
    workerThreshold: 208781,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    // Handle the event
    console.log(event);
  }
  } else {
    console.log("systemCapturesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: CaptureExamplesCompoundAndExpression

<!-- UsageSnippet language="typescript" operationID="createSystemCapture" method="post" path="/system/capture" example="CaptureExamplesCompoundAndExpression" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.system.captures.create({
    duration: 5,
    filter: "sourcetype===\"pan:traffic\" && src_zone===\"trusted\"",
    level: 0,
    maxEvents: 100,
    stepDuration: 882563,
    workerId: "<id>",
    workerThreshold: 392678,
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { systemCapturesCreate } from "cribl-control-plane/funcs/systemCapturesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await systemCapturesCreate(criblControlPlane, {
    duration: 5,
    filter: "sourcetype===\"pan:traffic\" && src_zone===\"trusted\"",
    level: 0,
    maxEvents: 100,
    stepDuration: 882563,
    workerId: "<id>",
    workerThreshold: 392678,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    // Handle the event
    console.log(event);
  }
  } else {
    console.log("systemCapturesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: CaptureExamplesNestedFieldAccess

<!-- UsageSnippet language="typescript" operationID="createSystemCapture" method="post" path="/system/capture" example="CaptureExamplesNestedFieldAccess" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.system.captures.create({
    duration: 5,
    filter: "sourcetype===\"pan:traffic\" && dest_geoip.country.iso_code === \"US\"",
    level: 0,
    maxEvents: 100,
    stepDuration: 377776,
    workerId: "<id>",
    workerThreshold: 429562,
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { systemCapturesCreate } from "cribl-control-plane/funcs/systemCapturesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await systemCapturesCreate(criblControlPlane, {
    duration: 5,
    filter: "sourcetype===\"pan:traffic\" && dest_geoip.country.iso_code === \"US\"",
    level: 0,
    maxEvents: 100,
    stepDuration: 377776,
    workerId: "<id>",
    workerThreshold: 429562,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    // Handle the event
    console.log(event);
  }
  } else {
    console.log("systemCapturesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: CaptureExamplesSimpleExpression

<!-- UsageSnippet language="typescript" operationID="createSystemCapture" method="post" path="/system/capture" example="CaptureExamplesSimpleExpression" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.system.captures.create({
    duration: 5,
    filter: "sourcetype===\"pan:traffic\"",
    level: 0,
    maxEvents: 100,
    stepDuration: 994184,
    workerId: "<id>",
    workerThreshold: 771620,
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { systemCapturesCreate } from "cribl-control-plane/funcs/systemCapturesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await systemCapturesCreate(criblControlPlane, {
    duration: 5,
    filter: "sourcetype===\"pan:traffic\"",
    level: 0,
    maxEvents: 100,
    stepDuration: 994184,
    workerId: "<id>",
    workerThreshold: 771620,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    // Handle the event
    console.log(event);
  }
  } else {
    console.log("systemCapturesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CaptureParams](../../models/captureparams.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[JsonLStream<{ [k: string]: any }>](../../models/.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
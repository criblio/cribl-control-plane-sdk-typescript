# Packs.Routes

## Overview

### Available Operations

* [get](#get) - Get a Routing table within a Pack
* [update](#update) - Update a Route within a Pack
* [list](#list) - List all Routes within a Pack
* [append](#append) - Add a Route to the end of the Routing table within a Pack

## get

Get the specified Routing table within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRoutesByPackAndId" method="get" path="/p/{pack}/routes/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.routes.get({
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
import { packsRoutesGet } from "cribl-control-plane/funcs/packsRoutesGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsRoutesGet(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsRoutesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRoutesByPackAndIdRequest](../../models/operations/getroutesbypackandidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedRoutes](../../models/countedroutes.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the specified Route within the specified Pack.</br></br>Provide a complete representation of the Routing table, including the Route that you want to update, in the request body. This endpoint does not support partial updates. Cribl removes any omitted Routes and fields when updating.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the Routing table might not function as expected.

### Example Usage: RoutesUpdateExamplesBasicRoute

<!-- UsageSnippet language="typescript" operationID="updateRoutesByPackAndId" method="patch" path="/p/{pack}/routes/{id}" example="RoutesUpdateExamplesBasicRoute" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.routes.update({
    id: "<id>",
    pack: "<value>",
    routes: {
      id: "default",
      routes: [
        {
          description: "Route access logs to main pipeline",
          filter: "source == \"access.log\"",
          final: true,
          id: "default",
          name: "my-route",
          pipeline: "main",
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
import { packsRoutesUpdate } from "cribl-control-plane/funcs/packsRoutesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsRoutesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    routes: {
      id: "default",
      routes: [
        {
          description: "Route access logs to main pipeline",
          filter: "source == \"access.log\"",
          final: true,
          id: "default",
          name: "my-route",
          pipeline: "main",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsRoutesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesUpdateExamplesMultipleRoutes

<!-- UsageSnippet language="typescript" operationID="updateRoutesByPackAndId" method="patch" path="/p/{pack}/routes/{id}" example="RoutesUpdateExamplesMultipleRoutes" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.routes.update({
    id: "<id>",
    pack: "<value>",
    routes: {
      id: "default",
      routes: [
        {
          description: "Route speedtest logs",
          filter: "source == \"speedtest.log\"",
          final: false,
          id: "route-speedtest",
          name: "speedtest",
          output: "default",
          pipeline: "main",
        },
        {
          description: "Route mtr logs",
          filter: "source == \"mtr.log\"",
          final: false,
          id: "route-mtr",
          name: "mtr",
          output: "default",
          pipeline: "passthru",
        },
        {
          description: "Route statsd metrics",
          filter: "source == \"statsd.log\"",
          final: false,
          id: "route-statsd",
          name: "statsd",
          output: "devnull",
          pipeline: "prometheus_metrics",
        },
        {
          description: "Catch-all Route for all other events",
          filter: "true",
          final: true,
          id: "route-default",
          name: "default",
          output: "default",
          pipeline: "main",
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
import { packsRoutesUpdate } from "cribl-control-plane/funcs/packsRoutesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsRoutesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    routes: {
      id: "default",
      routes: [
        {
          description: "Route speedtest logs",
          filter: "source == \"speedtest.log\"",
          final: false,
          id: "route-speedtest",
          name: "speedtest",
          output: "default",
          pipeline: "main",
        },
        {
          description: "Route mtr logs",
          filter: "source == \"mtr.log\"",
          final: false,
          id: "route-mtr",
          name: "mtr",
          output: "default",
          pipeline: "passthru",
        },
        {
          description: "Route statsd metrics",
          filter: "source == \"statsd.log\"",
          final: false,
          id: "route-statsd",
          name: "statsd",
          output: "devnull",
          pipeline: "prometheus_metrics",
        },
        {
          description: "Catch-all Route for all other events",
          filter: "true",
          final: true,
          id: "route-default",
          name: "default",
          output: "default",
          pipeline: "main",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsRoutesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesUpdateExamplesRouteWithOutputExpression

<!-- UsageSnippet language="typescript" operationID="updateRoutesByPackAndId" method="patch" path="/p/{pack}/routes/{id}" example="RoutesUpdateExamplesRouteWithOutputExpression" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.routes.update({
    id: "<id>",
    pack: "<value>",
    routes: {
      id: "default",
      routes: [
        {
          description: "Route with dynamic Destination based on environment",
          enableOutputExpression: true,
          filter: "source == \"dynamic.log\"",
          final: true,
          id: "route-dynamic",
          name: "dynamic-output",
          outputExpression: "`myDest_${C.logStreamEnv}`",
          pipeline: "main",
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
import { packsRoutesUpdate } from "cribl-control-plane/funcs/packsRoutesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsRoutesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    routes: {
      id: "default",
      routes: [
        {
          description: "Route with dynamic Destination based on environment",
          enableOutputExpression: true,
          filter: "source == \"dynamic.log\"",
          final: true,
          id: "route-dynamic",
          name: "dynamic-output",
          outputExpression: "`myDest_${C.logStreamEnv}`",
          pipeline: "main",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsRoutesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRoutesByPackAndIdRequest](../../models/operations/updateroutesbypackandidrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedRoutes](../../models/countedroutes.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## list

Get a list of all Routes within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRoutesByPack" method="get" path="/p/{pack}/routes" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.routes.list({
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
import { packsRoutesList } from "cribl-control-plane/funcs/packsRoutesList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsRoutesList(criblControlPlane, {
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsRoutesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRoutesByPackRequest](../../models/operations/getroutesbypackrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedRoutes](../../models/countedroutes.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## append

Add a Route to the end of the specified Routing table within the specified Pack.

### Example Usage: RoutesAppendExamplesMultipleRoutes

<!-- UsageSnippet language="typescript" operationID="createRoutesAppendByPackAndId" method="post" path="/p/{pack}/routes/{id}/append" example="RoutesAppendExamplesMultipleRoutes" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.routes.append({
    id: "<id>",
    pack: "<value>",
    requestBody: [
      {
        description: "Route audit logs",
        filter: "source == \"audit.log\"",
        final: false,
        id: "route-audit",
        name: "audit",
        output: "default",
        pipeline: "main",
      },
      {
        description: "Route security logs",
        filter: "source == \"security.log\"",
        final: false,
        id: "route-security",
        name: "security",
        output: "devnull",
        pipeline: "passthru",
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
import { packsRoutesAppend } from "cribl-control-plane/funcs/packsRoutesAppend.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsRoutesAppend(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    requestBody: [
      {
        description: "Route audit logs",
        filter: "source == \"audit.log\"",
        final: false,
        id: "route-audit",
        name: "audit",
        output: "default",
        pipeline: "main",
      },
      {
        description: "Route security logs",
        filter: "source == \"security.log\"",
        final: false,
        id: "route-security",
        name: "security",
        output: "devnull",
        pipeline: "passthru",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsRoutesAppend failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesAppendExamplesRouteWithOutputExpression

<!-- UsageSnippet language="typescript" operationID="createRoutesAppendByPackAndId" method="post" path="/p/{pack}/routes/{id}/append" example="RoutesAppendExamplesRouteWithOutputExpression" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.routes.append({
    id: "<id>",
    pack: "<value>",
    requestBody: [
      {
        description: "Route with dynamic Destination based on environment",
        enableOutputExpression: true,
        filter: "source == \"dynamic.log\"",
        final: true,
        id: "route-dynamic-append",
        name: "dynamic-append",
        outputExpression: "`myDest_${C.logStreamEnv}`",
        pipeline: "main",
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
import { packsRoutesAppend } from "cribl-control-plane/funcs/packsRoutesAppend.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsRoutesAppend(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    requestBody: [
      {
        description: "Route with dynamic Destination based on environment",
        enableOutputExpression: true,
        filter: "source == \"dynamic.log\"",
        final: true,
        id: "route-dynamic-append",
        name: "dynamic-append",
        outputExpression: "`myDest_${C.logStreamEnv}`",
        pipeline: "main",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsRoutesAppend failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesAppendExamplesSingleRoute

<!-- UsageSnippet language="typescript" operationID="createRoutesAppendByPackAndId" method="post" path="/p/{pack}/routes/{id}/append" example="RoutesAppendExamplesSingleRoute" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.routes.append({
    id: "<id>",
    pack: "<value>",
    requestBody: [
      {
        description: "Route new logs to main pipeline",
        filter: "source == \"new.log\"",
        final: true,
        id: "route-new",
        name: "new-route",
        pipeline: "main",
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
import { packsRoutesAppend } from "cribl-control-plane/funcs/packsRoutesAppend.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsRoutesAppend(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    requestBody: [
      {
        description: "Route new logs to main pipeline",
        filter: "source == \"new.log\"",
        final: true,
        id: "route-new",
        name: "new-route",
        pipeline: "main",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsRoutesAppend failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRoutesAppendByPackAndIdRequest](../../models/operations/createroutesappendbypackandidrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedRoutes](../../models/countedroutes.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
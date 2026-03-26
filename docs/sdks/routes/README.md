# Routes

## Overview

Actions related to Routes

### Available Operations

* [get](#get) - Get a Routing table
* [update](#update) - Update a Route
* [list](#list) - List all Routes
* [append](#append) - Add a Route to the end of the Routing table

## get

Get the specified Routing table.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRoutesById" method="get" path="/routes/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.get({
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
import { routesGet } from "cribl-control-plane/funcs/routesGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesGet(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRoutesByIdRequest](../../models/operations/getroutesbyidrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Update a Route in the specified Routing table.</br></br>Provide a complete representation of the Routing table, including the Route that you want to update, in the request body. This endpoint does not support partial updates. Cribl removes any omitted Routes and fields when updating.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the Routing table might not function as expected.

### Example Usage: RoutesUpdateExamplesBasicRoute

<!-- UsageSnippet language="typescript" operationID="updateRoutesById" method="patch" path="/routes/{id}" example="RoutesUpdateExamplesBasicRoute" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.update({
    id: "<id>",
    routesInput: {
      id: "default",
      routes: [
        {
          description: "Route access logs to main Pipeline",
          filter: "source == \"access.log\"",
          name: "my-route",
          pipeline: "main",
          final: true,
          id: "default",
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
import { routesUpdate } from "cribl-control-plane/funcs/routesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesUpdate(criblControlPlane, {
    id: "<id>",
    routesInput: {
      id: "default",
      routes: [
        {
          description: "Route access logs to main Pipeline",
          filter: "source == \"access.log\"",
          name: "my-route",
          pipeline: "main",
          final: true,
          id: "default",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesUpdateExamplesMultipleRoutes

<!-- UsageSnippet language="typescript" operationID="updateRoutesById" method="patch" path="/routes/{id}" example="RoutesUpdateExamplesMultipleRoutes" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.update({
    id: "<id>",
    routesInput: {
      id: "default",
      routes: [
        {
          description: "Route speedtest logs",
          filter: "source == \"speedtest.log\"",
          name: "speedtest",
          output: "default",
          pipeline: "main",
          final: false,
          id: "route-speedtest",
        },
        {
          description: "Route mtr logs",
          filter: "source == \"mtr.log\"",
          name: "mtr",
          output: "default",
          pipeline: "passthru",
          final: false,
          id: "route-mtr",
        },
        {
          description: "Route statsd metrics",
          filter: "source == \"statsd.log\"",
          name: "statsd",
          output: "devnull",
          pipeline: "prometheus_metrics",
          final: false,
          id: "route-statsd",
        },
        {
          description: "Catch-all Route for all other events",
          filter: "true",
          name: "default",
          output: "default",
          pipeline: "main",
          final: true,
          id: "route-default",
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
import { routesUpdate } from "cribl-control-plane/funcs/routesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesUpdate(criblControlPlane, {
    id: "<id>",
    routesInput: {
      id: "default",
      routes: [
        {
          description: "Route speedtest logs",
          filter: "source == \"speedtest.log\"",
          name: "speedtest",
          output: "default",
          pipeline: "main",
          final: false,
          id: "route-speedtest",
        },
        {
          description: "Route mtr logs",
          filter: "source == \"mtr.log\"",
          name: "mtr",
          output: "default",
          pipeline: "passthru",
          final: false,
          id: "route-mtr",
        },
        {
          description: "Route statsd metrics",
          filter: "source == \"statsd.log\"",
          name: "statsd",
          output: "devnull",
          pipeline: "prometheus_metrics",
          final: false,
          id: "route-statsd",
        },
        {
          description: "Catch-all Route for all other events",
          filter: "true",
          name: "default",
          output: "default",
          pipeline: "main",
          final: true,
          id: "route-default",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesUpdateExamplesRouteWithDefaults

<!-- UsageSnippet language="typescript" operationID="updateRoutesById" method="patch" path="/routes/{id}" example="RoutesUpdateExamplesRouteWithDefaults" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.update({
    id: "<id>",
    routesInput: {
      id: "default",
      routes: [
        {
          description: "Route access logs to main Pipeline",
          filter: "source == \"access.log\"",
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
import { routesUpdate } from "cribl-control-plane/funcs/routesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesUpdate(criblControlPlane, {
    id: "<id>",
    routesInput: {
      id: "default",
      routes: [
        {
          description: "Route access logs to main Pipeline",
          filter: "source == \"access.log\"",
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
    console.log("routesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesUpdateExamplesRouteWithOutputExpression

<!-- UsageSnippet language="typescript" operationID="updateRoutesById" method="patch" path="/routes/{id}" example="RoutesUpdateExamplesRouteWithOutputExpression" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.update({
    id: "<id>",
    routesInput: {
      id: "default",
      routes: [
        {
          description: "Route with dynamic Destination based on environment",
          enableOutputExpression: true,
          filter: "source == \"dynamic.log\"",
          name: "dynamic-output",
          outputExpression: "`myDest_${C.logStreamEnv}`",
          pipeline: "main",
          final: true,
          id: "route-dynamic",
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
import { routesUpdate } from "cribl-control-plane/funcs/routesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesUpdate(criblControlPlane, {
    id: "<id>",
    routesInput: {
      id: "default",
      routes: [
        {
          description: "Route with dynamic Destination based on environment",
          enableOutputExpression: true,
          filter: "source == \"dynamic.log\"",
          name: "dynamic-output",
          outputExpression: "`myDest_${C.logStreamEnv}`",
          pipeline: "main",
          final: true,
          id: "route-dynamic",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRoutesByIdRequest](../../models/operations/updateroutesbyidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Get a list of all Routes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRoutes" method="get" path="/routes" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { routesList } from "cribl-control-plane/funcs/routesList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesList(criblControlPlane);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routesList failed:", res.error);
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

**Promise\<[models.CountedRoutes](../../models/countedroutes.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## append

Add a Route to the end of the specified Routing table.

### Example Usage: RoutesAppendExamplesMultipleRoutes

<!-- UsageSnippet language="typescript" operationID="createRoutesAppendById" method="post" path="/routes/{id}/append" example="RoutesAppendExamplesMultipleRoutes" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.append({
    id: "<id>",
    requestBody: [
      {
        description: "Route audit logs",
        filter: "source == \"audit.log\"",
        name: "audit",
        output: "default",
        pipeline: "main",
        final: false,
        id: "route-audit",
      },
      {
        description: "Route security logs",
        filter: "source == \"security.log\"",
        name: "security",
        output: "devnull",
        pipeline: "passthru",
        final: false,
        id: "route-security",
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
import { routesAppend } from "cribl-control-plane/funcs/routesAppend.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesAppend(criblControlPlane, {
    id: "<id>",
    requestBody: [
      {
        description: "Route audit logs",
        filter: "source == \"audit.log\"",
        name: "audit",
        output: "default",
        pipeline: "main",
        final: false,
        id: "route-audit",
      },
      {
        description: "Route security logs",
        filter: "source == \"security.log\"",
        name: "security",
        output: "devnull",
        pipeline: "passthru",
        final: false,
        id: "route-security",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routesAppend failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesAppendExamplesRouteWithDefaults

<!-- UsageSnippet language="typescript" operationID="createRoutesAppendById" method="post" path="/routes/{id}/append" example="RoutesAppendExamplesRouteWithDefaults" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.append({
    id: "<id>",
    requestBody: [
      {
        description: "Route with server-generated id and default final value",
        filter: "source == \"new.log\"",
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
import { routesAppend } from "cribl-control-plane/funcs/routesAppend.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesAppend(criblControlPlane, {
    id: "<id>",
    requestBody: [
      {
        description: "Route with server-generated id and default final value",
        filter: "source == \"new.log\"",
        name: "new-route",
        pipeline: "main",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routesAppend failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesAppendExamplesRouteWithOutputExpression

<!-- UsageSnippet language="typescript" operationID="createRoutesAppendById" method="post" path="/routes/{id}/append" example="RoutesAppendExamplesRouteWithOutputExpression" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.append({
    id: "<id>",
    requestBody: [
      {
        description: "Route with dynamic Destination based on environment",
        enableOutputExpression: true,
        filter: "source == \"dynamic.log\"",
        name: "dynamic-append",
        outputExpression: "`myDest_${C.logStreamEnv}`",
        pipeline: "main",
        final: true,
        id: "route-dynamic-append",
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
import { routesAppend } from "cribl-control-plane/funcs/routesAppend.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesAppend(criblControlPlane, {
    id: "<id>",
    requestBody: [
      {
        description: "Route with dynamic Destination based on environment",
        enableOutputExpression: true,
        filter: "source == \"dynamic.log\"",
        name: "dynamic-append",
        outputExpression: "`myDest_${C.logStreamEnv}`",
        pipeline: "main",
        final: true,
        id: "route-dynamic-append",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routesAppend failed:", res.error);
  }
}

run();
```
### Example Usage: RoutesAppendExamplesSingleRoute

<!-- UsageSnippet language="typescript" operationID="createRoutesAppendById" method="post" path="/routes/{id}/append" example="RoutesAppendExamplesSingleRoute" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.routes.append({
    id: "<id>",
    requestBody: [
      {
        description: "Route new logs to main pipeline",
        filter: "source == \"new.log\"",
        name: "new-route",
        pipeline: "main",
        final: true,
        id: "route-new",
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
import { routesAppend } from "cribl-control-plane/funcs/routesAppend.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await routesAppend(criblControlPlane, {
    id: "<id>",
    requestBody: [
      {
        description: "Route new logs to main pipeline",
        filter: "source == \"new.log\"",
        name: "new-route",
        pipeline: "main",
        final: true,
        id: "route-new",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("routesAppend failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRoutesAppendByIdRequest](../../models/operations/createroutesappendbyidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
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
    routes: {
      comments: [
        {
          comment: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
          groupId: "<id>",
          id: "<id>",
          index: 3844.57,
        },
      ],
      groups: {
        "key": {
          description: "ugh eyeliner authorized even burgeon chime expansion boldly midst and",
          index: 8899.36,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {
              "key": "<value>",
            },
          ],
          context: "<value>",
          description: "Route access logs to main pipeline",
          disabled: true,
          enableOutputExpression: false,
          filter: "source == \"access.log\"",
          final: true,
          groupId: "<id>",
          id: "default",
          name: "my-route",
          output: "<value>",
          outputExpression: "<value>",
          pipeline: "main",
          targetContext: "group",
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
    routes: {
      comments: [
        {
          comment: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
          groupId: "<id>",
          id: "<id>",
          index: 3844.57,
        },
      ],
      groups: {
        "key": {
          description: "ugh eyeliner authorized even burgeon chime expansion boldly midst and",
          index: 8899.36,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {
              "key": "<value>",
            },
          ],
          context: "<value>",
          description: "Route access logs to main pipeline",
          disabled: true,
          enableOutputExpression: false,
          filter: "source == \"access.log\"",
          final: true,
          groupId: "<id>",
          id: "default",
          name: "my-route",
          output: "<value>",
          outputExpression: "<value>",
          pipeline: "main",
          targetContext: "group",
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
    routes: {
      comments: [
        {
          comment: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
          groupId: "<id>",
          id: "<id>",
          index: 1800.08,
        },
      ],
      groups: {
        "key": {
          description: "ugh eyeliner authorized even burgeon chime expansion boldly midst and",
          index: 557.98,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {
              "key": "<value>",
            },
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
          ],
          context: "<value>",
          description: "Route speedtest logs",
          disabled: false,
          enableOutputExpression: false,
          filter: "source == \"speedtest.log\"",
          final: false,
          groupId: "<id>",
          id: "route-speedtest",
          name: "speedtest",
          output: "default",
          outputExpression: "<value>",
          pipeline: "main",
          targetContext: "pack",
        },
        {
          clones: [
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            {
              "key": "<value>",
            },
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
          ],
          context: "<value>",
          description: "Route mtr logs",
          disabled: false,
          enableOutputExpression: false,
          filter: "source == \"mtr.log\"",
          final: false,
          groupId: "<id>",
          id: "route-mtr",
          name: "mtr",
          output: "default",
          outputExpression: "<value>",
          pipeline: "passthru",
          targetContext: "group",
        },
        {
          clones: [
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            {
              "key": "<value>",
              "key1": "<value>",
            },
            {

            },
          ],
          context: "<value>",
          description: "Route statsd metrics",
          disabled: true,
          enableOutputExpression: false,
          filter: "source == \"statsd.log\"",
          final: false,
          groupId: "<id>",
          id: "route-statsd",
          name: "statsd",
          output: "devnull",
          outputExpression: "<value>",
          pipeline: "prometheus_metrics",
          targetContext: "group",
        },
        {
          clones: [
            {

            },
            {
              "key": "<value>",
              "key1": "<value>",
            },
            {
              "key": "<value>",
              "key1": "<value>",
            },
          ],
          context: "<value>",
          description: "Catch-all Route for all other events",
          disabled: true,
          enableOutputExpression: false,
          filter: "true",
          final: true,
          groupId: "<id>",
          id: "route-default",
          name: "default",
          output: "default",
          outputExpression: "<value>",
          pipeline: "main",
          targetContext: "pack",
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
    routes: {
      comments: [
        {
          comment: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
          groupId: "<id>",
          id: "<id>",
          index: 1800.08,
        },
      ],
      groups: {
        "key": {
          description: "ugh eyeliner authorized even burgeon chime expansion boldly midst and",
          index: 557.98,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {
              "key": "<value>",
            },
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
          ],
          context: "<value>",
          description: "Route speedtest logs",
          disabled: false,
          enableOutputExpression: false,
          filter: "source == \"speedtest.log\"",
          final: false,
          groupId: "<id>",
          id: "route-speedtest",
          name: "speedtest",
          output: "default",
          outputExpression: "<value>",
          pipeline: "main",
          targetContext: "pack",
        },
        {
          clones: [
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            {
              "key": "<value>",
            },
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
          ],
          context: "<value>",
          description: "Route mtr logs",
          disabled: false,
          enableOutputExpression: false,
          filter: "source == \"mtr.log\"",
          final: false,
          groupId: "<id>",
          id: "route-mtr",
          name: "mtr",
          output: "default",
          outputExpression: "<value>",
          pipeline: "passthru",
          targetContext: "group",
        },
        {
          clones: [
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            {
              "key": "<value>",
              "key1": "<value>",
            },
            {
  
            },
          ],
          context: "<value>",
          description: "Route statsd metrics",
          disabled: true,
          enableOutputExpression: false,
          filter: "source == \"statsd.log\"",
          final: false,
          groupId: "<id>",
          id: "route-statsd",
          name: "statsd",
          output: "devnull",
          outputExpression: "<value>",
          pipeline: "prometheus_metrics",
          targetContext: "group",
        },
        {
          clones: [
            {
  
            },
            {
              "key": "<value>",
              "key1": "<value>",
            },
            {
              "key": "<value>",
              "key1": "<value>",
            },
          ],
          context: "<value>",
          description: "Catch-all Route for all other events",
          disabled: true,
          enableOutputExpression: false,
          filter: "true",
          final: true,
          groupId: "<id>",
          id: "route-default",
          name: "default",
          output: "default",
          outputExpression: "<value>",
          pipeline: "main",
          targetContext: "pack",
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
    routes: {
      comments: [
        {
          comment: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
          groupId: "<id>",
          id: "<id>",
          index: 2035.39,
        },
      ],
      groups: {
        "key": {
          description: "ugh eyeliner authorized even burgeon chime expansion boldly midst and",
          index: 3962.06,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {

            },
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            {

            },
          ],
          context: "<value>",
          description: "Route with dynamic Destination based on environment",
          disabled: true,
          enableOutputExpression: true,
          filter: "source == \"dynamic.log\"",
          final: true,
          groupId: "<id>",
          id: "route-dynamic",
          name: "dynamic-output",
          output: "<value>",
          outputExpression: "`myDest_${C.logStreamEnv}`",
          pipeline: "main",
          targetContext: "pack",
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
    routes: {
      comments: [
        {
          comment: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
          groupId: "<id>",
          id: "<id>",
          index: 2035.39,
        },
      ],
      groups: {
        "key": {
          description: "ugh eyeliner authorized even burgeon chime expansion boldly midst and",
          index: 3962.06,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {
  
            },
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            {
  
            },
          ],
          context: "<value>",
          description: "Route with dynamic Destination based on environment",
          disabled: true,
          enableOutputExpression: true,
          filter: "source == \"dynamic.log\"",
          final: true,
          groupId: "<id>",
          id: "route-dynamic",
          name: "dynamic-output",
          output: "<value>",
          outputExpression: "`myDest_${C.logStreamEnv}`",
          pipeline: "main",
          targetContext: "pack",
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
        clones: [
          {
            "key": "<value>",
            "key1": "<value>",
          },
        ],
        context: "<value>",
        description: "Route audit logs",
        disabled: false,
        enableOutputExpression: false,
        filter: "source == \"audit.log\"",
        final: false,
        groupId: "<id>",
        id: "route-audit",
        name: "audit",
        output: "default",
        outputExpression: "<value>",
        pipeline: "main",
        targetContext: "group",
      },
      {
        clones: [
          {

          },
          {

          },
          {

          },
        ],
        context: "<value>",
        description: "Route security logs",
        disabled: true,
        enableOutputExpression: false,
        filter: "source == \"security.log\"",
        final: false,
        groupId: "<id>",
        id: "route-security",
        name: "security",
        output: "devnull",
        outputExpression: "<value>",
        pipeline: "passthru",
        targetContext: "group",
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
        clones: [
          {
            "key": "<value>",
            "key1": "<value>",
          },
        ],
        context: "<value>",
        description: "Route audit logs",
        disabled: false,
        enableOutputExpression: false,
        filter: "source == \"audit.log\"",
        final: false,
        groupId: "<id>",
        id: "route-audit",
        name: "audit",
        output: "default",
        outputExpression: "<value>",
        pipeline: "main",
        targetContext: "group",
      },
      {
        clones: [
          {
  
          },
          {
  
          },
          {
  
          },
        ],
        context: "<value>",
        description: "Route security logs",
        disabled: true,
        enableOutputExpression: false,
        filter: "source == \"security.log\"",
        final: false,
        groupId: "<id>",
        id: "route-security",
        name: "security",
        output: "devnull",
        outputExpression: "<value>",
        pipeline: "passthru",
        targetContext: "group",
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
        clones: [
          {
            "key": "<value>",
            "key1": "<value>",
          },
        ],
        context: "<value>",
        description: "Route with dynamic Destination based on environment",
        disabled: false,
        enableOutputExpression: true,
        filter: "source == \"dynamic.log\"",
        final: true,
        groupId: "<id>",
        id: "route-dynamic-append",
        name: "dynamic-append",
        output: "<value>",
        outputExpression: "`myDest_${C.logStreamEnv}`",
        pipeline: "main",
        targetContext: "group",
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
        clones: [
          {
            "key": "<value>",
            "key1": "<value>",
          },
        ],
        context: "<value>",
        description: "Route with dynamic Destination based on environment",
        disabled: false,
        enableOutputExpression: true,
        filter: "source == \"dynamic.log\"",
        final: true,
        groupId: "<id>",
        id: "route-dynamic-append",
        name: "dynamic-append",
        output: "<value>",
        outputExpression: "`myDest_${C.logStreamEnv}`",
        pipeline: "main",
        targetContext: "group",
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
        clones: [
          {
            "key": "<value>",
          },
          {

          },
        ],
        context: "<value>",
        description: "Route new logs to main pipeline",
        disabled: true,
        enableOutputExpression: true,
        filter: "source == \"new.log\"",
        final: true,
        groupId: "<id>",
        id: "route-new",
        name: "new-route",
        output: "<value>",
        outputExpression: "<value>",
        pipeline: "main",
        targetContext: "group",
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
        clones: [
          {
            "key": "<value>",
          },
          {
  
          },
        ],
        context: "<value>",
        description: "Route new logs to main pipeline",
        disabled: true,
        enableOutputExpression: true,
        filter: "source == \"new.log\"",
        final: true,
        groupId: "<id>",
        id: "route-new",
        name: "new-route",
        output: "<value>",
        outputExpression: "<value>",
        pipeline: "main",
        targetContext: "group",
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
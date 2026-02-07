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
      comments: [
        {
          comment: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
          groupId: "<id>",
          id: "<id>",
          index: 4999.72,
        },
      ],
      groups: {
        "key": {
          description: "ridge impassioned amount happily",
          index: 8485.39,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {
              "key": "<value>",
              "key1": "<value>",
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
      comments: [
        {
          comment: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
          groupId: "<id>",
          id: "<id>",
          index: 4999.72,
        },
      ],
      groups: {
        "key": {
          description: "ridge impassioned amount happily",
          index: 8485.39,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {
              "key": "<value>",
              "key1": "<value>",
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
      comments: [
        {
          comment: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
          groupId: "<id>",
          id: "<id>",
          index: 2877.94,
        },
      ],
      groups: {
        "key": {
          description: "ridge impassioned amount happily",
          index: 7418.21,
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
            },
            {
              "key": "<value>",
            },
          ],
          context: "<value>",
          description: "Route speedtest logs",
          disabled: true,
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
          ],
          context: "<value>",
          description: "Catch-all Route for all other events",
          disabled: false,
          enableOutputExpression: false,
          filter: "true",
          final: true,
          groupId: "<id>",
          id: "route-default",
          name: "default",
          output: "default",
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
      comments: [
        {
          comment: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
          groupId: "<id>",
          id: "<id>",
          index: 2877.94,
        },
      ],
      groups: {
        "key": {
          description: "ridge impassioned amount happily",
          index: 7418.21,
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
            },
            {
              "key": "<value>",
            },
          ],
          context: "<value>",
          description: "Route speedtest logs",
          disabled: true,
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
          ],
          context: "<value>",
          description: "Catch-all Route for all other events",
          disabled: false,
          enableOutputExpression: false,
          filter: "true",
          final: true,
          groupId: "<id>",
          id: "route-default",
          name: "default",
          output: "default",
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
      comments: [
        {
          comment: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
          groupId: "<id>",
          id: "<id>",
          index: 7514.98,
        },
      ],
      groups: {
        "key": {
          description: "ridge impassioned amount happily",
          index: 3321.41,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
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
      comments: [
        {
          comment: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
          groupId: "<id>",
          id: "<id>",
          index: 7514.98,
        },
      ],
      groups: {
        "key": {
          description: "ridge impassioned amount happily",
          index: 3321.41,
          name: "<value>",
        },
      },
      id: "default",
      routes: [
        {
          clones: [
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
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
          targetContext: "group",
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
        clones: [
          {
            "key": "<value>",
            "key1": "<value>",
          },
          {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
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
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
        ],
        context: "<value>",
        description: "Route security logs",
        disabled: false,
        enableOutputExpression: false,
        filter: "source == \"security.log\"",
        final: false,
        groupId: "<id>",
        id: "route-security",
        name: "security",
        output: "devnull",
        outputExpression: "<value>",
        pipeline: "passthru",
        targetContext: "pack",
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
        clones: [
          {
            "key": "<value>",
            "key1": "<value>",
          },
          {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
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
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
        ],
        context: "<value>",
        description: "Route security logs",
        disabled: false,
        enableOutputExpression: false,
        filter: "source == \"security.log\"",
        final: false,
        groupId: "<id>",
        id: "route-security",
        name: "security",
        output: "devnull",
        outputExpression: "<value>",
        pipeline: "passthru",
        targetContext: "pack",
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
        description: "Route with dynamic Destination based on environment",
        disabled: true,
        enableOutputExpression: true,
        filter: "source == \"dynamic.log\"",
        final: true,
        groupId: "<id>",
        id: "route-dynamic-append",
        name: "dynamic-append",
        output: "<value>",
        outputExpression: "`myDest_${C.logStreamEnv}`",
        pipeline: "main",
        targetContext: "pack",
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
        description: "Route with dynamic Destination based on environment",
        disabled: true,
        enableOutputExpression: true,
        filter: "source == \"dynamic.log\"",
        final: true,
        groupId: "<id>",
        id: "route-dynamic-append",
        name: "dynamic-append",
        output: "<value>",
        outputExpression: "`myDest_${C.logStreamEnv}`",
        pipeline: "main",
        targetContext: "pack",
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
        clones: [
          {

          },
          {
            "key": "<value>",
          },
        ],
        context: "<value>",
        description: "Route new logs to main pipeline",
        disabled: false,
        enableOutputExpression: true,
        filter: "source == \"new.log\"",
        final: true,
        groupId: "<id>",
        id: "route-new",
        name: "new-route",
        output: "<value>",
        outputExpression: "<value>",
        pipeline: "main",
        targetContext: "pack",
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
        clones: [
          {
  
          },
          {
            "key": "<value>",
          },
        ],
        context: "<value>",
        description: "Route new logs to main pipeline",
        disabled: false,
        enableOutputExpression: true,
        filter: "source == \"new.log\"",
        final: true,
        groupId: "<id>",
        id: "route-new",
        name: "new-route",
        output: "<value>",
        outputExpression: "<value>",
        pipeline: "main",
        targetContext: "pack",
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
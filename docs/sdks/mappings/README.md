# Mappings
(*groups.mappings*)

## Overview

### Available Operations

* [activate](#activate) - Set a Mapping Ruleset as the active configuration for the specified Cribl product
* [create](#create) - Create a new Mapping Ruleset for the specified Cribl product
* [list](#list) - List all Mapping Rulesets for the specified Cribl product
* [delete](#delete) - Delete the specified Mapping Ruleset from the Worker Group or Edge Fleet
* [get](#get) - Retrieve a Specific Mapping Ruleset
* [update](#update) - Update an existing Mapping Ruleset for a Worker Group or Edge Fleet

## activate

Set a specific Mapping Ruleset as the currently active configuration for the specified Cribl product.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsActivateByProduct" method="post" path="/admin/products/{product}/mappings/activate" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.activate({
    product: "stream",
    rulesetId: {
      id: "default",
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
import { groupsMappingsActivate } from "cribl-control-plane/funcs/groupsMappingsActivate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsActivate(criblControlPlane, {
    product: "stream",
    rulesetId: {
      id: "default",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsActivate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAdminProductsMappingsActivateByProductRequest](../../models/operations/createadminproductsmappingsactivatebyproductrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAdminProductsMappingsActivateByProductResponse](../../models/operations/createadminproductsmappingsactivatebyproductresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create and save a new Mapping Ruleset for the specified Cribl product.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsByProduct" method="post" path="/admin/products/{product}/mappings" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.create({
    product: "edge",
    mappingRuleset: {
      id: "os-based-mapping",
      conf: {
        functions: [
          {
            filter: "platform === \"linux\"",
            id: "eval",
            description: "Map Linux Edge Nodes",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
              ],
            },
          },
          {
            filter: "platform === \"win32\"",
            id: "eval",
            description: "Map Windows Edge Nodes",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
              ],
            },
          },
          {
            filter: "platform === \"darwin\"",
            id: "eval",
            description: "Map macOS Edge Nodes",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
              ],
            },
          },
          {
            filter: "!cribl.group",
            id: "eval",
            description: "Default mapping for unmapped nodes",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
              ],
            },
          },
        ],
      },
      active: false,
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
import { groupsMappingsCreate } from "cribl-control-plane/funcs/groupsMappingsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsCreate(criblControlPlane, {
    product: "edge",
    mappingRuleset: {
      id: "os-based-mapping",
      conf: {
        functions: [
          {
            filter: "platform === \"linux\"",
            id: "eval",
            description: "Map Linux Edge Nodes",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
              ],
            },
          },
          {
            filter: "platform === \"win32\"",
            id: "eval",
            description: "Map Windows Edge Nodes",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
              ],
            },
          },
          {
            filter: "platform === \"darwin\"",
            id: "eval",
            description: "Map macOS Edge Nodes",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
              ],
            },
          },
          {
            filter: "!cribl.group",
            id: "eval",
            description: "Default mapping for unmapped nodes",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
              ],
            },
          },
        ],
      },
      active: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAdminProductsMappingsByProductRequest](../../models/operations/createadminproductsmappingsbyproductrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAdminProductsMappingsByProductResponse](../../models/operations/createadminproductsmappingsbyproductresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## list

Retrieve a list of all existing Mapping Rulesets for the specified Cribl product.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAdminProductsMappingsByProduct" method="get" path="/admin/products/{product}/mappings" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.list({
    product: "edge",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { groupsMappingsList } from "cribl-control-plane/funcs/groupsMappingsList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsList(criblControlPlane, {
    product: "edge",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAdminProductsMappingsByProductRequest](../../models/operations/getadminproductsmappingsbyproductrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAdminProductsMappingsByProductResponse](../../models/operations/getadminproductsmappingsbyproductresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Permanently remove the specified Mapping Ruleset from the Worker Group or Edge Fleet.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAdminProductsMappingsByProductAndId" method="delete" path="/admin/products/{product}/mappings/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.delete({
    product: "stream",
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
import { groupsMappingsDelete } from "cribl-control-plane/funcs/groupsMappingsDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsDelete(criblControlPlane, {
    product: "stream",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAdminProductsMappingsByProductAndIdRequest](../../models/operations/deleteadminproductsmappingsbyproductandidrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteAdminProductsMappingsByProductAndIdResponse](../../models/operations/deleteadminproductsmappingsbyproductandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get the details for a single Mapping Ruleset, identified by its id, for a Worker Group or Edge Fleet.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAdminProductsMappingsByProductAndId" method="get" path="/admin/products/{product}/mappings/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.get({
    product: "stream",
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
import { groupsMappingsGet } from "cribl-control-plane/funcs/groupsMappingsGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsGet(criblControlPlane, {
    product: "stream",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAdminProductsMappingsByProductAndIdRequest](../../models/operations/getadminproductsmappingsbyproductandidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAdminProductsMappingsByProductAndIdResponse](../../models/operations/getadminproductsmappingsbyproductandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Modify the configuration of the specified Mapping Ruleset for a Worker Group or Edge Fleet.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAdminProductsMappingsByProductAndId" method="patch" path="/admin/products/{product}/mappings/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.update({
    product: "stream",
    id: "<id>",
    mappingRuleset: {
      id: "complex-mapping",
      conf: {
        functions: [
          {
            filter: "(conn_ip.startsWith(\"10.10.42.\") && cpus > 6) || env.CRIBL_HOME.match(\"DMZ\")",
            id: "eval",
            description: "Map high-performance nodes in specific network or DMZ",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
                "<value 2>",
              ],
            },
          },
          {
            filter: "!cribl.group",
            id: "eval",
            description: "Default mapping",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
                "<value 2>",
              ],
            },
          },
        ],
      },
      active: true,
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
import { groupsMappingsUpdate } from "cribl-control-plane/funcs/groupsMappingsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsUpdate(criblControlPlane, {
    product: "stream",
    id: "<id>",
    mappingRuleset: {
      id: "complex-mapping",
      conf: {
        functions: [
          {
            filter: "(conn_ip.startsWith(\"10.10.42.\") && cpus > 6) || env.CRIBL_HOME.match(\"DMZ\")",
            id: "eval",
            description: "Map high-performance nodes in specific network or DMZ",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
                "<value 2>",
              ],
            },
          },
          {
            filter: "!cribl.group",
            id: "eval",
            description: "Default mapping",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
            name: "Eval",
            group: "Standard",
            schema: {
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              keep: [
                "<value 1>",
              ],
              remove: [
                "<value 1>",
                "<value 2>",
              ],
            },
          },
        ],
      },
      active: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAdminProductsMappingsByProductAndIdRequest](../../models/operations/updateadminproductsmappingsbyproductandidrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateAdminProductsMappingsByProductAndIdResponse](../../models/operations/updateadminproductsmappingsbyproductandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
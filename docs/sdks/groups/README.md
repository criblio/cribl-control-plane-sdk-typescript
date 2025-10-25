# Groups
(*groups*)

## Overview

Actions related to Groups

### Available Operations

* [list](#list) - List all Worker Groups or Edge Fleets for the specified Cribl product
* [create](#create) - Create a Worker Group or Edge Fleet for the specified Cribl product
* [get](#get) - Get a Worker Group or Edge Fleet
* [update](#update) - Update a Worker Group or Edge Fleet
* [delete](#delete) - Delete a Worker Group or Edge Fleet
* [deploy](#deploy) - Deploy commits to a Worker Group or Edge Fleet

## list

Get a list of all Worker Groups or Edge Fleets for the specified Cribl product.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listConfigGroupByProduct" method="get" path="/products/{product}/groups" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.list({
    fields: "<value>",
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
import { groupsList } from "cribl-control-plane/funcs/groupsList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsList(criblControlPlane, {
    fields: "<value>",
    product: "edge",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListConfigGroupByProductRequest](../../models/operations/listconfiggroupbyproductrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListConfigGroupByProductResponse](../../models/operations/listconfiggroupbyproductresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create a new Worker Group or Edge Fleet for the specified Cribl product.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createConfigGroupByProduct" method="post" path="/products/{product}/groups" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.create({
    product: "edge",
    configGroup: {
      cloud: {
        provider: "aws",
        region: "<value>",
      },
      configVersion: "<value>",
      deployingWorkerCount: 393.49,
      description: "ack before fondly scent because gee without where exactly",
      estimatedIngestRate: 7168,
      git: {
        commit: "<value>",
        localChanges: 5255.51,
        log: [
          {
            authorEmail: "<value>",
            authorName: "<value>",
            date: "2024-06-13",
            hash: "<value>",
            message: "<value>",
            short: "<value>",
          },
        ],
      },
      id: "<id>",
      incompatibleWorkerCount: 5613.31,
      inherits: "<value>",
      isFleet: true,
      isSearch: false,
      lookupDeployments: [
        {
          context: "<value>",
          lookups: [],
        },
      ],
      maxWorkerAge: "<value>",
      name: "<value>",
      onPrem: false,
      provisioned: true,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tags: "<value>",
      type: "lake_access",
      upgradeVersion: "<value>",
      workerCount: 3050.1,
      workerRemoteAccess: false,
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
import { groupsCreate } from "cribl-control-plane/funcs/groupsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsCreate(criblControlPlane, {
    product: "edge",
    configGroup: {
      cloud: {
        provider: "aws",
        region: "<value>",
      },
      configVersion: "<value>",
      deployingWorkerCount: 393.49,
      description: "ack before fondly scent because gee without where exactly",
      estimatedIngestRate: 7168,
      git: {
        commit: "<value>",
        localChanges: 5255.51,
        log: [
          {
            authorEmail: "<value>",
            authorName: "<value>",
            date: "2024-06-13",
            hash: "<value>",
            message: "<value>",
            short: "<value>",
          },
        ],
      },
      id: "<id>",
      incompatibleWorkerCount: 5613.31,
      inherits: "<value>",
      isFleet: true,
      isSearch: false,
      lookupDeployments: [
        {
          context: "<value>",
          lookups: [],
        },
      ],
      maxWorkerAge: "<value>",
      name: "<value>",
      onPrem: false,
      provisioned: true,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tags: "<value>",
      type: "lake_access",
      upgradeVersion: "<value>",
      workerCount: 3050.1,
      workerRemoteAccess: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateConfigGroupByProductRequest](../../models/operations/createconfiggroupbyproductrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateConfigGroupByProductResponse](../../models/operations/createconfiggroupbyproductresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get the specified Worker Group or Edge Fleet.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConfigGroupByProductAndId" method="get" path="/products/{product}/groups/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.get({
    product: "edge",
    id: "<id>",
    fields: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { groupsGet } from "cribl-control-plane/funcs/groupsGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsGet(criblControlPlane, {
    product: "edge",
    id: "<id>",
    fields: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConfigGroupByProductAndIdRequest](../../models/operations/getconfiggroupbyproductandidrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConfigGroupByProductAndIdResponse](../../models/operations/getconfiggroupbyproductandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the specified Worker Group or Edge Fleet.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateConfigGroupByProductAndId" method="patch" path="/products/{product}/groups/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.update({
    product: "stream",
    id: "<id>",
    configGroup: {
      cloud: {
        provider: "aws",
        region: "<value>",
      },
      configVersion: "<value>",
      deployingWorkerCount: 7451.49,
      description: "verbally feminize harmful prance really",
      estimatedIngestRate: 13312,
      git: {
        commit: "<value>",
        localChanges: 4475.22,
        log: [
          {
            authorEmail: "<value>",
            authorName: "<value>",
            date: "2024-01-27",
            hash: "<value>",
            message: "<value>",
            short: "<value>",
          },
        ],
      },
      id: "<id>",
      incompatibleWorkerCount: 2043.29,
      inherits: "<value>",
      isFleet: false,
      isSearch: false,
      lookupDeployments: [
        {
          context: "<value>",
          lookups: [
            {
              deployedVersion: "<value>",
              file: "<value>",
              version: "<value>",
            },
          ],
        },
      ],
      maxWorkerAge: "<value>",
      name: "<value>",
      onPrem: false,
      provisioned: true,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      tags: "<value>",
      type: "lake_access",
      upgradeVersion: "<value>",
      workerCount: 1557.82,
      workerRemoteAccess: false,
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
import { groupsUpdate } from "cribl-control-plane/funcs/groupsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsUpdate(criblControlPlane, {
    product: "stream",
    id: "<id>",
    configGroup: {
      cloud: {
        provider: "aws",
        region: "<value>",
      },
      configVersion: "<value>",
      deployingWorkerCount: 7451.49,
      description: "verbally feminize harmful prance really",
      estimatedIngestRate: 13312,
      git: {
        commit: "<value>",
        localChanges: 4475.22,
        log: [
          {
            authorEmail: "<value>",
            authorName: "<value>",
            date: "2024-01-27",
            hash: "<value>",
            message: "<value>",
            short: "<value>",
          },
        ],
      },
      id: "<id>",
      incompatibleWorkerCount: 2043.29,
      inherits: "<value>",
      isFleet: false,
      isSearch: false,
      lookupDeployments: [
        {
          context: "<value>",
          lookups: [
            {
              deployedVersion: "<value>",
              file: "<value>",
              version: "<value>",
            },
          ],
        },
      ],
      maxWorkerAge: "<value>",
      name: "<value>",
      onPrem: false,
      provisioned: true,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      tags: "<value>",
      type: "lake_access",
      upgradeVersion: "<value>",
      workerCount: 1557.82,
      workerRemoteAccess: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConfigGroupByProductAndIdRequest](../../models/operations/updateconfiggroupbyproductandidrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConfigGroupByProductAndIdResponse](../../models/operations/updateconfiggroupbyproductandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Delete the specified Worker Group or Edge Fleet.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteConfigGroupByProductAndId" method="delete" path="/products/{product}/groups/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.delete({
    product: "edge",
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
import { groupsDelete } from "cribl-control-plane/funcs/groupsDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsDelete(criblControlPlane, {
    product: "edge",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteConfigGroupByProductAndIdRequest](../../models/operations/deleteconfiggroupbyproductandidrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteConfigGroupByProductAndIdResponse](../../models/operations/deleteconfiggroupbyproductandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## deploy

Deploy commits to the specified Worker Group or Edge Fleet.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateConfigGroupDeployByProductAndId" method="patch" path="/products/{product}/groups/{id}/deploy" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.deploy({
    product: "stream",
    id: "<id>",
    deployRequest: {
      lookups: [
        {
          context: "<value>",
          lookups: [],
        },
      ],
      version: "<value>",
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
import { groupsDeploy } from "cribl-control-plane/funcs/groupsDeploy.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsDeploy(criblControlPlane, {
    product: "stream",
    id: "<id>",
    deployRequest: {
      lookups: [
        {
          context: "<value>",
          lookups: [],
        },
      ],
      version: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsDeploy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConfigGroupDeployByProductAndIdRequest](../../models/operations/updateconfiggroupdeploybyproductandidrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConfigGroupDeployByProductAndIdResponse](../../models/operations/updateconfiggroupdeploybyproductandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
# Dashboards
(*search.dashboards*)

## Overview

### Available Operations

* [list](#list) - Get a list of SearchDashboard objects
* [create](#create) - Create SearchDashboard
* [get](#get) - Get SearchDashboard by ID
* [update](#update) - Update SearchDashboard
* [delete](#delete) - Delete SearchDashboard

## list

Get a list of SearchDashboard objects

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSearchDashboard" method="get" path="/search/dashboards" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.search.dashboards.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { searchDashboardsList } from "cribl-control-plane/funcs/searchDashboardsList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await searchDashboardsList(criblControlPlane);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchDashboardsList failed:", res.error);
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

**Promise\<[operations.ListSearchDashboardResponse](../../models/operations/listsearchdashboardresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create SearchDashboard

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSearchDashboard" method="post" path="/search/dashboards" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.search.dashboards.create({
    cacheTTLSeconds: 9377.15,
    category: "<value>",
    created: 6538.99,
    createdBy: "<value>",
    description: "nougat whether marvelous thankfully lecture readily beside lest",
    displayCreatedBy: "<value>",
    displayModifiedBy: "<value>",
    elements: [],
    groups: "<value>",
    id: "<id>",
    modified: 3463.91,
    modifiedBy: "<value>",
    name: "<value>",
    packId: "<id>",
    refreshRate: 7762.62,
    resolvedDatasetIds: [
      "<value 1>",
    ],
    schedule: {
      cronSchedule: "<value>",
      enabled: true,
      keepLastN: 5808.55,
      notifications: {
        disabled: false,
        items: [
          {
            id: "<id>",
            condition: "<value>",
            targets: [
              "<value 1>",
              "<value 2>",
            ],
            targetConfigs: [
              {
                conf: {
                  subject: "<value>",
                  body: "<value>",
                  emailRecipient: {
                    to: "<value>",
                    cc: "<value>",
                    bcc: "<value>",
                  },
                },
                id: "<id>",
              },
            ],
            conf: {},
            metadata: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
          },
        ],
      },
      resumeMissed: true,
      resumeOnBoot: true,
      tz: "<value>",
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
import { searchDashboardsCreate } from "cribl-control-plane/funcs/searchDashboardsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await searchDashboardsCreate(criblControlPlane, {
    cacheTTLSeconds: 9377.15,
    category: "<value>",
    created: 6538.99,
    createdBy: "<value>",
    description: "nougat whether marvelous thankfully lecture readily beside lest",
    displayCreatedBy: "<value>",
    displayModifiedBy: "<value>",
    elements: [],
    groups: "<value>",
    id: "<id>",
    modified: 3463.91,
    modifiedBy: "<value>",
    name: "<value>",
    packId: "<id>",
    refreshRate: 7762.62,
    resolvedDatasetIds: [
      "<value 1>",
    ],
    schedule: {
      cronSchedule: "<value>",
      enabled: true,
      keepLastN: 5808.55,
      notifications: {
        disabled: false,
        items: [
          {
            id: "<id>",
            condition: "<value>",
            targets: [
              "<value 1>",
              "<value 2>",
            ],
            targetConfigs: [
              {
                conf: {
                  subject: "<value>",
                  body: "<value>",
                  emailRecipient: {
                    to: "<value>",
                    cc: "<value>",
                    bcc: "<value>",
                  },
                },
                id: "<id>",
              },
            ],
            conf: {},
            metadata: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
          },
        ],
      },
      resumeMissed: true,
      resumeOnBoot: true,
      tz: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchDashboardsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SearchDashboard](../../models/searchdashboard.md)                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSearchDashboardResponse](../../models/operations/createsearchdashboardresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get SearchDashboard by ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSearchDashboardById" method="get" path="/search/dashboards/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.search.dashboards.get({
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
import { searchDashboardsGet } from "cribl-control-plane/funcs/searchDashboardsGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await searchDashboardsGet(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchDashboardsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSearchDashboardByIdRequest](../../models/operations/getsearchdashboardbyidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSearchDashboardByIdResponse](../../models/operations/getsearchdashboardbyidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update SearchDashboard

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateSearchDashboardById" method="patch" path="/search/dashboards/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.search.dashboards.update({
    id: "<id>",
    searchDashboard: {
      cacheTTLSeconds: 9322.04,
      category: "<value>",
      created: 6422.42,
      createdBy: "<value>",
      description: "likewise skean meh operating miserably",
      displayCreatedBy: "<value>",
      displayModifiedBy: "<value>",
      elements: [
        {
          description: "indeed unsteady ack",
          empty: true,
          group: "<value>",
          hidePanel: true,
          horizontalChart: true,
          id: "<id>",
          index: 2248.23,
          inputId: "<id>",
          search: {
            type: "values",
            values: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
          },
          title: "<value>",
          titleAction: {
            label: "<value>",
            openInNewTab: false,
            url: "https://dim-flint.org",
          },
          type: "input.dropdown",
          value: {
            "key": "<value>",
          },
          variant: "input",
        },
      ],
      groups: "<value>",
      id: "<id>",
      modified: 6530.86,
      modifiedBy: "<value>",
      name: "<value>",
      packId: "<id>",
      refreshRate: 2181.71,
      resolvedDatasetIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      schedule: {
        cronSchedule: "<value>",
        enabled: true,
        keepLastN: 5089.02,
        notifications: {
          disabled: false,
          items: [
            {
              id: "<id>",
              condition: "<value>",
              targets: [
                "<value 1>",
                "<value 2>",
              ],
              targetConfigs: [
                {
                  conf: {
                    subject: "<value>",
                    body: "<value>",
                    emailRecipient: {
                      to: "<value>",
                      cc: "<value>",
                      bcc: "<value>",
                    },
                  },
                  id: "<id>",
                },
              ],
              conf: {},
              metadata: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
            },
          ],
        },
        resumeMissed: true,
        resumeOnBoot: true,
        tz: "<value>",
      },
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
import { searchDashboardsUpdate } from "cribl-control-plane/funcs/searchDashboardsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await searchDashboardsUpdate(criblControlPlane, {
    id: "<id>",
    searchDashboard: {
      cacheTTLSeconds: 9322.04,
      category: "<value>",
      created: 6422.42,
      createdBy: "<value>",
      description: "likewise skean meh operating miserably",
      displayCreatedBy: "<value>",
      displayModifiedBy: "<value>",
      elements: [
        {
          description: "indeed unsteady ack",
          empty: true,
          group: "<value>",
          hidePanel: true,
          horizontalChart: true,
          id: "<id>",
          index: 2248.23,
          inputId: "<id>",
          search: {
            type: "values",
            values: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
          },
          title: "<value>",
          titleAction: {
            label: "<value>",
            openInNewTab: false,
            url: "https://dim-flint.org",
          },
          type: "input.dropdown",
          value: {
            "key": "<value>",
          },
          variant: "input",
        },
      ],
      groups: "<value>",
      id: "<id>",
      modified: 6530.86,
      modifiedBy: "<value>",
      name: "<value>",
      packId: "<id>",
      refreshRate: 2181.71,
      resolvedDatasetIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      schedule: {
        cronSchedule: "<value>",
        enabled: true,
        keepLastN: 5089.02,
        notifications: {
          disabled: false,
          items: [
            {
              id: "<id>",
              condition: "<value>",
              targets: [
                "<value 1>",
                "<value 2>",
              ],
              targetConfigs: [
                {
                  conf: {
                    subject: "<value>",
                    body: "<value>",
                    emailRecipient: {
                      to: "<value>",
                      cc: "<value>",
                      bcc: "<value>",
                    },
                  },
                  id: "<id>",
                },
              ],
              conf: {},
              metadata: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
            },
          ],
        },
        resumeMissed: true,
        resumeOnBoot: true,
        tz: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchDashboardsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSearchDashboardByIdRequest](../../models/operations/updatesearchdashboardbyidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateSearchDashboardByIdResponse](../../models/operations/updatesearchdashboardbyidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Delete SearchDashboard

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSearchDashboardById" method="delete" path="/search/dashboards/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.search.dashboards.delete({
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
import { searchDashboardsDelete } from "cribl-control-plane/funcs/searchDashboardsDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await searchDashboardsDelete(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchDashboardsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSearchDashboardByIdRequest](../../models/operations/deletesearchdashboardbyidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteSearchDashboardByIdResponse](../../models/operations/deletesearchdashboardbyidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
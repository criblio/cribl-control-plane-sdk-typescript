# PacksDashboards
(*packs.search.dashboards*)

## Overview

### Available Operations

* [list](#list) - Get a list of SearchDashboard objects within a Pack
* [create](#create) - Create SearchDashboard within a Pack
* [get](#get) - Get SearchDashboard by ID within a Pack
* [update](#update) - Update SearchDashboard within a Pack
* [delete](#delete) - Delete SearchDashboard within a Pack

## list

Get a list of SearchDashboard objects within a Pack

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSearchDashboardSearchByPack" method="get" path="/p/{pack}/search/dashboards" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.search.dashboards.list({
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
import { packsSearchDashboardsList } from "cribl-control-plane/funcs/packsSearchDashboardsList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSearchDashboardsList(criblControlPlane, {
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSearchDashboardsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSearchDashboardSearchByPackRequest](../../models/operations/getsearchdashboardsearchbypackrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSearchDashboardSearchByPackResponse](../../models/operations/getsearchdashboardsearchbypackresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create SearchDashboard within a Pack

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSearchDashboardSearchByPack" method="post" path="/p/{pack}/search/dashboards" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.search.dashboards.create({
    pack: "<value>",
    searchDashboard: {
      cacheTTLSeconds: 4841.75,
      category: "<value>",
      created: 5403.43,
      createdBy: "<value>",
      description: "overconfidently ick yowza so a while whoever zowie reckon",
      displayCreatedBy: "<value>",
      displayModifiedBy: "<value>",
      elements: [
        {
          config: {
            markdown: "<value>",
          },
          description: "overload concerning messy till turbulent for barring ha cruelty furthermore",
          empty: true,
          group: "<value>",
          hidePanel: false,
          horizontalChart: false,
          id: "<id>",
          index: 7446.02,
          title: "<value>",
          titleAction: {
            label: "<value>",
            openInNewTab: true,
            url: "https://unlined-tarragon.name/",
          },
          type: "markdown.copilot",
          variant: "markdown",
        },
      ],
      groups: "<value>",
      id: "<id>",
      modified: 9788.79,
      modifiedBy: "<value>",
      name: "<value>",
      packId: "<id>",
      refreshRate: 3834.66,
      resolvedDatasetIds: [
        "<value 1>",
      ],
      schedule: {
        cronSchedule: "<value>",
        enabled: true,
        keepLastN: 8531.9,
        notifications: {
          disabled: true,
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
import { packsSearchDashboardsCreate } from "cribl-control-plane/funcs/packsSearchDashboardsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSearchDashboardsCreate(criblControlPlane, {
    pack: "<value>",
    searchDashboard: {
      cacheTTLSeconds: 4841.75,
      category: "<value>",
      created: 5403.43,
      createdBy: "<value>",
      description: "overconfidently ick yowza so a while whoever zowie reckon",
      displayCreatedBy: "<value>",
      displayModifiedBy: "<value>",
      elements: [
        {
          config: {
            markdown: "<value>",
          },
          description: "overload concerning messy till turbulent for barring ha cruelty furthermore",
          empty: true,
          group: "<value>",
          hidePanel: false,
          horizontalChart: false,
          id: "<id>",
          index: 7446.02,
          title: "<value>",
          titleAction: {
            label: "<value>",
            openInNewTab: true,
            url: "https://unlined-tarragon.name/",
          },
          type: "markdown.copilot",
          variant: "markdown",
        },
      ],
      groups: "<value>",
      id: "<id>",
      modified: 9788.79,
      modifiedBy: "<value>",
      name: "<value>",
      packId: "<id>",
      refreshRate: 3834.66,
      resolvedDatasetIds: [
        "<value 1>",
      ],
      schedule: {
        cronSchedule: "<value>",
        enabled: true,
        keepLastN: 8531.9,
        notifications: {
          disabled: true,
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
    console.log("packsSearchDashboardsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSearchDashboardSearchByPackRequest](../../models/operations/createsearchdashboardsearchbypackrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSearchDashboardSearchByPackResponse](../../models/operations/createsearchdashboardsearchbypackresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get SearchDashboard by ID within a Pack

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSearchDashboardSearchByPackAndId" method="get" path="/p/{pack}/search/dashboards/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.search.dashboards.get({
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
import { packsSearchDashboardsGet } from "cribl-control-plane/funcs/packsSearchDashboardsGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSearchDashboardsGet(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSearchDashboardsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSearchDashboardSearchByPackAndIdRequest](../../models/operations/getsearchdashboardsearchbypackandidrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSearchDashboardSearchByPackAndIdResponse](../../models/operations/getsearchdashboardsearchbypackandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update SearchDashboard within a Pack

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateSearchDashboardSearchByPackAndId" method="patch" path="/p/{pack}/search/dashboards/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.search.dashboards.update({
    id: "<id>",
    pack: "<value>",
    searchDashboard: {
      cacheTTLSeconds: 393.4,
      category: "<value>",
      created: 6118.43,
      createdBy: "<value>",
      description: "than yawningly psst",
      displayCreatedBy: "<value>",
      displayModifiedBy: "<value>",
      elements: [],
      groups: "<value>",
      id: "<id>",
      modified: 7903.21,
      modifiedBy: "<value>",
      name: "<value>",
      packId: "<id>",
      refreshRate: 9468.28,
      resolvedDatasetIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      schedule: {
        cronSchedule: "<value>",
        enabled: true,
        keepLastN: 9815.47,
        notifications: {
          disabled: true,
          items: [
            {
              id: "<id>",
              condition: "<value>",
              targets: [
                "<value 1>",
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
import { packsSearchDashboardsUpdate } from "cribl-control-plane/funcs/packsSearchDashboardsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSearchDashboardsUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    searchDashboard: {
      cacheTTLSeconds: 393.4,
      category: "<value>",
      created: 6118.43,
      createdBy: "<value>",
      description: "than yawningly psst",
      displayCreatedBy: "<value>",
      displayModifiedBy: "<value>",
      elements: [],
      groups: "<value>",
      id: "<id>",
      modified: 7903.21,
      modifiedBy: "<value>",
      name: "<value>",
      packId: "<id>",
      refreshRate: 9468.28,
      resolvedDatasetIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      schedule: {
        cronSchedule: "<value>",
        enabled: true,
        keepLastN: 9815.47,
        notifications: {
          disabled: true,
          items: [
            {
              id: "<id>",
              condition: "<value>",
              targets: [
                "<value 1>",
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
    console.log("packsSearchDashboardsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSearchDashboardSearchByPackAndIdRequest](../../models/operations/updatesearchdashboardsearchbypackandidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateSearchDashboardSearchByPackAndIdResponse](../../models/operations/updatesearchdashboardsearchbypackandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Delete SearchDashboard within a Pack

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSearchDashboardSearchByPackAndId" method="delete" path="/p/{pack}/search/dashboards/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.search.dashboards.delete({
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
import { packsSearchDashboardsDelete } from "cribl-control-plane/funcs/packsSearchDashboardsDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSearchDashboardsDelete(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSearchDashboardsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSearchDashboardSearchByPackAndIdRequest](../../models/operations/deletesearchdashboardsearchbypackandidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteSearchDashboardSearchByPackAndIdResponse](../../models/operations/deletesearchdashboardsearchbypackandidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
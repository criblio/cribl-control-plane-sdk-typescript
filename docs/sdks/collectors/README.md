# Collectors

## Overview

Actions related to Collectors

### Available Operations

* [create](#create) - Create a Collector
* [list](#list) - List all Collectors
* [delete](#delete) - Delete a Collector
* [get](#get) - Get a Collector
* [update](#update) - Update a Collector

## create

Create a new Collector.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSavedJob" method="post" path="/lib/jobs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.collectors.create({
    criblPack: "<value>",
    savedJob: {
      id: "<id>",
      description: "pomelo outside offensively ew",
      type: "executor",
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      removeFields: [
        "<value 1>",
        "<value 2>",
      ],
      resumeOnBoot: false,
      environment: "<value>",
      schedule: {
        enabled: true,
        skippable: true,
        resumeMissed: false,
        cronSchedule: "*/5 * * * *",
        maxConcurrentRuns: 1,
        run: {
          type: "collection",
          rescheduleDroppedTasks: true,
          maxTaskReschedule: 1,
          logLevel: "info",
          jobTimeout: "0",
          mode: "list",
          timeRangeType: "relative",
          earliest: 432.8,
          latest: 2023.34,
          timestampTimezone: "<value>",
          timeWarning: {},
          expression: "true",
          minTaskSize: "1MB",
          maxTaskSize: "10MB",
        },
      },
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      workerAffinity: false,
      collector: {
        type: "<value>",
        conf: {
          type: "script",
          discoverScript: "<value>",
          collectScript: "<value>",
          shell: "/bin/bash",
          envVars: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
        destructive: false,
        encoding: "<value>",
      },
      input: {
        type: "collection",
        breakerRulesets: [
          "<value 1>",
        ],
        staleChannelFlushMs: 10000,
        sendToRoutes: true,
        preprocess: {
          disabled: true,
          command: "<value>",
          args: [
            "<value 1>",
          ],
        },
        throttleRatePerSec: "0",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        pipeline: "<value>",
        output: "<value>",
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
import { collectorsCreate } from "cribl-control-plane/funcs/collectorsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await collectorsCreate(criblControlPlane, {
    criblPack: "<value>",
    savedJob: {
      id: "<id>",
      description: "pomelo outside offensively ew",
      type: "executor",
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      removeFields: [
        "<value 1>",
        "<value 2>",
      ],
      resumeOnBoot: false,
      environment: "<value>",
      schedule: {
        enabled: true,
        skippable: true,
        resumeMissed: false,
        cronSchedule: "*/5 * * * *",
        maxConcurrentRuns: 1,
        run: {
          type: "collection",
          rescheduleDroppedTasks: true,
          maxTaskReschedule: 1,
          logLevel: "info",
          jobTimeout: "0",
          mode: "list",
          timeRangeType: "relative",
          earliest: 432.8,
          latest: 2023.34,
          timestampTimezone: "<value>",
          timeWarning: {},
          expression: "true",
          minTaskSize: "1MB",
          maxTaskSize: "10MB",
        },
      },
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      workerAffinity: false,
      collector: {
        type: "<value>",
        conf: {
          type: "script",
          discoverScript: "<value>",
          collectScript: "<value>",
          shell: "/bin/bash",
          envVars: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
        destructive: false,
        encoding: "<value>",
      },
      input: {
        type: "collection",
        breakerRulesets: [
          "<value 1>",
        ],
        staleChannelFlushMs: 10000,
        sendToRoutes: true,
        preprocess: {
          disabled: true,
          command: "<value>",
          args: [
            "<value 1>",
          ],
        },
        throttleRatePerSec: "0",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        pipeline: "<value>",
        output: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectorsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSavedJobRequest](../../models/operations/createsavedjobrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedSavedJob](../../models/countedsavedjob.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## list

Get a list of all Collectors.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSavedJob" method="get" path="/lib/jobs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.collectors.list({
    collectorType: "<value>",
    criblPack: "<value>",
    groupId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { collectorsList } from "cribl-control-plane/funcs/collectorsList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await collectorsList(criblControlPlane, {
    collectorType: "<value>",
    criblPack: "<value>",
    groupId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectorsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSavedJobRequest](../../models/operations/getsavedjobrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedSavedJob](../../models/countedsavedjob.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Delete the specified Collector.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSavedJobById" method="delete" path="/lib/jobs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.collectors.delete({
    id: "<id>",
    criblPack: "<value>",
    groupId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { collectorsDelete } from "cribl-control-plane/funcs/collectorsDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await collectorsDelete(criblControlPlane, {
    id: "<id>",
    criblPack: "<value>",
    groupId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectorsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSavedJobByIdRequest](../../models/operations/deletesavedjobbyidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedSavedJob](../../models/countedsavedjob.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get the specified Collector.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSavedJobById" method="get" path="/lib/jobs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.collectors.get({
    id: "<id>",
    criblPack: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { collectorsGet } from "cribl-control-plane/funcs/collectorsGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await collectorsGet(criblControlPlane, {
    id: "<id>",
    criblPack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectorsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSavedJobByIdRequest](../../models/operations/getsavedjobbyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedSavedJob](../../models/countedsavedjob.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the specified Collector.<br><br>Provide a complete representation of the Collector that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Collector.<br><br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Collector might not function as expected.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateSavedJobById" method="patch" path="/lib/jobs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.collectors.update({
    id: "<id>",
    criblPack: "<value>",
    savedJob: {
      id: "<id>",
      description: "unabashedly notwithstanding ugh digestive",
      type: "scheduledSearch",
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      removeFields: [
        "<value 1>",
        "<value 2>",
      ],
      resumeOnBoot: false,
      environment: "<value>",
      schedule: {
        enabled: true,
        skippable: true,
        resumeMissed: false,
        cronSchedule: "*/5 * * * *",
        maxConcurrentRuns: 1,
        run: {
          type: "collection",
          rescheduleDroppedTasks: true,
          maxTaskReschedule: 1,
          logLevel: "info",
          jobTimeout: "0",
          mode: "list",
          timeRangeType: "relative",
          earliest: 9142.96,
          latest: 521.08,
          timestampTimezone: "<value>",
          timeWarning: {},
          expression: "true",
          minTaskSize: "1MB",
          maxTaskSize: "10MB",
        },
      },
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      workerAffinity: false,
      collector: {
        type: "<value>",
        conf: {
          discovery: {
            discoverType: "none",
          },
          collectUrl: "https://shameful-vicinity.com/",
          collectMethod: "get",
          collectRequestParams: "<value>",
          collectBody: "<value>",
          collectRequestHeaders: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          authenticateCollect: false,
          authentication: "none",
          timeout: 30,
          rejectUnauthorized: false,
          defaultBreakers: "Cribl",
          safeHeaders: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          retryRules: {
            type: "backoff",
            interval: "<value>",
            limit: "<value>",
            multiplier: "<value>",
            codes: "<value>",
            enableHeader: "<value>",
          },
          type: "health_check",
        },
        destructive: false,
        encoding: "<value>",
      },
      input: {
        type: "collection",
        breakerRulesets: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        staleChannelFlushMs: 10000,
        sendToRoutes: true,
        preprocess: {
          disabled: true,
          command: "<value>",
          args: [
            "<value 1>",
            "<value 2>",
          ],
        },
        throttleRatePerSec: "0",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        pipeline: "<value>",
        output: "<value>",
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
import { collectorsUpdate } from "cribl-control-plane/funcs/collectorsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await collectorsUpdate(criblControlPlane, {
    id: "<id>",
    criblPack: "<value>",
    savedJob: {
      id: "<id>",
      description: "unabashedly notwithstanding ugh digestive",
      type: "scheduledSearch",
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      removeFields: [
        "<value 1>",
        "<value 2>",
      ],
      resumeOnBoot: false,
      environment: "<value>",
      schedule: {
        enabled: true,
        skippable: true,
        resumeMissed: false,
        cronSchedule: "*/5 * * * *",
        maxConcurrentRuns: 1,
        run: {
          type: "collection",
          rescheduleDroppedTasks: true,
          maxTaskReschedule: 1,
          logLevel: "info",
          jobTimeout: "0",
          mode: "list",
          timeRangeType: "relative",
          earliest: 9142.96,
          latest: 521.08,
          timestampTimezone: "<value>",
          timeWarning: {},
          expression: "true",
          minTaskSize: "1MB",
          maxTaskSize: "10MB",
        },
      },
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      workerAffinity: false,
      collector: {
        type: "<value>",
        conf: {
          discovery: {
            discoverType: "none",
          },
          collectUrl: "https://shameful-vicinity.com/",
          collectMethod: "get",
          collectRequestParams: "<value>",
          collectBody: "<value>",
          collectRequestHeaders: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
          authenticateCollect: false,
          authentication: "none",
          timeout: 30,
          rejectUnauthorized: false,
          defaultBreakers: "Cribl",
          safeHeaders: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          retryRules: {
            type: "backoff",
            interval: "<value>",
            limit: "<value>",
            multiplier: "<value>",
            codes: "<value>",
            enableHeader: "<value>",
          },
          type: "health_check",
        },
        destructive: false,
        encoding: "<value>",
      },
      input: {
        type: "collection",
        breakerRulesets: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        staleChannelFlushMs: 10000,
        sendToRoutes: true,
        preprocess: {
          disabled: true,
          command: "<value>",
          args: [
            "<value 1>",
            "<value 2>",
          ],
        },
        throttleRatePerSec: "0",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        pipeline: "<value>",
        output: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectorsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSavedJobByIdRequest](../../models/operations/updatesavedjobbyidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedSavedJob](../../models/countedsavedjob.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
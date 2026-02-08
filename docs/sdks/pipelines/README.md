# Pipelines

## Overview

Actions related to Pipelines

### Available Operations

* [list](#list) - List all Pipelines
* [create](#create) - Create a Pipeline
* [get](#get) - Get a Pipeline
* [update](#update) - Update a Pipeline
* [delete](#delete) - Delete a Pipeline

## list

Get a list of all Pipelines.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPipeline" method="get" path="/pipelines" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { pipelinesList } from "cribl-control-plane/funcs/pipelinesList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesList(criblControlPlane);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesList failed:", res.error);
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

**Promise\<[models.CountedPipeline](../../models/countedpipeline.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create a new Pipeline.

### Example Usage: PipelineExamplesAggregateMetrics

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesAggregateMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "aggregate-metrics-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that aggregates process metrics: CPU, memory, and bytes over time windows",
      streamtags: [],
      functions: [
        {
          filter: "(_metric == 'proc.cpu_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.cpu_perc'\")) || (_metric == 'proc.mem_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.mem_perc'\")) || (_metric == 'proc.bytes_in' || __criblMetrics[0].nameExpr.includes(\"'proc.bytes_in'\"))",
          id: "aggregate_metrics",
          description: "modulo tall usefully jump platter scrape whoever till shy miskey",
          disabled: true,
          final: false,
          conf: {
            passthrough: false,
            preserveGroupBys: false,
            sufficientStatsOnly: false,
            prefix: "<value>",
            timeWindow: "10s",
            aggregations: [
              {
                metricType: "gauge",
                agg: "avg(_value || proc.cpu_perc).as(proc.cpu_perc_avg)",
              },
              {
                metricType: "gauge",
                agg: "sum(_value || proc.mem_perc).as(proc.mem_perc_sum)",
              },
              {
                metricType: "counter",
                agg: "count(_value || proc.bytes_in).as(proc.bytes_in_count)",
              },
            ],
            groupbys: [
              "proc",
            ],
            flushEventLimit: 9795.75,
            flushMemLimit: "<value>",
            cumulative: false,
            shouldTreatDotsAsLiterals: true,
            add: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
            flushOnInputClose: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "aggregate-metrics-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that aggregates process metrics: CPU, memory, and bytes over time windows",
      streamtags: [],
      functions: [
        {
          filter: "(_metric == 'proc.cpu_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.cpu_perc'\")) || (_metric == 'proc.mem_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.mem_perc'\")) || (_metric == 'proc.bytes_in' || __criblMetrics[0].nameExpr.includes(\"'proc.bytes_in'\"))",
          id: "aggregate_metrics",
          description: "modulo tall usefully jump platter scrape whoever till shy miskey",
          disabled: true,
          final: false,
          conf: {
            passthrough: false,
            preserveGroupBys: false,
            sufficientStatsOnly: false,
            prefix: "<value>",
            timeWindow: "10s",
            aggregations: [
              {
                metricType: "gauge",
                agg: "avg(_value || proc.cpu_perc).as(proc.cpu_perc_avg)",
              },
              {
                metricType: "gauge",
                agg: "sum(_value || proc.mem_perc).as(proc.mem_perc_sum)",
              },
              {
                metricType: "counter",
                agg: "count(_value || proc.bytes_in).as(proc.bytes_in_count)",
              },
            ],
            groupbys: [
              "proc",
            ],
            flushEventLimit: 9795.75,
            flushMemLimit: "<value>",
            cumulative: false,
            shouldTreatDotsAsLiterals: true,
            add: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
            flushOnInputClose: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesAggregations

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesAggregations" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "aggregation-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that aggregates rejected bytes grouped by source address every 10 seconds",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "aggregation",
          description: "at mad back within towards who save before redraw tooth",
          disabled: false,
          final: false,
          conf: {
            passthrough: false,
            preserveGroupBys: false,
            sufficientStatsOnly: false,
            metricsMode: false,
            prefix: "<value>",
            timeWindow: "10s",
            aggregations: [
              "sum(bytes).where(action==\"REJECT\").as(TotalBytes)",
            ],
            groupbys: [
              "srcaddr",
            ],
            flushEventLimit: 5847.83,
            flushMemLimit: "<value>",
            cumulative: false,
            searchAggMode: "<value>",
            add: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
            shouldTreatDotsAsLiterals: false,
            flushOnInputClose: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "aggregation-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that aggregates rejected bytes grouped by source address every 10 seconds",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "aggregation",
          description: "at mad back within towards who save before redraw tooth",
          disabled: false,
          final: false,
          conf: {
            passthrough: false,
            preserveGroupBys: false,
            sufficientStatsOnly: false,
            metricsMode: false,
            prefix: "<value>",
            timeWindow: "10s",
            aggregations: [
              "sum(bytes).where(action==\"REJECT\").as(TotalBytes)",
            ],
            groupbys: [
              "srcaddr",
            ],
            flushEventLimit: 5847.83,
            flushMemLimit: "<value>",
            cumulative: false,
            searchAggMode: "<value>",
            add: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
            shouldTreatDotsAsLiterals: false,
            flushOnInputClose: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesAutoTimestamp

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesAutoTimestamp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "auto-timestamp-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts timestamps from event data using auto timestamp function",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "auto_timestamp",
          description: "drive pro shore pfft",
          disabled: true,
          final: false,
          conf: {
            srcField: "_raw",
            dstField: "_time",
            defaultTimezone: "local",
            timeExpression: "time.getTime() / 1000",
            offset: 0,
            maxLen: 150,
            defaultTime: "now",
            latestDateAllowed: "+1week",
            spacer: "<value>",
            earliestDateAllowed: "-420weeks",
            timestamps: [
              {
                regex: "/(\\d{1,2}\\/\\d{2}\\/\\d{4}\\s\\d{1,2}:\\d{2}:\\d{2}\\s\\w{2})/",
                strptime: "%Y-%m-%d %H:%M:%S",
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "auto-timestamp-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts timestamps from event data using auto timestamp function",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "auto_timestamp",
          description: "drive pro shore pfft",
          disabled: true,
          final: false,
          conf: {
            srcField: "_raw",
            dstField: "_time",
            defaultTimezone: "local",
            timeExpression: "time.getTime() / 1000",
            offset: 0,
            maxLen: 150,
            defaultTime: "now",
            latestDateAllowed: "+1week",
            spacer: "<value>",
            earliestDateAllowed: "-420weeks",
            timestamps: [
              {
                regex: "/(\\d{1,2}\\/\\d{2}\\/\\d{4}\\s\\d{1,2}:\\d{2}:\\d{2}\\s\\w{2})/",
                strptime: "%Y-%m-%d %H:%M:%S",
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesCEFSerializer

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesCEFSerializer" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "cef-serializer-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that formats events in CEF format with custom header and extension fields",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "cef",
          description: "upright founder when yet",
          disabled: false,
          final: true,
          conf: {
            outputField: "_raw",
            header: [
              {
                value: "'CEF:0'",
              },
              {
                value: "'Cribl'",
              },
              {
                value: "'Cribl'",
              },
              {
                value: "C.version",
              },
              {
                value: "420",
              },
              {
                value: "'Cribl Event'",
              },
              {
                value: "6",
              },
            ],
            extension: [
              {
                name: "c6a1Label",
                value: "'Colorado_Ext_Bldg7'",
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "cef-serializer-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that formats events in CEF format with custom header and extension fields",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "cef",
          description: "upright founder when yet",
          disabled: false,
          final: true,
          conf: {
            outputField: "_raw",
            header: [
              {
                value: "'CEF:0'",
              },
              {
                value: "'Cribl'",
              },
              {
                value: "'Cribl'",
              },
              {
                value: "C.version",
              },
              {
                value: "420",
              },
              {
                value: "'Cribl Event'",
              },
              {
                value: "6",
              },
            ],
            extension: [
              {
                name: "c6a1Label",
                value: "'Colorado_Ext_Bldg7'",
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesChain

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesChain" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "chain-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that chains to another pipeline for sequential data processing",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "chain",
          description: "hm loyally whenever selfish whoever",
          disabled: false,
          final: false,
          conf: {
            processor: "prometheus_metrics",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "chain-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that chains to another pipeline for sequential data processing",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "chain",
          description: "hm loyally whenever selfish whoever",
          disabled: false,
          final: false,
          conf: {
            processor: "prometheus_metrics",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesClone

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesClone" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "clone-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that creates cloned events with additional fields for comparison or routing",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "clone",
          description: "confiscate positively until plus bar wherever",
          disabled: false,
          final: false,
          conf: {
            clones: [
              {
                "env": "staging",
              },
              {
                "index": "clones",
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "clone-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that creates cloned events with additional fields for comparison or routing",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "clone",
          description: "confiscate positively until plus bar wherever",
          disabled: false,
          final: false,
          conf: {
            clones: [
              {
                "env": "staging",
              },
              {
                "index": "clones",
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesComment

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesComment" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "comment-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline with comment function for documentation",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "comment",
          description: "magnificent ew scram tight",
          disabled: true,
          final: false,
          conf: {
            comment: "This function processes security events and enriches them with DNS lookups",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "comment-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline with comment function for documentation",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "comment",
          description: "magnificent ew scram tight",
          disabled: true,
          final: false,
          conf: {
            comment: "This function processes security events and enriches them with DNS lookups",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDNSLookup

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesDNSLookup" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "dns-lookup-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that performs DNS lookups to resolve hostnames and IP addresses",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "dns_lookup",
          description: "aha entice artistic meh oof",
          disabled: false,
          final: false,
          conf: {
            dnsLookupFields: [
              {
                inFieldName: "hostname",
                resourceRecordType: "A",
                outFieldName: "hostname_ip",
              },
            ],
            reverseLookupFields: [
              {
                inFieldName: "src_ip",
                outFieldName: "src_hostname",
              },
            ],
            dnsServers: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            cacheTTL: 30,
            maxCacheSize: 5000,
            useResolvConf: false,
            lookupFallback: false,
            domainOverrides: [
              "<value 1>",
            ],
            lookupFailLogLevel: "error",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "dns-lookup-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that performs DNS lookups to resolve hostnames and IP addresses",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "dns_lookup",
          description: "aha entice artistic meh oof",
          disabled: false,
          final: false,
          conf: {
            dnsLookupFields: [
              {
                inFieldName: "hostname",
                resourceRecordType: "A",
                outFieldName: "hostname_ip",
              },
            ],
            reverseLookupFields: [
              {
                inFieldName: "src_ip",
                outFieldName: "src_hostname",
              },
            ],
            dnsServers: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            cacheTTL: 30,
            maxCacheSize: 5000,
            useResolvConf: false,
            lookupFallback: false,
            domainOverrides: [
              "<value 1>",
            ],
            lookupFailLogLevel: "error",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDrop

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesDrop" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "drop-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that drops events containing success messages",
      streamtags: [],
      functions: [
        {
          filter: "_raw.search(/success/i)>=0",
          id: "drop",
          description: "mid mockingly gah electronics sate",
          disabled: false,
          final: true,
          conf: {},
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "drop-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that drops events containing success messages",
      streamtags: [],
      functions: [
        {
          filter: "_raw.search(/success/i)>=0",
          id: "drop",
          description: "mid mockingly gah electronics sate",
          disabled: false,
          final: true,
          conf: {},
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDropDimensions

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesDropDimensions" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "drop-dimensions-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that drops specified dimensions from metrics to reduce cardinality",
      streamtags: [],
      functions: [
        {
          filter: "(_metric == 'proc.cpu_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.cpu_perc'\")) && (__criblMetrics[0].dims.includes(\"proc\"))",
          id: "drop_dimensions",
          description: "sympathetically perfectly quarrelsomely excluding",
          disabled: true,
          final: false,
          conf: {
            timeWindow: "10s",
            dropDimensions: [
              "proc",
              "pie",
              "unit",
            ],
            flushOnInputClose: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "drop-dimensions-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that drops specified dimensions from metrics to reduce cardinality",
      streamtags: [],
      functions: [
        {
          filter: "(_metric == 'proc.cpu_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.cpu_perc'\")) && (__criblMetrics[0].dims.includes(\"proc\"))",
          id: "drop_dimensions",
          description: "sympathetically perfectly quarrelsomely excluding",
          disabled: true,
          final: false,
          conf: {
            timeWindow: "10s",
            dropDimensions: [
              "proc",
              "pie",
              "unit",
            ],
            flushOnInputClose: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDynamicSampling

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesDynamicSampling" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "dynamic-sampling-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that dynamically samples events based on volume using square root mode",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "dynamic_sampling",
          description: "likewise apropos by whoever unkempt ugh wherever",
          disabled: false,
          final: true,
          conf: {
            mode: "sqrt",
            keyExpr: "`${domain}:${httpCode}`",
            samplePeriod: 20,
            minEvents: 3,
            maxSampleRate: 3,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "dynamic-sampling-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that dynamically samples events based on volume using square root mode",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "dynamic_sampling",
          description: "likewise apropos by whoever unkempt ugh wherever",
          disabled: false,
          final: true,
          conf: {
            mode: "sqrt",
            keyExpr: "`${domain}:${httpCode}`",
            samplePeriod: 20,
            minEvents: 3,
            maxSampleRate: 3,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEmpty

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesEmpty" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "empty-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "",
      streamtags: [],
      functions: [],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "empty-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "",
      streamtags: [],
      functions: [],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEval

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesEval" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "eval-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that evaluates JavaScript expressions to add, modify, and remove fields",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "eval",
          description: "thread circa gah beside attest misappropriate humiliating",
          disabled: false,
          final: true,
          conf: {
            add: [
              {
                name: "action",
                value: "login == 'error' ? 'blocked' : action",
                disabled: false,
              },
              {
                name: "myTags",
                value: "login == 'error' ? [...myTags, 'error'] : myTags",
                disabled: false,
              },
            ],
            keep: [
              "host",
              "source",
              "action",
              "myTags",
            ],
            remove: [
              "identification",
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "eval-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that evaluates JavaScript expressions to add, modify, and remove fields",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "eval",
          description: "thread circa gah beside attest misappropriate humiliating",
          disabled: false,
          final: true,
          conf: {
            add: [
              {
                name: "action",
                value: "login == 'error' ? 'blocked' : action",
                disabled: false,
              },
              {
                name: "myTags",
                value: "login == 'error' ? [...myTags, 'error'] : myTags",
                disabled: false,
              },
            ],
            keep: [
              "host",
              "source",
              "action",
              "myTags",
            ],
            remove: [
              "identification",
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEventBreaker

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesEventBreaker" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "event-breaker-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that breaks large event streams into discrete events using regex",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "event_breaker",
          description: "upbeat powerfully camouflage upbeat spirit violently premier tricky bowler",
          disabled: true,
          final: true,
          conf: {
            existingOrNew: "new",
            shouldMarkCriblBreaker: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "event-breaker-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that breaks large event streams into discrete events using regex",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "event_breaker",
          description: "upbeat powerfully camouflage upbeat spirit violently premier tricky bowler",
          disabled: true,
          final: true,
          conf: {
            existingOrNew: "new",
            shouldMarkCriblBreaker: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesFlatten

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesFlatten" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "flatten-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that flattens nested JSON structures into top-level fields",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "flatten",
          description: "zebra busily woot alongside fess",
          disabled: false,
          final: false,
          conf: {
            fields: [],
            prefix: "",
            depth: 5,
            delimiter: "_",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "flatten-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that flattens nested JSON structures into top-level fields",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "flatten",
          description: "zebra busily woot alongside fess",
          disabled: false,
          final: false,
          conf: {
            fields: [],
            prefix: "",
            depth: 5,
            delimiter: "_",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesFoldKeys

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesFoldKeys" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "fold-keys-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that transforms flat field names with separators into nested structures",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "foldkeys",
          description: "rudely worthwhile cross everlasting ghost freezing majority duffel loftily abaft",
          disabled: false,
          final: true,
          conf: {
            deleteOriginal: true,
            separator: "_",
            selectionRegExp: "^data",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "fold-keys-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that transforms flat field names with separators into nested structures",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "foldkeys",
          description: "rudely worthwhile cross everlasting ghost freezing majority duffel loftily abaft",
          disabled: false,
          final: true,
          conf: {
            deleteOriginal: true,
            separator: "_",
            selectionRegExp: "^data",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGeoIP

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesGeoIP" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "geoip-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that enriches events with geolocation data from IP addresses",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "geoip",
          description: "decongestant substantiate soon er finally pfft override knottily",
          disabled: true,
          final: true,
          conf: {
            file: "GeoLite2-City.mmdb",
            inField: "ip",
            outField: "geoip",
            additionalFields: [
              {
                extraInField: "src_ip",
                extraOutField: "src_geoip",
              },
            ],
            outFieldMappings: {},
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "geoip-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that enriches events with geolocation data from IP addresses",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "geoip",
          description: "decongestant substantiate soon er finally pfft override knottily",
          disabled: true,
          final: true,
          conf: {
            file: "GeoLite2-City.mmdb",
            inField: "ip",
            outField: "geoip",
            additionalFields: [
              {
                extraInField: "src_ip",
                extraOutField: "src_geoip",
              },
            ],
            outFieldMappings: {},
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGrok

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesGrok" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "grok-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts structured fields from log data using Grok patterns",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "grok",
          description: "hopelessly viability morning monthly decisive onto strange",
          disabled: true,
          final: false,
          conf: {
            pattern: "%{TIMESTAMP_ISO8601:event_time} %{LOGLEVEL:log_level} %{GREEDYDATA:log_message}",
            patternList: [],
            source: "_raw",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "grok-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts structured fields from log data using Grok patterns",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "grok",
          description: "hopelessly viability morning monthly decisive onto strange",
          disabled: true,
          final: false,
          conf: {
            pattern: "%{TIMESTAMP_ISO8601:event_time} %{LOGLEVEL:log_level} %{GREEDYDATA:log_message}",
            patternList: [],
            source: "_raw",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGuard

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesGuard" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "guard-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that scans for sensitive data and applies mitigation expressions",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "sensitive_data_scanner",
          description: "judgementally while why",
          disabled: true,
          final: false,
          conf: {
            rules: [
              {
                rulesetId: "Finance_Global",
                replaceExpr: "'REDACTED'",
                disabled: false,
              },
            ],
            fields: [
              "_raw",
            ],
            excludeFields: [],
            flags: [
              {
                name: "_sensitive",
                value: "true",
              },
            ],
            includeDetectedRules: true,
            backgroundDetection: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "guard-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that scans for sensitive data and applies mitigation expressions",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "sensitive_data_scanner",
          description: "judgementally while why",
          disabled: true,
          final: false,
          conf: {
            rules: [
              {
                rulesetId: "Finance_Global",
                replaceExpr: "'REDACTED'",
                disabled: false,
              },
            ],
            fields: [
              "_raw",
            ],
            excludeFields: [],
            flags: [
              {
                name: "_sensitive",
                value: "true",
              },
            ],
            includeDetectedRules: true,
            backgroundDetection: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesJSONUnroll

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesJSONUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "json-unroll-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that unrolls JSON arrays into individual events while retaining parent fields",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "json_unroll",
          description: "unbearably boo regarding",
          disabled: false,
          final: false,
          conf: {
            path: "allCars",
            name: "cars",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "json-unroll-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that unrolls JSON arrays into individual events while retaining parent fields",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "json_unroll",
          description: "unbearably boo regarding",
          disabled: false,
          final: false,
          conf: {
            path: "allCars",
            name: "cars",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesLookup

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesLookup" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "lookup-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that enriches events with location data from IP address lookups",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "lookup",
          description: "ouch who phooey bookcase elegantly why now alive",
          disabled: true,
          final: false,
          conf: {
            file: "ip_locations.csv",
            dbLookup: false,
            matchMode: "exact",
            matchType: "<value>",
            reloadPeriodSec: -1,
            inFields: [
              {
                eventField: "destination_ip",
                lookupField: "ip",
              },
            ],
            outFields: [
              {
                lookupField: "location",
                eventField: "location",
                defaultValue: "Unknown",
              },
            ],
            addToEvent: false,
            ignoreCase: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "lookup-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that enriches events with location data from IP address lookups",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "lookup",
          description: "ouch who phooey bookcase elegantly why now alive",
          disabled: true,
          final: false,
          conf: {
            file: "ip_locations.csv",
            dbLookup: false,
            matchMode: "exact",
            matchType: "<value>",
            reloadPeriodSec: -1,
            inFields: [
              {
                eventField: "destination_ip",
                lookupField: "ip",
              },
            ],
            outFields: [
              {
                lookupField: "location",
                eventField: "location",
                defaultValue: "Unknown",
              },
            ],
            addToEvent: false,
            ignoreCase: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesMask

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesMask" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "mask-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that masks Social Security numbers and other sensitive data",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "mask",
          description: "from handle for",
          disabled: true,
          final: false,
          conf: {
            rules: [
              {
                matchRegex: "/(social=)(\\d+)/",
                replaceExpr: "`${g1}${C.Mask.md5(g2)}`",
                disabled: false,
              },
            ],
            fields: [
              "_raw",
            ],
            depth: 5,
            flags: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "mask-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that masks Social Security numbers and other sensitive data",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "mask",
          description: "from handle for",
          disabled: true,
          final: false,
          conf: {
            rules: [
              {
                matchRegex: "/(social=)(\\d+)/",
                replaceExpr: "`${g1}${C.Mask.md5(g2)}`",
                disabled: false,
              },
            ],
            fields: [
              "_raw",
            ],
            depth: 5,
            flags: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesNumerify

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesNumerify" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "numerify-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that converts string numbers to numeric type for mathematical operations",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "numerify",
          description: "relieve whose fixed provided mechanically pfft powerfully embarrassment",
          disabled: false,
          final: true,
          conf: {
            depth: 5,
            ignoreFields: [],
            filterExpr: "",
            format: "none",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "numerify-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that converts string numbers to numeric type for mathematical operations",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "numerify",
          description: "relieve whose fixed provided mechanically pfft powerfully embarrassment",
          disabled: false,
          final: true,
          conf: {
            depth: 5,
            ignoreFields: [],
            filterExpr: "",
            format: "none",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPLogs

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesOTLPLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "otlp-logs-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that normalizes and batches OTLP log events from OpenTelemetry sources",
      streamtags: [],
      functions: [
        {
          filter: "__inputId=='open_telemetry:open_telemetry'",
          id: "otlp_logs",
          description: "stuff catalyst close mortally down",
          disabled: true,
          final: false,
          conf: {
            dropNonLogEvents: false,
            batchOTLPLogs: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "otlp-logs-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that normalizes and batches OTLP log events from OpenTelemetry sources",
      streamtags: [],
      functions: [
        {
          filter: "__inputId=='open_telemetry:open_telemetry'",
          id: "otlp_logs",
          description: "stuff catalyst close mortally down",
          disabled: true,
          final: false,
          conf: {
            dropNonLogEvents: false,
            batchOTLPLogs: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPMetrics

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesOTLPMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "otlp-metrics-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that converts dimensional metrics to OTLP format and batches them by resource attributes",
      streamtags: [],
      functions: [
        {
          filter: "__inputId=='prometheus_rw:prom_rw_in'",
          id: "otlp_metrics",
          description: "interestingly towards bowler now keenly",
          disabled: false,
          final: false,
          conf: {
            resourceAttributePrefixes: [
              "service",
              "system",
              "telemetry",
              "k8s",
              "cloud",
              "host",
              "process",
            ],
            dropNonMetricEvents: false,
            otlpVersion: "0.10.0",
            batchOTLPMetrics: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "otlp-metrics-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that converts dimensional metrics to OTLP format and batches them by resource attributes",
      streamtags: [],
      functions: [
        {
          filter: "__inputId=='prometheus_rw:prom_rw_in'",
          id: "otlp_metrics",
          description: "interestingly towards bowler now keenly",
          disabled: false,
          final: false,
          conf: {
            resourceAttributePrefixes: [
              "service",
              "system",
              "telemetry",
              "k8s",
              "cloud",
              "host",
              "process",
            ],
            dropNonMetricEvents: false,
            otlpVersion: "0.10.0",
            batchOTLPMetrics: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPTraces

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesOTLPTraces" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "otlp-traces-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that normalizes and batches OTLP trace events from OpenTelemetry sources",
      streamtags: [],
      functions: [
        {
          filter: "__inputId=='open_telemetry:open_telemetry'",
          id: "otlp_traces",
          description: "rectangular lest great hollow",
          disabled: false,
          final: true,
          conf: {
            dropNonTraceEvents: false,
            otlpVersion: "0.10.0",
            batchOTLPTraces: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "otlp-traces-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that normalizes and batches OTLP trace events from OpenTelemetry sources",
      streamtags: [],
      functions: [
        {
          filter: "__inputId=='open_telemetry:open_telemetry'",
          id: "otlp_traces",
          description: "rectangular lest great hollow",
          disabled: false,
          final: true,
          conf: {
            dropNonTraceEvents: false,
            otlpVersion: "0.10.0",
            batchOTLPTraces: true,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesParser

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesParser" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "parser-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts fields from key-value pair formatted data",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "serde",
          description: "pish rudely colorfully around overdue ouch uh-huh gadzooks motor if",
          disabled: true,
          final: false,
          conf: {
            mode: "extract",
            type: "kvp",
            delimChar: "<value>",
            quoteChar: "<value>",
            escapeChar: "<value>",
            nullValue: "<value>",
            srcField: "_raw",
            dstField: "<value>",
            cleanFields: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "parser-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts fields from key-value pair formatted data",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "serde",
          description: "pish rudely colorfully around overdue ouch uh-huh gadzooks motor if",
          disabled: true,
          final: false,
          conf: {
            mode: "extract",
            type: "kvp",
            delimChar: "<value>",
            quoteChar: "<value>",
            escapeChar: "<value>",
            nullValue: "<value>",
            srcField: "_raw",
            dstField: "<value>",
            cleanFields: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesPublishMetrics

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesPublishMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "publish-metrics-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts metrics from events and formats them for metrics aggregation platforms",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "publish_metrics",
          description: "transcend yahoo creative till thoughtfully upside-down cap amongst",
          disabled: true,
          final: true,
          conf: {
            fields: [
              {
                inFieldName: "bytes",
                outFieldExpr: "'metric_name.bytes'",
                metricType: "gauge",
              },
              {
                inFieldName: "packets",
                outFieldExpr: "'metric_name.packets'",
                metricType: "gauge",
              },
            ],
            overwrite: false,
            dimensions: [
              "action",
              "interface_id",
              "dstaddr",
            ],
            removeMetrics: [],
            removeDimensions: [],
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "publish-metrics-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts metrics from events and formats them for metrics aggregation platforms",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "publish_metrics",
          description: "transcend yahoo creative till thoughtfully upside-down cap amongst",
          disabled: true,
          final: true,
          conf: {
            fields: [
              {
                inFieldName: "bytes",
                outFieldExpr: "'metric_name.bytes'",
                metricType: "gauge",
              },
              {
                inFieldName: "packets",
                outFieldExpr: "'metric_name.packets'",
                metricType: "gauge",
              },
            ],
            overwrite: false,
            dimensions: [
              "action",
              "interface_id",
              "dstaddr",
            ],
            removeMetrics: [],
            removeDimensions: [],
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRedis

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesRedis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "redis-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that retrieves values from Redis using GET command",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "redis",
          description: "gut valiantly step-mother political outrun likewise",
          disabled: false,
          final: false,
          conf: {
            commands: [
              {
                outField: "cached_value",
                command: "get",
                keyExpr: "'user_session'",
                argsExpr: "",
              },
            ],
            deploymentType: "standalone",
            authType: "none",
            maxBlockSecs: 60,
            enableClientSideCaching: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "redis-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that retrieves values from Redis using GET command",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "redis",
          description: "gut valiantly step-mother political outrun likewise",
          disabled: false,
          final: false,
          conf: {
            commands: [
              {
                outField: "cached_value",
                command: "get",
                keyExpr: "'user_session'",
                argsExpr: "",
              },
            ],
            deploymentType: "standalone",
            authType: "none",
            maxBlockSecs: 60,
            enableClientSideCaching: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRegexExtract

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesRegexExtract" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "regex-extract-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts structured fields from log data using regex patterns with named capture groups",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "regex_extract",
          description: "against next mmm",
          disabled: false,
          final: true,
          conf: {
            regex: "/metric1=(?<metric1>\\d+)/",
            regexList: [
              {
                regex: "<value>",
              },
            ],
            source: "_raw",
            iterations: 100,
            fieldNameExpression: "<value>",
            overwrite: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "regex-extract-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that extracts structured fields from log data using regex patterns with named capture groups",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "regex_extract",
          description: "against next mmm",
          disabled: false,
          final: true,
          conf: {
            regex: "/metric1=(?<metric1>\\d+)/",
            regexList: [
              {
                regex: "<value>",
              },
            ],
            source: "_raw",
            iterations: 100,
            fieldNameExpression: "<value>",
            overwrite: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRegexFilter

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesRegexFilter" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "regex-filter-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that filters out events matching specific regex patterns",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "regex_filter",
          description: "extroverted certify fatally flawless",
          disabled: false,
          final: true,
          conf: {
            regex: "/Opera/",
            regexList: [
              {
                regex: "<value>",
              },
            ],
            field: "_raw",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "regex-filter-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that filters out events matching specific regex patterns",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "regex_filter",
          description: "extroverted certify fatally flawless",
          disabled: false,
          final: true,
          conf: {
            regex: "/Opera/",
            regexList: [
              {
                regex: "<value>",
              },
            ],
            field: "_raw",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRename

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesRename" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "rename-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that renames fields using key-value pairs and expressions",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "rename",
          description: "pish poorly but ham",
          disabled: true,
          final: true,
          conf: {
            baseFields: [],
            rename: [
              {
                currentName: "level",
                newName: "LEVEL",
              },
            ],
            renameExpr: "name.startsWith('out') ? name.toUpperCase() : name",
            wildcardDepth: 5,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "rename-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that renames fields using key-value pairs and expressions",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "rename",
          description: "pish poorly but ham",
          disabled: true,
          final: true,
          conf: {
            baseFields: [],
            rename: [
              {
                currentName: "level",
                newName: "LEVEL",
              },
            ],
            renameExpr: "name.startsWith('out') ? name.toUpperCase() : name",
            wildcardDepth: 5,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRollupMetrics

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesRollupMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "rollup-metrics-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that consolidates high-frequency metrics into manageable time windows",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "rollup_metrics",
          description: "neatly how apostrophize",
          disabled: true,
          final: true,
          conf: {
            dimensions: [
              "*",
            ],
            timeWindow: "30s",
            gaugeRollup: "last",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "rollup-metrics-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that consolidates high-frequency metrics into manageable time windows",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "rollup_metrics",
          description: "neatly how apostrophize",
          disabled: true,
          final: true,
          conf: {
            dimensions: [
              "*",
            ],
            timeWindow: "30s",
            gaugeRollup: "last",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSNMPTrapSerialize

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesSNMPTrapSerialize" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "snmp-trap-serialize-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that serializes events into SNMP trap format for SNMP trap destinations",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "snmp_trap_serialize",
          description: "steel ack colorfully vivid chilly cook suspiciously rich equal",
          disabled: true,
          final: true,
          conf: {
            strict: true,
            dropFailedEvents: true,
            v3User: {
              name: "<value>",
              authProtocol: "sha256",
              authKey: "<value>",
              privProtocol: "<value>",
            },
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "snmp-trap-serialize-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that serializes events into SNMP trap format for SNMP trap destinations",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "snmp_trap_serialize",
          description: "steel ack colorfully vivid chilly cook suspiciously rich equal",
          disabled: true,
          final: true,
          conf: {
            strict: true,
            dropFailedEvents: true,
            v3User: {
              name: "<value>",
              authProtocol: "sha256",
              authKey: "<value>",
              privProtocol: "<value>",
            },
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSampling

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesSampling" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "sampling-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that samples events at specified rates based on filter criteria",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "sampling",
          description: "amongst rewrite into damp late",
          disabled: false,
          final: true,
          conf: {
            rules: [
              {
                filter: "__status == 200",
                rate: 5,
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "sampling-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that samples events at specified rates based on filter criteria",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "sampling",
          description: "amongst rewrite into damp late",
          disabled: false,
          final: true,
          conf: {
            rules: [
              {
                filter: "__status == 200",
                rate: 5,
              },
            ],
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSerialize

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesSerialize" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "serialize-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that serializes event fields into JSON format",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "serialize",
          description: "peony masterpiece gee rigidly muted now entwine shrilly ouch",
          disabled: true,
          final: true,
          conf: {
            type: "json",
            delimChar: "<value>",
            quoteChar: "<value>",
            escapeChar: "<value>",
            nullValue: "<value>",
            fields: [
              "city",
              "state",
            ],
            srcField: "",
            dstField: "_raw",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "serialize-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that serializes event fields into JSON format",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "serialize",
          description: "peony masterpiece gee rigidly muted now entwine shrilly ouch",
          disabled: true,
          final: true,
          conf: {
            type: "json",
            delimChar: "<value>",
            quoteChar: "<value>",
            escapeChar: "<value>",
            nullValue: "<value>",
            fields: [
              "city",
              "state",
            ],
            srcField: "",
            dstField: "_raw",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSuppress

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesSuppress" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "suppress-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that suppresses duplicate events based on a key expression",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "suppress",
          description: "clean nucleotidase spectacles plus whenever blah whereas reiterate optimistically",
          disabled: false,
          final: false,
          conf: {
            keyExpr: "`${ip}:${port}`",
            allow: 1,
            suppressPeriodSec: 30,
            dropEventsMode: true,
            maxCacheSize: 50000,
            cacheIdleTimeoutPeriods: 2,
            numEventsIdleTimeoutTrigger: 10000,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "suppress-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that suppresses duplicate events based on a key expression",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "suppress",
          description: "clean nucleotidase spectacles plus whenever blah whereas reiterate optimistically",
          disabled: false,
          final: false,
          conf: {
            keyExpr: "`${ip}:${port}`",
            allow: 1,
            suppressPeriodSec: 30,
            dropEventsMode: true,
            maxCacheSize: 50000,
            cacheIdleTimeoutPeriods: 2,
            numEventsIdleTimeoutTrigger: 10000,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesTee

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesTee" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "tee-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that sends events to a command via stdin for debugging purposes",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "tee",
          description: "aw mid taxicab dandelion ah mundane hmph whispered",
          disabled: false,
          final: true,
          conf: {
            command: "tee",
            args: [
              "/opt/cribl/foo.log",
            ],
            restartOnExit: true,
            env: {

            },
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "tee-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that sends events to a command via stdin for debugging purposes",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "tee",
          description: "aw mid taxicab dandelion ah mundane hmph whispered",
          disabled: false,
          final: true,
          conf: {
            command: "tee",
            args: [
              "/opt/cribl/foo.log",
            ],
            restartOnExit: true,
            env: {
  
            },
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesUnroll

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "unroll-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that unrolls array fields into separate events",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "unroll",
          description: "second possible above tag what",
          disabled: true,
          final: true,
          conf: {
            srcExpr: "_raw.split(/\\n/)",
            dstField: "_raw",
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "unroll-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that unrolls array fields into separate events",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "unroll",
          description: "second possible above tag what",
          disabled: true,
          final: true,
          conf: {
            srcExpr: "_raw.split(/\\n/)",
            dstField: "_raw",
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesXMLUnroll

<!-- UsageSnippet language="typescript" operationID="createPipeline" method="post" path="/pipelines" example="PipelineExamplesXMLUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.create({
    id: "xml-unroll-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that unrolls XML elements into separate events",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "xml_unroll",
          description: "within limply describe eek questioningly anesthetize who wear",
          disabled: false,
          final: false,
          conf: {
            unroll: "^Parent\\.Child$",
            inherit: "^Parent\\.(myID|branchLocation)$",
            unrollIdxField: "unroll_idx",
            pretty: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {

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
import { pipelinesCreate } from "cribl-control-plane/funcs/pipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesCreate(criblControlPlane, {
    id: "xml-unroll-pipeline",
    conf: {
      asyncFuncTimeout: 1000,
      output: "default",
      description: "Pipeline that unrolls XML elements into separate events",
      streamtags: [],
      functions: [
        {
          filter: "true",
          id: "xml_unroll",
          description: "within limply describe eek questioningly anesthetize who wear",
          disabled: false,
          final: false,
          conf: {
            unroll: "^Parent\\.Child$",
            inherit: "^Parent\\.(myID|branchLocation)$",
            unrollIdxField: "unroll_idx",
            pretty: false,
          },
          groupId: "<id>",
        },
      ],
      groups: {
  
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PipelineInput](../../models/pipelineinput.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedPipeline](../../models/countedpipeline.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get the specified Pipeline.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPipelineById" method="get" path="/pipelines/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.get({
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
import { pipelinesGet } from "cribl-control-plane/funcs/pipelinesGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesGet(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPipelineByIdRequest](../../models/operations/getpipelinebyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedPipeline](../../models/countedpipeline.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the specified Pipeline.</br></br>Provide a complete representation of the Pipeline that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Pipeline.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Pipeline might not function as expected.

### Example Usage: PipelineExamplesAggregateMetrics

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesAggregateMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "aggregate-metrics-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that aggregates process metrics: CPU, memory, and bytes over time windows",
        streamtags: [],
        functions: [
          {
            filter: "(_metric == 'proc.cpu_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.cpu_perc'\")) || (_metric == 'proc.mem_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.mem_perc'\")) || (_metric == 'proc.bytes_in' || __criblMetrics[0].nameExpr.includes(\"'proc.bytes_in'\"))",
            id: "aggregate_metrics",
            description: "however unless tangible pine",
            disabled: true,
            final: false,
            conf: {
              passthrough: false,
              preserveGroupBys: false,
              sufficientStatsOnly: false,
              prefix: "<value>",
              timeWindow: "10s",
              aggregations: [
                {
                  metricType: "gauge",
                  agg: "avg(_value || proc.cpu_perc).as(proc.cpu_perc_avg)",
                },
                {
                  metricType: "gauge",
                  agg: "sum(_value || proc.mem_perc).as(proc.mem_perc_sum)",
                },
                {
                  metricType: "counter",
                  agg: "count(_value || proc.bytes_in).as(proc.bytes_in_count)",
                },
              ],
              groupbys: [
                "proc",
              ],
              flushEventLimit: 6008.27,
              flushMemLimit: "<value>",
              cumulative: false,
              shouldTreatDotsAsLiterals: true,
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              flushOnInputClose: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "aggregate-metrics-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that aggregates process metrics: CPU, memory, and bytes over time windows",
        streamtags: [],
        functions: [
          {
            filter: "(_metric == 'proc.cpu_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.cpu_perc'\")) || (_metric == 'proc.mem_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.mem_perc'\")) || (_metric == 'proc.bytes_in' || __criblMetrics[0].nameExpr.includes(\"'proc.bytes_in'\"))",
            id: "aggregate_metrics",
            description: "however unless tangible pine",
            disabled: true,
            final: false,
            conf: {
              passthrough: false,
              preserveGroupBys: false,
              sufficientStatsOnly: false,
              prefix: "<value>",
              timeWindow: "10s",
              aggregations: [
                {
                  metricType: "gauge",
                  agg: "avg(_value || proc.cpu_perc).as(proc.cpu_perc_avg)",
                },
                {
                  metricType: "gauge",
                  agg: "sum(_value || proc.mem_perc).as(proc.mem_perc_sum)",
                },
                {
                  metricType: "counter",
                  agg: "count(_value || proc.bytes_in).as(proc.bytes_in_count)",
                },
              ],
              groupbys: [
                "proc",
              ],
              flushEventLimit: 6008.27,
              flushMemLimit: "<value>",
              cumulative: false,
              shouldTreatDotsAsLiterals: true,
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              flushOnInputClose: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesAggregations

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesAggregations" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "aggregation-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that aggregates rejected bytes grouped by source address every 10 seconds",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "aggregation",
            description: "ick whenever pinstripe indeed scope into wide-eyed",
            disabled: false,
            final: false,
            conf: {
              passthrough: false,
              preserveGroupBys: false,
              sufficientStatsOnly: false,
              metricsMode: false,
              prefix: "<value>",
              timeWindow: "10s",
              aggregations: [
                "sum(bytes).where(action==\"REJECT\").as(TotalBytes)",
              ],
              groupbys: [
                "srcaddr",
              ],
              flushEventLimit: 6263.18,
              flushMemLimit: "<value>",
              cumulative: false,
              searchAggMode: "<value>",
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              shouldTreatDotsAsLiterals: false,
              flushOnInputClose: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "aggregation-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that aggregates rejected bytes grouped by source address every 10 seconds",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "aggregation",
            description: "ick whenever pinstripe indeed scope into wide-eyed",
            disabled: false,
            final: false,
            conf: {
              passthrough: false,
              preserveGroupBys: false,
              sufficientStatsOnly: false,
              metricsMode: false,
              prefix: "<value>",
              timeWindow: "10s",
              aggregations: [
                "sum(bytes).where(action==\"REJECT\").as(TotalBytes)",
              ],
              groupbys: [
                "srcaddr",
              ],
              flushEventLimit: 6263.18,
              flushMemLimit: "<value>",
              cumulative: false,
              searchAggMode: "<value>",
              add: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
              shouldTreatDotsAsLiterals: false,
              flushOnInputClose: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesAutoTimestamp

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesAutoTimestamp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "auto-timestamp-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts timestamps from event data using auto timestamp function",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "auto_timestamp",
            description: "what defiantly switch aha where slake but lighthearted",
            disabled: false,
            final: false,
            conf: {
              srcField: "_raw",
              dstField: "_time",
              defaultTimezone: "local",
              timeExpression: "time.getTime() / 1000",
              offset: 0,
              maxLen: 150,
              defaultTime: "now",
              latestDateAllowed: "+1week",
              spacer: "<value>",
              earliestDateAllowed: "-420weeks",
              timestamps: [
                {
                  regex: "/(\\d{1,2}\\/\\d{2}\\/\\d{4}\\s\\d{1,2}:\\d{2}:\\d{2}\\s\\w{2})/",
                  strptime: "%Y-%m-%d %H:%M:%S",
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "auto-timestamp-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts timestamps from event data using auto timestamp function",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "auto_timestamp",
            description: "what defiantly switch aha where slake but lighthearted",
            disabled: false,
            final: false,
            conf: {
              srcField: "_raw",
              dstField: "_time",
              defaultTimezone: "local",
              timeExpression: "time.getTime() / 1000",
              offset: 0,
              maxLen: 150,
              defaultTime: "now",
              latestDateAllowed: "+1week",
              spacer: "<value>",
              earliestDateAllowed: "-420weeks",
              timestamps: [
                {
                  regex: "/(\\d{1,2}\\/\\d{2}\\/\\d{4}\\s\\d{1,2}:\\d{2}:\\d{2}\\s\\w{2})/",
                  strptime: "%Y-%m-%d %H:%M:%S",
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesCEFSerializer

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesCEFSerializer" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "cef-serializer-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that formats events in CEF format with custom header and extension fields",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "cef",
            description: "ah endow whoever notwithstanding now mmm homely scorn",
            disabled: false,
            final: false,
            conf: {
              outputField: "_raw",
              header: [
                {
                  value: "'CEF:0'",
                },
                {
                  value: "'Cribl'",
                },
                {
                  value: "'Cribl'",
                },
                {
                  value: "C.version",
                },
                {
                  value: "420",
                },
                {
                  value: "'Cribl Event'",
                },
                {
                  value: "6",
                },
              ],
              extension: [
                {
                  name: "c6a1Label",
                  value: "'Colorado_Ext_Bldg7'",
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "cef-serializer-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that formats events in CEF format with custom header and extension fields",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "cef",
            description: "ah endow whoever notwithstanding now mmm homely scorn",
            disabled: false,
            final: false,
            conf: {
              outputField: "_raw",
              header: [
                {
                  value: "'CEF:0'",
                },
                {
                  value: "'Cribl'",
                },
                {
                  value: "'Cribl'",
                },
                {
                  value: "C.version",
                },
                {
                  value: "420",
                },
                {
                  value: "'Cribl Event'",
                },
                {
                  value: "6",
                },
              ],
              extension: [
                {
                  name: "c6a1Label",
                  value: "'Colorado_Ext_Bldg7'",
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesChain

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesChain" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "chain-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that chains to another pipeline for sequential data processing",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "chain",
            description: "into jaggedly truly",
            disabled: true,
            final: false,
            conf: {
              processor: "prometheus_metrics",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "chain-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that chains to another pipeline for sequential data processing",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "chain",
            description: "into jaggedly truly",
            disabled: true,
            final: false,
            conf: {
              processor: "prometheus_metrics",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesClone

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesClone" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "clone-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that creates cloned events with additional fields for comparison or routing",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "clone",
            description: "self-assured meaningfully phooey consequently offset woot abnormally",
            disabled: true,
            final: false,
            conf: {
              clones: [
                {
                  "env": "staging",
                },
                {
                  "index": "clones",
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "clone-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that creates cloned events with additional fields for comparison or routing",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "clone",
            description: "self-assured meaningfully phooey consequently offset woot abnormally",
            disabled: true,
            final: false,
            conf: {
              clones: [
                {
                  "env": "staging",
                },
                {
                  "index": "clones",
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesComment

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesComment" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "comment-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline with comment function for documentation",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "comment",
            description: "lend however blindly sugary into except selfishly",
            disabled: false,
            final: false,
            conf: {
              comment: "This function processes security events and enriches them with DNS lookups",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "comment-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline with comment function for documentation",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "comment",
            description: "lend however blindly sugary into except selfishly",
            disabled: false,
            final: false,
            conf: {
              comment: "This function processes security events and enriches them with DNS lookups",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDNSLookup

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesDNSLookup" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "dns-lookup-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that performs DNS lookups to resolve hostnames and IP addresses",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "dns_lookup",
            description: "psst penalise couch lest mid yowza versus chime until near",
            disabled: false,
            final: true,
            conf: {
              dnsLookupFields: [
                {
                  inFieldName: "hostname",
                  resourceRecordType: "A",
                  outFieldName: "hostname_ip",
                },
              ],
              reverseLookupFields: [
                {
                  inFieldName: "src_ip",
                  outFieldName: "src_hostname",
                },
              ],
              dnsServers: [
                "<value 1>",
                "<value 2>",
              ],
              cacheTTL: 30,
              maxCacheSize: 5000,
              useResolvConf: false,
              lookupFallback: false,
              domainOverrides: [
                "<value 1>",
              ],
              lookupFailLogLevel: "error",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "dns-lookup-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that performs DNS lookups to resolve hostnames and IP addresses",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "dns_lookup",
            description: "psst penalise couch lest mid yowza versus chime until near",
            disabled: false,
            final: true,
            conf: {
              dnsLookupFields: [
                {
                  inFieldName: "hostname",
                  resourceRecordType: "A",
                  outFieldName: "hostname_ip",
                },
              ],
              reverseLookupFields: [
                {
                  inFieldName: "src_ip",
                  outFieldName: "src_hostname",
                },
              ],
              dnsServers: [
                "<value 1>",
                "<value 2>",
              ],
              cacheTTL: 30,
              maxCacheSize: 5000,
              useResolvConf: false,
              lookupFallback: false,
              domainOverrides: [
                "<value 1>",
              ],
              lookupFailLogLevel: "error",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDrop

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesDrop" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "drop-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that drops events containing success messages",
        streamtags: [],
        functions: [
          {
            filter: "_raw.search(/success/i)>=0",
            id: "drop",
            description: "briefly equatorial ha",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "drop-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that drops events containing success messages",
        streamtags: [],
        functions: [
          {
            filter: "_raw.search(/success/i)>=0",
            id: "drop",
            description: "briefly equatorial ha",
            disabled: false,
            final: true,
            conf: {},
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDropDimensions

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesDropDimensions" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "drop-dimensions-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that drops specified dimensions from metrics to reduce cardinality",
        streamtags: [],
        functions: [
          {
            filter: "(_metric == 'proc.cpu_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.cpu_perc'\")) && (__criblMetrics[0].dims.includes(\"proc\"))",
            id: "drop_dimensions",
            description: "overplay zowie so fat utilized bulky hence bashfully",
            disabled: true,
            final: false,
            conf: {
              timeWindow: "10s",
              dropDimensions: [
                "proc",
                "pie",
                "unit",
              ],
              flushOnInputClose: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "drop-dimensions-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that drops specified dimensions from metrics to reduce cardinality",
        streamtags: [],
        functions: [
          {
            filter: "(_metric == 'proc.cpu_perc' || __criblMetrics[0].nameExpr.includes(\"'proc.cpu_perc'\")) && (__criblMetrics[0].dims.includes(\"proc\"))",
            id: "drop_dimensions",
            description: "overplay zowie so fat utilized bulky hence bashfully",
            disabled: true,
            final: false,
            conf: {
              timeWindow: "10s",
              dropDimensions: [
                "proc",
                "pie",
                "unit",
              ],
              flushOnInputClose: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDynamicSampling

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesDynamicSampling" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "dynamic-sampling-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that dynamically samples events based on volume using square root mode",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "dynamic_sampling",
            description: "fooey although circa oof veg nor till likewise",
            disabled: true,
            final: true,
            conf: {
              mode: "sqrt",
              keyExpr: "`${domain}:${httpCode}`",
              samplePeriod: 20,
              minEvents: 3,
              maxSampleRate: 3,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "dynamic-sampling-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that dynamically samples events based on volume using square root mode",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "dynamic_sampling",
            description: "fooey although circa oof veg nor till likewise",
            disabled: true,
            final: true,
            conf: {
              mode: "sqrt",
              keyExpr: "`${domain}:${httpCode}`",
              samplePeriod: 20,
              minEvents: 3,
              maxSampleRate: 3,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEmpty

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesEmpty" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "empty-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "",
        streamtags: [],
        functions: [],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "empty-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "",
        streamtags: [],
        functions: [],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEval

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesEval" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "eval-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that evaluates JavaScript expressions to add, modify, and remove fields",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "eval",
            description: "yahoo gah athwart inasmuch circa overcook cricket seriously yippee now",
            disabled: false,
            final: true,
            conf: {
              add: [
                {
                  name: "action",
                  value: "login == 'error' ? 'blocked' : action",
                  disabled: true,
                },
                {
                  name: "myTags",
                  value: "login == 'error' ? [...myTags, 'error'] : myTags",
                  disabled: false,
                },
              ],
              keep: [
                "host",
                "source",
                "action",
                "myTags",
              ],
              remove: [
                "identification",
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "eval-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that evaluates JavaScript expressions to add, modify, and remove fields",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "eval",
            description: "yahoo gah athwart inasmuch circa overcook cricket seriously yippee now",
            disabled: false,
            final: true,
            conf: {
              add: [
                {
                  name: "action",
                  value: "login == 'error' ? 'blocked' : action",
                  disabled: true,
                },
                {
                  name: "myTags",
                  value: "login == 'error' ? [...myTags, 'error'] : myTags",
                  disabled: false,
                },
              ],
              keep: [
                "host",
                "source",
                "action",
                "myTags",
              ],
              remove: [
                "identification",
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEventBreaker

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesEventBreaker" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "event-breaker-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that breaks large event streams into discrete events using regex",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "event_breaker",
            description: "refer coaxingly dental",
            disabled: true,
            final: false,
            conf: {
              existingOrNew: "new",
              shouldMarkCriblBreaker: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "event-breaker-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that breaks large event streams into discrete events using regex",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "event_breaker",
            description: "refer coaxingly dental",
            disabled: true,
            final: false,
            conf: {
              existingOrNew: "new",
              shouldMarkCriblBreaker: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesFlatten

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesFlatten" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "flatten-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that flattens nested JSON structures into top-level fields",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "flatten",
            description: "privilege among how round freezing untidy",
            disabled: true,
            final: true,
            conf: {
              fields: [],
              prefix: "",
              depth: 5,
              delimiter: "_",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "flatten-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that flattens nested JSON structures into top-level fields",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "flatten",
            description: "privilege among how round freezing untidy",
            disabled: true,
            final: true,
            conf: {
              fields: [],
              prefix: "",
              depth: 5,
              delimiter: "_",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesFoldKeys

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesFoldKeys" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "fold-keys-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that transforms flat field names with separators into nested structures",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "foldkeys",
            description: "wherever atop modulo whenever incidentally wherever char upside-down numeracy gosh",
            disabled: false,
            final: false,
            conf: {
              deleteOriginal: true,
              separator: "_",
              selectionRegExp: "^data",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "fold-keys-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that transforms flat field names with separators into nested structures",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "foldkeys",
            description: "wherever atop modulo whenever incidentally wherever char upside-down numeracy gosh",
            disabled: false,
            final: false,
            conf: {
              deleteOriginal: true,
              separator: "_",
              selectionRegExp: "^data",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGeoIP

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesGeoIP" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "geoip-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that enriches events with geolocation data from IP addresses",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "geoip",
            description: "hasty oh bah officially",
            disabled: false,
            final: false,
            conf: {
              file: "GeoLite2-City.mmdb",
              inField: "ip",
              outField: "geoip",
              additionalFields: [
                {
                  extraInField: "src_ip",
                  extraOutField: "src_geoip",
                },
              ],
              outFieldMappings: {},
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "geoip-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that enriches events with geolocation data from IP addresses",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "geoip",
            description: "hasty oh bah officially",
            disabled: false,
            final: false,
            conf: {
              file: "GeoLite2-City.mmdb",
              inField: "ip",
              outField: "geoip",
              additionalFields: [
                {
                  extraInField: "src_ip",
                  extraOutField: "src_geoip",
                },
              ],
              outFieldMappings: {},
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGrok

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesGrok" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "grok-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts structured fields from log data using Grok patterns",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "grok",
            description: "disposer gosh but chairperson foodstuffs excepting vanish as unlike planula",
            disabled: true,
            final: true,
            conf: {
              pattern: "%{TIMESTAMP_ISO8601:event_time} %{LOGLEVEL:log_level} %{GREEDYDATA:log_message}",
              patternList: [],
              source: "_raw",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "grok-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts structured fields from log data using Grok patterns",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "grok",
            description: "disposer gosh but chairperson foodstuffs excepting vanish as unlike planula",
            disabled: true,
            final: true,
            conf: {
              pattern: "%{TIMESTAMP_ISO8601:event_time} %{LOGLEVEL:log_level} %{GREEDYDATA:log_message}",
              patternList: [],
              source: "_raw",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGuard

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesGuard" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "guard-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that scans for sensitive data and applies mitigation expressions",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "sensitive_data_scanner",
            description: "outnumber lazily gah fondly crocodile off",
            disabled: true,
            final: false,
            conf: {
              rules: [
                {
                  rulesetId: "Finance_Global",
                  replaceExpr: "'REDACTED'",
                  disabled: false,
                },
              ],
              fields: [
                "_raw",
              ],
              excludeFields: [],
              flags: [
                {
                  name: "_sensitive",
                  value: "true",
                },
              ],
              includeDetectedRules: true,
              backgroundDetection: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "guard-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that scans for sensitive data and applies mitigation expressions",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "sensitive_data_scanner",
            description: "outnumber lazily gah fondly crocodile off",
            disabled: true,
            final: false,
            conf: {
              rules: [
                {
                  rulesetId: "Finance_Global",
                  replaceExpr: "'REDACTED'",
                  disabled: false,
                },
              ],
              fields: [
                "_raw",
              ],
              excludeFields: [],
              flags: [
                {
                  name: "_sensitive",
                  value: "true",
                },
              ],
              includeDetectedRules: true,
              backgroundDetection: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesJSONUnroll

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesJSONUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "json-unroll-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that unrolls JSON arrays into individual events while retaining parent fields",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "json_unroll",
            description: "sushi ack legitimize through transparency loftily",
            disabled: true,
            final: true,
            conf: {
              path: "allCars",
              name: "cars",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "json-unroll-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that unrolls JSON arrays into individual events while retaining parent fields",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "json_unroll",
            description: "sushi ack legitimize through transparency loftily",
            disabled: true,
            final: true,
            conf: {
              path: "allCars",
              name: "cars",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesLookup

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesLookup" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "lookup-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that enriches events with location data from IP address lookups",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "lookup",
            description: "since communicate now whenever warped whose spice",
            disabled: false,
            final: true,
            conf: {
              file: "ip_locations.csv",
              dbLookup: false,
              matchMode: "exact",
              matchType: "<value>",
              reloadPeriodSec: -1,
              inFields: [
                {
                  eventField: "destination_ip",
                  lookupField: "ip",
                },
              ],
              outFields: [
                {
                  lookupField: "location",
                  eventField: "location",
                  defaultValue: "Unknown",
                },
              ],
              addToEvent: false,
              ignoreCase: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "lookup-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that enriches events with location data from IP address lookups",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "lookup",
            description: "since communicate now whenever warped whose spice",
            disabled: false,
            final: true,
            conf: {
              file: "ip_locations.csv",
              dbLookup: false,
              matchMode: "exact",
              matchType: "<value>",
              reloadPeriodSec: -1,
              inFields: [
                {
                  eventField: "destination_ip",
                  lookupField: "ip",
                },
              ],
              outFields: [
                {
                  lookupField: "location",
                  eventField: "location",
                  defaultValue: "Unknown",
                },
              ],
              addToEvent: false,
              ignoreCase: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesMask

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesMask" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "mask-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that masks Social Security numbers and other sensitive data",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "mask",
            description: "woot malfunction gnash whether athwart inasmuch",
            disabled: false,
            final: true,
            conf: {
              rules: [
                {
                  matchRegex: "/(social=)(\\d+)/",
                  replaceExpr: "`${g1}${C.Mask.md5(g2)}`",
                  disabled: false,
                },
              ],
              fields: [
                "_raw",
              ],
              depth: 5,
              flags: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "mask-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that masks Social Security numbers and other sensitive data",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "mask",
            description: "woot malfunction gnash whether athwart inasmuch",
            disabled: false,
            final: true,
            conf: {
              rules: [
                {
                  matchRegex: "/(social=)(\\d+)/",
                  replaceExpr: "`${g1}${C.Mask.md5(g2)}`",
                  disabled: false,
                },
              ],
              fields: [
                "_raw",
              ],
              depth: 5,
              flags: [
                {
                  name: "<value>",
                  value: "<value>",
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesNumerify

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesNumerify" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "numerify-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that converts string numbers to numeric type for mathematical operations",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "numerify",
            description: "indeed greedy supposing",
            disabled: false,
            final: false,
            conf: {
              depth: 5,
              ignoreFields: [],
              filterExpr: "",
              format: "none",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "numerify-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that converts string numbers to numeric type for mathematical operations",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "numerify",
            description: "indeed greedy supposing",
            disabled: false,
            final: false,
            conf: {
              depth: 5,
              ignoreFields: [],
              filterExpr: "",
              format: "none",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPLogs

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesOTLPLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "otlp-logs-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that normalizes and batches OTLP log events from OpenTelemetry sources",
        streamtags: [],
        functions: [
          {
            filter: "__inputId=='open_telemetry:open_telemetry'",
            id: "otlp_logs",
            description: "skyscraper er thankfully uh-huh rotating lest shoulder",
            disabled: true,
            final: true,
            conf: {
              dropNonLogEvents: false,
              batchOTLPLogs: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "otlp-logs-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that normalizes and batches OTLP log events from OpenTelemetry sources",
        streamtags: [],
        functions: [
          {
            filter: "__inputId=='open_telemetry:open_telemetry'",
            id: "otlp_logs",
            description: "skyscraper er thankfully uh-huh rotating lest shoulder",
            disabled: true,
            final: true,
            conf: {
              dropNonLogEvents: false,
              batchOTLPLogs: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPMetrics

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesOTLPMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "otlp-metrics-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that converts dimensional metrics to OTLP format and batches them by resource attributes",
        streamtags: [],
        functions: [
          {
            filter: "__inputId=='prometheus_rw:prom_rw_in'",
            id: "otlp_metrics",
            description: "modulo mismatch enchanted",
            disabled: false,
            final: true,
            conf: {
              resourceAttributePrefixes: [
                "service",
                "system",
                "telemetry",
                "k8s",
                "cloud",
                "host",
                "process",
              ],
              dropNonMetricEvents: false,
              otlpVersion: "0.10.0",
              batchOTLPMetrics: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "otlp-metrics-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that converts dimensional metrics to OTLP format and batches them by resource attributes",
        streamtags: [],
        functions: [
          {
            filter: "__inputId=='prometheus_rw:prom_rw_in'",
            id: "otlp_metrics",
            description: "modulo mismatch enchanted",
            disabled: false,
            final: true,
            conf: {
              resourceAttributePrefixes: [
                "service",
                "system",
                "telemetry",
                "k8s",
                "cloud",
                "host",
                "process",
              ],
              dropNonMetricEvents: false,
              otlpVersion: "0.10.0",
              batchOTLPMetrics: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPTraces

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesOTLPTraces" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "otlp-traces-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that normalizes and batches OTLP trace events from OpenTelemetry sources",
        streamtags: [],
        functions: [
          {
            filter: "__inputId=='open_telemetry:open_telemetry'",
            id: "otlp_traces",
            description: "obstruct beyond suddenly",
            disabled: false,
            final: false,
            conf: {
              dropNonTraceEvents: false,
              otlpVersion: "0.10.0",
              batchOTLPTraces: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "otlp-traces-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that normalizes and batches OTLP trace events from OpenTelemetry sources",
        streamtags: [],
        functions: [
          {
            filter: "__inputId=='open_telemetry:open_telemetry'",
            id: "otlp_traces",
            description: "obstruct beyond suddenly",
            disabled: false,
            final: false,
            conf: {
              dropNonTraceEvents: false,
              otlpVersion: "0.10.0",
              batchOTLPTraces: true,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesParser

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesParser" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "parser-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts fields from key-value pair formatted data",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "serde",
            description: "acidly sympathetically accept calmly sophisticated provided through oily perspire",
            disabled: true,
            final: false,
            conf: {
              mode: "extract",
              type: "kvp",
              delimChar: "<value>",
              quoteChar: "<value>",
              escapeChar: "<value>",
              nullValue: "<value>",
              srcField: "_raw",
              dstField: "<value>",
              cleanFields: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "parser-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts fields from key-value pair formatted data",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "serde",
            description: "acidly sympathetically accept calmly sophisticated provided through oily perspire",
            disabled: true,
            final: false,
            conf: {
              mode: "extract",
              type: "kvp",
              delimChar: "<value>",
              quoteChar: "<value>",
              escapeChar: "<value>",
              nullValue: "<value>",
              srcField: "_raw",
              dstField: "<value>",
              cleanFields: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesPublishMetrics

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesPublishMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "publish-metrics-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts metrics from events and formats them for metrics aggregation platforms",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "publish_metrics",
            description: "instead after mediocre tabulate cultivated",
            disabled: true,
            final: false,
            conf: {
              fields: [
                {
                  inFieldName: "bytes",
                  outFieldExpr: "'metric_name.bytes'",
                  metricType: "gauge",
                },
                {
                  inFieldName: "packets",
                  outFieldExpr: "'metric_name.packets'",
                  metricType: "gauge",
                },
              ],
              overwrite: false,
              dimensions: [
                "action",
                "interface_id",
                "dstaddr",
              ],
              removeMetrics: [],
              removeDimensions: [],
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "publish-metrics-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts metrics from events and formats them for metrics aggregation platforms",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "publish_metrics",
            description: "instead after mediocre tabulate cultivated",
            disabled: true,
            final: false,
            conf: {
              fields: [
                {
                  inFieldName: "bytes",
                  outFieldExpr: "'metric_name.bytes'",
                  metricType: "gauge",
                },
                {
                  inFieldName: "packets",
                  outFieldExpr: "'metric_name.packets'",
                  metricType: "gauge",
                },
              ],
              overwrite: false,
              dimensions: [
                "action",
                "interface_id",
                "dstaddr",
              ],
              removeMetrics: [],
              removeDimensions: [],
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRedis

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRedis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "redis-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that retrieves values from Redis using GET command",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "redis",
            description: "mummify yum whose before however er unfit intermesh reasoning",
            disabled: false,
            final: true,
            conf: {
              commands: [
                {
                  outField: "cached_value",
                  command: "get",
                  keyExpr: "'user_session'",
                  argsExpr: "",
                },
              ],
              deploymentType: "standalone",
              authType: "none",
              maxBlockSecs: 60,
              enableClientSideCaching: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "redis-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that retrieves values from Redis using GET command",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "redis",
            description: "mummify yum whose before however er unfit intermesh reasoning",
            disabled: false,
            final: true,
            conf: {
              commands: [
                {
                  outField: "cached_value",
                  command: "get",
                  keyExpr: "'user_session'",
                  argsExpr: "",
                },
              ],
              deploymentType: "standalone",
              authType: "none",
              maxBlockSecs: 60,
              enableClientSideCaching: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRegexExtract

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRegexExtract" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "regex-extract-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts structured fields from log data using regex patterns with named capture groups",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "regex_extract",
            description: "dependency huzzah gurn invite",
            disabled: true,
            final: true,
            conf: {
              regex: "/metric1=(?<metric1>\\d+)/",
              regexList: [
                {
                  regex: "<value>",
                },
              ],
              source: "_raw",
              iterations: 100,
              fieldNameExpression: "<value>",
              overwrite: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "regex-extract-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that extracts structured fields from log data using regex patterns with named capture groups",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "regex_extract",
            description: "dependency huzzah gurn invite",
            disabled: true,
            final: true,
            conf: {
              regex: "/metric1=(?<metric1>\\d+)/",
              regexList: [
                {
                  regex: "<value>",
                },
              ],
              source: "_raw",
              iterations: 100,
              fieldNameExpression: "<value>",
              overwrite: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRegexFilter

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRegexFilter" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "regex-filter-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that filters out events matching specific regex patterns",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "regex_filter",
            description: "mmm once duh respray",
            disabled: true,
            final: false,
            conf: {
              regex: "/Opera/",
              regexList: [
                {
                  regex: "<value>",
                },
              ],
              field: "_raw",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "regex-filter-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that filters out events matching specific regex patterns",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "regex_filter",
            description: "mmm once duh respray",
            disabled: true,
            final: false,
            conf: {
              regex: "/Opera/",
              regexList: [
                {
                  regex: "<value>",
                },
              ],
              field: "_raw",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRename

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRename" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "rename-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that renames fields using key-value pairs and expressions",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "rename",
            description: "per chase suspiciously vary shimmering through unlearn gallery waft yet",
            disabled: true,
            final: true,
            conf: {
              baseFields: [],
              rename: [
                {
                  currentName: "level",
                  newName: "LEVEL",
                },
              ],
              renameExpr: "name.startsWith('out') ? name.toUpperCase() : name",
              wildcardDepth: 5,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "rename-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that renames fields using key-value pairs and expressions",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "rename",
            description: "per chase suspiciously vary shimmering through unlearn gallery waft yet",
            disabled: true,
            final: true,
            conf: {
              baseFields: [],
              rename: [
                {
                  currentName: "level",
                  newName: "LEVEL",
                },
              ],
              renameExpr: "name.startsWith('out') ? name.toUpperCase() : name",
              wildcardDepth: 5,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRollupMetrics

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRollupMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "rollup-metrics-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that consolidates high-frequency metrics into manageable time windows",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "rollup_metrics",
            description: "bashfully whispered cheerfully stupendous dandelion hmph lest alongside perfection homely",
            disabled: true,
            final: true,
            conf: {
              dimensions: [
                "*",
              ],
              timeWindow: "30s",
              gaugeRollup: "last",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "rollup-metrics-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that consolidates high-frequency metrics into manageable time windows",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "rollup_metrics",
            description: "bashfully whispered cheerfully stupendous dandelion hmph lest alongside perfection homely",
            disabled: true,
            final: true,
            conf: {
              dimensions: [
                "*",
              ],
              timeWindow: "30s",
              gaugeRollup: "last",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSNMPTrapSerialize

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesSNMPTrapSerialize" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "snmp-trap-serialize-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that serializes events into SNMP trap format for SNMP trap destinations",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "snmp_trap_serialize",
            description: "aha ew lender mosh",
            disabled: false,
            final: true,
            conf: {
              strict: true,
              dropFailedEvents: true,
              v3User: {
                name: "<value>",
                authProtocol: "md5",
                authKey: "<value>",
                privProtocol: "<value>",
              },
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "snmp-trap-serialize-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that serializes events into SNMP trap format for SNMP trap destinations",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "snmp_trap_serialize",
            description: "aha ew lender mosh",
            disabled: false,
            final: true,
            conf: {
              strict: true,
              dropFailedEvents: true,
              v3User: {
                name: "<value>",
                authProtocol: "md5",
                authKey: "<value>",
                privProtocol: "<value>",
              },
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSampling

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesSampling" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "sampling-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that samples events at specified rates based on filter criteria",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "sampling",
            description: "even dock modulo dreary whoever ew",
            disabled: false,
            final: false,
            conf: {
              rules: [
                {
                  filter: "__status == 200",
                  rate: 5,
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "sampling-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that samples events at specified rates based on filter criteria",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "sampling",
            description: "even dock modulo dreary whoever ew",
            disabled: false,
            final: false,
            conf: {
              rules: [
                {
                  filter: "__status == 200",
                  rate: 5,
                },
              ],
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSerialize

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesSerialize" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "serialize-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that serializes event fields into JSON format",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "serialize",
            description: "whoa ew grandiose meal that",
            disabled: true,
            final: false,
            conf: {
              type: "json",
              delimChar: "<value>",
              quoteChar: "<value>",
              escapeChar: "<value>",
              nullValue: "<value>",
              fields: [
                "city",
                "state",
              ],
              srcField: "",
              dstField: "_raw",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "serialize-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that serializes event fields into JSON format",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "serialize",
            description: "whoa ew grandiose meal that",
            disabled: true,
            final: false,
            conf: {
              type: "json",
              delimChar: "<value>",
              quoteChar: "<value>",
              escapeChar: "<value>",
              nullValue: "<value>",
              fields: [
                "city",
                "state",
              ],
              srcField: "",
              dstField: "_raw",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSuppress

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesSuppress" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "suppress-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that suppresses duplicate events based on a key expression",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "suppress",
            description: "ack alongside famously brr after punctuation crowded supposing swath",
            disabled: true,
            final: true,
            conf: {
              keyExpr: "`${ip}:${port}`",
              allow: 1,
              suppressPeriodSec: 30,
              dropEventsMode: true,
              maxCacheSize: 50000,
              cacheIdleTimeoutPeriods: 2,
              numEventsIdleTimeoutTrigger: 10000,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "suppress-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that suppresses duplicate events based on a key expression",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "suppress",
            description: "ack alongside famously brr after punctuation crowded supposing swath",
            disabled: true,
            final: true,
            conf: {
              keyExpr: "`${ip}:${port}`",
              allow: 1,
              suppressPeriodSec: 30,
              dropEventsMode: true,
              maxCacheSize: 50000,
              cacheIdleTimeoutPeriods: 2,
              numEventsIdleTimeoutTrigger: 10000,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesTee

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesTee" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "tee-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that sends events to a command via stdin for debugging purposes",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "tee",
            description: "delirious athletic remark chairperson order",
            disabled: false,
            final: false,
            conf: {
              command: "tee",
              args: [
                "/opt/cribl/foo.log",
              ],
              restartOnExit: true,
              env: {

              },
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "tee-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that sends events to a command via stdin for debugging purposes",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "tee",
            description: "delirious athletic remark chairperson order",
            disabled: false,
            final: false,
            conf: {
              command: "tee",
              args: [
                "/opt/cribl/foo.log",
              ],
              restartOnExit: true,
              env: {
  
              },
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesUnroll

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "unroll-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that unrolls array fields into separate events",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "unroll",
            description: "eminent safely sonar verve sedately like yippee swing which rudely",
            disabled: false,
            final: false,
            conf: {
              srcExpr: "_raw.split(/\\n/)",
              dstField: "_raw",
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "unroll-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that unrolls array fields into separate events",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "unroll",
            description: "eminent safely sonar verve sedately like yippee swing which rudely",
            disabled: false,
            final: false,
            conf: {
              srcExpr: "_raw.split(/\\n/)",
              dstField: "_raw",
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesXMLUnroll

<!-- UsageSnippet language="typescript" operationID="updatePipelineById" method="patch" path="/pipelines/{id}" example="PipelineExamplesXMLUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.update({
    id: "<id>",
    pipeline: {
      id: "xml-unroll-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that unrolls XML elements into separate events",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "xml_unroll",
            description: "tousle jell preclude rationalize into",
            disabled: false,
            final: true,
            conf: {
              unroll: "^Parent\\.Child$",
              inherit: "^Parent\\.(myID|branchLocation)$",
              unrollIdxField: "unroll_idx",
              pretty: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {

        },
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
import { pipelinesUpdate } from "cribl-control-plane/funcs/pipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pipeline: {
      id: "xml-unroll-pipeline",
      conf: {
        asyncFuncTimeout: 1000,
        output: "default",
        description: "Pipeline that unrolls XML elements into separate events",
        streamtags: [],
        functions: [
          {
            filter: "true",
            id: "xml_unroll",
            description: "tousle jell preclude rationalize into",
            disabled: false,
            final: true,
            conf: {
              unroll: "^Parent\\.Child$",
              inherit: "^Parent\\.(myID|branchLocation)$",
              unrollIdxField: "unroll_idx",
              pretty: false,
            },
            groupId: "<id>",
          },
        ],
        groups: {
  
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePipelineByIdRequest](../../models/operations/updatepipelinebyidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedPipeline](../../models/countedpipeline.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Delete the specified Pipeline.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deletePipelineById" method="delete" path="/pipelines/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.pipelines.delete({
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
import { pipelinesDelete } from "cribl-control-plane/funcs/pipelinesDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await pipelinesDelete(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pipelinesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePipelineByIdRequest](../../models/operations/deletepipelinebyidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedPipeline](../../models/countedpipeline.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |
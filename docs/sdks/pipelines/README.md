# Pipelines

## Overview

Actions related to Pipelines

### Available Operations

* [create](#create) - Create a Pipeline
* [list](#list) - List all Pipelines
* [delete](#delete) - Delete a Pipeline
* [get](#get) - Get a Pipeline
* [update](#update) - Update a Pipeline

## create

Create a new Pipeline.

### Example Usage: PipelineExamplesAggregateMetrics

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesAggregateMetrics" -->
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
          description: "humiliating guidance highly hundred er round zowie ew",
          disabled: false,
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
            flushEventLimit: 5554.41,
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
          description: "humiliating guidance highly hundred er round zowie ew",
          disabled: false,
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
            flushEventLimit: 5554.41,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesAggregations" -->
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
          description: "classic huzzah slip gah or from versus spirit worth down",
          disabled: true,
          final: true,
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
            flushEventLimit: 6647.4,
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
          description: "classic huzzah slip gah or from versus spirit worth down",
          disabled: true,
          final: true,
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
            flushEventLimit: 6647.4,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesAutoTimestamp" -->
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
          description: "out slide blah irresponsible even squeaky finally atop noisily",
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
          description: "out slide blah irresponsible even squeaky finally atop noisily",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesCEFSerializer" -->
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
          description: "gadzooks always as likable aboard ad gadzooks foolish ham",
          disabled: true,
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
          description: "gadzooks always as likable aboard ad gadzooks foolish ham",
          disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesChain" -->
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
          description: "cantaloupe hasty where gee yum excepting",
          disabled: true,
          final: true,
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
          description: "cantaloupe hasty where gee yum excepting",
          disabled: true,
          final: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesClone" -->
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
          description: "sailor finally magnetize plus aware forenenst good gloss",
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
          description: "sailor finally magnetize plus aware forenenst good gloss",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesComment" -->
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
          description: "weekly boggle oof modulo when pleased consequently oddly",
          disabled: true,
          final: true,
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
          description: "weekly boggle oof modulo when pleased consequently oddly",
          disabled: true,
          final: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesDNSLookup" -->
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
          description: "unlike victoriously dredger lest frightfully gifted instantly",
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
          description: "unlike victoriously dredger lest frightfully gifted instantly",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesDrop" -->
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
          description: "yahoo restfully hearten meanwhile absent naturally",
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
          description: "yahoo restfully hearten meanwhile absent naturally",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesDropDimensions" -->
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
          description: "vacation wrongly hmph celebrate ignite",
          disabled: false,
          final: true,
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
          description: "vacation wrongly hmph celebrate ignite",
          disabled: false,
          final: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesDynamicSampling" -->
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
          description: "gee ick why sniff um mouser mosh utterly monthly er",
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
          description: "gee ick why sniff um mouser mosh utterly monthly er",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesEmpty" -->
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesEval" -->
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
          description: "well-to-do boo jaunty bank censor magnificent",
          disabled: true,
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
                disabled: true,
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
          description: "well-to-do boo jaunty bank censor magnificent",
          disabled: true,
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
                disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesEventBreaker" -->
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
          description: "outside utterly each toward sailor",
          disabled: false,
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
          description: "outside utterly each toward sailor",
          disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesFlatten" -->
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
          description: "countess majority excluding staid woot when swill",
          disabled: false,
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
          description: "countess majority excluding staid woot when swill",
          disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesFoldKeys" -->
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
          description: "evenly eek aw but grave uh-huh",
          disabled: true,
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
          description: "evenly eek aw but grave uh-huh",
          disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesGeoIP" -->
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
          description: "likewise abnormally fishery supposing quizzically",
          disabled: false,
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
          description: "likewise abnormally fishery supposing quizzically",
          disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesGrok" -->
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
          description: "wildly secondary diligently relieve ack like intermix christen upright",
          disabled: false,
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
          description: "wildly secondary diligently relieve ack like intermix christen upright",
          disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesGuard" -->
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
          description: "sadly inasmuch waft modulo ah yippee upright those colorfully aw",
          disabled: true,
          final: true,
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
            backgroundDetection: false,
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
          description: "sadly inasmuch waft modulo ah yippee upright those colorfully aw",
          disabled: true,
          final: true,
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
            backgroundDetection: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesJSONUnroll" -->
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
          description: "dispense ha psst across role ha",
          disabled: true,
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
          description: "dispense ha psst across role ha",
          disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesLookup" -->
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
          description: "ouch whether unnaturally ha",
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
          description: "ouch whether unnaturally ha",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesMask" -->
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
          description: "uselessly quinoa over smuggle acidly libel whenever",
          disabled: true,
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
          description: "uselessly quinoa over smuggle acidly libel whenever",
          disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesNumerify" -->
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
          description: "reward badly loyally eek toward unless mild quirkily noxious blah",
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
          description: "reward badly loyally eek toward unless mild quirkily noxious blah",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesOTLPLogs" -->
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
          description: "import dividend between reassuringly",
          disabled: false,
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
          description: "import dividend between reassuringly",
          disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesOTLPMetrics" -->
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
          description: "institutionalize briskly whether intend",
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
          description: "institutionalize briskly whether intend",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesOTLPTraces" -->
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
          description: "fortunately duh yearly",
          disabled: true,
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
          description: "fortunately duh yearly",
          disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesParser" -->
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
          description: "finally brr whoever as yippee igloo at against",
          disabled: false,
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
          description: "finally brr whoever as yippee igloo at against",
          disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesPublishMetrics" -->
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
          description: "pace inborn atomize emboss pronoun tremendously",
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
          description: "pace inborn atomize emboss pronoun tremendously",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesRedis" -->
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
          description: "gadzooks kosher hollow cumbersome loose but webbed solidly mousse furthermore",
          disabled: true,
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
          description: "gadzooks kosher hollow cumbersome loose but webbed solidly mousse furthermore",
          disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesRegexExtract" -->
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
          description: "scrape spew playfully jaggedly whether follower ah sarcastic",
          disabled: false,
          final: false,
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
          description: "scrape spew playfully jaggedly whether follower ah sarcastic",
          disabled: false,
          final: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesRegexFilter" -->
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
          description: "colorize reprimand cope appertain",
          disabled: false,
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
          description: "colorize reprimand cope appertain",
          disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesRename" -->
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
          description: "amidst within solvency lay",
          disabled: false,
          final: false,
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
          description: "amidst within solvency lay",
          disabled: false,
          final: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesRollupMetrics" -->
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
          description: "consequently drat wasteful inasmuch terribly unabashedly",
          disabled: true,
          final: false,
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
          description: "consequently drat wasteful inasmuch terribly unabashedly",
          disabled: true,
          final: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesSNMPTrapSerialize" -->
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
          description: "on while among crushing sheepishly",
          disabled: false,
          final: true,
          conf: {
            strict: true,
            dropFailedEvents: true,
            v3User: {
              name: "<value>",
              authProtocol: "sha512",
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
          description: "on while among crushing sheepishly",
          disabled: false,
          final: true,
          conf: {
            strict: true,
            dropFailedEvents: true,
            v3User: {
              name: "<value>",
              authProtocol: "sha512",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesSampling" -->
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
          description: "animated obtrude jive dental",
          disabled: true,
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
          description: "animated obtrude jive dental",
          disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesSerialize" -->
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
          description: "midst kissingly deduct versus embossing possible fraudster dislocate barring",
          disabled: false,
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
          description: "midst kissingly deduct versus embossing possible fraudster dislocate barring",
          disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesSuppress" -->
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
          description: "excepting drat lucky bah however account outrun gah lightly that",
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
          description: "excepting drat lucky bah however account outrun gah lightly that",
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesTee" -->
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
          description: "somber splash oh following against alongside",
          disabled: true,
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
          description: "somber splash oh following against alongside",
          disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesUnroll" -->
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
          description: "soupy familiar how psst",
          disabled: true,
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
          description: "soupy familiar how psst",
          disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="createPipelines" method="post" path="/pipelines" example="PipelineExamplesXMLUnroll" -->
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
          description: "within or pfft",
          disabled: true,
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
          description: "within or pfft",
          disabled: true,
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

## list

Get a list of all Pipelines.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPipelines" method="get" path="/pipelines" -->
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

## delete

Delete the specified Pipeline.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deletePipelinesById" method="delete" path="/pipelines/{id}" -->
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
| `request`                                                                                                                                                                      | [operations.DeletePipelinesByIdRequest](../../models/operations/deletepipelinesbyidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

<!-- UsageSnippet language="typescript" operationID="getPipelinesById" method="get" path="/pipelines/{id}" -->
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
| `request`                                                                                                                                                                      | [operations.GetPipelinesByIdRequest](../../models/operations/getpipelinesbyidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesAggregateMetrics" -->
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
            description: "off fooey tight supposing or oval underneath",
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
              flushEventLimit: 4997.28,
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
            description: "off fooey tight supposing or oval underneath",
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
              flushEventLimit: 4997.28,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesAggregations" -->
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
            description: "snowplow brr onto ripe object outfit extremely gee wrongly",
            disabled: true,
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
              flushEventLimit: 5885.07,
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
            description: "snowplow brr onto ripe object outfit extremely gee wrongly",
            disabled: true,
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
              flushEventLimit: 5885.07,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesAutoTimestamp" -->
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
            description: "around captain moralise now yum parsnip inasmuch pleased sleepily",
            disabled: true,
            final: true,
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
            description: "around captain moralise now yum parsnip inasmuch pleased sleepily",
            disabled: true,
            final: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesCEFSerializer" -->
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
            description: "elegantly solemnly dash um gadzooks apt transom barring",
            disabled: true,
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
            description: "elegantly solemnly dash um gadzooks apt transom barring",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesChain" -->
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
            description: "outside ack doing highlight outside round impractical steep alongside gorgeous",
            disabled: false,
            final: true,
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
            description: "outside ack doing highlight outside round impractical steep alongside gorgeous",
            disabled: false,
            final: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesClone" -->
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
            description: "pepper successfully husky duh ack",
            disabled: false,
            final: true,
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
            description: "pepper successfully husky duh ack",
            disabled: false,
            final: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesComment" -->
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
            description: "gigantic ick yahoo admonish",
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
            description: "gigantic ick yahoo admonish",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesDNSLookup" -->
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
            description: "penalise above mockingly questionable",
            disabled: true,
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
                "<value 2>",
                "<value 3>",
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
            description: "penalise above mockingly questionable",
            disabled: true,
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
                "<value 2>",
                "<value 3>",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesDrop" -->
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
            description: "vengeful rout worth quickly in anti amongst cop-out",
            disabled: true,
            final: false,
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
            description: "vengeful rout worth quickly in anti amongst cop-out",
            disabled: true,
            final: false,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesDropDimensions" -->
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
            description: "amongst slather yippee resource which yippee weary crumble",
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
            description: "amongst slather yippee resource which yippee weary crumble",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesDynamicSampling" -->
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
            description: "physically wilted scornful gosh lest smart oof damaged inside",
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
            description: "physically wilted scornful gosh lest smart oof damaged inside",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesEmpty" -->
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesEval" -->
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
            description: "misread as noted clamp",
            disabled: true,
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
            description: "misread as noted clamp",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesEventBreaker" -->
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
            description: "and voluminous dramatize incidentally but wasabi anenst brook unlike",
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
            description: "and voluminous dramatize incidentally but wasabi anenst brook unlike",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesFlatten" -->
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
            description: "expostulate fragrant why whose whereas if unless whoever reconsideration",
            disabled: false,
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
            description: "expostulate fragrant why whose whereas if unless whoever reconsideration",
            disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesFoldKeys" -->
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
            description: "deceivingly amongst stunning anenst",
            disabled: true,
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
            description: "deceivingly amongst stunning anenst",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesGeoIP" -->
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
            description: "busy anti geez savour jellyfish along oh",
            disabled: true,
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
            description: "busy anti geez savour jellyfish along oh",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesGrok" -->
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
            description: "notwithstanding the yowza harp however shrill scrape",
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
            description: "notwithstanding the yowza harp however shrill scrape",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesGuard" -->
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
            description: "readily snappy yuck absent ad phew unlike sand harvest instead",
            disabled: false,
            final: true,
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
              backgroundDetection: false,
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
            description: "readily snappy yuck absent ad phew unlike sand harvest instead",
            disabled: false,
            final: true,
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
              backgroundDetection: false,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesJSONUnroll" -->
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
            description: "upward curiously deafening famously likewise whenever than",
            disabled: true,
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
            description: "upward curiously deafening famously likewise whenever than",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesLookup" -->
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
            description: "chainstay though overcooked expostulate midst worldly within",
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
            description: "chainstay though overcooked expostulate midst worldly within",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesMask" -->
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
            description: "afore good remark switch on harvest downshift once but",
            disabled: true,
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
            description: "afore good remark switch on harvest downshift once but",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesNumerify" -->
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
            description: "oof brr spork quit versus excepting dwell delight slipper likewise",
            disabled: true,
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
            description: "oof brr spork quit versus excepting dwell delight slipper likewise",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesOTLPLogs" -->
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
            description: "frenetically mortise eek boohoo downright fly basket whoever",
            disabled: false,
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
            description: "frenetically mortise eek boohoo downright fly basket whoever",
            disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesOTLPMetrics" -->
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
            description: "fortunate happily knight coincide anenst",
            disabled: true,
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
            description: "fortunate happily knight coincide anenst",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesOTLPTraces" -->
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
            description: "wobbly meaningfully necklace dependable jet aboard",
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
            description: "wobbly meaningfully necklace dependable jet aboard",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesParser" -->
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
            description: "although by gadzooks agile gift inferior pish",
            disabled: false,
            final: true,
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
            description: "although by gadzooks agile gift inferior pish",
            disabled: false,
            final: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesPublishMetrics" -->
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
            description: "plan what phooey guide",
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
            description: "plan what phooey guide",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRedis" -->
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
            description: "young along per candid wetly gently upliftingly wearily",
            disabled: true,
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
            description: "young along per candid wetly gently upliftingly wearily",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRegexExtract" -->
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
            description: "anti onto incidentally thankfully draw drat pulverize custom while sticky",
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
            description: "anti onto incidentally thankfully draw drat pulverize custom while sticky",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRegexFilter" -->
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
            description: "dreamily generously a yahoo until ah enthusiastically unexpectedly fixed explode",
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
            description: "dreamily generously a yahoo until ah enthusiastically unexpectedly fixed explode",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRename" -->
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
            description: "across yahoo including direct absent if ravel despite cap owlishly",
            disabled: false,
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
            description: "across yahoo including direct absent if ravel despite cap owlishly",
            disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesRollupMetrics" -->
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
            description: "woot bourgeoisie hot harvest inasmuch definite out psst traditionalism lively",
            disabled: false,
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
            description: "woot bourgeoisie hot harvest inasmuch definite out psst traditionalism lively",
            disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesSNMPTrapSerialize" -->
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
            description: "ack scaly ingratiate when finally troubled coordinated",
            disabled: true,
            final: false,
            conf: {
              strict: true,
              dropFailedEvents: true,
              v3User: {
                name: "<value>",
                authProtocol: "sha384",
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
            description: "ack scaly ingratiate when finally troubled coordinated",
            disabled: true,
            final: false,
            conf: {
              strict: true,
              dropFailedEvents: true,
              v3User: {
                name: "<value>",
                authProtocol: "sha384",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesSampling" -->
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
            description: "atop up ironclad",
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
            description: "atop up ironclad",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesSerialize" -->
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
            description: "maroon white indeed obstruct deafening chubby openly",
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
            description: "maroon white indeed obstruct deafening chubby openly",
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesSuppress" -->
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
            description: "per blushing growing",
            disabled: false,
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
            description: "per blushing growing",
            disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesTee" -->
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
            description: "torn out than",
            disabled: true,
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
            description: "torn out than",
            disabled: true,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesUnroll" -->
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
            description: "youthfully blah whoa regarding anti loyally hm peppery measly",
            disabled: false,
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
            description: "youthfully blah whoa regarding anti loyally hm peppery measly",
            disabled: false,
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

<!-- UsageSnippet language="typescript" operationID="updatePipelinesById" method="patch" path="/pipelines/{id}" example="PipelineExamplesXMLUnroll" -->
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
            description: "gee than next forearm kissingly cluttered meh despite",
            disabled: true,
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
            description: "gee than next forearm kissingly cluttered meh despite",
            disabled: true,
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
| `request`                                                                                                                                                                      | [operations.UpdatePipelinesByIdRequest](../../models/operations/updatepipelinesbyidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
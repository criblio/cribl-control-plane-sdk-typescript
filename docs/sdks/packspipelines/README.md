# Packs.Pipelines

## Overview

### Available Operations

* [create](#create) - Create a Pipeline within a Pack
* [list](#list) - List all Pipelines within a Pack
* [delete](#delete) - Delete a Pipeline within a Pack
* [get](#get) - Get a Pipeline within a Pack
* [update](#update) - Update a Pipeline within a Pack

## create

Create a new Pipeline within the specified Pack.

### Example Usage: PipelineExamplesAggregateMetrics

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesAggregateMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "case afore bashfully smooth",
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
              flushEventLimit: 7595.29,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "case afore bashfully smooth",
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
              flushEventLimit: 7595.29,
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesAggregations

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesAggregations" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "eek harvest horse ragged till ack",
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
              flushEventLimit: 7135.24,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "eek harvest horse ragged till ack",
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
              flushEventLimit: 7135.24,
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesAutoTimestamp

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesAutoTimestamp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "garage whoa meanwhile blind er apropos",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "garage whoa meanwhile blind er apropos",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesCEFSerializer

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesCEFSerializer" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "nice ick which brr um pro times mammoth",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "nice ick which brr um pro times mammoth",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesChain

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesChain" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "quip excepting psst jungle configuration hence",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "quip excepting psst jungle configuration hence",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesClone

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesClone" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "pfft rout battle",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "pfft rout battle",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesComment

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesComment" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "knavishly accentuate helplessly concrete factorize drat meaty quaff essence",
            disabled: false,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "knavishly accentuate helplessly concrete factorize drat meaty quaff essence",
            disabled: false,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDNSLookup

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesDNSLookup" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "near greatly midst kinase concerning gratefully whose",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "near greatly midst kinase concerning gratefully whose",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDrop

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesDrop" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "cassava interestingly boss commandeer",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "cassava interestingly boss commandeer",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDropDimensions

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesDropDimensions" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "vacantly boohoo where gorgeous notarize",
            disabled: true,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "vacantly boohoo where gorgeous notarize",
            disabled: true,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDynamicSampling

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesDynamicSampling" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "meanwhile starch cheerful what in whose soft",
            disabled: true,
            final: false,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "meanwhile starch cheerful what in whose soft",
            disabled: true,
            final: false,
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEmpty

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesEmpty" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEval

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesEval" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "repeatedly upon derby gently suffocate inquisitively when oh along whereas",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "repeatedly upon derby gently suffocate inquisitively when oh along whereas",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEventBreaker

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesEventBreaker" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "about gleaming beside",
            disabled: false,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "about gleaming beside",
            disabled: false,
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesFlatten

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesFlatten" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "helpless mmm oh pace meanwhile below above",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "helpless mmm oh pace meanwhile below above",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesFoldKeys

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesFoldKeys" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "concerning mothball worth during",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "concerning mothball worth during",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGeoIP

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesGeoIP" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "until jaunty mid jazz tame trial",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "until jaunty mid jazz tame trial",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGrok

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesGrok" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "usually natural impeccable official louse custody",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "usually natural impeccable official louse custody",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGuard

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesGuard" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "under morning worriedly",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "under morning worriedly",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesJSONUnroll

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesJSONUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "beneath flickering as",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "beneath flickering as",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesLookup

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesLookup" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "shampoo why internalize masquerade boohoo right talkative even until",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "shampoo why internalize masquerade boohoo right talkative even until",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesMask

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesMask" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "list quirkily yahoo cantaloupe perfectly outrageous carefully lucky",
            disabled: false,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "list quirkily yahoo cantaloupe perfectly outrageous carefully lucky",
            disabled: false,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesNumerify

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesNumerify" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "somber furthermore crumble during spherical geez but",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "somber furthermore crumble during spherical geez but",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPLogs

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesOTLPLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "abaft who catalyze cuckoo past woeful woot",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "abaft who catalyze cuckoo past woeful woot",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPMetrics

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesOTLPMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "eek aching fort qua likewise brr",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "eek aching fort qua likewise brr",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPTraces

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesOTLPTraces" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "provided spirited whenever in like knowledgeably however",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "provided spirited whenever in like knowledgeably however",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesParser

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesParser" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "madly aw fast sympathetically swear hence excluding",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "madly aw fast sympathetically swear hence excluding",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesPublishMetrics

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesPublishMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "ack scorpion that sad than since backbone yippee",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "ack scorpion that sad than since backbone yippee",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRedis

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesRedis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "whale minor weekly qua writhing gee continually",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "whale minor weekly qua writhing gee continually",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRegexExtract

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesRegexExtract" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "blah inasmuch pearl till than rust the sediment stir-fry give",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "blah inasmuch pearl till than rust the sediment stir-fry give",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRegexFilter

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesRegexFilter" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "where sans surprised pace ah",
            disabled: true,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "where sans surprised pace ah",
            disabled: true,
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRename

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesRename" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "topsail harmful although telescope woot why pro insistent dimly blissfully",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "topsail harmful although telescope woot why pro insistent dimly blissfully",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRollupMetrics

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesRollupMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "scorpion brand consequently aside unaccountably phew where quirkily know jubilantly",
            disabled: false,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "scorpion brand consequently aside unaccountably phew where quirkily know jubilantly",
            disabled: false,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSNMPTrapSerialize

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesSNMPTrapSerialize" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "untrue frugal anenst inasmuch smug",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "untrue frugal anenst inasmuch smug",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSampling

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesSampling" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "by correctly forecast cumbersome an astride bran",
            disabled: true,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "by correctly forecast cumbersome an astride bran",
            disabled: true,
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSerialize

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesSerialize" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "knowledgeably ligate optimal scotch wombat plus ugh print",
            disabled: false,
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "knowledgeably ligate optimal scotch wombat plus ugh print",
            disabled: false,
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSuppress

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesSuppress" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "merit aw through inasmuch scholarship exempt jacket sinful wisely",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "merit aw through inasmuch scholarship exempt jacket sinful wisely",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesTee

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesTee" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "through furthermore woot designation",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "through furthermore woot designation",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesUnroll

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "interior indeed loftily contrast um stigmatize accomplished endow geez",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "interior indeed loftily contrast um stigmatize accomplished endow geez",
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
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesXMLUnroll

<!-- UsageSnippet language="typescript" operationID="createPipelinesByPack" method="post" path="/p/{pack}/pipelines" example="PipelineExamplesXMLUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.create({
    pack: "<value>",
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
            description: "hollow awful hmph",
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
import { packsPipelinesCreate } from "cribl-control-plane/funcs/packsPipelinesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesCreate(criblControlPlane, {
    pack: "<value>",
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
            description: "hollow awful hmph",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePipelinesByPackRequest](../../models/operations/createpipelinesbypackrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Get a list of all Pipelines within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPipelinesByPack" method="get" path="/p/{pack}/pipelines" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.list({
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
import { packsPipelinesList } from "cribl-control-plane/funcs/packsPipelinesList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesList(criblControlPlane, {
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPipelinesByPackRequest](../../models/operations/getpipelinesbypackrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Delete the specified Pipeline within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deletePipelinesByPackAndId" method="delete" path="/p/{pack}/pipelines/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.delete({
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
import { packsPipelinesDelete } from "cribl-control-plane/funcs/packsPipelinesDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesDelete(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePipelinesByPackAndIdRequest](../../models/operations/deletepipelinesbypackandidrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Get the specified Pipeline within the specified Pack.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPipelinesByPackAndId" method="get" path="/p/{pack}/pipelines/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.get({
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
import { packsPipelinesGet } from "cribl-control-plane/funcs/packsPipelinesGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesGet(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPipelinesByPackAndIdRequest](../../models/operations/getpipelinesbypackandidrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Update the specified Pipeline within the specified Pack.</br></br>Provide a complete representation of the Pipeline that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Pipeline.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Pipeline might not function as expected.

### Example Usage: PipelineExamplesAggregateMetrics

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesAggregateMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "yearn until think needy serialize",
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
              flushEventLimit: 2771.87,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "yearn until think needy serialize",
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
              flushEventLimit: 2771.87,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesAggregations

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesAggregations" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "yak handle internal unless conjecture ride trash thorough crossly failing",
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
              flushEventLimit: 1229.32,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "yak handle internal unless conjecture ride trash thorough crossly failing",
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
              flushEventLimit: 1229.32,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesAutoTimestamp

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesAutoTimestamp" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "lest however which doodle pushy capitalise holster chops respectful",
            disabled: false,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "lest however which doodle pushy capitalise holster chops respectful",
            disabled: false,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesCEFSerializer

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesCEFSerializer" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "hospitable although experienced carpool numeracy like stool",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "hospitable although experienced carpool numeracy like stool",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesChain

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesChain" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "whenever a carelessly doting",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "whenever a carelessly doting",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesClone

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesClone" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "acclaimed celsius sideboard",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "acclaimed celsius sideboard",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesComment

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesComment" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "internationalize meanwhile earnest shipper",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "internationalize meanwhile earnest shipper",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDNSLookup

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesDNSLookup" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "lumpy however cleverly cleaner knowledgeable defrag impact helplessly",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "lumpy however cleverly cleaner knowledgeable defrag impact helplessly",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDrop

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesDrop" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "brightly mortise lamp sardonic because sure-footed narrowcast",
            disabled: true,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "brightly mortise lamp sardonic because sure-footed narrowcast",
            disabled: true,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDropDimensions

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesDropDimensions" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "young times crocodile great masticate why ornate atop bah",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "young times crocodile great masticate why ornate atop bah",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesDynamicSampling

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesDynamicSampling" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "whether lady where",
            disabled: true,
            final: false,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "whether lady where",
            disabled: true,
            final: false,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEmpty

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesEmpty" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEval

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesEval" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "than nor following",
            disabled: true,
            final: false,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "than nor following",
            disabled: true,
            final: false,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesEventBreaker

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesEventBreaker" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "incidentally scornful past vivaciously aha genuine essence",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "incidentally scornful past vivaciously aha genuine essence",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesFlatten

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesFlatten" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "skyline beautifully of firm championship clamour impanel order",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "skyline beautifully of firm championship clamour impanel order",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesFoldKeys

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesFoldKeys" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "amidst utterly loyally mould",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "amidst utterly loyally mould",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGeoIP

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesGeoIP" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "catch nippy gah brightly gadzooks amused",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "catch nippy gah brightly gadzooks amused",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGrok

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesGrok" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "afore sardonic glittering whether provided negligible pasta even opposite",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "afore sardonic glittering whether provided negligible pasta even opposite",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesGuard

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesGuard" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "circa corral crushing vision",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "circa corral crushing vision",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesJSONUnroll

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesJSONUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "revitalise yippee forgather although republican diligently near microchip gosh",
            disabled: false,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "revitalise yippee forgather although republican diligently near microchip gosh",
            disabled: false,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesLookup

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesLookup" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "slimy warmhearted meaningfully ack unabashedly pish likewise timely shore sprinkles",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "slimy warmhearted meaningfully ack unabashedly pish likewise timely shore sprinkles",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesMask

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesMask" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "anenst cop-out loftily illusion sugary passport astride",
            disabled: false,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "anenst cop-out loftily illusion sugary passport astride",
            disabled: false,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesNumerify

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesNumerify" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "blah cautious rudely for since",
            disabled: true,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "blah cautious rudely for since",
            disabled: true,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPLogs

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesOTLPLogs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "yummy bare absent as jagged owlishly pish upright",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "yummy bare absent as jagged owlishly pish upright",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPMetrics

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesOTLPMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "unlearn worthwhile tall questionable",
            disabled: true,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "unlearn worthwhile tall questionable",
            disabled: true,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesOTLPTraces

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesOTLPTraces" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "aha interchange tabulate considering square",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "aha interchange tabulate considering square",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesParser

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesParser" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "schlep insolence gadzooks",
            disabled: true,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "schlep insolence gadzooks",
            disabled: true,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesPublishMetrics

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesPublishMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "coast if qua wear tuxedo likewise",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "coast if qua wear tuxedo likewise",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRedis

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesRedis" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "though emphasise conservation selfish aside gently amendment internationalize submitter indeed",
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
              enableClientSideCaching: true,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "though emphasise conservation selfish aside gently amendment internationalize submitter indeed",
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
              enableClientSideCaching: true,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRegexExtract

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesRegexExtract" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "simplistic tankful consequently optimistically inferior bide as aha eek sharply",
            disabled: true,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "simplistic tankful consequently optimistically inferior bide as aha eek sharply",
            disabled: true,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRegexFilter

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesRegexFilter" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "rough voluminous woot sans",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "rough voluminous woot sans",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRename

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesRename" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "closely lack vivaciously below needily draft norm sarong for robust",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "closely lack vivaciously below needily draft norm sarong for robust",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesRollupMetrics

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesRollupMetrics" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "ignorance phooey offset insert",
            disabled: false,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "ignorance phooey offset insert",
            disabled: false,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSNMPTrapSerialize

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesSNMPTrapSerialize" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "junior ah over sour",
            disabled: true,
            final: true,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "junior ah over sour",
            disabled: true,
            final: true,
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSampling

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesSampling" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "briefly summarise old mmm redress yowza",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "briefly summarise old mmm redress yowza",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSerialize

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesSerialize" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "language gulp pish bonnet keenly helpfully unit manner",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "language gulp pish bonnet keenly helpfully unit manner",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesSuppress

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesSuppress" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "membership infatuated inquisitively save brr abaft puff before coarse nauseate",
            disabled: true,
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "membership infatuated inquisitively save brr abaft puff before coarse nauseate",
            disabled: true,
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesTee

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesTee" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "horse punctually barring intently bootleg till",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "horse punctually barring intently bootleg till",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesUnroll

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "unto confusion ha row premier intensely advertisement woot",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "unto confusion ha row premier intensely advertisement woot",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: PipelineExamplesXMLUnroll

<!-- UsageSnippet language="typescript" operationID="updatePipelinesByPackAndId" method="patch" path="/p/{pack}/pipelines/{id}" example="PipelineExamplesXMLUnroll" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.pipelines.update({
    id: "<id>",
    pack: "<value>",
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
            description: "yet misappropriate beyond conceptualize hawk tomorrow electric viability kettledrum",
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
import { packsPipelinesUpdate } from "cribl-control-plane/funcs/packsPipelinesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsPipelinesUpdate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
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
            description: "yet misappropriate beyond conceptualize hawk tomorrow electric viability kettledrum",
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
    console.log("packsPipelinesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePipelinesByPackAndIdRequest](../../models/operations/updatepipelinesbypackandidrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
# PipelineFunctionConf


## Supported Types

### `models.PipelineFunctionAggregateMetrics`

```typescript
const value: models.PipelineFunctionAggregateMetrics = {
  id: "aggregate_metrics",
  conf: {
    timeWindow: "<value>",
    aggregations: [],
  },
};
```

### `models.PipelineFunctionAggregation`

```typescript
const value: models.PipelineFunctionAggregation = {
  id: "aggregation",
  conf: {
    timeWindow: "<value>",
    aggregations: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

### `models.PipelineFunctionAutoTimestamp`

```typescript
const value: models.PipelineFunctionAutoTimestamp = {
  id: "auto_timestamp",
  conf: {},
};
```

### `models.PipelineFunctionCef`

```typescript
const value: models.PipelineFunctionCef = {
  id: "cef",
  conf: {},
};
```

### `models.PipelineFunctionChain`

```typescript
const value: models.PipelineFunctionChain = {
  id: "chain",
  conf: {
    processor: "<value>",
  },
};
```

### `models.PipelineFunctionClone`

```typescript
const value: models.PipelineFunctionClone = {
  id: "clone",
  conf: {},
};
```

### `models.PipelineFunctionCode`

```typescript
const value: models.PipelineFunctionCode = {
  id: "code",
  conf: {},
};
```

### `models.PipelineFunctionComment`

```typescript
const value: models.PipelineFunctionComment = {
  id: "comment",
  conf: {},
};
```

### `models.PipelineFunctionDistinct`

```typescript
const value: models.PipelineFunctionDistinct = {
  id: "distinct",
  conf: {
    groupBy: [
      "<value 1>",
    ],
  },
};
```

### `models.PipelineFunctionDnsLookup`

```typescript
const value: models.PipelineFunctionDnsLookup = {
  id: "dns_lookup",
  conf: {},
};
```

### `models.PipelineFunctionDrop`

```typescript
const value: models.PipelineFunctionDrop = {
  id: "drop",
  conf: {},
};
```

### `models.PipelineFunctionDropDimensions`

```typescript
const value: models.PipelineFunctionDropDimensions = {
  id: "drop_dimensions",
  conf: {
    timeWindow: "<value>",
    dropDimensions: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

### `models.PipelineFunctionDynamicSampling`

```typescript
const value: models.PipelineFunctionDynamicSampling = {
  id: "dynamic_sampling",
  conf: {
    mode: "log",
    keyExpr: "<value>",
  },
};
```

### `models.PipelineFunctionEval`

```typescript
const value: models.PipelineFunctionEval = {
  id: "eval",
  conf: {},
};
```

### `models.PipelineFunctionEventBreaker`

```typescript
const value: models.PipelineFunctionEventBreaker = {
  id: "event_breaker",
  conf: {
    existingOrNew: "existing",
  },
};
```

### `models.PipelineFunctionEventstats`

```typescript
const value: models.PipelineFunctionEventstats = {
  id: "eventstats",
  conf: {
    aggregations: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

### `models.PipelineFunctionExternaldata`

```typescript
const value: models.PipelineFunctionExternaldata = {
  id: "externaldata",
  conf: {},
};
```

### `models.PipelineFunctionFlatten`

```typescript
const value: models.PipelineFunctionFlatten = {
  id: "flatten",
  conf: {},
};
```

### `models.PipelineFunctionFoldkeys`

```typescript
const value: models.PipelineFunctionFoldkeys = {
  id: "foldkeys",
  conf: {},
};
```

### `models.PipelineFunctionGenStats`

```typescript
const value: models.PipelineFunctionGenStats = {
  id: "gen_stats",
  conf: {},
};
```

### `models.PipelineFunctionGeoip`

```typescript
const value: models.PipelineFunctionGeoip = {
  id: "geoip",
  conf: {
    file: "<value>",
  },
};
```

### `models.PipelineFunctionGrok`

```typescript
const value: models.PipelineFunctionGrok = {
  id: "grok",
  conf: {
    pattern: "<value>",
  },
};
```

### `models.PipelineFunctionHandlebars`

```typescript
const value: models.PipelineFunctionHandlebars = {
  id: "handlebars",
  conf: {
    templates: [],
  },
};
```

### `models.PipelineFunctionJoin`

```typescript
const value: models.PipelineFunctionJoin = {
  id: "join",
  conf: {
    fieldConditions: [],
  },
};
```

### `models.PipelineFunctionJsonUnroll`

```typescript
const value: models.PipelineFunctionJsonUnroll = {
  id: "json_unroll",
  conf: {
    path: "/Network",
  },
};
```

### `models.PipelineFunctionLakeExport`

```typescript
const value: models.PipelineFunctionLakeExport = {
  id: "lake_export",
  conf: {
    searchJobId: "<id>",
    dataset: "<value>",
  },
};
```

### `models.PipelineFunctionLimit`

```typescript
const value: models.PipelineFunctionLimit = {
  id: "limit",
  conf: {},
};
```

### `models.PipelineFunctionLocalSearchDatatypeParser`

```typescript
const value: models.PipelineFunctionLocalSearchDatatypeParser = {
  id: "local_search_datatype_parser",
  conf: {},
};
```

### `models.PipelineFunctionLocalSearchRulesetRunner`

```typescript
const value: models.PipelineFunctionLocalSearchRulesetRunner = {
  id: "local_search_ruleset_runner",
  conf: {},
};
```

### `models.PipelineFunctionLookup`

```typescript
const value: models.PipelineFunctionLookup = {
  id: "lookup",
  conf: {
    file: "<value>",
  },
};
```

### `models.PipelineFunctionMask`

```typescript
const value: models.PipelineFunctionMask = {
  id: "mask",
  conf: {
    rules: [],
  },
};
```

### `models.PipelineFunctionMvExpand`

```typescript
const value: models.PipelineFunctionMvExpand = {
  id: "mv_expand",
  conf: {
    sourceFields: [],
  },
};
```

### `models.PipelineFunctionMvPull`

```typescript
const value: models.PipelineFunctionMvPull = {
  id: "mv_pull",
  conf: {
    arrayPath: "<value>",
    relativeKeyPath: "<value>",
    relativeValuePath: "<value>",
  },
};
```

### `models.PipelineFunctionNotificationPolicies`

```typescript
const value: models.PipelineFunctionNotificationPolicies = {
  id: "notification_policies",
  conf: {},
};
```

### `models.PipelineFunctionNotifications`

```typescript
const value: models.PipelineFunctionNotifications = {
  id: "notifications",
  conf: {
    id: "<id>",
    field: "<value>",
    deduplicate: false,
  },
};
```

### `models.PipelineFunctionNotify`

```typescript
const value: models.PipelineFunctionNotify = {
  id: "notify",
  conf: {
    group: "<value>",
    notificationId: "<id>",
    searchId: "<id>",
    savedQueryId: "<id>",
    searchUrl: "https://pretty-remark.info",
    authToken: "<value>",
    messagesEndpoint: "<value>",
  },
};
```

### `models.PipelineFunctionNumerify`

```typescript
const value: models.PipelineFunctionNumerify = {
  id: "numerify",
  conf: {
    format: "fix",
  },
};
```

### `models.PipelineFunctionOtlpLogs`

```typescript
const value: models.PipelineFunctionOtlpLogs = {
  id: "otlp_logs",
  conf: {},
};
```

### `models.PipelineFunctionOtlpMetrics`

```typescript
const value: models.PipelineFunctionOtlpMetrics = {
  id: "otlp_metrics",
  conf: {},
};
```

### `models.PipelineFunctionOtlpTraces`

```typescript
const value: models.PipelineFunctionOtlpTraces = {
  id: "otlp_traces",
  conf: {},
};
```

### `models.PipelineFunctionPack`

```typescript
const value: models.PipelineFunctionPack = {
  id: "pack",
  conf: {
    unpackedFields: [
      "<value 1>",
    ],
  },
};
```

### `models.PipelineFunctionPivot`

```typescript
const value: models.PipelineFunctionPivot = {
  id: "pivot",
  conf: {
    labelField: "<value>",
    dataFields: [
      "<value 1>",
      "<value 2>",
    ],
    qualifierFields: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

### `models.PipelineFunctionPublishMetrics`

```typescript
const value: models.PipelineFunctionPublishMetrics = {
  id: "publish_metrics",
  conf: {},
};
```

### `models.PipelineFunctionRedis`

```typescript
const value: models.PipelineFunctionRedis = {
  id: "redis",
  conf: {
    authType: "manual",
    password: "ZdUzJAX0UGwLJyM",
    commands: [
      {
        command: "<value>",
        keyExpr: "<value>",
      },
    ],
  },
};
```

### `models.PipelineFunctionRegexExtract`

```typescript
const value: models.PipelineFunctionRegexExtract = {
  id: "regex_extract",
  conf: {
    regex: "<value>",
  },
};
```

### `models.PipelineFunctionRegexFilter`

```typescript
const value: models.PipelineFunctionRegexFilter = {
  id: "regex_filter",
  conf: {},
};
```

### `models.PipelineFunctionRename`

```typescript
const value: models.PipelineFunctionRename = {
  id: "rename",
  conf: {},
};
```

### `models.PipelineFunctionRollupMetrics`

```typescript
const value: models.PipelineFunctionRollupMetrics = {
  id: "rollup_metrics",
  conf: {},
};
```

### `models.PipelineFunctionSampling`

```typescript
const value: models.PipelineFunctionSampling = {
  id: "sampling",
  conf: {},
};
```

### `models.PipelineFunctionSend`

```typescript
const value: models.PipelineFunctionSend = {
  id: "send",
  conf: {
    searchId: "<id>",
  },
};
```

### `models.PipelineFunctionSensitiveDataScanner`

```typescript
const value: models.PipelineFunctionSensitiveDataScanner = {
  id: "sensitive_data_scanner",
  conf: {
    rules: [
      {
        rulesetId: "<id>",
        replaceExpr: "<value>",
      },
    ],
  },
};
```

### `models.PipelineFunctionSerde`

```typescript
const value: models.PipelineFunctionSerde = {
  id: "serde",
  conf: {
    type: "delim",
    mode: "extract",
  },
};
```

### `models.PipelineFunctionSerialize`

```typescript
const value: models.PipelineFunctionSerialize = {
  id: "serialize",
  conf: {
    type: "csv",
  },
};
```

### `models.PipelineFunctionSidlookup`

```typescript
const value: models.PipelineFunctionSidlookup = {
  id: "sidlookup",
  conf: {},
};
```

### `models.PipelineFunctionSignalFilter`

```typescript
const value: models.PipelineFunctionSignalFilter = {
  id: "signal_filter",
  conf: {},
};
```

### `models.PipelineFunctionSnmpTrapSerialize`

```typescript
const value: models.PipelineFunctionSnmpTrapSerialize = {
  id: "snmp_trap_serialize",
  conf: {},
};
```

### `models.PipelineFunctionSort`

```typescript
const value: models.PipelineFunctionSort = {
  id: "sort",
  conf: {
    comparisonExpression: "<value>",
  },
};
```

### `models.PipelineFunctionStore`

```typescript
const value: models.PipelineFunctionStore = {
  id: "store",
  conf: {
    type: "<value>",
  },
};
```

### `models.PipelineFunctionSuppress`

```typescript
const value: models.PipelineFunctionSuppress = {
  id: "suppress",
  conf: {
    keyExpr: "<value>",
    allow: 418.27,
    suppressPeriodSec: 7298.66,
  },
};
```

### `models.PipelineFunctionTee`

```typescript
const value: models.PipelineFunctionTee = {
  id: "tee",
  conf: {
    command: "<value>",
  },
};
```

### `models.PipelineFunctionTrimTimestamp`

```typescript
const value: models.PipelineFunctionTrimTimestamp = {
  id: "trim_timestamp",
  conf: {},
};
```

### `models.PipelineFunctionUnion`

```typescript
const value: models.PipelineFunctionUnion = {
  id: "union",
  conf: {
    searchJobId: "<id>",
    stageIds: [],
  },
};
```

### `models.PipelineFunctionUnroll`

```typescript
const value: models.PipelineFunctionUnroll = {
  id: "unroll",
  conf: {
    srcExpr: "<value>",
    dstField: "<value>",
  },
};
```

### `models.PipelineFunctionWindow`

```typescript
const value: models.PipelineFunctionWindow = {
  id: "window",
  conf: {
    eventWindowId: 5130.28,
    registeredFunctions: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

### `models.PipelineFunctionXmlUnroll`

```typescript
const value: models.PipelineFunctionXmlUnroll = {
  id: "xml_unroll",
  conf: {
    unroll: "<value>",
  },
};
```


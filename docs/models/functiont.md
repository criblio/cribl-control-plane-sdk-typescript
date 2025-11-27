# FunctionT


## Supported Types

### `models.FunctionAggregateMetrics`

```typescript
const value: models.FunctionAggregateMetrics = {
  conf: {
    prefix: "<value>",
    aggregations: [
      {
        agg: "<value>",
      },
    ],
    groupbys: [
      "<value 1>",
    ],
    flushEventLimit: 4413.95,
    flushMemLimit: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "aggregate_metrics",
  initTime: 9819.96,
  loadTime: 500.14,
  modTime: 4439.43,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionAggregation`

```typescript
const value: models.FunctionAggregation = {
  conf: {
    prefix: "<value>",
    aggregations: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    groupbys: [
      "<value 1>",
      "<value 2>",
    ],
    flushEventLimit: 1514.56,
    flushMemLimit: "<value>",
    searchAggMode: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "aggregation",
  initTime: 5703.38,
  loadTime: 5971.36,
  modTime: 7424.77,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionAutoTimestamp`

```typescript
const value: models.FunctionAutoTimestamp = {
  conf: {
    spacer: "<value>",
    timestamps: [
      {
        regex: "<value>",
        strptime: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "auto_timestamp",
  initTime: 1982.4,
  loadTime: 3302.62,
  modTime: 2322.66,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionCef`

```typescript
const value: models.FunctionCef = {
  conf: {
    header: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    extension: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "cef",
  initTime: 3878.51,
  loadTime: 5556.48,
  modTime: 339.21,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionChain`

```typescript
const value: models.FunctionChain = {
  conf: {
    processor: "<value>",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "chain",
  initTime: 7341.94,
  loadTime: 2917.6,
  modTime: 5516.27,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionClone`

```typescript
const value: models.FunctionClone = {
  conf: {
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
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "clone",
  initTime: 5152.39,
  loadTime: 8081.74,
  modTime: 353.86,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionCode`

```typescript
const value: models.FunctionCode = {
  conf: {
    code: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "code",
  initTime: 6444.78,
  loadTime: 4700.88,
  modTime: 1247.74,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionComment`

```typescript
const value: models.FunctionComment = {
  conf: {
    comment:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "comment",
  initTime: 226.92,
  loadTime: 2940.69,
  modTime: 5047.79,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionDistinct`

```typescript
const value: models.FunctionDistinct = {
  conf: {
    groupBy: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    suppressPreviews: false,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "distinct",
  initTime: 1222.59,
  loadTime: 6674.53,
  modTime: 4760.12,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionDnsLookup`

```typescript
const value: models.FunctionDnsLookup = {
  conf: {
    dnsLookupFields: [
      {
        inFieldName: "<value>",
        outFieldName: "<value>",
      },
    ],
    reverseLookupFields: [
      {
        inFieldName: "<value>",
        outFieldName: "<value>",
      },
    ],
    dnsServers: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    domainOverrides: [
      "<value 1>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "dns_lookup",
  initTime: 3614.94,
  loadTime: 6338.43,
  modTime: 1015.99,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionDrop`

```typescript
const value: models.FunctionDrop = {
  conf: {},
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "drop",
  initTime: 5321.61,
  loadTime: 1163.67,
  modTime: 7510.87,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionDropDimensions`

```typescript
const value: models.FunctionDropDimensions = {
  conf: {
    dropDimensions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "drop_dimensions",
  initTime: 7629.2,
  loadTime: 2190.54,
  modTime: 1816.44,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionDynamicSampling`

```typescript
const value: models.FunctionDynamicSampling = {
  conf: {},
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "dynamic_sampling",
  initTime: 5208.81,
  loadTime: 3268.99,
  modTime: 6490.45,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionEval`

```typescript
const value: models.FunctionEval = {
  conf: {
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    keep: [
      "<value 1>",
      "<value 2>",
    ],
    remove: [
      "<value 1>",
      "<value 2>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "eval",
  initTime: 7444.44,
  loadTime: 1602.52,
  modTime: 6426.98,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionEventBreaker`

```typescript
const value: models.FunctionEventBreaker = {
  conf: {},
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "event_breaker",
  initTime: 9387.52,
  loadTime: 7376.82,
  modTime: 9290.78,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionExternaldata`

```typescript
const value: models.FunctionExternaldata = {
  conf: {},
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "externaldata",
  initTime: 7766.92,
  loadTime: 8635.32,
  modTime: 3395.47,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionFlatten`

```typescript
const value: models.FunctionFlatten = {
  conf: {
    fields: [
      "<value 1>",
      "<value 2>",
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "flatten",
  initTime: 8291.43,
  loadTime: 5805.1,
  modTime: 750.5,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionFoldkeys`

```typescript
const value: models.FunctionFoldkeys = {
  conf: {
    selectionRegExp: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "foldkeys",
  initTime: 5700.1,
  loadTime: 794.13,
  modTime: 4361.43,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionGenStats`

```typescript
const value: models.FunctionGenStats = {
  conf: {
    fields: [
      "<value 1>",
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "gen_stats",
  initTime: 2456.71,
  loadTime: 1067.22,
  modTime: 9199.44,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionGeoip`

```typescript
const value: models.FunctionGeoip = {
  conf: {
    file: "<value>",
    additionalFields: [
      {
        extraInField: "<value>",
        extraOutField: "<value>",
      },
    ],
    outFieldMappings: {},
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "geoip",
  initTime: 3251.53,
  loadTime: 9944.79,
  modTime: 720.66,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionGrok`

```typescript
const value: models.FunctionGrok = {
  conf: {
    pattern: "<value>",
    patternList: [
      {
        pattern: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "grok",
  initTime: 5934.68,
  loadTime: 2369.05,
  modTime: 9780.21,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionJsonUnroll`

```typescript
const value: models.FunctionJsonUnroll = {
  conf: {
    path: "/usr",
    name: "<value>",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "json_unroll",
  initTime: 410,
  loadTime: 936.94,
  modTime: 292.6,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionLakeExport`

```typescript
const value: models.FunctionLakeExport = {
  conf: {
    searchJobId: "<id>",
    dataset: "<value>",
    suppressPreviews: true,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "lake_export",
  initTime: 2736.16,
  loadTime: 9866.68,
  modTime: 2804.33,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionLimit`

```typescript
const value: models.FunctionLimit = {
  conf: {},
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "limit",
  initTime: 247.31,
  loadTime: 3640.8,
  modTime: 7176.7,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionLocalSearchDatatypeParser`

```typescript
const value: models.FunctionLocalSearchDatatypeParser = {
  conf: {
    rulesetId: "<id>",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "local_search_datatype_parser",
  initTime: 697.16,
  loadTime: 1455.04,
  modTime: 2337.59,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionLocalSearchRulesetRunner`

```typescript
const value: models.FunctionLocalSearchRulesetRunner = {
  conf: {
    rulesetType: "datatype",
    rulesetId: "<id>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "local_search_ruleset_runner",
  initTime: 8924.58,
  loadTime: 95.2,
  modTime: 7621.53,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionLookup`

```typescript
const value: models.FunctionLookup = {
  conf: {
    file: "<value>",
    matchMode: "<value>",
    matchType: "<value>",
    reloadPeriodSec: "<value>",
    inFields: [
      {
        eventField: "<value>",
        lookupField: "<value>",
      },
    ],
    outFields: [
      {
        lookupField: "<value>",
        eventField: "<value>",
        defaultValue: "<value>",
      },
    ],
    ignoreCase: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "lookup",
  initTime: 3934.35,
  loadTime: 9906.53,
  modTime: 8031.47,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionMask`

```typescript
const value: models.FunctionMask = {
  conf: {
    rules: [
      {
        matchRegex: "<value>",
      },
    ],
    fields: [
      "<value 1>",
      "<value 2>",
    ],
    flags: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "mask",
  initTime: 1580.31,
  loadTime: 4015.36,
  modTime: 4791.96,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionMvExpand`

```typescript
const value: models.FunctionMvExpand = {
  conf: {
    sourceFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    targetNames: [
      "<value 1>",
    ],
    itemIndexName: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "mv_expand",
  initTime: 3002.28,
  loadTime: 9375.71,
  modTime: 3600.5,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionMvPull`

```typescript
const value: models.FunctionMvPull = {
  conf: {
    arrayPath: "<value>",
    relativeKeyPath: "<value>",
    relativeValuePath: "<value>",
    targetBagPath: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "mv_pull",
  initTime: 8977.14,
  loadTime: 2479.08,
  modTime: 5044.4,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionNotifications`

```typescript
const value: models.FunctionNotifications = {
  conf: {
    id: "<id>",
    field: "<value>",
    deduplicate: true,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "notifications",
  initTime: 2119.14,
  loadTime: 6100.69,
  modTime: 4723.54,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionNotify`

```typescript
const value: models.FunctionNotify = {
  conf: {
    searchId: "<id>",
    savedQueryId: "<id>",
    trigger: "<value>",
    triggerType: "custom",
    triggerComparator: "===",
    searchUrl: "https://awful-dash.org",
    message: "<value>",
    authToken: "<value>",
    messagesEndpoint: "<value>",
    tenantId: "<id>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "notify",
  initTime: 7810.74,
  loadTime: 6155.35,
  modTime: 5120.74,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionNumerify`

```typescript
const value: models.FunctionNumerify = {
  conf: {
    ignoreFields: [
      "<value 1>",
    ],
    filterExpr: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "numerify",
  initTime: 1331.47,
  loadTime: 3917.82,
  modTime: 4389.83,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionOtlpLogs`

```typescript
const value: models.FunctionOtlpLogs = {
  conf: {},
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "otlp_logs",
  initTime: 6137.12,
  loadTime: 6994.92,
  modTime: 7102.91,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionOtlpMetrics`

```typescript
const value: models.FunctionOtlpMetrics = {
  conf: {
    resourceAttributePrefixes: [
      "<value 1>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "otlp_metrics",
  initTime: 1143.64,
  loadTime: 3598.47,
  modTime: 2838.68,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionOtlpTraces`

```typescript
const value: models.FunctionOtlpTraces = {
  conf: {},
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "otlp_traces",
  initTime: 5868.43,
  loadTime: 5015.1,
  modTime: 8099.62,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionPack`

```typescript
const value: models.FunctionPack = {
  conf: {
    unpackedFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "pack",
  initTime: 4722.8,
  loadTime: 2265.69,
  modTime: 1300.66,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionPivot`

```typescript
const value: models.FunctionPivot = {
  conf: {
    labelField: "<value>",
    dataFields: [
      "<value 1>",
    ],
    qualifierFields: [
      "<value 1>",
      "<value 2>",
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "pivot",
  initTime: 3520.47,
  loadTime: 4909.49,
  modTime: 545.45,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionPublishMetrics`

```typescript
const value: models.FunctionPublishMetrics = {
  conf: {
    fields: [
      {
        inFieldName: "<value>",
        outFieldExpr: "<value>",
      },
    ],
    dimensions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    removeMetrics: [
      "<value 1>",
      "<value 2>",
    ],
    removeDimensions: [
      "<value 1>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "publish_metrics",
  initTime: 4815.9,
  loadTime: 729.4,
  modTime: 1117.74,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionRedis`

```typescript
const value: models.FunctionRedis = {
  conf: {
    commands: [],
    enableClientSideCaching: true,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "redis",
  initTime: 1926.38,
  loadTime: 768.23,
  modTime: 4852.66,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionRegexExtract`

```typescript
const value: models.FunctionRegexExtract = {
  conf: {
    regex: "<value>",
    regexList: [
      {
        regex: "<value>",
      },
    ],
    fieldNameExpression: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "regex_extract",
  initTime: 9053.96,
  loadTime: 3106.46,
  modTime: 3987.19,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionRegexFilter`

```typescript
const value: models.FunctionRegexFilter = {
  conf: {
    regex: "<value>",
    regexList: [
      {
        regex: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "regex_filter",
  initTime: 8988.05,
  loadTime: 5786.78,
  modTime: 3109.56,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionRename`

```typescript
const value: models.FunctionRename = {
  conf: {
    baseFields: [
      "<value 1>",
    ],
    rename: [
      {
        currentName: "<value>",
        newName: "<value>",
      },
    ],
    renameExpr: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "rename",
  initTime: 9777.9,
  loadTime: 1884.28,
  modTime: 991.32,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionRollupMetrics`

```typescript
const value: models.FunctionRollupMetrics = {
  conf: {
    dimensions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "rollup_metrics",
  initTime: 2632.51,
  loadTime: 9614.97,
  modTime: 5303.67,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionSampling`

```typescript
const value: models.FunctionSampling = {
  conf: {
    rules: [
      {},
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "sampling",
  initTime: 3413.17,
  loadTime: 9830.65,
  modTime: 2657.5,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionSensitiveDataScanner`

```typescript
const value: models.FunctionSensitiveDataScanner = {
  conf: {
    rules: [],
    fields: [
      "<value 1>",
      "<value 2>",
    ],
    excludeFields: [
      "<value 1>",
    ],
    flags: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "sensitive_data_scanner",
  initTime: 8518.62,
  loadTime: 3568.24,
  modTime: 4851.06,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionSerde`

```typescript
const value: models.FunctionSerde = {
  conf: {
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    dstField: "<value>",
    cleanFields: "<value>",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "serde",
  initTime: 6884.35,
  loadTime: 5978.8,
  modTime: 7488.44,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionSerialize`

```typescript
const value: models.FunctionSerialize = {
  conf: {
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    fields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    srcField: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "serialize",
  initTime: 6774.24,
  loadTime: 4550.45,
  modTime: 7814.2,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionSidlookup`

```typescript
const value: models.FunctionSidlookup = {
  conf: {
    fields: [
      {
        name: "<value>",
        expr: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "sidlookup",
  initTime: 2280.82,
  loadTime: 6818.12,
  modTime: 2006.3,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionSort`

```typescript
const value: models.FunctionSort = {
  conf: {
    sortId: "<id>",
    comparisonExpression: "<value>",
    topN: 4827.88,
    maxEvents: 1053.28,
    suppressPreviews: true,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "sort",
  initTime: 3061.75,
  loadTime: 1649.8,
  modTime: 4259.1,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionStore`

```typescript
const value: models.FunctionStore = {
  conf: {
    destination: "<value>",
    description: "home once platypus",
    fieldMapping: {},
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "store",
  initTime: 7269.06,
  loadTime: 909.01,
  modTime: 8703.71,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionSuppress`

```typescript
const value: models.FunctionSuppress = {
  conf: {
    keyExpr: "<value>",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "suppress",
  initTime: 4533.03,
  loadTime: 9998.57,
  modTime: 4311.27,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionTee`

```typescript
const value: models.FunctionTee = {
  conf: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
    ],
    env: {
      "key": "<value>",
    },
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "tee",
  initTime: 7605.35,
  loadTime: 4994.36,
  modTime: 547.47,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionTrimTimestamp`

```typescript
const value: models.FunctionTrimTimestamp = {
  conf: {
    field: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "trim_timestamp",
  initTime: 3003.7,
  loadTime: 7209.06,
  modTime: 9909.57,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionUnion`

```typescript
const value: models.FunctionUnion = {
  conf: {
    searchJobId: "<id>",
    stageIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "union",
  initTime: 2900.49,
  loadTime: 9577.82,
  modTime: 8854.5,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionUnroll`

```typescript
const value: models.FunctionUnroll = {
  conf: {},
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "unroll",
  initTime: 5472.87,
  loadTime: 102.03,
  modTime: 9015.71,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

### `models.FunctionWindow`

```typescript
const value: models.FunctionWindow = {
  conf: {
    eventWindowId: 4593.24,
    registeredFunctions: [
      "<value 1>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "window",
  initTime: 4433.83,
  loadTime: 7908.96,
  modTime: 2912.05,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

### `models.FunctionXmlUnroll`

```typescript
const value: models.FunctionXmlUnroll = {
  conf: {
    unroll: "<value>",
    inherit: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "xml_unroll",
  initTime: 6048.36,
  loadTime: 9165.86,
  modTime: 5577.38,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```


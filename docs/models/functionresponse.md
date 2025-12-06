# FunctionResponse


## Supported Types

### `models.FunctionAggregateMetrics`

```typescript
const value: models.FunctionAggregateMetrics = {
  filename: "example.file",
  asyncTimeout: 9195.61,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "aggregate_metrics",
  loadTime: 8650.04,
  modTime: 9819.96,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    prefix: "<value>",
    aggregations: [
      {
        agg: "<value>",
      },
    ],
    groupbys: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    flushEventLimit: 956.12,
    flushMemLimit: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

### `models.FunctionAggregation`

```typescript
const value: models.FunctionAggregation = {
  filename: "example.file",
  asyncTimeout: 7917.59,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "aggregation",
  loadTime: 7102.72,
  modTime: 5703.38,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    prefix: "<value>",
    aggregations: [
      "<value 1>",
      "<value 2>",
    ],
    groupbys: [
      "<value 1>",
      "<value 2>",
    ],
    flushEventLimit: 956.07,
    flushMemLimit: "<value>",
    searchAggMode: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

### `models.FunctionAutoTimestamp`

```typescript
const value: models.FunctionAutoTimestamp = {
  filename: "example.file",
  asyncTimeout: 3412.89,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "auto_timestamp",
  loadTime: 2322.66,
  modTime: 1347.26,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    spacer: "<value>",
    timestamps: [
      {
        regex: "<value>",
        strptime: "<value>",
      },
    ],
  },
};
```

### `models.FunctionCef`

```typescript
const value: models.FunctionCef = {
  filename: "example.file",
  asyncTimeout: 6108.55,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "cef",
  loadTime: 339.21,
  modTime: 515.96,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
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
};
```

### `models.FunctionChain`

```typescript
const value: models.FunctionChain = {
  filename: "example.file",
  asyncTimeout: 7137.72,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "chain",
  loadTime: 5516.27,
  modTime: 8422.73,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    processor: "<value>",
  },
};
```

### `models.FunctionClone`

```typescript
const value: models.FunctionClone = {
  filename: "example.file",
  asyncTimeout: 8448.96,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "clone",
  loadTime: 6647.33,
  modTime: 8379.67,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    clones: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    ],
  },
};
```

### `models.FunctionCode`

```typescript
const value: models.FunctionCode = {
  filename: "example.file",
  asyncTimeout: 1570.95,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "code",
  loadTime: 1247.74,
  modTime: 2997.82,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    code: "<value>",
  },
};
```

### `models.FunctionComment`

```typescript
const value: models.FunctionComment = {
  filename: "example.file",
  asyncTimeout: 5446.2,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "comment",
  loadTime: 5047.79,
  modTime: 5.96,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    comment:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  },
};
```

### `models.FunctionDistinct`

```typescript
const value: models.FunctionDistinct = {
  filename: "example.file",
  asyncTimeout: 8471.89,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "distinct",
  loadTime: 1222.59,
  modTime: 6674.53,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    groupBy: [
      "<value 1>",
      "<value 2>",
    ],
    suppressPreviews: true,
  },
};
```

### `models.FunctionDnsLookup`

```typescript
const value: models.FunctionDnsLookup = {
  filename: "example.file",
  asyncTimeout: 8310.14,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "dns_lookup",
  loadTime: 3614.94,
  modTime: 6338.43,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
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
    ],
    domainOverrides: [
      "<value 1>",
    ],
  },
};
```

### `models.FunctionDrop`

```typescript
const value: models.FunctionDrop = {
  filename: "example.file",
  asyncTimeout: 7169.86,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "drop",
  loadTime: 7510.87,
  modTime: 74.1,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {},
};
```

### `models.FunctionDropDimensions`

```typescript
const value: models.FunctionDropDimensions = {
  filename: "example.file",
  asyncTimeout: 8672.88,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "drop_dimensions",
  loadTime: 2190.54,
  modTime: 1816.44,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    dropDimensions: [
      "<value 1>",
    ],
  },
};
```

### `models.FunctionDynamicSampling`

```typescript
const value: models.FunctionDynamicSampling = {
  filename: "example.file",
  asyncTimeout: 2144.07,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "dynamic_sampling",
  loadTime: 6490.45,
  modTime: 1373.57,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {},
};
```

### `models.FunctionEval`

```typescript
const value: models.FunctionEval = {
  filename: "example.file",
  asyncTimeout: 5706.24,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "eval",
  loadTime: 7444.44,
  modTime: 1602.52,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
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
};
```

### `models.FunctionEventBreaker`

```typescript
const value: models.FunctionEventBreaker = {
  filename: "example.file",
  asyncTimeout: 7188.7,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "event_breaker",
  loadTime: 9290.78,
  modTime: 8428.64,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {},
};
```

### `models.FunctionEventstats`

```typescript
const value: models.FunctionEventstats = {
  filename: "example.file",
  asyncTimeout: 8029.93,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "eventstats",
  loadTime: 8121.28,
  modTime: 7536.93,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    aggregations: [
      "<value 1>",
    ],
    groupBys: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

### `models.FunctionExternaldata`

```typescript
const value: models.FunctionExternaldata = {
  filename: "example.file",
  asyncTimeout: 2130.05,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "externaldata",
  loadTime: 3395.47,
  modTime: 3451.45,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {},
};
```

### `models.FunctionFlatten`

```typescript
const value: models.FunctionFlatten = {
  filename: "example.file",
  asyncTimeout: 4624.4,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "flatten",
  loadTime: 5805.1,
  modTime: 750.5,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    fields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

### `models.FunctionFoldkeys`

```typescript
const value: models.FunctionFoldkeys = {
  filename: "example.file",
  asyncTimeout: 2686.01,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "foldkeys",
  loadTime: 4361.43,
  modTime: 2493.02,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    selectionRegExp: "<value>",
  },
};
```

### `models.FunctionGenStats`

```typescript
const value: models.FunctionGenStats = {
  filename: "example.file",
  asyncTimeout: 3025.75,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "gen_stats",
  loadTime: 1067.22,
  modTime: 9199.44,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    fields: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

### `models.FunctionGeoip`

```typescript
const value: models.FunctionGeoip = {
  filename: "example.file",
  asyncTimeout: 7349.9,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "geoip",
  loadTime: 720.66,
  modTime: 3556.8,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    file: "<value>",
    additionalFields: [
      {
        extraInField: "<value>",
        extraOutField: "<value>",
      },
    ],
    outFieldMappings: {},
  },
};
```

### `models.FunctionGrok`

```typescript
const value: models.FunctionGrok = {
  filename: "example.file",
  asyncTimeout: 2211.17,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "grok",
  loadTime: 9780.21,
  modTime: 4960.19,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    pattern: "<value>",
    patternList: [
      {
        pattern: "<value>",
      },
    ],
  },
};
```

### `models.FunctionHandlebar`

```typescript
const value: models.FunctionHandlebar = {
  filename: "example.file",
  asyncTimeout: 7688.22,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "handlebar",
  loadTime: 599,
  modTime: 8171.36,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    templates: {
      "key": {
        content: "<value>",
        description: "and what appropriate singe within although configuration",
      },
    },
  },
};
```

### `models.FunctionJoin`

```typescript
const value: models.FunctionJoin = {
  filename: "example.file",
  asyncTimeout: 3529.61,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "join",
  loadTime: 7143.87,
  modTime: 821.81,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    kind: "<value>",
    hints: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    fieldConditions: [
      {
        leftFieldName: "<value>",
        rightFieldName: "<value>",
      },
    ],
    searchJobId: "<id>",
    stageId: "<id>",
  },
};
```

### `models.FunctionJsonUnroll`

```typescript
const value: models.FunctionJsonUnroll = {
  filename: "example.file",
  asyncTimeout: 6785.72,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "json_unroll",
  loadTime: 936.94,
  modTime: 292.6,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    path: "/var/tmp",
    name: "<value>",
  },
};
```

### `models.FunctionLakeExport`

```typescript
const value: models.FunctionLakeExport = {
  filename: "example.file",
  asyncTimeout: 1375.34,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "lake_export",
  loadTime: 9866.68,
  modTime: 2804.33,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    searchJobId: "<id>",
    dataset: "<value>",
    suppressPreviews: true,
  },
};
```

### `models.FunctionLimit`

```typescript
const value: models.FunctionLimit = {
  filename: "example.file",
  asyncTimeout: 7993.11,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "limit",
  loadTime: 7176.7,
  modTime: 8633.66,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {},
};
```

### `models.FunctionLocalSearchDatatypeParser`

```typescript
const value: models.FunctionLocalSearchDatatypeParser = {
  filename: "example.file",
  asyncTimeout: 9827.97,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "local_search_datatype_parser",
  loadTime: 2337.59,
  modTime: 7250.32,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    rulesetId: "<id>",
  },
};
```

### `models.FunctionLocalSearchRulesetRunner`

```typescript
const value: models.FunctionLocalSearchRulesetRunner = {
  filename: "example.file",
  asyncTimeout: 9962.28,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "local_search_ruleset_runner",
  loadTime: 95.2,
  modTime: 7621.53,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    rulesetType: "datatype",
    rulesetId: "<id>",
  },
};
```

### `models.FunctionLookup`

```typescript
const value: models.FunctionLookup = {
  filename: "example.file",
  asyncTimeout: 2465.37,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "lookup",
  loadTime: 8031.47,
  modTime: 8407.32,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
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
};
```

### `models.FunctionMask`

```typescript
const value: models.FunctionMask = {
  filename: "example.file",
  asyncTimeout: 8419.45,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "mask",
  loadTime: 1580.31,
  modTime: 4015.36,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    rules: [],
    fields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    flags: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

### `models.FunctionMvExpand`

```typescript
const value: models.FunctionMvExpand = {
  filename: "example.file",
  asyncTimeout: 8384.22,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "mv_expand",
  loadTime: 3002.28,
  modTime: 9375.71,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    sourceFields: [
      "<value 1>",
    ],
    targetNames: [
      "<value 1>",
    ],
    itemIndexName: "<value>",
  },
};
```

### `models.FunctionMvPull`

```typescript
const value: models.FunctionMvPull = {
  filename: "example.file",
  asyncTimeout: 4318.2,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "mv_pull",
  loadTime: 5044.4,
  modTime: 7519.04,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    arrayPath: "<value>",
    relativeKeyPath: "<value>",
    relativeValuePath: "<value>",
    targetBagPath: "<value>",
  },
};
```

### `models.FunctionNotifications`

```typescript
const value: models.FunctionNotifications = {
  filename: "example.file",
  asyncTimeout: 756.05,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "notifications",
  loadTime: 6100.69,
  modTime: 4723.54,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    id: "<id>",
    field: "<value>",
    deduplicate: true,
  },
};
```

### `models.FunctionNotify`

```typescript
const value: models.FunctionNotify = {
  filename: "example.file",
  asyncTimeout: 1105.87,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "notify",
  loadTime: 547.8,
  modTime: 2195.7,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    searchId: "<id>",
    savedQueryId: "<id>",
    trigger: "<value>",
    triggerType: "resultsCount",
    triggerComparator: "!==",
    searchUrl: "https://caring-decision.name",
    message: "<value>",
    authToken: "<value>",
    messagesEndpoint: "<value>",
    tenantId: "<id>",
  },
};
```

### `models.FunctionNumerify`

```typescript
const value: models.FunctionNumerify = {
  filename: "example.file",
  asyncTimeout: 1176.16,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "numerify",
  loadTime: 3917.82,
  modTime: 4389.83,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    ignoreFields: [
      "<value 1>",
    ],
    filterExpr: "<value>",
  },
};
```

### `models.FunctionOtlpLogs`

```typescript
const value: models.FunctionOtlpLogs = {
  filename: "example.file",
  asyncTimeout: 3875.32,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "otlp_logs",
  loadTime: 7102.91,
  modTime: 6996.73,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {},
};
```

### `models.FunctionOtlpMetrics`

```typescript
const value: models.FunctionOtlpMetrics = {
  filename: "example.file",
  asyncTimeout: 2251.51,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "otlp_metrics",
  loadTime: 3598.47,
  modTime: 2838.68,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
    resourceAttributePrefixes: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

### `models.FunctionOtlpTraces`

```typescript
const value: models.FunctionOtlpTraces = {
  filename: "example.file",
  asyncTimeout: 8088.34,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "otlp_traces",
  loadTime: 8099.62,
  modTime: 2383.72,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {},
};
```

### `models.FunctionPack`

```typescript
const value: models.FunctionPack = {
  filename: "example.file",
  asyncTimeout: 8176.6,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "pack",
  loadTime: 2265.69,
  modTime: 1300.66,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    unpackedFields: [],
  },
};
```

### `models.FunctionPivot`

```typescript
const value: models.FunctionPivot = {
  filename: "example.file",
  asyncTimeout: 3354.7,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "pivot",
  loadTime: 3520.47,
  modTime: 4909.49,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    labelField: "<value>",
    dataFields: [
      "<value 1>",
      "<value 2>",
    ],
    qualifierFields: [],
  },
};
```

### `models.FunctionPublishMetrics`

```typescript
const value: models.FunctionPublishMetrics = {
  filename: "example.file",
  asyncTimeout: 7718.35,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "publish_metrics",
  loadTime: 3710.5,
  modTime: 4815.9,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
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
      "<value 3>",
    ],
    removeDimensions: [
      "<value 1>",
    ],
  },
};
```

### `models.FunctionRedis`

```typescript
const value: models.FunctionRedis = {
  filename: "example.file",
  asyncTimeout: 2267.56,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "redis",
  loadTime: 1926.38,
  modTime: 768.23,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    commands: [],
    enableClientSideCaching: false,
  },
};
```

### `models.FunctionRegexExtract`

```typescript
const value: models.FunctionRegexExtract = {
  filename: "example.file",
  asyncTimeout: 4835.31,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "regex_extract",
  loadTime: 3987.19,
  modTime: 124.29,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    regex: "<value>",
    regexList: [
      {
        regex: "<value>",
      },
    ],
    fieldNameExpression: "<value>",
  },
};
```

### `models.FunctionRegexFilter`

```typescript
const value: models.FunctionRegexFilter = {
  filename: "example.file",
  asyncTimeout: 5697.57,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "regex_filter",
  loadTime: 3109.56,
  modTime: 9803.88,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    regex: "<value>",
    regexList: [
      {
        regex: "<value>",
      },
    ],
  },
};
```

### `models.FunctionRename`

```typescript
const value: models.FunctionRename = {
  filename: "example.file",
  asyncTimeout: 2336.89,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "rename",
  loadTime: 1884.28,
  modTime: 991.32,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
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
};
```

### `models.FunctionRollupMetrics`

```typescript
const value: models.FunctionRollupMetrics = {
  filename: "example.file",
  asyncTimeout: 9783.75,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "rollup_metrics",
  loadTime: 9614.97,
  modTime: 5303.67,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    dimensions: [
      "<value 1>",
    ],
  },
};
```

### `models.FunctionSampling`

```typescript
const value: models.FunctionSampling = {
  filename: "example.file",
  asyncTimeout: 6318.17,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "sampling",
  loadTime: 2657.5,
  modTime: 2561.69,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    rules: [
      {},
    ],
  },
};
```

### `models.FunctionSend`

```typescript
const value: models.FunctionSend = {
  filename: "example.file",
  asyncTimeout: 6106.71,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "send",
  loadTime: 171.47,
  modTime: 5706.19,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    url: "https://somber-feather.name",
    sendUrlTemplate: "<value>",
    searchId: "<id>",
    suppressPreviews: false,
    mode: "metrics",
  },
};
```

### `models.FunctionSensitiveDataScanner`

```typescript
const value: models.FunctionSensitiveDataScanner = {
  filename: "example.file",
  asyncTimeout: 3199.53,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "sensitive_data_scanner",
  loadTime: 6113.55,
  modTime: 8518.62,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
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
};
```

### `models.FunctionSerde`

```typescript
const value: models.FunctionSerde = {
  filename: "example.file",
  asyncTimeout: 7712.14,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "serde",
  loadTime: 7488.44,
  modTime: 5208.3,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    dstField: "<value>",
    cleanFields: "<value>",
  },
};
```

### `models.FunctionSerialize`

```typescript
const value: models.FunctionSerialize = {
  filename: "example.file",
  asyncTimeout: 7303.27,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "serialize",
  loadTime: 4550.45,
  modTime: 7814.2,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    fields: [
      "<value 1>",
    ],
    srcField: "<value>",
  },
};
```

### `models.FunctionSidlookup`

```typescript
const value: models.FunctionSidlookup = {
  filename: "example.file",
  asyncTimeout: 8789.17,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "sidlookup",
  loadTime: 2006.3,
  modTime: 5999.5,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    fields: [
      {
        name: "<value>",
        expr: "<value>",
      },
    ],
  },
};
```

### `models.FunctionSnmpTrapSerialize`

```typescript
const value: models.FunctionSnmpTrapSerialize = {
  filename: "example.file",
  asyncTimeout: 3177.3,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "snmp_trap_serialize",
  loadTime: 9112.65,
  modTime: 7663.12,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    v3User: {
      name: "<value>",
      authKey: "<value>",
    },
  },
};
```

### `models.FunctionSort`

```typescript
const value: models.FunctionSort = {
  filename: "example.file",
  asyncTimeout: 4827.88,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "sort",
  loadTime: 1943.19,
  modTime: 3061.75,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    sortId: "<id>",
    comparisonExpression: "<value>",
    topN: 5324.59,
    maxEvents: 8600.95,
    suppressPreviews: true,
  },
};
```

### `models.FunctionStore`

```typescript
const value: models.FunctionStore = {
  filename: "example.file",
  asyncTimeout: 1052.71,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "store",
  loadTime: 6678.2,
  modTime: 3006.47,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    destination: "<value>",
    description: "once platypus huddle dreamily deployment potentially",
    fieldMapping: {},
  },
};
```

### `models.FunctionSuppress`

```typescript
const value: models.FunctionSuppress = {
  filename: "example.file",
  asyncTimeout: 8009.67,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "suppress",
  loadTime: 4311.27,
  modTime: 5605.99,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
    keyExpr: "<value>",
  },
};
```

### `models.FunctionTee`

```typescript
const value: models.FunctionTee = {
  filename: "example.file",
  asyncTimeout: 5834.77,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "tee",
  loadTime: 7605.35,
  modTime: 4994.36,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
    ],
    env: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

### `models.FunctionTrimTimestamp`

```typescript
const value: models.FunctionTrimTimestamp = {
  filename: "example.file",
  asyncTimeout: 5.56,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "trim_timestamp",
  loadTime: 9909.57,
  modTime: 1019.23,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
    field: "<value>",
  },
};
```

### `models.FunctionUnion`

```typescript
const value: models.FunctionUnion = {
  filename: "example.file",
  asyncTimeout: 6855.47,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "union",
  loadTime: 9577.82,
  modTime: 8854.5,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    searchJobId: "<id>",
    stageIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

### `models.FunctionUnroll`

```typescript
const value: models.FunctionUnroll = {
  filename: "example.file",
  asyncTimeout: 1449.06,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "unroll",
  loadTime: 9015.71,
  modTime: 4543.73,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {},
};
```

### `models.FunctionWindow`

```typescript
const value: models.FunctionWindow = {
  filename: "example.file",
  asyncTimeout: 4593.24,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "window",
  loadTime: 4433.83,
  modTime: 7908.96,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    eventWindowId: 456.2,
    registeredFunctions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

### `models.FunctionXmlUnroll`

```typescript
const value: models.FunctionXmlUnroll = {
  filename: "example.file",
  asyncTimeout: 3949.24,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "xml_unroll",
  loadTime: 5577.38,
  modTime: 399.87,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    unroll: "<value>",
    inherit: "<value>",
  },
};
```


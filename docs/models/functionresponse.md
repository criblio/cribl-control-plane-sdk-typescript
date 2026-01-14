# FunctionResponse


## Supported Types

### `models.FunctionAggregateMetrics`

```typescript
const value: models.FunctionAggregateMetrics = {
  __filename: "example.file",
  asyncTimeout: 9195.61,
  cribl_version: "<value>",
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
    passthrough: false,
    preserveGroupBys: false,
    sufficientStatsOnly: true,
    prefix: "<value>",
    timeWindow: "<value>",
    aggregations: [
      {
        metricType: "distribution",
        agg: "<value>",
      },
    ],
    groupbys: [
      "<value 1>",
      "<value 2>",
    ],
    flushEventLimit: 5989.85,
    flushMemLimit: "<value>",
    cumulative: false,
    shouldTreatDotsAsLiterals: false,
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    flushOnInputClose: true,
  },
};
```

### `models.FunctionAggregation`

```typescript
const value: models.FunctionAggregation = {
  __filename: "example.file",
  asyncTimeout: 7917.59,
  cribl_version: "<value>",
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
    passthrough: false,
    preserveGroupBys: false,
    sufficientStatsOnly: true,
    metricsMode: true,
    prefix: "<value>",
    timeWindow: "<value>",
    aggregations: [
      "<value 1>",
    ],
    groupbys: [
      "<value 1>",
    ],
    flushEventLimit: 6233.54,
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
};
```

### `models.FunctionAutoTimestamp`

```typescript
const value: models.FunctionAutoTimestamp = {
  __filename: "example.file",
  asyncTimeout: 3412.89,
  cribl_version: "<value>",
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
    srcField: "<value>",
    dstField: "<value>",
    defaultTimezone: "<value>",
    timeExpression: "<value>",
    offset: 7126.84,
    maxLen: 5237.57,
    defaultTime: "none",
    latestDateAllowed: "<value>",
    spacer: "<value>",
    earliestDateAllowed: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 6108.55,
  cribl_version: "<value>",
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
    outputField: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 7137.72,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 8448.96,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 1570.95,
  cribl_version: "<value>",
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
    maxNumOfIterations: 4339.37,
    activeLogSampleRate: 8310.57,
    useUniqueLogChannel: true,
  },
};
```

### `models.FunctionComment`

```typescript
const value: models.FunctionComment = {
  __filename: "example.file",
  asyncTimeout: 5446.2,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 8471.89,
  cribl_version: "<value>",
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
    maxCombinations: 2294.76,
    maxDepth: 851.72,
    isFederated: true,
    suppressPreviews: false,
  },
};
```

### `models.FunctionDnsLookup`

```typescript
const value: models.FunctionDnsLookup = {
  __filename: "example.file",
  asyncTimeout: 8310.14,
  cribl_version: "<value>",
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
        resourceRecordType: "A",
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
    cacheTTL: 470.15,
    maxCacheSize: 3827.98,
    useResolvConf: true,
    lookupFallback: true,
    domainOverrides: [
      "<value 1>",
      "<value 2>",
    ],
    lookupFailLogLevel: "warn",
  },
};
```

### `models.FunctionDrop`

```typescript
const value: models.FunctionDrop = {
  __filename: "example.file",
  asyncTimeout: 7169.86,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 8672.88,
  cribl_version: "<value>",
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
    timeWindow: "<value>",
    dropDimensions: [
      "<value 1>",
    ],
    flushOnInputClose: false,
  },
};
```

### `models.FunctionDynamicSampling`

```typescript
const value: models.FunctionDynamicSampling = {
  __filename: "example.file",
  asyncTimeout: 2144.07,
  cribl_version: "<value>",
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
  schema: {
    mode: "sqrt",
    keyExpr: "<value>",
    samplePeriod: 522.44,
    minEvents: 7446.19,
    maxSampleRate: 1997.04,
  },
};
```

### `models.FunctionEval`

```typescript
const value: models.FunctionEval = {
  __filename: "example.file",
  asyncTimeout: 5706.24,
  cribl_version: "<value>",
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
        disabled: true,
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
  __filename: "example.file",
  asyncTimeout: 7188.7,
  cribl_version: "<value>",
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
  schema: {
    existingOrNew: "existing",
    shouldMarkCriblBreaker: false,
  },
};
```

### `models.FunctionEventstats`

```typescript
const value: models.FunctionEventstats = {
  __filename: "example.file",
  asyncTimeout: 8029.93,
  cribl_version: "<value>",
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
      "<value 2>",
    ],
    groupBys: [
      "<value 1>",
      "<value 2>",
    ],
    maxEvents: 9096.42,
    flushOnInputClose: true,
  },
};
```

### `models.FunctionExternaldata`

```typescript
const value: models.FunctionExternaldata = {
  __filename: "example.file",
  asyncTimeout: 2130.05,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 4624.4,
  cribl_version: "<value>",
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
    prefix: "<value>",
    depth: 4183.57,
    delimiter: "<value>",
  },
};
```

### `models.FunctionFoldkeys`

```typescript
const value: models.FunctionFoldkeys = {
  __filename: "example.file",
  asyncTimeout: 2686.01,
  cribl_version: "<value>",
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
    deleteOriginal: false,
    separator: "<value>",
    selectionRegExp: "<value>",
  },
};
```

### `models.FunctionGenStats`

```typescript
const value: models.FunctionGenStats = {
  __filename: "example.file",
  asyncTimeout: 3025.75,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 7349.9,
  cribl_version: "<value>",
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
    inField: "<value>",
    outField: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 2211.17,
  cribl_version: "<value>",
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
    source: "<value>",
  },
};
```

### `models.FunctionHandlebars`

```typescript
const value: models.FunctionHandlebars = {
  __filename: "example.file",
  asyncTimeout: 2987.9,
  cribl_version: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "handlebars",
  loadTime: 4175.73,
  modTime: 7036.04,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    templates: [
      {
        id: "<id>",
        content: "<value>",
        description:
          "zesty red contrail fiercely international sympathetically yum",
        type: "<value>",
      },
    ],
    targetField: "<value>",
    parseJson: true,
    removeOnNull: true,
  },
};
```

### `models.FunctionJoin`

```typescript
const value: models.FunctionJoin = {
  __filename: "example.file",
  asyncTimeout: 3529.61,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 6785.72,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 1375.34,
  cribl_version: "<value>",
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
    lake: "<value>",
    tee: "<value>",
    flushMs: 4244.78,
    suppressPreviews: true,
  },
};
```

### `models.FunctionLimit`

```typescript
const value: models.FunctionLimit = {
  __filename: "example.file",
  asyncTimeout: 7993.11,
  cribl_version: "<value>",
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
  schema: {
    limit: 85258,
  },
};
```

### `models.FunctionLocalSearchDatatypeParser`

```typescript
const value: models.FunctionLocalSearchDatatypeParser = {
  __filename: "example.file",
  asyncTimeout: 9827.97,
  cribl_version: "<value>",
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
  schema: {},
};
```

### `models.FunctionLocalSearchRulesetRunner`

```typescript
const value: models.FunctionLocalSearchRulesetRunner = {
  __filename: "example.file",
  asyncTimeout: 9962.28,
  cribl_version: "<value>",
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
    ruleset: {},
    markAndIncludeDroppedEvents: true,
  },
};
```

### `models.FunctionLookup`

```typescript
const value: models.FunctionLookup = {
  __filename: "example.file",
  asyncTimeout: 2465.37,
  cribl_version: "<value>",
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
    dbLookup: false,
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
    addToEvent: false,
    ignoreCase: "<value>",
  },
};
```

### `models.FunctionMask`

```typescript
const value: models.FunctionMask = {
  __filename: "example.file",
  asyncTimeout: 8419.45,
  cribl_version: "<value>",
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
    rules: [
      {
        matchRegex: "<value>",
        replaceExpr: "<value>",
        disabled: true,
      },
    ],
    fields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    depth: 10477,
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
  __filename: "example.file",
  asyncTimeout: 8384.22,
  cribl_version: "<value>",
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
      "<value 2>",
    ],
    targetNames: [
      "<value 1>",
    ],
    rowLimit: 5121.23,
    itemIndexName: "<value>",
    bagExpansionMode: "bag",
  },
};
```

### `models.FunctionMvPull`

```typescript
const value: models.FunctionMvPull = {
  __filename: "example.file",
  asyncTimeout: 4318.2,
  cribl_version: "<value>",
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
    deleteOriginal: true,
  },
};
```

### `models.FunctionNotificationPolicies`

```typescript
const value: models.FunctionNotificationPolicies = {
  __filename: "example.file",
  asyncTimeout: 963.15,
  cribl_version: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "notification_policies",
  loadTime: 7086.88,
  modTime: 7258.07,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    policies: [
      {
        id: "<id>",
        disabled: false,
        waitToGroup: 8213.72,
        groupByLabels: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        conditions: [
          [],
          [],
          [],
        ],
        templateTargetPairs: [
          {
            templateId: "<id>",
            targetId: "<id>",
          },
        ],
        final: true,
        order: 4556.84,
      },
    ],
  },
};
```

### `models.FunctionNotifications`

```typescript
const value: models.FunctionNotifications = {
  __filename: "example.file",
  asyncTimeout: 756.05,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 1105.87,
  cribl_version: "<value>",
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
    group: "<value>",
    notificationId: "<id>",
    searchId: "<id>",
    savedQueryId: "<id>",
    trigger: "<value>",
    triggerType: "resultsCount",
    triggerComparator: "!==",
    triggerCount: 5120.74,
    resultsLimit: 1045.06,
    searchUrl: "https://metallic-lox.net/",
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
  __filename: "example.file",
  asyncTimeout: 1176.16,
  cribl_version: "<value>",
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
    depth: 18182,
    ignoreFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    filterExpr: "<value>",
    format: "ceil",
  },
};
```

### `models.FunctionOtlpLogs`

```typescript
const value: models.FunctionOtlpLogs = {
  __filename: "example.file",
  asyncTimeout: 3875.32,
  cribl_version: "<value>",
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
  schema: {
    dropNonLogEvents: true,
    batchOTLPLogs: true,
  },
};
```

### `models.FunctionOtlpMetrics`

```typescript
const value: models.FunctionOtlpMetrics = {
  __filename: "example.file",
  asyncTimeout: 2251.51,
  cribl_version: "<value>",
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
    dropNonMetricEvents: false,
    otlpVersion: "0.10.0",
    batchOTLPMetrics: true,
  },
};
```

### `models.FunctionOtlpTraces`

```typescript
const value: models.FunctionOtlpTraces = {
  __filename: "example.file",
  asyncTimeout: 8088.34,
  cribl_version: "<value>",
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
  schema: {
    dropNonTraceEvents: false,
    otlpVersion: "0.10.0",
    batchOTLPTraces: true,
  },
};
```

### `models.FunctionPack`

```typescript
const value: models.FunctionPack = {
  __filename: "example.file",
  asyncTimeout: 8176.6,
  cribl_version: "<value>",
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
    unpackedFields: [
      "<value 1>",
    ],
    target: "<value>",
  },
};
```

### `models.FunctionPivot`

```typescript
const value: models.FunctionPivot = {
  __filename: "example.file",
  asyncTimeout: 3354.7,
  cribl_version: "<value>",
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
    qualifierFields: [
      "<value 1>",
    ],
  },
};
```

### `models.FunctionPublishMetrics`

```typescript
const value: models.FunctionPublishMetrics = {
  __filename: "example.file",
  asyncTimeout: 7718.35,
  cribl_version: "<value>",
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
        metricType: "counter",
      },
    ],
    overwrite: false,
    dimensions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    removeMetrics: [
      "<value 1>",
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
  __filename: "example.file",
  asyncTimeout: 2267.56,
  cribl_version: "<value>",
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
    commands: [
      {
        outField: "<value>",
        command: "<value>",
        keyExpr: "<value>",
        argsExpr: "<value>",
      },
    ],
    deploymentType: "standalone",
    authType: "textSecret",
    maxBlockSecs: 6047.11,
    enableClientSideCaching: false,
  },
};
```

### `models.FunctionRegexExtract`

```typescript
const value: models.FunctionRegexExtract = {
  __filename: "example.file",
  asyncTimeout: 4835.31,
  cribl_version: "<value>",
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
    source: "<value>",
    iterations: 534.94,
    fieldNameExpression: "<value>",
    overwrite: false,
  },
};
```

### `models.FunctionRegexFilter`

```typescript
const value: models.FunctionRegexFilter = {
  __filename: "example.file",
  asyncTimeout: 5697.57,
  cribl_version: "<value>",
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
    field: "<value>",
  },
};
```

### `models.FunctionRename`

```typescript
const value: models.FunctionRename = {
  __filename: "example.file",
  asyncTimeout: 2336.89,
  cribl_version: "<value>",
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
    wildcardDepth: 22329,
  },
};
```

### `models.FunctionRollupMetrics`

```typescript
const value: models.FunctionRollupMetrics = {
  __filename: "example.file",
  asyncTimeout: 9783.75,
  cribl_version: "<value>",
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
    timeWindow: "<value>",
    gaugeRollup: "avg",
  },
};
```

### `models.FunctionSampling`

```typescript
const value: models.FunctionSampling = {
  __filename: "example.file",
  asyncTimeout: 6318.17,
  cribl_version: "<value>",
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
      {
        filter: "<value>",
        rate: 749891,
      },
    ],
  },
};
```

### `models.FunctionSend`

```typescript
const value: models.FunctionSend = {
  __filename: "example.file",
  asyncTimeout: 6106.71,
  cribl_version: "<value>",
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
    group: "<value>",
    workspace: "<value>",
    sendUrlTemplate: "<value>",
    searchId: "<id>",
    tee: "<value>",
    flushMs: 9785.46,
    suppressPreviews: false,
    mode: "metrics",
  },
};
```

### `models.FunctionSensitiveDataScanner`

```typescript
const value: models.FunctionSensitiveDataScanner = {
  __filename: "example.file",
  asyncTimeout: 3199.53,
  cribl_version: "<value>",
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
    rules: [
      {
        rulesetId: "<id>",
        replaceExpr: "<value>",
        disabled: true,
      },
    ],
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
    includeDetectedRules: false,
    backgroundDetection: true,
  },
};
```

### `models.FunctionSerde`

```typescript
const value: models.FunctionSerde = {
  __filename: "example.file",
  asyncTimeout: 7712.14,
  cribl_version: "<value>",
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
    mode: "extract",
    type: "clf",
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    srcField: "<value>",
    dstField: "<value>",
    cleanFields: "<value>",
  },
};
```

### `models.FunctionSerialize`

```typescript
const value: models.FunctionSerialize = {
  __filename: "example.file",
  asyncTimeout: 7303.27,
  cribl_version: "<value>",
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
    type: "csv",
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    fields: [
      "<value 1>",
    ],
    srcField: "<value>",
    dstField: "<value>",
  },
};
```

### `models.FunctionSidlookup`

```typescript
const value: models.FunctionSidlookup = {
  __filename: "example.file",
  asyncTimeout: 8789.17,
  cribl_version: "<value>",
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
        disabled: false,
      },
    ],
  },
};
```

### `models.FunctionSnmpTrapSerialize`

```typescript
const value: models.FunctionSnmpTrapSerialize = {
  __filename: "example.file",
  asyncTimeout: 3177.3,
  cribl_version: "<value>",
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
    strict: true,
    dropFailedEvents: true,
    v3User: {
      name: "<value>",
      authProtocol: "sha384",
      authKey: "<value>",
      privProtocol: "<value>",
    },
  },
};
```

### `models.FunctionSort`

```typescript
const value: models.FunctionSort = {
  __filename: "example.file",
  asyncTimeout: 4827.88,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 1052.71,
  cribl_version: "<value>",
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
    type: "<value>",
    destination: "<value>",
    description: "once platypus huddle dreamily deployment potentially",
    fieldMapping: {},
    separator: "<value>",
    overwrite: false,
    compress: "<value>",
    tee: true,
    maxEvents: 1796.69,
    suppressPreviews: false,
  },
};
```

### `models.FunctionSuppress`

```typescript
const value: models.FunctionSuppress = {
  __filename: "example.file",
  asyncTimeout: 8009.67,
  cribl_version: "<value>",
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
    allow: 209.85,
    suppressPeriodSec: 3097.63,
    dropEventsMode: true,
    maxCacheSize: 1137.96,
    cacheIdleTimeoutPeriods: 8217.34,
    numEventsIdleTimeoutTrigger: 6624.66,
  },
};
```

### `models.FunctionTee`

```typescript
const value: models.FunctionTee = {
  __filename: "example.file",
  asyncTimeout: 5834.77,
  cribl_version: "<value>",
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
    restartOnExit: false,
    env: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

### `models.FunctionTrimTimestamp`

```typescript
const value: models.FunctionTrimTimestamp = {
  __filename: "example.file",
  asyncTimeout: 5.56,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 6855.47,
  cribl_version: "<value>",
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
  __filename: "example.file",
  asyncTimeout: 1449.06,
  cribl_version: "<value>",
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
  schema: {
    srcExpr: "<value>",
    dstField: "<value>",
  },
};
```

### `models.FunctionWindow`

```typescript
const value: models.FunctionWindow = {
  __filename: "example.file",
  asyncTimeout: 4593.24,
  cribl_version: "<value>",
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
    tailEventCount: 7215.87,
    headEventCount: 9901.46,
  },
};
```

### `models.FunctionXmlUnroll`

```typescript
const value: models.FunctionXmlUnroll = {
  __filename: "example.file",
  asyncTimeout: 3949.24,
  cribl_version: "<value>",
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
    unrollIdxField: "<value>",
    pretty: false,
  },
};
```


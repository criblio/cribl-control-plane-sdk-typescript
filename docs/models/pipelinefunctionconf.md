# PipelineFunctionConf


## Supported Types

### `models.PipelineFunctionAggregateMetrics`

```typescript
const value: models.PipelineFunctionAggregateMetrics = {
  filter: "<value>",
  id: "aggregate_metrics",
  description: "along kindly down edge diagram meh whereas",
  disabled: false,
  final: true,
  conf: {
    passthrough: true,
    preserveGroupBys: true,
    sufficientStatsOnly: true,
    prefix: "<value>",
    timeWindow: "<value>",
    aggregations: [
      {
        metricType: "timer",
        agg: "<value>",
      },
    ],
    groupbys: [
      "<value 1>",
    ],
    flushEventLimit: 6231.35,
    flushMemLimit: "<value>",
    cumulative: true,
    shouldTreatDotsAsLiterals: false,
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    flushOnInputClose: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionAggregation`

```typescript
const value: models.PipelineFunctionAggregation = {
  filter: "<value>",
  id: "aggregation",
  description: "well but amazing roger inasmuch harvest because",
  disabled: true,
  final: false,
  conf: {
    passthrough: false,
    preserveGroupBys: false,
    sufficientStatsOnly: false,
    metricsMode: true,
    prefix: "<value>",
    timeWindow: "<value>",
    aggregations: [
      "<value 1>",
      "<value 2>",
    ],
    groupbys: [
      "<value 1>",
    ],
    flushEventLimit: 1354.35,
    flushMemLimit: "<value>",
    cumulative: true,
    searchAggMode: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    shouldTreatDotsAsLiterals: false,
    flushOnInputClose: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionAutoTimestamp`

```typescript
const value: models.PipelineFunctionAutoTimestamp = {
  filter: "<value>",
  id: "auto_timestamp",
  description: "once peninsula nicely er consequently scare",
  disabled: false,
  final: false,
  conf: {
    srcField: "<value>",
    dstField: "<value>",
    defaultTimezone: "<value>",
    timeExpression: "<value>",
    offset: 3845.47,
    maxLen: 5793.04,
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionCef`

```typescript
const value: models.PipelineFunctionCef = {
  filter: "<value>",
  id: "cef",
  description: "but minion lest",
  disabled: false,
  final: true,
  conf: {
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionChain`

```typescript
const value: models.PipelineFunctionChain = {
  filter: "<value>",
  id: "chain",
  description: "apud save specific worth reassuringly density edge grim",
  disabled: false,
  final: false,
  conf: {
    processor: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionClone`

```typescript
const value: models.PipelineFunctionClone = {
  filter: "<value>",
  id: "clone",
  description: "fluctuate gut aha till",
  disabled: true,
  final: false,
  conf: {
    clones: [
      {
        "key": "<value>",
        "key1": "<value>",
      },
      {},
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionCode`

```typescript
const value: models.PipelineFunctionCode = {
  filter: "<value>",
  id: "code",
  description: "unethically gee after volleyball frankly contradict opposite",
  disabled: false,
  final: false,
  conf: {
    code: "<value>",
    maxNumOfIterations: 2501.08,
    activeLogSampleRate: 309.95,
    useUniqueLogChannel: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionComment`

```typescript
const value: models.PipelineFunctionComment = {
  filter: "<value>",
  id: "comment",
  description: "an rigidly colour boldly gape now",
  disabled: false,
  final: false,
  conf: {
    comment:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionDistinct`

```typescript
const value: models.PipelineFunctionDistinct = {
  filter: "<value>",
  id: "distinct",
  description: "fooey ha beside saw sustenance",
  disabled: true,
  final: false,
  conf: {
    groupBy: [
      "<value 1>",
    ],
    maxCombinations: 4306.99,
    maxDepth: 7679.52,
    isFederated: false,
    suppressPreviews: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionDnsLookup`

```typescript
const value: models.PipelineFunctionDnsLookup = {
  filter: "<value>",
  id: "dns_lookup",
  description: "below euphonium antagonize haversack",
  disabled: false,
  final: true,
  conf: {
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
    cacheTTL: 1409.72,
    maxCacheSize: 8252.84,
    useResolvConf: true,
    lookupFallback: false,
    domainOverrides: [
      "<value 1>",
      "<value 2>",
    ],
    lookupFailLogLevel: "debug",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionDrop`

```typescript
const value: models.PipelineFunctionDrop = {
  filter: "<value>",
  id: "drop",
  description: "gulp skean wire pronoun gladly",
  disabled: false,
  final: true,
  conf: {},
  groupId: "<id>",
};
```

### `models.PipelineFunctionDropDimensions`

```typescript
const value: models.PipelineFunctionDropDimensions = {
  filter: "<value>",
  id: "drop_dimensions",
  description: "limited cruelty disconnection whether fund outset across oddly",
  disabled: false,
  final: true,
  conf: {
    timeWindow: "<value>",
    dropDimensions: [
      "<value 1>",
      "<value 2>",
    ],
    flushOnInputClose: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionDynamicSampling`

```typescript
const value: models.PipelineFunctionDynamicSampling = {
  filter: "<value>",
  id: "dynamic_sampling",
  description: "creamy under yum speedily if",
  disabled: true,
  final: true,
  conf: {
    mode: "log",
    keyExpr: "<value>",
    samplePeriod: 6554.27,
    minEvents: 4963.7,
    maxSampleRate: 7995.35,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionEval`

```typescript
const value: models.PipelineFunctionEval = {
  filter: "<value>",
  id: "eval",
  description: "opposite why pip psst memorise amid abaft insecure",
  disabled: false,
  final: false,
  conf: {
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionEventBreaker`

```typescript
const value: models.PipelineFunctionEventBreaker = {
  filter: "<value>",
  id: "event_breaker",
  description: "boohoo finally slide frizzy",
  disabled: true,
  final: false,
  conf: {
    existingOrNew: "new",
    shouldMarkCriblBreaker: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionEventstats`

```typescript
const value: models.PipelineFunctionEventstats = {
  filter: "<value>",
  id: "eventstats",
  description: "boo whine log legislature spring a psst hmph submissive once",
  disabled: true,
  final: false,
  conf: {
    aggregations: [],
    groupBys: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    maxEvents: 4168.76,
    flushOnInputClose: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionExternaldata`

```typescript
const value: models.PipelineFunctionExternaldata = {
  filter: "<value>",
  id: "externaldata",
  description: "oh train cannon",
  disabled: true,
  final: true,
  conf: {},
  groupId: "<id>",
};
```

### `models.PipelineFunctionFlatten`

```typescript
const value: models.PipelineFunctionFlatten = {
  filter: "<value>",
  id: "flatten",
  description: "scent next well-worn sans satirise catalyze",
  disabled: false,
  final: false,
  conf: {
    fields: [
      "<value 1>",
    ],
    prefix: "<value>",
    depth: 1196.53,
    delimiter: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionFoldkeys`

```typescript
const value: models.PipelineFunctionFoldkeys = {
  filter: "<value>",
  id: "foldkeys",
  description: "whoa warlike without pish before qua zowie grandson",
  disabled: false,
  final: true,
  conf: {
    deleteOriginal: true,
    separator: "<value>",
    selectionRegExp: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionGenStats`

```typescript
const value: models.PipelineFunctionGenStats = {
  filter: "<value>",
  id: "gen_stats",
  description:
    "another but revoke juvenile nearly why anti jogging reboot asset",
  disabled: true,
  final: true,
  conf: {
    fields: [
      "<value 1>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionGeoip`

```typescript
const value: models.PipelineFunctionGeoip = {
  filter: "<value>",
  id: "geoip",
  description: "rim via potentially wordy below freckle officially",
  disabled: true,
  final: false,
  conf: {
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionGrok`

```typescript
const value: models.PipelineFunctionGrok = {
  filter: "<value>",
  id: "grok",
  description: "unethically motionless knottily boastfully gym",
  disabled: false,
  final: false,
  conf: {
    pattern: "<value>",
    patternList: [
      {
        pattern: "<value>",
      },
    ],
    source: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionHandlebars`

```typescript
const value: models.PipelineFunctionHandlebars = {
  filter: "<value>",
  id: "handlebars",
  description: "quirkily numeracy endow",
  disabled: false,
  final: true,
  conf: {
    templates: [],
    targetField: "<value>",
    parseJson: false,
    removeOnNull: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionJoin`

```typescript
const value: models.PipelineFunctionJoin = {
  filter: "<value>",
  id: "join",
  description: "think atop wherever but circle",
  disabled: true,
  final: true,
  conf: {
    kind: "<value>",
    hints: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    fieldConditions: [],
    searchJobId: "<id>",
    stageId: "<id>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionJsonUnroll`

```typescript
const value: models.PipelineFunctionJsonUnroll = {
  filter: "<value>",
  id: "json_unroll",
  description: "covenant draft far affiliate anenst",
  disabled: false,
  final: true,
  conf: {
    path: "/etc/namedb",
    name: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionLakeExport`

```typescript
const value: models.PipelineFunctionLakeExport = {
  filter: "<value>",
  id: "lake_export",
  description: "retrospectivity conceal crossly bah huzzah fraternise through",
  disabled: true,
  final: false,
  conf: {
    searchJobId: "<id>",
    dataset: "<value>",
    lake: "<value>",
    tee: "<value>",
    flushMs: 4350.69,
    suppressPreviews: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionLimit`

```typescript
const value: models.PipelineFunctionLimit = {
  filter: "<value>",
  id: "limit",
  description: "very judicious deliberately cleaner gosh near bracelet except",
  disabled: true,
  final: false,
  conf: {
    limit: 269883,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionLocalSearchDatatypeParser`

```typescript
const value: models.PipelineFunctionLocalSearchDatatypeParser = {
  filter: "<value>",
  id: "local_search_datatype_parser",
  description: "ligate ick each fowl boss hopelessly yuck",
  disabled: false,
  final: true,
  conf: {},
  groupId: "<id>",
};
```

### `models.PipelineFunctionLocalSearchRulesetRunner`

```typescript
const value: models.PipelineFunctionLocalSearchRulesetRunner = {
  filter: "<value>",
  id: "local_search_ruleset_runner",
  description: "from airmail down",
  disabled: true,
  final: true,
  conf: {
    rulesetType: "dataset",
    rulesetId: "<id>",
    ruleset: {},
    markAndIncludeDroppedEvents: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionLookup`

```typescript
const value: models.PipelineFunctionLookup = {
  filter: "<value>",
  id: "lookup",
  description: "ack pish wrongly",
  disabled: true,
  final: true,
  conf: {
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionMask`

```typescript
const value: models.PipelineFunctionMask = {
  filter: "<value>",
  id: "mask",
  description: "sparse whereas ack excitable scrabble merge",
  disabled: true,
  final: true,
  conf: {
    rules: [
      {
        matchRegex: "<value>",
        replaceExpr: "<value>",
        disabled: false,
      },
    ],
    fields: [
      "<value 1>",
      "<value 2>",
    ],
    depth: 95074,
    flags: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionMvExpand`

```typescript
const value: models.PipelineFunctionMvExpand = {
  filter: "<value>",
  id: "mv_expand",
  description: "however fooey greedily",
  disabled: true,
  final: true,
  conf: {
    sourceFields: [],
    targetNames: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    rowLimit: 2781.53,
    itemIndexName: "<value>",
    bagExpansionMode: "bag",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionMvPull`

```typescript
const value: models.PipelineFunctionMvPull = {
  filter: "<value>",
  id: "mv_pull",
  description:
    "victoriously uh-huh considerate unwieldy readily thoroughly inspection powerfully cleave",
  disabled: true,
  final: true,
  conf: {
    arrayPath: "<value>",
    relativeKeyPath: "<value>",
    relativeValuePath: "<value>",
    targetBagPath: "<value>",
    deleteOriginal: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionNotificationPolicies`

```typescript
const value: models.PipelineFunctionNotificationPolicies = {
  filter: "<value>",
  id: "notification_policies",
  description: "hm whenever prudent embalm stall excepting hm ack jet",
  disabled: true,
  final: true,
  conf: {
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionNotifications`

```typescript
const value: models.PipelineFunctionNotifications = {
  filter: "<value>",
  id: "notifications",
  description: "warming rewarding from drat hovercraft marvelous brr before",
  disabled: true,
  final: true,
  conf: {
    id: "<id>",
    field: "<value>",
    deduplicate: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionNotify`

```typescript
const value: models.PipelineFunctionNotify = {
  filter: "<value>",
  id: "notify",
  description:
    "friendly bathhouse but preside structure reprove scarily ouch jet pip",
  disabled: false,
  final: true,
  conf: {
    group: "<value>",
    notificationId: "<id>",
    searchId: "<id>",
    savedQueryId: "<id>",
    trigger: "<value>",
    triggerType: "resultsCount",
    triggerComparator: ">",
    triggerCount: 8364.23,
    resultsLimit: 5484.73,
    searchUrl: "https://equatorial-teammate.net/",
    message: "<value>",
    authToken: "<value>",
    messagesEndpoint: "<value>",
    tenantId: "<id>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionNumerify`

```typescript
const value: models.PipelineFunctionNumerify = {
  filter: "<value>",
  id: "numerify",
  description: "stratify what really excluding",
  disabled: true,
  final: false,
  conf: {
    depth: 724362,
    ignoreFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    filterExpr: "<value>",
    format: "none",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionOtlpLogs`

```typescript
const value: models.PipelineFunctionOtlpLogs = {
  filter: "<value>",
  id: "otlp_logs",
  description: "nutritious swiftly athwart",
  disabled: false,
  final: true,
  conf: {
    dropNonLogEvents: false,
    batchOTLPLogs: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionOtlpMetrics`

```typescript
const value: models.PipelineFunctionOtlpMetrics = {
  filter: "<value>",
  id: "otlp_metrics",
  description: "stained pish ack worth aw throughout like ew",
  disabled: false,
  final: true,
  conf: {
    resourceAttributePrefixes: [
      "<value 1>",
      "<value 2>",
    ],
    dropNonMetricEvents: true,
    otlpVersion: "1.3.1",
    batchOTLPMetrics: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionOtlpTraces`

```typescript
const value: models.PipelineFunctionOtlpTraces = {
  filter: "<value>",
  id: "otlp_traces",
  description:
    "make hyphenation ack next overspend furthermore plus lest modulo",
  disabled: true,
  final: false,
  conf: {
    dropNonTraceEvents: false,
    otlpVersion: "1.3.1",
    batchOTLPTraces: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionPack`

```typescript
const value: models.PipelineFunctionPack = {
  filter: "<value>",
  id: "pack",
  description: "gee accredit knottily mortally where recovery",
  disabled: true,
  final: false,
  conf: {
    unpackedFields: [
      "<value 1>",
    ],
    target: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionPivot`

```typescript
const value: models.PipelineFunctionPivot = {
  filter: "<value>",
  id: "pivot",
  description:
    "thankfully unimpressively secondary that insert sturdy phew loftily",
  disabled: false,
  final: false,
  conf: {
    labelField: "<value>",
    dataFields: [
      "<value 1>",
    ],
    qualifierFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionPublishMetrics`

```typescript
const value: models.PipelineFunctionPublishMetrics = {
  filter: "<value>",
  id: "publish_metrics",
  description: "madly after pushy gosh bustling anenst as geez past blind",
  disabled: true,
  final: true,
  conf: {
    fields: [
      {
        inFieldName: "<value>",
        outFieldExpr: "<value>",
        metricType: "counter",
      },
    ],
    overwrite: true,
    dimensions: [
      "<value 1>",
    ],
    removeMetrics: [
      "<value 1>",
      "<value 2>",
    ],
    removeDimensions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRedis`

```typescript
const value: models.PipelineFunctionRedis = {
  filter: "<value>",
  id: "redis",
  description: "irresponsible probe er woot delete though",
  disabled: false,
  final: false,
  conf: {
    commands: [],
    deploymentType: "cluster",
    authType: "textSecret",
    maxBlockSecs: 5990.87,
    enableClientSideCaching: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRegexExtract`

```typescript
const value: models.PipelineFunctionRegexExtract = {
  filter: "<value>",
  id: "regex_extract",
  description: "council furthermore sanity",
  disabled: true,
  final: true,
  conf: {
    regex: "<value>",
    regexList: [
      {
        regex: "<value>",
      },
    ],
    source: "<value>",
    iterations: 899.5,
    fieldNameExpression: "<value>",
    overwrite: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRegexFilter`

```typescript
const value: models.PipelineFunctionRegexFilter = {
  filter: "<value>",
  id: "regex_filter",
  description: "near puritan daily only",
  disabled: false,
  final: true,
  conf: {
    regex: "<value>",
    regexList: [
      {
        regex: "<value>",
      },
    ],
    field: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRename`

```typescript
const value: models.PipelineFunctionRename = {
  filter: "<value>",
  id: "rename",
  description: "eek hmph vainly and",
  disabled: true,
  final: false,
  conf: {
    baseFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    rename: [
      {
        currentName: "<value>",
        newName: "<value>",
      },
    ],
    renameExpr: "<value>",
    wildcardDepth: 400895,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRollupMetrics`

```typescript
const value: models.PipelineFunctionRollupMetrics = {
  filter: "<value>",
  id: "rollup_metrics",
  description: "secrecy by whoa reapply",
  disabled: false,
  final: false,
  conf: {
    dimensions: [
      "<value 1>",
    ],
    timeWindow: "<value>",
    gaugeRollup: "max",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSampling`

```typescript
const value: models.PipelineFunctionSampling = {
  filter: "<value>",
  id: "sampling",
  description: "reckon fortunately pull a heavenly only",
  disabled: false,
  final: false,
  conf: {
    rules: [
      {
        filter: "<value>",
        rate: 749891,
      },
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSend`

```typescript
const value: models.PipelineFunctionSend = {
  filter: "<value>",
  id: "send",
  description: "self-assured chow rudely vol reorient whoever",
  disabled: false,
  final: true,
  conf: {
    url: "https://worthy-sauerkraut.info/",
    group: "<value>",
    workspace: "<value>",
    sendUrlTemplate: "<value>",
    searchId: "<id>",
    tee: "<value>",
    flushMs: 987.72,
    suppressPreviews: true,
    mode: "metrics",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSensitiveDataScanner`

```typescript
const value: models.PipelineFunctionSensitiveDataScanner = {
  filter: "<value>",
  id: "sensitive_data_scanner",
  description:
    "mmm unwieldy honestly fraudster treasure cautious round however",
  disabled: false,
  final: true,
  conf: {
    rules: [
      {
        rulesetId: "<id>",
        replaceExpr: "<value>",
        disabled: false,
      },
    ],
    fields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    excludeFields: [
      "<value 1>",
      "<value 2>",
    ],
    flags: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    includeDetectedRules: false,
    backgroundDetection: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSerde`

```typescript
const value: models.PipelineFunctionSerde = {
  filter: "<value>",
  id: "serde",
  description: "aged concerning formation controvert",
  disabled: false,
  final: true,
  conf: {
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionSerialize`

```typescript
const value: models.PipelineFunctionSerialize = {
  filter: "<value>",
  id: "serialize",
  description:
    "scenario worst strange supposing around or woot gadzooks safely runway",
  disabled: true,
  final: false,
  conf: {
    type: "csv",
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
    dstField: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSidlookup`

```typescript
const value: models.PipelineFunctionSidlookup = {
  filter: "<value>",
  id: "sidlookup",
  description: "sequester fictionalize shout uh-huh tensely frail aha",
  disabled: true,
  final: true,
  conf: {
    fields: [
      {
        name: "<value>",
        expr: "<value>",
        disabled: false,
      },
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSnmpTrapSerialize`

```typescript
const value: models.PipelineFunctionSnmpTrapSerialize = {
  filter: "<value>",
  id: "snmp_trap_serialize",
  description: "upward irritably release loyally gee remark homeschool",
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
};
```

### `models.PipelineFunctionSort`

```typescript
const value: models.PipelineFunctionSort = {
  filter: "<value>",
  id: "sort",
  description: "babyish schlep inside",
  disabled: false,
  final: false,
  conf: {
    sortId: "<id>",
    comparisonExpression: "<value>",
    topN: 4741.25,
    maxEvents: 2967.01,
    suppressPreviews: false,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionStore`

```typescript
const value: models.PipelineFunctionStore = {
  filter: "<value>",
  id: "store",
  description:
    "beautifully without valiantly amid shark truthfully consequently beautifully",
  disabled: false,
  final: true,
  conf: {
    type: "<value>",
    destination: "<value>",
    description: "bah casement retrospectivity awesome animated beneath vainly",
    fieldMapping: {},
    separator: "<value>",
    overwrite: false,
    compress: "<value>",
    tee: true,
    maxEvents: 559.19,
    suppressPreviews: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSuppress`

```typescript
const value: models.PipelineFunctionSuppress = {
  filter: "<value>",
  id: "suppress",
  description: "whack as made-up",
  disabled: true,
  final: true,
  conf: {
    keyExpr: "<value>",
    allow: 9961.65,
    suppressPeriodSec: 7229.55,
    dropEventsMode: false,
    maxCacheSize: 7960.57,
    cacheIdleTimeoutPeriods: 8777.82,
    numEventsIdleTimeoutTrigger: 4091.01,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionTee`

```typescript
const value: models.PipelineFunctionTee = {
  filter: "<value>",
  id: "tee",
  description: "considering until advanced er multicolored scenario ew ocelot",
  disabled: false,
  final: true,
  conf: {
    command: "<value>",
    args: [
      "<value 1>",
    ],
    restartOnExit: true,
    env: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionTrimTimestamp`

```typescript
const value: models.PipelineFunctionTrimTimestamp = {
  filter: "<value>",
  id: "trim_timestamp",
  description: "tomorrow accidentally psst gee hmph",
  disabled: false,
  final: false,
  conf: {
    field: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionUnion`

```typescript
const value: models.PipelineFunctionUnion = {
  filter: "<value>",
  id: "union",
  description: "farmer tuba vague",
  disabled: true,
  final: false,
  conf: {
    searchJobId: "<id>",
    stageIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionUnroll`

```typescript
const value: models.PipelineFunctionUnroll = {
  filter: "<value>",
  id: "unroll",
  description: "er gah machine ew obediently pfft that why",
  disabled: true,
  final: false,
  conf: {
    srcExpr: "<value>",
    dstField: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionWindow`

```typescript
const value: models.PipelineFunctionWindow = {
  filter: "<value>",
  id: "window",
  description:
    "memorable beneficial shakily triumphantly sudden because volunteer",
  disabled: true,
  final: true,
  conf: {
    eventWindowId: 7696.3,
    registeredFunctions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tailEventCount: 6125.83,
    headEventCount: 3735.39,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionXmlUnroll`

```typescript
const value: models.PipelineFunctionXmlUnroll = {
  filter: "<value>",
  id: "xml_unroll",
  description: "waft account apropos plus woot opposite recede",
  disabled: true,
  final: true,
  conf: {
    unroll: "<value>",
    inherit: "<value>",
    unrollIdxField: "<value>",
    pretty: true,
  },
  groupId: "<id>",
};
```


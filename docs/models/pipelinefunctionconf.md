# PipelineFunctionConf


## Supported Types

### `models.PipelineFunctionAggregateMetrics`

```typescript
const value: models.PipelineFunctionAggregateMetrics = {
  id: "aggregate_metrics",
  description: "along kindly down edge diagram meh whereas",
  disabled: false,
  final: true,
  conf: {
    prefix: "<value>",
    aggregations: [],
    groupbys: [
      "<value 1>",
    ],
    flushEventLimit: 539.99,
    flushMemLimit: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionAggregation`

```typescript
const value: models.PipelineFunctionAggregation = {
  id: "aggregation",
  description: "well but amazing roger inasmuch harvest because",
  disabled: true,
  final: false,
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
      "<value 3>",
    ],
    flushEventLimit: 5371.61,
    flushMemLimit: "<value>",
    searchAggMode: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionAutoTimestamp`

```typescript
const value: models.PipelineFunctionAutoTimestamp = {
  id: "auto_timestamp",
  description: "once peninsula nicely er consequently scare",
  disabled: false,
  final: false,
  conf: {
    spacer: "<value>",
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
  id: "cef",
  description: "but minion lest",
  disabled: false,
  final: true,
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionChain`

```typescript
const value: models.PipelineFunctionChain = {
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
  id: "code",
  description: "unethically gee after volleyball frankly contradict opposite",
  disabled: false,
  final: false,
  conf: {
    code: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionComment`

```typescript
const value: models.PipelineFunctionComment = {
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
  id: "distinct",
  description: "fooey ha beside saw sustenance",
  disabled: true,
  final: false,
  conf: {
    groupBy: [
      "<value 1>",
    ],
    suppressPreviews: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionDnsLookup`

```typescript
const value: models.PipelineFunctionDnsLookup = {
  id: "dns_lookup",
  description: "below euphonium antagonize haversack",
  disabled: false,
  final: true,
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
    ],
    domainOverrides: [
      "<value 1>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionDrop`

```typescript
const value: models.PipelineFunctionDrop = {
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
  id: "drop_dimensions",
  description: "limited cruelty disconnection whether fund outset across oddly",
  disabled: false,
  final: true,
  conf: {
    dropDimensions: [
      "<value 1>",
      "<value 2>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionDynamicSampling`

```typescript
const value: models.PipelineFunctionDynamicSampling = {
  id: "dynamic_sampling",
  description: "creamy under yum speedily if",
  disabled: true,
  final: true,
  conf: {},
  groupId: "<id>",
};
```

### `models.PipelineFunctionEval`

```typescript
const value: models.PipelineFunctionEval = {
  id: "eval",
  description: "opposite why pip psst memorise amid abaft insecure",
  disabled: false,
  final: false,
  conf: {
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
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionEventBreaker`

```typescript
const value: models.PipelineFunctionEventBreaker = {
  id: "event_breaker",
  description: "boohoo finally slide frizzy",
  disabled: true,
  final: false,
  conf: {},
  groupId: "<id>",
};
```

### `models.PipelineFunctionEventstats`

```typescript
const value: models.PipelineFunctionEventstats = {
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
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionExternaldata`

```typescript
const value: models.PipelineFunctionExternaldata = {
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
  id: "flatten",
  description: "scent next well-worn sans satirise catalyze",
  disabled: false,
  final: false,
  conf: {
    fields: [
      "<value 1>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionFoldkeys`

```typescript
const value: models.PipelineFunctionFoldkeys = {
  id: "foldkeys",
  description: "whoa warlike without pish before qua zowie grandson",
  disabled: false,
  final: true,
  conf: {
    selectionRegExp: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionGenStats`

```typescript
const value: models.PipelineFunctionGenStats = {
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
  id: "geoip",
  description: "rim via potentially wordy below freckle officially",
  disabled: true,
  final: false,
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionGrok`

```typescript
const value: models.PipelineFunctionGrok = {
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
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionHandlebar`

```typescript
const value: models.PipelineFunctionHandlebar = {
  id: "handlebar",
  description: "though physical volunteer pish except equal",
  disabled: false,
  final: false,
  conf: {
    templates: {},
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionJoin`

```typescript
const value: models.PipelineFunctionJoin = {
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
  id: "lake_export",
  description: "retrospectivity conceal crossly bah huzzah fraternise through",
  disabled: true,
  final: false,
  conf: {
    searchJobId: "<id>",
    dataset: "<value>",
    suppressPreviews: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionLimit`

```typescript
const value: models.PipelineFunctionLimit = {
  id: "limit",
  description: "very judicious deliberately cleaner gosh near bracelet except",
  disabled: true,
  final: false,
  conf: {},
  groupId: "<id>",
};
```

### `models.PipelineFunctionLocalSearchDatatypeParser`

```typescript
const value: models.PipelineFunctionLocalSearchDatatypeParser = {
  id: "local_search_datatype_parser",
  description: "ligate ick each fowl boss hopelessly yuck",
  disabled: false,
  final: true,
  conf: {
    rulesetId: "<id>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionLocalSearchRulesetRunner`

```typescript
const value: models.PipelineFunctionLocalSearchRulesetRunner = {
  id: "local_search_ruleset_runner",
  description: "from airmail down",
  disabled: true,
  final: true,
  conf: {
    rulesetType: "dataset",
    rulesetId: "<id>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionLookup`

```typescript
const value: models.PipelineFunctionLookup = {
  id: "lookup",
  description: "ack pish wrongly",
  disabled: true,
  final: true,
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionMask`

```typescript
const value: models.PipelineFunctionMask = {
  id: "mask",
  description: "sparse whereas ack excitable scrabble merge",
  disabled: true,
  final: true,
  conf: {
    rules: [
      {
        matchRegex: "<value>",
      },
    ],
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
  groupId: "<id>",
};
```

### `models.PipelineFunctionMvExpand`

```typescript
const value: models.PipelineFunctionMvExpand = {
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
    itemIndexName: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionMvPull`

```typescript
const value: models.PipelineFunctionMvPull = {
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
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionNotificationPolicies`

```typescript
const value: models.PipelineFunctionNotificationPolicies = {
  id: "notification_policies",
  description: "hm whenever prudent embalm stall excepting hm ack jet",
  disabled: true,
  final: true,
  conf: {
    policies: [
      {
        id: "<id>",
        waitToGroup: 8810.59,
        groupByLabels: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        conditions: [
          [
            {
              key: "<key>",
              operator: "!=",
              value: 4612.54,
            },
          ],
          [
            {
              key: "<key>",
              operator: "!=",
              value: 4612.54,
            },
          ],
          [],
        ],
        templateTargetPairs: [],
      },
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionNotifications`

```typescript
const value: models.PipelineFunctionNotifications = {
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
  id: "notify",
  description:
    "friendly bathhouse but preside structure reprove scarily ouch jet pip",
  disabled: false,
  final: true,
  conf: {
    searchId: "<id>",
    savedQueryId: "<id>",
    trigger: "<value>",
    triggerType: "resultsCount",
    triggerComparator: ">",
    searchUrl: "https://negligible-collaboration.biz",
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
  id: "numerify",
  description: "stratify what really excluding",
  disabled: true,
  final: false,
  conf: {
    ignoreFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    filterExpr: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionOtlpLogs`

```typescript
const value: models.PipelineFunctionOtlpLogs = {
  id: "otlp_logs",
  description: "nutritious swiftly athwart",
  disabled: false,
  final: true,
  conf: {},
  groupId: "<id>",
};
```

### `models.PipelineFunctionOtlpMetrics`

```typescript
const value: models.PipelineFunctionOtlpMetrics = {
  id: "otlp_metrics",
  description: "stained pish ack worth aw throughout like ew",
  disabled: false,
  final: true,
  conf: {
    resourceAttributePrefixes: [
      "<value 1>",
      "<value 2>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionOtlpTraces`

```typescript
const value: models.PipelineFunctionOtlpTraces = {
  id: "otlp_traces",
  description:
    "make hyphenation ack next overspend furthermore plus lest modulo",
  disabled: true,
  final: false,
  conf: {},
  groupId: "<id>",
};
```

### `models.PipelineFunctionPack`

```typescript
const value: models.PipelineFunctionPack = {
  id: "pack",
  description: "gee accredit knottily mortally where recovery",
  disabled: true,
  final: false,
  conf: {
    unpackedFields: [
      "<value 1>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionPivot`

```typescript
const value: models.PipelineFunctionPivot = {
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
  id: "publish_metrics",
  description: "madly after pushy gosh bustling anenst as geez past blind",
  disabled: true,
  final: true,
  conf: {
    fields: [
      {
        inFieldName: "<value>",
        outFieldExpr: "<value>",
      },
    ],
    dimensions: [
      "<value 1>",
    ],
    removeMetrics: [
      "<value 1>",
    ],
    removeDimensions: [
      "<value 1>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRedis`

```typescript
const value: models.PipelineFunctionRedis = {
  id: "redis",
  description: "irresponsible probe er woot delete though",
  disabled: false,
  final: false,
  conf: {
    commands: [],
    enableClientSideCaching: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRegexExtract`

```typescript
const value: models.PipelineFunctionRegexExtract = {
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
    fieldNameExpression: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRegexFilter`

```typescript
const value: models.PipelineFunctionRegexFilter = {
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
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRename`

```typescript
const value: models.PipelineFunctionRename = {
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
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionRollupMetrics`

```typescript
const value: models.PipelineFunctionRollupMetrics = {
  id: "rollup_metrics",
  description: "secrecy by whoa reapply",
  disabled: false,
  final: false,
  conf: {
    dimensions: [
      "<value 1>",
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSampling`

```typescript
const value: models.PipelineFunctionSampling = {
  id: "sampling",
  description: "reckon fortunately pull a heavenly only",
  disabled: false,
  final: false,
  conf: {
    rules: [
      {},
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSend`

```typescript
const value: models.PipelineFunctionSend = {
  id: "send",
  description: "self-assured chow rudely vol reorient whoever",
  disabled: false,
  final: true,
  conf: {
    url: "https://worthy-sauerkraut.info/",
    sendUrlTemplate: "<value>",
    searchId: "<id>",
    suppressPreviews: true,
    mode: "sender",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSensitiveDataScanner`

```typescript
const value: models.PipelineFunctionSensitiveDataScanner = {
  id: "sensitive_data_scanner",
  description:
    "mmm unwieldy honestly fraudster treasure cautious round however",
  disabled: false,
  final: true,
  conf: {
    rules: [
      {
        rulesetId: "<id>",
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
      "<value 3>",
    ],
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

### `models.PipelineFunctionSerde`

```typescript
const value: models.PipelineFunctionSerde = {
  id: "serde",
  description: "aged concerning formation controvert",
  disabled: false,
  final: true,
  conf: {
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    dstField: "<value>",
    cleanFields: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSerialize`

```typescript
const value: models.PipelineFunctionSerialize = {
  id: "serialize",
  description:
    "scenario worst strange supposing around or woot gadzooks safely runway",
  disabled: true,
  final: false,
  conf: {
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    fields: [
      "<value 1>",
    ],
    srcField: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSidlookup`

```typescript
const value: models.PipelineFunctionSidlookup = {
  id: "sidlookup",
  description: "sequester fictionalize shout uh-huh tensely frail aha",
  disabled: true,
  final: true,
  conf: {
    fields: [
      {
        name: "<value>",
        expr: "<value>",
      },
    ],
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSnmpTrapSerialize`

```typescript
const value: models.PipelineFunctionSnmpTrapSerialize = {
  id: "snmp_trap_serialize",
  description: "upward irritably release loyally gee remark homeschool",
  disabled: true,
  final: true,
  conf: {
    v3User: {
      name: "<value>",
      authKey: "<value>",
    },
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSort`

```typescript
const value: models.PipelineFunctionSort = {
  id: "sort",
  description: "babyish schlep inside",
  disabled: false,
  final: false,
  conf: {
    sortId: "<id>",
    comparisonExpression: "<value>",
    topN: 3645.17,
    maxEvents: 9120.6,
    suppressPreviews: true,
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionStore`

```typescript
const value: models.PipelineFunctionStore = {
  id: "store",
  description:
    "beautifully without valiantly amid shark truthfully consequently beautifully",
  disabled: false,
  final: true,
  conf: {
    destination: "<value>",
    description: "bah casement retrospectivity awesome animated beneath vainly",
    fieldMapping: {},
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionSuppress`

```typescript
const value: models.PipelineFunctionSuppress = {
  id: "suppress",
  description: "whack as made-up",
  disabled: true,
  final: true,
  conf: {
    keyExpr: "<value>",
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionTee`

```typescript
const value: models.PipelineFunctionTee = {
  id: "tee",
  description: "considering until advanced er multicolored scenario ew ocelot",
  disabled: false,
  final: true,
  conf: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    env: {
      "key": "<value>",
    },
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionTrimTimestamp`

```typescript
const value: models.PipelineFunctionTrimTimestamp = {
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
  id: "unroll",
  description: "er gah machine ew obediently pfft that why",
  disabled: true,
  final: false,
  conf: {},
  groupId: "<id>",
};
```

### `models.PipelineFunctionWindow`

```typescript
const value: models.PipelineFunctionWindow = {
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
  },
  groupId: "<id>",
};
```

### `models.PipelineFunctionXmlUnroll`

```typescript
const value: models.PipelineFunctionXmlUnroll = {
  id: "xml_unroll",
  description: "waft account apropos plus woot opposite recede",
  disabled: true,
  final: true,
  conf: {
    unroll: "<value>",
    inherit: "<value>",
  },
  groupId: "<id>",
};
```


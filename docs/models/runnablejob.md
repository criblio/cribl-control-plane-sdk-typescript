# RunnableJob


## Supported Types

### `models.RunnableJobCollection`

```typescript
const value: models.RunnableJobCollection = {
  id: "<id>",
  description: "pro speedily woot sundae topsail instead issue about",
  type: "collection",
  removeFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  schedule: {
    enabled: false,
    run: {
      type: "collection",
      earliest: 3143.53,
      latest: 995.72,
      timestampTimezone: "<value>",
      timeWarning: {},
    },
  },
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  collector: {
    type: "google_cloud_storage",
    conf: {
      authType: "auto",
      outputName: "<value>",
      bucket: "<value>",
      path: "/usr/bin",
      extractors: [
        {
          key: "<key>",
          expression: "<value>",
        },
      ],
      endpoint: "<value>",
      disableTimeFilter: false,
      recurse: true,
      maxBatchSize: 10,
      parquetChunkSizeMB: 5,
      parquetChunkDownloadTimeout: 600,
    },
  },
  input: {
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    preprocess: {
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    pipeline: "<value>",
    output: "<value>",
  },
  run: {
    earliest: 3511.81,
    latest: 4537.69,
    timeWarning: {},
    capture: {},
  },
};
```

### `models.RunnableJobExecutor`

```typescript
const value: models.RunnableJobExecutor = {
  id: "<id>",
  description: "sore supposing once",
  type: "collection",
  removeFields: [
    "<value 1>",
  ],
  environment: "<value>",
  schedule: {
    enabled: false,
    run: {
      type: "collection",
      earliest: 3143.53,
      latest: 995.72,
      timestampTimezone: "<value>",
      timeWarning: {},
    },
  },
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  executor: {
    type: "<value>",
    conf: {},
  },
  run: {},
};
```

### `models.RunnableJobScheduledSearch`

```typescript
const value: models.RunnableJobScheduledSearch = {
  id: "<id>",
  description: "rust trouser amid easily only",
  type: "scheduledSearch",
  removeFields: [
    "<value 1>",
  ],
  environment: "<value>",
  schedule: {
    enabled: false,
    run: {
      type: "collection",
      earliest: 3143.53,
      latest: 995.72,
      timestampTimezone: "<value>",
      timeWarning: {},
    },
  },
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  savedQueryId: "<id>",
};
```


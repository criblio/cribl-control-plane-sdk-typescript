# SavedJob


## Supported Types

### `models.SavedJobCollection`

```typescript
const value: models.SavedJobCollection = {
  id: "<id>",
  description: "shrilly alongside fluffy magnetize offensively",
  type: "collection",
  removeFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  schedule: {
    enabled: true,
    run: {
      type: "collection",
      earliest: 475.38,
      latest: 1125.35,
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
      path: "/Applications",
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
};
```

### `models.SavedJobExecutor`

```typescript
const value: models.SavedJobExecutor = {
  id: "<id>",
  description:
    "aw definitive shoddy phooey naturally unselfish plain strange funny",
  type: "executor",
  removeFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  schedule: {
    enabled: true,
    run: {
      type: "collection",
      earliest: 475.38,
      latest: 1125.35,
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
};
```

### `models.SavedJobScheduledSearch`

```typescript
const value: models.SavedJobScheduledSearch = {
  id: "<id>",
  description: "hoof profane woot",
  type: "collection",
  removeFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  schedule: {
    enabled: true,
    run: {
      type: "collection",
      earliest: 475.38,
      latest: 1125.35,
      timestampTimezone: "<value>",
      timeWarning: {},
    },
  },
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  savedQueryId: "<id>",
};
```


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
    enabled: false,
    run: {
      type: "collection",
      earliest: 4703.26,
      latest: 1623.48,
      timestampTimezone: "<value>",
      timeWarning: {},
    },
  },
  streamtags: [
    "<value 1>",
  ],
  collector: {
    type: "<value>",
    conf: {
      discovery: {
        discoverType: "none",
      },
      collectUrl: "https://late-pantyhose.name",
      collectMethod: "get",
      collectRequestParams: "<value>",
      collectBody: "<value>",
      collectRequestHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authenticateCollect: false,
      authentication: "none",
      timeout: 30,
      rejectUnauthorized: false,
      defaultBreakers: "Cribl",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      retryRules: {
        type: "backoff",
        interval: "<value>",
        limit: "<value>",
        multiplier: "<value>",
        codes: "<value>",
        enableHeader: "<value>",
      },
      type: "health_check",
    },
    encoding: "<value>",
  },
  input: {
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    preprocess: {
      command: "<value>",
      args: [
        "<value 1>",
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
    enabled: false,
    run: {
      type: "collection",
      earliest: 4451.51,
      latest: 2316.29,
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


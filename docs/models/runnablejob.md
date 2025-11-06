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
      earliest: 4246.89,
      latest: 1357.74,
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
    type: "<value>",
    conf: {},
    encoding: "<value>",
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
    earliest: 9029.54,
    latest: 8097.94,
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
      earliest: 6868.42,
      latest: 7176.81,
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
      earliest: 2827.78,
      latest: 2072.76,
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


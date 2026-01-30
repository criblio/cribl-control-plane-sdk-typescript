# RunnableJob


## Supported Types

### `models.RunnableJobCollection`

```typescript
const value: models.RunnableJobCollection = {
  id: "<id>",
  description: "pro speedily woot sundae topsail instead issue about",
  type: "collection",
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  removeFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  resumeOnBoot: true,
  environment: "<value>",
  schedule: {
    enabled: true,
    skippable: true,
    resumeMissed: true,
    cronSchedule: "<value>",
    maxConcurrentRuns: 1167.02,
    run: {
      type: "collection",
      rescheduleDroppedTasks: false,
      maxTaskReschedule: 613.65,
      logLevel: "info",
      jobTimeout: "<value>",
      mode: "<value>",
      timeRangeType: "<value>",
      earliest: 5558.09,
      latest: 8290.6,
      timestampTimezone: "<value>",
      timeWarning: {},
      expression: "<value>",
      minTaskSize: "<value>",
      maxTaskSize: "<value>",
    },
  },
  streamtags: [
    "<value 1>",
  ],
  workerAffinity: false,
  collector: {
    type: "filesystem",
    conf: {
      outputName: "<value>",
      path: "/private",
      extractors: [
        {
          key: "<key>",
          expression: "<value>",
        },
      ],
      recurse: false,
      maxBatchSize: 8097.94,
    },
    destructive: true,
    encoding: "<value>",
  },
  input: {
    type: "collection",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 4690.93,
    sendToRoutes: false,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
      ],
    },
    throttleRatePerSec: "<value>",
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
    rescheduleDroppedTasks: false,
    maxTaskReschedule: 2517.82,
    logLevel: "debug",
    jobTimeout: "<value>",
    mode: "preview",
    timeRangeType: "relative",
    earliest: 6410.59,
    latest: 397.83,
    timestampTimezone: "<value>",
    timeWarning: {},
    expression: "<value>",
    minTaskSize: "<value>",
    maxTaskSize: "<value>",
    discoverToRoutes: true,
    capture: {
      duration: 7810.09,
      maxEvents: 3852.63,
      level: 0,
    },
  },
};
```

### `models.RunnableJobExecutor`

```typescript
const value: models.RunnableJobExecutor = {
  id: "<id>",
  description: "sore supposing once",
  type: "collection",
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  removeFields: [
    "<value 1>",
    "<value 2>",
  ],
  resumeOnBoot: true,
  environment: "<value>",
  schedule: {
    enabled: true,
    skippable: true,
    resumeMissed: true,
    cronSchedule: "<value>",
    maxConcurrentRuns: 1167.02,
    run: {
      type: "collection",
      rescheduleDroppedTasks: false,
      maxTaskReschedule: 613.65,
      logLevel: "info",
      jobTimeout: "<value>",
      mode: "<value>",
      timeRangeType: "<value>",
      earliest: 5558.09,
      latest: 8290.6,
      timestampTimezone: "<value>",
      timeWarning: {},
      expression: "<value>",
      minTaskSize: "<value>",
      maxTaskSize: "<value>",
    },
  },
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  executor: {
    type: "<value>",
    storeTaskResults: true,
    conf: {},
  },
  run: {
    rescheduleDroppedTasks: true,
    maxTaskReschedule: 8551.94,
    logLevel: "info",
    jobTimeout: "<value>",
  },
};
```

### `models.RunnableJobScheduledSearch`

```typescript
const value: models.RunnableJobScheduledSearch = {
  id: "<id>",
  description: "rust trouser amid easily only",
  type: "scheduledSearch",
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  removeFields: [
    "<value 1>",
    "<value 2>",
  ],
  resumeOnBoot: true,
  environment: "<value>",
  schedule: {
    enabled: true,
    skippable: true,
    resumeMissed: true,
    cronSchedule: "<value>",
    maxConcurrentRuns: 1167.02,
    run: {
      type: "collection",
      rescheduleDroppedTasks: false,
      maxTaskReschedule: 613.65,
      logLevel: "info",
      jobTimeout: "<value>",
      mode: "<value>",
      timeRangeType: "<value>",
      earliest: 5558.09,
      latest: 8290.6,
      timestampTimezone: "<value>",
      timeWarning: {},
      expression: "<value>",
      minTaskSize: "<value>",
      maxTaskSize: "<value>",
    },
  },
  streamtags: [
    "<value 1>",
  ],
  savedQueryId: "<id>",
};
```


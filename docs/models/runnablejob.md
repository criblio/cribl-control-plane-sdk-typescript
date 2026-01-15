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
      path: "/Library",
      extractors: [
        {
          key: "<key>",
          expression: "<value>",
        },
      ],
      recurse: false,
      maxBatchSize: 4087.23,
    },
  },
  input: {
    type: "collection",
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 640.43,
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
    rescheduleDroppedTasks: true,
    maxTaskReschedule: 9029.54,
    logLevel: "silly",
    jobTimeout: "<value>",
    mode: "list",
    timeRangeType: "relative",
    earliest: 4690.93,
    latest: 7522.84,
    timestampTimezone: "<value>",
    timeWarning: {},
    expression: "<value>",
    minTaskSize: "<value>",
    maxTaskSize: "<value>",
    discoverToRoutes: false,
    capture: {
      duration: 2517.82,
      maxEvents: 7307.09,
      level: 2,
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
    maxTaskReschedule: 3930.98,
    logLevel: "silly",
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


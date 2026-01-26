# SavedJob


## Supported Types

### `models.SavedJobCollection`

```typescript
const value: models.SavedJobCollection = {
  id: "<id>",
  description: "shrilly alongside fluffy magnetize offensively",
  type: "collection",
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  removeFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  resumeOnBoot: true,
  environment: "<value>",
  schedule: {
    enabled: true,
    skippable: false,
    resumeMissed: true,
    cronSchedule: "<value>",
    maxConcurrentRuns: 6515.34,
    run: {
      type: "collection",
      rescheduleDroppedTasks: true,
      maxTaskReschedule: 981.31,
      logLevel: "warn",
      jobTimeout: "<value>",
      mode: "<value>",
      timeRangeType: "<value>",
      earliest: 6541.75,
      latest: 2881.28,
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
  workerAffinity: true,
  collector: {
    type: "health_check",
    conf: {
      authentication: "oauth",
      loginUrl: "https://proper-majority.info/",
      tokenRespAttribute: "<value>",
      authHeaderExpr: "<value>",
      clientSecretParamName: "<value>",
      clientSecretParamValue: "<value>",
      authRequestParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authRequestHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      discovery: {
        discoverType: "none",
      },
      collectUrl: "https://zesty-fundraising.net/",
      collectMethod: "post",
      collectRequestParams: "<value>",
      collectBody: "<value>",
      collectRequestHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authenticateCollect: false,
      timeout: 3050.03,
      rejectUnauthorized: false,
      defaultBreakers: "Cribl",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      retryRules: {
        type: "none",
        interval: "<value>",
        limit: "<value>",
        multiplier: "<value>",
        codes: "<value>",
        enableHeader: "<value>",
      },
    },
    destructive: true,
    encoding: "<value>",
  },
  input: {
    type: "collection",
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 7596.83,
    sendToRoutes: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
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
};
```

### `models.SavedJobExecutor`

```typescript
const value: models.SavedJobExecutor = {
  id: "<id>",
  description:
    "aw definitive shoddy phooey naturally unselfish plain strange funny",
  type: "executor",
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  removeFields: [
    "<value 1>",
    "<value 2>",
  ],
  resumeOnBoot: false,
  environment: "<value>",
  schedule: {
    enabled: true,
    skippable: false,
    resumeMissed: true,
    cronSchedule: "<value>",
    maxConcurrentRuns: 6515.34,
    run: {
      type: "collection",
      rescheduleDroppedTasks: true,
      maxTaskReschedule: 981.31,
      logLevel: "warn",
      jobTimeout: "<value>",
      mode: "<value>",
      timeRangeType: "<value>",
      earliest: 6541.75,
      latest: 2881.28,
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
  ],
  executor: {
    type: "<value>",
    storeTaskResults: true,
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
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  removeFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  resumeOnBoot: true,
  environment: "<value>",
  schedule: {
    enabled: true,
    skippable: false,
    resumeMissed: true,
    cronSchedule: "<value>",
    maxConcurrentRuns: 6515.34,
    run: {
      type: "collection",
      rescheduleDroppedTasks: true,
      maxTaskReschedule: 981.31,
      logLevel: "warn",
      jobTimeout: "<value>",
      mode: "<value>",
      timeRangeType: "<value>",
      earliest: 6541.75,
      latest: 2881.28,
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


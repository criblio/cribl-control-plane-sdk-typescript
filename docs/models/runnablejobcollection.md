# RunnableJobCollection

## Example Usage

```typescript
import { RunnableJobCollection } from "cribl-control-plane/models";

let value: RunnableJobCollection = {
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
  run: {
    rescheduleDroppedTasks: false,
    maxTaskReschedule: 8097.94,
    logLevel: "warn",
    jobTimeout: "<value>",
    mode: "preview",
    timeRangeType: "absolute",
    earliest: 7522.84,
    latest: 6416.24,
    timestampTimezone: "<value>",
    timeWarning: {},
    expression: "<value>",
    minTaskSize: "<value>",
    maxTaskSize: "<value>",
    discoverToRoutes: true,
    capture: {
      duration: 7307.09,
      maxEvents: 5613.36,
      level: 3,
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Unique ID for this Job                                                                                                                                                                                   |
| `description`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `type`                                                                                                                                                                                                   | [models.JobTypeOptionsSavedJobCollection](../models/jobtypeoptionssavedjobcollection.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `ttl`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Time to keep the job's artifacts on disk after job completion. This also affects how long a job is listed in the Job Inspector.                                                                          |
| `ignoreGroupJobsLimit`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | When enabled, this job's artifacts are not counted toward the Worker Group's finished job artifacts limit. Artifacts will be removed only after the Collector's configured time to live.                 |
| `removeFields`                                                                                                                                                                                           | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | List of fields to remove from Discover results. Wildcards (for example, aws*) are allowed. This is useful when discovery returns sensitive fields that should not be exposed in the Jobs user interface. |
| `resumeOnBoot`                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | Resume the ad hoc job if a failure condition causes Stream to restart during job execution                                                                                                               |
| `environment`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                     |
| `schedule`                                                                                                                                                                                               | [models.ScheduleTypeRunnableJobCollection](../models/scheduletyperunnablejobcollection.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | Configuration for a scheduled job                                                                                                                                                                        |
| `streamtags`                                                                                                                                                                                             | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | Tags for filtering and grouping in @{product}                                                                                                                                                            |
| `workerAffinity`                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | If enabled, tasks are created and run by the same Worker Node                                                                                                                                            |
| `collector`                                                                                                                                                                                              | *models.Collector*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                       | Collector configuration                                                                                                                                                                                  |
| `input`                                                                                                                                                                                                  | [models.TypeCollectionWithBreakerRulesetsConstraint](../models/typecollectionwithbreakerrulesetsconstraint.md)                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `run`                                                                                                                                                                                                    | [models.RunnableJobCollectionRun](../models/runnablejobcollectionrun.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
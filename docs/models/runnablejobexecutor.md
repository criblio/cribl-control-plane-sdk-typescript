# RunnableJobExecutor

## Example Usage

```typescript
import { RunnableJobExecutor } from "cribl-control-plane/models";

let value: RunnableJobExecutor = {
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

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Unique ID for this Job                                                                                                                                                                                   |
| `description`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `type`                                                                                                                                                                                                   | [models.JobTypeOptionsRunnableJobCollection](../models/jobtypeoptionsrunnablejobcollection.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `ttl`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Time to keep the job's artifacts on disk after job completion. This also affects how long a job is listed in the Job Inspector.                                                                          |
| `ignoreGroupJobsLimit`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | When enabled, this job's artifacts are not counted toward the Worker Group's finished job artifacts limit. Artifacts will be removed only after the Collector's configured time to live.                 |
| `removeFields`                                                                                                                                                                                           | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | List of fields to remove from Discover results. Wildcards (for example, aws*) are allowed. This is useful when discovery returns sensitive fields that should not be exposed in the Jobs user interface. |
| `resumeOnBoot`                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | Resume the ad hoc job if a failure condition causes Stream to restart during job execution                                                                                                               |
| `environment`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                     |
| `schedule`                                                                                                                                                                                               | [models.ScheduleTypeRunnableJobCollection](../models/scheduletyperunnablejobcollection.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | Configuration for a scheduled job                                                                                                                                                                        |
| `streamtags`                                                                                                                                                                                             | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | Tags for filtering and grouping in @{product}                                                                                                                                                            |
| `executor`                                                                                                                                                                                               | [models.ExecutorTypeRunnableJobExecutor](../models/executortyperunnablejobexecutor.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `run`                                                                                                                                                                                                    | [models.RunnableJobExecutorRun](../models/runnablejobexecutorrun.md)                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
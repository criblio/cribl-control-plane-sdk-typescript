# SavedJobExecutor

## Example Usage

```typescript
import { SavedJobExecutor } from "cribl-control-plane/models";

let value: SavedJobExecutor = {
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

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Unique ID for this Job                                                                                                                                                                                   |
| `description`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `type`                                                                                                                                                                                                   | [models.JobTypeOptionsSavedJobCollection](../models/jobtypeoptionssavedjobcollection.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `ttl`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Time to keep the job's artifacts on disk after job completion. This also affects how long a job is listed in the Job Inspector.                                                                          |
| `ignoreGroupJobsLimit`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | When enabled, this job's artifacts are not counted toward the Worker Group's finished job artifacts limit. Artifacts will be removed only after the Collector's configured time to live.                 |
| `removeFields`                                                                                                                                                                                           | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | List of fields to remove from Discover results. Wildcards (for example, aws*) are allowed. This is useful when discovery returns sensitive fields that should not be exposed in the Jobs user interface. |
| `resumeOnBoot`                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | Resume the ad hoc job if a failure condition causes Stream to restart during job execution                                                                                                               |
| `environment`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                     |
| `schedule`                                                                                                                                                                                               | [models.ScheduleTypeSavedJobCollection](../models/scheduletypesavedjobcollection.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                       | Configuration for a scheduled job                                                                                                                                                                        |
| `streamtags`                                                                                                                                                                                             | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | Tags for filtering and grouping in @{product}                                                                                                                                                            |
| `executor`                                                                                                                                                                                               | [models.ExecutorTypeSavedJobExecutor](../models/executortypesavedjobexecutor.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
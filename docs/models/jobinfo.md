# JobInfo

## Example Usage

```typescript
import { JobInfo } from "cribl-control-plane/models";

let value: JobInfo = {
  args: {
    id: "<id>",
    description: "astride where huzzah till",
    type: "executor",
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    removeFields: [
      "<value 1>",
      "<value 2>",
    ],
    resumeOnBoot: false,
    environment: "<value>",
    schedule: {
      enabled: true,
      cronSchedule: "*/5 * * * *",
      maxConcurrentRuns: 1,
      skippable: true,
      resumeMissed: "<value>",
      run: {
        type: "collection",
        rescheduleDroppedTasks: true,
        maxTaskReschedule: 1,
        logLevel: "info",
        jobTimeout: "0",
        mode: "list",
        timeRangeType: "relative",
        earliest: 5516.53,
        latest: 4479.75,
        timestampTimezone: "<value>",
        timeWarning: {},
        expression: "true",
        minTaskSize: "1MB",
        maxTaskSize: "10MB",
      },
    },
    streamtags: [
      "<value 1>",
    ],
    executor: {
      type: "<value>",
      storeTaskResults: true,
      conf: {},
    },
    run: {
      rescheduleDroppedTasks: true,
      maxTaskReschedule: 1,
      logLevel: "info",
      jobTimeout: "0",
    },
  },
  id: "<id>",
  keep: true,
  stats: {
    "key": 4311.98,
    "key1": 280.71,
  },
  status: {
    reason: {
      "key": "<value>",
    },
    state: {},
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `args`                                     | *models.RunnableJob*                       | :heavy_check_mark:                         | N/A                                        |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `keep`                                     | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        |
| `stats`                                    | Record<string, *number*>                   | :heavy_check_mark:                         | N/A                                        |
| `status`                                   | [models.JobStatus](../models/jobstatus.md) | :heavy_check_mark:                         | N/A                                        |
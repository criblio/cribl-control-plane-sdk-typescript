# JobInfo

## Example Usage

```typescript
import { JobInfo } from "cribl-control-plane/models";

let value: JobInfo = {
  args: {
    id: "<id>",
    description: "microblog um furiously",
    type: "scheduledSearch",
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    removeFields: [
      "<value 1>",
      "<value 2>",
    ],
    resumeOnBoot: false,
    environment: "<value>",
    schedule: {
      enabled: false,
      skippable: true,
      resumeMissed: false,
      cronSchedule: "*/5 * * * *",
      maxConcurrentRuns: 1,
      run: {
        type: "collection",
        rescheduleDroppedTasks: true,
        maxTaskReschedule: 1,
        logLevel: "info",
        jobTimeout: "0",
        mode: "list",
        timeRangeType: "relative",
        earliest: 3143.53,
        latest: 995.72,
        timestampTimezone: "<value>",
        timeWarning: {},
        expression: "true",
        minTaskSize: "1MB",
        maxTaskSize: "10MB",
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
    "key": 280.71,
  },
  status: {
    reason: {
      "key": "<value>",
      "key1": "<value>",
    },
    state: 0,
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `args`                                                        | *models.RunnableJob*                                          | :heavy_check_mark:                                            | N/A                                                           |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `keep`                                                        | *boolean*                                                     | :heavy_minus_sign:                                            | N/A                                                           |
| `stats`                                                       | Record<string, *models.AdditionalPropertiesTypeJobInfoStats*> | :heavy_check_mark:                                            | N/A                                                           |
| `status`                                                      | [models.JobStatus](../models/jobstatus.md)                    | :heavy_check_mark:                                            | N/A                                                           |
# JobInfo

## Example Usage

```typescript
import { JobInfo } from "cribl-control-plane/models";

let value: JobInfo = {
  args: {
    id: "<id>",
    description: "microblog um furiously",
    type: "scheduledSearch",
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
    state: 9,
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
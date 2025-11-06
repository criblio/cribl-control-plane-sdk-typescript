# CountedListJobInfo

## Example Usage

```typescript
import { CountedListJobInfo } from "cribl-control-plane/models";

let value: CountedListJobInfo = {
  count: 10835,
  items: [
    {
      args: {
        id: "<id>",
        description: "curiously chairperson rapidly singe",
        type: "scheduledSearch",
        ttl: "4h",
        ignoreGroupJobsLimit: false,
        removeFields: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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
            earliest: 6868.42,
            latest: 7176.81,
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
        "key": 812.09,
      },
      status: {
        reason: {
          "key": "<value>",
        },
        state: 9,
      },
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.JobInfo](../models/jobinfo.md)[]   | :heavy_minus_sign:                         | N/A                                        |
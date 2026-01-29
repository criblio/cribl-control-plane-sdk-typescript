# CountedJobInfo

## Example Usage

```typescript
import { CountedJobInfo } from "cribl-control-plane/models";

let value: CountedJobInfo = {
  count: 945460,
  items: [
    {
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
          maxTaskReschedule: 8551.94,
          logLevel: "info",
          jobTimeout: "<value>",
        },
      },
      id: "<id>",
      keep: true,
      stats: {},
      status: {
        reason: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        state: 7,
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
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
          run: {},
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
      stats: {},
      status: {
        reason: {
          "key": "<value>",
        },
        state: 1,
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
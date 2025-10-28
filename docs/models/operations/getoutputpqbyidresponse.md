# GetOutputPqByIdResponse

a list of JobInfo objects

## Example Usage

```typescript
import { GetOutputPqByIdResponse } from "cribl-control-plane/models/operations";

let value: GetOutputPqByIdResponse = {
  count: 48464,
  items: [
    {
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
      stats: {},
      status: {
        reason: {
          "key": "<value>",
        },
        state: {},
      },
    },
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `count`                                     | *number*                                    | :heavy_minus_sign:                          | number of items present in the items array  |
| `items`                                     | [models.JobInfo](../../models/jobinfo.md)[] | :heavy_minus_sign:                          | N/A                                         |
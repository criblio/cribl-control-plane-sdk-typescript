# CountedSavedJob

## Example Usage

```typescript
import { CountedSavedJob } from "cribl-control-plane/models";

let value: CountedSavedJob = {
  count: 243033,
  items: [
    {
      id: "<id>",
      description:
        "woot nor phew disbar yahoo drat gladly blank wherever clueless",
      type: "executor",
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
          earliest: 475.38,
          latest: 1125.35,
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
        "<value 3>",
      ],
      executor: {
        type: "<value>",
        storeTaskResults: true,
        conf: {},
      },
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.SavedJob*[]                        | :heavy_minus_sign:                         | N/A                                        |
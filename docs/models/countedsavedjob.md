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
      ttl: "<value>",
      ignoreGroupJobsLimit: false,
      removeFields: [
        "<value 1>",
        "<value 2>",
      ],
      resumeOnBoot: true,
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
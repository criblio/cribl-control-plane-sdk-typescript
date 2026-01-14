# ScheduleTypeSavedJobCollection

Configuration for a scheduled job

## Example Usage

```typescript
import { ScheduleTypeSavedJobCollection } from "cribl-control-plane/models";

let value: ScheduleTypeSavedJobCollection = {
  enabled: true,
  skippable: false,
  resumeMissed: true,
  cronSchedule: "<value>",
  maxConcurrentRuns: 7940.73,
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
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                  | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Enable to configure scheduling for this Collector                                                          |
| `skippable`                                                                                                | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits      |
| `resumeMissed`                                                                                             | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | If Stream Leader (or single instance) restarts, run all missed jobs according to their original schedules  |
| `cronSchedule`                                                                                             | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A cron schedule on which to run this job                                                                   |
| `maxConcurrentRuns`                                                                                        | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The maximum number of instances of this scheduled job that may be running at any time                      |
| `run`                                                                                                      | [models.ScheduleTypeSavedJobCollectionRunSettings](../models/scheduletypesavedjobcollectionrunsettings.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
# ScheduleTypeRunnableJobCollection

Configuration for a scheduled job

## Example Usage

```typescript
import { ScheduleTypeRunnableJobCollection } from "cribl-control-plane/models";

let value: ScheduleTypeRunnableJobCollection = {
  enabled: false,
  skippable: false,
  resumeMissed: false,
  cronSchedule: "<value>",
  maxConcurrentRuns: 8811.35,
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
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                        | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Enable to configure scheduling for this Collector                                                                |
| `skippable`                                                                                                      | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits            |
| `resumeMissed`                                                                                                   | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | If Stream Leader (or single instance) restarts, run all missed jobs according to their original schedules        |
| `cronSchedule`                                                                                                   | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A cron schedule on which to run this job                                                                         |
| `maxConcurrentRuns`                                                                                              | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The maximum number of instances of this scheduled job that may be running at any time                            |
| `run`                                                                                                            | [models.ScheduleTypeRunnableJobCollectionRunSettings](../models/scheduletyperunnablejobcollectionrunsettings.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
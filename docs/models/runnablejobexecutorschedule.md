# RunnableJobExecutorSchedule

Configuration for a scheduled job

## Example Usage

```typescript
import { RunnableJobExecutorSchedule } from "cribl-control-plane/models";

let value: RunnableJobExecutorSchedule = {
  enabled: false,
  resumeMissed: "<value>",
  run: {
    type: "collection",
    earliest: 5516.53,
    latest: 4479.75,
    timestampTimezone: "<value>",
    timeWarning: {},
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                             | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Enable to configure scheduling for this Collector                                                     |
| `cronSchedule`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | A cron schedule on which to run this job                                                              |
| `maxConcurrentRuns`                                                                                   | *number*                                                                                              | :heavy_minus_sign:                                                                                    | The maximum number of instances of this scheduled job that may be running at any time                 |
| `skippable`                                                                                           | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits |
| `resumeMissed`                                                                                        | *any*                                                                                                 | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `run`                                                                                                 | [models.RunnableJobExecutorRunSettings](../models/runnablejobexecutorrunsettings.md)                  | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
# SavedJobCollectionSchedule

Configuration for a scheduled job

## Example Usage

```typescript
import { SavedJobCollectionSchedule } from "cribl-control-plane/models";

let value: SavedJobCollectionSchedule = {
  enabled: true,
  run: {
    type: "collection",
    earliest: 4703.26,
    latest: 1623.48,
    timestampTimezone: "<value>",
    timeWarning: {},
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                 | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Enable to configure scheduling for this Collector                                                         |
| `skippable`                                                                                               | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Skippable jobs can be delayed, up to their next run time, if the system is hitting concurrency limits     |
| `resumeMissed`                                                                                            | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | If Stream Leader (or single instance) restarts, run all missed jobs according to their original schedules |
| `cronSchedule`                                                                                            | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | A cron schedule on which to run this job                                                                  |
| `maxConcurrentRuns`                                                                                       | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | The maximum number of instances of this scheduled job that may be running at any time                     |
| `run`                                                                                                     | [models.SavedJobCollectionRunSettings](../models/savedjobcollectionrunsettings.md)                        | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
# SavedJobResponse

## Example Usage

```typescript
import { SavedJobResponse } from "cribl-control-plane/models";

let value: SavedJobResponse = {
  id: "<id>",
  notifications: [
    {
      condition: "<value>",
      conf: {},
      id: "<id>",
      targetDetails: [
        {
          id: "<id>",
          type: "smtp",
        },
      ],
      targets: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
  schedule: {
    enabled: true,
    run: {},
    tz: "UTC",
  },
  type: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `environment`                                                                                                                                                                            | *string*                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                       | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                     |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | Unique ID for this Job.                                                                                                                                                                  |
| `ignoreGroupJobsLimit`                                                                                                                                                                   | *boolean*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                       | When enabled, this job's artifacts are not counted toward the Worker Group's finished job artifacts limit. Artifacts will be removed only after the Collector's configured time to live. |
| `notifications`                                                                                                                                                                          | [models.Notification](../models/notification.md)[]                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                       | Notification targets.                                                                                                                                                                    |
| `resumeOnBoot`                                                                                                                                                                           | *boolean*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                       | Resume the ad hoc job if a failure condition causes Stream to restart during job execution.                                                                                              |
| `savedState`                                                                                                                                                                             | Record<string, [models.CollectionStateEntry](../models/collectionstateentry.md)>                                                                                                         | :heavy_minus_sign:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `schedule`                                                                                                                                                                               | [models.ScheduleOpts](../models/scheduleopts.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `ttl`                                                                                                                                                                                    | *string*                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                       | Time to keep the job's artifacts on disk after job completion. This also affects how long a job is listed in the Job Inspector.                                                          |
| `type`                                                                                                                                                                                   | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | Job type: collection, executor, or scheduledSearch.                                                                                                                                      |
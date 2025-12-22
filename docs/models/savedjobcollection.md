# SavedJobCollection

## Example Usage

```typescript
import { SavedJobCollection } from "cribl-control-plane/models";

let value: SavedJobCollection = {
  id: "<id>",
  description: "shrilly alongside fluffy magnetize offensively",
  type: "collection",
  removeFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  schedule: {
    enabled: false,
    run: {
      type: "collection",
      earliest: 4703.26,
      latest: 1623.48,
      timestampTimezone: "<value>",
      timeWarning: {},
    },
  },
  streamtags: [
    "<value 1>",
  ],
  collector: {
    type: "health_check",
    conf: {
      discovery: {
        discoverType: "none",
      },
      collectUrl: "https://late-pantyhose.name",
      collectMethod: "get",
      collectRequestParams: "<value>",
      collectBody: "<value>",
      collectRequestHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authenticateCollect: false,
      authentication: "none",
      timeout: 30,
      rejectUnauthorized: false,
      defaultBreakers: "Cribl",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      retryRules: {
        type: "backoff",
        interval: "<value>",
        limit: "<value>",
        multiplier: "<value>",
        codes: "<value>",
        enableHeader: "<value>",
      },
    },
  },
  input: {
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    preprocess: {
      command: "<value>",
      args: [
        "<value 1>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    pipeline: "<value>",
    output: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Unique ID for this Job                                                                                                                                                                                   |
| `description`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `type`                                                                                                                                                                                                   | [models.SavedJobCollectionJobType](../models/savedjobcollectionjobtype.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `ttl`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Time to keep the job's artifacts on disk after job completion. This also affects how long a job is listed in the Job Inspector.                                                                          |
| `ignoreGroupJobsLimit`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | When enabled, this job's artifacts are not counted toward the Worker Group's finished job artifacts limit. Artifacts will be removed only after the Collector's configured time to live.                 |
| `removeFields`                                                                                                                                                                                           | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | List of fields to remove from Discover results. Wildcards (for example, aws*) are allowed. This is useful when discovery returns sensitive fields that should not be exposed in the Jobs user interface. |
| `resumeOnBoot`                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | Resume the ad hoc job if a failure condition causes Stream to restart during job execution                                                                                                               |
| `environment`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                     |
| `schedule`                                                                                                                                                                                               | [models.SavedJobCollectionSchedule](../models/savedjobcollectionschedule.md)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                       | Configuration for a scheduled job                                                                                                                                                                        |
| `streamtags`                                                                                                                                                                                             | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | Tags for filtering and grouping in @{product}                                                                                                                                                            |
| `workerAffinity`                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | If enabled, tasks are created and run by the same Worker Node                                                                                                                                            |
| `collector`                                                                                                                                                                                              | *models.Collector*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                       | Collector config wrapper                                                                                                                                                                                 |
| `input`                                                                                                                                                                                                  | [models.SavedJobCollectionInput](../models/savedjobcollectioninput.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
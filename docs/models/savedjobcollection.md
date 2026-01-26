# SavedJobCollection

## Example Usage

```typescript
import { SavedJobCollection } from "cribl-control-plane/models";

let value: SavedJobCollection = {
  id: "<id>",
  description: "shrilly alongside fluffy magnetize offensively",
  type: "collection",
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  removeFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  ],
  workerAffinity: true,
  collector: {
    type: "health_check",
    conf: {
      authentication: "oauth",
      loginUrl: "https://proper-majority.info/",
      tokenRespAttribute: "<value>",
      authHeaderExpr: "<value>",
      clientSecretParamName: "<value>",
      clientSecretParamValue: "<value>",
      authRequestParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authRequestHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      discovery: {
        discoverType: "none",
      },
      collectUrl: "https://zesty-fundraising.net/",
      collectMethod: "post",
      collectRequestParams: "<value>",
      collectBody: "<value>",
      collectRequestHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      authenticateCollect: false,
      timeout: 3050.03,
      rejectUnauthorized: false,
      defaultBreakers: "Cribl",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      retryRules: {
        type: "none",
        interval: "<value>",
        limit: "<value>",
        multiplier: "<value>",
        codes: "<value>",
        enableHeader: "<value>",
      },
    },
    destructive: true,
    encoding: "<value>",
  },
  input: {
    type: "collection",
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 7596.83,
    sendToRoutes: false,
    preprocess: {
      disabled: true,
      command: "<value>",
      args: [
        "<value 1>",
        "<value 2>",
      ],
    },
    throttleRatePerSec: "<value>",
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
| `type`                                                                                                                                                                                                   | [models.JobTypeOptionsSavedJobCollection](../models/jobtypeoptionssavedjobcollection.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
| `ttl`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Time to keep the job's artifacts on disk after job completion. This also affects how long a job is listed in the Job Inspector.                                                                          |
| `ignoreGroupJobsLimit`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | When enabled, this job's artifacts are not counted toward the Worker Group's finished job artifacts limit. Artifacts will be removed only after the Collector's configured time to live.                 |
| `removeFields`                                                                                                                                                                                           | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | List of fields to remove from Discover results. Wildcards (for example, aws*) are allowed. This is useful when discovery returns sensitive fields that should not be exposed in the Jobs user interface. |
| `resumeOnBoot`                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | Resume the ad hoc job if a failure condition causes Stream to restart during job execution                                                                                                               |
| `environment`                                                                                                                                                                                            | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                     |
| `schedule`                                                                                                                                                                                               | [models.ScheduleTypeSavedJobCollection](../models/scheduletypesavedjobcollection.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                       | Configuration for a scheduled job                                                                                                                                                                        |
| `streamtags`                                                                                                                                                                                             | *string*[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                       | Tags for filtering and grouping in @{product}                                                                                                                                                            |
| `workerAffinity`                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | If enabled, tasks are created and run by the same Worker Node                                                                                                                                            |
| `collector`                                                                                                                                                                                              | *models.Collector*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                       | Collector configuration                                                                                                                                                                                  |
| `input`                                                                                                                                                                                                  | [models.TypeCollectionWithBreakerRulesetsConstraint](../models/typecollectionwithbreakerrulesetsconstraint.md)                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |
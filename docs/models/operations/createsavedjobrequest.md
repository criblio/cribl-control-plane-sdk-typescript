# CreateSavedJobRequest

## Example Usage

```typescript
import { CreateSavedJobRequest } from "cribl-control-plane/models/operations";

let value: CreateSavedJobRequest = {
  criblPack: "<value>",
  savedJob: {
    id: "<id>",
    description: "shakily regular tightly up gah till",
    type: "executor",
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    removeFields: [
      "<value 1>",
    ],
    resumeOnBoot: false,
    environment: "<value>",
    schedule: {
      enabled: false,
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
        earliest: 4703.26,
        latest: 1623.48,
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
    ],
    workerAffinity: false,
    collector: {
      type: "database",
      conf: {
        connectionId: "<id>",
        query: "<value>",
        queryValidationEnabled: true,
        defaultBreakers: "Cribl",
        scheduling: {
          stateTracking: {
            enabled: true,
          },
        },
      },
    },
    input: {
      type: "collection",
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 10000,
      sendToRoutes: true,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      throttleRatePerSec: "0",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pipeline: "<value>",
      output: "<value>",
    },
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `criblPack`                                                 | *string*                                                    | :heavy_minus_sign:                                          | The <code>id</code> of the Pack to create the Collector in. |
| `savedJob`                                                  | *models.SavedJob*                                           | :heavy_check_mark:                                          | SavedJob object                                             |
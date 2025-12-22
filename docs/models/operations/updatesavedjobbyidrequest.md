# UpdateSavedJobByIdRequest

## Example Usage

```typescript
import { UpdateSavedJobByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateSavedJobByIdRequest = {
  id: "<id>",
  criblPack: "<value>",
  savedJob: {
    id: "<id>",
    description: "likewise oof whoever indeed",
    type: "scheduledSearch",
    ttl: "4h",
    ignoreGroupJobsLimit: false,
    removeFields: [
      "<value 1>",
      "<value 2>",
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
        earliest: 4451.51,
        latest: 2316.29,
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
    savedQueryId: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The <code>id</code> of the Collector to update.                        |
| `criblPack`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | The <code>id</code> of the Pack that includes the Collector to update. |
| `savedJob`                                                             | *models.SavedJob*                                                      | :heavy_check_mark:                                                     | SavedJob object                                                        |
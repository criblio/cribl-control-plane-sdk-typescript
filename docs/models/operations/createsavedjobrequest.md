# CreateSavedJobRequest

## Example Usage

```typescript
import { CreateSavedJobRequest } from "cribl-control-plane/models/operations";

let value: CreateSavedJobRequest = {
  criblPack: "<value>",
  savedJob: {
    id: "<id>",
    description: "fully agile per zowie belabor colorfully shear",
    type: "collection",
    ttl: "<value>",
    ignoreGroupJobsLimit: false,
    removeFields: [
      "<value 1>",
    ],
    resumeOnBoot: false,
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
    workerAffinity: true,
    collector: {
      type: "s3",
      conf: {
        awsAuthenticationMethod: "auto",
        outputName: "<value>",
        bucket: "<value>",
        parquetChunkSizeMB: 3314.91,
        parquetChunkDownloadTimeout: 3125.05,
        region: "<value>",
        path: "/tmp",
        partitioningScheme: "none",
        extractors: [
          {
            key: "<key>",
            expression: "<value>",
          },
        ],
        endpoint: "<value>",
        signatureVersion: "v2",
        enableAssumeRole: false,
        assumeRoleArn: "<value>",
        assumeRoleExternalId: "<id>",
        durationSeconds: 1167.82,
        maxBatchSize: 2246.08,
        recurse: "<value>",
        reuseConnections: false,
        rejectUnauthorized: true,
        verifyPermissions: false,
        disableTimeFilter: true,
      },
    },
    input: {
      type: "collection",
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 640.43,
      sendToRoutes: false,
      preprocess: {
        disabled: false,
        command: "<value>",
        args: [
          "<value 1>",
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
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `criblPack`                                                 | *string*                                                    | :heavy_minus_sign:                                          | The <code>id</code> of the Pack to create the Collector in. |
| `savedJob`                                                  | *models.SavedJob*                                           | :heavy_check_mark:                                          | SavedJob object                                             |
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
      type: "<value>",
      conf: {
        collectMethod: "get",
        collectRequestParams: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        discovery: {
          discoverType: "none",
        },
        collectUrl: "https://proper-majority.info/",
        collectBody: "`{ }`",
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
          "<value 3>",
        ],
        retryRules: {
          type: "backoff",
          interval: "<value>",
          limit: "<value>",
          multiplier: "<value>",
          codes: "<value>",
          enableHeader: "<value>",
        },
        username: "Andre.Hills-Reilly62",
        password: "gwiUSzD5T_NZKTX",
        credentialsSecret: "<value>",
        loginUrl: "",
        loginBody:
          "`{ \"username\": \"${username}\", \"password\": \"${password}\" }`",
        tokenRespAttribute: "<value>",
        authHeaderExpr: "`Bearer ${token}`",
        authRequestHeaders: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        clientSecretParamName: "client_secret",
        clientSecretParamValue: "<value>",
        authRequestParams: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
        textSecret: "<value>",
        type: "health_check",
      },
      destructive: false,
      encoding: "<value>",
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
          "<value 2>",
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
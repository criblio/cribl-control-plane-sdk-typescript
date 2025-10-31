# DeleteOutputByIdResponse

a list of Destination objects

## Example Usage

```typescript
import { DeleteOutputByIdResponse } from "cribl-control-plane/models/operations";

let value: DeleteOutputByIdResponse = {
  count: 62425,
  items: [
    {
      id: "<id>",
      type: "chronicle",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      apiVersion: "v1alpha",
      authenticationMethod: "serviceAccount",
      responseRetrySettings: [
        {
          httpStatus: 823.16,
          initialBackoff: 1000,
          backoffRate: 2,
          maxBackoff: 10000,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 1000,
        backoffRate: 2,
        maxBackoff: 10000,
      },
      responseHonorRetryAfterHeader: true,
      region: "<value>",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 90,
      flushPeriodSec: 1,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      useRoundRobinDns: false,
      onBackpressure: "block",
      totalMemoryLimitKB: 7232.33,
      ingestionMethod: "ImportLogs",
      namespace: "<value>",
      logType: "<value>",
      logTextField: "<value>",
      gcpProjectId: "<id>",
      gcpInstance: "<value>",
      customLabels: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      description: "overfeed blaspheme hopeful stoop warlike",
      serviceAccountCredentials: "<value>",
      serviceAccountCredentialsSecret: "<value>",
      pqStrictOrdering: true,
      pqRatePerSec: 0,
      pqMode: "error",
      pqMaxBufferSize: 42,
      pqMaxBackpressureSec: 30,
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqControls: {},
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Output*[]                          | :heavy_minus_sign:                         | N/A                                        |
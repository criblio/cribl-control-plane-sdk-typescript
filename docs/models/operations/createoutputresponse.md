# CreateOutputResponse

a list of Destination objects

## Example Usage

```typescript
import { CreateOutputResponse } from "cribl-control-plane/models/operations";

let value: CreateOutputResponse = {
  count: 654123,
  items: [
    {
      id: "<id>",
      type: "elastic_cloud",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      url: "https://ruddy-cutover.net/",
      index: "<value>",
      concurrency: 5,
      maxPayloadSizeKB: 4096,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
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
        "<value 3>",
      ],
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: false,
        username: "Kylie_Harber15",
        password: "72uE6zafEeRm9Ny",
        authType: "manual",
        credentialsSecret: "<value>",
        manualAPIKey: "<value>",
        textSecret: "<value>",
      },
      elasticPipeline: "<value>",
      includeDocId: true,
      responseRetrySettings: [
        {
          httpStatus: 4676.21,
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
      onBackpressure: "block",
      description:
        "mockingly phooey kaleidoscopic tough for grouchy apropos wearily er but",
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
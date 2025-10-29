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
        authType: "manual",
      },
      elasticPipeline: "<value>",
      includeDocId: true,
      responseRetrySettings: [
        {
          httpStatus: 5869.12,
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
        "upward profuse charming mould excitedly for and mammoth valiantly",
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqMode: "error",
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
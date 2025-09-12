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
      type: "elastic",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      loadBalanced: true,
      index: "<value>",
      docType: "<value>",
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
      ],
      responseRetrySettings: [
        {
          httpStatus: 6978.08,
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
      extraParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      auth: {
        disabled: true,
        authType: "manual",
      },
      elasticVersion: "auto",
      elasticPipeline: "<value>",
      includeDocId: false,
      writeAction: "create",
      retryPartialErrors: false,
      onBackpressure: "block",
      description: "climb that miserly mechanically",
      url: "https://likable-tomatillo.name",
      useRoundRobinDns: false,
      excludeSelf: false,
      urls: [
        {
          url: "https://triangular-vista.net/",
          weight: 1,
        },
      ],
      dnsResolvePeriodSec: 600,
      loadBalanceStatsPeriodSec: 300,
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
# UpdateOutputByIdResponse

a list of Destination objects

## Example Usage

```typescript
import { UpdateOutputByIdResponse } from "cribl-control-plane/models/operations";

let value: UpdateOutputByIdResponse = {
  count: 239271,
  items: [
    {
      id: "<id>",
      type: "azure_logs",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      logType: "Cribl",
      resourceId: "<id>",
      concurrency: 5,
      maxPayloadSizeKB: 1024,
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
      useRoundRobinDns: false,
      failedRequestLoggingMode: "none",
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      apiUrl: ".ods.opinsights.azure.com",
      responseRetrySettings: [
        {
          httpStatus: 6609.99,
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
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      authType: "manual",
      description: "minty gosh decent whether duh nervously",
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqMode: "error",
      pqControls: {},
      workspaceId: "<id>",
      workspaceKey: "<value>",
      keypairSecret: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Output*[]                          | :heavy_minus_sign:                         | N/A                                        |
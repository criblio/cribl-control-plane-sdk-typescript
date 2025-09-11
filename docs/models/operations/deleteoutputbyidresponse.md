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
      type: "dynatrace_otlp",
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
      protocol: "http",
      endpoint: "https://{your-environment-id}.live.dynatrace.com/api/v2/otlp",
      otlpVersion: "1.3.1",
      compress: "gzip",
      httpCompress: "gzip",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "",
          value: "<value>",
        },
      ],
      concurrency: 5,
      maxPayloadSizeKB: 2048,
      timeoutSec: 30,
      flushPeriodSec: 1,
      failedRequestLoggingMode: "none",
      connectionTimeout: 10000,
      keepAliveTime: 30,
      keepAlive: true,
      endpointType: "saas",
      tokenSecret: "<value>",
      authTokenName: "Authorization",
      onBackpressure: "block",
      description: "fleck unethically upward",
      rejectUnauthorized: true,
      useRoundRobinDns: false,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      safeHeaders: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      responseRetrySettings: [
        {
          httpStatus: 9514.43,
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
# CountedOutput

## Example Usage

```typescript
import { CountedOutput } from "cribl-control-plane/models";

let value: CountedOutput = {
  count: 841944,
  items: [
    {
      protocol: "http",
      id: "<id>",
      type: "dynatrace_otlp",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      endpoint: "https://{your-environment-id}.live.dynatrace.com/api/v2/otlp",
      otlpVersion: "1.3.1",
      compress: "gzip",
      httpCompress: "none",
      httpTracesEndpointOverride: "<value>",
      httpMetricsEndpointOverride: "<value>",
      httpLogsEndpointOverride: "<value>",
      metadata: [
        {
          key: "<key>",
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
      description:
        "pro contrail unimpressively phew circa supposing which quicker government ultimately",
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
      ],
      responseRetrySettings: [
        {
          httpStatus: 5033.96,
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
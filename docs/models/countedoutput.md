# CountedOutput

## Example Usage

```typescript
import { CountedOutput } from "cribl-control-plane/models";

let value: CountedOutput = {
  count: 841944,
  items: [
    {
      id: "<id>",
      type: "sentinel_one_ai_siem",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
      ],
      region: "EMEA",
      endpoint: "/services/collector/raw",
      concurrency: 4789.55,
      maxPayloadSizeKB: 1067.62,
      maxPayloadEvents: 4009.42,
      compress: false,
      rejectUnauthorized: false,
      timeoutSec: 7585.13,
      flushPeriodSec: 7263.86,
      extraHttpHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      failedRequestLoggingMode: "payloadAndHeaders",
      safeHeaders: [
        "<value 1>",
      ],
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 2591.04,
          initialBackoff: 4815.7,
          backoffRate: 5576.87,
          maxBackoff: 1844.93,
        },
      ],
      timeoutRetrySettings: {
        timeoutRetry: false,
        initialBackoff: 4289.71,
        backoffRate: 7830.71,
        maxBackoff: 6330,
      },
      responseHonorRetryAfterHeader: false,
      onBackpressure: "block",
      description:
        "phew circa supposing which quicker government ultimately celsius bah",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://enchanting-boyfriend.info/",
      hostExpression: "<value>",
      sourceExpression: "<value>",
      sourceTypeExpression: "<value>",
      dataSourceCategoryExpression: "<value>",
      dataSourceNameExpression: "<value>",
      dataSourceVendorExpression: "<value>",
      eventTypeExpression: "<value>",
      host: "hard-to-find-bump.org",
      source: "<value>",
      sourceType: "<value>",
      dataSourceCategory: "<value>",
      dataSourceName: "<value>",
      dataSourceVendor: "<value>",
      eventType: "<value>",
      pqStrictOrdering: false,
      pqRatePerSec: 8762.77,
      pqMode: "backpressure",
      pqMaxBufferSize: 9817.81,
      pqMaxBackpressureSec: 2343.82,
      pqMaxFileSize: "<value>",
      pqMaxSize: "<value>",
      pqPath: "<value>",
      pqCompress: "gzip",
      pqOnBackpressure: "drop",
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
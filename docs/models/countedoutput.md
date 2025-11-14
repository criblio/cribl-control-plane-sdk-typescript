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
      region: "US",
      endpoint: "/services/collector/event",
      concurrency: 5,
      maxPayloadSizeKB: 5120,
      maxPayloadEvents: 0,
      compress: true,
      rejectUnauthorized: true,
      timeoutSec: 30,
      flushPeriodSec: 5,
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
      authType: "manual",
      responseRetrySettings: [
        {
          httpStatus: 8829.54,
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
      description: "gut than but disapprove boom rally",
      token: "<value>",
      textSecret: "<value>",
      baseUrl: "https://<Your-S1-Tenant>.sentinelone.net",
      hostExpression: "__e.host || C.os.hostname()",
      sourceExpression:
        "__e.source || (__e.__criblMetrics ? 'metrics' : 'cribl')",
      sourceTypeExpression: "__e.sourcetype || 'dottedJson'",
      dataSourceCategoryExpression: "'security'",
      dataSourceNameExpression: "__e.__dataSourceName || 'cribl'",
      dataSourceVendorExpression: "__e.__dataSourceVendor || 'cribl'",
      eventTypeExpression: "",
      host: "C.os.hostname()",
      source: "cribl",
      sourceType: "hecRawParser",
      dataSourceCategory: "security",
      dataSourceName: "cribl",
      dataSourceVendor: "cribl",
      eventType: "",
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
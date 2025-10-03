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
      type: "sentinel_one_ai_siem",
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
          httpStatus: 3993.7,
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
        "next towards unlearn at variable meh although advertisement",
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
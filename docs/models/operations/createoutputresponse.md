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
      type: "newrelic",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      region: "US",
      logType: "",
      messageField: "",
      metadata: [
        {
          name: "hostname",
          value: "<value>",
        },
      ],
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
      responseRetrySettings: [
        {
          httpStatus: 2157.83,
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
      totalMemoryLimitKB: 8146.75,
      description:
        "at duh writhing knit embossing overproduce perfectly successfully willfully",
      customUrl: "https://unwilling-pulse.net/",
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
      apiKey: "<value>",
      textSecret: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Output*[]                          | :heavy_minus_sign:                         | N/A                                        |
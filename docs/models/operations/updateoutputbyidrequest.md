# UpdateOutputByIdRequest

## Example Usage

```typescript
import { UpdateOutputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateOutputByIdRequest = {
  id: "<id>",
  output: {
    region: "US",
    id: "<id>",
    type: "newrelic_events",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
    ],
    accountId: "<id>",
    eventType: "<value>",
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
    onBackpressure: "block",
    authType: "manual",
    description: "colonialism jealously apt dual zen",
    customUrl: "https://plain-provider.net/",
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
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Destination to update. |
| `output`                                          | *models.Output*                                   | :heavy_check_mark:                                | Output object                                     |
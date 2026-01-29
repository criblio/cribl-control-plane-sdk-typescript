# CreateOutputSystemByPackRequest

## Example Usage

```typescript
import { CreateOutputSystemByPackRequest } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackRequest = {
  pack: "<value>",
  requestBody: {
    id: "<id>",
    type: "honeycomb",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    dataset: "<value>",
    concurrency: 7909.59,
    maxPayloadSizeKB: 7477.3,
    maxPayloadEvents: 9876.53,
    compress: true,
    rejectUnauthorized: true,
    timeoutSec: 8227.44,
    flushPeriodSec: 2018.46,
    extraHttpHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    useRoundRobinDns: true,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
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
    responseHonorRetryAfterHeader: true,
    onBackpressure: "block",
    authType: "manual",
    description: "dull jump until outlaw communicate",
    pqStrictOrdering: true,
    pqRatePerSec: 3501.81,
    pqMode: "error",
    pqMaxBufferSize: 2147.91,
    pqMaxBackpressureSec: 1408.66,
    pqMaxFileSize: "<value>",
    pqMaxSize: "<value>",
    pqPath: "<value>",
    pqCompress: "none",
    pqOnBackpressure: "drop",
    pqControls: {},
    team: "<value>",
    textSecret: "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `pack`                                           | *string*                                         | :heavy_check_mark:                               | The <code>id</code> of the Pack to create.       |
| `requestBody`                                    | *operations.CreateOutputSystemByPackRequestBody* | :heavy_check_mark:                               | Output object                                    |
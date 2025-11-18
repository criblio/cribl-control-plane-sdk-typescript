# UpdateOutputByIdRequest

## Example Usage

```typescript
import { UpdateOutputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateOutputByIdRequest = {
  id: "<id>",
  output: {
    id: "<id>",
    type: "signalfx",
    pipeline: "<value>",
    systemFields: [
      "<value 1>",
    ],
    environment: "<value>",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    authType: "manual",
    realm: "us0",
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
    useRoundRobinDns: false,
    failedRequestLoggingMode: "none",
    safeHeaders: [
      "<value 1>",
    ],
    responseRetrySettings: [
      {
        httpStatus: 6539.74,
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
      "modulo stormy descriptive until feline through whether ha rag er",
    token: "<value>",
    textSecret: "<value>",
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
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Destination to update. |
| `output`                                          | *models.Output*                                   | :heavy_check_mark:                                | Output object                                     |
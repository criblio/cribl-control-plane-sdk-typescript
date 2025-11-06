# CountedListOutput

## Example Usage

```typescript
import { CountedListOutput } from "cribl-control-plane/models";

let value: CountedListOutput = {
  count: 363795,
  items: [
    {
      id: "<id>",
      type: "splunk",
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
        "<value 3>",
      ],
      host: "upright-representation.biz",
      port: 9997,
      nestedFields: "none",
      throttleRatePerSec: "0",
      connectionTimeout: 10000,
      writeTimeout: 60000,
      tls: {
        disabled: true,
        rejectUnauthorized: true,
        servername: "<value>",
        certificateName: "<value>",
        caPath: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        passphrase: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      enableMultiMetrics: false,
      enableACK: true,
      logFailedRequests: false,
      maxS2Sversion: "v3",
      onBackpressure: "block",
      authType: "manual",
      description:
        "capsize ack modulo avalanche hmph into concerning spirited wilted",
      maxFailedHealthChecks: 1,
      compress: "disabled",
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
      authToken: "",
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
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
      type: "microsoft_fabric",
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
      topic: "<value>",
      ack: 1,
      format: "json",
      maxRecordSizeKB: 768,
      flushEventCount: 1000,
      flushPeriodSec: 1,
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: false,
        mechanism: "plain",
        username: "$ConnectionString",
        textSecret: "<value>",
        clientSecretAuthType: "secret",
        clientTextSecret: "<value>",
        certificateName: "<value>",
        certPath: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        oauthEndpoint: "https://login.microsoftonline.com",
        clientId: "<id>",
        tenantId: "<id>",
        scope: "<value>",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
      },
      onBackpressure: "block",
      bootstrap_server: "<value>",
      description: "fleck unethically upward",
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
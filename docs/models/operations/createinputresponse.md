# CreateInputResponse

a list of Source objects

## Example Usage

```typescript
import { CreateInputResponse } from "cribl-control-plane/models/operations";

let value: CreateInputResponse = {
  count: 415624,
  items: [
    {
      id: "<id>",
      type: "model_driven_telemetry",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
      },
      host: "0.0.0.0",
      port: 57000,
      tls: {
        disabled: true,
        certificateName: "<value>",
        privKeyPath: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        requestCert: false,
        rejectUnauthorized: "<value>",
        commonNameRegex: "<value>",
        minVersion: "TLSv1.2",
        maxVersion: "TLSv1.1",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 1000,
      shutdownTimeoutMs: 5000,
      description:
        "certification er madly preside excluding cheerfully blah pace",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
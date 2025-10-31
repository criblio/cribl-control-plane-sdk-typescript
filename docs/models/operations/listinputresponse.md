# ListInputResponse

a list of Source objects

## Example Usage

```typescript
import { ListInputResponse } from "cribl-control-plane/models/operations";

let value: ListInputResponse = {
  count: 16710,
  items: [
    {
      id: "<id>",
      type: "tcp",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 1585.21,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      enableHeader: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      description: "along within along competent fatally",
      authToken: "",
      authType: "manual",
      textSecret: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
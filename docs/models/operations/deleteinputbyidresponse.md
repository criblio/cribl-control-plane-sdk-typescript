# DeleteInputByIdResponse

a list of Source objects

## Example Usage

```typescript
import { DeleteInputByIdResponse } from "cribl-control-plane/models/operations";

let value: DeleteInputByIdResponse = {
  count: 467952,
  items: [
    {
      id: "<id>",
      type: "tcpjson",
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
        pqControls: {},
      },
      host: "0.0.0.0",
      port: 1132.54,
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
        minVersion: "TLSv1",
        maxVersion: "TLSv1.3",
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
      enableLoadBalancing: false,
      authType: "manual",
      description:
        "yahoo before lest augment dwell along apostrophize scuttle likewise definitive",
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
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
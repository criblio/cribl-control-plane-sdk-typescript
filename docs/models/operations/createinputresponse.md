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
      type: "syslog",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: true,
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
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
      udpPort: 4734.88,
      tcpPort: 7020.86,
      maxBufferSize: 1000,
      ipWhitelistRegex: "/.*/",
      timestampTimezone: "local",
      singleMsgUdpPackets: false,
      enableProxyHeader: false,
      keepFieldsList: [
        "<value 1>",
        "<value 2>",
      ],
      octetCounting: false,
      inferFraming: true,
      strictlyInferOctetCounting: true,
      allowNonStandardAppName: false,
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
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
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1",
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      udpSocketRxBufSize: 9753.82,
      enableLoadBalancing: false,
      description: "dimly dimly including larva rusty yawningly emboss than",
      enableEnhancedProxyHeaderParsing: true,
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
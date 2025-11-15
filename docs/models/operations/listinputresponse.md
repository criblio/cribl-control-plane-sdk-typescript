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
      type: "appscope",
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
      enableUnixPath: false,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://muted-disadvantage.org",
      },
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/appscope",
      },
      authType: "manual",
      description: "along within along competent fatally",
      host: "little-pension.net",
      port: 1318.76,
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
        maxVersion: "TLSv1.3",
      },
      unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
      unixSocketPerms: "<value>",
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
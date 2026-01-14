# UpdateInputByIdRequest

## Example Usage

```typescript
import { UpdateInputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdRequest = {
  id: "<id>",
  input: {
    id: "<id>",
    type: "wiz_webhook",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: true,
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
      maxBufferSize: 357.77,
      commitFrequency: 1717.96,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/etc/namedb",
      compress: "none",
      pqControls: {},
    },
    host: "steep-lava.net",
    port: 718.38,
    authTokens: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tls: {
      disabled: false,
      requestCert: true,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1",
    },
    maxActiveReq: 3424.31,
    maxRequestsPerSocket: 357001,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 7418.26,
    requestTimeout: 9183.56,
    socketTimeout: 2711.62,
    keepAliveTimeout: 5868.55,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 3265.13,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedPaths: [
      "<value 1>",
    ],
    allowedMethods: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "instead worth trek drain eek below",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "anenst round cuckoo hm geez gee playfully spiffy for towards",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `input`                                      | *models.Input*                               | :heavy_check_mark:                           | Input object                                 |
# UpdateInputByIdRequest

## Example Usage

```typescript
import { UpdateInputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdRequest = {
  id: "<id>",
  input: {
    sendToRoutes: true,
    id: "<id>",
    type: "http_raw",
    disabled: false,
    pipeline: "<value>",
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
    port: 6417.79,
    authTokens: [
      "<value 1>",
    ],
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
      maxVersion: "TLSv1.2",
    },
    maxActiveReq: 256,
    maxRequestsPerSocket: 0,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 100,
    requestTimeout: 0,
    socketTimeout: 0,
    keepAliveTimeout: 5,
    enableHealthCheck: false,
    ipAllowlistRegex: "/.*/",
    ipDenylistRegex: "/^$/",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 10000,
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
        description:
          "demob apropos indeed ceramic scrabble however given scorn",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "mortally between from miserably fly politely",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `input`                                      | *models.Input*                               | :heavy_check_mark:                           | Input object                                 |
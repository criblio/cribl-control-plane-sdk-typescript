# UpdateInputByIdRequest

## Example Usage

```typescript
import { UpdateInputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdRequest = {
  id: "<id>",
  input: {
    sendToRoutes: false,
    id: "<id>",
    type: "splunk",
    disabled: true,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: true,
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
      mode: "smart",
      maxBufferSize: 1717.96,
      commitFrequency: 1412.18,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/include",
      compress: "none",
      pqControls: {},
    },
    host: "shy-tool.biz",
    port: 5868.55,
    tls: {
      disabled: true,
      requestCert: true,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.1",
    },
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 8200.03,
    socketIdleTimeout: 2908.92,
    socketEndingMaxWait: 3265.13,
    socketMaxLifespan: 2912.83,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    staleChannelFlushMs: 3447.64,
    authTokens: [
      {
        token: "<value>",
        description:
          "consign though fooey preclude embarrassment till bright aboard opposite hmph",
      },
    ],
    maxS2Sversion: "v4",
    description: "synthesise joshingly weakly mixed",
    useFwdTimezone: true,
    dropControlFields: true,
    extractMetrics: false,
    compress: "disabled",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `input`                                      | *models.Input*                               | :heavy_check_mark:                           | Input object                                 |
# UpdateInputByIdRequest

## Example Usage

```typescript
import { UpdateInputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdRequest = {
  id: "<id>",
  input: {
    id: "<id>",
    type: "splunk",
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
    host: "ornery-release.org",
    port: 2711.62,
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
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 5868.55,
    socketIdleTimeout: 8200.03,
    socketEndingMaxWait: 2908.92,
    socketMaxLifespan: 3265.13,
    enableProxyHeader: true,
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
    staleChannelFlushMs: 9958.42,
    authTokens: [
      {
        token: "<value>",
        description: "around inside although phooey pfft acidly",
      },
    ],
    maxS2Sversion: "v3",
    description:
      "painfully fooey commonly upon upbeat per depot tousle presell",
    useFwdTimezone: false,
    dropControlFields: false,
    extractMetrics: false,
    compress: "disabled",
    __template_host: "<value>",
    __template_port: "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `input`                                      | *models.Input*                               | :heavy_check_mark:                           | Input object                                 |
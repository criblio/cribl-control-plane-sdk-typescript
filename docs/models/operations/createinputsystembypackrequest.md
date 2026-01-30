# CreateInputSystemByPackRequest

## Example Usage

```typescript
import { CreateInputSystemByPackRequest } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackRequest = {
  pack: "<value>",
  requestBody: {
    id: "<id>",
    type: "datadog_agent",
    disabled: true,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: true,
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
      maxBufferSize: 357.77,
      commitFrequency: 1717.96,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/etc/namedb",
      compress: "none",
      pqControls: {},
    },
    host: "runny-premeditation.info",
    port: 9800.93,
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
    maxActiveReq: 6883.75,
    maxRequestsPerSocket: 663570,
    enableProxyHeader: false,
    captureHeaders: true,
    activityLogSampleRate: 629.05,
    requestTimeout: 6938.79,
    socketTimeout: 2753.93,
    keepAliveTimeout: 4958.68,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    extractMetrics: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    proxyMode: {
      enabled: false,
      rejectUnauthorized: false,
    },
    description: "the amidst across beyond although",
    __template_host: "<value>",
    __template_port: "<value>",
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `pack`                                          | *string*                                        | :heavy_check_mark:                              | The <code>id</code> of the Pack to create.      |
| `requestBody`                                   | *operations.CreateInputSystemByPackRequestBody* | :heavy_check_mark:                              | Input object                                    |
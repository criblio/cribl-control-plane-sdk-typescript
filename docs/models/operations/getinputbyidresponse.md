# GetInputByIdResponse

a list of Source objects

## Example Usage

```typescript
import { GetInputByIdResponse } from "cribl-control-plane/models/operations";

let value: GetInputByIdResponse = {
  count: 546582,
  items: [
    {
      id: "<id>",
      type: "open_telemetry",
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
      },
      host: "0.0.0.0",
      port: 4317,
      tls: {
        disabled: true,
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        requestCert: false,
        rejectUnauthorized: "<value>",
        commonNameRegex: "<value>",
        minVersion: "TLSv1.3",
        maxVersion: "TLSv1.2",
      },
      maxActiveReq: 256,
      maxRequestsPerSocket: 0,
      enableProxyHeader: "<value>",
      captureHeaders: "<value>",
      activityLogSampleRate: "<value>",
      requestTimeout: 0,
      socketTimeout: 0,
      keepAliveTimeout: 15,
      enableHealthCheck: false,
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      protocol: "grpc",
      extractSpans: false,
      extractMetrics: false,
      otlpVersion: "0.10.0",
      authType: "none",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxActiveCxn: 1000,
      description: "knowingly about scarily leading stealthily strict",
      username: "Carlie_Rogahn59",
      password: "_vROsKBEqiHHRH7",
      token: "<value>",
      credentialsSecret: "<value>",
      textSecret: "<value>",
      loginUrl: "https://spiteful-bowler.name",
      secretParamName: "<value>",
      secret: "<value>",
      tokenAttributeName: "<value>",
      authHeaderExpr: "`Bearer ${token}`",
      tokenTimeoutSecs: 3600,
      oauthParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      oauthHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      extractLogs: false,
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
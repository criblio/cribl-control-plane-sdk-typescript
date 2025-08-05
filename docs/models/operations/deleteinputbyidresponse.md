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
      type: "cribl_lake_http",
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
      },
      host: "0.0.0.0",
      port: 1132.54,
      authTokens: [
        "<value 1>",
      ],
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
        maxVersion: "TLSv1.3",
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
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description:
        "even athwart after lively creator apud hold pish whenever woot",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
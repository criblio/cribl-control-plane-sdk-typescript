# CountedInputSplunkHec

## Example Usage

```typescript
import { CountedInputSplunkHec } from "cribl-control-plane/models";

let value: CountedInputSplunkHec = {
  count: 389746,
  items: [
    {
      sendToRoutes: true,
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      id: "<id>",
      type: "splunk_hec",
      disabled: false,
      pipeline: "<value>",
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
      port: 3717.49,
      authTokens: [
        {
          authType: "manual",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: true,
          description: "motionless jubilant agile",
          allowedIndexesAtToken: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          metadata: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
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
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "/.*/",
      ipDenylistRegex: "/^$/",
      splunkHecAPI: "/services/collector",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedIndexes: [
        "<value 1>",
      ],
      splunkHecAcks: false,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 10000,
      useFwdTimezone: true,
      dropControlFields: true,
      extractMetrics: false,
      accessControlAllowOrigin: [
        "<value 1>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: false,
      description: "coast hmph jealously",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.InputSplunkHec*[]                  | :heavy_minus_sign:                         | N/A                                        |
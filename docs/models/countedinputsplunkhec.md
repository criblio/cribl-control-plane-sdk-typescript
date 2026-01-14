# CountedInputSplunkHec

## Example Usage

```typescript
import { CountedInputSplunkHec } from "cribl-control-plane/models";

let value: CountedInputSplunkHec = {
  count: 389746,
  items: [
    {
      sendToRoutes: false,
      id: "<id>",
      type: "splunk_hec",
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
      host: "edible-developing.com",
      port: 7299.01,
      authTokens: [
        {
          authType: "secret",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: false,
          description: "psst too sniff over although er",
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
      maxActiveReq: 9031.41,
      maxRequestsPerSocket: 280917,
      enableProxyHeader: true,
      captureHeaders: false,
      activityLogSampleRate: 2007.6,
      requestTimeout: 1609.87,
      socketTimeout: 1925.51,
      keepAliveTimeout: 564.32,
      enableHealthCheck: "<value>",
      ipAllowlistRegex: "<value>",
      ipDenylistRegex: "<value>",
      splunkHecAPI: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      allowedIndexes: [
        "<value 1>",
        "<value 2>",
      ],
      splunkHecAcks: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 2959.31,
      useFwdTimezone: false,
      dropControlFields: false,
      extractMetrics: false,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
      ],
      emitTokenMetrics: false,
      description: "unwritten showboat ick train sternly",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.InputSplunkHec*[]                  | :heavy_minus_sign:                         | N/A                                        |
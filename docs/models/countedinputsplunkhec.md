# CountedInputSplunkHec

## Example Usage

```typescript
import { CountedInputSplunkHec } from "cribl-control-plane/models";

let value: CountedInputSplunkHec = {
  count: 389746,
  items: [
    {
      id: "<id>",
      type: "splunk_hec",
      disabled: true,
      pipeline: "<value>",
      sendToRoutes: false,
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
      host: "important-cycle.biz",
      port: 44.48,
      authTokens: [
        {
          authType: "secret",
          tokenSecret: "<value>",
          token: "<value>",
          enabled: false,
          description:
            "jubilant agile bowed what mockingly excluding maintainer",
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
      maxActiveReq: 7299.01,
      maxRequestsPerSocket: 903141,
      enableProxyHeader: true,
      captureHeaders: true,
      activityLogSampleRate: 8760.36,
      requestTimeout: 2007.6,
      socketTimeout: 1609.87,
      keepAliveTimeout: 1925.51,
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
      ],
      splunkHecAcks: false,
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
      ],
      staleChannelFlushMs: 2766.37,
      useFwdTimezone: true,
      dropControlFields: false,
      extractMetrics: false,
      accessControlAllowOrigin: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      accessControlAllowHeaders: [
        "<value 1>",
        "<value 2>",
      ],
      emitTokenMetrics: true,
      description:
        "rapidly dismal while anti easily regularly crackle energetically save",
      __template_host: "<value>",
      __template_port: "<value>",
      __template_splunkHecAPI: "<value>",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_minus_sign:                                     | number of items present in the items array             |
| `items`                                                | [models.InputSplunkHec](../models/inputsplunkhec.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
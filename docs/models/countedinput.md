# CountedInput

## Example Usage

```typescript
import { CountedInput } from "cribl-control-plane/models";

let value: CountedInput = {
  count: 935780,
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
      type: "wiz",
      disabled: false,
      pipeline: "<value>",
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
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
      endpoint: "https://api.<region>.app.wiz.io/graphql",
      authUrl: "https://vain-vanadyl.com",
      authAudienceOverride: "<value>",
      clientId: "<id>",
      contentConfig: [],
      requestTimeout: 300,
      keepAliveTime: 30,
      maxMissedKeepAlives: 3,
      ttl: "4h",
      ignoreGroupJobsLimit: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "backoff",
        interval: 1000,
        limit: 5,
        multiplier: 2,
        codes: [
          3836.07,
        ],
        enableHeader: true,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description: "after premeditation discrete steeple recede",
      clientSecret: "<value>",
      textSecret: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
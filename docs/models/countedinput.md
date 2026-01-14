# CountedInput

## Example Usage

```typescript
import { CountedInput } from "cribl-control-plane/models";

let value: CountedInput = {
  count: 935780,
  items: [
    {
      sendToRoutes: false,
      id: "<id>",
      type: "wiz",
      disabled: false,
      pipeline: "<value>",
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
        mode: "smart",
        maxBufferSize: 1717.96,
        commitFrequency: 1412.18,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/opt/include",
        compress: "none",
        pqControls: {},
      },
      endpoint: "<value>",
      authUrl: "https://repentant-swine.org/",
      authAudienceOverride: "<value>",
      clientId: "<id>",
      contentConfig: [],
      requestTimeout: 7840.36,
      keepAliveTime: 67.52,
      maxMissedKeepAlives: 8085.27,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "static",
        interval: 3153.33,
        limit: 2659.11,
        multiplier: 376.03,
        codes: [
          5006.8,
          7560.55,
          2139.95,
        ],
        enableHeader: false,
        retryConnectTimeout: false,
        retryConnectReset: false,
      },
      authType: "manual",
      description:
        "atop finally abaft quaintly place more different uh-huh finally pilot",
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
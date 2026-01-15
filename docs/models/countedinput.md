# CountedInput

## Example Usage

```typescript
import { CountedInput } from "cribl-control-plane/models";

let value: CountedInput = {
  count: 935780,
  items: [
    {
      id: "<id>",
      type: "wiz",
      disabled: false,
      pipeline: "<value>",
      sendToRoutes: false,
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
        maxBufferSize: 357.77,
        commitFrequency: 1717.96,
        maxFileSize: "<value>",
        maxSize: "<value>",
        path: "/etc/namedb",
        compress: "none",
        pqControls: {},
      },
      endpoint: "<value>",
      authUrl: "https://crazy-platter.org/",
      authAudienceOverride: "<value>",
      clientId: "<id>",
      contentConfig: [
        {
          contentType: "<value>",
          contentDescription: "<value>",
          enabled: true,
          stateTracking: false,
          stateUpdateExpression: "<value>",
          stateMergeExpression: "<value>",
          manageState: {},
          contentQuery: "<value>",
          cronSchedule: "<value>",
          earliest: "<value>",
          latest: "<value>",
          jobTimeout: "<value>",
          logLevel: "error",
          maxPages: 8085.27,
        },
      ],
      requestTimeout: 3968.76,
      keepAliveTime: 7686.22,
      maxMissedKeepAlives: 3153.33,
      ttl: "<value>",
      ignoreGroupJobsLimit: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      retryRules: {
        type: "none",
        interval: 6996.29,
        limit: 5006.8,
        multiplier: 7560.55,
        codes: [
          9559.24,
        ],
        enableHeader: false,
        retryConnectTimeout: false,
        retryConnectReset: true,
      },
      authType: "secret",
      description: "vivaciously broadly quizzically",
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
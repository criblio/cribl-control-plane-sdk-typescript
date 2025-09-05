# UpdateInputByIdRequest

## Example Usage

```typescript
import { UpdateInputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdRequest = {
  id: "<id>",
  input: {
    id: "<id>",
    type: "wiz",
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
      pqControls: {},
    },
    endpoint: "https://api.<region>.app.wiz.io/graphql",
    authUrl: "https://lost-republican.net/",
    authAudienceOverride: "<value>",
    clientId: "<id>",
    contentConfig: [
      {
        contentType: "<value>",
        contentDescription: "<value>",
        enabled: false,
      },
    ],
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
        718.38,
        8167.55,
        3424.31,
      ],
      enableHeader: true,
      retryConnectTimeout: false,
      retryConnectReset: false,
    },
    authType: "manual",
    description: "whereas role painfully fooey commonly",
    clientSecret: "<value>",
    textSecret: "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to update. |
| `input`                                      | *models.Input*                               | :heavy_check_mark:                           | Input object                                 |
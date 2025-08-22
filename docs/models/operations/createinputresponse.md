# CreateInputResponse

a list of Source objects

## Example Usage

```typescript
import { CreateInputResponse } from "cribl-control-plane/models/operations";

let value: CreateInputResponse = {
  count: 415624,
  items: [
    {
      id: "<id>",
      type: "sqs",
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
      queueName: "<value>",
      queueType: "standard",
      awsAccountId: "<id>",
      createQueue: false,
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      enableAssumeRole: false,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      maxMessages: 10,
      visibilityTimeout: 600,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      pollTimeout: 10,
      description: "onto dimly dimly including larva rusty yawningly",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      numReceivers: 3,
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
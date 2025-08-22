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
      type: "crowdstrike",
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
      fileFilter: "/.*/",
      awsAccountId: "<id>",
      awsAuthenticationMethod: "auto",
      awsSecretKey: "<value>",
      region: "<value>",
      endpoint: "<value>",
      signatureVersion: "v4",
      reuseConnections: true,
      rejectUnauthorized: true,
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      maxMessages: 1,
      visibilityTimeout: 21600,
      numReceivers: 1,
      socketTimeout: 300,
      skipOnError: false,
      includeSqsMetadata: false,
      enableAssumeRole: true,
      assumeRoleArn: "<value>",
      assumeRoleExternalId: "<id>",
      durationSeconds: 3600,
      enableSQSAssumeRole: false,
      preprocess: {
        disabled: true,
        command: "<value>",
        args: [
          "<value 1>",
        ],
      },
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      checkpointing: {
        enabled: false,
        retries: 5,
      },
      pollTimeout: 10,
      encoding: "<value>",
      description:
        "legend gee meh unlike ah bah indeed certify humidity restfully",
      awsApiKey: "<value>",
      awsSecret: "<value>",
      tagAfterProcessing: "false",
      processedTagKey: "<value>",
      processedTagValue: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
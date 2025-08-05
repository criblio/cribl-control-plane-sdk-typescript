# UpdateInputByIdResponse

a list of Source objects

## Example Usage

```typescript
import { UpdateInputByIdResponse } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdResponse = {
  count: 280335,
  items: [
    {
      id: "<id>",
      type: "eventhub",
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
      },
      brokers: [],
      topics: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      groupId: "Cribl",
      fromBeginning: true,
      connectionTimeout: 10000,
      requestTimeout: 60000,
      maxRetries: 5,
      maxBackOff: 30000,
      initialBackoff: 300,
      backoffRate: 2,
      authenticationTimeout: 10000,
      reauthenticationThreshold: 10000,
      sasl: {
        disabled: false,
        mechanism: "plain",
      },
      tls: {
        disabled: false,
        rejectUnauthorized: true,
      },
      sessionTimeout: 30000,
      rebalanceTimeout: 60000,
      heartbeatInterval: 3000,
      autoCommitInterval: 6045.12,
      autoCommitThreshold: 2673.76,
      maxBytesPerPartition: 1048576,
      maxBytes: 10485760,
      maxSocketErrors: 0,
      minimizeDuplicates: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "frenetically delightfully instead geez ridge which oof",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
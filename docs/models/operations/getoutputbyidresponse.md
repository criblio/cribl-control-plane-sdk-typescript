# GetOutputByIdResponse

a list of Destination objects

## Example Usage

```typescript
import { GetOutputByIdResponse } from "cribl-control-plane/models/operations";

let value: GetOutputByIdResponse = {
  count: 860587,
  items: [
    {
      id: "<id>",
      type: "google_pubsub",
      pipeline: "<value>",
      systemFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      environment: "<value>",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      topicName: "<value>",
      createTopic: false,
      orderedDelivery: false,
      region: "<value>",
      googleAuthMethod: "manual",
      serviceAccountCredentials: "<value>",
      secret: "<value>",
      batchSize: 1000,
      batchTimeout: 100,
      maxQueueSize: 100,
      maxRecordSizeKB: 256,
      flushPeriod: 1,
      maxInProgress: 10,
      onBackpressure: "block",
      description: "shanghai excited where contradict",
      pqMaxFileSize: "1 MB",
      pqMaxSize: "5GB",
      pqPath: "$CRIBL_HOME/state/queues",
      pqCompress: "none",
      pqOnBackpressure: "block",
      pqMode: "error",
      pqControls: {},
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Output*[]                          | :heavy_minus_sign:                         | N/A                                        |
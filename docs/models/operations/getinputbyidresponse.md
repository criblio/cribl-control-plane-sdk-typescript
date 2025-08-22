# GetInputByIdResponse

a list of Source objects

## Example Usage

```typescript
import { GetInputByIdResponse } from "cribl-control-plane/models/operations";

let value: GetInputByIdResponse = {
  count: 546582,
  items: [
    {
      id: "<id>",
      type: "win_event_logs",
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
      logNames: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      readMode: "oldest",
      eventFormat: "json",
      disableNativeModule: false,
      interval: 10,
      batchSize: 500,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      maxEventBytes: 51200,
      description: "from charlatan and ouch longingly unsung dwell",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
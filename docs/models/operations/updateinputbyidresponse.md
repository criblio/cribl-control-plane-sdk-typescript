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
      type: "exec",
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
      command: "<value>",
      retries: 10,
      scheduleType: "interval",
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description:
        "tired scholarship derby populist oof forenenst including that nor",
      interval: 60,
      cronSchedule: "* * * * *",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
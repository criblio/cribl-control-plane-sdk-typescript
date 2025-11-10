# CountedInput

## Example Usage

```typescript
import { CountedInput } from "cribl-control-plane/models";

let value: CountedInput = {
  count: 935780,
  items: [
    {
      sendToRoutes: true,
      id: "<id>",
      type: "journal_files",
      disabled: false,
      pipeline: "<value>",
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
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
      path: "/var",
      interval: 10,
      journals: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      rules: [
        {
          filter: "<value>",
          description:
            "duh lest ouch brochure vivaciously broadly quizzically lamp gurn fortunately",
        },
      ],
      currentBoot: false,
      maxAgeDur: "<value>",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      description: "exactly merry but uncomfortable next duh stark gah whoa",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
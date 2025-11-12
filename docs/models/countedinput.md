# CountedInput

## Example Usage

```typescript
import { CountedInput } from "cribl-control-plane/models";

let value: CountedInput = {
  count: 935780,
  items: [
    {
      id: "<id>",
      type: "journal_files",
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
      path: "/srv",
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
            "consequently uh-huh massage zowie atop finally abaft quaintly place more",
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
      description: "defiantly pish stealthily prudent authorized",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
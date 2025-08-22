# ListInputResponse

a list of Source objects

## Example Usage

```typescript
import { ListInputResponse } from "cribl-control-plane/models/operations";

let value: ListInputResponse = {
  count: 16710,
  items: [
    {
      id: "<id>",
      type: "file",
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
      mode: "auto",
      interval: 10,
      filenames: [
        "<value 1>",
      ],
      tailOnly: false,
      idleTimeout: 300,
      maxAgeDur: "<value>",
      checkFileModTime: false,
      forceText: false,
      hashLen: 256,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      staleChannelFlushMs: 10000,
      description: "corny luck unruly evince carp competent antique",
      path: "/var/mail",
      depth: 5476.75,
      suppressMissingPathErrors: false,
      deleteFiles: false,
      includeUnidentifiableBinary: false,
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
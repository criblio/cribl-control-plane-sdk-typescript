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
      type: "kube_metrics",
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
      interval: 15,
      rules: [
        {
          filter: "<value>",
          description: "onto dimly dimly including larva rusty yawningly",
        },
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/kube_metrics",
      },
      description: "before institute triumphantly break unless",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
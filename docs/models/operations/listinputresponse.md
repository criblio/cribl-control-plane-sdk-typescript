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
      type: "windows_metrics",
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
      interval: 10,
      host: {
        mode: "basic",
        custom: {
          system: {
            mode: "basic",
            detail: false,
          },
          cpu: {
            mode: "basic",
            perCpu: false,
            detail: false,
            time: false,
          },
          memory: {
            mode: "basic",
            detail: false,
          },
          network: {
            mode: "basic",
            devices: [
              "<value 1>",
            ],
            perInterface: false,
            detail: false,
          },
          disk: {
            mode: "basic",
            volumes: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            perVolume: false,
          },
        },
      },
      process: {
        sets: [
          {
            name: "<value>",
            filter: "<value>",
            includeChildren: false,
          },
        ],
      },
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
        destPath: "$CRIBL_HOME/state/windows_metrics",
      },
      disableNativeModule: false,
      description: "corny luck unruly evince carp competent antique",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.Input*[]                           | :heavy_minus_sign:                         | N/A                                        |
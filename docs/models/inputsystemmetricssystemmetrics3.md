# InputSystemMetricsSystemMetrics3

## Example Usage

```typescript
import { InputSystemMetricsSystemMetrics3 } from "cribl-control-plane/models";

let value: InputSystemMetricsSystemMetrics3 = {
  id: "<id>",
  type: "system_metrics",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  host: {
    custom: {
      system: {},
      cpu: {},
      memory: {},
      network: {
        devices: [
          "<value 1>",
          "<value 2>",
        ],
      },
      disk: {
        devices: [
          "<value 1>",
        ],
        mountpoints: [
          "<value 1>",
          "<value 2>",
        ],
        fstypes: [
          "<value 1>",
          "<value 2>",
        ],
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
      },
    ],
  },
  container: {
    dockerSocket: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    filters: [
      {
        expr: "<value>",
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {},
  description: "toward focused hole once",
};
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pqEnabled`                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Use a disk queue to minimize data loss when connected services block. See [Cribl Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud Workers) and configuration options (on-prem and hybrid Workers). |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Unique ID for this input                                                                                                                                                                                                                     |
| `type`                                                                                                                                                                                                                                       | [models.InputSystemMetricsType3](../models/inputsystemmetricstype3.md)                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `disabled`                                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `pipeline`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Pipeline to process data from this Source before sending it through the Routes                                                                                                                                                               |
| `sendToRoutes`                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Select whether to send data to Routes, or directly to Destinations.                                                                                                                                                                          |
| `environment`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                                                         |
| `streamtags`                                                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                           | Tags for filtering and grouping in @{product}                                                                                                                                                                                                |
| `connections`                                                                                                                                                                                                                                | [models.ConnectionsType](../models/connectionstype.md)[]                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Direct connections to Destinations, and optionally via a Pipeline or a Pack                                                                                                                                                                  |
| `pq`                                                                                                                                                                                                                                         | [models.PqType](../models/pqtype.md)                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `interval`                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Time, in seconds, between consecutive metric collections. Default is 10 seconds.                                                                                                                                                             |
| `host`                                                                                                                                                                                                                                       | [models.InputSystemMetricsHost3](../models/inputsystemmetricshost3.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `process`                                                                                                                                                                                                                                    | [models.ProcessType](../models/processtype.md)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `container`                                                                                                                                                                                                                                  | [models.Container3](../models/container3.md)                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `metadata`                                                                                                                                                                                                                                   | [models.Metadata1Type](../models/metadata1type.md)[]                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | Fields to add to events from this input                                                                                                                                                                                                      |
| `persistence`                                                                                                                                                                                                                                | [models.Persistence1Type](../models/persistence1type.md)                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `description`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
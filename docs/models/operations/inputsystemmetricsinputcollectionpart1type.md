# InputSystemMetricsInputCollectionPart1Type

## Example Usage

```typescript
import { InputSystemMetricsInputCollectionPart1Type } from "cribl-control-plane/models/operations";

let value: InputSystemMetricsInputCollectionPart1Type = {
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "system_metrics",
  pipeline: "<value>",
  environment: "<value>",
  streamtags: [
    "<value 1>",
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
          "<value 2>",
          "<value 3>",
        ],
        mountpoints: [
          "<value 1>",
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
  description: "er strictly indeed past famously",
};
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sendToRoutes`                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Select whether to send data to Routes, or directly to Destinations.                                                                                                                                                                          |
| `connections`                                                                                                                                                                                                                                | [models.ItemsTypeConnections](../../models/itemstypeconnections.md)[]                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                           | Direct connections to Destinations, and optionally via a Pipeline or a Pack                                                                                                                                                                  |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | Unique ID for this input                                                                                                                                                                                                                     |
| `type`                                                                                                                                                                                                                                       | [operations.InputSystemMetricsType](../../models/operations/inputsystemmetricstype.md)                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `disabled`                                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `pipeline`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Pipeline to process data from this Source before sending it through the Routes                                                                                                                                                               |
| `environment`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                                                         |
| `pqEnabled`                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Use a disk queue to minimize data loss when connected services block. See [Cribl Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud Workers) and configuration options (on-prem and hybrid Workers). |
| `streamtags`                                                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                           | Tags for filtering and grouping in @{product}                                                                                                                                                                                                |
| `pq`                                                                                                                                                                                                                                         | [models.PqType](../../models/pqtype.md)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `interval`                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Time, in seconds, between consecutive metric collections. Default is 10 seconds.                                                                                                                                                             |
| `host`                                                                                                                                                                                                                                       | [operations.InputSystemMetricsHost](../../models/operations/inputsystemmetricshost.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `process`                                                                                                                                                                                                                                    | [models.ProcessType](../../models/processtype.md)                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `container`                                                                                                                                                                                                                                  | [operations.Container](../../models/operations/container.md)                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `metadata`                                                                                                                                                                                                                                   | [models.ItemsTypeNotificationMetadata](../../models/itemstypenotificationmetadata.md)[]                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Fields to add to events from this input                                                                                                                                                                                                      |
| `persistence`                                                                                                                                                                                                                                | [operations.InputSystemMetricsPersistence](../../models/operations/inputsystemmetricspersistence.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `description`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
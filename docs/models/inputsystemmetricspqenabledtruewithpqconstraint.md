# InputSystemMetricsPqEnabledTrueWithPqConstraint

## Example Usage

```typescript
import { InputSystemMetricsPqEnabledTrueWithPqConstraint } from "cribl-control-plane/models";

let value: InputSystemMetricsPqEnabledTrueWithPqConstraint = {
  pqEnabled: false,
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  id: "<id>",
  type: "system_metrics",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
  interval: 1219.22,
  host: {
    mode: "disabled",
    custom: {
      system: {
        mode: "custom",
        processes: true,
      },
      cpu: {
        mode: "basic",
        perCpu: false,
        detail: true,
        time: false,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "all",
        detail: true,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "basic",
        detail: false,
        inodes: false,
        devices: [
          "<value 1>",
        ],
        mountpoints: [
          "<value 1>",
        ],
        fstypes: [
          "<value 1>",
          "<value 2>",
        ],
        perDevice: true,
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
  container: {
    mode: "basic",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    dockerTimeout: 9942.78,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: false,
    perDevice: true,
    detail: false,
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  description:
    "forenenst concrete supposing quiet but concerning consequently aside hovel",
};
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pqEnabled`                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                           | Use a disk queue to minimize data loss when connected services block. See [Cribl Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud Workers) and configuration options (on-prem and hybrid Workers). |
| `pq`                                                                                                                                                                                                                                         | [models.PqType](../models/pqtype.md)                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Unique ID for this input                                                                                                                                                                                                                     |
| `type`                                                                                                                                                                                                                                       | [models.InputSystemMetricsType](../models/inputsystemmetricstype.md)                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `disabled`                                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `pipeline`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Pipeline to process data from this Source before sending it through the Routes                                                                                                                                                               |
| `sendToRoutes`                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Select whether to send data to Routes, or directly to Destinations.                                                                                                                                                                          |
| `environment`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                                                         |
| `streamtags`                                                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                           | Tags for filtering and grouping in @{product}                                                                                                                                                                                                |
| `connections`                                                                                                                                                                                                                                | [models.ItemsTypeConnectionsOptional](../models/itemstypeconnectionsoptional.md)[]                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                           | Direct connections to Destinations, and optionally via a Pipeline or a Pack                                                                                                                                                                  |
| `interval`                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Time, in seconds, between consecutive metric collections. Default is 10 seconds.                                                                                                                                                             |
| `host`                                                                                                                                                                                                                                       | [models.InputSystemMetricsHost](../models/inputsystemmetricshost.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `process`                                                                                                                                                                                                                                    | [models.ProcessType](../models/processtype.md)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `container`                                                                                                                                                                                                                                  | [models.Container](../models/container.md)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `metadata`                                                                                                                                                                                                                                   | [models.ItemsTypeNotificationMetadata](../models/itemstypenotificationmetadata.md)[]                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | Fields to add to events from this input                                                                                                                                                                                                      |
| `persistence`                                                                                                                                                                                                                                | [models.InputSystemMetricsPersistence](../models/inputsystemmetricspersistence.md)                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `description`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
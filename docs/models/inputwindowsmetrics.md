# InputWindowsMetrics

## Example Usage

```typescript
import { InputWindowsMetrics } from "cribl-control-plane/models";

let value: InputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  interval: 4147.56,
  host: {
    mode: "custom",
    custom: {
      system: {
        mode: "basic",
        detail: true,
      },
      cpu: {
        mode: "custom",
        perCpu: false,
        detail: false,
        time: true,
      },
      memory: {
        mode: "all",
        detail: false,
      },
      network: {
        mode: "all",
        detail: true,
        protocols: true,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "custom",
        perVolume: true,
        detail: false,
        volumes: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
        includeChildren: true,
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
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description:
    "above commemorate quarrelsomely outrun independence kettledrum very along",
};
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Unique ID for this input                                                                                                                                                                                                                     |
| `type`                                                                                                                                                                                                                                       | *"windows_metrics"*                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `disabled`                                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `pipeline`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Pipeline to process data from this Source before sending it through the Routes                                                                                                                                                               |
| `sendToRoutes`                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Select whether to send data to Routes, or directly to Destinations.                                                                                                                                                                          |
| `environment`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                                                         |
| `pqEnabled`                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Use a disk queue to minimize data loss when connected services block. See [Cribl Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud Workers) and configuration options (on-prem and hybrid Workers). |
| `streamtags`                                                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                           | Tags for filtering and grouping in @{product}                                                                                                                                                                                                |
| `connections`                                                                                                                                                                                                                                | [models.ItemsTypeConnectionsOptional](../models/itemstypeconnectionsoptional.md)[]                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                           | Direct connections to Destinations, and optionally via a Pipeline or a Pack                                                                                                                                                                  |
| `pq`                                                                                                                                                                                                                                         | [models.PqType](../models/pqtype.md)                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `interval`                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Time, in seconds, between consecutive metric collections. Default is 10 seconds.                                                                                                                                                             |
| `host`                                                                                                                                                                                                                                       | [models.InputWindowsMetricsHost](../models/inputwindowsmetricshost.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `process`                                                                                                                                                                                                                                    | [models.ProcessType](../models/processtype.md)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `metadata`                                                                                                                                                                                                                                   | [models.ItemsTypeNotificationMetadata](../models/itemstypenotificationmetadata.md)[]                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | Fields to add to events from this input                                                                                                                                                                                                      |
| `persistence`                                                                                                                                                                                                                                | [models.InputWindowsMetricsPersistence](../models/inputwindowsmetricspersistence.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `disableNativeModule`                                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Enable to use built-in tools (PowerShell) to collect metrics instead of native API (default) [Learn more](https://docs.cribl.io/edge/sources-windows-metrics/#advanced-tab)                                                                  |
| `description`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
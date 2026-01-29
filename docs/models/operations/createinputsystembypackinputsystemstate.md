# CreateInputSystemByPackInputSystemState

## Example Usage

```typescript
import { CreateInputSystemByPackInputSystemState } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackInputSystemState = {
  id: "<id>",
  type: "system_state",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  interval: 1011.99,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectors: {
    hostsfile: {
      enable: true,
    },
    interfaces: {
      enable: true,
    },
    disk: {
      enable: false,
    },
    metadata: {
      enable: false,
    },
    routes: {
      enable: true,
    },
    dns: {
      enable: true,
    },
    user: {
      enable: true,
    },
    firewall: {
      enable: false,
    },
    services: {
      enable: true,
    },
    ports: {
      enable: false,
    },
    loginUsers: {
      enable: true,
    },
  },
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: true,
  disableNativeLastLogModule: false,
  description: "outside minus majestically never tomorrow",
};
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | Unique ID for this input                                                                                                                                                                                                                     |
| `type`                                                                                                                                                                                                                                       | *"system_state"*                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `disabled`                                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `pipeline`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Pipeline to process data from this Source before sending it through the Routes                                                                                                                                                               |
| `sendToRoutes`                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Select whether to send data to Routes, or directly to Destinations.                                                                                                                                                                          |
| `environment`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.                                                                                                                                         |
| `pqEnabled`                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Use a disk queue to minimize data loss when connected services block. See [Cribl Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud Workers) and configuration options (on-prem and hybrid Workers). |
| `streamtags`                                                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                           | Tags for filtering and grouping in @{product}                                                                                                                                                                                                |
| `connections`                                                                                                                                                                                                                                | [models.ItemsTypeConnectionsOptional](../../models/itemstypeconnectionsoptional.md)[]                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                           | Direct connections to Destinations, and optionally via a Pipeline or a Pack                                                                                                                                                                  |
| `pq`                                                                                                                                                                                                                                         | [models.PqType](../../models/pqtype.md)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `interval`                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | Time, in seconds, between consecutive state collections. Default is 300 seconds (5 minutes).                                                                                                                                                 |
| `metadata`                                                                                                                                                                                                                                   | [models.ItemsTypeNotificationMetadata](../../models/itemstypenotificationmetadata.md)[]                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Fields to add to events from this input                                                                                                                                                                                                      |
| `collectors`                                                                                                                                                                                                                                 | [operations.CreateInputSystemByPackCollectors](../../models/operations/createinputsystembypackcollectors.md)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `persistence`                                                                                                                                                                                                                                | [operations.CreateInputSystemByPackPersistenceSystemState](../../models/operations/createinputsystembypackpersistencesystemstate.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `disableNativeModule`                                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Enable to use built-in tools (PowerShell) to collect events instead of native API (default) [Learn more](https://docs.cribl.io/edge/sources-system-state/#advanced-tab)                                                                      |
| `disableNativeLastLogModule`                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                           | Enable only to collect LastLog data via legacy implementation. This option will be removed in a future release. Please contact Support before enabling. [Learn more](https://docs.cribl.io/edge/sources-system-state/#advanced-tab)          |
| `description`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
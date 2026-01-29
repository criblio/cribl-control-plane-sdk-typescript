# CreateInputSystemByPackCustomSystemMetrics

## Example Usage

```typescript
import { CreateInputSystemByPackCustomSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackCustomSystemMetrics = {
  system: {
    mode: "disabled",
    processes: true,
  },
  cpu: {
    mode: "all",
    perCpu: false,
    detail: true,
    time: true,
  },
  memory: {
    mode: "custom",
    detail: true,
  },
  network: {
    mode: "all",
    detail: true,
    protocols: true,
    devices: [
      "<value 1>",
      "<value 2>",
    ],
    perInterface: true,
  },
  disk: {
    mode: "disabled",
    detail: true,
    inodes: false,
    devices: [
      "<value 1>",
      "<value 2>",
    ],
    mountpoints: [
      "<value 1>",
      "<value 2>",
    ],
    fstypes: [
      "<value 1>",
      "<value 2>",
    ],
    perDevice: true,
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `system`                                                                                                                         | [operations.CreateInputSystemByPackSystemSystemMetrics](../../models/operations/createinputsystembypacksystemsystemmetrics.md)   | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `cpu`                                                                                                                            | [operations.CreateInputSystemByPackCpuSystemMetrics](../../models/operations/createinputsystembypackcpusystemmetrics.md)         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `memory`                                                                                                                         | [operations.CreateInputSystemByPackMemorySystemMetrics](../../models/operations/createinputsystembypackmemorysystemmetrics.md)   | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `network`                                                                                                                        | [operations.CreateInputSystemByPackNetworkSystemMetrics](../../models/operations/createinputsystembypacknetworksystemmetrics.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `disk`                                                                                                                           | [operations.CreateInputSystemByPackDiskSystemMetrics](../../models/operations/createinputsystembypackdisksystemmetrics.md)       | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
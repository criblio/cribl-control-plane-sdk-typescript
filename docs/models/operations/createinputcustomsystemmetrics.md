# CreateInputCustomSystemMetrics

## Example Usage

```typescript
import { CreateInputCustomSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputCustomSystemMetrics = {
  system: {
    mode: "custom",
    processes: true,
  },
  cpu: {
    mode: "custom",
    perCpu: false,
    detail: false,
    time: true,
  },
  memory: {
    mode: "basic",
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
    mode: "basic",
    detail: false,
    inodes: true,
    devices: [
      "<value 1>",
      "<value 2>",
    ],
    mountpoints: [
      "<value 1>",
    ],
    fstypes: [
      "<value 1>",
      "<value 2>",
    ],
    perDevice: false,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `system`                                                                                                 | [operations.CreateInputSystemSystemMetrics](../../models/operations/createinputsystemsystemmetrics.md)   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `cpu`                                                                                                    | [operations.CreateInputCpuSystemMetrics](../../models/operations/createinputcpusystemmetrics.md)         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `memory`                                                                                                 | [operations.CreateInputMemorySystemMetrics](../../models/operations/createinputmemorysystemmetrics.md)   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `network`                                                                                                | [operations.CreateInputNetworkSystemMetrics](../../models/operations/createinputnetworksystemmetrics.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `disk`                                                                                                   | [operations.CreateInputDiskSystemMetrics](../../models/operations/createinputdisksystemmetrics.md)       | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
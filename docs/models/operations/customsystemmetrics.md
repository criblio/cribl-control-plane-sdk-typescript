# CustomSystemMetrics

## Example Usage

```typescript
import { CustomSystemMetrics } from "cribl-control-plane/models/operations";

let value: CustomSystemMetrics = {
  system: {
    mode: "all",
    processes: true,
  },
  cpu: {
    mode: "custom",
    perCpu: false,
    detail: true,
    time: false,
  },
  memory: {
    mode: "all",
    detail: false,
  },
  network: {
    mode: "custom",
    detail: false,
    protocols: false,
    devices: [
      "<value 1>",
      "<value 2>",
    ],
    perInterface: false,
  },
  disk: {
    mode: "custom",
    detail: true,
    inodes: false,
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
      "<value 3>",
    ],
    perDevice: true,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `system`                                                                           | [operations.SystemSystemMetrics](../../models/operations/systemsystemmetrics.md)   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `cpu`                                                                              | [operations.CpuSystemMetrics](../../models/operations/cpusystemmetrics.md)         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `memory`                                                                           | [operations.MemorySystemMetrics](../../models/operations/memorysystemmetrics.md)   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `network`                                                                          | [operations.NetworkSystemMetrics](../../models/operations/networksystemmetrics.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disk`                                                                             | [operations.DiskSystemMetrics](../../models/operations/disksystemmetrics.md)       | :heavy_minus_sign:                                                                 | N/A                                                                                |
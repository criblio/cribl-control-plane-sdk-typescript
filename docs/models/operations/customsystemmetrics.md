# CustomSystemMetrics

## Example Usage

```typescript
import { CustomSystemMetrics } from "cribl-control-plane/models/operations";

let value: CustomSystemMetrics = {
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
      "<value 3>",
    ],
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
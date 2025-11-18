# CustomSystemMetrics

## Example Usage

```typescript
import { CustomSystemMetrics } from "cribl-control-plane/models";

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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `system`                                                         | [models.SystemSystemMetrics](../models/systemsystemmetrics.md)   | :heavy_minus_sign:                                               | N/A                                                              |
| `cpu`                                                            | [models.CpuSystemMetrics](../models/cpusystemmetrics.md)         | :heavy_minus_sign:                                               | N/A                                                              |
| `memory`                                                         | [models.MemorySystemMetrics](../models/memorysystemmetrics.md)   | :heavy_minus_sign:                                               | N/A                                                              |
| `network`                                                        | [models.NetworkSystemMetrics](../models/networksystemmetrics.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `disk`                                                           | [models.DiskSystemMetrics](../models/disksystemmetrics.md)       | :heavy_minus_sign:                                               | N/A                                                              |
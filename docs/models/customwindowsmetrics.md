# CustomWindowsMetrics

## Example Usage

```typescript
import { CustomWindowsMetrics } from "cribl-control-plane/models";

let value: CustomWindowsMetrics = {
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
    volumes: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `system`                                                           | [models.SystemWindowsMetrics](../models/systemwindowsmetrics.md)   | :heavy_minus_sign:                                                 | N/A                                                                |
| `cpu`                                                              | [models.CpuWindowsMetrics](../models/cpuwindowsmetrics.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `memory`                                                           | [models.MemoryWindowsMetrics](../models/memorywindowsmetrics.md)   | :heavy_minus_sign:                                                 | N/A                                                                |
| `network`                                                          | [models.NetworkWindowsMetrics](../models/networkwindowsmetrics.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `disk`                                                             | [models.DiskWindowsMetrics](../models/diskwindowsmetrics.md)       | :heavy_minus_sign:                                                 | N/A                                                                |
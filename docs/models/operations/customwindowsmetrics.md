# CustomWindowsMetrics

## Example Usage

```typescript
import { CustomWindowsMetrics } from "cribl-control-plane/models/operations";

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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `system`                                                                             | [operations.SystemWindowsMetrics](../../models/operations/systemwindowsmetrics.md)   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `cpu`                                                                                | [operations.CpuWindowsMetrics](../../models/operations/cpuwindowsmetrics.md)         | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `memory`                                                                             | [operations.MemoryWindowsMetrics](../../models/operations/memorywindowsmetrics.md)   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `network`                                                                            | [operations.NetworkWindowsMetrics](../../models/operations/networkwindowsmetrics.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `disk`                                                                               | [operations.DiskWindowsMetrics](../../models/operations/diskwindowsmetrics.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
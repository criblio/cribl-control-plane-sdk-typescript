# CustomWindowsMetrics

## Example Usage

```typescript
import { CustomWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CustomWindowsMetrics = {
  system: {
    mode: "custom",
    detail: true,
  },
  cpu: {
    mode: "custom",
    perCpu: false,
    detail: true,
    time: true,
  },
  memory: {
    mode: "custom",
    detail: false,
  },
  network: {
    mode: "custom",
    detail: false,
    protocols: false,
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
    detail: true,
    volumes: [
      "<value 1>",
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
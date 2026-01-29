# CreateInputSystemByPackCustomWindowsMetrics

## Example Usage

```typescript
import { CreateInputSystemByPackCustomWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackCustomWindowsMetrics = {
  system: {
    mode: "custom",
    detail: false,
  },
  cpu: {
    mode: "disabled",
    perCpu: false,
    detail: false,
    time: true,
  },
  memory: {
    mode: "custom",
    detail: false,
  },
  network: {
    mode: "basic",
    detail: false,
    protocols: false,
    devices: [
      "<value 1>",
      "<value 2>",
    ],
    perInterface: false,
  },
  disk: {
    mode: "disabled",
    perVolume: true,
    detail: false,
    volumes: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `system`                                                                                                                           | [operations.CreateInputSystemByPackSystemWindowsMetrics](../../models/operations/createinputsystembypacksystemwindowsmetrics.md)   | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `cpu`                                                                                                                              | [operations.CreateInputSystemByPackCpuWindowsMetrics](../../models/operations/createinputsystembypackcpuwindowsmetrics.md)         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `memory`                                                                                                                           | [operations.CreateInputSystemByPackMemoryWindowsMetrics](../../models/operations/createinputsystembypackmemorywindowsmetrics.md)   | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `network`                                                                                                                          | [operations.CreateInputSystemByPackNetworkWindowsMetrics](../../models/operations/createinputsystembypacknetworkwindowsmetrics.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `disk`                                                                                                                             | [operations.CreateInputSystemByPackDiskWindowsMetrics](../../models/operations/createinputsystembypackdiskwindowsmetrics.md)       | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
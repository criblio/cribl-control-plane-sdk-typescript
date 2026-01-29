# CreateInputCustomWindowsMetrics

## Example Usage

```typescript
import { CreateInputCustomWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputCustomWindowsMetrics = {
  system: {
    mode: "disabled",
    detail: true,
  },
  cpu: {
    mode: "basic",
    perCpu: true,
    detail: true,
    time: false,
  },
  memory: {
    mode: "all",
    detail: true,
  },
  network: {
    mode: "all",
    detail: false,
    protocols: true,
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
    detail: false,
    volumes: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `system`                                                                                                   | [operations.CreateInputSystemWindowsMetrics](../../models/operations/createinputsystemwindowsmetrics.md)   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `cpu`                                                                                                      | [operations.CreateInputCpuWindowsMetrics](../../models/operations/createinputcpuwindowsmetrics.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `memory`                                                                                                   | [operations.CreateInputMemoryWindowsMetrics](../../models/operations/createinputmemorywindowsmetrics.md)   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `network`                                                                                                  | [operations.CreateInputNetworkWindowsMetrics](../../models/operations/createinputnetworkwindowsmetrics.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `disk`                                                                                                     | [operations.CreateInputDiskWindowsMetrics](../../models/operations/createinputdiskwindowsmetrics.md)       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
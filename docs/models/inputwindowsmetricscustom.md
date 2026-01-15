# InputWindowsMetricsCustom

## Example Usage

```typescript
import { InputWindowsMetricsCustom } from "cribl-control-plane/models";

let value: InputWindowsMetricsCustom = {
  system: {
    mode: "basic",
    detail: true,
  },
  cpu: {
    mode: "custom",
    perCpu: false,
    detail: false,
    time: true,
  },
  memory: {
    mode: "all",
    detail: false,
  },
  network: {
    mode: "all",
    detail: true,
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
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `system`                                                                     | [models.InputWindowsMetricsSystem](../models/inputwindowsmetricssystem.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `cpu`                                                                        | [models.InputWindowsMetricsCpu](../models/inputwindowsmetricscpu.md)         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `memory`                                                                     | [models.InputWindowsMetricsMemory](../models/inputwindowsmetricsmemory.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `network`                                                                    | [models.InputWindowsMetricsNetwork](../models/inputwindowsmetricsnetwork.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disk`                                                                       | [models.InputWindowsMetricsDisk](../models/inputwindowsmetricsdisk.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
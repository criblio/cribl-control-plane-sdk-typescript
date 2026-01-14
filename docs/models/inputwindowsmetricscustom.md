# InputWindowsMetricsCustom

## Example Usage

```typescript
import { InputWindowsMetricsCustom } from "cribl-control-plane/models";

let value: InputWindowsMetricsCustom = {
  system: {
    mode: "all",
    detail: false,
  },
  cpu: {
    mode: "disabled",
    perCpu: false,
    detail: true,
    time: true,
  },
  memory: {
    mode: "custom",
    detail: true,
  },
  network: {
    mode: "basic",
    detail: true,
    protocols: false,
    devices: [
      "<value 1>",
    ],
    perInterface: false,
  },
  disk: {
    mode: "basic",
    perVolume: false,
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
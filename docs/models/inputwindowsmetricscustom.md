# InputWindowsMetricsCustom

## Example Usage

```typescript
import { InputWindowsMetricsCustom } from "cribl-control-plane/models";

let value: InputWindowsMetricsCustom = {
  system: {},
  cpu: {},
  memory: {},
  network: {
    devices: [
      "<value 1>",
    ],
  },
  disk: {
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
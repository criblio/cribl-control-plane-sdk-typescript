# InputSystemMetricsCustom2

## Example Usage

```typescript
import { InputSystemMetricsCustom2 } from "cribl-control-plane/models";

let value: InputSystemMetricsCustom2 = {
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
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `system`                                                                     | [models.InputSystemMetricsSystem2](../models/inputsystemmetricssystem2.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `cpu`                                                                        | [models.InputSystemMetricsCpu2](../models/inputsystemmetricscpu2.md)         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `memory`                                                                     | [models.InputSystemMetricsMemory2](../models/inputsystemmetricsmemory2.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `network`                                                                    | [models.InputSystemMetricsNetwork2](../models/inputsystemmetricsnetwork2.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disk`                                                                       | [models.InputSystemMetricsDisk2](../models/inputsystemmetricsdisk2.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
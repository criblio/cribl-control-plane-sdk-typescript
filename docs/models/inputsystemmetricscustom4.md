# InputSystemMetricsCustom4

## Example Usage

```typescript
import { InputSystemMetricsCustom4 } from "cribl-control-plane/models";

let value: InputSystemMetricsCustom4 = {
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `system`                                                                     | [models.InputSystemMetricsSystem4](../models/inputsystemmetricssystem4.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `cpu`                                                                        | [models.InputSystemMetricsCpu4](../models/inputsystemmetricscpu4.md)         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `memory`                                                                     | [models.InputSystemMetricsMemory4](../models/inputsystemmetricsmemory4.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `network`                                                                    | [models.InputSystemMetricsNetwork4](../models/inputsystemmetricsnetwork4.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disk`                                                                       | [models.InputSystemMetricsDisk4](../models/inputsystemmetricsdisk4.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
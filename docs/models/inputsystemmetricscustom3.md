# InputSystemMetricsCustom3

## Example Usage

```typescript
import { InputSystemMetricsCustom3 } from "cribl-control-plane/models";

let value: InputSystemMetricsCustom3 = {
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
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `system`                                                                     | [models.InputSystemMetricsSystem3](../models/inputsystemmetricssystem3.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `cpu`                                                                        | [models.InputSystemMetricsCpu3](../models/inputsystemmetricscpu3.md)         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `memory`                                                                     | [models.InputSystemMetricsMemory3](../models/inputsystemmetricsmemory3.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `network`                                                                    | [models.InputSystemMetricsNetwork3](../models/inputsystemmetricsnetwork3.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disk`                                                                       | [models.InputSystemMetricsDisk3](../models/inputsystemmetricsdisk3.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
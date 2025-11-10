# InputSystemMetricsCustom1

## Example Usage

```typescript
import { InputSystemMetricsCustom1 } from "cribl-control-plane/models";

let value: InputSystemMetricsCustom1 = {
  system: {},
  cpu: {},
  memory: {},
  network: {
    devices: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  disk: {
    devices: [
      "<value 1>",
    ],
    mountpoints: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
| `system`                                                                     | [models.InputSystemMetricsSystem1](../models/inputsystemmetricssystem1.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `cpu`                                                                        | [models.InputSystemMetricsCpu1](../models/inputsystemmetricscpu1.md)         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `memory`                                                                     | [models.InputSystemMetricsMemory1](../models/inputsystemmetricsmemory1.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `network`                                                                    | [models.InputSystemMetricsNetwork1](../models/inputsystemmetricsnetwork1.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disk`                                                                       | [models.InputSystemMetricsDisk1](../models/inputsystemmetricsdisk1.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
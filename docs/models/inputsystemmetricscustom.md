# InputSystemMetricsCustom

## Example Usage

```typescript
import { InputSystemMetricsCustom } from "cribl-control-plane/models";

let value: InputSystemMetricsCustom = {
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `system`                                                                   | [models.InputSystemMetricsSystem](../models/inputsystemmetricssystem.md)   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `cpu`                                                                      | [models.InputSystemMetricsCpu](../models/inputsystemmetricscpu.md)         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `memory`                                                                   | [models.InputSystemMetricsMemory](../models/inputsystemmetricsmemory.md)   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `network`                                                                  | [models.InputSystemMetricsNetwork](../models/inputsystemmetricsnetwork.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `disk`                                                                     | [models.InputSystemMetricsDisk](../models/inputsystemmetricsdisk.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
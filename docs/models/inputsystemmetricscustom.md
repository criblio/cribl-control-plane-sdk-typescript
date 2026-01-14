# InputSystemMetricsCustom

## Example Usage

```typescript
import { InputSystemMetricsCustom } from "cribl-control-plane/models";

let value: InputSystemMetricsCustom = {
  system: {
    mode: "custom",
    processes: true,
  },
  cpu: {
    mode: "basic",
    perCpu: false,
    detail: true,
    time: false,
  },
  memory: {
    mode: "custom",
    detail: true,
  },
  network: {
    mode: "all",
    detail: true,
    protocols: false,
    devices: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    perInterface: true,
  },
  disk: {
    mode: "basic",
    detail: false,
    inodes: false,
    devices: [
      "<value 1>",
    ],
    mountpoints: [
      "<value 1>",
    ],
    fstypes: [
      "<value 1>",
      "<value 2>",
    ],
    perDevice: true,
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
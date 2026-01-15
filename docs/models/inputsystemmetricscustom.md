# InputSystemMetricsCustom

## Example Usage

```typescript
import { InputSystemMetricsCustom } from "cribl-control-plane/models";

let value: InputSystemMetricsCustom = {
  system: {
    mode: "disabled",
    processes: false,
  },
  cpu: {
    mode: "all",
    perCpu: true,
    detail: false,
    time: true,
  },
  memory: {
    mode: "disabled",
    detail: false,
  },
  network: {
    mode: "basic",
    detail: true,
    protocols: true,
    devices: [
      "<value 1>",
      "<value 2>",
    ],
    perInterface: false,
  },
  disk: {
    mode: "basic",
    detail: true,
    inodes: false,
    devices: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    mountpoints: [
      "<value 1>",
    ],
    fstypes: [
      "<value 1>",
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
# InputSystemMetricsCustom

## Example Usage

```typescript
import { InputSystemMetricsCustom } from "cribl-control-plane/models/operations";

let value: InputSystemMetricsCustom = {
  system: {
    mode: "all",
    processes: true,
  },
  cpu: {
    mode: "custom",
    perCpu: true,
    detail: false,
    time: false,
  },
  memory: {
    mode: "all",
    detail: false,
  },
  network: {
    mode: "disabled",
    detail: false,
    protocols: false,
    devices: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    perInterface: false,
  },
  disk: {
    mode: "basic",
    detail: false,
    inodes: true,
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
      "<value 2>",
    ],
    perDevice: true,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `system`                                                                                     | [operations.InputSystemMetricsSystem](../../models/operations/inputsystemmetricssystem.md)   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `cpu`                                                                                        | [operations.InputSystemMetricsCpu](../../models/operations/inputsystemmetricscpu.md)         | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `memory`                                                                                     | [operations.InputSystemMetricsMemory](../../models/operations/inputsystemmetricsmemory.md)   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `network`                                                                                    | [operations.InputSystemMetricsNetwork](../../models/operations/inputsystemmetricsnetwork.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `disk`                                                                                       | [operations.InputSystemMetricsDisk](../../models/operations/inputsystemmetricsdisk.md)       | :heavy_minus_sign:                                                                           | N/A                                                                                          |
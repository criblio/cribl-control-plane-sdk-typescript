# InputSystemMetricsCustom

## Example Usage

```typescript
import { InputSystemMetricsCustom } from "cribl-control-plane/models/operations";

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
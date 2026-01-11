# InputWindowsMetricsCustom

## Example Usage

```typescript
import { InputWindowsMetricsCustom } from "cribl-control-plane/models/operations";

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
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `system`                                                                                       | [operations.InputWindowsMetricsSystem](../../models/operations/inputwindowsmetricssystem.md)   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `cpu`                                                                                          | [operations.InputWindowsMetricsCpu](../../models/operations/inputwindowsmetricscpu.md)         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `memory`                                                                                       | [operations.InputWindowsMetricsMemory](../../models/operations/inputwindowsmetricsmemory.md)   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `network`                                                                                      | [operations.InputWindowsMetricsNetwork](../../models/operations/inputwindowsmetricsnetwork.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `disk`                                                                                         | [operations.InputWindowsMetricsDisk](../../models/operations/inputwindowsmetricsdisk.md)       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
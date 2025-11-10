# InputWindowsMetricsCustom2

## Example Usage

```typescript
import { InputWindowsMetricsCustom2 } from "cribl-control-plane/models";

let value: InputWindowsMetricsCustom2 = {
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
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `system`                                                                       | [models.InputWindowsMetricsSystem2](../models/inputwindowsmetricssystem2.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cpu`                                                                          | [models.InputWindowsMetricsCpu2](../models/inputwindowsmetricscpu2.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `memory`                                                                       | [models.InputWindowsMetricsMemory2](../models/inputwindowsmetricsmemory2.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `network`                                                                      | [models.InputWindowsMetricsNetwork2](../models/inputwindowsmetricsnetwork2.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `disk`                                                                         | [models.InputWindowsMetricsDisk2](../models/inputwindowsmetricsdisk2.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
# InputWindowsMetricsCustom4

## Example Usage

```typescript
import { InputWindowsMetricsCustom4 } from "cribl-control-plane/models";

let value: InputWindowsMetricsCustom4 = {
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
    volumes: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `system`                                                                       | [models.InputWindowsMetricsSystem4](../models/inputwindowsmetricssystem4.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cpu`                                                                          | [models.InputWindowsMetricsCpu4](../models/inputwindowsmetricscpu4.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `memory`                                                                       | [models.InputWindowsMetricsMemory4](../models/inputwindowsmetricsmemory4.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `network`                                                                      | [models.InputWindowsMetricsNetwork4](../models/inputwindowsmetricsnetwork4.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `disk`                                                                         | [models.InputWindowsMetricsDisk4](../models/inputwindowsmetricsdisk4.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
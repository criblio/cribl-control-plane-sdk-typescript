# InputWindowsMetricsCustom3

## Example Usage

```typescript
import { InputWindowsMetricsCustom3 } from "cribl-control-plane/models";

let value: InputWindowsMetricsCustom3 = {
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
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `system`                                                                       | [models.InputWindowsMetricsSystem3](../models/inputwindowsmetricssystem3.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cpu`                                                                          | [models.InputWindowsMetricsCpu3](../models/inputwindowsmetricscpu3.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `memory`                                                                       | [models.InputWindowsMetricsMemory3](../models/inputwindowsmetricsmemory3.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `network`                                                                      | [models.InputWindowsMetricsNetwork3](../models/inputwindowsmetricsnetwork3.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `disk`                                                                         | [models.InputWindowsMetricsDisk3](../models/inputwindowsmetricsdisk3.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
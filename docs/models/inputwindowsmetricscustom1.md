# InputWindowsMetricsCustom1

## Example Usage

```typescript
import { InputWindowsMetricsCustom1 } from "cribl-control-plane/models";

let value: InputWindowsMetricsCustom1 = {
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
| `system`                                                                       | [models.InputWindowsMetricsSystem1](../models/inputwindowsmetricssystem1.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cpu`                                                                          | [models.InputWindowsMetricsCpu1](../models/inputwindowsmetricscpu1.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `memory`                                                                       | [models.InputWindowsMetricsMemory1](../models/inputwindowsmetricsmemory1.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `network`                                                                      | [models.InputWindowsMetricsNetwork1](../models/inputwindowsmetricsnetwork1.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `disk`                                                                         | [models.InputWindowsMetricsDisk1](../models/inputwindowsmetricsdisk1.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
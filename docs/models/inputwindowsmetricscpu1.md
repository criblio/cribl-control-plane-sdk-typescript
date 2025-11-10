# InputWindowsMetricsCpu1

## Example Usage

```typescript
import { InputWindowsMetricsCpu1 } from "cribl-control-plane/models";

let value: InputWindowsMetricsCpu1 = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `mode`                                                                         | [models.InputWindowsMetricsCpuMode1](../models/inputwindowsmetricscpumode1.md) | :heavy_minus_sign:                                                             | Select the level of details for CPU metrics                                    |
| `perCpu`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | Generate metrics for each CPU                                                  |
| `detail`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | Generate metrics for all CPU states                                            |
| `time`                                                                         | *boolean*                                                                      | :heavy_minus_sign:                                                             | Generate raw, monotonic CPU time counters                                      |
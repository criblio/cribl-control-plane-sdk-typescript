# InputWindowsMetricsCpu

## Example Usage

```typescript
import { InputWindowsMetricsCpu } from "cribl-control-plane/models/operations";

let value: InputWindowsMetricsCpu = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `mode`                                                                                         | [operations.InputWindowsMetricsCpuMode](../../models/operations/inputwindowsmetricscpumode.md) | :heavy_minus_sign:                                                                             | Select the level of details for CPU metrics                                                    |
| `perCpu`                                                                                       | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Generate metrics for each CPU                                                                  |
| `detail`                                                                                       | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Generate metrics for all CPU states                                                            |
| `time`                                                                                         | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Generate raw, monotonic CPU time counters                                                      |
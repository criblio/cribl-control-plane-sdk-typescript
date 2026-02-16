# CpuWindowsMetrics

## Example Usage

```typescript
import { CpuWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CpuWindowsMetrics = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `mode`                                                                               | [operations.CpuModeWindowsMetrics](../../models/operations/cpumodewindowsmetrics.md) | :heavy_minus_sign:                                                                   | Select the level of details for CPU metrics                                          |
| `perCpu`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Generate metrics for each CPU                                                        |
| `detail`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Generate metrics for all CPU states                                                  |
| `time`                                                                               | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Generate raw, monotonic CPU time counters                                            |
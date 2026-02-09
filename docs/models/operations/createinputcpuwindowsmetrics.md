# CreateInputCpuWindowsMetrics

## Example Usage

```typescript
import { CreateInputCpuWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputCpuWindowsMetrics = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                     | [operations.CreateInputCpuModeWindowsMetrics](../../models/operations/createinputcpumodewindowsmetrics.md) | :heavy_minus_sign:                                                                                         | Select the level of details for CPU metrics                                                                |
| `perCpu`                                                                                                   | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Generate metrics for each CPU                                                                              |
| `detail`                                                                                                   | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Generate metrics for all CPU states                                                                        |
| `time`                                                                                                     | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Generate raw, monotonic CPU time counters                                                                  |
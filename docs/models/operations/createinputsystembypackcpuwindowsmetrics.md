# CreateInputSystemByPackCpuWindowsMetrics

## Example Usage

```typescript
import { CreateInputSystemByPackCpuWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackCpuWindowsMetrics = {
  mode: "disabled",
  perCpu: true,
  detail: false,
  time: true,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                             | [operations.CreateInputSystemByPackCpuModeWindowsMetrics](../../models/operations/createinputsystembypackcpumodewindowsmetrics.md) | :heavy_minus_sign:                                                                                                                 | Select the level of details for CPU metrics                                                                                        |
| `perCpu`                                                                                                                           | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Generate metrics for each CPU                                                                                                      |
| `detail`                                                                                                                           | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Generate metrics for all CPU states                                                                                                |
| `time`                                                                                                                             | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Generate raw, monotonic CPU time counters                                                                                          |
# CreateInputSystemByPackCpuSystemMetrics

## Example Usage

```typescript
import { CreateInputSystemByPackCpuSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackCpuSystemMetrics = {
  mode: "basic",
  perCpu: false,
  detail: false,
  time: false,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                           | [operations.CreateInputSystemByPackCpuModeSystemMetrics](../../models/operations/createinputsystembypackcpumodesystemmetrics.md) | :heavy_minus_sign:                                                                                                               | Select the level of detail for CPU metrics                                                                                       |
| `perCpu`                                                                                                                         | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Generate metrics for each CPU                                                                                                    |
| `detail`                                                                                                                         | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Generate metrics for all CPU states                                                                                              |
| `time`                                                                                                                           | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Generate raw, monotonic CPU time counters                                                                                        |
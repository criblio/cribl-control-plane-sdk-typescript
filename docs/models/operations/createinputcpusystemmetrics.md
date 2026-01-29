# CreateInputCpuSystemMetrics

## Example Usage

```typescript
import { CreateInputCpuSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputCpuSystemMetrics = {
  mode: "custom",
  perCpu: true,
  detail: true,
  time: false,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                   | [operations.CreateInputCpuModeSystemMetrics](../../models/operations/createinputcpumodesystemmetrics.md) | :heavy_minus_sign:                                                                                       | Select the level of detail for CPU metrics                                                               |
| `perCpu`                                                                                                 | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Generate metrics for each CPU                                                                            |
| `detail`                                                                                                 | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Generate metrics for all CPU states                                                                      |
| `time`                                                                                                   | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Generate raw, monotonic CPU time counters                                                                |
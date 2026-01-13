# InputSystemMetricsCpu

## Example Usage

```typescript
import { InputSystemMetricsCpu } from "cribl-control-plane/models/operations";

let value: InputSystemMetricsCpu = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `mode`                                                                                       | [operations.InputSystemMetricsCpuMode](../../models/operations/inputsystemmetricscpumode.md) | :heavy_minus_sign:                                                                           | Select the level of detail for CPU metrics                                                   |
| `perCpu`                                                                                     | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Generate metrics for each CPU                                                                |
| `detail`                                                                                     | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Generate metrics for all CPU states                                                          |
| `time`                                                                                       | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Generate raw, monotonic CPU time counters                                                    |
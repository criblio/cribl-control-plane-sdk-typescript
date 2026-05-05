# InputResponseInputSystemMetricsCpu

## Example Usage

```typescript
import { InputResponseInputSystemMetricsCpu } from "cribl-control-plane/models";

let value: InputResponseInputSystemMetricsCpu = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `mode`                                                                                               | [models.InputResponseInputSystemMetricsCpuMode](../models/inputresponseinputsystemmetricscpumode.md) | :heavy_minus_sign:                                                                                   | Select the level of detail for CPU metrics                                                           |
| `perCpu`                                                                                             | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Generate metrics for each CPU                                                                        |
| `detail`                                                                                             | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Generate metrics for all CPU states                                                                  |
| `time`                                                                                               | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Generate raw, monotonic CPU time counters                                                            |
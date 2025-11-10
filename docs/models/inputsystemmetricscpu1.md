# InputSystemMetricsCpu1

## Example Usage

```typescript
import { InputSystemMetricsCpu1 } from "cribl-control-plane/models";

let value: InputSystemMetricsCpu1 = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `mode`                                                                       | [models.InputSystemMetricsCpuMode1](../models/inputsystemmetricscpumode1.md) | :heavy_minus_sign:                                                           | Select the level of detail for CPU metrics                                   |
| `perCpu`                                                                     | *boolean*                                                                    | :heavy_minus_sign:                                                           | Generate metrics for each CPU                                                |
| `detail`                                                                     | *boolean*                                                                    | :heavy_minus_sign:                                                           | Generate metrics for all CPU states                                          |
| `time`                                                                       | *boolean*                                                                    | :heavy_minus_sign:                                                           | Generate raw, monotonic CPU time counters                                    |
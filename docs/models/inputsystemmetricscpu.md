# InputSystemMetricsCpu

## Example Usage

```typescript
import { InputSystemMetricsCpu } from "cribl-control-plane/models";

let value: InputSystemMetricsCpu = {
  mode: "disabled",
  perCpu: false,
  detail: false,
  time: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `mode`                                                                     | [models.InputSystemMetricsCpuMode](../models/inputsystemmetricscpumode.md) | :heavy_minus_sign:                                                         | Select the level of detail for CPU metrics                                 |
| `perCpu`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | Generate metrics for each CPU                                              |
| `detail`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | Generate metrics for all CPU states                                        |
| `time`                                                                     | *boolean*                                                                  | :heavy_minus_sign:                                                         | Generate raw, monotonic CPU time counters                                  |
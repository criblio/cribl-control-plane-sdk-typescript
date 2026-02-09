# CreateInputSystemWindowsMetrics

## Example Usage

```typescript
import { CreateInputSystemWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemWindowsMetrics = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                           | [operations.CreateInputSystemModeWindowsMetrics](../../models/operations/createinputsystemmodewindowsmetrics.md) | :heavy_minus_sign:                                                                                               | Select the level of details for system metrics                                                                   |
| `detail`                                                                                                         | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Generate metrics for all system information                                                                      |
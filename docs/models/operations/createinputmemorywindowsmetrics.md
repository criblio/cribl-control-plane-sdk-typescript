# CreateInputMemoryWindowsMetrics

## Example Usage

```typescript
import { CreateInputMemoryWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputMemoryWindowsMetrics = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                           | [operations.CreateInputMemoryModeWindowsMetrics](../../models/operations/createinputmemorymodewindowsmetrics.md) | :heavy_minus_sign:                                                                                               | Select the level of details for memory metrics                                                                   |
| `detail`                                                                                                         | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Generate metrics for all memory states                                                                           |
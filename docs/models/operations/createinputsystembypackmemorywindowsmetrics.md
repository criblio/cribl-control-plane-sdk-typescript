# CreateInputSystemByPackMemoryWindowsMetrics

## Example Usage

```typescript
import { CreateInputSystemByPackMemoryWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackMemoryWindowsMetrics = {
  mode: "custom",
  detail: true,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                                   | [operations.CreateInputSystemByPackMemoryModeWindowsMetrics](../../models/operations/createinputsystembypackmemorymodewindowsmetrics.md) | :heavy_minus_sign:                                                                                                                       | Select the level of details for memory metrics                                                                                           |
| `detail`                                                                                                                                 | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | Generate metrics for all memory states                                                                                                   |
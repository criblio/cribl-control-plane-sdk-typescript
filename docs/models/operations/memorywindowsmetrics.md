# MemoryWindowsMetrics

## Example Usage

```typescript
import { MemoryWindowsMetrics } from "cribl-control-plane/models/operations";

let value: MemoryWindowsMetrics = {
  mode: "custom",
  detail: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `mode`                                                                                     | [operations.MemoryModeWindowsMetrics](../../models/operations/memorymodewindowsmetrics.md) | :heavy_minus_sign:                                                                         | Select the level of details for memory metrics                                             |
| `detail`                                                                                   | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Generate metrics for all memory states                                                     |
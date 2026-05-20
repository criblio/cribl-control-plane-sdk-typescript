# MemoryWindowsMetrics

## Example Usage

```typescript
import { MemoryWindowsMetrics } from "cribl-control-plane/models";

let value: MemoryWindowsMetrics = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `mode`                                                                   | [models.MemoryModeWindowsMetrics](../models/memorymodewindowsmetrics.md) | :heavy_minus_sign:                                                       | Select the level of details for memory metrics                           |
| `detail`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | Generate metrics for all memory states                                   |
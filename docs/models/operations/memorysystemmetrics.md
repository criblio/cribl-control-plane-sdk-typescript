# MemorySystemMetrics

## Example Usage

```typescript
import { MemorySystemMetrics } from "cribl-control-plane/models/operations";

let value: MemorySystemMetrics = {
  mode: "basic",
  detail: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `mode`                                                                                   | [operations.MemoryModeSystemMetrics](../../models/operations/memorymodesystemmetrics.md) | :heavy_minus_sign:                                                                       | Select the level of detail for memory metrics                                            |
| `detail`                                                                                 | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Generate metrics for all memory states                                                   |
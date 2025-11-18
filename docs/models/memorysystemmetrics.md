# MemorySystemMetrics

## Example Usage

```typescript
import { MemorySystemMetrics } from "cribl-control-plane/models";

let value: MemorySystemMetrics = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `mode`                                                                 | [models.MemoryModeSystemMetrics](../models/memorymodesystemmetrics.md) | :heavy_minus_sign:                                                     | Select the level of detail for memory metrics                          |
| `detail`                                                               | *boolean*                                                              | :heavy_minus_sign:                                                     | Generate metrics for all memory states                                 |
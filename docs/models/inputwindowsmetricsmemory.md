# InputWindowsMetricsMemory

## Example Usage

```typescript
import { InputWindowsMetricsMemory } from "cribl-control-plane/models";

let value: InputWindowsMetricsMemory = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `mode`                                                                             | [models.InputWindowsMetricsMemoryMode](../models/inputwindowsmetricsmemorymode.md) | :heavy_minus_sign:                                                                 | Select the level of details for memory metrics                                     |
| `detail`                                                                           | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Generate metrics for all memory states                                             |
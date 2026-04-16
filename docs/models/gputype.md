# GpuType

## Example Usage

```typescript
import { GpuType } from "cribl-control-plane/models";

let value: GpuType = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `mode`                                               | [models.ModeOptionsGpu](../models/modeoptionsgpu.md) | :heavy_minus_sign:                                   | Select the level of detail for GPU metrics           |
| `perGpu`                                             | *boolean*                                            | :heavy_minus_sign:                                   | Generate metrics for each GPU                        |
| `detail`                                             | *boolean*                                            | :heavy_minus_sign:                                   | Generate full GPU metrics                            |
# InputSystemMetricsMemory

## Example Usage

```typescript
import { InputSystemMetricsMemory } from "cribl-control-plane/models";

let value: InputSystemMetricsMemory = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [models.InputSystemMetricsMemoryMode](../models/inputsystemmetricsmemorymode.md) | :heavy_minus_sign:                                                               | Select the level of detail for memory metrics                                    |
| `detail`                                                                         | *boolean*                                                                        | :heavy_minus_sign:                                                               | Generate metrics for all memory states                                           |
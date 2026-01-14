# InputSystemMetricsMemory

## Example Usage

```typescript
import { InputSystemMetricsMemory } from "cribl-control-plane/models/operations";

let value: InputSystemMetricsMemory = {
  mode: "disabled",
  detail: true,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `mode`                                                                                             | [operations.InputSystemMetricsMemoryMode](../../models/operations/inputsystemmetricsmemorymode.md) | :heavy_minus_sign:                                                                                 | Select the level of detail for memory metrics                                                      |
| `detail`                                                                                           | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Generate metrics for all memory states                                                             |
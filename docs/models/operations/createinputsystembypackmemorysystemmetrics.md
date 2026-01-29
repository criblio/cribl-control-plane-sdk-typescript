# CreateInputSystemByPackMemorySystemMetrics

## Example Usage

```typescript
import { CreateInputSystemByPackMemorySystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackMemorySystemMetrics = {
  mode: "basic",
  detail: true,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                                 | [operations.CreateInputSystemByPackMemoryModeSystemMetrics](../../models/operations/createinputsystembypackmemorymodesystemmetrics.md) | :heavy_minus_sign:                                                                                                                     | Select the level of detail for memory metrics                                                                                          |
| `detail`                                                                                                                               | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Generate metrics for all memory states                                                                                                 |
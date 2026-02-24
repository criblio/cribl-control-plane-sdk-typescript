# CreateInputMemorySystemMetrics

## Example Usage

```typescript
import { CreateInputMemorySystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputMemorySystemMetrics = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                         | [operations.CreateInputMemoryModeSystemMetrics](../../models/operations/createinputmemorymodesystemmetrics.md) | :heavy_minus_sign:                                                                                             | Select the level of detail for memory metrics                                                                  |
| `detail`                                                                                                       | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Generate metrics for all memory states                                                                         |
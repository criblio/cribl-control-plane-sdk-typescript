# CreateInputSystemSystemMetrics

## Example Usage

```typescript
import { CreateInputSystemSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemSystemMetrics = {
  mode: "basic",
  processes: true,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                         | [operations.CreateInputSystemModeSystemMetrics](../../models/operations/createinputsystemmodesystemmetrics.md) | :heavy_minus_sign:                                                                                             | Select the level of detail for system metrics                                                                  |
| `processes`                                                                                                    | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Generate metrics for the numbers of processes in various states                                                |
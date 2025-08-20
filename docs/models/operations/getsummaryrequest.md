# GetSummaryRequest

## Example Usage

```typescript
import { GetSummaryRequest } from "cribl-control-plane/models/operations";

let value: GetSummaryRequest = {
  mode: "worker",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                           | [operations.Mode](../../models/operations/mode.md)                                                                               | :heavy_minus_sign:                                                                                                               | Filter for limiting the response by Cribl product: Cribl Stream (<code>worker</code>) or Cribl Edge (<code>managed-edge</code>). |
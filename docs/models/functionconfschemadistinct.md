# FunctionConfSchemaDistinct

## Example Usage

```typescript
import { FunctionConfSchemaDistinct } from "cribl-control-plane/models";

let value: FunctionConfSchemaDistinct = {
  groupBy: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  maxCombinations: 1726.31,
  maxDepth: 2695.95,
  isFederated: true,
  suppressPreviews: true,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `groupBy`                                                              | *string*[]                                                             | :heavy_minus_sign:                                                     | Defines the properties that are concatenated to produce distinct key   |
| `maxCombinations`                                                      | *number*                                                               | :heavy_minus_sign:                                                     | maximum number of tracked combinations                                 |
| `maxDepth`                                                             | *number*                                                               | :heavy_minus_sign:                                                     | maximum number of groupBy properties                                   |
| `isFederated`                                                          | *boolean*                                                              | :heavy_minus_sign:                                                     | indicator that the operator runs on a federated executor               |
| `suppressPreviews`                                                     | *boolean*                                                              | :heavy_minus_sign:                                                     | Toggle this on to suppress generating previews of intermediate results |
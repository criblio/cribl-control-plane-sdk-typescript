# DistinctConfiguration

## Example Usage

```typescript
import { DistinctConfiguration } from "cribl-control-plane/models";

let value: DistinctConfiguration = {
  groupBy: [
    "<value 1>",
  ],
  suppressPreviews: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `groupBy`                                                              | *string*[]                                                             | :heavy_check_mark:                                                     | Defines the properties that are concatenated to produce distinct key   |
| `maxCombinations`                                                      | *number*                                                               | :heavy_minus_sign:                                                     | maximum number of tracked combinations                                 |
| `maxDepth`                                                             | *number*                                                               | :heavy_minus_sign:                                                     | maximum number of groupBy properties                                   |
| `isFederated`                                                          | *boolean*                                                              | :heavy_minus_sign:                                                     | indicator that the operator runs on a federated executor               |
| `suppressPreviews`                                                     | *boolean*                                                              | :heavy_minus_sign:                                                     | Toggle this on to suppress generating previews of intermediate results |
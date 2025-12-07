# FunctionSort

## Example Usage

```typescript
import { FunctionSort } from "cribl-control-plane/models";

let value: FunctionSort = {
  filename: "example.file",
  asyncTimeout: 4827.88,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "sort",
  loadTime: 1943.19,
  modTime: 3061.75,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    sortId: "<id>",
    comparisonExpression: "<value>",
    topN: 5324.59,
    maxEvents: 8600.95,
    suppressPreviews: true,
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `filename`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `asyncTimeout`                                             | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `criblVersion`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `disabled`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `group`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `handleSignals`                                            | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `id`                                                       | [models.FunctionSortId](../models/functionsortid.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `loadTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `modTime`                                                  | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `sync`                                                     | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `uischema`                                                 | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `version`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `schema`                                                   | [models.SortConfiguration](../models/sortconfiguration.md) | :heavy_minus_sign:                                         | N/A                                                        |
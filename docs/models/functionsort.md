# FunctionSort

## Example Usage

```typescript
import { FunctionSort } from "cribl-control-plane/models";

let value: FunctionSort = {
  conf: {
    sortId: "<id>",
    comparisonExpression: "<value>",
    topN: 4827.88,
    maxEvents: 1053.28,
    suppressPreviews: true,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "sort",
  initTime: 3061.75,
  loadTime: 1649.8,
  modTime: 4259.1,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `conf`                                                     | [models.SortConfiguration](../models/sortconfiguration.md) | :heavy_check_mark:                                         | N/A                                                        |
| `filename`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disabled`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `group`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | [models.FunctionSortId](../models/functionsortid.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `initTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `loadTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `modTime`                                                  | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `schema`                                                   | Record<string, *any*>                                      | :heavy_check_mark:                                         | JSON Schema Draft-06                                       |
| `uischema`                                                 | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `version`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
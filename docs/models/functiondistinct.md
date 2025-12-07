# FunctionDistinct

## Example Usage

```typescript
import { FunctionDistinct } from "cribl-control-plane/models";

let value: FunctionDistinct = {
  filename: "example.file",
  asyncTimeout: 8471.89,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "distinct",
  loadTime: 1222.59,
  modTime: 6674.53,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    groupBy: [
      "<value 1>",
      "<value 2>",
    ],
    suppressPreviews: true,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `filename`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `asyncTimeout`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `criblVersion`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `group`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `handleSignals`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `id`                                                               | [models.FunctionDistinctId](../models/functiondistinctid.md)       | :heavy_check_mark:                                                 | N/A                                                                |
| `loadTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `modTime`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `sync`                                                             | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `uischema`                                                         | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | [models.DistinctConfiguration](../models/distinctconfiguration.md) | :heavy_minus_sign:                                                 | N/A                                                                |
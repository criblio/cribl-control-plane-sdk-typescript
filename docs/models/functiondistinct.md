# FunctionDistinct

## Example Usage

```typescript
import { FunctionDistinct } from "cribl-control-plane/models";

let value: FunctionDistinct = {
  conf: {
    groupBy: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    suppressPreviews: false,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "distinct",
  initTime: 1222.59,
  loadTime: 6674.53,
  modTime: 4760.12,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `conf`                                                             | [models.DistinctConfiguration](../models/distinctconfiguration.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `filename`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `group`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `id`                                                               | [models.FunctionDistinctId](../models/functiondistinctid.md)       | :heavy_check_mark:                                                 | N/A                                                                |
| `initTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `loadTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `modTime`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | Record<string, *any*>                                              | :heavy_check_mark:                                                 | JSON Schema Draft-06                                               |
| `uischema`                                                         | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
# FunctionStore

## Example Usage

```typescript
import { FunctionStore } from "cribl-control-plane/models";

let value: FunctionStore = {
  conf: {
    destination: "<value>",
    description: "home once platypus",
    fieldMapping: {},
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "store",
  initTime: 7269.06,
  loadTime: 909.01,
  modTime: 8703.71,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `conf`                                                                       | [models.StoreFunctionConfiguration](../models/storefunctionconfiguration.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `filename`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `disabled`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `group`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | [models.FunctionStoreId](../models/functionstoreid.md)                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `initTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `loadTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `modTime`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `schema`                                                                     | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | JSON Schema Draft-06                                                         |
| `uischema`                                                                   | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `version`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
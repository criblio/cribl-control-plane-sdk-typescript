# FunctionSerialize

## Example Usage

```typescript
import { FunctionSerialize } from "cribl-control-plane/models";

let value: FunctionSerialize = {
  conf: {
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    fields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    srcField: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "serialize",
  initTime: 6774.24,
  loadTime: 4550.45,
  modTime: 7814.2,
  name: "<value>",
  schema: {
    "key": "<value>",
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `conf`                                                             | [models.FunctionSerializeConf](../models/functionserializeconf.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `filename`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `group`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `id`                                                               | [models.FunctionSerializeId](../models/functionserializeid.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `initTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `loadTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `modTime`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | Record<string, *any*>                                              | :heavy_check_mark:                                                 | JSON Schema Draft-06                                               |
| `uischema`                                                         | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
# FunctionLimit

## Example Usage

```typescript
import { FunctionLimit } from "cribl-control-plane/models";

let value: FunctionLimit = {
  conf: {},
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "limit",
  initTime: 247.31,
  loadTime: 3640.8,
  modTime: 7176.7,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `conf`                                                     | [models.FunctionLimitConf](../models/functionlimitconf.md) | :heavy_check_mark:                                         | N/A                                                        |
| `filename`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disabled`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `group`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | [models.FunctionLimitId](../models/functionlimitid.md)     | :heavy_check_mark:                                         | N/A                                                        |
| `initTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `loadTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `modTime`                                                  | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `schema`                                                   | Record<string, *any*>                                      | :heavy_check_mark:                                         | JSON Schema Draft-06                                       |
| `uischema`                                                 | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `version`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
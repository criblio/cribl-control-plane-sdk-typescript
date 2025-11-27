# FunctionChain

## Example Usage

```typescript
import { FunctionChain } from "cribl-control-plane/models";

let value: FunctionChain = {
  conf: {
    processor: "<value>",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "chain",
  initTime: 7341.94,
  loadTime: 2917.6,
  modTime: 5516.27,
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

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `conf`                                                     | [models.FunctionChainConf](../models/functionchainconf.md) | :heavy_check_mark:                                         | N/A                                                        |
| `filename`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disabled`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `group`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | [models.FunctionChainId](../models/functionchainid.md)     | :heavy_check_mark:                                         | N/A                                                        |
| `initTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `loadTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `modTime`                                                  | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `schema`                                                   | Record<string, *any*>                                      | :heavy_check_mark:                                         | JSON Schema Draft-06                                       |
| `uischema`                                                 | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `version`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
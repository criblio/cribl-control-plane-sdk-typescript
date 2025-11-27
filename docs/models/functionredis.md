# FunctionRedis

## Example Usage

```typescript
import { FunctionRedis } from "cribl-control-plane/models";

let value: FunctionRedis = {
  conf: {
    commands: [],
    enableClientSideCaching: true,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "redis",
  initTime: 1926.38,
  loadTime: 768.23,
  modTime: 4852.66,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `conf`                                                     | [models.FunctionRedisConf](../models/functionredisconf.md) | :heavy_check_mark:                                         | N/A                                                        |
| `filename`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disabled`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `group`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | [models.FunctionRedisId](../models/functionredisid.md)     | :heavy_check_mark:                                         | N/A                                                        |
| `initTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `loadTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `modTime`                                                  | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `schema`                                                   | Record<string, *any*>                                      | :heavy_check_mark:                                         | JSON Schema Draft-06                                       |
| `uischema`                                                 | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `version`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
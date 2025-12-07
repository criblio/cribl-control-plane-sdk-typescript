# FunctionRedis

## Example Usage

```typescript
import { FunctionRedis } from "cribl-control-plane/models";

let value: FunctionRedis = {
  filename: "example.file",
  asyncTimeout: 2267.56,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "redis",
  loadTime: 1926.38,
  modTime: 768.23,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    commands: [
      {
        outField: "<value>",
        command: "<value>",
        keyExpr: "<value>",
        argsExpr: "<value>",
      },
    ],
    enableClientSideCaching: true,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `filename`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `asyncTimeout`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `criblVersion`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `disabled`                                                     | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `group`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `handleSignals`                                                | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `id`                                                           | [models.FunctionRedisId](../models/functionredisid.md)         | :heavy_check_mark:                                             | N/A                                                            |
| `loadTime`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `modTime`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `sync`                                                         | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `uischema`                                                     | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `schema`                                                       | [models.FunctionRedisSchema](../models/functionredisschema.md) | :heavy_minus_sign:                                             | N/A                                                            |
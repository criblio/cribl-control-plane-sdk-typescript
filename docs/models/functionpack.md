# FunctionPack

## Example Usage

```typescript
import { FunctionPack } from "cribl-control-plane/models";

let value: FunctionPack = {
  conf: {
    unpackedFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "pack",
  initTime: 4722.8,
  loadTime: 2265.69,
  modTime: 1300.66,
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

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `conf`                                                   | [models.FunctionPackConf](../models/functionpackconf.md) | :heavy_check_mark:                                       | N/A                                                      |
| `filename`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `disabled`                                               | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `group`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `id`                                                     | [models.FunctionPackId](../models/functionpackid.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `initTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `loadTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `modTime`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `schema`                                                 | Record<string, *any*>                                    | :heavy_check_mark:                                       | JSON Schema Draft-06                                     |
| `uischema`                                               | Record<string, *any*>                                    | :heavy_check_mark:                                       | N/A                                                      |
| `version`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
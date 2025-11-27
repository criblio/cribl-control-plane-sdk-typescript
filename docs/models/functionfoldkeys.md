# FunctionFoldkeys

## Example Usage

```typescript
import { FunctionFoldkeys } from "cribl-control-plane/models";

let value: FunctionFoldkeys = {
  conf: {
    selectionRegExp: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "foldkeys",
  initTime: 5700.1,
  loadTime: 794.13,
  modTime: 4361.43,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `conf`                                                           | [models.FunctionFoldkeysConf](../models/functionfoldkeysconf.md) | :heavy_check_mark:                                               | N/A                                                              |
| `filename`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `disabled`                                                       | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | [models.FunctionFoldkeysId](../models/functionfoldkeysid.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `initTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `loadTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `modTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `schema`                                                         | Record<string, *any*>                                            | :heavy_check_mark:                                               | JSON Schema Draft-06                                             |
| `uischema`                                                       | Record<string, *any*>                                            | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
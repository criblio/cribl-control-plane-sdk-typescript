# FunctionRename

## Example Usage

```typescript
import { FunctionRename } from "cribl-control-plane/models";

let value: FunctionRename = {
  conf: {
    baseFields: [
      "<value 1>",
    ],
    rename: [
      {
        currentName: "<value>",
        newName: "<value>",
      },
    ],
    renameExpr: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "rename",
  initTime: 9777.9,
  loadTime: 1884.28,
  modTime: 991.32,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `conf`                                                       | [models.FunctionRenameConf](../models/functionrenameconf.md) | :heavy_check_mark:                                           | N/A                                                          |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `disabled`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `group`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | [models.FunctionRenameId](../models/functionrenameid.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `initTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | Record<string, *any*>                                        | :heavy_check_mark:                                           | JSON Schema Draft-06                                         |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
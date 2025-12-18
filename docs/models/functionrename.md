# FunctionRename

## Example Usage

```typescript
import { FunctionRename } from "cribl-control-plane/models";

let value: FunctionRename = {
  filename: "example.file",
  asyncTimeout: 2336.89,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "rename",
  loadTime: 1884.28,
  modTime: 991.32,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `filename`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `asyncTimeout`                                                           | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `criblVersion`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `disabled`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `handleSignals`                                                          | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `id`                                                                     | *"rename"*                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `loadTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `modTime`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sync`                                                                   | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `uischema`                                                               | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `schema`                                                                 | [models.FunctionConfSchemaRename](../models/functionconfschemarename.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
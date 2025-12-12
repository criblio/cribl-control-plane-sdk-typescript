# FunctionEval

## Example Usage

```typescript
import { FunctionEval } from "cribl-control-plane/models";

let value: FunctionEval = {
  filename: "example.file",
  asyncTimeout: 5706.24,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "eval",
  loadTime: 7444.44,
  modTime: 1602.52,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    keep: [
      "<value 1>",
    ],
    remove: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `asyncTimeout`                                               | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `criblVersion`                                               | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `disabled`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `group`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `handleSignals`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `id`                                                         | *"eval"*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sync`                                                       | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | [models.FunctionEvalSchema](../models/functionevalschema.md) | :heavy_minus_sign:                                           | N/A                                                          |
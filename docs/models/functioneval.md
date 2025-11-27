# FunctionEval

## Example Usage

```typescript
import { FunctionEval } from "cribl-control-plane/models";

let value: FunctionEval = {
  conf: {
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    keep: [
      "<value 1>",
      "<value 2>",
    ],
    remove: [
      "<value 1>",
      "<value 2>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "eval",
  initTime: 7444.44,
  loadTime: 1602.52,
  modTime: 6426.98,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `conf`                                                   | [models.FunctionEvalConf](../models/functionevalconf.md) | :heavy_check_mark:                                       | N/A                                                      |
| `filename`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `disabled`                                               | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `group`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `id`                                                     | [models.FunctionEvalId](../models/functionevalid.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `initTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `loadTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `modTime`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `schema`                                                 | Record<string, *any*>                                    | :heavy_check_mark:                                       | JSON Schema Draft-06                                     |
| `uischema`                                               | Record<string, *any*>                                    | :heavy_check_mark:                                       | N/A                                                      |
| `version`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
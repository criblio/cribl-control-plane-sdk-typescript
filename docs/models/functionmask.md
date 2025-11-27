# FunctionMask

## Example Usage

```typescript
import { FunctionMask } from "cribl-control-plane/models";

let value: FunctionMask = {
  conf: {
    rules: [
      {
        matchRegex: "<value>",
      },
    ],
    fields: [
      "<value 1>",
      "<value 2>",
    ],
    flags: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "mask",
  initTime: 1580.31,
  loadTime: 4015.36,
  modTime: 4791.96,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `conf`                                                   | [models.FunctionMaskConf](../models/functionmaskconf.md) | :heavy_check_mark:                                       | N/A                                                      |
| `filename`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `disabled`                                               | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `group`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `id`                                                     | [models.FunctionMaskId](../models/functionmaskid.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `initTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `loadTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `modTime`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `schema`                                                 | Record<string, *any*>                                    | :heavy_check_mark:                                       | JSON Schema Draft-06                                     |
| `uischema`                                               | Record<string, *any*>                                    | :heavy_check_mark:                                       | N/A                                                      |
| `version`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
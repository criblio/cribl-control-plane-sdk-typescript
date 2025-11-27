# FunctionDrop

## Example Usage

```typescript
import { FunctionDrop } from "cribl-control-plane/models";

let value: FunctionDrop = {
  conf: {},
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "drop",
  initTime: 5321.61,
  loadTime: 1163.67,
  modTime: 7510.87,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `conf`                                                   | [models.FunctionDropConf](../models/functiondropconf.md) | :heavy_check_mark:                                       | N/A                                                      |
| `filename`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `disabled`                                               | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `group`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `id`                                                     | [models.FunctionDropId](../models/functiondropid.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `initTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `loadTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `modTime`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `schema`                                                 | Record<string, *any*>                                    | :heavy_check_mark:                                       | JSON Schema Draft-06                                     |
| `uischema`                                               | Record<string, *any*>                                    | :heavy_check_mark:                                       | N/A                                                      |
| `version`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
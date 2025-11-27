# FunctionCode

## Example Usage

```typescript
import { FunctionCode } from "cribl-control-plane/models";

let value: FunctionCode = {
  conf: {
    code: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "code",
  initTime: 6444.78,
  loadTime: 4700.88,
  modTime: 1247.74,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `conf`                                                   | [models.FunctionCodeConf](../models/functioncodeconf.md) | :heavy_check_mark:                                       | N/A                                                      |
| `filename`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `disabled`                                               | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `group`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `id`                                                     | [models.FunctionCodeId](../models/functioncodeid.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `initTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `loadTime`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `modTime`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `schema`                                                 | Record<string, *any*>                                    | :heavy_check_mark:                                       | JSON Schema Draft-06                                     |
| `uischema`                                               | Record<string, *any*>                                    | :heavy_check_mark:                                       | N/A                                                      |
| `version`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
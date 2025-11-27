# FunctionWindow

## Example Usage

```typescript
import { FunctionWindow } from "cribl-control-plane/models";

let value: FunctionWindow = {
  conf: {
    eventWindowId: 4593.24,
    registeredFunctions: [
      "<value 1>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "window",
  initTime: 4433.83,
  loadTime: 7908.96,
  modTime: 2912.05,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `conf`                                                       | [models.FunctionWindowConf](../models/functionwindowconf.md) | :heavy_check_mark:                                           | N/A                                                          |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `disabled`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `group`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | [models.FunctionWindowId](../models/functionwindowid.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `initTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | Record<string, *any*>                                        | :heavy_check_mark:                                           | JSON Schema Draft-06                                         |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
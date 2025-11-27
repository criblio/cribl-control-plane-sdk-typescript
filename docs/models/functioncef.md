# FunctionCef

## Example Usage

```typescript
import { FunctionCef } from "cribl-control-plane/models";

let value: FunctionCef = {
  conf: {
    header: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    extension: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "cef",
  initTime: 3878.51,
  loadTime: 5556.48,
  modTime: 339.21,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `conf`                                                 | [models.FunctionCefConf](../models/functioncefconf.md) | :heavy_check_mark:                                     | N/A                                                    |
| `filename`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `disabled`                                             | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `group`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `id`                                                   | [models.FunctionCefId](../models/functioncefid.md)     | :heavy_check_mark:                                     | N/A                                                    |
| `initTime`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `loadTime`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `modTime`                                              | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `schema`                                               | Record<string, *any*>                                  | :heavy_check_mark:                                     | JSON Schema Draft-06                                   |
| `uischema`                                             | Record<string, *any*>                                  | :heavy_check_mark:                                     | N/A                                                    |
| `version`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
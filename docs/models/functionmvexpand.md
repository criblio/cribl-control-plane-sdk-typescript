# FunctionMvExpand

## Example Usage

```typescript
import { FunctionMvExpand } from "cribl-control-plane/models";

let value: FunctionMvExpand = {
  conf: {
    sourceFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    targetNames: [
      "<value 1>",
    ],
    itemIndexName: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "mv_expand",
  initTime: 3002.28,
  loadTime: 9375.71,
  modTime: 3600.5,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `conf`                                                           | [models.FunctionMvExpandConf](../models/functionmvexpandconf.md) | :heavy_check_mark:                                               | N/A                                                              |
| `filename`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `disabled`                                                       | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | [models.FunctionMvExpandId](../models/functionmvexpandid.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `initTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `loadTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `modTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `schema`                                                         | Record<string, *any*>                                            | :heavy_check_mark:                                               | JSON Schema Draft-06                                             |
| `uischema`                                                       | Record<string, *any*>                                            | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
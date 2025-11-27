# FunctionSuppress

## Example Usage

```typescript
import { FunctionSuppress } from "cribl-control-plane/models";

let value: FunctionSuppress = {
  conf: {
    keyExpr: "<value>",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "suppress",
  initTime: 4533.03,
  loadTime: 9998.57,
  modTime: 4311.27,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `conf`                                                           | [models.FunctionSuppressConf](../models/functionsuppressconf.md) | :heavy_check_mark:                                               | N/A                                                              |
| `filename`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `disabled`                                                       | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | [models.FunctionSuppressId](../models/functionsuppressid.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `initTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `loadTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `modTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `schema`                                                         | Record<string, *any*>                                            | :heavy_check_mark:                                               | JSON Schema Draft-06                                             |
| `uischema`                                                       | Record<string, *any*>                                            | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
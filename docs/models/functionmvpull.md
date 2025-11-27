# FunctionMvPull

## Example Usage

```typescript
import { FunctionMvPull } from "cribl-control-plane/models";

let value: FunctionMvPull = {
  conf: {
    arrayPath: "<value>",
    relativeKeyPath: "<value>",
    relativeValuePath: "<value>",
    targetBagPath: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "mv_pull",
  initTime: 8977.14,
  loadTime: 2479.08,
  modTime: 5044.4,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `conf`                                                       | [models.FunctionMvPullConf](../models/functionmvpullconf.md) | :heavy_check_mark:                                           | N/A                                                          |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `disabled`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `group`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | [models.FunctionMvPullId](../models/functionmvpullid.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `initTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | Record<string, *any*>                                        | :heavy_check_mark:                                           | JSON Schema Draft-06                                         |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
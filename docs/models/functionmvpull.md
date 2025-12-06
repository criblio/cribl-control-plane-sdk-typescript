# FunctionMvPull

## Example Usage

```typescript
import { FunctionMvPull } from "cribl-control-plane/models";

let value: FunctionMvPull = {
  filename: "example.file",
  asyncTimeout: 4318.2,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "mv_pull",
  loadTime: 5044.4,
  modTime: 7519.04,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    arrayPath: "<value>",
    relativeKeyPath: "<value>",
    relativeValuePath: "<value>",
    targetBagPath: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `filename`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `asyncTimeout`                                                   | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `criblVersion`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `disabled`                                                       | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `handleSignals`                                                  | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `id`                                                             | [models.FunctionMvPullId](../models/functionmvpullid.md)         | :heavy_check_mark:                                               | N/A                                                              |
| `loadTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `modTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `sync`                                                           | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `uischema`                                                       | Record<string, *any*>                                            | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `schema`                                                         | [models.FunctionMvPullSchema](../models/functionmvpullschema.md) | :heavy_minus_sign:                                               | N/A                                                              |
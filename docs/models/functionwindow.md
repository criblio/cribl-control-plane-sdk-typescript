# FunctionWindow

## Example Usage

```typescript
import { FunctionWindow } from "cribl-control-plane/models";

let value: FunctionWindow = {
  filename: "example.file",
  asyncTimeout: 4593.24,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "window",
  loadTime: 4433.83,
  modTime: 7908.96,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    eventWindowId: 456.2,
    registeredFunctions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `filename`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `asyncTimeout`                                                   | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `criblVersion`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `disabled`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `handleSignals`                                                  | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `id`                                                             | *"window"*                                                       | :heavy_check_mark:                                               | N/A                                                              |
| `loadTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `modTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `sync`                                                           | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `uischema`                                                       | Record<string, *any*>                                            | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `schema`                                                         | [models.FunctionWindowSchema](../models/functionwindowschema.md) | :heavy_minus_sign:                                               | N/A                                                              |
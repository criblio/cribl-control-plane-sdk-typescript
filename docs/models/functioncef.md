# FunctionCef

## Example Usage

```typescript
import { FunctionCef } from "cribl-control-plane/models";

let value: FunctionCef = {
  filename: "example.file",
  asyncTimeout: 6108.55,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "cef",
  loadTime: 339.21,
  modTime: 515.96,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `filename`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `asyncTimeout`                                             | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `criblVersion`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `disabled`                                                 | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `group`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `handleSignals`                                            | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `id`                                                       | *"cef"*                                                    | :heavy_check_mark:                                         | N/A                                                        |
| `loadTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `modTime`                                                  | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `sync`                                                     | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `uischema`                                                 | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `version`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `schema`                                                   | [models.FunctionCefSchema](../models/functioncefschema.md) | :heavy_minus_sign:                                         | N/A                                                        |
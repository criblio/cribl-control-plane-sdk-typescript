# FunctionMask

## Example Usage

```typescript
import { FunctionMask } from "cribl-control-plane/models";

let value: FunctionMask = {
  filename: "example.file",
  asyncTimeout: 8419.45,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "mask",
  loadTime: 1580.31,
  modTime: 4015.36,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    rules: [
      {
        matchRegex: "<value>",
      },
    ],
    fields: [
      "<value 1>",
    ],
    flags: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `asyncTimeout`                                               | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `criblVersion`                                               | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `disabled`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `group`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `handleSignals`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `id`                                                         | *"mask"*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sync`                                                       | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | [models.FunctionMaskSchema](../models/functionmaskschema.md) | :heavy_minus_sign:                                           | N/A                                                          |
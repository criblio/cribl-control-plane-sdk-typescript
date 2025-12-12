# FunctionPack

## Example Usage

```typescript
import { FunctionPack } from "cribl-control-plane/models";

let value: FunctionPack = {
  filename: "example.file",
  asyncTimeout: 8176.6,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "pack",
  loadTime: 2265.69,
  modTime: 1300.66,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    unpackedFields: [
      "<value 1>",
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
| `id`                                                         | *"pack"*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sync`                                                       | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | [models.FunctionPackSchema](../models/functionpackschema.md) | :heavy_minus_sign:                                           | N/A                                                          |
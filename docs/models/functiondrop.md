# FunctionDrop

## Example Usage

```typescript
import { FunctionDrop } from "cribl-control-plane/models";

let value: FunctionDrop = {
  filename: "example.file",
  asyncTimeout: 7169.86,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "drop",
  loadTime: 7510.87,
  modTime: 74.1,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {},
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `asyncTimeout`                                               | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `criblVersion`                                               | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `disabled`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `group`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `handleSignals`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `id`                                                         | [models.FunctionDropId](../models/functiondropid.md)         | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sync`                                                       | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | [models.FunctionDropSchema](../models/functiondropschema.md) | :heavy_minus_sign:                                           | N/A                                                          |
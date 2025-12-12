# FunctionUnroll

## Example Usage

```typescript
import { FunctionUnroll } from "cribl-control-plane/models";

let value: FunctionUnroll = {
  filename: "example.file",
  asyncTimeout: 1449.06,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "unroll",
  loadTime: 9015.71,
  modTime: 4543.73,
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `filename`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `asyncTimeout`                                                   | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `criblVersion`                                                   | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `disabled`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `handleSignals`                                                  | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `id`                                                             | *"unroll"*                                                       | :heavy_check_mark:                                               | N/A                                                              |
| `loadTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `modTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `sync`                                                           | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `uischema`                                                       | Record<string, *any*>                                            | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `schema`                                                         | [models.FunctionUnrollSchema](../models/functionunrollschema.md) | :heavy_minus_sign:                                               | N/A                                                              |
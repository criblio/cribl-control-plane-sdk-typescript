# FunctionClone

## Example Usage

```typescript
import { FunctionClone } from "cribl-control-plane/models";

let value: FunctionClone = {
  filename: "example.file",
  asyncTimeout: 8448.96,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "clone",
  loadTime: 6647.33,
  modTime: 8379.67,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    clones: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `filename`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `asyncTimeout`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `criblVersion`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `disabled`                                                     | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `group`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `handleSignals`                                                | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `id`                                                           | [models.FunctionCloneId](../models/functioncloneid.md)         | :heavy_check_mark:                                             | N/A                                                            |
| `loadTime`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `modTime`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `sync`                                                         | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `uischema`                                                     | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `schema`                                                       | [models.FunctionCloneSchema](../models/functioncloneschema.md) | :heavy_minus_sign:                                             | N/A                                                            |
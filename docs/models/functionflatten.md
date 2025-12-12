# FunctionFlatten

## Example Usage

```typescript
import { FunctionFlatten } from "cribl-control-plane/models";

let value: FunctionFlatten = {
  filename: "example.file",
  asyncTimeout: 4624.4,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "flatten",
  loadTime: 5805.1,
  modTime: 750.5,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    fields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `filename`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `asyncTimeout`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `criblVersion`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `group`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `handleSignals`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `id`                                                               | *"flatten"*                                                        | :heavy_check_mark:                                                 | N/A                                                                |
| `loadTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `modTime`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `sync`                                                             | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `uischema`                                                         | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | [models.FunctionFlattenSchema](../models/functionflattenschema.md) | :heavy_minus_sign:                                                 | N/A                                                                |
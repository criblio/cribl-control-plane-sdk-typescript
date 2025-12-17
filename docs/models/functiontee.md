# FunctionTee

## Example Usage

```typescript
import { FunctionTee } from "cribl-control-plane/models";

let value: FunctionTee = {
  filename: "example.file",
  asyncTimeout: 5834.77,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "tee",
  loadTime: 7605.35,
  modTime: 4994.36,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
    ],
    env: {
      "key": "<value>",
      "key1": "<value>",
    },
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
| `id`                                                               | *"tee"*                                                            | :heavy_check_mark:                                                 | N/A                                                                |
| `loadTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `modTime`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `sync`                                                             | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `uischema`                                                         | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | [models.FunctionConfSchemaTee](../models/functionconfschematee.md) | :heavy_minus_sign:                                                 | N/A                                                                |
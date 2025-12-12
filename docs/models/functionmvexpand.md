# FunctionMvExpand

## Example Usage

```typescript
import { FunctionMvExpand } from "cribl-control-plane/models";

let value: FunctionMvExpand = {
  filename: "example.file",
  asyncTimeout: 8384.22,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "mv_expand",
  loadTime: 3002.28,
  modTime: 9375.71,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    sourceFields: [
      "<value 1>",
    ],
    targetNames: [
      "<value 1>",
    ],
    itemIndexName: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `filename`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `asyncTimeout`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `criblVersion`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `disabled`                                                           | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `group`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `handleSignals`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `id`                                                                 | *"mv_expand"*                                                        | :heavy_check_mark:                                                   | N/A                                                                  |
| `loadTime`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `modTime`                                                            | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sync`                                                               | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `uischema`                                                           | Record<string, *any*>                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `version`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `schema`                                                             | [models.FunctionMvExpandSchema](../models/functionmvexpandschema.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
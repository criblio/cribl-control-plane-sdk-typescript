# FunctionNumerify

## Example Usage

```typescript
import { FunctionNumerify } from "cribl-control-plane/models";

let value: FunctionNumerify = {
  filename: "example.file",
  asyncTimeout: 1176.16,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "numerify",
  loadTime: 3917.82,
  modTime: 4389.83,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    ignoreFields: [
      "<value 1>",
    ],
    filterExpr: "<value>",
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
| `id`                                                                 | *"numerify"*                                                         | :heavy_check_mark:                                                   | N/A                                                                  |
| `loadTime`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `modTime`                                                            | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sync`                                                               | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `uischema`                                                           | Record<string, *any*>                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `version`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `schema`                                                             | [models.FunctionNumerifySchema](../models/functionnumerifyschema.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
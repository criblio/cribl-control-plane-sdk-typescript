# FunctionSuppress

## Example Usage

```typescript
import { FunctionSuppress } from "cribl-control-plane/models";

let value: FunctionSuppress = {
  filename: "example.file",
  asyncTimeout: 8009.67,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "suppress",
  loadTime: 4311.27,
  modTime: 5605.99,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
    keyExpr: "<value>",
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
| `id`                                                                 | *"suppress"*                                                         | :heavy_check_mark:                                                   | N/A                                                                  |
| `loadTime`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `modTime`                                                            | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sync`                                                               | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `uischema`                                                           | Record<string, *any*>                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `version`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `schema`                                                             | [models.FunctionSuppressSchema](../models/functionsuppressschema.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
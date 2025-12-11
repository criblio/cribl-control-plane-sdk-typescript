# FunctionSerde

## Example Usage

```typescript
import { FunctionSerde } from "cribl-control-plane/models";

let value: FunctionSerde = {
  filename: "example.file",
  asyncTimeout: 7712.14,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "serde",
  loadTime: 7488.44,
  modTime: 5208.3,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    dstField: "<value>",
    cleanFields: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `filename`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `asyncTimeout`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `criblVersion`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `disabled`                                                     | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `group`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `handleSignals`                                                | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `id`                                                           | *"serde"*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `loadTime`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `modTime`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `sync`                                                         | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `uischema`                                                     | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `schema`                                                       | [models.FunctionSerdeSchema](../models/functionserdeschema.md) | :heavy_minus_sign:                                             | N/A                                                            |
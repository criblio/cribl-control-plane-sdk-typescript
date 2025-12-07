# FunctionDropDimensions

## Example Usage

```typescript
import { FunctionDropDimensions } from "cribl-control-plane/models";

let value: FunctionDropDimensions = {
  filename: "example.file",
  asyncTimeout: 8672.88,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "drop_dimensions",
  loadTime: 2190.54,
  modTime: 1816.44,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    dropDimensions: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `filename`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `asyncTimeout`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `criblVersion`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `disabled`                                                                       | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `group`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `handleSignals`                                                                  | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `id`                                                                             | [models.FunctionDropDimensionsId](../models/functiondropdimensionsid.md)         | :heavy_check_mark:                                                               | N/A                                                                              |
| `loadTime`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `modTime`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `sync`                                                                           | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `uischema`                                                                       | Record<string, *any*>                                                            | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `schema`                                                                         | [models.FunctionDropDimensionsSchema](../models/functiondropdimensionsschema.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
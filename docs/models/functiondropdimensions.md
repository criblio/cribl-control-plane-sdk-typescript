# FunctionDropDimensions

## Example Usage

```typescript
import { FunctionDropDimensions } from "cribl-control-plane/models";

let value: FunctionDropDimensions = {
  conf: {
    dropDimensions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "drop_dimensions",
  initTime: 7629.2,
  loadTime: 2190.54,
  modTime: 1816.44,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `conf`                                                                       | [models.FunctionDropDimensionsConf](../models/functiondropdimensionsconf.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `filename`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `disabled`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `group`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | [models.FunctionDropDimensionsId](../models/functiondropdimensionsid.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `initTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `loadTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `modTime`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `schema`                                                                     | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | JSON Schema Draft-06                                                         |
| `uischema`                                                                   | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `version`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
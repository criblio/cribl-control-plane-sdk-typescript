# FunctionSerialize

## Example Usage

```typescript
import { FunctionSerialize } from "cribl-control-plane/models";

let value: FunctionSerialize = {
  __filename: "example.file",
  asyncTimeout: 7303.27,
  cribl_version: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "serialize",
  loadTime: 4550.45,
  modTime: 7814.2,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    type: "csv",
    delimChar: "<value>",
    quoteChar: "<value>",
    escapeChar: "<value>",
    nullValue: "<value>",
    fields: [
      "<value 1>",
    ],
    srcField: "<value>",
    dstField: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filename`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `asyncTimeout`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `criblVersion`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `disabled`                                                                     | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `group`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `handleSignals`                                                                | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *"serialize"*                                                                  | :heavy_check_mark:                                                             | N/A                                                                            |
| `loadTime`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `modTime`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `sync`                                                                         | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `uischema`                                                                     | Record<string, *any*>                                                          | :heavy_check_mark:                                                             | N/A                                                                            |
| `version`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `schema`                                                                       | [models.FunctionConfSchemaSerialize](../models/functionconfschemaserialize.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
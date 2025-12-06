# FunctionRegexExtract

## Example Usage

```typescript
import { FunctionRegexExtract } from "cribl-control-plane/models";

let value: FunctionRegexExtract = {
  filename: "example.file",
  asyncTimeout: 4835.31,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "regex_extract",
  loadTime: 3987.19,
  modTime: 124.29,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    regex: "<value>",
    regexList: [
      {
        regex: "<value>",
      },
    ],
    fieldNameExpression: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `filename`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `asyncTimeout`                                                               | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `criblVersion`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disabled`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `group`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `handleSignals`                                                              | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `id`                                                                         | [models.FunctionRegexExtractId](../models/functionregexextractid.md)         | :heavy_check_mark:                                                           | N/A                                                                          |
| `loadTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `modTime`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `sync`                                                                       | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `uischema`                                                                   | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `version`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `schema`                                                                     | [models.FunctionRegexExtractSchema](../models/functionregexextractschema.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
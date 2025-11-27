# FunctionRegexExtract

## Example Usage

```typescript
import { FunctionRegexExtract } from "cribl-control-plane/models";

let value: FunctionRegexExtract = {
  conf: {
    regex: "<value>",
    regexList: [
      {
        regex: "<value>",
      },
    ],
    fieldNameExpression: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "regex_extract",
  initTime: 9053.96,
  loadTime: 3106.46,
  modTime: 3987.19,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `conf`                                                                   | [models.FunctionRegexExtractConf](../models/functionregexextractconf.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `filename`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `disabled`                                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | [models.FunctionRegexExtractId](../models/functionregexextractid.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `initTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `loadTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `modTime`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `schema`                                                                 | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | JSON Schema Draft-06                                                     |
| `uischema`                                                               | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
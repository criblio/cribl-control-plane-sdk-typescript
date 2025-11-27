# FunctionLocalSearchDatatypeParser

## Example Usage

```typescript
import { FunctionLocalSearchDatatypeParser } from "cribl-control-plane/models";

let value: FunctionLocalSearchDatatypeParser = {
  conf: {
    rulesetId: "<id>",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "local_search_datatype_parser",
  initTime: 697.16,
  loadTime: 1455.04,
  modTime: 2337.59,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `conf`                                                                                             | [models.FunctionLocalSearchDatatypeParserConf](../models/functionlocalsearchdatatypeparserconf.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `filename`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `disabled`                                                                                         | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `group`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | [models.FunctionLocalSearchDatatypeParserId](../models/functionlocalsearchdatatypeparserid.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `initTime`                                                                                         | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `loadTime`                                                                                         | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `modTime`                                                                                          | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `schema`                                                                                           | Record<string, *any*>                                                                              | :heavy_check_mark:                                                                                 | JSON Schema Draft-06                                                                               |
| `uischema`                                                                                         | Record<string, *any*>                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `version`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
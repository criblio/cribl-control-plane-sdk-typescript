# FunctionLocalSearchDatatypeParser

## Example Usage

```typescript
import { FunctionLocalSearchDatatypeParser } from "cribl-control-plane/models";

let value: FunctionLocalSearchDatatypeParser = {
  filename: "example.file",
  asyncTimeout: 9827.97,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "local_search_datatype_parser",
  loadTime: 2337.59,
  modTime: 7250.32,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    rulesetId: "<id>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `filename`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `asyncTimeout`                                                                                         | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `criblVersion`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `disabled`                                                                                             | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `group`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `handleSignals`                                                                                        | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *"local_search_datatype_parser"*                                                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `loadTime`                                                                                             | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `modTime`                                                                                              | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `sync`                                                                                                 | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `uischema`                                                                                             | Record<string, *any*>                                                                                  | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `version`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `schema`                                                                                               | [models.FunctionLocalSearchDatatypeParserSchema](../models/functionlocalsearchdatatypeparserschema.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
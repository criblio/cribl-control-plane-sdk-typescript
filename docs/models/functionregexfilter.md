# FunctionRegexFilter

## Example Usage

```typescript
import { FunctionRegexFilter } from "cribl-control-plane/models";

let value: FunctionRegexFilter = {
  filename: "example.file",
  asyncTimeout: 5697.57,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "regex_filter",
  loadTime: 3109.56,
  modTime: 9803.88,
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
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `filename`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `asyncTimeout`                                                             | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `criblVersion`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `disabled`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `group`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `handleSignals`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `id`                                                                       | *"regex_filter"*                                                           | :heavy_check_mark:                                                         | N/A                                                                        |
| `loadTime`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `modTime`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `sync`                                                                     | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `uischema`                                                                 | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | N/A                                                                        |
| `version`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `schema`                                                                   | [models.FunctionRegexFilterSchema](../models/functionregexfilterschema.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
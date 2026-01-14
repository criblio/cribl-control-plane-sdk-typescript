# FunctionLookup

## Example Usage

```typescript
import { FunctionLookup } from "cribl-control-plane/models";

let value: FunctionLookup = {
  __filename: "example.file",
  asyncTimeout: 2465.37,
  cribl_version: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "lookup",
  loadTime: 8031.47,
  modTime: 8407.32,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    file: "<value>",
    dbLookup: false,
    matchMode: "<value>",
    matchType: "<value>",
    reloadPeriodSec: "<value>",
    inFields: [
      {
        eventField: "<value>",
        lookupField: "<value>",
      },
    ],
    outFields: [
      {
        lookupField: "<value>",
        eventField: "<value>",
        defaultValue: "<value>",
      },
    ],
    addToEvent: false,
    ignoreCase: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `filename`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `asyncTimeout`                                                           | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `criblVersion`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `disabled`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `handleSignals`                                                          | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `id`                                                                     | *"lookup"*                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `loadTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `modTime`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sync`                                                                   | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `uischema`                                                               | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `schema`                                                                 | [models.FunctionConfSchemaLookup](../models/functionconfschemalookup.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
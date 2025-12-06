# FunctionSidlookup

## Example Usage

```typescript
import { FunctionSidlookup } from "cribl-control-plane/models";

let value: FunctionSidlookup = {
  filename: "example.file",
  asyncTimeout: 8789.17,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "sidlookup",
  loadTime: 2006.3,
  modTime: 5999.5,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    fields: [
      {
        name: "<value>",
        expr: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `filename`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `asyncTimeout`                                                         | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `criblVersion`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `disabled`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `group`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `handleSignals`                                                        | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `id`                                                                   | [models.FunctionSidlookupId](../models/functionsidlookupid.md)         | :heavy_check_mark:                                                     | N/A                                                                    |
| `loadTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `sync`                                                                 | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `uischema`                                                             | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `schema`                                                               | [models.FunctionSidlookupSchema](../models/functionsidlookupschema.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
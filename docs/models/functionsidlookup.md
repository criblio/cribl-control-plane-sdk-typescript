# FunctionSidlookup

## Example Usage

```typescript
import { FunctionSidlookup } from "cribl-control-plane/models";

let value: FunctionSidlookup = {
  conf: {
    fields: [
      {
        name: "<value>",
        expr: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "sidlookup",
  initTime: 2280.82,
  loadTime: 6818.12,
  modTime: 2006.3,
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

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `conf`                                                             | [models.FunctionSidlookupConf](../models/functionsidlookupconf.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `filename`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `group`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `id`                                                               | [models.FunctionSidlookupId](../models/functionsidlookupid.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `initTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `loadTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `modTime`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | Record<string, *any*>                                              | :heavy_check_mark:                                                 | JSON Schema Draft-06                                               |
| `uischema`                                                         | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
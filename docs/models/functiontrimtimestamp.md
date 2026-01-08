# FunctionTrimTimestamp

## Example Usage

```typescript
import { FunctionTrimTimestamp } from "cribl-control-plane/models";

let value: FunctionTrimTimestamp = {
  __filename: "example.file",
  asyncTimeout: 5.56,
  cribl_version: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "trim_timestamp",
  loadTime: 9909.57,
  modTime: 1019.23,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
    field: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `filename`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `asyncTimeout`                                                                         | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `criblVersion`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `disabled`                                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `group`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `handleSignals`                                                                        | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *"trim_timestamp"*                                                                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `loadTime`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `modTime`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sync`                                                                                 | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `uischema`                                                                             | Record<string, *any*>                                                                  | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `version`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `schema`                                                                               | [models.FunctionConfSchemaTrimTimestamp](../models/functionconfschematrimtimestamp.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
# FunctionSensitiveDataScanner

## Example Usage

```typescript
import { FunctionSensitiveDataScanner } from "cribl-control-plane/models";

let value: FunctionSensitiveDataScanner = {
  __filename: "example.file",
  asyncTimeout: 3199.53,
  cribl_version: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "sensitive_data_scanner",
  loadTime: 6113.55,
  modTime: 8518.62,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    rules: [
      {
        rulesetId: "<id>",
      },
    ],
    fields: [
      "<value 1>",
    ],
    excludeFields: [
      "<value 1>",
      "<value 2>",
    ],
    flags: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `filename`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `asyncTimeout`                                                                                       | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `criblVersion`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `disabled`                                                                                           | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `group`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `handleSignals`                                                                                      | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *"sensitive_data_scanner"*                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `loadTime`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `modTime`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `sync`                                                                                               | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `uischema`                                                                                           | Record<string, *any*>                                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `version`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `schema`                                                                                             | [models.FunctionConfSchemaSensitiveDataScanner](../models/functionconfschemasensitivedatascanner.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
# FunctionSensitiveDataScanner

## Example Usage

```typescript
import { FunctionSensitiveDataScanner } from "cribl-control-plane/models";

let value: FunctionSensitiveDataScanner = {
  conf: {
    rules: [],
    fields: [
      "<value 1>",
      "<value 2>",
    ],
    excludeFields: [
      "<value 1>",
    ],
    flags: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "sensitive_data_scanner",
  initTime: 8518.62,
  loadTime: 3568.24,
  modTime: 4851.06,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `conf`                                                                                   | [models.FunctionSensitiveDataScannerConf](../models/functionsensitivedatascannerconf.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `filename`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `disabled`                                                                               | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `group`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `id`                                                                                     | [models.FunctionSensitiveDataScannerId](../models/functionsensitivedatascannerid.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `initTime`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `loadTime`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `modTime`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `schema`                                                                                 | Record<string, *any*>                                                                    | :heavy_check_mark:                                                                       | JSON Schema Draft-06                                                                     |
| `uischema`                                                                               | Record<string, *any*>                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `version`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
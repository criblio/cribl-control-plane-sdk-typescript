# FunctionLakeExport

## Example Usage

```typescript
import { FunctionLakeExport } from "cribl-control-plane/models";

let value: FunctionLakeExport = {
  __filename: "example.file",
  asyncTimeout: 1375.34,
  cribl_version: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "lake_export",
  loadTime: 9866.68,
  modTime: 2804.33,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    searchJobId: "<id>",
    dataset: "<value>",
    suppressPreviews: true,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `filename`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `asyncTimeout`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `criblVersion`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `disabled`                                                                       | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `group`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `handleSignals`                                                                  | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `id`                                                                             | *"lake_export"*                                                                  | :heavy_check_mark:                                                               | N/A                                                                              |
| `loadTime`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `modTime`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `sync`                                                                           | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `uischema`                                                                       | Record<string, *any*>                                                            | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `schema`                                                                         | [models.FunctionConfSchemaLakeExport](../models/functionconfschemalakeexport.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
# FunctionLakeExport

## Example Usage

```typescript
import { FunctionLakeExport } from "cribl-control-plane/models";

let value: FunctionLakeExport = {
  conf: {
    searchJobId: "<id>",
    dataset: "<value>",
    suppressPreviews: true,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "lake_export",
  initTime: 2736.16,
  loadTime: 9866.68,
  modTime: 2804.33,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `conf`                                                                 | [models.LakeExportConfiguration](../models/lakeexportconfiguration.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `filename`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `disabled`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `group`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `id`                                                                   | [models.FunctionLakeExportId](../models/functionlakeexportid.md)       | :heavy_check_mark:                                                     | N/A                                                                    |
| `initTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `loadTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `schema`                                                               | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | JSON Schema Draft-06                                                   |
| `uischema`                                                             | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
# PipelineFunctionLakeExport

## Example Usage

```typescript
import { PipelineFunctionLakeExport } from "cribl-control-plane/models";

let value: PipelineFunctionLakeExport = {
  filter: "<value>",
  id: "lake_export",
  description: "retrospectivity conceal crossly bah huzzah fraternise through",
  disabled: true,
  final: false,
  conf: {
    searchJobId: "<id>",
    dataset: "<value>",
    lake: "<value>",
    tee: "<value>",
    flushMs: 4350.69,
    suppressPreviews: true,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"lake_export"*                                                                              | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.LakeExportConfiguration](../models/lakeexportconfiguration.md)                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |
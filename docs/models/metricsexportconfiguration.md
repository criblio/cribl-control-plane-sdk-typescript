# MetricsExportConfiguration

Configuration specific to the Pipeline Function.

## Example Usage

```typescript
import { MetricsExportConfiguration } from "cribl-control-plane/models";

let value: MetricsExportConfiguration = {
  searchJobId: "<id>",
  dataset: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `searchJobId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Id of the search job this function is running on.                                      |
| `dataset`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Id of the metrics dataset                                                              |
| `nameField`                                                                            | [models.NameFieldType](../models/namefieldtype.md)                                     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `timeField`                                                                            | [models.NameFieldType](../models/namefieldtype.md)                                     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `valueField`                                                                           | [models.NameFieldType](../models/namefieldtype.md)                                     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `typeField`                                                                            | [models.NameFieldType](../models/namefieldtype.md)                                     | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `labelFields`                                                                          | *models.LabelFieldsUnion*                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `tee`                                                                                  | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Tee results to search. When set to true results will be shipped instead of stats       |
| `flushMs`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | How often stats are flushed in ms                                                      |
| `suppressPreviews`                                                                     | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Disables generation of intermediate stats. When true stats will be emitted only on end |
| `additionalProperties`                                                                 | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
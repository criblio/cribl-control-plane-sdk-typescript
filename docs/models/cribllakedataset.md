# CriblLakeDataset

## Example Usage

```typescript
import { CriblLakeDataset } from "cribl-control-plane/models";

let value: CriblLakeDataset = {
  id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `acceleratedFields`                                                    | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `bucketName`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `cacheConnection`                                                      | [models.CacheConnection](../models/cacheconnection.md)                 | :heavy_minus_sign:                                                     | N/A                                                                    |
| `deletionStartedAt`                                                    | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `format`                                                               | [models.FormatOptions](../models/formatoptions.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `httpDAUsed`                                                           | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `metrics`                                                              | [models.LakeDatasetMetrics](../models/lakedatasetmetrics.md)           | :heavy_minus_sign:                                                     | N/A                                                                    |
| `retentionPeriodInDays`                                                | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `searchConfig`                                                         | [models.LakeDatasetSearchConfig](../models/lakedatasetsearchconfig.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `storageLocationId`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `viewName`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
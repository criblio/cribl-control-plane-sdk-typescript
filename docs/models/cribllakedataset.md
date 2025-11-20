# CriblLakeDataset

## Example Usage

```typescript
import { CriblLakeDataset } from "cribl-control-plane/models";

let value: CriblLakeDataset = {
  acceleratedFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  bucketName: "<value>",
  cacheConnection: {
    acceleratedFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    backfillStatus: "finished",
    cacheRef: "<value>",
    createdAt: 7461.31,
    lakehouseConnectionType: "cache",
    migrationQueryId: "<id>",
    retentionInDays: 4050.95,
  },
  deletionStartedAt: 4431.11,
  description:
    "soap positively chromakey daddy onto boldly see celsius kookily",
  format: "json",
  httpDAUsed: true,
  id: "<id>",
  metrics: {
    currentSizeBytes: 6909.79,
    metricsDate: "<value>",
  },
  retentionPeriodInDays: 3012.23,
  searchConfig: {
    datatypes: [
      "<value 1>",
    ],
    metadata: {
      earliest: "<value>",
      enableAcceleration: false,
      fieldList: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      latestRunInfo: {
        earliestScannedTime: 2718.64,
        finishedAt: 7126.23,
        latestScannedTime: 160.67,
        objectCount: 7729.98,
      },
      scanMode: "detailed",
    },
  },
  storageLocationId: "<id>",
  viewName: "<value>",
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
| `format`                                                               | [models.CriblLakeDatasetFormat](../models/cribllakedatasetformat.md)   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `httpDAUsed`                                                           | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `metrics`                                                              | [models.LakeDatasetMetrics](../models/lakedatasetmetrics.md)           | :heavy_minus_sign:                                                     | N/A                                                                    |
| `retentionPeriodInDays`                                                | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `searchConfig`                                                         | [models.LakeDatasetSearchConfig](../models/lakedatasetsearchconfig.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `storageLocationId`                                                    | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `viewName`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
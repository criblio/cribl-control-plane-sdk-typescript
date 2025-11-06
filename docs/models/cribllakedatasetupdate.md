# CriblLakeDatasetUpdate

## Example Usage

```typescript
import { CriblLakeDatasetUpdate } from "cribl-control-plane/models";

let value: CriblLakeDatasetUpdate = {
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
    ],
    backfillStatus: "pending",
    cacheRef: "<value>",
    createdAt: 6208.45,
    lakehouseConnectionType: "zeroPoint",
    migrationQueryId: "<id>",
    retentionInDays: 9824.71,
  },
  deletionStartedAt: 3055.72,
  description: "far fully like duh drat haunting anti elegant shyly to",
  format: "json",
  httpDAUsed: true,
  id: "<id>",
  metrics: {
    currentSizeBytes: 7816.68,
    metricsDate: "<value>",
  },
  retentionPeriodInDays: 2925.68,
  searchConfig: {
    datatypes: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
        earliestScannedTime: 7719.02,
        finishedAt: 6833.88,
        latestScannedTime: 6079.32,
        objectCount: 731.57,
      },
      scanMode: "quick",
    },
  },
  storageLocationId: "<id>",
  viewName: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `acceleratedFields`                                                              | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `bucketName`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `cacheConnection`                                                                | [models.CacheConnection](../models/cacheconnection.md)                           | :heavy_minus_sign:                                                               | N/A                                                                              |
| `deletionStartedAt`                                                              | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `format`                                                                         | [models.CriblLakeDatasetUpdateFormat](../models/cribllakedatasetupdateformat.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `httpDAUsed`                                                                     | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `metrics`                                                                        | [models.LakeDatasetMetrics](../models/lakedatasetmetrics.md)                     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `retentionPeriodInDays`                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `searchConfig`                                                                   | [models.LakeDatasetSearchConfig](../models/lakedatasetsearchconfig.md)           | :heavy_minus_sign:                                                               | N/A                                                                              |
| `storageLocationId`                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `viewName`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
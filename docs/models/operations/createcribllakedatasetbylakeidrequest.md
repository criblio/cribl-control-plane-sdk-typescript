# CreateCriblLakeDatasetByLakeIdRequest

## Example Usage

```typescript
import { CreateCriblLakeDatasetByLakeIdRequest } from "cribl-control-plane/models/operations";

let value: CreateCriblLakeDatasetByLakeIdRequest = {
  lakeId: "<id>",
  criblLakeDataset: {
    acceleratedFields: [
      "<value 1>",
    ],
    bucketName: "<value>",
    cacheConnection: {
      acceleratedFields: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      backfillStatus: "started",
      cacheRef: "<value>",
      createdAt: 773.58,
      lakehouseConnectionType: "cache",
      migrationQueryId: "<id>",
      retentionInDays: 5606.92,
    },
    deletionStartedAt: 9246.95,
    description: "suspiciously rudely squirm chops",
    format: "ddss",
    httpDAUsed: false,
    id: "<id>",
    metrics: {
      currentSizeBytes: 7990.13,
      metricsDate: "<value>",
    },
    retentionPeriodInDays: 1808.54,
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
          earliestScannedTime: 4514.45,
          finishedAt: 4750.45,
          latestScannedTime: 8488.95,
          objectCount: 359.3,
        },
        scanMode: "detailed",
      },
    },
    storageLocationId: "<id>",
    viewName: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lakeId`                                                       | *string*                                                       | :heavy_check_mark:                                             | The <code>id</code> of the Lake to create the Lake Dataset in. |
| `criblLakeDataset`                                             | [models.CriblLakeDataset](../../models/cribllakedataset.md)    | :heavy_check_mark:                                             | CriblLakeDataset object                                        |
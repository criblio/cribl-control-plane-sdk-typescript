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
      backfillStatus: "finished",
      cacheRef: "<value>",
      createdAt: 7461.31,
      lakehouseConnectionType: "cache",
      migrationQueryId: "<id>",
      retentionInDays: 4050.95,
    },
    deletionStartedAt: 9954.16,
    description: "starboard husky connect unnaturally skateboard legitimize",
    format: "parquet",
    httpDAUsed: true,
    id: "<id>",
    metrics: {
      currentSizeBytes: 6909.79,
      metricsDate: "<value>",
    },
    retentionPeriodInDays: 446.22,
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
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lakeId`                                                       | *string*                                                       | :heavy_check_mark:                                             | The <code>id</code> of the Lake to create the Lake Dataset in. |
| `criblLakeDataset`                                             | [models.CriblLakeDataset](../../models/cribllakedataset.md)    | :heavy_check_mark:                                             | CriblLakeDataset object                                        |
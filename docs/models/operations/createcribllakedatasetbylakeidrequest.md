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
      ],
      backfillStatus: "pending",
      cacheRef: "<value>",
      createdAt: 6208.45,
      lakehouseConnectionType: "zeroPoint",
      migrationQueryId: "<id>",
      retentionInDays: 9824.71,
    },
    deletionStartedAt: 9954.16,
    description: "starboard husky connect unnaturally skateboard legitimize",
    format: "parquet",
    httpDAUsed: true,
    id: "<id>",
    metrics: {
      currentSizeBytes: 7816.68,
      metricsDate: "<value>",
    },
    retentionPeriodInDays: 446.22,
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
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lakeId`                                                       | *string*                                                       | :heavy_check_mark:                                             | The <code>id</code> of the Lake to create the Lake Dataset in. |
| `criblLakeDataset`                                             | [models.CriblLakeDataset](../../models/cribllakedataset.md)    | :heavy_check_mark:                                             | CriblLakeDataset object                                        |
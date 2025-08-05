# UpdateCriblLakeDatasetByLakeIdAndIdRequest

## Example Usage

```typescript
import { UpdateCriblLakeDatasetByLakeIdAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateCriblLakeDatasetByLakeIdAndIdRequest = {
  lakeId: "<id>",
  id: "<id>",
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
    retentionPeriodInDays: 7990.13,
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
        ],
        latestRunInfo: {
          earliestScannedTime: 9246.59,
          finishedAt: 4514.45,
          latestScannedTime: 4750.45,
          objectCount: 8488.95,
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

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `lakeId`                                                    | *string*                                                    | :heavy_check_mark:                                          | lake id that contains the Datasets                          |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | dataset id to update                                        |
| `criblLakeDataset`                                          | [models.CriblLakeDataset](../../models/cribllakedataset.md) | :heavy_check_mark:                                          | CriblLakeDataset object                                     |
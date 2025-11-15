# UpdateCriblLakeDatasetByLakeIdAndIdRequest

## Example Usage

```typescript
import { UpdateCriblLakeDatasetByLakeIdAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateCriblLakeDatasetByLakeIdAndIdRequest = {
  lakeId: "<id>",
  id: "<id>",
  criblLakeDatasetUpdate: {
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
    deletionStartedAt: 4673.39,
    description: "circa disposer honesty voluminous",
    format: "json",
    httpDAUsed: true,
    id: "<id>",
    metrics: {
      currentSizeBytes: 7990.13,
      metricsDate: "<value>",
    },
    retentionPeriodInDays: 798.24,
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lakeId`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | The <code>id</code> of the Lake that contains the Lake Dataset to update. |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | The <code>id</code> of the Lake Dataset to update.                        |
| `criblLakeDatasetUpdate`                                                  | [models.CriblLakeDatasetUpdate](../../models/cribllakedatasetupdate.md)   | :heavy_check_mark:                                                        | CriblLakeDatasetUpdate object                                             |
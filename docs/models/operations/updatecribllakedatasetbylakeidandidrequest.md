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
      backfillStatus: "finished",
      cacheRef: "<value>",
      createdAt: 7461.31,
      lakehouseConnectionType: "cache",
      migrationQueryId: "<id>",
      retentionInDays: 4050.95,
    },
    deletionStartedAt: 4673.39,
    description: "circa disposer honesty voluminous",
    format: "json",
    httpDAUsed: true,
    id: "<id>",
    metrics: {
      currentSizeBytes: 6909.79,
      metricsDate: "<value>",
    },
    retentionPeriodInDays: 798.24,
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lakeId`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | The <code>id</code> of the Lake that contains the Lake Dataset to update. |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | The <code>id</code> of the Lake Dataset to update.                        |
| `criblLakeDatasetUpdate`                                                  | [models.CriblLakeDatasetUpdate](../../models/cribllakedatasetupdate.md)   | :heavy_check_mark:                                                        | CriblLakeDatasetUpdate object                                             |
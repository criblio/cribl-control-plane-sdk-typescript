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
      ],
      backfillStatus: "pending",
      cacheRef: "<value>",
      createdAt: 6208.45,
      lakehouseConnectionType: "zeroPoint",
      migrationQueryId: "<id>",
      retentionInDays: 9824.71,
    },
    deletionStartedAt: 4673.39,
    description: "circa disposer honesty voluminous",
    format: "json",
    httpDAUsed: true,
    id: "<id>",
    metrics: {
      currentSizeBytes: 7816.68,
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lakeId`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | The <code>id</code> of the Lake that contains the Lake Dataset to update. |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | The <code>id</code> of the Lake Dataset to update.                        |
| `criblLakeDatasetUpdate`                                                  | [models.CriblLakeDatasetUpdate](../../models/cribllakedatasetupdate.md)   | :heavy_check_mark:                                                        | CriblLakeDatasetUpdate object                                             |
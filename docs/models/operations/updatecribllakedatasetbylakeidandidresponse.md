# UpdateCriblLakeDatasetByLakeIdAndIdResponse

a list of CriblLakeDataset objects

## Example Usage

```typescript
import { UpdateCriblLakeDatasetByLakeIdAndIdResponse } from "cribl-control-plane/models/operations";

let value: UpdateCriblLakeDatasetByLakeIdAndIdResponse = {
  count: 266030,
  items: [
    {
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
        backfillStatus: "started",
        cacheRef: "<value>",
        createdAt: 773.58,
        lakehouseConnectionType: "cache",
        migrationQueryId: "<id>",
        retentionInDays: 5606.92,
      },
      deletionStartedAt: 8641.01,
      description: "cow bah hammock throughout stylish",
      format: "json",
      httpDAUsed: false,
      id: "<id>",
      metrics: {
        currentSizeBytes: 7990.13,
        metricsDate: "<value>",
      },
      retentionPeriodInDays: 1938.08,
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
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `count`                                                       | *number*                                                      | :heavy_minus_sign:                                            | number of items present in the items array                    |
| `items`                                                       | [models.CriblLakeDataset](../../models/cribllakedataset.md)[] | :heavy_minus_sign:                                            | N/A                                                           |
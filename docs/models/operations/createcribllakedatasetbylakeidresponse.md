# CreateCriblLakeDatasetByLakeIdResponse

a list of CriblLakeDataset objects

## Example Usage

```typescript
import { CreateCriblLakeDatasetByLakeIdResponse } from "cribl-control-plane/models/operations";

let value: CreateCriblLakeDatasetByLakeIdResponse = {
  count: 373371,
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
      retentionPeriodInDays: 1938.08,
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
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `count`                                                       | *number*                                                      | :heavy_minus_sign:                                            | number of items present in the items array                    |
| `items`                                                       | [models.CriblLakeDataset](../../models/cribllakedataset.md)[] | :heavy_minus_sign:                                            | N/A                                                           |
# CountedCriblLakeDataset

## Example Usage

```typescript
import { CountedCriblLakeDataset } from "cribl-control-plane/models";

let value: CountedCriblLakeDataset = {
  count: 905702,
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
        backfillStatus: "finished",
        cacheRef: "<value>",
        createdAt: 7461.31,
        lakehouseConnectionType: "cache",
        migrationQueryId: "<id>",
        retentionInDays: 4050.95,
      },
      deletionStartedAt: 4494.7,
      description: "round successfully indolent miskey righteously around",
      format: "parquet",
      httpDAUsed: false,
      id: "<id>",
      metrics: {
        currentSizeBytes: 6909.79,
        metricsDate: "<value>",
      },
      retentionPeriodInDays: 9303.02,
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
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | number of items present in the items array                 |
| `items`                                                    | [models.CriblLakeDataset](../models/cribllakedataset.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
# CountedListCriblLakeDataset

## Example Usage

```typescript
import { CountedListCriblLakeDataset } from "cribl-control-plane/models";

let value: CountedListCriblLakeDataset = {
  count: 919875,
  items: [
    {
      acceleratedFields: [
        "<value 1>",
        "<value 2>",
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
      deletionStartedAt: 1002.64,
      description: "till decouple yum quicker league gosh despite deeply",
      format: "ddss",
      httpDAUsed: false,
      id: "<id>",
      metrics: {
        currentSizeBytes: 7816.68,
        metricsDate: "<value>",
      },
      retentionPeriodInDays: 7404.17,
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
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | number of items present in the items array                 |
| `items`                                                    | [models.CriblLakeDataset](../models/cribllakedataset.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
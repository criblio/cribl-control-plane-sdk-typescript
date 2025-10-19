# StatusResponse

## Example Usage

```typescript
import { StatusResponse } from "cribl-control-plane/models";

let value: StatusResponse = {
  bytesIn: 8399.72,
  bytesSkipped: 7558.56,
  cacheStatusesByStageId: {
    "key": {
      "key": {
        usedCache: false,
      },
    },
    "key1": {
      "key": {
        usedCache: false,
      },
    },
  },
  eventsFound: 6873.47,
  eventsIn: 6709.19,
  eventsSkipped: 8967.83,
  objectsFound: 6773.39,
  objectsSearched: 7556.1,
  objectsSkipped: 7722.44,
  stageDetails: [
    {
      cacheStatusByDatasetId: {
        "key": {
          reason: "<value>",
          usedCache: true,
        },
      },
      stageId: "<id>",
      status: "running",
    },
  ],
  status: "running",
  timeCompleted: 3441.31,
  timeCreated: 5582.89,
  timeNow: 5074.27,
  timeStarted: 5893.49,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `bytesIn`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `bytesSkipped`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `cacheStatusesByStageId`                                             | Record<string, Record<string, *models.CacheStatusesByStageIdUnion*>> | :heavy_minus_sign:                                                   | N/A                                                                  |
| `eventsFound`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `eventsIn`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `eventsSkipped`                                                      | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `objectsFound`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `objectsSearched`                                                    | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `objectsSkipped`                                                     | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `stageDetails`                                                       | [models.StageDetail](../models/stagedetail.md)[]                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `status`                                                             | [models.StatusResponseStatus](../models/statusresponsestatus.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `timeCompleted`                                                      | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `timeCreated`                                                        | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `timeNow`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `timeStarted`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
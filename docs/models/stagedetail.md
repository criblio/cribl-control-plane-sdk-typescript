# StageDetail

## Example Usage

```typescript
import { StageDetail } from "cribl-control-plane/models";

let value: StageDetail = {
  cacheStatusByDatasetId: {
    "key": {
      usedCache: false,
    },
  },
  stageId: "<id>",
  status: "running",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `cacheStatusByDatasetId`                                   | Record<string, *models.CacheStatusByDatasetIdUnion*>       | :heavy_check_mark:                                         | N/A                                                        |
| `stageId`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `status`                                                   | [models.StageDetailStatus](../models/stagedetailstatus.md) | :heavy_check_mark:                                         | N/A                                                        |
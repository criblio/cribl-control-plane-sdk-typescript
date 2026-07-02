# PaginatedCriblLakeDataset

## Example Usage

```typescript
import { PaginatedCriblLakeDataset } from "cribl-control-plane/models";

let value: PaginatedCriblLakeDataset = {
  items: [
    {
      id: "<id>",
      searchConfig: {
        metadata: {
          earliest: "-30d",
          enableAcceleration: true,
          fieldList: [
            "<value 1>",
          ],
          scanMode: "detailed",
        },
      },
    },
  ],
  count: 133133,
  offset: 966149,
  limit: 404372,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | [models.CriblLakeDataset](../models/cribllakedataset.md)[]  | :heavy_check_mark:                                          | the pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_check_mark:                                          | pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_check_mark:                                          | pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | total number of items available (present when limit is set) |
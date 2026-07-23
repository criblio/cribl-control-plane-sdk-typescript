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
          enableAcceleration: false,
          fieldList: [
            "<value 1>",
          ],
          scanMode: "quick",
        },
      },
    },
  ],
  count: 578532,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | [models.CriblLakeDataset](../models/cribllakedataset.md)[]  | :heavy_check_mark:                                          | The pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | Number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_minus_sign:                                          | Pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_minus_sign:                                          | Pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | Total number of items available (present when limit is set) |
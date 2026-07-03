# PaginatedSavedJobResponse

## Example Usage

```typescript
import { PaginatedSavedJobResponse } from "cribl-control-plane/models";

let value: PaginatedSavedJobResponse = {
  items: [
    {
      type: "scheduledSearch",
      executor: {
        type: "<value>",
      },
    },
  ],
  count: 932357,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | *models.SavedJobResponse*[]                                 | :heavy_check_mark:                                          | The pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | Number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_minus_sign:                                          | Pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_minus_sign:                                          | Pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | Total number of items available (present when limit is set) |
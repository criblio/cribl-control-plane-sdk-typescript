# PaginatedFunctionResponse

## Example Usage

```typescript
import { PaginatedFunctionResponse } from "cribl-control-plane/models";

let value: PaginatedFunctionResponse = {
  items: [],
  count: 293867,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | *models.FunctionResponse*[]                                 | :heavy_check_mark:                                          | The pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | Number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_minus_sign:                                          | Pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_minus_sign:                                          | Pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | Total number of items available (present when limit is set) |
# PaginatedOutputStatus

## Example Usage

```typescript
import { PaginatedOutputStatus } from "cribl-control-plane/models";

let value: PaginatedOutputStatus = {
  items: [],
  count: 30873,
  offset: 357028,
  limit: 764979,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | [models.OutputStatus](../models/outputstatus.md)[]          | :heavy_check_mark:                                          | the pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_check_mark:                                          | pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_check_mark:                                          | pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | total number of items available (present when limit is set) |
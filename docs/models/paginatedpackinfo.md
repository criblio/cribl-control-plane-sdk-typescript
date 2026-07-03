# PaginatedPackInfo

## Example Usage

```typescript
import { PaginatedPackInfo } from "cribl-control-plane/models";

let value: PaginatedPackInfo = {
  items: [
    {
      id: "<id>",
      source: "<value>",
      tags: {
        domain: [
          "security",
          "observability",
        ],
        technology: [
          "aws",
          "splunk",
        ],
      },
      version: "1.0.0",
    },
  ],
  count: 118841,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | [models.PackInfo](../models/packinfo.md)[]                  | :heavy_check_mark:                                          | The pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | Number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_minus_sign:                                          | Pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_minus_sign:                                          | Pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | Total number of items available (present when limit is set) |
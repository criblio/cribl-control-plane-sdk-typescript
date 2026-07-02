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
  count: 756532,
  offset: 167078,
  limit: 294685,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | [models.PackInfo](../models/packinfo.md)[]                  | :heavy_check_mark:                                          | the pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_check_mark:                                          | pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_check_mark:                                          | pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | total number of items available (present when limit is set) |
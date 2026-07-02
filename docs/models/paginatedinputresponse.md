# PaginatedInputResponse

## Example Usage

```typescript
import { PaginatedInputResponse } from "cribl-control-plane/models";

let value: PaginatedInputResponse = {
  items: [
    {
      type: "servicenow_table",
      instance: "<value>",
      tableName: "<value>",
      cronSchedule: "<value>",
      earliest: "<value>",
      latest: "<value>",
    },
  ],
  count: 971174,
  offset: 295015,
  limit: 207365,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | *models.InputResponse*[]                                    | :heavy_check_mark:                                          | the pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_check_mark:                                          | pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_check_mark:                                          | pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | total number of items available (present when limit is set) |
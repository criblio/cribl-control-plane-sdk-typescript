# PaginatedOutputResponse

## Example Usage

```typescript
import { PaginatedOutputResponse } from "cribl-control-plane/models";

let value: PaginatedOutputResponse = {
  items: [
    {
      type: "google_chronicle",
      logFormatType: "unstructured",
    },
  ],
  count: 86748,
  offset: 568956,
  limit: 171093,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | *models.OutputResponse*[]                                   | :heavy_check_mark:                                          | the pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_check_mark:                                          | pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_check_mark:                                          | pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | total number of items available (present when limit is set) |
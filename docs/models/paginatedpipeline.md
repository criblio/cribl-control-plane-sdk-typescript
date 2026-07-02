# PaginatedPipeline

## Example Usage

```typescript
import { PaginatedPipeline } from "cribl-control-plane/models";

let value: PaginatedPipeline = {
  items: [
    {
      id: "<id>",
      conf: {
        functions: [
          {
            id: "eventstats",
            conf: {
              aggregations: [
                "<value 1>",
                "<value 2>",
              ],
            },
          },
        ],
      },
    },
  ],
  count: 66875,
  offset: 673713,
  limit: 305563,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                                                     | [models.Pipeline](../models/pipeline.md)[]                  | :heavy_check_mark:                                          | the pre-limited items in the list of results                |
| `count`                                                     | *number*                                                    | :heavy_check_mark:                                          | number of items present in the items array                  |
| `offset`                                                    | *number*                                                    | :heavy_check_mark:                                          | pagination offset                                           |
| `limit`                                                     | *number*                                                    | :heavy_check_mark:                                          | pagination limit                                            |
| `totalCount`                                                | *number*                                                    | :heavy_minus_sign:                                          | total number of items available (present when limit is set) |
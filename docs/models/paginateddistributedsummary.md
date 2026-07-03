# PaginatedDistributedSummary

## Example Usage

```typescript
import { PaginatedDistributedSummary } from "cribl-control-plane/models";

let value: PaginatedDistributedSummary = {
  items: [
    {
      groups: {
        count: 730340,
        destinations: 288563,
        packs: 431434,
        pipelines: 986284,
        quickConnects: 331251,
        routes: 385605,
        sources: 611291,
      },
    },
  ],
  count: 877146,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [models.DistributedSummary](../models/distributedsummary.md)[] | :heavy_check_mark:                                             | The pre-limited items in the list of results                   |
| `count`                                                        | *number*                                                       | :heavy_check_mark:                                             | Number of items present in the items array                     |
| `offset`                                                       | *number*                                                       | :heavy_minus_sign:                                             | Pagination offset                                              |
| `limit`                                                        | *number*                                                       | :heavy_minus_sign:                                             | Pagination limit                                               |
| `totalCount`                                                   | *number*                                                       | :heavy_minus_sign:                                             | Total number of items available (present when limit is set)    |
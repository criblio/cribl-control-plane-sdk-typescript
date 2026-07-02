# PaginatedDistributedSummary

## Example Usage

```typescript
import { PaginatedDistributedSummary } from "cribl-control-plane/models";

let value: PaginatedDistributedSummary = {
  items: [
    {
      groups: {
        count: 388538,
        destinations: 754661,
        packs: 332881,
        pipelines: 427163,
        quickConnects: 948628,
        routes: 563689,
        sources: 260108,
      },
    },
  ],
  count: 499085,
  offset: 558860,
  limit: 883700,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [models.DistributedSummary](../models/distributedsummary.md)[] | :heavy_check_mark:                                             | the pre-limited items in the list of results                   |
| `count`                                                        | *number*                                                       | :heavy_check_mark:                                             | number of items present in the items array                     |
| `offset`                                                       | *number*                                                       | :heavy_check_mark:                                             | pagination offset                                              |
| `limit`                                                        | *number*                                                       | :heavy_check_mark:                                             | pagination limit                                               |
| `totalCount`                                                   | *number*                                                       | :heavy_minus_sign:                                             | total number of items available (present when limit is set)    |
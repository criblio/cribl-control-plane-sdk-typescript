# PaginatedMasterWorkerEntry

## Example Usage

```typescript
import { PaginatedMasterWorkerEntry } from "cribl-control-plane/models";

let value: PaginatedMasterWorkerEntry = {
  items: [],
  count: 599046,
  offset: 85352,
  limit: 606388,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `items`                                                      | [models.MasterWorkerEntry](../models/masterworkerentry.md)[] | :heavy_check_mark:                                           | the pre-limited items in the list of results                 |
| `count`                                                      | *number*                                                     | :heavy_check_mark:                                           | number of items present in the items array                   |
| `offset`                                                     | *number*                                                     | :heavy_check_mark:                                           | pagination offset                                            |
| `limit`                                                      | *number*                                                     | :heavy_check_mark:                                           | pagination limit                                             |
| `totalCount`                                                 | *number*                                                     | :heavy_minus_sign:                                           | total number of items available (present when limit is set)  |
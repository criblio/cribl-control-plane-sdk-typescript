# ListMasterWorkerEntryRequest

## Example Usage

```typescript
import { ListMasterWorkerEntryRequest } from "cribl-control-plane/models/operations";

let value: ListMasterWorkerEntryRequest = {
  filterExp: "<value>",
  sort: "<value>",
  sortExp: "<value>",
  limit: 197826,
  offset: 366671,
  filter: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `filterExp`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | Filter expression evaluated against nodes                            |
| `sort`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Sorting object (JSON stringified) expression evaluated against nodes |
| `sortExp`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | Sorting expression evaluated against nodes                           |
| `limit`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Maximum number of nodes to return                                    |
| `offset`                                                             | *number*                                                             | :heavy_minus_sign:                                                   | Pagination offset                                                    |
| `filter`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | Filter object (JSON stringified) to select nodes                     |
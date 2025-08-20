# ListMasterWorkerEntryRequest

## Example Usage

```typescript
import { ListMasterWorkerEntryRequest } from "cribl-control-plane/models/operations";

let value: ListMasterWorkerEntryRequest = {
  filterExp: "<value>",
  sortExp: "<value>",
  filter: "<value>",
  sort: "<value>",
  limit: 197826,
  offset: 366671,
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filterExp`                                                                                                                                        | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Filter expression to evaluate against Nodes for inclusion in the response.                                                                         |
| `sortExp`                                                                                                                                          | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Sorting expression to evaluate against Nodes to specify the sort order for the response.                                                           |
| `filter`                                                                                                                                           | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | JSON-stringified filter object to evaluate against Nodes for inclusion in the response.                                                            |
| `sort`                                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | JSON-stringified sorting object to evaluate against Nodes to specify the sort order for the response.                                              |
| `limit`                                                                                                                                            | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Maximum number of Nodes to return in the response for this request. Use with <code>offset</code> to paginate the response into manageable batches. |
| `offset`                                                                                                                                           | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Starting point from which to retrieve results for this request. Use with <code>limit</code> to paginate the response into manageable batches.      |
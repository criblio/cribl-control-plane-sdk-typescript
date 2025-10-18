# GetSearchQueryRequest

## Example Usage

```typescript
import { GetSearchQueryRequest } from "cribl-control-plane/models/operations";

let value: GetSearchQueryRequest = {
  queryId: "<id>",
  jobId: "<id>",
  query: "<value>",
  earliest: 6175.08,
  latest: 5245.32,
  sampleRate: 212.96,
  force: false,
  offset: 459.66,
  limit: 8949.92,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `queryId`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | Saved query ID                                                                 |
| `jobId`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | Job ID                                                                         |
| `query`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | Search query string                                                            |
| `earliest`                                                                     | *number*                                                                       | :heavy_minus_sign:                                                             | Beginning of query time range, inclusive, in a relative time format or seconds |
| `latest`                                                                       | *number*                                                                       | :heavy_minus_sign:                                                             | End of query time range, exclusive, in a relative time format or seconds       |
| `sampleRate`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | Number between 0-1 to sample events during search                              |
| `force`                                                                        | *boolean*                                                                      | :heavy_minus_sign:                                                             | When true, forces to run the scheduled query                                   |
| `offset`                                                                       | *number*                                                                       | :heavy_minus_sign:                                                             | Pagination offset                                                              |
| `limit`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Pagination limit - maximum number of events to return                          |
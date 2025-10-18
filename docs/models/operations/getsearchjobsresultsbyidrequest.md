# GetSearchJobsResultsByIdRequest

## Example Usage

```typescript
import { GetSearchJobsResultsByIdRequest } from "cribl-control-plane/models/operations";

let value: GetSearchJobsResultsByIdRequest = {
  id: "<id>",
  limit: 9029.96,
  offset: 7981.02,
  lowerBound: 4467.57,
  upperBound: 2795.86,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_check_mark:                       | search job id                            |
| `limit`                                  | *number*                                 | :heavy_minus_sign:                       | maximum number of events returned        |
| `offset`                                 | *number*                                 | :heavy_minus_sign:                       | starting offset of the events            |
| `lowerBound`                             | *number*                                 | :heavy_minus_sign:                       | lower bound of the time range, inclusive |
| `upperBound`                             | *number*                                 | :heavy_minus_sign:                       | upper bound of the time range, exclusive |
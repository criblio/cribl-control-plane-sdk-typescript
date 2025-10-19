# GetSearchJobsResultsPollByIdRequest

## Example Usage

```typescript
import { GetSearchJobsResultsPollByIdRequest } from "cribl-control-plane/models/operations";

let value: GetSearchJobsResultsPollByIdRequest = {
  id: "<id>",
  limit: 226.1,
  offset: 2730.6,
  lowerBound: 4940.38,
  upperBound: 502.79,
  lastJobStatus: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | search job id                                                                                                |
| `limit`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | maximum number of events returned                                                                            |
| `offset`                                                                                                     | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | starting offset of the events                                                                                |
| `lowerBound`                                                                                                 | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | lower bound of the time range, inclusive                                                                     |
| `upperBound`                                                                                                 | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | upper bound of the time range, exclusive                                                                     |
| `lastJobStatus`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | last known status of the Search Job. Used to return immediately upon status change if the status was queued. |
# SearchJobResults

## Example Usage

```typescript
import { SearchJobResults } from "cribl-control-plane/models";

let value: SearchJobResults = {
  isFinished: false,
  job: {
    id: "<id>",
    query: "<value>",
    earliest: 3433.56,
    latest: 8756.58,
    timeCreated: 3217.72,
    timeStarted: 4960.8,
    timeCompleted: 1875.08,
    status: "canceled",
  },
  limit: 825.73,
  offset: 8715.96,
  persistedEventCount: 7245,
  totalEventCount: 1745.43,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `isFinished`                                                           | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `job`                                                                  | [models.SearchJobResultsJobInfo](../models/searchjobresultsjobinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `limit`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `offset`                                                               | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `persistedEventCount`                                                  | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalEventCount`                                                      | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
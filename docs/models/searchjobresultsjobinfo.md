# SearchJobResultsJobInfo

## Example Usage

```typescript
import { SearchJobResultsJobInfo } from "cribl-control-plane/models";

let value: SearchJobResultsJobInfo = {
  id: "<id>",
  query: "<value>",
  earliest: "<value>",
  latest: "<value>",
  timeCreated: 6634.98,
  timeStarted: 4656.05,
  timeCompleted: 8401.68,
  status: "queued",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `query`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `earliest`                                                                         | *models.SearchJobResultsJobInfoEarliest*                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `latest`                                                                           | *models.SearchJobResultsJobInfoLatest*                                             | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `timeCreated`                                                                      | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `timeStarted`                                                                      | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `timeCompleted`                                                                    | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `status`                                                                           | [models.SearchJobResultsJobInfoStatus](../models/searchjobresultsjobinfostatus.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
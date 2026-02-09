# JobInfo

## Example Usage

```typescript
import { JobInfo } from "cribl-control-plane/models";

let value: JobInfo = {
  args: {
    executor: {
      type: "<value>",
    },
    run: {},
  },
  id: "<id>",
  stats: {},
  status: {
    state: 7,
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `args`                                                        | *models.RunnableJob*                                          | :heavy_check_mark:                                            | N/A                                                           |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `keep`                                                        | *boolean*                                                     | :heavy_minus_sign:                                            | N/A                                                           |
| `stats`                                                       | Record<string, *models.AdditionalPropertiesTypeJobInfoStats*> | :heavy_check_mark:                                            | N/A                                                           |
| `status`                                                      | [models.JobStatus](../models/jobstatus.md)                    | :heavy_check_mark:                                            | N/A                                                           |
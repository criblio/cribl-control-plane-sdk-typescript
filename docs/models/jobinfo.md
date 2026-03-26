# JobInfo

Detailed information about a job, including its configuration, status, and statistics.

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

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`                                                                                                                                                                       | *models.RunnableJob*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `id`                                                                                                                                                                         | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | Unique identifier for the job.                                                                                                                                               |
| `keep`                                                                                                                                                                       | *boolean*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                           | If <code>true</code>, retain the job and its artifacts instead of deleting according to the time-to-live or retention policy. The job persists until it is manually deleted. |
| `stats`                                                                                                                                                                      | Record<string, *models.AdditionalPropertiesTypeJobInfoStats*>                                                                                                                | :heavy_check_mark:                                                                                                                                                           | Counters and metrics collected during job execution.                                                                                                                         |
| `status`                                                                                                                                                                     | [models.JobStatus](../models/jobstatus.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                           | Status of a job, including its current state and failure reason.                                                                                                             |
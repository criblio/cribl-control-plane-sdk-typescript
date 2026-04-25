# JobStatus

Status of a job, including its current state and failure reason.

## Example Usage

```typescript
import { JobStatus } from "cribl-control-plane/models";

let value: JobStatus = {
  state: 3,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `reason`                                                                                                                           | [models.TaskErrorDetail](../models/taskerrordetail.md)                                                                             | :heavy_minus_sign:                                                                                                                 | Task error details. May include a nested <code>reason</code> for wrapped errors and additional properties from the original error. |
| `state`                                                                                                                            | [models.State](../models/state.md)                                                                                                 | :heavy_check_mark:                                                                                                                 | State of the Job                                                                                                                   |
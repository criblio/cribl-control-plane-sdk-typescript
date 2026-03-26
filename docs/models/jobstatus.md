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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `reason`                                                                                 | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | Reason the job entered its current <code>state</code>, typically populated upon failure. |
| `state`                                                                                  | [models.State](../models/state.md)                                                       | :heavy_check_mark:                                                                       | State of the Job                                                                         |
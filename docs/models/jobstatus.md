# JobStatus

## Example Usage

```typescript
import { JobStatus } from "cribl-control-plane/models";

let value: JobStatus = {
  reason: {
    "key": "<value>",
  },
  state: 3,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `reason`                           | Record<string, *any*>              | :heavy_minus_sign:                 | N/A                                |
| `state`                            | [models.State](../models/state.md) | :heavy_check_mark:                 | State of the Job                   |
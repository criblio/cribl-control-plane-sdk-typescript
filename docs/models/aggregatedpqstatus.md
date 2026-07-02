# AggregatedPQStatus

## Example Usage

```typescript
import { AggregatedPQStatus } from "cribl-control-plane/models";

let value: AggregatedPQStatus = {
  health: "Unknown",
  healthCounts: {
    Green: 403493,
    Red: 190686,
    Unknown: 878004,
    Yellow: 826410,
  },
  timestamp: 584047,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `error`                                                                     | [models.StatusError](../models/statuserror.md)                              | :heavy_minus_sign:                                                          | N/A                                                                         |
| `health`                                                                    | [models.Health](../models/health.md)                                        | :heavy_check_mark:                                                          | Health status of the persistent queue.                                      |
| `healthCounts`                                                              | [models.HealthCountType](../models/healthcounttype.md)                      | :heavy_check_mark:                                                          | N/A                                                                         |
| `timestamp`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | Timestamp (in Unix time) when the persistent queue status was last updated. |
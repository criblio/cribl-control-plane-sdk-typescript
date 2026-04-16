# AggregatedPQStatus

## Example Usage

```typescript
import { AggregatedPQStatus } from "cribl-control-plane/models";

let value: AggregatedPQStatus = {
  health: "Red",
  healthCounts: {},
  timestamp: 5840.47,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `error`                                                                     | [models.StatusError](../models/statuserror.md)                              | :heavy_minus_sign:                                                          | N/A                                                                         |
| `health`                                                                    | [models.HealthStringType](../models/healthstringtype.md)                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `healthCounts`                                                              | [models.HealthCountType](../models/healthcounttype.md)                      | :heavy_check_mark:                                                          | N/A                                                                         |
| `timestamp`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | Timestamp (in Unix time) when the persistent queue status was last updated. |
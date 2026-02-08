# PqTypeStatus

Persistent queue status information (if persistent queue is enabled).

## Example Usage

```typescript
import { PqTypeStatus } from "cribl-control-plane/models";

let value: PqTypeStatus = {
  health: "Red",
  healthCounts: {},
  timestamp: 7374.06,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `error`                                                                     | [models.ErrorTypeStatusPq](../models/errortypestatuspq.md)                  | :heavy_minus_sign:                                                          | Error information for the persistent queue, if applicable.                  |
| `health`                                                                    | [models.HealthStringType](../models/healthstringtype.md)                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `healthCounts`                                                              | [models.HealthCountType](../models/healthcounttype.md)                      | :heavy_check_mark:                                                          | N/A                                                                         |
| `timestamp`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | Timestamp (in Unix time) when the persistent queue status was last updated. |
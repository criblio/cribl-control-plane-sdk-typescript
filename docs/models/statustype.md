# StatusType

Status information for the Source or Destination, aggregated across all Worker Processes.

## Example Usage

```typescript
import { StatusType } from "cribl-control-plane/models";

let value: StatusType = {
  error: {
    details: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    message: "<value>",
  },
  health: "Red",
  healthCounts: {
    Green: 8119.52,
    Yellow: 3353.72,
    Red: 1624.06,
    Unknown: 3450.08,
  },
  metrics: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  pq: {
    error: {
      details: {
        "key": "<value>",
      },
      message: "<value>",
    },
    health: "Unknown",
    healthCounts: {
      Green: 8119.52,
      Yellow: 3353.72,
      Red: 1624.06,
      Unknown: 3450.08,
    },
    timestamp: 7842.61,
  },
  timestamp: 4386.02,
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `error`                                                                                                                                                                  | [models.ErrorTypeStatus](../models/errortypestatus.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                       | Error information, if applicable.                                                                                                                                        |
| `health`                                                                                                                                                                 | [models.HealthStringType](../models/healthstringtype.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `healthCounts`                                                                                                                                                           | [models.HealthCountType](../models/healthcounttype.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `metrics`                                                                                                                                                                | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | Metrics data for the Source or Destination, including base metrics, aggregated across all Worker Processes. For load-balanced Destinations, includes item-level metrics. |
| `pq`                                                                                                                                                                     | [models.PqTypeStatus](../models/pqtypestatus.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                       | Persistent queue status information (if persistent queue is enabled).                                                                                                    |
| `timestamp`                                                                                                                                                              | *number*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | Timestamp (in Unix time) when the status was last updated.                                                                                                               |
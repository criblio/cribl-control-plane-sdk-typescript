# OutputStatus

## Example Usage

```typescript
import { OutputStatus } from "cribl-control-plane/models";

let value: OutputStatus = {
  id: "<id>",
  status: {
    error: {
      details: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
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
    metrics: {
      "key": "<value>",
      "key1": "<value>",
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
    timestamp: 9439.01,
  },
  type: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | Unique identifier of the Source or Destination.                                           |
| `status`                                                                                  | [models.StatusType](../models/statustype.md)                                              | :heavy_check_mark:                                                                        | Status information for the Source or Destination, aggregated across all Worker Processes. |
| `type`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | Type of the Source or Destination.                                                        |
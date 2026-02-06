# CountedOutputStatus

## Example Usage

```typescript
import { CountedOutputStatus } from "cribl-control-plane/models";

let value: CountedOutputStatus = {
  count: 381419,
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `count`                                            | *number*                                           | :heavy_minus_sign:                                 | number of items present in the items array         |
| `items`                                            | [models.OutputStatus](../models/outputstatus.md)[] | :heavy_minus_sign:                                 | N/A                                                |
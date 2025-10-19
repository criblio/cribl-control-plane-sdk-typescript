# LogicalPlans

## Example Usage

```typescript
import { LogicalPlans } from "cribl-control-plane/models";

let value: LogicalPlans = {
  combined: {
    "key": [
      {
        isPreviewableOperation: false,
        type: "aggregate",
      },
    ],
    "key1": [
      {
        isPreviewableOperation: false,
        type: "aggregate",
      },
    ],
  },
  coordinated: {
    isPreviewableOperation: false,
    type: "sort",
  },
  federated: {
    isPreviewableOperation: true,
    type: "filter",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `combined`                                                       | Record<string, [models.LogicalPlan](../models/logicalplan.md)[]> | :heavy_minus_sign:                                               | N/A                                                              |
| `coordinated`                                                    | [models.LogicalPlan](../models/logicalplan.md)                   | :heavy_minus_sign:                                               | N/A                                                              |
| `federated`                                                      | [models.LogicalPlan](../models/logicalplan.md)                   | :heavy_minus_sign:                                               | N/A                                                              |
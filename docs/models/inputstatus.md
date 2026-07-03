# InputStatus

Status of the Source, aggregated across all Worker Processes.

## Example Usage

```typescript
import { InputStatus } from "cribl-control-plane/models";

let value: InputStatus = {
  id: "<id>",
  status: {
    health: "Unknown",
    healthCounts: {
      Green: 940749,
      Red: 403493,
      Unknown: 190686,
      Yellow: 878004,
    },
    timestamp: 826410,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier of the Source or Destination.                                        |
| `status`                                                                               | [models.AggregatedInputOutputStatusBody](../models/aggregatedinputoutputstatusbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Type of the Source or Destination.                                                     |
# OutputStatus

Status of a Destination, aggregated across all Worker Processes.

## Example Usage

```typescript
import { OutputStatus } from "cribl-control-plane/models";

let value: OutputStatus = {
  id: "<id>",
  status: {
    health: "Red",
    healthCounts: {},
    timestamp: 6319.41,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier of the Source or Destination.                                        |
| `status`                                                                               | [models.AggregatedInputOutputStatusBody](../models/aggregatedinputoutputstatusbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Type of the Source or Destination.                                                     |
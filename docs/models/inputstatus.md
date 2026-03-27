# InputStatus

## Example Usage

```typescript
import { InputStatus } from "cribl-control-plane/models";

let value: InputStatus = {
  id: "<id>",
  status: {
    health: "Red",
    healthCounts: {},
    timestamp: 6319.41,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | Unique identifier of the Source or Destination.                                           |
| `status`                                                                                  | [models.StatusType](../models/statustype.md)                                              | :heavy_check_mark:                                                                        | Status information for the Source or Destination, aggregated across all Worker Processes. |
| `type`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | Type of the Source or Destination.                                                        |
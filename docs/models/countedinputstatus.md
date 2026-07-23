# CountedInputStatus

## Example Usage

```typescript
import { CountedInputStatus } from "cribl-control-plane/models";

let value: CountedInputStatus = {
  count: 131550,
  items: [
    {
      id: "<id>",
      status: {
        health: "Unknown",
        healthCounts: {},
        timestamp: 940749,
      },
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `count`                                          | *number*                                         | :heavy_check_mark:                               | number of items present in the items array       |
| `items`                                          | [models.InputStatus](../models/inputstatus.md)[] | :heavy_check_mark:                               | List of items in this response.                  |
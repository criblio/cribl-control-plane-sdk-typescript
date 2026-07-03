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
        healthCounts: {
          Green: 940749,
          Red: 403493,
          Unknown: 190686,
          Yellow: 878004,
        },
        timestamp: 826410,
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
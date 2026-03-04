# CountedSavedJobResponse

## Example Usage

```typescript
import { CountedSavedJobResponse } from "cribl-control-plane/models";

let value: CountedSavedJobResponse = {
  items: [
    {
      id: "<id>",
      notifications: [
        {
          condition: "<value>",
          conf: {},
          id: "<id>",
          targetDetails: [
            {
              id: "<id>",
              type: "smtp",
            },
          ],
          targets: [
            "<value 1>",
            "<value 2>",
          ],
        },
      ],
      schedule: {
        enabled: true,
        run: {},
        tz: "UTC",
      },
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | number of items present in the items array                 |
| `items`                                                    | [models.SavedJobResponse](../models/savedjobresponse.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
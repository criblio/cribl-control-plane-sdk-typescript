# CountedSavedJobResponse

## Example Usage

```typescript
import { CountedSavedJobResponse } from "cribl-control-plane/models";

let value: CountedSavedJobResponse = {
  count: 85666,
  items: [
    {
      type: "executor",
      collector: {
        type: "health_check",
        conf: {
          authentication: "basicSecret",
          credentialsSecret: "<value>",
          collectUrl: "https://glaring-depot.net/",
          collectMethod: "get",
        },
      },
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | *models.SavedJobResponse*[]                | :heavy_check_mark:                         | List of items in this response.            |
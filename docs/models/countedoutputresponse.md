# CountedOutputResponse

## Example Usage

```typescript
import { CountedOutputResponse } from "cribl-control-plane/models";

let value: CountedOutputResponse = {
  count: 228713,
  items: [
    {
      type: "elastic_cloud",
      url: "https://aching-stir-fry.net/",
      index: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | *models.OutputResponse*[]                  | :heavy_check_mark:                         | List of items in this response.            |
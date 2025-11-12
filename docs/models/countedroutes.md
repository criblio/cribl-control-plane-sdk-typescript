# CountedRoutes

## Example Usage

```typescript
import { CountedRoutes } from "cribl-control-plane/models";

let value: CountedRoutes = {
  count: 540829,
  items: [
    {
      id: "<id>",
      routes: [],
      groups: {
        "key": {
          name: "<value>",
          description:
            "efface aw bonfire promptly carefully really versus wisely annually alienated",
          disabled: true,
        },
      },
      comments: [
        {
          comment:
            "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.Routes](../models/routes.md)[]     | :heavy_minus_sign:                         | N/A                                        |
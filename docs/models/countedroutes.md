# CountedRoutes

## Example Usage

```typescript
import { CountedRoutes } from "cribl-control-plane/models";

let value: CountedRoutes = {
  count: 540829,
  items: [
    {
      comments: [
        {
          comment:
            "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
          groupId: "<id>",
          id: "<id>",
          index: 9969.55,
        },
      ],
      groups: {
        "key": {
          description:
            "since armchair thoroughly mmm miserably basket ugh rectangular",
          index: 5527.34,
          name: "<value>",
        },
      },
      id: "<id>",
      routes: [],
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.Routes](../models/routes.md)[]     | :heavy_minus_sign:                         | N/A                                        |
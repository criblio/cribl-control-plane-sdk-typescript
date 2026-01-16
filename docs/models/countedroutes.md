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
            "march meanwhile potentially although trouser wearily furthermore weary whereas",
          disabled: true,
        },
      },
      comments: [
        {
          comment:
            "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
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
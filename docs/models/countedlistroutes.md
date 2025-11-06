# CountedListRoutes

## Example Usage

```typescript
import { CountedListRoutes } from "cribl-control-plane/models";

let value: CountedListRoutes = {
  count: 491914,
  items: [
    {
      id: "<id>",
      routes: [
        {
          id: "<id>",
          name: "<value>",
          disabled: false,
          pipeline: "<value>",
          output: "<value>",
          outputExpression: "<value>",
          description: "finally considering pink geez when",
        },
      ],
      groups: {
        "key": {
          name: "<value>",
          description:
            "pish always what trench arcade meh regarding source supposing on",
          disabled: true,
        },
      },
      comments: [
        {
          comment:
            "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
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
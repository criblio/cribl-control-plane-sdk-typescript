# CreateRoutesAppendByIdResponse

a list of Routes objects

## Example Usage

```typescript
import { CreateRoutesAppendByIdResponse } from "cribl-control-plane/models/operations";

let value: CreateRoutesAppendByIdResponse = {
  count: 445099,
  items: [
    {
      id: "<id>",
      routes: [],
      groups: {
        "key": {
          name: "<value>",
          description: "athwart joshingly whether inspection how highly",
          disabled: false,
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
| `items`                                    | [models.Routes](../../models/routes.md)[]  | :heavy_minus_sign:                         | N/A                                        |
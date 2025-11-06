# CountedListObject

## Example Usage

```typescript
import { CountedListObject } from "cribl-control-plane/models";

let value: CountedListObject = {
  count: 597690,
  items: [
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {},
    {
      "key": "<value>",
      "key1": "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | Record<string, *any*>[]                    | :heavy_minus_sign:                         | N/A                                        |
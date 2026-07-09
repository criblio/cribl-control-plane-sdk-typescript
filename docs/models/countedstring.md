# CountedString

## Example Usage

```typescript
import { CountedString } from "cribl-control-plane/models";

let value: CountedString = {
  count: 24370,
  items: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | *string*[]                                 | :heavy_check_mark:                         | List of items in this response.            |
# CountedBoolean

## Example Usage

```typescript
import { CountedBoolean } from "cribl-control-plane/models";

let value: CountedBoolean = {
  count: 905404,
  items: [
    false,
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | *boolean*[]                                | :heavy_check_mark:                         | List of items in this response.            |
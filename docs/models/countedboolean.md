# CountedBoolean

## Example Usage

```typescript
import { CountedBoolean } from "cribl-control-plane/models";

let value: CountedBoolean = {
  count: 905404,
  items: [
    false,
    false,
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *boolean*[]                                | :heavy_minus_sign:                         | N/A                                        |
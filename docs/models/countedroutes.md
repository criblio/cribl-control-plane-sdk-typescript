# CountedRoutes

## Example Usage

```typescript
import { CountedRoutes } from "cribl-control-plane/models";

let value: CountedRoutes = {
  count: 540829,
  items: [],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | [models.Routes](../models/routes.md)[]     | :heavy_check_mark:                         | List of items in this response.            |
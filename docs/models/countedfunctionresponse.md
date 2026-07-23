# CountedFunctionResponse

## Example Usage

```typescript
import { CountedFunctionResponse } from "cribl-control-plane/models";

let value: CountedFunctionResponse = {
  count: 937893,
  items: [],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | *models.FunctionResponse*[]                | :heavy_check_mark:                         | List of items in this response.            |
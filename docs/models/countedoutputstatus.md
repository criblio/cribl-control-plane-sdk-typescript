# CountedOutputStatus

## Example Usage

```typescript
import { CountedOutputStatus } from "cribl-control-plane/models";

let value: CountedOutputStatus = {
  count: 381419,
  items: [],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `count`                                            | *number*                                           | :heavy_check_mark:                                 | number of items present in the items array         |
| `items`                                            | [models.OutputStatus](../models/outputstatus.md)[] | :heavy_check_mark:                                 | List of items in this response.                    |
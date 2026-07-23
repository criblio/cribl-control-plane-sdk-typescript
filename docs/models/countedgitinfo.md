# CountedGitInfo

## Example Usage

```typescript
import { CountedGitInfo } from "cribl-control-plane/models";

let value: CountedGitInfo = {
  count: 501871,
  items: [],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | [models.GitInfo](../models/gitinfo.md)[]   | :heavy_check_mark:                         | List of items in this response.            |
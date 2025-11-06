# CountedListGitInfo

## Example Usage

```typescript
import { CountedListGitInfo } from "cribl-control-plane/models";

let value: CountedListGitInfo = {
  count: 327205,
  items: [
    {
      remote: "<value>",
      versioning: true,
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.GitInfo](../models/gitinfo.md)[]   | :heavy_minus_sign:                         | N/A                                        |
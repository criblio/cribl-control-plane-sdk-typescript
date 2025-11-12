# CountedGitInfo

## Example Usage

```typescript
import { CountedGitInfo } from "cribl-control-plane/models";

let value: CountedGitInfo = {
  count: 501871,
  items: [
    {
      remote: "<value>",
      versioning: false,
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.GitInfo](../models/gitinfo.md)[]   | :heavy_minus_sign:                         | N/A                                        |
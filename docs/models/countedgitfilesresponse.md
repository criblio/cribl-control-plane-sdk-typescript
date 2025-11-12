# CountedGitFilesResponse

## Example Usage

```typescript
import { CountedGitFilesResponse } from "cribl-control-plane/models";

let value: CountedGitFilesResponse = {
  count: 846818,
  items: [
    {
      commitMessage: {
        "key": "<value>",
      },
      count: 3922.19,
      items: [],
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | number of items present in the items array                 |
| `items`                                                    | [models.GitFilesResponse](../models/gitfilesresponse.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
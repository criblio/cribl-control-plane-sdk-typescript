# CountedGitCommitSummary

## Example Usage

```typescript
import { CountedGitCommitSummary } from "cribl-control-plane/models";

let value: CountedGitCommitSummary = {
  count: 869175,
  items: [
    {
      branch: "<value>",
      commit: "<value>",
      summary: {
        changes: 73462,
        deletions: 373781,
        insertions: 182031,
      },
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_check_mark:                                         | number of items present in the items array                 |
| `items`                                                    | [models.GitCommitSummary](../models/gitcommitsummary.md)[] | :heavy_check_mark:                                         | List of items in this response.                            |
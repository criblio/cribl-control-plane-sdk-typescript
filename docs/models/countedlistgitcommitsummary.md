# CountedListGitCommitSummary

## Example Usage

```typescript
import { CountedListGitCommitSummary } from "cribl-control-plane/models";

let value: CountedListGitCommitSummary = {
  count: 801284,
  items: [
    {
      author: {
        email: "Norwood.Brown-Fisher@yahoo.com",
        name: "<value>",
      },
      branch: "<value>",
      commit: "<value>",
      files: {
        created: [
          "<value 1>",
        ],
        deleted: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        modified: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        renamed: [
          "<value 1>",
          "<value 2>",
        ],
      },
      summary: {
        changes: 396.39,
        deletions: 1762.21,
        insertions: 4367.29,
      },
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | number of items present in the items array                 |
| `items`                                                    | [models.GitCommitSummary](../models/gitcommitsummary.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
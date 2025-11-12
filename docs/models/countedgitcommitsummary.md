# CountedGitCommitSummary

## Example Usage

```typescript
import { CountedGitCommitSummary } from "cribl-control-plane/models";

let value: CountedGitCommitSummary = {
  count: 869175,
  items: [
    {
      author: {
        email: "Antwon19@yahoo.com",
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
        ],
        renamed: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      summary: {
        changes: 4408.76,
        deletions: 7943.47,
        insertions: 6422.14,
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
# GitCommitSummary

## Example Usage

```typescript
import { GitCommitSummary } from "cribl-control-plane/models";

let value: GitCommitSummary = {
  author: {
    email: "Nicklaus.Nolan@yahoo.com",
    name: "<value>",
  },
  branch: "<value>",
  commit: "<value>",
  files: {
    created: [
      "<value 1>",
      "<value 2>",
    ],
    deleted: [
      "<value 1>",
      "<value 2>",
    ],
    modified: [
      "<value 1>",
    ],
    renamed: [
      "<value 1>",
      "<value 2>",
    ],
  },
  summary: {
    changes: 5958.84,
    deletions: 4410.47,
    insertions: 8113.93,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `author`                                                           | [models.Author](../models/author.md)                               | :heavy_minus_sign:                                                 | N/A                                                                |
| `branch`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `commit`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `files`                                                            | [models.GitCommitSummaryFiles](../models/gitcommitsummaryfiles.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `summary`                                                          | [models.Summary](../models/summary.md)                             | :heavy_check_mark:                                                 | N/A                                                                |
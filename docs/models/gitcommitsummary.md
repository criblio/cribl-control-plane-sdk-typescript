# GitCommitSummary

## Example Usage

```typescript
import { GitCommitSummary } from "cribl-control-plane/models";

let value: GitCommitSummary = {
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `author`                                                           | [models.Author](../models/author.md)                               | :heavy_minus_sign:                                                 | N/A                                                                |
| `branch`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `commit`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `files`                                                            | [models.GitCommitSummaryFiles](../models/gitcommitsummaryfiles.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `summary`                                                          | [models.Summary](../models/summary.md)                             | :heavy_check_mark:                                                 | N/A                                                                |
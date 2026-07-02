# GitCommitSummary

## Example Usage

```typescript
import { GitCommitSummary } from "cribl-control-plane/models";

let value: GitCommitSummary = {
  branch: "<value>",
  commit: "<value>",
  summary: {
    changes: 875406,
    deletions: 184138,
    insertions: 720089,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `author`                                                           | [models.Author](../models/author.md)                               | :heavy_minus_sign:                                                 | Author of the Git commit, including email and display name.        |
| `branch`                                                           | *string*                                                           | :heavy_check_mark:                                                 | Name of the Git branch the commit was made on.                     |
| `commit`                                                           | *string*                                                           | :heavy_check_mark:                                                 | Full SHA-1 hash of the new commit.                                 |
| `files`                                                            | [models.GitCommitSummaryFiles](../models/gitcommitsummaryfiles.md) | :heavy_minus_sign:                                                 | Files affected by the commit, grouped by change type.              |
| `summary`                                                          | [models.Summary](../models/summary.md)                             | :heavy_check_mark:                                                 | Summary of line changes in the commit.                             |
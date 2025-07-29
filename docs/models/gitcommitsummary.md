# GitCommitSummary

## Example Usage

```typescript
import { GitCommitSummary } from "cribl-control-plane/models";

let value: GitCommitSummary = {
  author: {
    email: "Christiana.Ferry@hotmail.com",
    name: "<value>",
  },
  branch: "<value>",
  commit: "<value>",
  files: {},
  summary: {
    changes: 3884.9,
    deletions: 8887.87,
    insertions: 9188.19,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `author`                                                           | [models.Author](../models/author.md)                               | :heavy_check_mark:                                                 | N/A                                                                |
| `branch`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `commit`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `files`                                                            | [models.GitCommitSummaryFiles](../models/gitcommitsummaryfiles.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `summary`                                                          | [models.Summary](../models/summary.md)                             | :heavy_check_mark:                                                 | N/A                                                                |
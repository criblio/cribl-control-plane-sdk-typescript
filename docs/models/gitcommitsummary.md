# GitCommitSummary

## Example Usage

```typescript
import { GitCommitSummary } from "cribl-control-plane/models";

let value: GitCommitSummary = {
  branch: "<value>",
  commit: "<value>",
  summary: {
    changes: 8754.06,
    deletions: 1841.38,
    insertions: 7200.89,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `author`                                                                   | [models.Author](../models/author.md)                                       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `branch`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `commit`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `files`                                                                    | [models.FilesTypeGitCommitSummary](../models/filestypegitcommitsummary.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `summary`                                                                  | [models.Summary](../models/summary.md)                                     | :heavy_check_mark:                                                         | N/A                                                                        |
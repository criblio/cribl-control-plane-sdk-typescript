# FilesTypeGitCommitSummary

## Example Usage

```typescript
import { FilesTypeGitCommitSummary } from "cribl-control-plane/models";

let value: FilesTypeGitCommitSummary = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `created`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Array of file paths that were created in the commit.                                 |
| `deleted`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Array of file paths that were deleted in the commit.                                 |
| `modified`                                                                           | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Array of file paths that were modified in the commit.                                |
| `renamed`                                                                            | [models.GitFileRename](../models/gitfilerename.md)[]                                 | :heavy_minus_sign:                                                                   | Array of file rename operations, each containing the original path and the new path. |
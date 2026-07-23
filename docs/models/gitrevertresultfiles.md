# GitRevertResultFiles

Files affected by the revert, grouped by change type.

## Example Usage

```typescript
import { GitRevertResultFiles } from "cribl-control-plane/models";

let value: GitRevertResultFiles = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `created`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Array of file paths that were created in the commit.                                 |
| `deleted`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Array of file paths that were deleted in the commit.                                 |
| `modified`                                                                           | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Array of file paths that were modified in the commit.                                |
| `renamed`                                                                            | [models.GitFileRename](../models/gitfilerename.md)[]                                 | :heavy_minus_sign:                                                                   | Array of file rename operations, each containing the original path and the new path. |
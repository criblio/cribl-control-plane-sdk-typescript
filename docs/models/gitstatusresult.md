# GitStatusResult

## Example Usage

```typescript
import { GitStatusResult } from "cribl-control-plane/models";

let value: GitStatusResult = {
  ahead: 607584,
  behind: 973559,
  conflicted: [],
  created: [],
  current: "<value>",
  deleted: [],
  files: [
    {
      index: "<value>",
      path: "/rescue",
      working_dir: "<value>",
    },
  ],
  modified: [],
  not_added: [
    "<value 1>",
  ],
  renamed: [],
  staged: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `ahead`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | Number of local commits that have not been pushed to the remote repository.               |
| `behind`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | Number of commits in the remote repository that have not been pulled to the local branch. |
| `conflicted`                                                                              | *string*[]                                                                                | :heavy_check_mark:                                                                        | Array of file paths that have merge conflicts.                                            |
| `created`                                                                                 | *string*[]                                                                                | :heavy_check_mark:                                                                        | Array of file paths for newly created files that are staged for commit.                   |
| `current`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | Name of the current Git branch.                                                           |
| `deleted`                                                                                 | *string*[]                                                                                | :heavy_check_mark:                                                                        | Array of file paths for deleted files that are staged for commit.                         |
| `files`                                                                                   | [models.FileT](../models/filet.md)[]                                                      | :heavy_check_mark:                                                                        | Array of all changed files with their index and working directory status codes.           |
| `modified`                                                                                | *string*[]                                                                                | :heavy_check_mark:                                                                        | Array of file paths for modified files that are staged for commit.                        |
| `notAdded`                                                                                | *string*[]                                                                                | :heavy_check_mark:                                                                        | Array of file paths that have been modified but are not staged for commit.                |
| `renamed`                                                                                 | [models.Renamed](../models/renamed.md)[]                                                  | :heavy_check_mark:                                                                        | Array of file rename operations that are staged for commit.                               |
| `staged`                                                                                  | *string*[]                                                                                | :heavy_check_mark:                                                                        | Array of file paths that are staged for the next commit.                                  |
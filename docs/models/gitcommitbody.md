# GitCommitBody

## Example Usage

```typescript
import { GitCommitBody } from "cribl-control-plane/models";

let value: GitCommitBody = {
  message: "<value>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `effective`                                                                                                                      | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | If <code>true</code>, apply the commit to the group's effective configuration. Otherwise, <code>false</code>.                    |
| `files`                                                                                                                          | *string*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Array of file paths to include in the commit, relative to the configuration root. If omitted, all pending changes are committed. |
| `message`                                                                                                                        | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Commit message to use for the new Git commit.                                                                                    |
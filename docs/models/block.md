# Block

## Example Usage

```typescript
import { Block } from "cribl-control-plane/models";

let value: Block = {
  header: "@@ -1,5 +1,8 @@",
  lines: [
    {
      type: "insert",
      newNumber: 701818,
      content: "<value>",
    },
  ],
  newStartLine: 128850,
  oldStartLine: 329046,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `header`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | Unified diff hunk header.                                                                   | @@ -1,5 +1,8 @@                                                                             |
| `lines`                                                                                     | *models.GitDiffLines*[]                                                                     | :heavy_check_mark:                                                                          | Array of lines in a Git diff hunk.                                                          |                                                                                             |
| `newStartLine`                                                                              | *number*                                                                                    | :heavy_check_mark:                                                                          | Starting line number in the new file for this hunk.                                         |                                                                                             |
| `oldStartLine`                                                                              | *number*                                                                                    | :heavy_check_mark:                                                                          | Starting line number in the original file for this hunk.                                    |                                                                                             |
| `oldStartLine2`                                                                             | *number*                                                                                    | :heavy_minus_sign:                                                                          | Starting line number in the original file for the second parent, present in combined diffs. |                                                                                             |
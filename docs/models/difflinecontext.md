# DiffLineContext

Unchanged context line in a Git diff hunk.

## Example Usage

```typescript
import { DiffLineContext } from "cribl-control-plane/models";

let value: DiffLineContext = {
  type: "context",
  newNumber: 35568,
  oldNumber: 731123,
  content: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *"context"*                                                        | :heavy_check_mark:                                                 | Line change type. Always <code>context</code> for unchanged lines. |
| `newNumber`                                                        | *number*                                                           | :heavy_check_mark:                                                 | Line number in the new file.                                       |
| `oldNumber`                                                        | *number*                                                           | :heavy_check_mark:                                                 | Line number in the original file.                                  |
| `content`                                                          | *string*                                                           | :heavy_check_mark:                                                 | Full content of the line, including the diff prefix character.     |
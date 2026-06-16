# DiffLineInsert

Inserted line in a Git diff hunk.

## Example Usage

```typescript
import { DiffLineInsert } from "cribl-control-plane/models";

let value: DiffLineInsert = {
  type: "insert",
  newNumber: 806535,
  content: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *"insert"*                                                       | :heavy_check_mark:                                               | Line change type. Always <code>insert</code> for inserted lines. |
| `newNumber`                                                      | *number*                                                         | :heavy_check_mark:                                               | Line number in the new file.                                     |
| `content`                                                        | *string*                                                         | :heavy_check_mark:                                               | Full content of the line, including the diff prefix character.   |
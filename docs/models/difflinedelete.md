# DiffLineDelete

Deleted line in a Git diff hunk.

## Example Usage

```typescript
import { DiffLineDelete } from "cribl-control-plane/models";

let value: DiffLineDelete = {
  type: "delete",
  oldNumber: 281695,
  content: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `type`                                                          | *"delete"*                                                      | :heavy_check_mark:                                              | Line change type. Always <code>delete</code> for deleted lines. |
| `oldNumber`                                                     | *number*                                                        | :heavy_check_mark:                                              | Line number in the original file.                               |
| `content`                                                       | *string*                                                        | :heavy_check_mark:                                              | Full content of the line, including the diff prefix character.  |
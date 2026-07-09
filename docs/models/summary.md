# Summary

Summary of line changes in the commit.

## Example Usage

```typescript
import { Summary } from "cribl-control-plane/models";

let value: Summary = {
  changes: 717063,
  deletions: 399543,
  insertions: 950147,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `changes`                                                  | *number*                                                   | :heavy_check_mark:                                         | Total number of lines changed (insertions plus deletions). |
| `deletions`                                                | *number*                                                   | :heavy_check_mark:                                         | Number of lines deleted.                                   |
| `insertions`                                               | *number*                                                   | :heavy_check_mark:                                         | Number of lines inserted.                                  |
# CountedGitStatusResult

## Example Usage

```typescript
import { CountedGitStatusResult } from "cribl-control-plane/models";

let value: CountedGitStatusResult = {
  count: 22405,
  items: [
    {
      ahead: 54532,
      behind: 275370,
      conflicted: [
        "<value 1>",
      ],
      created: [
        "<value 1>",
      ],
      current: "<value>",
      deleted: [
        "<value 1>",
        "<value 2>",
      ],
      files: [],
      modified: [
        "<value 1>",
      ],
      not_added: [],
      renamed: [],
      staged: [],
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_check_mark:                                       | number of items present in the items array               |
| `items`                                                  | [models.GitStatusResult](../models/gitstatusresult.md)[] | :heavy_check_mark:                                       | List of items in this response.                          |
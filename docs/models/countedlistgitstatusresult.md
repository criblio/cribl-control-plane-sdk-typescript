# CountedListGitStatusResult

## Example Usage

```typescript
import { CountedListGitStatusResult } from "cribl-control-plane/models";

let value: CountedListGitStatusResult = {
  count: 801804,
  items: [
    {
      ahead: 5906.93,
      behind: 1215.61,
      conflicted: [
        "<value 1>",
        "<value 2>",
      ],
      created: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      current: "<value>",
      deleted: [
        "<value 1>",
      ],
      files: [
        {
          index: "<value>",
          path: "/selinux",
          workingDir: "<value>",
        },
      ],
      modified: [],
      notAdded: [],
      renamed: [
        {
          from: "<value>",
          to: "<value>",
        },
      ],
      staged: [
        "<value 1>",
      ],
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | number of items present in the items array               |
| `items`                                                  | [models.GitStatusResult](../models/gitstatusresult.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
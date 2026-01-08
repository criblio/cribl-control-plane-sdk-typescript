# CountedGitStatusResult

## Example Usage

```typescript
import { CountedGitStatusResult } from "cribl-control-plane/models";

let value: CountedGitStatusResult = {
  count: 22405,
  items: [
    {
      ahead: 7225.55,
      behind: 545.32,
      conflicted: [
        "<value 1>",
      ],
      created: [
        "<value 1>",
      ],
      current: "<value>",
      deleted: [
        "<value 1>",
      ],
      files: [
        {
          index: "<value>",
          path: "/opt/include",
          working_dir: "<value>",
        },
      ],
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
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | number of items present in the items array               |
| `items`                                                  | [models.GitStatusResult](../models/gitstatusresult.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
# GitStatusResult

## Example Usage

```typescript
import { GitStatusResult } from "cribl-control-plane/models";

let value: GitStatusResult = {
  ahead: 6075.84,
  behind: 9735.59,
  conflicted: [],
  created: [],
  current: "<value>",
  deleted: [],
  files: [
    {
      index: "<value>",
      path: "/selinux",
      workingDir: "<value>",
    },
  ],
  modified: [
    "<value 1>",
    "<value 2>",
  ],
  notAdded: [],
  renamed: [],
  staged: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `ahead`                                  | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `behind`                                 | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `conflicted`                             | *string*[]                               | :heavy_check_mark:                       | N/A                                      |
| `created`                                | *string*[]                               | :heavy_check_mark:                       | N/A                                      |
| `current`                                | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `deleted`                                | *string*[]                               | :heavy_check_mark:                       | N/A                                      |
| `files`                                  | [models.FileT](../models/filet.md)[]     | :heavy_check_mark:                       | N/A                                      |
| `modified`                               | *string*[]                               | :heavy_check_mark:                       | N/A                                      |
| `notAdded`                               | *string*[]                               | :heavy_check_mark:                       | N/A                                      |
| `renamed`                                | [models.Renamed](../models/renamed.md)[] | :heavy_check_mark:                       | N/A                                      |
| `staged`                                 | *string*[]                               | :heavy_check_mark:                       | N/A                                      |
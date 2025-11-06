# CountedListGitRevertResult

## Example Usage

```typescript
import { CountedListGitRevertResult } from "cribl-control-plane/models";

let value: CountedListGitRevertResult = {
  count: 274259,
  items: [
    {
      audit: {
        files: {
          created: [
            "<value 1>",
          ],
          deleted: [
            "<value 1>",
            "<value 2>",
          ],
          modified: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          renamed: [
            "<value 1>",
            "<value 2>",
          ],
        },
        group: "<value>",
        id: "<id>",
      },
      reverted: true,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | number of items present in the items array               |
| `items`                                                  | [models.GitRevertResult](../models/gitrevertresult.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
# CountedGitRevertResult

## Example Usage

```typescript
import { CountedGitRevertResult } from "cribl-control-plane/models";

let value: CountedGitRevertResult = {
  count: 333318,
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
            "<value 3>",
          ],
          modified: [
            "<value 1>",
            "<value 2>",
          ],
          renamed: [
            {
              from: "<value>",
              to: "<value>",
            },
          ],
        },
        group: "<value>",
        id: "<id>",
      },
      reverted: false,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | number of items present in the items array               |
| `items`                                                  | [models.GitRevertResult](../models/gitrevertresult.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
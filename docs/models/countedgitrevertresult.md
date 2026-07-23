# CountedGitRevertResult

## Example Usage

```typescript
import { CountedGitRevertResult } from "cribl-control-plane/models";

let value: CountedGitRevertResult = {
  count: 333318,
  items: [
    {
      audit: {
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
| `count`                                                  | *number*                                                 | :heavy_check_mark:                                       | number of items present in the items array               |
| `items`                                                  | [models.GitRevertResult](../models/gitrevertresult.md)[] | :heavy_check_mark:                                       | List of items in this response.                          |
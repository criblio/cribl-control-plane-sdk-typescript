# CountedListGitFilesResponse

## Example Usage

```typescript
import { CountedListGitFilesResponse } from "cribl-control-plane/models";

let value: CountedListGitFilesResponse = {
  count: 235924,
  items: [
    {
      commitMessage: {
        "key": "<value>",
      },
      count: 3836.63,
      items: [
        {
          children: [
            {
              name: "<value>",
              state: "New York",
            },
          ],
          name: "<value>",
          state: "Alabama",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | number of items present in the items array                 |
| `items`                                                    | [models.GitFilesResponse](../models/gitfilesresponse.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
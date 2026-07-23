# CountedGitFilesResponse

## Example Usage

```typescript
import { CountedGitFilesResponse } from "cribl-control-plane/models";

let value: CountedGitFilesResponse = {
  count: 846818,
  items: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_check_mark:                                         | number of items present in the items array                 |
| `items`                                                    | [models.GitFilesResponse](../models/gitfilesresponse.md)[] | :heavy_check_mark:                                         | List of items in this response.                            |
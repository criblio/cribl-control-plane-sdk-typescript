# GitFilesResponse

## Example Usage

```typescript
import { GitFilesResponse } from "cribl-control-plane/models";

let value: GitFilesResponse = {
  count: 4560.07,
  items: [],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `commitMessage`                          | Record<string, *any*>                    | :heavy_minus_sign:                       | N/A                                      |
| `count`                                  | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `items`                                  | [models.GitFile](../models/gitfile.md)[] | :heavy_check_mark:                       | N/A                                      |
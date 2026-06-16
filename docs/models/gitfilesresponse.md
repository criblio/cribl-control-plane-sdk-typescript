# GitFilesResponse

## Example Usage

```typescript
import { GitFilesResponse } from "cribl-control-plane/models";

let value: GitFilesResponse = {
  count: 456007,
  items: [],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `commitMessage`                                         | *string*                                                | :heavy_minus_sign:                                      | Commit message of the specified commit.                 |
| `count`                                                 | *number*                                                | :heavy_check_mark:                                      | Number of files returned.                               |
| `items`                                                 | [models.GitFile](../models/gitfile.md)[]                | :heavy_check_mark:                                      | Array of files that changed since the specified commit. |
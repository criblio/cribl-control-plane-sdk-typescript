# CountedGitDiffResult

## Example Usage

```typescript
import { CountedGitDiffResult } from "cribl-control-plane/models";

let value: CountedGitDiffResult = {
  count: 297747,
  items: [
    {
      diffJson: [],
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `count`                                              | *number*                                             | :heavy_check_mark:                                   | number of items present in the items array           |
| `items`                                              | [models.GitDiffResult](../models/gitdiffresult.md)[] | :heavy_check_mark:                                   | List of items in this response.                      |
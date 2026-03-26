# GitShowResult

## Example Usage

```typescript
import { GitShowResult } from "cribl-control-plane/models";

let value: GitShowResult = {
  commitMessage: "<value>",
  diffJson: [],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `commitMessage`                              | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `diffJson`                                   | [models.DiffFiles](../models/difffiles.md)[] | :heavy_check_mark:                           | N/A                                          |
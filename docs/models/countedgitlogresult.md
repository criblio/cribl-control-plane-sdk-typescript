# CountedGitLogResult

## Example Usage

```typescript
import { CountedGitLogResult } from "cribl-control-plane/models";

let value: CountedGitLogResult = {
  count: 639519,
  items: [
    {
      authorEmail: "<value>",
      authorName: "<value>",
      body: "<value>",
      date: "2024-02-28",
      hash: "<value>",
      message: "<value>",
      refs: "<value>",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `count`                                            | *number*                                           | :heavy_minus_sign:                                 | number of items present in the items array         |
| `items`                                            | [models.GitLogResult](../models/gitlogresult.md)[] | :heavy_minus_sign:                                 | N/A                                                |
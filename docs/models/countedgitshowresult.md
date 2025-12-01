# CountedGitShowResult

## Example Usage

```typescript
import { CountedGitShowResult } from "cribl-control-plane/models";

let value: CountedGitShowResult = {
  count: 107088,
  items: [
    {
      commitMessage: "<value>",
      diffJson: [],
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `count`                                              | *number*                                             | :heavy_minus_sign:                                   | number of items present in the items array           |
| `items`                                              | [models.GitShowResult](../models/gitshowresult.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
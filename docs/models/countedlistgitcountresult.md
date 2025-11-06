# CountedListGitCountResult

## Example Usage

```typescript
import { CountedListGitCountResult } from "cribl-control-plane/models";

let value: CountedListGitCountResult = {
  count: 550439,
  items: [
    {
      count: 6120.24,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_minus_sign:                                     | number of items present in the items array             |
| `items`                                                | [models.GitCountResult](../models/gitcountresult.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
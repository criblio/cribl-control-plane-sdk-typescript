# CountedGitCountResult

## Example Usage

```typescript
import { CountedGitCountResult } from "cribl-control-plane/models";

let value: CountedGitCountResult = {
  count: 946064,
  items: [
    {
      count: 4746.41,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_minus_sign:                                     | number of items present in the items array             |
| `items`                                                | [models.GitCountResult](../models/gitcountresult.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
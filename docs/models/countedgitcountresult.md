# CountedGitCountResult

## Example Usage

```typescript
import { CountedGitCountResult } from "cribl-control-plane/models";

let value: CountedGitCountResult = {
  count: 946064,
  items: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `count`                                                | *number*                                               | :heavy_check_mark:                                     | number of items present in the items array             |
| `items`                                                | [models.GitCountResult](../models/gitcountresult.md)[] | :heavy_check_mark:                                     | List of items in this response.                        |
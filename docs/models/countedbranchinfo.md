# CountedBranchInfo

## Example Usage

```typescript
import { CountedBranchInfo } from "cribl-control-plane/models";

let value: CountedBranchInfo = {
  count: 932374,
  items: [],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `count`                                        | *number*                                       | :heavy_check_mark:                             | number of items present in the items array     |
| `items`                                        | [models.BranchInfo](../models/branchinfo.md)[] | :heavy_check_mark:                             | List of items in this response.                |
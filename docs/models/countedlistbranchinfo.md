# CountedListBranchInfo

## Example Usage

```typescript
import { CountedListBranchInfo } from "cribl-control-plane/models";

let value: CountedListBranchInfo = {
  count: 572117,
  items: [
    {
      id: "<id>",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `count`                                        | *number*                                       | :heavy_minus_sign:                             | number of items present in the items array     |
| `items`                                        | [models.BranchInfo](../models/branchinfo.md)[] | :heavy_minus_sign:                             | N/A                                            |
# CountedBranchInfo

## Example Usage

```typescript
import { CountedBranchInfo } from "cribl-control-plane/models";

let value: CountedBranchInfo = {
  count: 932374,
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
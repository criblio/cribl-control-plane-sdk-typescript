# GetVersionBranchResponse

a list of BranchInfo objects

## Example Usage

```typescript
import { GetVersionBranchResponse } from "cribl-control-plane/models/operations";

let value: GetVersionBranchResponse = {
  count: 800947,
  items: [
    {
      id: "<id>",
    },
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `count`                                           | *number*                                          | :heavy_minus_sign:                                | number of items present in the items array        |
| `items`                                           | [models.BranchInfo](../../models/branchinfo.md)[] | :heavy_minus_sign:                                | N/A                                               |
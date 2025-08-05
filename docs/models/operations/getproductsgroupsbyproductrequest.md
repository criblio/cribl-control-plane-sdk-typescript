# GetProductsGroupsByProductRequest

## Example Usage

```typescript
import { GetProductsGroupsByProductRequest } from "cribl-control-plane/models/operations";

let value: GetProductsGroupsByProductRequest = {
  fields: "<value>",
  product: "stream",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `fields`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | fields to add to results: git.commit, git.localChanges, git.log                                              |
| `product`                                                                                                    | [operations.GetProductsGroupsByProductProduct](../../models/operations/getproductsgroupsbyproductproduct.md) | :heavy_check_mark:                                                                                           | Cribl Product                                                                                                |
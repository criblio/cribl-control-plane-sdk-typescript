# GetProductsGroupsAclTeamsByProductAndIdRequest

## Example Usage

```typescript
import { GetProductsGroupsAclTeamsByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetProductsGroupsAclTeamsByProductAndIdRequest = {
  product: "stream",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `product`                                                                                                                              | [operations.GetProductsGroupsAclTeamsByProductAndIdProduct](../../models/operations/getproductsgroupsaclteamsbyproductandidproduct.md) | :heavy_check_mark:                                                                                                                     | Cribl Product                                                                                                                          |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Group ID                                                                                                                               |
| `type`                                                                                                                                 | [operations.GetProductsGroupsAclTeamsByProductAndIdType](../../models/operations/getproductsgroupsaclteamsbyproductandidtype.md)       | :heavy_minus_sign:                                                                                                                     | resource type by which to filter access levels                                                                                         |
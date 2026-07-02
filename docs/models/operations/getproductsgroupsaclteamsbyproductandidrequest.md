# GetProductsGroupsAclTeamsByProductAndIdRequest

## Example Usage

```typescript
import { GetProductsGroupsAclTeamsByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetProductsGroupsAclTeamsByProductAndIdRequest = {
  product: "edge",
  id: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `product`                                                                                      | [models.ProductsCore](../../models/productscore.md)                                            | :heavy_check_mark:                                                                             | Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet.        |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get the team ACL for. |
| `type`                                                                                         | [models.RbacResource](../../models/rbacresource.md)                                            | :heavy_minus_sign:                                                                             | Filter for limiting the response to ACL entries for the specified RBAC resource type.          |
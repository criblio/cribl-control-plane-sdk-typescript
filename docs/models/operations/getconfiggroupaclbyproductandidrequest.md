# GetConfigGroupAclByProductAndIdRequest

## Example Usage

```typescript
import { GetConfigGroupAclByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetConfigGroupAclByProductAndIdRequest = {
  product: "outpost",
  id: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `product`                                                                                 | [models.ProductsCore](../../models/productscore.md)                                       | :heavy_check_mark:                                                                        | Name of the Cribl product to get the Worker Groups or Edge Fleets for.                    |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get the ACL for. |
| `type`                                                                                    | [models.RbacResource](../../models/rbacresource.md)                                       | :heavy_minus_sign:                                                                        | Filter for limiting the response to ACL entries for the specified RBAC resource type.     |
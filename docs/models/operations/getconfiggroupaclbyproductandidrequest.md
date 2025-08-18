# GetConfigGroupAclByProductAndIdRequest

## Example Usage

```typescript
import { GetConfigGroupAclByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetConfigGroupAclByProductAndIdRequest = {
  product: "edge",
  id: "<id>",
  type: "dashboards",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `product`                                                                                                              | [operations.GetConfigGroupAclByProductAndIdProduct](../../models/operations/getconfiggroupaclbyproductandidproduct.md) | :heavy_check_mark:                                                                                                     | Name of the Cribl product to get the Worker Groups or Edge Fleets for.                                                 |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The <code>id</code> of the Worker Group or Edge Fleet to get the ACL for.                                              |
| `type`                                                                                                                 | [operations.GetConfigGroupAclByProductAndIdType](../../models/operations/getconfiggroupaclbyproductandidtype.md)       | :heavy_minus_sign:                                                                                                     | Filter for limiting the response to ACL entries for the specified RBAC resource type.                                  |
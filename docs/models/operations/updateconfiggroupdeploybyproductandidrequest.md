# UpdateConfigGroupDeployByProductAndIdRequest

## Example Usage

```typescript
import { UpdateConfigGroupDeployByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateConfigGroupDeployByProductAndIdRequest = {
  product: "outpost",
  id: "<id>",
  deployRequest: {
    version: "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `product`                                                                                             | [models.ProductsCore](../../models/productscore.md)                                                   | :heavy_check_mark:                                                                                    | Name of the Cribl product to deploy commits to the Worker Groups, Outpost Groups, or Edge Fleets for. |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | The <code>id</code> of the target Worker Group, Outpost Group, or Edge Fleet for commit deployment.   |
| `deployRequest`                                                                                       | [models.DeployRequest](../../models/deployrequest.md)                                                 | :heavy_check_mark:                                                                                    | DeployRequest object                                                                                  |
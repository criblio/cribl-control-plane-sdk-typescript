# DeleteConfigGroupByProductAndIdRequest

## Example Usage

```typescript
import { DeleteConfigGroupByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteConfigGroupByProductAndIdRequest = {
  product: "outpost",
  id: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `product`                                                                               | [models.ProductsCore](../../models/productscore.md)                                     | :heavy_check_mark:                                                                      | Name of the Cribl product to get the Worker Groups, Outpost Groups, or Edge Fleets for. |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to delete.        |
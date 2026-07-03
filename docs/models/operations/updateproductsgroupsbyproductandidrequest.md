# UpdateProductsGroupsByProductAndIdRequest

## Example Usage

```typescript
import { UpdateProductsGroupsByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateProductsGroupsByProductAndIdRequest = {
  product: "outpost",
  id: "<id>",
  configGroup: {
    estimatedIngestRate: 4096,
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `product`                                                                               | [models.ProductsCore](../../models/productscore.md)                                     | :heavy_check_mark:                                                                      | Name of the Cribl product to get the Worker Groups, Outpost Groups, or Edge Fleets for. |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to update.        |
| `configGroup`                                                                           | [models.ConfigGroup](../../models/configgroup.md)                                       | :heavy_check_mark:                                                                      | ConfigGroup object.                                                                     |
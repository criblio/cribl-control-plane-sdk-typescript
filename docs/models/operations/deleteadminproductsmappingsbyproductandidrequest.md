# DeleteAdminProductsMappingsByProductAndIdRequest

## Example Usage

```typescript
import { DeleteAdminProductsMappingsByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteAdminProductsMappingsByProductAndIdRequest = {
  product: "stream",
  id: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `product`                                                   | [models.ProductsCore](../../models/productscore.md)         | :heavy_check_mark:                                          | Name of the Cribl product to delete the Mapping Ruleset for |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | The <code>id</code> of the Mapping Ruleset to delete.       |
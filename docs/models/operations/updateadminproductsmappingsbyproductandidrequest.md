# UpdateAdminProductsMappingsByProductAndIdRequest

## Example Usage

```typescript
import { UpdateAdminProductsMappingsByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateAdminProductsMappingsByProductAndIdRequest = {
  product: "stream",
  id: "<id>",
  mappingRuleset: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `product`                                                   | [models.ProductsBase](../../models/productsbase.md)         | :heavy_check_mark:                                          | Name of the Cribl product to update the Mapping Ruleset for |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | The <code>id</code> of the Mapping Ruleset to update.       |
| `mappingRuleset`                                            | [models.MappingRuleset](../../models/mappingruleset.md)     | :heavy_check_mark:                                          | MappingRuleset object                                       |
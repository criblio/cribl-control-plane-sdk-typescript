# CreateAdminProductsMappingsByProductRequest

## Example Usage

```typescript
import { CreateAdminProductsMappingsByProductRequest } from "cribl-control-plane/models/operations";

let value: CreateAdminProductsMappingsByProductRequest = {
  product: "stream",
  mappingRuleset: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `product`                                                   | [models.ProductsBase](../../models/productsbase.md)         | :heavy_check_mark:                                          | Name of the Cribl product to create the Mapping Ruleset for |
| `mappingRuleset`                                            | [models.MappingRuleset](../../models/mappingruleset.md)     | :heavy_check_mark:                                          | MappingRuleset object                                       |
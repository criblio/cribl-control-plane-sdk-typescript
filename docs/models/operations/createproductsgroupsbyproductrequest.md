# CreateProductsGroupsByProductRequest

## Example Usage

```typescript
import { CreateProductsGroupsByProductRequest } from "cribl-control-plane/models/operations";

let value: CreateProductsGroupsByProductRequest = {
  product: "stream",
  configGroup: {
    configVersion: "<value>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `product`                                                                                                          | [operations.CreateProductsGroupsByProductProduct](../../models/operations/createproductsgroupsbyproductproduct.md) | :heavy_check_mark:                                                                                                 | Cribl Product                                                                                                      |
| `configGroup`                                                                                                      | [models.ConfigGroup](../../models/configgroup.md)                                                                  | :heavy_check_mark:                                                                                                 | ConfigGroup object                                                                                                 |
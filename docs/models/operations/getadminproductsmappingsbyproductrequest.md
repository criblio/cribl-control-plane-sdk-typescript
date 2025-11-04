# GetAdminProductsMappingsByProductRequest

## Example Usage

```typescript
import { GetAdminProductsMappingsByProductRequest } from "cribl-control-plane/models/operations";

let value: GetAdminProductsMappingsByProductRequest = {
  product: "edge",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `product`                                                  | [models.ProductsCore](../../models/productscore.md)        | :heavy_check_mark:                                         | Name of the Cribl product to list the Mapping Rulesets for |
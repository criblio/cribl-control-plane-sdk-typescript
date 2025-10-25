# GetAdminProductsMappingsByProductAndIdRequest

## Example Usage

```typescript
import { GetAdminProductsMappingsByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetAdminProductsMappingsByProductAndIdRequest = {
  product: "edge",
  id: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `product`                                                                    | [models.ProductsCore](../../models/productscore.md)                          | :heavy_check_mark:                                                           | Name of the Cribl product to get the Mappings for                            |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The <code>id</code> of the Worker Group or Edge Fleet Mapping Ruleset to get |
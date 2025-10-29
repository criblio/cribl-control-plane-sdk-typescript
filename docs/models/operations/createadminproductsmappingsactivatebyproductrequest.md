# CreateAdminProductsMappingsActivateByProductRequest

## Example Usage

```typescript
import { CreateAdminProductsMappingsActivateByProductRequest } from "cribl-control-plane/models/operations";

let value: CreateAdminProductsMappingsActivateByProductRequest = {
  product: "stream",
  rulesetId: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `product`                                                     | [models.ProductsCore](../../models/productscore.md)           | :heavy_check_mark:                                            | Name of the Cribl product to activate the Mapping Ruleset for |
| `rulesetId`                                                   | [models.RulesetId](../../models/rulesetid.md)                 | :heavy_check_mark:                                            | RulesetId object                                              |
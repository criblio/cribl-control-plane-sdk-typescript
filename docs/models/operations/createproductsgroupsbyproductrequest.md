# CreateProductsGroupsByProductRequest

## Example Usage

```typescript
import { CreateProductsGroupsByProductRequest } from "cribl-control-plane/models/operations";

let value: CreateProductsGroupsByProductRequest = {
  product: "stream",
  groupCreateRequest: {
    estimatedIngestRate: 4096,
    id: "<id>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `product`                                                                           | [models.ProductsCore](../../models/productscore.md)                                 | :heavy_check_mark:                                                                  | Name of the Cribl product to add the Worker Group, Outpost Group, or Edge Fleet to. |
| `groupCreateRequest`                                                                | [models.GroupCreateRequest](../../models/groupcreaterequest.md)                     | :heavy_check_mark:                                                                  | GroupCreateRequest object.                                                          |
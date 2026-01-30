# UpdateProductsWorkersRestartByProductRequest

## Example Usage

```typescript
import { UpdateProductsWorkersRestartByProductRequest } from "cribl-control-plane/models/operations";

let value: UpdateProductsWorkersRestartByProductRequest = {
  product: "stream",
  restartRequest: {
    guids: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `product`                                                                 | [models.ProductsBase](../../models/productsbase.md)                       | :heavy_check_mark:                                                        | Name of the Cribl product whose Worker or Edge Nodes you want to restart. |
| `restartRequest`                                                          | [models.RestartRequest](../../models/restartrequest.md)                   | :heavy_check_mark:                                                        | RestartRequest object                                                     |
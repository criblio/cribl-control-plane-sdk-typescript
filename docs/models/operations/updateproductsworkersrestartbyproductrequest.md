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

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `product`                                                                           | [models.ProductsCore](../../models/productscore.md)                                 | :heavy_check_mark:                                                                  | Name of the Cribl product whose Worker, Edge, or Outpost Nodes you want to restart. |
| `restartRequest`                                                                    | [models.RestartRequest](../../models/restartrequest.md)                             | :heavy_check_mark:                                                                  | RestartRequest object.                                                              |
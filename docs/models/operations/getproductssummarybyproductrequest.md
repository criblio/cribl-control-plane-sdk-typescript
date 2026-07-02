# GetProductsSummaryByProductRequest

## Example Usage

```typescript
import { GetProductsSummaryByProductRequest } from "cribl-control-plane/models/operations";

let value: GetProductsSummaryByProductRequest = {
  product: "edge",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `product`                                           | [models.ProductsBase](../../models/productsbase.md) | :heavy_check_mark:                                  | Name of the Cribl product to get the summary for.   |
| `offset`                                            | *number*                                            | :heavy_minus_sign:                                  | Pagination offset                                   |
| `limit`                                             | *number*                                            | :heavy_minus_sign:                                  | Maximum number of items to return                   |
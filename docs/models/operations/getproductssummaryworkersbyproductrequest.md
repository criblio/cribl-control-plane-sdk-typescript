# GetProductsSummaryWorkersByProductRequest

## Example Usage

```typescript
import { GetProductsSummaryWorkersByProductRequest } from "cribl-control-plane/models/operations";

let value: GetProductsSummaryWorkersByProductRequest = {
  product: "stream",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `product`                                                                  | [models.ProductsBase](../../models/productsbase.md)                        | :heavy_check_mark:                                                         | Name of the Cribl product to get the count of Worker or Edge Nodes for.    |
| `filterExp`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Filter expression to evaluate against Nodes for inclusion in the response. |
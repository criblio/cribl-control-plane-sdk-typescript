# GetProductsWorkersByProductAndIdRequest

## Example Usage

```typescript
import { GetProductsWorkersByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetProductsWorkersByProductAndIdRequest = {
  product: "stream",
  id: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `product`                                                | [models.ProductsBase](../../models/productsbase.md)      | :heavy_check_mark:                                       | Name of the Cribl product that contains the Node.        |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | The <code>id</code> of the Node to get the metadata for. |
# DeleteConfigGroupByProductAndIdRequest

## Example Usage

```typescript
import { DeleteConfigGroupByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteConfigGroupByProductAndIdRequest = {
  product: "edge",
  id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `product`                                                              | [models.ProductsCore](../../models/productscore.md)                    | :heavy_check_mark:                                                     | Name of the Cribl product to get the Worker Groups or Edge Fleets for. |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The <code>id</code> of the Worker Group or Edge Fleet to delete.       |
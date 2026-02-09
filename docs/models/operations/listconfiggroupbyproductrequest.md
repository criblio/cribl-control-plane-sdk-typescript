# ListConfigGroupByProductRequest

## Example Usage

```typescript
import { ListConfigGroupByProductRequest } from "cribl-control-plane/models/operations";

let value: ListConfigGroupByProductRequest = {
  product: "edge",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `product`                                                                                                                                                                        | [models.ProductsCore](../../models/productscore.md)                                                                                                                              | :heavy_check_mark:                                                                                                                                                               | Name of the Cribl product to get the Worker Groups, Outpost Groups, or Edge Fleets for.                                                                                          |
| `fields`                                                                                                                                                                         | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | Comma-separated list of additional properties to include in the response. Available values are <code>git.commit</code>, <code>git.localChanges</code>, and <code>git.log</code>. |
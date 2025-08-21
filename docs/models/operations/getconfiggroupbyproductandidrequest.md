# GetConfigGroupByProductAndIdRequest

## Example Usage

```typescript
import { GetConfigGroupByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetConfigGroupByProductAndIdRequest = {
  product: "stream",
  id: "<id>",
  fields: "<value>",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `product`                                                                                                                                                                        | [models.ProductsCore](../../models/productscore.md)                                                                                                                              | :heavy_check_mark:                                                                                                                                                               | Name of the Cribl product to get the Worker Groups or Edge Fleets for.                                                                                                           |
| `id`                                                                                                                                                                             | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | The <code>id</code> of the Worker Group or Edge Fleet to get.                                                                                                                    |
| `fields`                                                                                                                                                                         | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | Comma-separated list of additional properties to include in the response. Available values are <code>git.commit</code>, <code>git.localChanges</code>, and <code>git.log</code>. |
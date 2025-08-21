# GetConfigGroupConfigVersionByProductAndIdRequest

## Example Usage

```typescript
import { GetConfigGroupConfigVersionByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetConfigGroupConfigVersionByProductAndIdRequest = {
  product: "stream",
  id: "<id>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `product`                                                                                   | [models.ProductsCore](../../models/productscore.md)                                         | :heavy_check_mark:                                                                          | Name of the Cribl product to get the Worker Groups or Edge Fleets for.                      |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | The <code>id</code> of the Worker Group or Edge Fleet to get the configuration version for. |
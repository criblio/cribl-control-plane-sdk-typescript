# ListConfigGroupByProductRequest

## Example Usage

```typescript
import { ListConfigGroupByProductRequest } from "cribl-control-plane/models/operations";

let value: ListConfigGroupByProductRequest = {
  fields: "<value>",
  product: "edge",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                                                         | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | Comma-separated list of additional properties to include in the response. Available values are <code>git.commit</code>, <code>git.localChanges</code>, and <code>git.log</code>. |
| `product`                                                                                                                                                                        | [operations.ListConfigGroupByProductProduct](../../models/operations/listconfiggroupbyproductproduct.md)                                                                         | :heavy_check_mark:                                                                                                                                                               | Name of the Cribl product to get the Worker Groups or Edge Fleets for.                                                                                                           |
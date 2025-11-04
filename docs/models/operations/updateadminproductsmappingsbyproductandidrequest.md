# UpdateAdminProductsMappingsByProductAndIdRequest

## Example Usage

```typescript
import { UpdateAdminProductsMappingsByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateAdminProductsMappingsByProductAndIdRequest = {
  product: "stream",
  id: "<id>",
  mappingRuleset: {
    id: "<id>",
    conf: {
      functions: [
        {
          id: "eval",
          description: "times scram hmph stitcher especially",
          disabled: true,
          final: true,
          conf: {},
          groupId: "<id>",
          name: "Eval",
          group: "Standard",
          schema: {
            add: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
            keep: [
              "<value 1>",
              "<value 2>",
            ],
            remove: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
          },
        },
      ],
    },
    active: true,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `product`                                                   | [models.ProductsCore](../../models/productscore.md)         | :heavy_check_mark:                                          | Name of the Cribl product to update the Mapping Ruleset for |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | The <code>id</code> of the Mapping Ruleset to update.       |
| `mappingRuleset`                                            | [models.MappingRuleset](../../models/mappingruleset.md)     | :heavy_check_mark:                                          | MappingRuleset object                                       |
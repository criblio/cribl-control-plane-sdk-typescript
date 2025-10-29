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
          filter: "!cribl.group",
          description: "Default Mappings",
          disabled: false,
          final: true,
          conf: {
            add: [
              {
                name: "<value>",
                value: "<value>",
              },
            ],
          },
        },
      ],
    },
    active: false,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `product`                                                   | [models.ProductsCore](../../models/productscore.md)         | :heavy_check_mark:                                          | Name of the Cribl product to update the Mapping Ruleset for |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | The <code>id</code> of the Mapping Ruleset to update.       |
| `mappingRuleset`                                            | [models.MappingRuleset](../../models/mappingruleset.md)     | :heavy_check_mark:                                          | MappingRuleset object                                       |
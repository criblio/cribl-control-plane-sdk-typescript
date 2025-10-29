# CreateAdminProductsMappingsByProductRequest

## Example Usage

```typescript
import { CreateAdminProductsMappingsByProductRequest } from "cribl-control-plane/models/operations";

let value: CreateAdminProductsMappingsByProductRequest = {
  product: "stream",
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
| `product`                                                   | [models.ProductsCore](../../models/productscore.md)         | :heavy_check_mark:                                          | Name of the Cribl product to create the Mapping Ruleset for |
| `mappingRuleset`                                            | [models.MappingRuleset](../../models/mappingruleset.md)     | :heavy_check_mark:                                          | MappingRuleset object                                       |
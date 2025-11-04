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
          description: "times scram hmph stitcher especially",
          disabled: true,
          final: true,
          conf: {
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
          groupId: "<id>",
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
| `product`                                                   | [models.ProductsCore](../../models/productscore.md)         | :heavy_check_mark:                                          | Name of the Cribl product to create the Mapping Ruleset for |
| `mappingRuleset`                                            | [models.MappingRuleset](../../models/mappingruleset.md)     | :heavy_check_mark:                                          | MappingRuleset object                                       |
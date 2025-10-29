# GetAdminProductsMappingsByProductResponse

a list of MappingRuleset objects

## Example Usage

```typescript
import { GetAdminProductsMappingsByProductResponse } from "cribl-control-plane/models/operations";

let value: GetAdminProductsMappingsByProductResponse = {
  count: 172312,
  items: [
    {
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
      active: true,
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `count`                                                   | *number*                                                  | :heavy_minus_sign:                                        | number of items present in the items array                |
| `items`                                                   | [models.MappingRuleset](../../models/mappingruleset.md)[] | :heavy_minus_sign:                                        | N/A                                                       |
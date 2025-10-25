# DeleteAdminProductsMappingsByProductAndIdResponse

A list containing the deleted Mapping Ruleset objects

## Example Usage

```typescript
import { DeleteAdminProductsMappingsByProductAndIdResponse } from "cribl-control-plane/models/operations";

let value: DeleteAdminProductsMappingsByProductAndIdResponse = {
  count: 967110,
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
                  name: "groupId",
                  value: "'default'",
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
# CreateAdminProductsMappingsByProductResponse

A list containing the newly created Mapping Ruleset objects

## Example Usage

```typescript
import { CreateAdminProductsMappingsByProductResponse } from "cribl-control-plane/models/operations";

let value: CreateAdminProductsMappingsByProductResponse = {
  count: 552168,
  items: [
    {
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
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `count`                                                   | *number*                                                  | :heavy_minus_sign:                                        | number of items present in the items array                |
| `items`                                                   | [models.MappingRuleset](../../models/mappingruleset.md)[] | :heavy_minus_sign:                                        | N/A                                                       |
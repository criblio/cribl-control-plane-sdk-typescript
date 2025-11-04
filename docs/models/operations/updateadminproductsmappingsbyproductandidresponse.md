# UpdateAdminProductsMappingsByProductAndIdResponse

A list containing the updated Mapping Ruleset objects

## Example Usage

```typescript
import { UpdateAdminProductsMappingsByProductAndIdResponse } from "cribl-control-plane/models/operations";

let value: UpdateAdminProductsMappingsByProductAndIdResponse = {
  count: 749705,
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
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `count`                                                   | *number*                                                  | :heavy_minus_sign:                                        | number of items present in the items array                |
| `items`                                                   | [models.MappingRuleset](../../models/mappingruleset.md)[] | :heavy_minus_sign:                                        | N/A                                                       |
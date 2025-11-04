# GetAdminProductsMappingsByProductAndIdResponse

a list of MappingRuleset objects

## Example Usage

```typescript
import { GetAdminProductsMappingsByProductAndIdResponse } from "cribl-control-plane/models/operations";

let value: GetAdminProductsMappingsByProductAndIdResponse = {
  count: 730397,
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
# MappingRuleset

## Example Usage

```typescript
import { MappingRuleset } from "cribl-control-plane/models";

let value: MappingRuleset = {
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
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `conf`                                                       | [models.MappingRulesetConf](../models/mappingrulesetconf.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `active`                                                     | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
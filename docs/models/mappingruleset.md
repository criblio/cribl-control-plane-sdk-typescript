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
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `conf`                                                       | [models.MappingRulesetConf](../models/mappingrulesetconf.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `active`                                                     | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
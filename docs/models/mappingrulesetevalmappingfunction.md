# MappingRulesetEvalMappingFunction

## Example Usage

```typescript
import { MappingRulesetEvalMappingFunction } from "cribl-control-plane/models";

let value: MappingRulesetEvalMappingFunction = {
  id: "eval",
  filter: "!cribl.group",
  description: "Default Mappings",
  disabled: false,
  final: false,
  conf: {
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | [models.Id](../models/id.md)                                                                       | :heavy_check_mark:                                                                                 | Unique function identifier.                                                                        |                                                                                                    |
| `filter`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Filter expression controlling when this function runs                                              | !cribl.group                                                                                       |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Optional function description                                                                      | Default Mappings                                                                                   |
| `disabled`                                                                                         | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Indicates whether the function is disabled                                                         |                                                                                                    |
| `final`                                                                                            | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `conf`                                                                                             | [models.MappingRulesetEvalMappingFunctionConf](../models/mappingrulesetevalmappingfunctionconf.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
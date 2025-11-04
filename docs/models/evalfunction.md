# EvalFunction

## Example Usage

```typescript
import { EvalFunction } from "cribl-control-plane/models";

let value: EvalFunction = {
  id: "eval",
  description: "dusk if shyly duh boldly defiantly vet qua",
  disabled: true,
  final: false,
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `filter`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | Filter that selects data to be fed through this Function                                       |
| `id`                                                                                           | [models.Id](../models/id.md)                                                                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Simple description of this step                                                                |
| `disabled`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | If true, data will not be pushed through this function                                         |
| `final`                                                                                        | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | If enabled, stops the results of this Function from being passed to the downstream Functions   |
| `conf`                                                                                         | [models.EvalFunctionFunctionSpecificConfigs](../models/evalfunctionfunctionspecificconfigs.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `groupId`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | Group ID                                                                                       |
| `name`                                                                                         | [models.Name](../models/name.md)                                                               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `group`                                                                                        | [models.Group](../models/group.md)                                                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `schema`                                                                                       | [models.EvalSchema](../models/evalschema.md)                                                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
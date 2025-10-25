# FunctionT

## Example Usage

```typescript
import { FunctionT } from "cribl-control-plane/models";

let value: FunctionT = {
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
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | [models.Id](../models/id.md)                                            | :heavy_check_mark:                                                      | Unique function identifier. Must always be 'eval'.                      |                                                                         |
| `filter`                                                                | *string*                                                                | :heavy_check_mark:                                                      | Filter expression controlling when this function runs                   | !cribl.group                                                            |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Optional function description                                           | Default Mappings                                                        |
| `disabled`                                                              | *boolean*                                                               | :heavy_minus_sign:                                                      | Indicates whether the function is disabled                              | false                                                                   |
| `final`                                                                 | *boolean*                                                               | :heavy_check_mark:                                                      | Marks whether this function is final in the chain. Must always be true. |                                                                         |
| `conf`                                                                  | [models.FunctionConf](../models/functionconf.md)                        | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
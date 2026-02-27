# FunctionT

## Example Usage

```typescript
import { FunctionT } from "cribl-control-plane/models";

let value: FunctionT = {
  id: "eval",
  disabled: true,
  final: true,
  conf: {
    add: [
      {
        name: "groupId",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *"eval"*                                 | :heavy_check_mark:                       | N/A                                      |
| `filter`                                 | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `disabled`                               | *boolean*                                | :heavy_check_mark:                       | N/A                                      |
| `final`                                  | *true*                                   | :heavy_check_mark:                       | N/A                                      |
| `description`                            | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `conf`                                   | [models.ConfEval](../models/confeval.md) | :heavy_check_mark:                       | N/A                                      |
| `additionalProperties`                   | Record<string, *any*>                    | :heavy_minus_sign:                       | N/A                                      |
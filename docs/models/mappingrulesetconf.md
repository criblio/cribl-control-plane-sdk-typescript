# MappingRulesetConf

## Example Usage

```typescript
import { MappingRulesetConf } from "cribl-control-plane/models";

let value: MappingRulesetConf = {
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
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `functions`                                        | [models.EvalFunction](../models/evalfunction.md)[] | :heavy_minus_sign:                                 | List of functions to pass data through             |
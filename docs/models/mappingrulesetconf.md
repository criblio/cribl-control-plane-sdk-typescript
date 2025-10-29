# MappingRulesetConf

## Example Usage

```typescript
import { MappingRulesetConf } from "cribl-control-plane/models";

let value: MappingRulesetConf = {
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
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `functions`                            | *models.FunctionT*[]                   | :heavy_minus_sign:                     | List of functions to pass data through |
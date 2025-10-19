# DatatypeOverrides

## Example Usage

```typescript
import { DatatypeOverrides } from "cribl-control-plane/models";

let value: DatatypeOverrides = {
  breakerRulesets: [
    {
      id: "<id>",
      description: "wherever card till legislature tough amend",
      tags: "<value>",
      rules: [
        {
          name: "<value>",
          timestamp: {
            format: "<value>",
          },
          fields: [
            {
              name: "<value>",
              value: "<value>",
            },
          ],
        },
      ],
    },
  ],
  disableBreakers: false,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `breakerRulesets`                                                | [models.EventBreakerRuleset](../models/eventbreakerruleset.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `disableBreakers`                                                | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
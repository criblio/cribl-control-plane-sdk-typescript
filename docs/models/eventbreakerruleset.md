# EventBreakerRuleset

## Example Usage

```typescript
import { EventBreakerRuleset } from "cribl-control-plane/models";

let value: EventBreakerRuleset = {
  id: "<id>",
  description: "for but by license meanwhile jovially",
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `lib`                                                                    | [models.Library](../models/library.md)                                   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `tags`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `minRawLength`                                                           | *number*                                                                 | :heavy_minus_sign:                                                       | The  minimum number of characters in _raw to determine which rule to use |
| `rules`                                                                  | [models.EventBreakerRulesetRule](../models/eventbreakerrulesetrule.md)[] | :heavy_minus_sign:                                                       | A list of rules that will be applied, in order, to the input data stream |
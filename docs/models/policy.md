# Policy

## Example Usage

```typescript
import { Policy } from "cribl-control-plane/models";

let value: Policy = {
  id: "<id>",
  waitToGroup: 8491.97,
  groupByLabels: [
    "<value 1>",
  ],
  conditions: [
    [
      {
        key: "<key>",
        operator: "!=",
        value: 4612.54,
      },
    ],
  ],
  templateTargetPairs: [
    {
      templateId: "<id>",
      targetId: "<id>",
    },
  ],
  order: 531.93,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Unique identifier for this policy                                                                                                  |
| `disabled`                                                                                                                         | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | If true, this policy will be skipped during evaluation                                                                             |
| `waitToGroup`                                                                                                                      | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Time to wait (in minutes) to group similar alerts before sending                                                                   |
| `groupByLabels`                                                                                                                    | *string*[]                                                                                                                         | :heavy_minus_sign:                                                                                                                 | Event fields to use for grouping                                                                                                   |
| `conditions`                                                                                                                       | [models.Condition](../models/condition.md)[][]                                                                                     | :heavy_minus_sign:                                                                                                                 | List of conditions. If ANY condition matches (OR), the policy applies. Each condition is a list of tags that must ALL match (AND). |
| `templateTargetPairs`                                                                                                              | [models.ItemsTypePoliciesItemsTemplateTargetPairs](../models/itemstypepoliciesitemstemplatetargetpairs.md)[]                       | :heavy_check_mark:                                                                                                                 | List of targets to route to and the templates to use                                                                               |
| `final`                                                                                                                            | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | If true, stop evaluating further policies after this one matches                                                                   |
| `order`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Evaluation order of this policy (lower numbers evaluated first)                                                                    |
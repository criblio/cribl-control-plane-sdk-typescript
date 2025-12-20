# PipelineFunctionNotificationPolicies

## Example Usage

```typescript
import { PipelineFunctionNotificationPolicies } from "cribl-control-plane/models";

let value: PipelineFunctionNotificationPolicies = {
  id: "notification_policies",
  description: "hm whenever prudent embalm stall excepting hm ack jet",
  disabled: true,
  final: true,
  conf: {
    policies: [
      {
        id: "<id>",
        waitToGroup: 8810.59,
        groupByLabels: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        conditions: [
          [
            {
              key: "<key>",
              operator: "!=",
              value: 4612.54,
            },
          ],
          [
            {
              key: "<key>",
              operator: "!=",
              value: 4612.54,
            },
          ],
          [],
        ],
        templateTargetPairs: [],
        order: 2760.74,
      },
    ],
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `filter`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Filter that selects data to be fed through this Function                                             |
| `id`                                                                                                 | *"notification_policies"*                                                                            | :heavy_check_mark:                                                                                   | Function ID                                                                                          |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Simple description of this step                                                                      |
| `disabled`                                                                                           | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | If true, data will not be pushed through this function                                               |
| `final`                                                                                              | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | If enabled, stops the results of this Function from being passed to the downstream Functions         |
| `conf`                                                                                               | [models.FunctionConfSchemaNotificationPolicies](../models/functionconfschemanotificationpolicies.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `groupId`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Group ID                                                                                             |
# PipelineFunctionNotificationPolicies

## Example Usage

```typescript
import { PipelineFunctionNotificationPolicies } from "cribl-control-plane/models";

let value: PipelineFunctionNotificationPolicies = {
  filter: "<value>",
  id: "notification_policies",
  description: "hm whenever prudent embalm stall excepting hm ack jet",
  disabled: true,
  final: true,
  conf: {
    policies: [
      {
        id: "<id>",
        disabled: false,
        waitToGroup: 8213.72,
        groupByLabels: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        conditions: [
          [],
          [],
          [],
        ],
        templateTargetPairs: [
          {
            templateId: "<id>",
            targetId: "<id>",
          },
        ],
        final: true,
        order: 4556.84,
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
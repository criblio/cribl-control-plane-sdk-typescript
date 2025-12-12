# FunctionNotificationPolicies

## Example Usage

```typescript
import { FunctionNotificationPolicies } from "cribl-control-plane/models";

let value: FunctionNotificationPolicies = {
  filename: "example.file",
  asyncTimeout: 963.15,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "notification_policies",
  loadTime: 7086.88,
  modTime: 7258.07,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    policies: [
      {
        id: "<id>",
        waitToGroup: 146.33,
        groupByLabels: [
          "<value 1>",
          "<value 2>",
        ],
        conditions: [
          [
            {
              key: "<key>",
              operator: "=~",
              value: false,
            },
          ],
          [],
        ],
        templateTargetPairs: [
          {
            templateId: "<id>",
            targetId: "<id>",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `filename`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `asyncTimeout`                                                                             | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `criblVersion`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `disabled`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `group`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `handleSignals`                                                                            | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *"notification_policies"*                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `loadTime`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `modTime`                                                                                  | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `sync`                                                                                     | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `uischema`                                                                                 | Record<string, *any*>                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `version`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `schema`                                                                                   | [models.NotificationPoliciesConfiguration](../models/notificationpoliciesconfiguration.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
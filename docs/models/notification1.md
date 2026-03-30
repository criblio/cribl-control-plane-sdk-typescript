# Notification1

## Example Usage

```typescript
import { Notification1 } from "cribl-control-plane/models";

let value: Notification1 = {
  mode: "direct",
  templateTargetPairs: [
    {
      templateId: "<id>",
      targetId: "<id>",
    },
  ],
  id: "<id>",
  condition: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                       | [models.NotificationMode1](../models/notificationmode1.md)                                                   | :heavy_check_mark:                                                                                           | Notification mode: direct or policy-based                                                                    |
| `templateTargetPairs`                                                                                        | [models.ItemsTypePoliciesItemsTemplateTargetPairs](../models/itemstypepoliciesitemstemplatetargetpairs.md)[] | :heavy_check_mark:                                                                                           | Pairs of templates and targets for notification routing                                                      |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `disabled`                                                                                                   | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `condition`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `targets`                                                                                                    | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | Targets to send any Notifications to                                                                         |
| `targetConfigs`                                                                                              | *models.TargetConfigUnion1*[]                                                                                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `conf`                                                                                                       | [models.ConditionSpecificConfigs1](../models/conditionspecificconfigs1.md)                                   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `metadata`                                                                                                   | [models.ItemsTypeMetadata](../models/itemstypemetadata.md)[]                                                 | :heavy_minus_sign:                                                                                           | Fields to add to events from this input                                                                      |
| `group`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The worker group/fleet this notification belongs to                                                          |
| `pack`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The pack this notification belongs to                                                                        |
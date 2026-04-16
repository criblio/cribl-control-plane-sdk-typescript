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

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                            | [models.NotificationMode1](../models/notificationmode1.md)                                                        | :heavy_check_mark:                                                                                                | Notification mode: direct or policy-based                                                                         |
| `templateTargetPairs`                                                                                             | [models.ItemsTypePoliciesItemsTemplateTargetPairs](../models/itemstypepoliciesitemstemplatetargetpairs.md)[]      | :heavy_check_mark:                                                                                                | Pairs of templates and targets for notification routing                                                           |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Unique identifier for the Notification.                                                                           |
| `disabled`                                                                                                        | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | If true, the Notification is disabled and the specified condition will not trigger it.                            |
| `condition`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The condition that triggers the Notification.                                                                     |
| `targets`                                                                                                         | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | List of the IDs for the Notification targets to send the Notification to.                                         |
| `targetConfigs`                                                                                                   | *models.TargetConfigUnion1*[]                                                                                     | :heavy_minus_sign:                                                                                                | Override settings to apply for each referenced Notification target.                                               |
| `conf`                                                                                                            | [models.ConditionSpecificConfigurations1](../models/conditionspecificconfigurations1.md)                          | :heavy_minus_sign:                                                                                                | Configuration for the condition that triggers the Notification. Supported fields vary depending on the condition. |
| `metadata`                                                                                                        | [models.ItemsTypeMetadata](../models/itemstypemetadata.md)[]                                                      | :heavy_minus_sign:                                                                                                | Fields to add to events from this input                                                                           |
| `group`                                                                                                           | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The worker group/fleet this notification belongs to                                                               |
| `pack`                                                                                                            | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The pack this notification belongs to                                                                             |
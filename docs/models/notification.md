# Notification

## Example Usage

```typescript
import { Notification } from "cribl-control-plane/models";

let value: Notification = {
  condition: "<value>",
  conf: {
    "key": "<value>",
  },
  id: "<id>",
  targetDetails: [
    {
      id: "<id>",
      type: "smtp",
    },
  ],
  targets: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `condition`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Expression that triggers the notification.                                             |
| `conf`                                                                                 | Record<string, *any*>                                                                  | :heavy_check_mark:                                                                     | Condition-specific configs.                                                            |
| `disabled`                                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Disable the notification.                                                              |
| `group`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | Worker group or context.                                                               |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `metadata`                                                                             | [models.MetadataItem](../models/metadataitem.md)[]                                     | :heavy_minus_sign:                                                                     | Metadata fields.                                                                       |
| `mode`                                                                                 | [models.NotificationMode](../models/notificationmode.md)                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `targetConfigs`                                                                        | [models.NotificationTargetConfig](../models/notificationtargetconfig.md)[]             | :heavy_minus_sign:                                                                     | Target configuration.                                                                  |
| `targetDetails`                                                                        | [models.NotificationTargetDetails](../models/notificationtargetdetails.md)[]           | :heavy_minus_sign:                                                                     | Target details.                                                                        |
| `targets`                                                                              | *string*[]                                                                             | :heavy_check_mark:                                                                     | Notification targets.                                                                  |
| `templateTargetPairs`                                                                  | [models.NotificationTemplateTargetPair](../models/notificationtemplatetargetpair.md)[] | :heavy_minus_sign:                                                                     | Template and target pairs for routing.                                                 |
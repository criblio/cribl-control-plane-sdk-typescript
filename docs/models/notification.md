# Notification

## Example Usage

```typescript
import { Notification } from "cribl-control-plane/models";

let value: Notification = {
  id: "<id>",
  condition: "<value>",
  targets: [
    "<value 1>",
    "<value 2>",
  ],
  targetConfigs: [
    {
      conf: {
        subject: "<value>",
        body: "<value>",
        emailRecipient: {
          to: "<value>",
          cc: "<value>",
          bcc: "<value>",
        },
      },
      id: "<id>",
    },
  ],
  conf: {},
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `disabled`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `condition`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `targets`                                                                | *string*[]                                                               | :heavy_minus_sign:                                                       | Targets to send any Notifications to                                     |
| `targetConfigs`                                                          | *models.TargetConfigUnion*[]                                             | :heavy_minus_sign:                                                       | N/A                                                                      |
| `conf`                                                                   | [models.ConditionSpecificConfigs](../models/conditionspecificconfigs.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `metadata`                                                               | [models.NotificationMetadatum](../models/notificationmetadatum.md)[]     | :heavy_minus_sign:                                                       | Fields to add to events from this input                                  |
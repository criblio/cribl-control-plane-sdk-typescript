# NotificationTargetConfig

## Example Usage

```typescript
import { NotificationTargetConfig } from "cribl-control-plane/models";

let value: NotificationTargetConfig = {
  id: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `conf`                                                                           | [models.NotificationSmtpTargetConfig](../models/notificationsmtptargetconfig.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | ID of the notification target.                                                   |
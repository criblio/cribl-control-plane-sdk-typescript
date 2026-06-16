# TargetConfig1

## Example Usage

```typescript
import { TargetConfig1 } from "cribl-control-plane/models";

let value: TargetConfig1 = {
  id: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `conf`                                                                                   | [models.NotificationConfigForSMTPTarget1](../models/notificationconfigforsmtptarget1.md) | :heavy_minus_sign:                                                                       | Simple Mail Transfer Protocol (SMTP) configuration for the Notification target.          |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | The <code>id</code> of the Notification target.                                          |
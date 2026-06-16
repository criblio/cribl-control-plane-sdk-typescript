# TargetConfig2

## Example Usage

```typescript
import { TargetConfig2 } from "cribl-control-plane/models";

let value: TargetConfig2 = {
  id: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `conf`                                                                                   | [models.NotificationConfigForSMTPTarget2](../models/notificationconfigforsmtptarget2.md) | :heavy_minus_sign:                                                                       | Simple Mail Transfer Protocol (SMTP) configuration for the Notification target.          |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | The <code>id</code> of the Notification target.                                          |
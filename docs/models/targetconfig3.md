# TargetConfig3

## Example Usage

```typescript
import { TargetConfig3 } from "cribl-control-plane/models";

let value: TargetConfig3 = {
  id: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `conf`                                                                                   | [models.NotificationConfigForSMTPTarget3](../models/notificationconfigforsmtptarget3.md) | :heavy_minus_sign:                                                                       | Simple Mail Transfer Protocol (SMTP) configuration for the Notification target.          |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | The <code>id</code> of the Notification target.                                          |
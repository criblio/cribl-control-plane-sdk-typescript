# TargetConfig

## Example Usage

```typescript
import { TargetConfig } from "cribl-control-plane/models";

let value: TargetConfig = {
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `conf`                                                                                 | [models.NotificationConfigForSMTPTarget](../models/notificationconfigforsmtptarget.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
# NotificationSmtpTargetConfig

## Example Usage

```typescript
import { NotificationSmtpTargetConfig } from "cribl-control-plane/models";

let value: NotificationSmtpTargetConfig = {
  emailRecipient: {
    to: "<value>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `body`                                               | *string*                                             | :heavy_minus_sign:                                   | Email body.                                          |
| `emailRecipient`                                     | [models.EmailRecipient](../models/emailrecipient.md) | :heavy_check_mark:                                   | N/A                                                  |
| `subject`                                            | *string*                                             | :heavy_minus_sign:                                   | Email subject.                                       |
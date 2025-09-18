# NotificationConfigForSMTPTarget

## Example Usage

```typescript
import { NotificationConfigForSMTPTarget } from "cribl-control-plane/models";

let value: NotificationConfigForSMTPTarget = {
  subject: "<value>",
  body: "<value>",
  emailRecipient: {
    to: "<value>",
    cc: "<value>",
    bcc: "<value>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `subject`                                            | *string*                                             | :heavy_minus_sign:                                   | Email subject                                        |
| `body`                                               | *string*                                             | :heavy_minus_sign:                                   | Email body                                           |
| `emailRecipient`                                     | [models.EmailRecipient](../models/emailrecipient.md) | :heavy_minus_sign:                                   | N/A                                                  |
# NotificationConfigForSMTPTarget3

Simple Mail Transfer Protocol (SMTP) configuration for the Notification target.

## Example Usage

```typescript
import { NotificationConfigForSMTPTarget3 } from "cribl-control-plane/models";

let value: NotificationConfigForSMTPTarget3 = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `subject`                                              | *string*                                               | :heavy_minus_sign:                                     | Email subject                                          |
| `body`                                                 | *string*                                               | :heavy_minus_sign:                                     | Email body                                             |
| `emailRecipient`                                       | [models.EmailRecipient3](../models/emailrecipient3.md) | :heavy_minus_sign:                                     | Email recipient settings for the Notification target.  |
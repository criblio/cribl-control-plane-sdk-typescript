# NotificationConfigForSMTPTarget2

Simple Mail Transfer Protocol (SMTP) configuration for the Notification target.

## Example Usage

```typescript
import { NotificationConfigForSMTPTarget2 } from "cribl-control-plane/models";

let value: NotificationConfigForSMTPTarget2 = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `subject`                                              | *string*                                               | :heavy_minus_sign:                                     | Email subject                                          |
| `body`                                                 | *string*                                               | :heavy_minus_sign:                                     | Email body                                             |
| `emailRecipient`                                       | [models.EmailRecipient2](../models/emailrecipient2.md) | :heavy_minus_sign:                                     | Email recipient settings for the Notification target.  |
# EmailRecipient3

Email recipient settings for the Notification target.

## Example Usage

```typescript
import { EmailRecipient3 } from "cribl-control-plane/models";

let value: EmailRecipient3 = {
  to: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `to`                             | *string*                         | :heavy_check_mark:               | Recipients' email addresses      |
| `cc`                             | *string*                         | :heavy_minus_sign:               | Cc: Recipients' email addresses  |
| `bcc`                            | *string*                         | :heavy_minus_sign:               | Bcc: Recipients' email addresses |
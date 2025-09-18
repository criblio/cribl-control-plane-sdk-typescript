# EmailRecipient

## Example Usage

```typescript
import { EmailRecipient } from "cribl-control-plane/models";

let value: EmailRecipient = {
  to: "<value>",
  cc: "<value>",
  bcc: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `to`                             | *string*                         | :heavy_check_mark:               | Recipients' email addresses      |
| `cc`                             | *string*                         | :heavy_minus_sign:               | Cc: Recipients' email addresses  |
| `bcc`                            | *string*                         | :heavy_minus_sign:               | Bcc: Recipients' email addresses |
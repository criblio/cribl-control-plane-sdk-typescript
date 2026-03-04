# EmailRecipient

## Example Usage

```typescript
import { EmailRecipient } from "cribl-control-plane/models";

let value: EmailRecipient = {
  to: "<value>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `bcc`                      | *string*                   | :heavy_minus_sign:         | Bcc email addresses.       |
| `cc`                       | *string*                   | :heavy_minus_sign:         | Cc email addresses.        |
| `to`                       | *string*                   | :heavy_check_mark:         | Recipient email addresses. |
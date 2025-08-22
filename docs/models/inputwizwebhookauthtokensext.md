# InputWizWebhookAuthTokensExt

## Example Usage

```typescript
import { InputWizWebhookAuthTokensExt } from "cribl-control-plane/models";

let value: InputWizWebhookAuthTokensExt = {
  token: "<value>",
  description:
    "operating ski retool disadvantage except term instead from adventurously",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `token`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | Shared secret to be provided by any client (Authorization: <token>)                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | [models.InputWizWebhookAuthTokensExtMetadatum](../models/inputwizwebhookauthtokensextmetadatum.md)[] | :heavy_minus_sign:                                                                                   | Fields to add to events referencing this token                                                       |
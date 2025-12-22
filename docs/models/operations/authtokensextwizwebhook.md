# AuthTokensExtWizWebhook

## Example Usage

```typescript
import { AuthTokensExtWizWebhook } from "cribl-control-plane/models/operations";

let value: AuthTokensExtWizWebhook = {
  token: "<value>",
  description: "lest in upliftingly",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Shared secret to be provided by any client (Authorization: <token>)                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `metadata`                                                                                                   | [operations.AuthTokensExtMetadatumWizWebhook](../../models/operations/authtokensextmetadatumwizwebhook.md)[] | :heavy_minus_sign:                                                                                           | Fields to add to events referencing this token                                                               |
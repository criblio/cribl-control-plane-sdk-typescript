# AuthTokenSplunkHec

## Example Usage

```typescript
import { AuthTokenSplunkHec } from "cribl-control-plane/models/operations";

let value: AuthTokenSplunkHec = {
  authType: "manual",
  tokenSecret: "<value>",
  token: "<value>",
  enabled: false,
  description: "quixotic bell modulo",
  allowedIndexesAtToken: [
    "<value 1>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `authType`                                                                                                                               | [models.AuthenticationMethodOptionsAuthTokensItems](../../models/authenticationmethodoptionsauthtokensitems.md)                          | :heavy_minus_sign:                                                                                                                       | Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate                                     |
| `tokenSecret`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Select or create a stored text secret                                                                                                    |
| `token`                                                                                                                                  | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Shared secret to be provided by any client (Authorization: <token>)                                                                      |
| `enabled`                                                                                                                                | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Optional token description                                                                                                               |
| `allowedIndexesAtToken`                                                                                                                  | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | Enter the values you want to allow in the HEC event index field at the token level. Supports wildcards. To skip validation, leave blank. |
| `metadata`                                                                                                                               | [models.ItemsTypeNotificationMetadata](../../models/itemstypenotificationmetadata.md)[]                                                  | :heavy_minus_sign:                                                                                                                       | Fields to add to events referencing this token                                                                                           |
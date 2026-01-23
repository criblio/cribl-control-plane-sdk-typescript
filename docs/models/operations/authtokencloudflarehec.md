# AuthTokenCloudflareHec

## Example Usage

```typescript
import { AuthTokenCloudflareHec } from "cribl-control-plane/models/operations";

let value: AuthTokenCloudflareHec = {
  authType: "secret",
  tokenSecret: "<value>",
  token: "<value>",
  enabled: false,
  description: "question woot joyously haunting wrongly while",
  allowedIndexesAtToken: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
| `authType`                                                                                                                               | [operations.AuthTokenAuthenticationMethod](../../models/operations/authtokenauthenticationmethod.md)                                     | :heavy_minus_sign:                                                                                                                       | Select Secret to use a text secret to authenticate                                                                                       |
| `tokenSecret`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Select or create a stored text secret                                                                                                    |
| `token`                                                                                                                                  | *any*                                                                                                                                    | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `enabled`                                                                                                                                | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `allowedIndexesAtToken`                                                                                                                  | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | Enter the values you want to allow in the HEC event index field at the token level. Supports wildcards. To skip validation, leave blank. |
| `metadata`                                                                                                                               | [models.ItemsTypeNotificationMetadata](../../models/itemstypenotificationmetadata.md)[]                                                  | :heavy_minus_sign:                                                                                                                       | Fields to add to events referencing this token                                                                                           |
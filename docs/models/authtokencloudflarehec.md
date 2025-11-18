# AuthTokenCloudflareHec

## Example Usage

```typescript
import { AuthTokenCloudflareHec } from "cribl-control-plane/models";

let value: AuthTokenCloudflareHec = {
  tokenSecret: "<value>",
  token: "<value>",
  description: "junior before lovingly oof far neatly duh geez",
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
| `authType`                                                                                                                               | [models.AuthenticationMethodCloudflareHec](../models/authenticationmethodcloudflarehec.md)                                               | :heavy_minus_sign:                                                                                                                       | Select Secret to use a text secret to authenticate                                                                                       |
| `tokenSecret`                                                                                                                            | *any*                                                                                                                                    | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `token`                                                                                                                                  | *any*                                                                                                                                    | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `enabled`                                                                                                                                | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `allowedIndexesAtToken`                                                                                                                  | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | Enter the values you want to allow in the HEC event index field at the token level. Supports wildcards. To skip validation, leave blank. |
| `metadata`                                                                                                                               | [models.AuthTokenMetadatumCloudflareHec](../models/authtokenmetadatumcloudflarehec.md)[]                                                 | :heavy_minus_sign:                                                                                                                       | Fields to add to events referencing this token                                                                                           |
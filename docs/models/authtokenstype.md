# AuthTokensType

## Example Usage

```typescript
import { AuthTokensType } from "cribl-control-plane/models";

let value: AuthTokensType = {
  tokenSecret: "<value>",
  token: "<value>",
  description:
    "exaggerate but mysteriously thoughtfully abaft reproachfully squid handle",
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
| `authType`                                                                                                                               | [models.AuthTokensTypeAuthenticationMethod](../models/authtokenstypeauthenticationmethod.md)                                             | :heavy_minus_sign:                                                                                                                       | Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate                                     |
| `tokenSecret`                                                                                                                            | *any*                                                                                                                                    | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `token`                                                                                                                                  | *any*                                                                                                                                    | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `enabled`                                                                                                                                | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Optional token description                                                                                                               |
| `allowedIndexesAtToken`                                                                                                                  | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | Enter the values you want to allow in the HEC event index field at the token level. Supports wildcards. To skip validation, leave blank. |
| `metadata`                                                                                                                               | [models.AuthTokensTypeMetadatum](../models/authtokenstypemetadatum.md)[]                                                                 | :heavy_minus_sign:                                                                                                                       | Fields to add to events referencing this token                                                                                           |
# AuthTokenZscalerHec

## Example Usage

```typescript
import { AuthTokenZscalerHec } from "cribl-control-plane/models/operations";

let value: AuthTokenZscalerHec = {
  tokenSecret: "<value>",
  token: "<value>",
  description: "eek gah quaintly yet skean",
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
| `authType`                                                                                                                               | [operations.AuthenticationMethodZscalerHec](../../models/operations/authenticationmethodzscalerhec.md)                                   | :heavy_minus_sign:                                                                                                                       | Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate                                     |
| `tokenSecret`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Select or create a stored text secret                                                                                                    |
| `token`                                                                                                                                  | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Shared secret to be provided by any client (Authorization: <token>)                                                                      |
| `enabled`                                                                                                                                | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `allowedIndexesAtToken`                                                                                                                  | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | Enter the values you want to allow in the HEC event index field at the token level. Supports wildcards. To skip validation, leave blank. |
| `metadata`                                                                                                                               | [operations.AuthTokenMetadatumZscalerHec](../../models/operations/authtokenmetadatumzscalerhec.md)[]                                     | :heavy_minus_sign:                                                                                                                       | Fields to add to events referencing this token                                                                                           |
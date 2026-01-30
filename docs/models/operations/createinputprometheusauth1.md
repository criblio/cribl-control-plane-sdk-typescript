# CreateInputPrometheusAuth1

## Example Usage

```typescript
import { CreateInputPrometheusAuth1 } from "cribl-control-plane/models/operations";

let value: CreateInputPrometheusAuth1 = {
  authType: "token",
  username: "Antwan_Aufderhar",
  password: "vmXWKTYLmEgVr5O",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `authType`                                                                                                | [models.AuthenticationTypeOptionsPrometheusAuth](../../models/authenticationtypeoptionsprometheusauth.md) | :heavy_minus_sign:                                                                                        | Remote Write authentication type                                                                          |
| `username`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `password`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `token`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Bearer token to include in the authorization header                                                       |
| `credentialsSecret`                                                                                       | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Select or create a secret that references your credentials                                                |
| `textSecret`                                                                                              | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Select or create a stored text secret                                                                     |
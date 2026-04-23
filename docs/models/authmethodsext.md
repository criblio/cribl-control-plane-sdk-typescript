# AuthMethodsExt

## Example Usage

```typescript
import { AuthMethodsExt } from "cribl-control-plane/models";

let value: AuthMethodsExt = {
  authType: "tokenSecret",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `authType`                                                                               | [models.AuthMethodsExtAuthenticationType](../models/authmethodsextauthenticationtype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `token`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | Bearer token for Authorization header                                                    |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `metadata`                                                                               | [models.ItemsTypeMetadata](../models/itemstypemetadata.md)[]                             | :heavy_minus_sign:                                                                       | Fields to add to events referencing this auth method                                     |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `tokenSecret`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | Select or create a stored text secret                                                    |
| `username`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `password`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `credentialsSecret`                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | Select or create a secret that references your credentials                               |
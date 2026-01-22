# LokiAuth1

## Example Usage

```typescript
import { LokiAuth1 } from "cribl-control-plane/models";

let value: LokiAuth1 = {
  authType: "token",
  username: "Hugh_Jacobson95",
  password: "SMhOA6atBQiPetm",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `authType`                                                                                 | [models.AuthenticationTypeOptionsLokiAuth](../models/authenticationtypeoptionslokiauth.md) | :heavy_minus_sign:                                                                         | Loki logs authentication type                                                              |
| `username`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `password`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `token`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | Bearer token to include in the authorization header                                        |
| `credentialsSecret`                                                                        | *string*                                                                                   | :heavy_minus_sign:                                                                         | Select or create a secret that references your credentials                                 |
| `textSecret`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | Select or create a stored text secret                                                      |
# AuthTypeAuthTypeCredentialsSecret

## Example Usage

```typescript
import { AuthTypeAuthTypeCredentialsSecret } from "cribl-control-plane/models";

let value: AuthTypeAuthTypeCredentialsSecret = {
  disabled: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `disabled`                                                                             | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `username`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `password`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `authType`                                                                             | [models.AuthenticationMethodOptionsAuth](../models/authenticationmethodoptionsauth.md) | :heavy_minus_sign:                                                                     | Enter credentials directly, or select a stored secret                                  |
| `credentialsSecret`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | Select or create a secret that references your credentials                             |
| `manualAPIKey`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | Enter API key directly                                                                 |
| `textSecret`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Select or create a stored text secret                                                  |
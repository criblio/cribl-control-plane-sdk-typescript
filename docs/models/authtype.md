# AuthType

## Example Usage

```typescript
import { AuthType } from "cribl-control-plane/models";

let value: AuthType = {
  disabled: true,
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
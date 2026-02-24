# CreateInputSystemByPackLokiAuth2

## Example Usage

```typescript
import { CreateInputSystemByPackLokiAuth2 } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackLokiAuth2 = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `authType`                                                                                    | [models.AuthenticationTypeOptionsLokiAuth](../../models/authenticationtypeoptionslokiauth.md) | :heavy_minus_sign:                                                                            | Loki logs authentication type                                                                 |
| `username`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `password`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `token`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Bearer token to include in the authorization header                                           |
| `credentialsSecret`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | Select or create a secret that references your credentials                                    |
| `textSecret`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Select or create a stored text secret                                                         |
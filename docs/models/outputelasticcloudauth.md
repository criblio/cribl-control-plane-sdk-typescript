# OutputElasticCloudAuth

## Example Usage

```typescript
import { OutputElasticCloudAuth } from "cribl-control-plane/models";

let value: OutputElasticCloudAuth = {
  username: "Lizeth82",
  password: "AIAG8xRpz8NiY8F",
  credentialsSecret: "<value>",
  manualAPIKey: "<value>",
  textSecret: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `disabled`                                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `username`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `password`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `authType`                                                                             | [models.AuthenticationMethodOptionsAuth](../models/authenticationmethodoptionsauth.md) | :heavy_minus_sign:                                                                     | Enter credentials directly, or select a stored secret                                  |
| `credentialsSecret`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | Select or create a secret that references your credentials                             |
| `manualAPIKey`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | Enter API key directly                                                                 |
| `textSecret`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Select or create a stored text secret                                                  |
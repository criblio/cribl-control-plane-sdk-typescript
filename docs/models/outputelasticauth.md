# OutputElasticAuth

## Example Usage

```typescript
import { OutputElasticAuth } from "cribl-control-plane/models";

let value: OutputElasticAuth = {
  username: "Nedra_Goldner63",
  password: "mSADLRzzSr7_Ts6",
  credentialsSecret: "<value>",
  manualAPIKey: "<value>",
  textSecret: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `disabled`                                                                                 | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `username`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `password`                                                                                 | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `authType`                                                                                 | [models.OutputElasticAuthenticationMethod](../models/outputelasticauthenticationmethod.md) | :heavy_minus_sign:                                                                         | Enter credentials directly, or select a stored secret                                      |
| `credentialsSecret`                                                                        | *string*                                                                                   | :heavy_minus_sign:                                                                         | Select or create a secret that references your credentials                                 |
| `manualAPIKey`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | Enter API key directly                                                                     |
| `textSecret`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | Select or create a stored text secret                                                      |
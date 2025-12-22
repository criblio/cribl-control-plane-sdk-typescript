# CreateInputAuthenticationConfluentCloud

Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.

## Example Usage

```typescript
import { CreateInputAuthenticationConfluentCloud } from "cribl-control-plane/models/operations";

let value: CreateInputAuthenticationConfluentCloud = {
  username: "Corine54",
  password: "YHFtUFiIzJ28wCA",
  credentialsSecret: "<value>",
  keytabLocation: "<value>",
  principal: "<value>",
  brokerServiceClass: "<value>",
  tokenUrl: "https://cheerful-jump.net/",
  clientId: "<id>",
  clientTextSecret: "<value>",
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  saslExtensions: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `disabled`                                                                                                                           | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `username`                                                                                                                           | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `password`                                                                                                                           | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `authType`                                                                                                                           | [operations.CreateInputAuthenticationMethodConfluentCloud](../../models/operations/createinputauthenticationmethodconfluentcloud.md) | :heavy_minus_sign:                                                                                                                   | Enter credentials directly, or select a stored secret                                                                                |
| `credentialsSecret`                                                                                                                  | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Select or create a secret that references your credentials                                                                           |
| `mechanism`                                                                                                                          | [operations.CreateInputSASLMechanismConfluentCloud](../../models/operations/createinputsaslmechanismconfluentcloud.md)               | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `keytabLocation`                                                                                                                     | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Location of keytab file for authentication principal                                                                                 |
| `principal`                                                                                                                          | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Authentication principal, such as `kafka_user@example.com`                                                                           |
| `brokerServiceClass`                                                                                                                 | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Kerberos service class for Kafka brokers, such as `kafka`                                                                            |
| `oauthEnabled`                                                                                                                       | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | Enable OAuth authentication                                                                                                          |
| `tokenUrl`                                                                                                                           | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | URL of the token endpoint to use for OAuth authentication                                                                            |
| `clientId`                                                                                                                           | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Client ID to use for OAuth authentication                                                                                            |
| `oauthSecretType`                                                                                                                    | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `clientTextSecret`                                                                                                                   | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Select or create a stored text secret                                                                                                |
| `oauthParams`                                                                                                                        | [operations.CreateInputOauthParamConfluentCloud](../../models/operations/createinputoauthparamconfluentcloud.md)[]                   | :heavy_minus_sign:                                                                                                                   | Additional fields to send to the token endpoint, such as scope or audience                                                           |
| `saslExtensions`                                                                                                                     | [operations.CreateInputSaslExtensionConfluentCloud](../../models/operations/createinputsaslextensionconfluentcloud.md)[]             | :heavy_minus_sign:                                                                                                                   | Additional SASL extension fields, such as Confluent's logicalCluster or identityPoolId                                               |
# InputSplunkHecTLSSettingsServerSide

## Example Usage

```typescript
import { InputSplunkHecTLSSettingsServerSide } from "cribl-control-plane/models";

let value: InputSplunkHecTLSSettingsServerSide = {
  certificateName: "<value>",
  privKeyPath: "<value>",
  passphrase: "<value>",
  certPath: "<value>",
  caPath: "<value>",
  rejectUnauthorized: "<value>",
  commonNameRegex: "<value>",
  minVersion: "TLSv1.3",
  maxVersion: "TLSv1.3",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                            | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `certificateName`                                                                                     | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The name of the predefined certificate                                                                |
| `privKeyPath`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Path on server containing the private key to use. PEM format. Can reference $ENV_VARS.                |
| `passphrase`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Passphrase to use to decrypt private key                                                              |
| `certPath`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Path on server containing certificates to use. PEM format. Can reference $ENV_VARS.                   |
| `caPath`                                                                                              | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Path on server containing CA certificates to use. PEM format. Can reference $ENV_VARS.                |
| `requestCert`                                                                                         | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Require clients to present their certificates. Used to perform client authentication using SSL certs. |
| `rejectUnauthorized`                                                                                  | *any*                                                                                                 | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `commonNameRegex`                                                                                     | *any*                                                                                                 | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `minVersion`                                                                                          | [models.InputSplunkHecMinimumTLSVersion](../models/inputsplunkhecminimumtlsversion.md)                | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `maxVersion`                                                                                          | [models.InputSplunkHecMaximumTLSVersion](../models/inputsplunkhecmaximumtlsversion.md)                | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
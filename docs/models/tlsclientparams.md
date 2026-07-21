# TLSClientParams

TLS client connection settings.

## Example Usage

```typescript
import { TLSClientParams } from "cribl-control-plane/models";

let value: TLSClientParams = {
  disabled: true,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `caPath`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | Path to the Certificate Authority (CA) certificate file in PEM format.                |
| `certPath`                                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | Path to the client certificate file in PEM format.                                    |
| `certificateName`                                                                     | *string*                                                                              | :heavy_minus_sign:                                                                    | Name of a certificate stored in Cribl.                                                |
| `disabled`                                                                            | *boolean*                                                                             | :heavy_check_mark:                                                                    | If <code>true</code>, TLS is disabled for the connection.                             |
| `maxVersion`                                                                          | [models.SecureVersion](../models/secureversion.md)                                    | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `minVersion`                                                                          | [models.SecureVersion](../models/secureversion.md)                                    | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `passphrase`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | Passphrase for the private key.                                                       |
| `privKeyPath`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | Path to the private key file in PEM format.                                           |
| `rejectUnauthorized`                                                                  | *boolean*                                                                             | :heavy_minus_sign:                                                                    | If <code>true</code>, reject connections to servers with unverified TLS certificates. |
| `servername`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | Server name for TLS Server Name Indication (SNI) extension.                           |
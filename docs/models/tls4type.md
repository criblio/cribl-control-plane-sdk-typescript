# Tls4Type

## Example Usage

```typescript
import { Tls4Type } from "cribl-control-plane/models";

let value: Tls4Type = {
  servername: "<value>",
  certificateName: "<value>",
  caPath: "<value>",
  privKeyPath: "<value>",
  certPath: "<value>",
  passphrase: "<value>",
  minVersion: "TLSv1.3",
  maxVersion: "TLSv1.2",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                        | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `servername`                                                                                                      | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Server name for the SNI (Server Name Indication) TLS extension. It must be a host name, and not an IP address.    |
| `certificateName`                                                                                                 | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The name of the predefined certificate                                                                            |
| `caPath`                                                                                                          | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Path on client in which to find CA certificates to verify the server's cert. PEM format. Can reference $ENV_VARS. |
| `privKeyPath`                                                                                                     | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Path on client in which to find the private key to use. PEM format. Can reference $ENV_VARS.                      |
| `certPath`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Path on client in which to find certificates to use. PEM format. Can reference $ENV_VARS.                         |
| `passphrase`                                                                                                      | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Passphrase to use to decrypt private key                                                                          |
| `minVersion`                                                                                                      | [models.Tls4TypeMinimumTLSVersion](../models/tls4typeminimumtlsversion.md)                                        | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `maxVersion`                                                                                                      | [models.Tls4TypeMaximumTLSVersion](../models/tls4typemaximumtlsversion.md)                                        | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
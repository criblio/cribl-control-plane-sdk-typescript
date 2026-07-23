# SslTypeSystemSettingsConfApi

TLS configuration for the API server.

## Example Usage

```typescript
import { SslTypeSystemSettingsConfApi } from "cribl-control-plane/models";

let value: SslTypeSystemSettingsConfApi = {
  certPath: "<value>",
  disabled: false,
  passphrase: "<value>",
  privKeyPath: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `caPath`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Filesystem path to the PEM-encoded Certificate Authority (CA) certificate for client authentication. |
| `certPath`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Filesystem path to the PEM-encoded TLS certificate.                                                  |
| `disabled`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | If <code>true</code>, TLS is disabled for the API server. Otherwise, <code>false</code>.             |
| `passphrase`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | Passphrase to decrypt the TLS private key, if encrypted.                                             |
| `privKeyPath`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | Filesystem path to the PEM-encoded TLS private key.                                                  |
# CertOptions

## Example Usage

```typescript
import { CertOptions } from "cribl-control-plane/models";

let value: CertOptions = {
  privKeyPath: "<value>",
  certPath: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `certificateName`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the predefined certificate.                                                       |
| `privKeyPath`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Path to the private key to use. Key should be in PEM format. Can reference $ENV_VARS.         |
| `passphrase`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Passphrase to use to decrypt the private key.                                                 |
| `certPath`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Path to the certificate to use. Certificate should be in PEM format. Can reference $ENV_VARS. |
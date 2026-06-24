# InputEventhubAmqpCertificate

## Example Usage

```typescript
import { InputEventhubAmqpCertificate } from "cribl-control-plane/models";

let value: InputEventhubAmqpCertificate = {
  certificateName: "<value>",
  certPath: "<value>",
  privKeyPath: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `certificateName`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | The certificate you registered as credentials for your app in the Azure portal         |
| `certPath`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | Path on server containing certificates to use. PEM format. Can reference $ENV_VARS.    |
| `privKeyPath`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Path on server containing the private key to use. PEM format. Can reference $ENV_VARS. |
| `passphrase`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Passphrase to use to decrypt private key                                               |
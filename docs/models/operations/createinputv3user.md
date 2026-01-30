# CreateInputV3User

## Example Usage

```typescript
import { CreateInputV3User } from "cribl-control-plane/models/operations";

let value: CreateInputV3User = {
  name: "<value>",
  authProtocol: "sha256",
  authKey: "<value>",
  privProtocol: "aes256b",
  privKey: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `name`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `authProtocol`                                                                                    | [models.AuthenticationProtocolOptionsV3User](../../models/authenticationprotocoloptionsv3user.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `authKey`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `privProtocol`                                                                                    | [operations.CreateInputPrivacyProtocol](../../models/operations/createinputprivacyprotocol.md)    | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `privKey`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
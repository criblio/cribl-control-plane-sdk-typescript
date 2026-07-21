# CreateInputV3User

## Example Usage

```typescript
import { CreateInputV3User } from "cribl-control-plane/models/operations";

let value: CreateInputV3User = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | V3 name                                                                                                      |
| `authProtocol`                                                                                               | [operations.CreateInputAuthenticationProtocol](../../models/operations/createinputauthenticationprotocol.md) | :heavy_minus_sign:                                                                                           | Authentication protocol                                                                                      |
| `authKey`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | V3 authentication key                                                                                        |
| `privProtocol`                                                                                               | [operations.CreateInputPrivacyProtocol](../../models/operations/createinputprivacyprotocol.md)               | :heavy_minus_sign:                                                                                           | Privacy protocol                                                                                             |
| `privKey`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | V3 privacy key                                                                                               |
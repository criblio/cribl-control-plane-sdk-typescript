# InputResponseV3User

## Example Usage

```typescript
import { InputResponseV3User } from "cribl-control-plane/models";

let value: InputResponseV3User = {
  name: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | V3 name                                                                                        |
| `authProtocol`                                                                                 | [models.InputResponseAuthenticationProtocol](../models/inputresponseauthenticationprotocol.md) | :heavy_minus_sign:                                                                             | Authentication protocol                                                                        |
| `authKey`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | V3 authentication key                                                                          |
| `privProtocol`                                                                                 | [models.InputResponsePrivacyProtocol](../models/inputresponseprivacyprotocol.md)               | :heavy_minus_sign:                                                                             | Privacy protocol                                                                               |
| `privKey`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | V3 privacy key                                                                                 |
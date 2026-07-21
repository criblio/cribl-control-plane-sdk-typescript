# InputSnmpV3User

## Example Usage

```typescript
import { InputSnmpV3User } from "cribl-control-plane/models";

let value: InputSnmpV3User = {
  name: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | V3 name                                                                                |
| `authProtocol`                                                                         | [models.InputSnmpAuthenticationProtocol](../models/inputsnmpauthenticationprotocol.md) | :heavy_minus_sign:                                                                     | Authentication protocol                                                                |
| `authKey`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | V3 authentication key                                                                  |
| `privProtocol`                                                                         | [models.InputSnmpPrivacyProtocol](../models/inputsnmpprivacyprotocol.md)               | :heavy_minus_sign:                                                                     | Privacy protocol                                                                       |
| `privKey`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | V3 privacy key                                                                         |
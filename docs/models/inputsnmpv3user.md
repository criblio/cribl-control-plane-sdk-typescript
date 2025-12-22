# InputSnmpV3User

## Example Usage

```typescript
import { InputSnmpV3User } from "cribl-control-plane/models";

let value: InputSnmpV3User = {
  name: "<value>",
  authKey: "<value>",
  privKey: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `authProtocol`                                                                         | [models.InputSnmpAuthenticationProtocol](../models/inputsnmpauthenticationprotocol.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `authKey`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `privProtocol`                                                                         | [models.PrivacyProtocol](../models/privacyprotocol.md)                                 | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `privKey`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
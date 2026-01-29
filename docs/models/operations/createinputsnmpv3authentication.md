# CreateInputSNMPv3Authentication

Authentication parameters for SNMPv3 trap. Set the log level to debug if you are experiencing authentication or decryption issues.

## Example Usage

```typescript
import { CreateInputSNMPv3Authentication } from "cribl-control-plane/models/operations";

let value: CreateInputSNMPv3Authentication = {
  v3AuthEnabled: false,
  allowUnmatchedTrap: false,
  v3Users: [
    {
      name: "<value>",
      authProtocol: "sha512",
      authKey: "<value>",
      privProtocol: "aes256b",
      privKey: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `v3AuthEnabled`                                                                                                      | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `allowUnmatchedTrap`                                                                                                 | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Pass through traps that don't match any of the configured users. @{product} will not attempt to decrypt these traps. |
| `v3Users`                                                                                                            | [operations.CreateInputV3User](../../models/operations/createinputv3user.md)[]                                       | :heavy_minus_sign:                                                                                                   | User credentials for receiving v3 traps                                                                              |
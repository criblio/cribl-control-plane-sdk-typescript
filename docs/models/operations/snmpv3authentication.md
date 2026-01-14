# SNMPv3Authentication

Authentication parameters for SNMPv3 trap. Set the log level to debug if you are experiencing authentication or decryption issues.

## Example Usage

```typescript
import { SNMPv3Authentication } from "cribl-control-plane/models/operations";

let value: SNMPv3Authentication = {
  v3AuthEnabled: false,
  allowUnmatchedTrap: true,
  v3Users: [
    {
      name: "<value>",
      authProtocol: "none",
      authKey: "<value>",
      privProtocol: "aes",
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
| `v3Users`                                                                                                            | [operations.V3User](../../models/operations/v3user.md)[]                                                             | :heavy_minus_sign:                                                                                                   | User credentials for receiving v3 traps                                                                              |
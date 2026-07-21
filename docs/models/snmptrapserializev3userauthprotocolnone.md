# SnmpTrapSerializeV3UserAuthProtocolNone

## Example Usage

```typescript
import { SnmpTrapSerializeV3UserAuthProtocolNone } from "cribl-control-plane/models";

let value: SnmpTrapSerializeV3UserAuthProtocolNone = {
  authProtocol: "none",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `authProtocol`                               | *"none"*                                     | :heavy_check_mark:                           | Authentication protocol for the SNMPv3 user. |
| `name`                                       | *string*                                     | :heavy_minus_sign:                           | Username for the SNMPv3 user.                |
| `privProtocol`                               | *string*                                     | :heavy_minus_sign:                           | Privacy protocol for SNMPv3 encryption.      |
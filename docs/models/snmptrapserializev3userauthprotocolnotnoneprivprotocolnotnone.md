# SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone

## Example Usage

```typescript
import { SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone } from "cribl-control-plane/models";

let value: SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone = {
  privKey: "<value>",
  authKey: "<value>",
  name: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `privProtocol`          | *string*                | :heavy_minus_sign:      | N/A                     |
| `privKey`               | *string*                | :heavy_check_mark:      | V3 privacy key          |
| `authProtocol`          | *string*                | :heavy_minus_sign:      | Authentication protocol |
| `authKey`               | *string*                | :heavy_check_mark:      | V3 authentication key   |
| `name`                  | *string*                | :heavy_check_mark:      | Username                |
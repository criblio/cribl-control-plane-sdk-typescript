# SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNone

## Example Usage

```typescript
import { SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNone } from "cribl-control-plane/models";

let value: SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNone = {
  privProtocol: "none",
  authKey: "<value>",
  name: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `privProtocol`          | *"none"*                | :heavy_check_mark:      | N/A                     |
| `authProtocol`          | *string*                | :heavy_minus_sign:      | Authentication protocol |
| `authKey`               | *string*                | :heavy_check_mark:      | V3 authentication key   |
| `name`                  | *string*                | :heavy_check_mark:      | Username                |
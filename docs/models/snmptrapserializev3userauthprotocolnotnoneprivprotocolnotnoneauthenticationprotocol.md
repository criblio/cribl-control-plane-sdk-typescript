# SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNoneAuthenticationProtocol

Authentication protocol for the SNMPv3 user.

## Example Usage

```typescript
import {
  SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNoneAuthenticationProtocol,
} from "cribl-control-plane/models";

let value:
  SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNoneAuthenticationProtocol =
    "sha512";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "md5" | "sha" | "sha224" | "sha256" | "sha384" | "sha512" | Unrecognized<string>
```
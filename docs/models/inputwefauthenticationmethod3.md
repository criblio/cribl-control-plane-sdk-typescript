# InputWefAuthenticationMethod3

How to authenticate incoming client connections

## Example Usage

```typescript
import { InputWefAuthenticationMethod3 } from "cribl-control-plane/models";

let value: InputWefAuthenticationMethod3 = "kerberos";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"clientCert" | "kerberos" | Unrecognized<string>
```
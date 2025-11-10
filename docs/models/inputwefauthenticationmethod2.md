# InputWefAuthenticationMethod2

How to authenticate incoming client connections

## Example Usage

```typescript
import { InputWefAuthenticationMethod2 } from "cribl-control-plane/models";

let value: InputWefAuthenticationMethod2 = "kerberos";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"clientCert" | "kerberos" | Unrecognized<string>
```
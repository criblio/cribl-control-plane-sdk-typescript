# InputWefAuthenticationMethod1

How to authenticate incoming client connections

## Example Usage

```typescript
import { InputWefAuthenticationMethod1 } from "cribl-control-plane/models";

let value: InputWefAuthenticationMethod1 = "kerberos";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"clientCert" | "kerberos" | Unrecognized<string>
```
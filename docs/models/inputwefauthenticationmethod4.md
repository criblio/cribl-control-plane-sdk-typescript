# InputWefAuthenticationMethod4

How to authenticate incoming client connections

## Example Usage

```typescript
import { InputWefAuthenticationMethod4 } from "cribl-control-plane/models";

let value: InputWefAuthenticationMethod4 = "clientCert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"clientCert" | "kerberos" | Unrecognized<string>
```
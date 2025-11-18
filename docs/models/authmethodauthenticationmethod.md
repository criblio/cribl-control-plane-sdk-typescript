# AuthMethodAuthenticationMethod

How to authenticate incoming client connections

## Example Usage

```typescript
import { AuthMethodAuthenticationMethod } from "cribl-control-plane/models";

let value: AuthMethodAuthenticationMethod = "kerberos";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"clientCert" | "kerberos" | Unrecognized<string>
```
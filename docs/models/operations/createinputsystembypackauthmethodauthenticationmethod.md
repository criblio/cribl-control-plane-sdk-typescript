# CreateInputSystemByPackAuthMethodAuthenticationMethod

How to authenticate incoming client connections

## Example Usage

```typescript
import { CreateInputSystemByPackAuthMethodAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackAuthMethodAuthenticationMethod = "kerberos";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"clientCert" | "kerberos" | Unrecognized<string>
```
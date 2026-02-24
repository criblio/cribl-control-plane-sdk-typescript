# CreateInputAuthMethodAuthenticationMethod

How to authenticate incoming client connections

## Example Usage

```typescript
import { CreateInputAuthMethodAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: CreateInputAuthMethodAuthenticationMethod = "clientCert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"clientCert" | "kerberos" | Unrecognized<string>
```
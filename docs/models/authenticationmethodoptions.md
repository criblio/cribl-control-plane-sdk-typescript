# AuthenticationMethodOptions

## Example Usage

```typescript
import { AuthenticationMethodOptions } from "cribl-control-plane/models";

let value: AuthenticationMethodOptions = "clientAssertion_rpc";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual" | "secret" | "clientSecret" | "clientCert" | "clientAssertion" | "clientAssertion_rpc" | Unrecognized<string>
```
# AuthenticationMethodOptions1

## Example Usage

```typescript
import { AuthenticationMethodOptions1 } from "cribl-control-plane/models";

let value: AuthenticationMethodOptions1 = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "clientSecret" | "clientCert" | Unrecognized<string>
```
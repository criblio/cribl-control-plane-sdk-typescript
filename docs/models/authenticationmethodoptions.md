# AuthenticationMethodOptions

## Example Usage

```typescript
import { AuthenticationMethodOptions } from "cribl-control-plane/models";

let value: AuthenticationMethodOptions = "clientCert";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "clientSecret" | "clientCert" | Unrecognized<string>
```
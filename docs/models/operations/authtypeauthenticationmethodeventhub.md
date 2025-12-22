# AuthTypeAuthenticationMethodEventhub

Enter password directly, or select a stored secret

## Example Usage

```typescript
import { AuthTypeAuthenticationMethodEventhub } from "cribl-control-plane/models/operations";

let value: AuthTypeAuthenticationMethodEventhub = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
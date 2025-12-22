# AuthenticationMethodOptions3

Enter API key directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodOptions3 } from "cribl-control-plane/models";

let value: AuthenticationMethodOptions3 = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
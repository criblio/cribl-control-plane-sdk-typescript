# AuthenticationMethodOptionsSasl1

Enter password directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodOptionsSasl1 } from "cribl-control-plane/models";

let value: AuthenticationMethodOptionsSasl1 = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
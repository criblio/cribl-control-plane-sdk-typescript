# AuthenticationMethodOptionsSaslManualSecret

Enter password directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodOptionsSaslManualSecret } from "cribl-control-plane/models";

let value: AuthenticationMethodOptionsSaslManualSecret = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
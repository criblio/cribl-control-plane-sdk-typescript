# AuthenticationMethodOptionsManualSecret

Enter client secret directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodOptionsManualSecret } from "cribl-control-plane/models";

let value: AuthenticationMethodOptionsManualSecret = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
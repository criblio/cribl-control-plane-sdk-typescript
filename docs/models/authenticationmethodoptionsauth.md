# AuthenticationMethodOptionsAuth

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodOptionsAuth } from "cribl-control-plane/models";

let value: AuthenticationMethodOptionsAuth = "manualAPIKey";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual" | "secret" | "manualAPIKey" | "textSecret" | Unrecognized<string>
```
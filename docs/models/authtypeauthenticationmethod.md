# AuthTypeAuthenticationMethod

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { AuthTypeAuthenticationMethod } from "cribl-control-plane/models";

let value: AuthTypeAuthenticationMethod = "manualAPIKey";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "manualAPIKey" | "textSecret" | Unrecognized<string>
```
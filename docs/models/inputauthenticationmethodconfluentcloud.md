# InputAuthenticationMethodConfluentCloud

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { InputAuthenticationMethodConfluentCloud } from "cribl-control-plane/models";

let value: InputAuthenticationMethodConfluentCloud = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
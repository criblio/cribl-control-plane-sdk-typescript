# OutputAuthenticationMethodConfluentCloud

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { OutputAuthenticationMethodConfluentCloud } from "cribl-control-plane/models";

let value: OutputAuthenticationMethodConfluentCloud = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
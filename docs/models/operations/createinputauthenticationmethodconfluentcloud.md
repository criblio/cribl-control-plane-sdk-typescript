# CreateInputAuthenticationMethodConfluentCloud

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { CreateInputAuthenticationMethodConfluentCloud } from "cribl-control-plane/models/operations";

let value: CreateInputAuthenticationMethodConfluentCloud = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
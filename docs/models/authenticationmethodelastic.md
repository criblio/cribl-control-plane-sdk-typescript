# AuthenticationMethodElastic

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodElastic } from "cribl-control-plane/models";

let value: AuthenticationMethodElastic = "manual";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "manual" | "secret" | Unrecognized<string>
```
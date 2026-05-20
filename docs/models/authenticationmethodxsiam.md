# AuthenticationMethodXsiam

Enter a token directly, or provide a secret referencing a token

## Example Usage

```typescript
import { AuthenticationMethodXsiam } from "cribl-control-plane/models";

let value: AuthenticationMethodXsiam = "secret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"token" | "secret" | Unrecognized<string>
```
# AuthenticationMethodAzureLogs

Enter workspace ID and workspace key directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodAzureLogs } from "cribl-control-plane/models";

let value: AuthenticationMethodAzureLogs = "secret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual" | "secret" | Unrecognized<string>
```
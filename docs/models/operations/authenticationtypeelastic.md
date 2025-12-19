# AuthenticationTypeElastic

## Example Usage

```typescript
import { AuthenticationTypeElastic } from "cribl-control-plane/models/operations";

let value: AuthenticationTypeElastic = "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "authTokens" | Unrecognized<string>
```
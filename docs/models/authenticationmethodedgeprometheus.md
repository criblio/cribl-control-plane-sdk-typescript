# AuthenticationMethodEdgePrometheus

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodEdgePrometheus } from "cribl-control-plane/models";

let value: AuthenticationMethodEdgePrometheus = "secret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual" | "secret" | "kubernetes" | Unrecognized<string>
```
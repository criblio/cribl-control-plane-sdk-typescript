# AuthenticationMethodChronicle

## Example Usage

```typescript
import { AuthenticationMethodChronicle } from "cribl-control-plane/models";

let value: AuthenticationMethodChronicle = "serviceAccountSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"serviceAccount" | "serviceAccountSecret" | Unrecognized<string>
```
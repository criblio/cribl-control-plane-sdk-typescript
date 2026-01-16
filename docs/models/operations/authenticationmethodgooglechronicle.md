# AuthenticationMethodGoogleChronicle

## Example Usage

```typescript
import { AuthenticationMethodGoogleChronicle } from "cribl-control-plane/models/operations";

let value: AuthenticationMethodGoogleChronicle = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "serviceAccount" | "serviceAccountSecret" | Unrecognized<string>
```
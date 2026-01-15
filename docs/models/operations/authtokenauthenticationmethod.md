# AuthTokenAuthenticationMethod

Select Secret to use a text secret to authenticate

## Example Usage

```typescript
import { AuthTokenAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: AuthTokenAuthenticationMethod = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"secret" | "manual" | Unrecognized<string>
```
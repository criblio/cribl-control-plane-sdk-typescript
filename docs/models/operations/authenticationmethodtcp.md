# AuthenticationMethodTCP

Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate

## Example Usage

```typescript
import { AuthenticationMethodTCP } from "cribl-control-plane/models/operations";

let value: AuthenticationMethodTCP = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
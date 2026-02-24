# AuthenticationMethodOptionsSasl2

## Example Usage

```typescript
import { AuthenticationMethodOptionsSasl2 } from "cribl-control-plane/models";

let value: AuthenticationMethodOptionsSasl2 = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "certificate" | Unrecognized<string>
```
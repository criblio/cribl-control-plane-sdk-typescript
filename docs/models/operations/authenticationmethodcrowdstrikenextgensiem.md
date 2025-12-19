# AuthenticationMethodCrowdstrikeNextGenSiem

Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate

## Example Usage

```typescript
import { AuthenticationMethodCrowdstrikeNextGenSiem } from "cribl-control-plane/models/operations";

let value: AuthenticationMethodCrowdstrikeNextGenSiem = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
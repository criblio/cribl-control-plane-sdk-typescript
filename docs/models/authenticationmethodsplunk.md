# AuthenticationMethodSplunk

Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate

## Example Usage

```typescript
import { AuthenticationMethodSplunk } from "cribl-control-plane/models";

let value: AuthenticationMethodSplunk = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
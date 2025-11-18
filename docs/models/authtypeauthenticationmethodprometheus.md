# AuthTypeAuthenticationMethodPrometheus

Enter credentials directly, or select a stored secret

## Example Usage

```typescript
import { AuthTypeAuthenticationMethodPrometheus } from "cribl-control-plane/models";

let value: AuthTypeAuthenticationMethodPrometheus = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
# AuthenticationMethodOptionsApi

Enter API key directly, or select a stored secret

## Example Usage

```typescript
import { AuthenticationMethodOptionsApi } from "cribl-control-plane/models";

let value: AuthenticationMethodOptionsApi = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | Unrecognized<string>
```
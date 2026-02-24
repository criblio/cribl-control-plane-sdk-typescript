# CreateOutputSystemByPackAuthenticationMethodXsiam

Enter a token directly, or provide a secret referencing a token

## Example Usage

```typescript
import { CreateOutputSystemByPackAuthenticationMethodXsiam } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackAuthenticationMethodXsiam = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"token" | "secret" | Unrecognized<string>
```
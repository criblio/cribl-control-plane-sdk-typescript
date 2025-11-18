# AuthenticationMethodMinio

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { AuthenticationMethodMinio } from "cribl-control-plane/models";

let value: AuthenticationMethodMinio = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```
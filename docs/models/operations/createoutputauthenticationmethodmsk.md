# CreateOutputAuthenticationMethodMsk

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { CreateOutputAuthenticationMethodMsk } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthenticationMethodMsk = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```
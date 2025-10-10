# OutputSecurityLakeAuthenticationMethod

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { OutputSecurityLakeAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputSecurityLakeAuthenticationMethod = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```
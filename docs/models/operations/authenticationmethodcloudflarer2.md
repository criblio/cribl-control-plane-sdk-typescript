# AuthenticationMethodCloudflareR2

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { AuthenticationMethodCloudflareR2 } from "cribl-control-plane/models/operations";

let value: AuthenticationMethodCloudflareR2 = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "secret" | "manual" | Unrecognized<string>
```
# OutputAuthenticationMethodS3

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { OutputAuthenticationMethodS3 } from "cribl-control-plane/models";

let value: OutputAuthenticationMethodS3 = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```
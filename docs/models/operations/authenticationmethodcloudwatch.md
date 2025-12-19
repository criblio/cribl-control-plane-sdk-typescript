# AuthenticationMethodCloudwatch

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { AuthenticationMethodCloudwatch } from "cribl-control-plane/models/operations";

let value: AuthenticationMethodCloudwatch = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```
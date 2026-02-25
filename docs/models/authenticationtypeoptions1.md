# AuthenticationTypeOptions1

## Example Usage

```typescript
import { AuthenticationTypeOptions1 } from "cribl-control-plane/models";

let value: AuthenticationTypeOptions1 = "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | Unrecognized<string>
```
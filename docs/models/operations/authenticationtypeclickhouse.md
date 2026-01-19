# AuthenticationTypeClickHouse

## Example Usage

```typescript
import { AuthenticationTypeClickHouse } from "cribl-control-plane/models/operations";

let value: AuthenticationTypeClickHouse = "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```
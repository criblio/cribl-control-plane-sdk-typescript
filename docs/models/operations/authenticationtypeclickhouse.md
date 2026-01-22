# AuthenticationTypeClickHouse

## Example Usage

```typescript
import { AuthenticationTypeClickHouse } from "cribl-control-plane/models/operations";

let value: AuthenticationTypeClickHouse = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | Unrecognized<string>
```
# CreateOutputAuthenticationTypeClickHouse

## Example Usage

```typescript
import { CreateOutputAuthenticationTypeClickHouse } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthenticationTypeClickHouse = "sslUserCertificate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | Unrecognized<string>
```
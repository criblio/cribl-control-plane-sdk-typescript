# CreateOutputSystemByPackAuthenticationTypeClickHouse

## Example Usage

```typescript
import { CreateOutputSystemByPackAuthenticationTypeClickHouse } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackAuthenticationTypeClickHouse =
  "sslUserCertificate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | Unrecognized<string>
```
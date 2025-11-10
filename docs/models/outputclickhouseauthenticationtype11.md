# OutputClickHouseAuthenticationType11

## Example Usage

```typescript
import { OutputClickHouseAuthenticationType11 } from "cribl-control-plane/models";

let value: OutputClickHouseAuthenticationType11 = "sslUserCertificate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```
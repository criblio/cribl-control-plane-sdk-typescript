# OutputClickHouseAuthenticationType

## Example Usage

```typescript
import { OutputClickHouseAuthenticationType } from "cribl-control-plane/models/operations";

let value: OutputClickHouseAuthenticationType = "textSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```
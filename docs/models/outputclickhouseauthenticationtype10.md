# OutputClickHouseAuthenticationType10

## Example Usage

```typescript
import { OutputClickHouseAuthenticationType10 } from "cribl-control-plane/models";

let value: OutputClickHouseAuthenticationType10 = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```
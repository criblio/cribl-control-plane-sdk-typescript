# OutputClickHouseAuthenticationType12

## Example Usage

```typescript
import { OutputClickHouseAuthenticationType12 } from "cribl-control-plane/models";

let value: OutputClickHouseAuthenticationType12 = "oauth";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```
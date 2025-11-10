# OutputClickHouseAuthenticationType8

## Example Usage

```typescript
import { OutputClickHouseAuthenticationType8 } from "cribl-control-plane/models";

let value: OutputClickHouseAuthenticationType8 = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```
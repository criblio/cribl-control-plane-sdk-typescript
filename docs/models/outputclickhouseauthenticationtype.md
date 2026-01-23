# OutputClickHouseAuthenticationType

## Example Usage

```typescript
import { OutputClickHouseAuthenticationType } from "cribl-control-plane/models";

let value: OutputClickHouseAuthenticationType = "sslUserCertificate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "sslUserCertificate" | Unrecognized<string>
```
# AuthenticationTypeInfluxdb

InfluxDB authentication type

## Example Usage

```typescript
import { AuthenticationTypeInfluxdb } from "cribl-control-plane/models/operations";

let value: AuthenticationTypeInfluxdb = "textSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```
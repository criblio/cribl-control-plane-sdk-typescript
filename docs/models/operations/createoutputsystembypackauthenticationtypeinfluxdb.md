# CreateOutputSystemByPackAuthenticationTypeInfluxdb

InfluxDB authentication type

## Example Usage

```typescript
import { CreateOutputSystemByPackAuthenticationTypeInfluxdb } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackAuthenticationTypeInfluxdb =
  "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```
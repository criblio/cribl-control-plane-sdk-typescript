# CreateOutputSystemByPackAuthenticationTypeInfluxdb

InfluxDB authentication type

## Example Usage

```typescript
import { CreateOutputSystemByPackAuthenticationTypeInfluxdb } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackAuthenticationTypeInfluxdb =
  "credentialsSecret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```
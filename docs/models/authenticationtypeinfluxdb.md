# AuthenticationTypeInfluxdb

InfluxDB authentication type

## Example Usage

```typescript
import { AuthenticationTypeInfluxdb } from "cribl-control-plane/models";

let value: AuthenticationTypeInfluxdb = "token";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```
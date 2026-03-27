# AuthenticationTypeOptions

OpenTelemetry authentication type

## Example Usage

```typescript
import { AuthenticationTypeOptions } from "cribl-control-plane/models";

let value: AuthenticationTypeOptions = "textSecret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```
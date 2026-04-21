# InputOpenTelemetryAuthenticationType

OpenTelemetry authentication type

## Example Usage

```typescript
import { InputOpenTelemetryAuthenticationType } from "cribl-control-plane/models";

let value: InputOpenTelemetryAuthenticationType = "textSecret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```
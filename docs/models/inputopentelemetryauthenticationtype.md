# InputOpenTelemetryAuthenticationType

OpenTelemetry authentication type

## Example Usage

```typescript
import { InputOpenTelemetryAuthenticationType } from "cribl-control-plane/models";

let value: InputOpenTelemetryAuthenticationType = "oauth";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```
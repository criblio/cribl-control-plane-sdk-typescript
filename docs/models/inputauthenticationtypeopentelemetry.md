# InputAuthenticationTypeOpenTelemetry

OpenTelemetry authentication type

## Example Usage

```typescript
import { InputAuthenticationTypeOpenTelemetry } from "cribl-control-plane/models";

let value: InputAuthenticationTypeOpenTelemetry = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "oauth" | Unrecognized<string>
```